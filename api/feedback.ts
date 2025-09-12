import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from '@google/genai';

// Simple in-memory rate limiter (per serverless instance)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 25; // max requests per window per IP
const ipBuckets = new Map<string, { count: number; windowStart: number }>();

function getClientIp(req: VercelRequest): string {
  const xf = (req.headers['x-forwarded-for'] || '') as string;
  const ip = xf.split(',')[0]?.trim() || (req.socket as any)?.remoteAddress || 'unknown';
  return ip;
}

function rateLimit(req: VercelRequest, res: VercelResponse): boolean {
  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipBuckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) {
    res.setHeader('Retry-After', Math.ceil((bucket.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000).toString());
    res.status(429).json({ error: 'Too many requests. Please try again later.' });
    return false;
  }
  bucket.count += 1;
  return true;
}

// The AI Coach persona and guidelines
const SYSTEM_INSTRUCTION = `You are Gemini-2.5, the AI Coach powering **only** these three RailCore feedback modules:
- CompetencyQuestionModule
- PersonalityQuestionnaire
- InterviewPracticeSection

Your sole responsibility is to generate candidate feedback for these modules. Do **not** modify or suggest any changes to the app’s UI, CSS, or other front-end code.

Feedback Guidelines:
- Analyze the answer for relevance, clarity, and alignment with the assessment or scenario.
- Start with one positive observation.
- Then provide one or two specific, actionable suggestions.
- Tone: professional, concise, encouraging.
- Format: plain text with bold for emphasis; no headings (##) or HTML.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!rateLimit(req, res)) return;

  const key = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured. Please set API_KEY or GEMINI_API_KEY in your environment variables.' });
  }

  const body = (req as any).body || {};
  const { question, userAnswer, assessment, tip, personalityResponses } = body;

  let userPrompt = '';
  if (assessment === 'PersonalityQuestionnaire' && personalityResponses) {
    if (typeof personalityResponses !== 'object' || personalityResponses === null) {
      return res.status(400).json({ error: 'Invalid personalityResponses format.' });
    }
    const entries = Object.entries(personalityResponses);
    if (entries.length === 0 || entries.length > 300) {
      return res.status(400).json({ error: 'Invalid questionnaire size.' });
    }
    for (const [k, v] of entries) {
      const n = Number(v);
      if (!Number.isFinite(n) || n < 1 || n > 5) {
        return res.status(400).json({ error: `Invalid score for ${k}.` });
      }
    }
    const responsesText = JSON.stringify(personalityResponses, null, 2);
    userPrompt = `The user has completed the Personality Questionnaire and is requesting feedback.
- Assessment Context: "${assessment}"
- User's questionnaire answers (question ID to score 1-5): ${responsesText}
- A locally generated summary was also provided as context: "${userAnswer}"

Based on their questionnaire answers, generate a concise 'mini report summary' that the user can use for their application or interview notes. The summary should highlight their strengths using bullet points, and provide actionable advice on how to talk about their personality traits and address any potential areas for clarification during an interview. Structure the output with a "**Key Strengths**" section and an "**Interview Talking Points**" section.`;
  } else {
    const isString = (v: any) => typeof v === 'string' && v.length > 0;
    if (!isString(question) || !isString(userAnswer) || !isString(assessment) || !isString(tip)) {
      return res.status(400).json({ error: 'Missing required fields for competency/interview module type.' });
    }
    const clamp = (s: string, n: number) => s.slice(0, n).trim();
    const q = clamp(String(question), 400);
    const a = clamp(String(userAnswer), 4000);
    const as = clamp(String(assessment), 400);
    const tp = clamp(String(tip), 400);
    if (a.length < 20) {
      return res.status(400).json({ error: 'Answer is too short to assess. Please write at least 20 characters.' });
    }
    userPrompt = `The user is practicing for a Trainee Train Driver position.
- The interview question asked was: "${q}"
- The competency being assessed is: "${as}"
- A helpful tip given to the user was: "${tp}"
- The user's answer is: "${a}"

Provide constructive, concise feedback on their answer.`;
  }

  const ai = new GoogleGenAI({ apiKey: key });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        ],
      },
    });

    const feedbackText = (response as any).text;
    if (!feedbackText) {
      console.error('No text in Gemini response:', JSON.stringify(response, null, 2));
      return res.status(500).json({ error: 'Failed to generate AI feedback text. The response was empty.' });
    }

    return res.status(200).json({ text: feedbackText });
  } catch (e: any) {
    console.error('Gemini API error:', e);
    return res.status(500).json({
      error: 'Failed to generate AI feedback.',
      details: e?.message || 'An unknown error occurred while contacting the AI service.'
    });
  }
}

