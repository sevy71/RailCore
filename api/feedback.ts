import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are Gemini-2.5, the AI Coach powering only these three RailCore feedback modules: ...`;
// ... (same as your previous)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("API key from env:", process.env.API_KEY);  // Debug log

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const key = process.env.API_KEY;
  if (!key) return res.status(500).json({ error: 'API key not set.' });

  const { question, userAnswer, assessment, tip, personalityResponses } = req.body;
  let userPrompt = '';

  if (assessment === 'PersonalityQuestionnaire' && personalityResponses) {
    // (as before) ... build userPrompt here
  } else {
    // (as before) ... build userPrompt here
  }

  const ai = new GoogleGenAI({ apiKey: key });

  // ---- THIS IS THE NEW SECTION ----
  try {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      {
        role: 'user',
        parts: [{ text: userPrompt }]
      }
    ],
    systemInstruction: SYSTEM_INSTRUCTION
  });

  return res.status(200).json({
    text: response.text ||
      response.candidates?.[0]?.content?.parts?.[0]?.text
  });

} catch (e: any) {
  console.error('Gemini API error:', e);
  return res.status(500).json({
    error: 'Failed to generate AI feedback.',
    details: e?.message || e
  });
}
}