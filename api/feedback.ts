// /api/feedback.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

// The AI Coach persona and guidelines from the specification
const SYSTEM_INSTRUCTION = `You are Gemini-2.5, the AI Coach powering **only** these three RailCore feedback modules:
- CompetencyQuestionModule
- PersonalityQuestionnaire
- InterviewPracticeSection

Your sole responsibility is to generate candidate feedback for these modules. Do **not** modify or suggest any changes to the app’s UI, CSS, or other front-end code.

**Feedback Guidelines:**
- Analyze the answer for relevance, clarity, and alignment with the assessment or scenario.
- Start with one positive observation.
- Then provide one or two specific, actionable suggestions.
- Tone: professional, concise, encouraging.
- Format: plain text with bold for emphasis; no headings (##) or HTML.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // On non-POST requests, return HTTP 405.
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // If process.env.API_KEY is missing or invalid, return HTTP 500.
  const key = process.env.API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not set.' });
  }

  const { question, userAnswer, assessment, tip, personalityResponses } = req.body;

  let userPrompt = '';

  // Differentiate module type based on request body
  if (assessment === 'PersonalityQuestionnaire' && personalityResponses) {
    // Logic for Personality Questionnaire
    if (typeof personalityResponses !== 'object' || personalityResponses === null) {
      return res.status(400).json({ error: 'Invalid personalityResponses format.' });
    }
    const responsesText = JSON.stringify(personalityResponses, null, 2);
    userPrompt = `The user has completed the Personality Questionnaire and is requesting feedback.
- Assessment Context: "${assessment}"
- User's questionnaire answers (question ID to score 1-5): ${responsesText}
- A locally generated summary was also provided as context: "${userAnswer}"

Based on their questionnaire answers, generate a concise 'mini report summary' that the user can use for their application or interview notes. The summary should highlight their strengths using bullet points, and provide actionable advice on how to talk about their personality traits and address any potential areas for clarification during an interview. Structure the output with a "**Key Strengths**" section and an "**Interview Talking Points**" section.`;

  } else {
    // Logic for CompetencyQuestionModule & InterviewPracticeSection
    if (question === undefined || userAnswer === undefined || assessment === undefined || tip === undefined) {
      return res.status(400).json({ error: 'Missing required fields for competency/interview module type.' });
    }
    userPrompt = `The user is practicing for a Trainee Train Driver position.
- The interview question asked was: "${question}"
- The competency being assessed is: "${assessment}"
- A helpful tip given to the user was: "${tip}"
- The user's answer is: "${userAnswer}"

Provide constructive, concise feedback on their answer.`;
  }

  const ai = new GoogleGenAI({ apiKey: key });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });
    
    // Return only the specified JSON object
    return res.status(200).json({ text: response.text });

  } catch (e: any) {
    console.error('Gemini API error:', e);
    return res.status(500).json({ error: 'Failed to generate AI feedback.' });
  }
}
