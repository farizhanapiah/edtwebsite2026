import type { Metadata } from 'next'
import Image from 'next/image'
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

const clients = [
  { name: 'Petronas',          src: '/images/clients/client_petronas.png' },
  { name: 'AirAsia',           src: '/images/clients/client_airasia.png' },
  { name: 'Malaysia Airlines', src: '/images/clients/client_malaysiaairlines.png' },
  { name: 'Sunway',            src: '/images/clients/client_sunway.png' },
  { name: 'MCMC',              src: '/images/clients/clients_mcmc.png' },
  { name: 'New Balance',       src: '/images/clients/clients_newbalance.png' },
  { name: 'Prudential',        src: '/images/clients/clients_prudential.png' },
  { name: 'Vans',              src: '/images/clients/clients_vans.png' },
  { name: 'Think City',        src: '/images/clients/clients_thinkcity.png' },
  { name: 'Accenture',         src: '/images/clients/clients_accenture.png' },
  { name: 'CIMB Bank',         src: '/images/clients/clients_cimbbank.png' },
  { name: 'Maybank',           src: '/images/clients/clients_maybank.png' },
  { name: 'Public Bank',       src: '/images/clients/clients_publicbank.png' },
  { name: 'SAFI',              src: '/images/clients/clients_safi.png' },
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
          <div className="max-w-[800px]">
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

          <div className="border border-white/10 bg-edt-black p-12 lg:p-16 text-center max-w-[680px] mx-auto">
            <span className="edt-badge mb-6 inline-block">Coming Soon</span>
            <h3 className="display-sm text-white mb-4">We&apos;re growing the team.</h3>
            <p className="font-sans text-[15px] text-edt-grey leading-relaxed">
              Profiles will live here as we expand.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24 border-y border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-12">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Clients
          </span>
          <h2 className="display-md text-edt-black max-w-[700px]">
            Trusted by Malaysia&apos;s most recognised brands.
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-black/10 border border-black/10">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white p-8 flex items-center justify-center"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={160}
                  height={48}
                  className="h-10 lg:h-12 w-auto object-contain"
                  unoptimized
                />
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
