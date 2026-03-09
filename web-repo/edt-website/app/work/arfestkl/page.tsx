import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ARFestKL Case Study | Downtown KL AR Playground | EDT',
  description:
    'How EDT transformed Downtown Kuala Lumpur into a 30-point AR playground — 52,417 AR impressions, 42 artists, and 35 artworks across the city centre.',
}

const results = [
  { metric: 'AR Impressions', result: '52,417' },
  { metric: 'QR Code Scans', result: '12,040' },
  { metric: 'Participating Artists', result: '42' },
  { metric: 'AR Artworks', result: '35' },
]

export default function ARFestKLPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <span>/</span>
            <span className="text-white">ARFestKL</span>
          </nav>
          <span className="edt-badge mb-4 inline-block">AR Event</span>
          <h1 className="display-lg text-white max-w-[800px] mb-6">
            Downtown KL Transformed Into a 30-Point AR Playground.
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-12">
            {[
              { label: 'Client', value: 'ARFestKL' },
              { label: 'Category', value: 'AR Event / Public Festival' },
              { label: 'Technology', value: 'WebAR · 8th Wall · QR Activation' },
              { label: 'Location', value: 'Downtown Kuala Lumpur' },
            ].map((i) => (
              <div key={i.label} className="bg-edt-black p-6">
                <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-1">{i.label}</p>
                <p className="font-sans text-[14px] text-white">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-white/70 mb-8">Results</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((r) => (
              <div key={r.metric} className="border border-white/20 p-6">
                <div className="font-display text-white text-4xl lg:text-5xl leading-none mb-2">{r.result}</div>
                <p className="font-sans text-[12px] font-semibold tracking-wider uppercase text-white/70">{r.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Challenge</span>
            <h2 className="display-md text-white mb-6">The Brief</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              ARFestKL wanted to transform Kuala Lumpur&apos;s city centre into a living art festival —
              bringing together 42 local and international artists to create AR artworks accessible to
              the public without any app download. The challenge was scale: 30+ AR touchpoints across
              a busy urban environment, activated via QR codes.
            </p>
          </div>
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Solution</span>
            <h2 className="display-md text-white mb-6">What We Delivered</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              EDT built 35 WebAR experiences across 30+ Downtown KL locations using 8th Wall — no app
              download required, accessible via any smartphone. Each QR code activated a unique AR
              artwork in-situ, turning the city into an open-air gallery. The result was 52,417 AR
              impressions over the festival period.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-6 block">Technology Stack</span>
          <div className="flex flex-wrap gap-3">
            {['8th Wall WebAR', 'QR Code Activation', 'Geo-located AR', 'No App Download', 'Real-time Analytics'].map((t) => (
              <span key={t} className="font-sans text-[13px] font-semibold text-white border border-white/20 px-4 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-edt-black py-12 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-wrap items-center gap-4">
          <span className="font-sans text-[13px] text-edt-grey">Related:</span>
          <Link href="/services/ar-vr-mr-development" className="btn-ghost">AR / VR / MR Development →</Link>
          <Link href="/services/immersive-events" className="btn-ghost">Immersive Events →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">Ready to activate your city?</h2>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
