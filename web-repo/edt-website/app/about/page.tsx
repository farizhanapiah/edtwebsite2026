import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About EDT | Malaysia's Premier Experiential Technology Studio",
  description:
    "Meet the team behind Malaysia's most immersive experiences. EDT has delivered 50+ projects across 12 countries for Petronas, AirAsia, Sunway and more.",
  alternates: {
    canonical: '/about',
    languages: { 'en-MY': '/about', 'x-default': '/about' },
  },
}

const faqs = [
  {
    q: 'What does EDT (Experiential Design Team) do?',
    a: "EDT is a Kuala Lumpur-based creative technology studio that builds immersive AR, VR, MR, AI avatar, projection mapping and interactive installation experiences for brands, government, tourism and events. We work end-to-end — from concept and creative direction through technical delivery, on-site commissioning and post-event support.",
  },
  {
    q: 'Where is EDT based and which markets do you serve?',
    a: "EDT is headquartered in Kuala Lumpur, Malaysia. The studio has delivered projects across 12+ countries including Malaysia, Singapore, Qatar, Hong Kong and Japan, and routinely takes briefs from anywhere in Southeast Asia and the wider Asia-Pacific region.",
  },
  {
    q: 'What technologies and tools does EDT specialise in?',
    a: 'Core stack includes Unity and Unreal Engine for real-time 3D, TouchDesigner for interactive media systems, 8th Wall for WebAR, AI pipelines built on OpenAI / Pinecone / Supabase / N8N, ElevenLabs for TTS voice, projection mapping with Epson 7K–10K ANSI projectors, and XR hardware including Meta Quest 3, LiDAR sensors and LED P2.0–P2.5 wall systems.',
  },
  {
    q: 'How do project enquiries work?',
    a: 'Send a brief via the contact form. EDT responds within 24 hours on Malaysian working days (Monday–Friday, 9am–6pm MYT). Initial response is followed by a discovery call, then a tailored proposal covering concept, scope, timeline and investment.',
  },
  {
    q: 'Does EDT work with agencies?',
    a: "Yes. EDT runs a white-label agency partnership programme — agencies can pitch immersive AR, VR, AI and interactive capabilities to their clients without building an internal R&D team. Details are on the Partners page.",
  },
  {
    q: 'Has EDT received any awards or recognition?',
    a: 'Recent recognition includes Management Initiative of the Year — Malaysia (2025), Excellence Awards Malaysia (2024), and a Malaysia Book of Records entry (2024) for the MetaHRise multiplayer VR onboarding project delivered for MCMC.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const principles = [
  {
    num: '01',
    title: 'Technology must feel magical, not technical.',
    body: 'We make complex systems simple, intuitive, and emotionally resonant.',
  },
  {
    num: '02',
    title: 'Experiences should be immersive but frictionless.',
    body: "The best experience is one people step into without noticing the tech.",
  },
  {
    num: '03',
    title: 'AI should personalize without overwhelming.',
    body: 'Smart systems that serve the user — not systems that need to be served.',
  },
  {
    num: '04',
    title: 'Malaysia can export world-class creative technology.',
    body: "We're building SEA's leading immersive tech ecosystem, not just serving it.",
  },
]

const capabilities = [
  'Unity & Unreal Engine development',
  'TouchDesigner interactive systems',
  'AI pipeline architecture (OpenAI, Pinecone, Supabase, N8N)',
  'ElevenLabs TTS integration',
  'Projection mapping (Epson 7K–10K ANSI)',
  'XR hardware: Meta Quest 3, LiDAR, LED P2.0–P2.5',
  '3D modelling & digital twins',
]

const awards = [
  { year: '2025', award: 'Management Initiative of the Year', body: 'Malaysia' },
  { year: '2024', award: 'Excellence Awards', body: 'Malaysia' },
  { year: '2024', award: 'Book of Records', body: 'Malaysia' },
]

const partnerGroups = [
  { label: 'Universities', names: "UiTM · Taylor\'s · MMU · Sunway" },
  { label: 'Government', names: 'MDEC · MCMC · Sarawak Tourism Board' },
  { label: 'Corporates', names: 'CelcomDigi · Petrosains · TNB · Prudential' },
  { label: 'Creative Spaces', names: 'GMBB' },
  { label: 'International', names: 'Doha · Hong Kong · Singapore · Japan' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden pixel-grid border-b border-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-edt-blue/20" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            About EDT
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            We Are EDT.
          </h1>
          <p className="font-sans text-[18px] text-edt-grey leading-relaxed max-w-[600px] italic">
            We create metaverses that fulfill client needs — deployed from mixed reality activations to full immersive VR.
          </p>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────── */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
                Who We Are
              </span>
              <p className="font-sans text-[17px] text-white/80 leading-relaxed mb-4">
                Experiential Design Team (EDT) is a Kuala Lumpur-based creative technology company
                founded to close the gap between imagination and experience. We operate at the
                intersection of experiential design, emerging technology, business strategy, and
                immersive storytelling.
              </p>
              <p className="font-sans text-[17px] text-white/80 leading-relaxed">
                We don&apos;t just build activations. We build platforms, pipelines, and ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { n: '50+', l: 'Projects Delivered' },
                { n: '12', l: 'Countries Reached' },
                { n: '3', l: 'National Awards' },
                { n: '6', l: 'Proprietary Products' },
              ].map((s) => (
                <div key={s.l} className="bg-edt-black p-8 text-center">
                  <div
                    className="font-display text-white mb-1"
                    style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <p className="font-sans text-[12px] font-semibold tracking-wider uppercase text-edt-grey">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR ─────────────────────────────────────────── */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Our Principles
          </span>
          <h2 className="display-md text-white mb-16 max-w-[600px]">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {principles.map((p) => (
              <div key={p.num} className="bg-surface p-8 lg:p-10">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-edt-blue/60 mb-4 block">
                  {p.num}
                </span>
                <h3 className="font-sans text-[17px] font-semibold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section className="bg-edt-black py-24 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Team
          </span>
          <h2 className="display-md text-white mb-16">Our Team</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            <div className="bg-edt-black p-8 lg:p-10">
              <div className="mb-6">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-edt-blue/10 border border-edt-blue/20 flex items-center justify-center mb-6">
                  <span className="font-display text-edt-blue text-2xl">FH</span>
                </div>
                <span className="edt-badge mb-3 inline-block">Founder</span>
                <h3 className="font-display text-white text-2xl uppercase mb-1">Fariz Hanapiah</h3>
                <p className="font-sans text-[13px] text-edt-blue mb-4">
                  Creative Tech Director
                </p>
                <p className="font-sans text-[15px] text-white/70 leading-relaxed">
                  A creative technologist and entrepreneur building at the intersection of immersive
                  technology and intelligent automation. Fariz has led EDT to deliver projects
                  across Malaysia, Singapore, the Middle East, and beyond.
                </p>
              </div>
            </div>

            <div className="bg-edt-black p-8 lg:p-10">
              <h4 className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-grey mb-6">
                Core Capabilities
              </h4>
              <ul className="flex flex-col gap-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-edt-blue mt-1 text-xs flex-shrink-0">→</span>
                    <span className="font-sans text-[14px] text-white/70">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ──────────────────────────────────────────────── */}
      <section className="bg-surface py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Recognition
          </span>
          <h2 className="display-md text-white mb-12">Awards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {awards.map((a) => (
              <div key={a.award} className="bg-surface p-8">
                <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-3 block">
                  {a.year}
                </span>
                <h3 className="font-sans text-[16px] font-semibold text-white mb-1">{a.award}</h3>
                <p className="font-sans text-[13px] text-edt-grey">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────────── */}
      <section className="bg-edt-black py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Network
          </span>
          <h2 className="display-md text-white mb-12">Our Partners & Collaborators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerGroups.map((g) => (
              <div key={g.label} className="border border-white/10 p-6">
                <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-3">
                  {g.label}
                </p>
                <p className="font-sans text-[14px] text-white/70">{g.names}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            FAQ
          </span>
          <h2 className="display-md text-white mb-12 max-w-[700px]">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="bg-surface p-8 lg:p-10">
                <h3 className="font-sans text-[16px] font-semibold text-white mb-3 leading-snug">
                  {f.q}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-edt-blue py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <h2 className="display-md text-white max-w-[500px]">
            Let&apos;s build something extraordinary together.
          </h2>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  )
}
