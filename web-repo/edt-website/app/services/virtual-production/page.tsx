import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Virtual Production Malaysia | ARVENA | Unreal Engine Live Events | EDT',
  description:
    'Virtual production with Unreal Engine backgrounds for live streaming, branded content, and panel shows in Malaysia. No physical set needed — just ARVENA.',
}

const arvenaCapabilities = [
  'Fully digital set backgrounds that respond to camera movement',
  'Live call integration for hybrid shows',
  'Real-time product shots and branded content layers',
  'PTZ camera sync (Panasonic) for smooth tracking',
  'Deployment in any venue — studio, hotel ballroom, or event space',
]

const productions = [
  { title: 'AirAsia Supersale', desc: 'Branded live stream with virtual staging' },
  { title: 'Silau Maya', desc: 'Experimental immersive digital stage for live music' },
  { title: 'Mobile Legends: Bang Bang', desc: 'SupremaSEA music video (Unreal Engine, real-time render)' },
]

const faqs = [
  {
    q: 'How much does virtual production cost compared to a physical set?',
    a: 'Virtual production typically reduces set costs by 60–80% while offering more creative flexibility and faster turnaround. Contact us for a custom quote based on your production requirements.',
  },
  {
    q: 'Can ARVENA be used for live events?',
    a: 'Yes. ARVENA has been deployed for live panel talks, live streaming shows, and concert productions. The platform supports real-time audience interaction integration.',
  },
  {
    q: 'Do you provide crew and equipment?',
    a: 'EDT provides the full technical setup including ARVENA software, PTZ cameras, and technical crew. You provide the talent and the venue.',
  },
]

export default function VirtualProductionPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Virtual Production</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Service</span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">Virtual Production</h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            Replace physical sets with photorealistic digital environments — displayed in real time via
            Unreal Engine and synced with camera movement. The result is a fully immersive-looking studio
            environment without the cost, logistics, or limitations of a physical set.
          </p>
          <Link href="/contact" className="btn-primary">Plan Your Production →</Link>
        </div>
      </section>

      {/* ARVENA PLATFORM */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Proprietary Platform</span>
            <h2 className="display-md text-white mb-6">ARVENA Platform</h2>
            <p className="font-sans text-[15px] text-white/70 leading-relaxed mb-8">
              ARVENA is EDT&apos;s proprietary virtual production platform built on Unreal Engine. It enables
              professional-grade virtual productions deployable in any venue.
            </p>
            <Link href="/products/arvena" className="btn-ghost">Learn about ARVENA →</Link>
          </div>
          <div className="flex flex-col gap-4">
            {arvenaCapabilities.map((c) => (
              <div key={c} className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-edt-blue flex-shrink-0 mt-1">→</span>
                <p className="font-sans text-[14px] text-white/75">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST CALLOUT */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <div className="font-display text-white" style={{ fontSize: 'clamp(56px, 8vw, 96px)', lineHeight: 1 }}>
            60–80%
          </div>
          <p className="font-sans text-[16px] text-white/80 mt-3">
            Reduction in set costs vs. physical productions
          </p>
        </div>
      </section>

      {/* PAST PRODUCTIONS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Track Record</span>
          <h2 className="display-md text-white mb-12">Past Productions Using ARVENA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {productions.map((p) => (
              <div key={p.title} className="bg-surface p-8">
                <h3 className="font-sans text-[16px] font-semibold text-white mb-2">{p.title}</h3>
                <p className="font-sans text-[13px] text-edt-grey">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">FAQ</span>
          <h2 className="display-md text-white mb-12">Common Questions</h2>
          <div className="flex flex-col border-t border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/10 py-8">
                <h3 className="font-sans text-[16px] font-semibold text-white mb-3">{f.q}</h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">Plan Your Virtual Production</h2>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Contact EDT →
          </Link>
        </div>
      </section>
    </>
  )
}
