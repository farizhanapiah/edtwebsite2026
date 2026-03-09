import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
  description:
    "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms and immersive activations for brands, events, tourism and government across Southeast Asia.",
}

// ─── Schema Markup ──────────────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Experiential Design Team',
  alternateName: 'EDT',
  legalName: 'Adticles Sdn Bhd',
  url: 'https://weareedt.com',
  telephone: '+60364115361',
  email: 'hello@weareedt.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-3-13 Centrio Pantai Hillpark, Jalan Pantai Murni',
    addressLocality: 'Kuala Lumpur',
    postalCode: '59200',
    addressCountry: 'MY',
  },
  areaServed: ['Malaysia', 'Singapore', 'Qatar', 'Hong Kong'],
  knowsAbout: [
    'Augmented Reality',
    'Virtual Reality',
    'Mixed Reality',
    'AI Avatars',
    'Projection Mapping',
    'Immersive Events',
  ],
}

// ─── Data ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    num: '01',
    title: 'Abstract ideas are hard to understand',
    body: 'We turn complex data, policies, and concepts into immersive experiences people can see, feel, and remember.',
  },
  {
    num: '02',
    title: 'Digital spaces feel flat and forgettable',
    body: 'EDT uses AR, VR, MR, and interactive media to dramatically increase attention, participation, and dwell time.',
  },
  {
    num: '03',
    title: 'Technology feels intimidating',
    body: 'We design "human-first" interfaces that make advanced tech intuitive and playful for any audience.',
  },
  {
    num: '04',
    title: 'Experiences lack emotional relevance',
    body: 'EDT creates experiential storytelling that differentiates beyond ads — through installations, simulations, and lived experiences.',
  },
  {
    num: '05',
    title: "Brands can't stand out",
    body: 'We localise technology with Malaysian and SEA cultural context, language, and narratives to create emotional resonance.',
  },
]

const services = [
  {
    icon: '⬡',
    title: 'AR / VR / MR Development',
    desc: 'Cross-platform immersive experiences from WebAR to full VR simulations',
    href: '/services/ar-vr-mr-development',
  },
  {
    icon: '⬡',
    title: 'AI Avatars & Holograms',
    desc: 'Intelligent holographic avatars that know your business',
    href: '/services/ai-avatars-holograms',
  },
  {
    icon: '⬡',
    title: 'Virtual Production',
    desc: 'Unreal Engine environments for live streaming and branded content',
    href: '/services/virtual-production',
  },
  {
    icon: '⬡',
    title: 'Interactive Installations',
    desc: 'LED walls, touch displays, and immersive rooms that respond to people',
    href: '/services/interactive-installations',
  },
  {
    icon: '⬡',
    title: 'Projection Mapping',
    desc: 'Any surface becomes a canvas',
    href: '/services/projection-mapping',
  },
  {
    icon: '⬡',
    title: 'Immersive Events',
    desc: 'End-to-end experiential event production — pitch to post-event',
    href: '/services/immersive-events',
  },
]

const products = [
  {
    badge: 'MR Platform',
    title: 'RiaReality',
    desc: 'MR platform for physical spaces. Games, education, real estate, heritage.',
    href: '/products/riaReality',
  },
  {
    badge: 'AI Product',
    title: 'Hoomans.ai',
    desc: 'AI-powered holographic avatars with RAG knowledge and TTS voice.',
    href: '/products/hoomans-ai',
  },
  {
    badge: 'AI Photobooth',
    title: 'MimpiLab',
    desc: 'AI photobooth with 100% brand-controllable themed photos.',
    href: '/products/mimpilab',
  },
  {
    badge: 'AR Heritage',
    title: 'CheritAR',
    desc: 'AR avatars that give historical landmarks a voice.',
    href: '/products/cheritar',
  },
  {
    badge: 'VR Wellness',
    title: 'WayangMind',
    desc: 'VR mental wellness with AI-personalized guided sessions.',
    href: '/products/wayangmind',
  },
  {
    badge: 'Virtual Production',
    title: 'ARVENA',
    desc: 'Virtual production platform replacing physical sets with Unreal Engine.',
    href: '/products/arvena',
  },
]

const clients = [
  'Petronas', 'AirAsia', 'Astro', 'Sunway', 'Malaysia Airlines',
  'PNB', 'MCMC', 'Sime Darby', 'New Balance', 'Prudential',
  'Sarawak Tourism Board', 'ECCO', 'Vans', 'CelcomDigi', 'Petrosains', 'Think City',
]

const stats = [
  { number: '52,417', label: 'AR Impressions', note: 'ARFestKL' },
  { number: '93%', label: 'Client Satisfaction Rate', note: '' },
  { number: '40%', label: 'Efficiency Improvement', note: 'MetaHRise' },
  { number: '12+', label: 'Countries Reached', note: 'CheritAR' },
]

