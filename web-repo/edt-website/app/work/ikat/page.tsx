import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IKAT Malaysia Case Study | Immersive Textile Exhibition | EDT',
  description:
    'How EDT brought Malaysian textile heritage to life — RM 3.2M in media value, 5,822 visitors, 382,720 social reach, across 3 cities.',
}

const results = [
  { metric: 'Visitors', result: '5,822' },
  { metric: 'Media Value', result: 'RM 3.2M' },
  { metric: 'Social Reach', result: '382,720' },
  { metric: 'Cities', result: '3' },
]

export default function IKATPage() {
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
            <span className="text-white">IKAT Malaysia</span>
          </nav>
          <span className="edt-badge mb-4 inline-block">Immersive Exhibition</span>
          <h1 className="display-lg text-white max-w-[800px] mb-6">
            Textile Heritage That Generated RM 3.2M in Media Value.
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-12">
            {[
              { label: 'Client', value: 'IKAT Malaysia' },
              { label: 'Category', value: 'Immersive Exhibition' },
              { label: 'Technology', value: 'Interactive Installations · AR · Projection' },
              { label: 'Cities', value: 'Kuala Lumpur · Sarawak · Johor' },
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

      {/* CONTENT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Challenge</span>
            <h2 className="display-md text-white mb-6">The Brief</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              IKAT Malaysia sought to revitalize interest in Malaysia&apos;s traditional textile heritage —
              particularly among younger audiences — and tour the experience across 3 cities. The
              challenge was making traditional craft culturally compelling and shareable in a digital-first
              world.
            </p>
          </div>
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Solution</span>
            <h2 className="display-md text-white mb-6">What We Created</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              EDT designed and produced a touring immersive exhibition that wove together interactive
              installations, projection mapping, AR, and tangible textile experiences into a single
              cohesive journey. The result was an exhibition that generated massive earned media
              coverage and viral social content.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-6 block">Technology Used</span>
          <div className="flex flex-wrap gap-3">
            {['Projection Mapping', 'Interactive Installations', 'WebAR', 'Generative Art', 'TouchDesigner'].map((t) => (
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
          <Link href="/services/immersive-events" className="btn-ghost">Immersive Events →</Link>
          <Link href="/services/projection-mapping" className="btn-ghost">Projection Mapping →</Link>
          <Link href="/industries/tourism-heritage" className="btn-ghost">Tourism & Heritage →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">Ready to build your exhibition?</h2>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Talk to EDT →
          </Link>
        </div>
      </section>
    </>
  )
}
