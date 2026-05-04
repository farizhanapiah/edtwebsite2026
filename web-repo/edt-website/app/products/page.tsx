import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products | RiaReality, Hoomans.ai, MimpiLab, CheritAR, WayangMind, ARVENA',
  description:
    'Six immersive technology platforms built by EDT. From AI holographic avatars to mixed reality gaming, AI photobooths, heritage AR, VR wellness, and virtual production.',
  alternates: {
    canonical: '/products',
    languages: { 'en-MY': '/products', 'x-default': '/products' },
  },
}

const products = [
  {
    badge: 'MR Platform',
    title: 'RiaReality',
    tagline: 'The one-hand-onboarding mixed reality platform for physical spaces.',
    apps: ['Entertainment', 'Education', 'Real Estate', 'Heritage'],
    highlight: 'Multiplayer MR games, spatial tracking, no headset needed',
    href: '/products/riaReality',
    accent: '#2D2DFF',
  },
  {
    badge: 'AI Product',
    title: 'Hoomans.ai',
    tagline: 'AI avatars that know your business.',
    apps: ['Customer service', 'Museum guide', 'Brand ambassador', 'Event host'],
    highlight: 'RAG knowledge base, 86" Stellarlink display, ElevenLabs TTS',
    href: '/products/hoomans-ai',
    accent: '#00E5FF',
  },
  {
    badge: 'AI Photobooth',
    title: 'MimpiLab',
    tagline: '100% controllable AI photos, perfectly on theme.',
    apps: ['Corporate events', 'Malls', 'Conferences', 'Brand activations'],
    highlight: 'Real-time AI photo generation, brand-matched themes, instant sharing',
    href: '/products/mimpilab',
    accent: '#2D2DFF',
  },
  {
    badge: 'AR Heritage',
    title: 'CheritAR',
    tagline: 'Buildings that speak. History that lives.',
    apps: ['Heritage sites', 'Museums', 'Tourism', 'City placemaking'],
    highlight: '12+ countries reached, 1,442 AR impressions, AI real-time conversation',
    href: '/products/cheritar',
    accent: '#FF9900',
  },
  {
    badge: 'VR Wellness',
    title: 'WayangMind',
    tagline: 'Mindfulness that meets you where you are.',
    apps: ['Corporate wellness', 'Healthcare', 'Youth', 'VR therapy'],
    highlight: 'AI-personalized sessions, localized SEA content, App + VR + Space',
    href: '/products/wayangmind',
    accent: '#00BFA5',
  },
  {
    badge: 'Virtual Production',
    title: 'ARVENA',
    tagline: 'No set. No limits. Pure story.',
    apps: ['Live streaming', 'Branded content', 'Music videos', 'Panel shows'],
    highlight: 'Unreal Engine environments, PTZ camera sync, minimal setup',
    href: '/products/arvena',
    accent: '#FF2D2D',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Our Products
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Six Platforms.<br />One Ecosystem.
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[560px]">
            EDT doesn&apos;t just deliver bespoke projects. We build and own reusable platforms —
            deployable at events, permanent installations, and licensed to partners worldwide.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-edt-black py-0 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group border border-white/10 hover:border-edt-blue bg-surface flex flex-col gap-0 transition-colors overflow-hidden"
              >
                {/* Window chrome bar */}
                <div className="window-bar">
                  <div className="window-dot" />
                  <div className="window-dot" />
                  <div className="window-dot" />
                  <span className="ml-2 font-sans text-[10px] font-semibold tracking-widest uppercase text-white/30">
                    {p.title.toLowerCase()}.exe
                  </span>
                </div>

                <div className="p-6 lg:p-8 flex flex-col flex-1 gap-4">
                  <span className="edt-badge self-start">{p.badge}</span>
                  <h2 className="display-sm text-white">{p.title}</h2>
                  <p className="font-sans text-[14px] text-edt-grey leading-relaxed flex-1">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.apps.map((a) => (
                      <span key={a} className="font-sans text-[10px] text-white/40 border border-white/10 px-2 py-1">
                        {a}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-[12px] text-edt-grey/60 border-t border-white/10 pt-4">
                    {p.highlight}
                  </p>
                  <span className="btn-ghost text-[12px]">Explore {p.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-3">Want to licence or white-label?</h2>
            <p className="font-sans text-[15px] text-white/80">
              Agencies and corporate partners can deploy EDT products under their own brand.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/partners" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
              Partner Programme →
            </Link>
            <Link href="/contact" className="btn-primary bg-white text-edt-blue hover:bg-white/90 flex-shrink-0">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