const caseStudies = [
  {
    badge: 'VR Training',
    client: 'MCMC',
    title: 'VR onboarding that set a Malaysian record.',
    stats: ['93% satisfaction', '40% efficiency gain', '145 employees', 'Guinness Record 2024'],
    href: '/work/metahrise',
    color: '#2D2DFF',
  },
  {
    badge: 'AR Event',
    client: 'ARFestKL',
    title: 'Downtown KL transformed into a 30-point AR playground.',
    stats: ['52,417 AR impressions', '12,040 QR scans', '42 artists', '35 artworks'],
    href: '/work/arfestkl',
    color: '#111111',
  },
  {
    badge: 'Immersive Exhibition',
    client: 'IKAT Malaysia',
    title: 'Textile heritage that generated RM 3.2M in media value.',
    stats: ['5,822 visitors', 'RM 3.2M media value', '382,720 social reach', '3 cities'],
    href: '/work/ikat',
    color: '#111111',
  },
]

const awards = [
  { icon: '▲', title: 'Management Initiative of the Year', body: 'Malaysia · 2025' },
  { icon: '▲', title: 'Excellence Awards', body: 'Malaysia · 2024' },
  { icon: '▲', title: 'Malaysia Book of Records', body: '2024' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-edt-black pixel-grid">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-edt-black/80 z-10" />

        {/* Decorative blue line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-edt-blue/30 z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-20 py-32 lg:py-48">
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="inline-block border border-edt-blue/40 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-edt-blue">
              Kuala Lumpur · Southeast Asia · Beyond
            </span>
          </div>

          {/* H1 */}
          <h1 className="display-xl text-white max-w-[900px] mb-8">
            We Build<br />
            Experiences<br />
            That Can&apos;t Be<br />
            Ignored.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-[16px] lg:text-[18px] text-edt-grey mb-12 max-w-[600px] leading-relaxed tracking-wider uppercase">
            AR · VR · MR · AI Avatars · Projection Mapping · Immersive Installations
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/work" className="btn-primary">
              See Our Work →
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-20" />
      </section>

      {/* ── SECTION 2: PROBLEMS WE SOLVE ────────────────────────────── */}
      <section className="bg-edt-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
              Why EDT
            </span>
            <h2 className="display-md text-white mt-4 max-w-[700px]">
              The gap between what brands want and what audiences feel.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {painPoints.map((p) => (
              <div key={p.num} className="bg-edt-black p-8 lg:p-10">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-edt-blue/60 mb-4 block">
                  {p.num}
                </span>
                <h3 className="font-sans text-[17px] font-semibold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
            {/* Filler cell for grid balance */}
            <div className="bg-edt-black hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE DO ────────────────────────────────────── */}
      <section className="bg-edt-black py-24 lg:py-32 border-t border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
                Services
              </span>
              <h2 className="display-md text-white mt-4">
                Everything you need<br />to make it immersive.
              </h2>
            </div>
            <Link href="/services" className="btn-ghost self-start lg:self-auto">
              Explore All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-edt-black p-8 lg:p-10 group hover:bg-surface transition-colors block"
              >
                <div className="w-10 h-10 border border-edt-blue/30 flex items-center justify-center text-edt-blue text-lg mb-5 group-hover:border-edt-blue transition-colors">
                  ◈
                </div>
                <h3 className="font-sans text-[16px] font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="font-sans text-[13px] text-edt-grey leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="btn-ghost text-[12px]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR PRODUCTS ─────────────────────────────────── */}
      <section className="bg-surface py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
                Products
              </span>
              <h2 className="display-md text-white mt-4">Six platforms.<br />One ecosystem.</h2>
              <p className="font-sans text-[15px] text-edt-grey mt-4 max-w-[480px]">
                EDT doesn&apos;t just deliver projects. We&apos;ve built products you can deploy, licence, and scale.
              </p>
            </div>
            <Link href="/products" className="btn-ghost self-start lg:self-auto">
              Explore All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group border border-edt-blue/20 hover:border-edt-blue bg-edt-black p-6 lg:p-8 flex flex-col gap-4 transition-colors"
              >
                <span className="edt-badge self-start">{p.badge}</span>
                <h3 className="display-sm text-white">{p.title}</h3>
                <p className="font-sans text-[13px] text-edt-grey leading-relaxed flex-1">
                  {p.desc}
                </p>
                <span className="btn-ghost text-[12px]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROOF — CLIENTS & STATS ──────────────────────── */}
      <section className="bg-white py-16 lg:py-20 border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-10 text-center">
            Trusted by Malaysia&apos;s most recognised brands
          </p>

          {/* Client logos (text representation until images are added) */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-16">
            {clients.map((c) => (
              <span key={c} className="font-sans text-[13px] font-semibold text-edt-black/50 tracking-wider uppercase">
                {c}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 lg:p-10 text-center">
                <div
                  className="font-display text-edt-black leading-none mb-2"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  {s.number}
                </div>
                <p className="font-sans text-[13px] font-semibold text-edt-black/60 uppercase tracking-wider">
                  {s.label}
                </p>
                {s.note && (
                  <p className="font-sans text-[11px] text-edt-black/30 mt-1 uppercase tracking-wider">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FEATURED CASE STUDIES ────────────────────────── */}
      <section className="bg-edt-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
                Case Studies
              </span>
              <h2 className="display-md text-white mt-4">
                Results that speak for themselves.
              </h2>
            </div>
            <Link href="/work" className="btn-ghost self-start lg:self-auto">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.href}
                href={cs.href}
                className={`group block border border-white/10 hover:border-edt-blue transition-colors overflow-hidden ${i === 0 ? 'lg:col-span-1' : ''}`}
              >
                {/* Window chrome bar */}
                <div className="window-bar">
                  <div className="window-dot" />
                  <div className="window-dot" />
                  <div className="window-dot" />
                  <span className="ml-2 font-sans text-[10px] font-semibold tracking-widest uppercase text-white/30">
                    {cs.client}.exe
                  </span>
                </div>

                {/* Placeholder image area */}
                <div
                  className="h-48 lg:h-56 relative overflow-hidden"
                  style={{ backgroundColor: cs.color }}
                >
                  <div className="absolute inset-0 pixel-grid" />
                  <div className="absolute bottom-4 left-4">
                    <span className="edt-badge">{cs.badge}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-grey mb-2">
                    {cs.client}
                  </p>
                  <h3 className="font-sans text-[16px] font-semibold text-white mb-4 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.stats.map((stat) => (
                      <span key={stat} className="font-sans text-[11px] text-edt-blue border border-edt-blue/30 px-2 py-1">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <span className="btn-ghost text-[12px]">Read the Story →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: RECOGNITION ──────────────────────────────────── */}
      <section className="bg-surface py-20 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-12 text-center">
            Award-winning, record-breaking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {awards.map((a) => (
              <div key={a.title} className="bg-surface p-8 lg:p-10 flex flex-col gap-3">
                <span className="text-edt-blue text-xl">{a.icon}</span>
                <h3 className="font-sans text-[16px] font-semibold text-white">{a.title}</h3>
                <p className="font-sans text-[13px] text-edt-grey">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: PARTNER CTA ──────────────────────────────────── */}
      <section className="bg-edt-blue py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-[600px]">
            <h2 className="display-md text-white mb-4">Are you an agency?</h2>
            <p className="font-sans text-[16px] text-white/80 leading-relaxed">
              Strengthen your pitch with EDT&apos;s immersive capability. No hiring, no R&D risk.
              We give you access to proven AR, VR, MR, and AI products — ready to pitch and deploy.
            </p>
          </div>
          <Link
            href="/partners"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Partner with EDT →
          </Link>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA / LEAD FORM ───────────────────────── */}
      <section className="bg-edt-black py-24 lg:py-32 border-t border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="max-w-[700px] mx-auto text-center mb-12">
            <h2 className="display-md text-white mb-4">
              Ready to build something unforgettable?
            </h2>
            <p className="font-sans text-[15px] text-edt-grey">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-[700px] mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Inline Lead Form (server-rendered shell, action via /contact) ────────────
function ContactForm() {
  return (
    <form action="/contact" method="GET" className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Name *"
          required
          className="bg-surface border border-white/15 text-white font-sans text-[14px] px-5 py-4 placeholder:text-edt-grey/50 focus:border-edt-blue focus:outline-none transition-colors"
        />
        <input
          name="company"
          type="text"
          placeholder="Company *"
          required
          className="bg-surface border border-white/15 text-white font-sans text-[14px] px-5 py-4 placeholder:text-edt-grey/50 focus:border-edt-blue focus:outline-none transition-colors"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email *"
        required
        className="bg-surface border border-white/15 text-white font-sans text-[14px] px-5 py-4 placeholder:text-edt-grey/50 focus:border-edt-blue focus:outline-none transition-colors"
      />
      <select
        name="service"
        className="bg-surface border border-white/15 text-white font-sans text-[14px] px-5 py-4 focus:border-edt-blue focus:outline-none transition-colors appearance-none"
      >
        <option value="">What do you need?</option>
        <option>Brand Activation</option>
        <option>AR/VR Experience</option>
        <option>AI Avatar</option>
        <option>Virtual Production</option>
        <option>Other</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Message (optional)"
        className="bg-surface border border-white/15 text-white font-sans text-[14px] px-5 py-4 placeholder:text-edt-grey/50 focus:border-edt-blue focus:outline-none transition-colors resize-none"
      />
      <Link href="/contact" className="btn-primary self-start">
        Let&apos;s Talk →
      </Link>
    </form>
  )
}
