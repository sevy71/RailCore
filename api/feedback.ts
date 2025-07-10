
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are a professional, expert interview coach for RailCore, a company that prepares candidates for train driver positions. Your ONLY function is to provide direct, constructive feedback on a user's practice interview answer.
- NEVER mention that you are an AI, a large language model, or Gemini.
- NEVER introduce yourself or use pleasantries.
- ALWAYS provide feedback in a professional, encouraging, but direct tone.
- Your feedback MUST be concise and actionable.
- Start the feedback directly. For example: "This is a solid start, but..." or "Your answer clearly uses the STAR method..."
- After the main feedback, provide ONE brief, clearly marked "💡 Tip:" for improvement.
- DO NOT add any other information, disclaimers, or text.
Your entire response should focus only on analyzing the user's answer against the provided criteria and giving one tip.`;


export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Use API_KEY from Vercel env, with a fallback to GEMINI_API_KEY for local dev from .env file
  const key = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured. Please set API_KEY or GEMINI_API_KEY in your environment variables.' });
  }

  const { question, userAnswer, assessment, tip } = req.body;
  let userPrompt = '';

  // Handle the two distinct feedback use cases
  if (assessment === 'PersonalityQuestionnaire' && userAnswer) {
    // This use case is for generating interview talking points from the questionnaire's pre-generated summary
    userPrompt = `A user has completed a personality questionnaire to prepare for a train driver interview.

Here is an automated summary of their results, which you must use as context:
---
${userAnswer}
---

Your task is to rephrase this summary into a set of actionable, personalized talking points the user can use in an interview.
- Start with a strong, positive opening based on their strengths.
- Frame their key traits as bullet points. For each point, suggest how they can talk about it in an interview, using phrases like "You can mention that..." or "Highlight your ability to...".
- Keep it concise and encouraging.
- Focus ONLY on creating talking points. Do not repeat the scores or the raw summary.`;
  } else if (question && userAnswer && assessment && tip) {
    // This use case is for standard interview question feedback
    userPrompt = `The user is practicing for a structured interview for a train driver position.

The question they were asked is:
"${question}"

The user's answer is:
"${userAnswer}"

Here is the internal assessment criteria for this question:
- What it assesses: "${assessment}"
- A hint for a good answer: "${tip}"

Analyze the user's answer based *only* on the provided criteria and hint. Provide concise, direct feedback and one improvement tip.`;
  } else {
    return res.status(400).json({ error: 'Invalid request body. Missing required fields for feedback.' });
  }

  const ai = new GoogleGenAI({ apiKey: key });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // Add safety settings to reduce chances of refusal for safe content
        safetySettings: [
            {
              category: HarmCategory.HARM_CATEGORY_HARASSMENT,
              threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
              category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
              threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
             {
              category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
              threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
             {
              category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
              threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
        ],
      }
    });
    
    const feedbackText = response.text;

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
