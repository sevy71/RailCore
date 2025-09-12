// /api/og.ts
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

function sanitize(text: string, max = 120) {
  const s = (text || '').toString().trim();
  return s.slice(0, max).replace(/[\n\r]+/g, ' ');
}

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = sanitize(searchParams.get('title') || 'RailCore');
  const subtitle = sanitize(searchParams.get('subtitle') || 'Train Driver Career Guide');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#2A4B7C',
          color: 'white',
          padding: '64px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: 'white',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2A4B7C',
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            RC
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>RailCore</div>
        </div>
        <div style={{ height: 24 }} />
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 28, color: '#A8D08D' }}>{subtitle}</div>
        <div style={{ position: 'absolute', bottom: 32, right: 48, fontSize: 24, opacity: 0.9 }}>railcore.co.uk</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

