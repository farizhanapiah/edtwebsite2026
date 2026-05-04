import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'EDT — Experiential Design Team. Immersive AR, VR, MR & AI Avatars for Malaysia and Southeast Asia.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 55%, #0F1A4A 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              background: '#2D2DFF',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#2D2DFF',
            }}
          >
            Experiential Design Team
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.0,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            We Build Experiences That Can&apos;t Be Ignored.
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#A0A0A8',
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            AR · VR · MR · AI Avatars · Projection Mapping
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 28,
            fontSize: 20,
            color: '#A0A0A8',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          <span>Kuala Lumpur · Southeast Asia · Beyond</span>
          <span style={{ color: '#FFFFFF' }}>weareedt.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
