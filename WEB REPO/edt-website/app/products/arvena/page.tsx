import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ARVENA | Virtual Production Platform Malaysia | Unreal Engine | EDT',
  description: "ARVENA is EDT's proprietary virtual production platform. Replace physical sets with Unreal Engine environments for live streaming, branded content, and music video production.",
}

const capabilities = [
  {
    label: 'Digital Backgrounds & Environments',
    desc: 'Photorealistic Unreal Engine environments replace physical sets — from branded studio spaces to impossible worlds. Every background is custom-built to your creative brief.',
  },
  {
    label: 'Live Call & Broadcast Integration',
    desc: 'ARVENA integrates seamlessly with live streaming platforms and broadcast workflows — Zoom, OBS, vMix, and professional broadcast SDI output. Real-time environment switching during live events.',
  },
  {
    label: 'Real-Time Product Visualization',
    desc: 'Place true-to-scale, photorealistic 3D product models inside live broadcasts and branded content — without a physical product present. Ideal for launches, lookbooks, and sales presentations.',
  },
  {
    label: 'PTZ Camera Sync',
    desc: 'ARVENA syncs with PTZ (pan-tilt-zoom) robotic cameras for automated shot sequencing, virtual camera movement, and cinematic production values without a full camera crew.',
  },
  {
    label: 'Any Venue, Any Space',
    desc: 'ARVENA is portable — deployable as a self-contained production unit in any space with sufficient room for a green screen or LED wall. Not limited to a permanent studio.',
  },
]

const pastProductions = [
  {
    title: 'AirAsia Supersale',
    client: 'AirAsia',
    desc: 'Virtual production for the AirAsia Supersale live broadcast — dynamic branded environments including aviation-themed virtual sets, real-time destination backgrounds, and product visualization for campaign offers.',
    tags: ['Live Broadcast', 'Branded Content', 'AirAsia'],
  },
  {
    title: 'Silau Maya',
    client: 'Music Video Production',
    desc: 'A full music video produced entirely using ARVENA — replacing all physical set builds with Unreal Engine environments. Delivered a cinematic visual palette at a fraction of traditional music video production cost.',
    tags: ['Music Video', 'Unreal Engine', 'Virtual Set'],
  },
  {
    title: 'Mobile Legends SupremaSEA',
    client: 'Moonton / Mobile Legends',
    desc: 'Virtual production broadcast environments for the Mobile Legends SupremaSEA esports event — custom arena-themed virtual sets, real-time graphics integration, and multi-camera virtual production.',
    tags: ['Esports Broadcast', 'Live Production', 'Gaming'],
  },
]

const comparison = [
  { aspect: 'Set Build Cost', physical: 'RM 15,000–80,000+ per production', arvena: 'One-time 3D asset cost, reusable' },
  { aspect: 'Setup Time', physical: '2–5 days on-site construction', arvena: '4–8 hours deployment and calibration' },
  { aspect: 'Location Flexibility', physical: 'Fixed to physical set location', arvena: 'Any venue with sufficient space' },
  { aspect: 'Environment Changes', physical: 'Requires rebuilding or redressing', arvena: 'Real-time switch in under 30 seconds' },
  { aspect: 'Travelling Production', physical: 'Transport and rebuild costs', arvena: 'Transportable in flight cases' },
  { aspect: 'Cost Reduction', physical: '—', arvena: '60–80% vs equivalent physical production' },
]

const deploymentOptions = [
  {
    option: 'Event Hire',
    desc: 'ARVENA available as a day-rate or project-based hire for product launches, live broadcasts, brand films, and music videos. Includes EDT virtual production crew, Unreal Engine operator, and all technical infrastructure.',
  },
  {
    option: 'Permanent Studio',
    desc: 'EDT designs and installs permanent ARVENA studio setups for broadcasters, content studios, and corporate content teams — including LED volume, lighting rig, camera package, and system integration.',
  },
]

export default function ArvenaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">ARVENA</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            No Set. No Limits. Pure Story.
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            ARVENA is EDT's proprietary virtual production platform — replacing physical sets with real-time Unreal Engine environments for live streaming, branded content, music videos, and broadcast production. 60–80% cost reduction. Zero set builds.
          </p>
          <Link href="/contact" className="btn-primary">Book a ARVENA Session →</Link>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
                What It Is
              </span>
              <h2 className="display-md text-white mb-8">
                Virtual Production Without a Hollywood Budget
              </h2>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                ARVENA brings the same virtual production technology used on The Mandalorian and major Hollywood productions to the Malaysian market — scaled for commercial content, brand productions, and live events.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                It combines Unreal Engine real-time rendering, LED volume or green screen compositing, and PTZ camera automation into a single deployable production unit — operated by EDT's virtual production crew.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                The result: cinematic production value at a fraction of the cost, with unlimited creative flexibility and zero set build logistics.
              </p>
            </div>
            <div className="border border-white/10 p-8">
              <div className="window-bar mb-6">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="space-y-4">
                {[
                  ['Engine', 'Unreal Engine 5'],
                  ['Output', 'Live broadcast, recorded content, streaming'],
                  ['Camera Support', 'PTZ robotic, handheld, crane/jib'],
                  ['Compositing', 'LED volume & green screen'],
                  ['Deployment', 'Event hire & permanent studio'],
                  ['Cost Reduction', '60–80% vs physical set production'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start border-b border-white/10 pb-4">
                    <span className="font-display text-[11px] uppercase tracking-[0.08em] text-edt-grey">{label}</span>
                    <span className="font-sans text-[13px] text-white text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Capabilities
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            What ARVENA Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.label} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-edt-blue mb-3">
                  {cap.label}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST PRODUCTIONS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Past Productions
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Produced with ARVENA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pastProductions.map((prod) => (
              <div key={prod.title} className="border border-white/10 p-8">
                <div className="window-bar mb-6">
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="window-dot" />
                </div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-2">
                  {prod.client}
                </p>
                <h3 className="font-display text-[16px] uppercase tracking-[0.06em] text-white mb-4">
                  {prod.title}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed mb-6">{prod.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prod.tags.map((tag) => (
                    <span key={tag} className="edt-badge">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/work" className="btn-ghost">View All Productions →</Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            ARVENA vs Physical Set
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            The Numbers Don't Lie
          </h2>
          <div className="border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 px-8 py-4 bg-surface border-b border-white/10">
              <span className="font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Aspect</span>
              <span className="font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Physical Set</span>
              <span className="font-display text-[11px] uppercase tracking-[0.1em] text-edt-blue">ARVENA</span>
            </div>
            {comparison.map((row) => (
              <div key={row.aspect} className="grid grid-cols-3 gap-4 px-8 py-6 border-b border-white/10 last:border-b-0">
                <span className="font-display text-[12px] uppercase tracking-[0.06em] text-white">
                  {row.aspect}
                </span>
                <span className="font-sans text-[14px] text-edt-grey">{row.physical}</span>
                <span className={`font-sans text-[14px] ${row.aspect === 'Cost Reduction' ? 'text-edt-blue font-semibold' : 'text-white'}`}>
                  {row.arvena}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT OPTIONS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Deployment Options
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Two Ways to Work with ARVENA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deploymentOptions.map((opt) => (
              <div key={opt.option} className="border border-white/10 p-10">
                <h3 className="font-display text-[18px] uppercase tracking-[0.06em] text-white mb-4">
                  {opt.option}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">
            Ready to Drop the Set and Keep the Story?
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Book ARVENA →
          </Link>
        </div>
      </section>
    </>
  )
}
