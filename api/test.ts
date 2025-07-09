// /api/test.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Health check: curl http://localhost:3000/api/test → Expect 200 OK { "ok": true }
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true });
  }
  
  // For any other method, deny it.
  res.setHeader('Allow', ['GET']);
  return res.status(405).json({ error: 'Method Not Allowed' });
}
