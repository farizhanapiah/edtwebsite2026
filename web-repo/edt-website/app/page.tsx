import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroShowreel from '@/components/HeroShowreel'
import FormspreeForm from '@/components/FormspreeForm'

export const metadata: Metadata = {
  title: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
  description:
    "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms and immersive activations for brands, events, tourism and government across Southeast Asia.",
  alternates: {
    canonical: '/',
    languages: { 'en-MY': '/', 'x-default': '/' },
  },
}

// ─── Schema Markup ──────────────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://weareedt.com/#organization',
  name: 'Experiential Design Team',
  alternateName: 'EDT',
  legalName: 'Adticles Sdn Bhd',
  url: 'https://weareedt.com',
  logo: 'https://weareedt.com/favicon/web-app-manifest-512x512.png',
  telephone: '+60364115361',
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
  sameAs: [
    'https://www.instagram.com/weareedt/',
    'https://www.linkedin.com/company/31284467/',
    'https://www.youtube.com/@weareEDT',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://weareedt.com/#website',
  url: 'https://weareedt.com',
  name: 'Experiential Design Team',
  description:
    "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms and immersive activations.",
  inLanguage: 'en-MY',
  publisher: { '@id': 'https://weareedt.com/#organization' },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const painPointIconClass = 'w-7 h-7 text-edt-blue mb-5'

const painPoints = [
  {
    num: '01',
    title: 'Abstract ideas are hard to understand',
    body: 'We turn complex data, policies, and concepts into immersive experiences people can see, feel, and remember.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={painPointIconClass} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Digital spaces feel flat and forgettable',
    body: 'EDT uses AR, VR, MR, and interactive media to dramatically increase attention, participation, and dwell time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={painPointIconClass} aria-hidden="true">
        <polygon points="12,3 21,12 12,21 3,12" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Technology feels intimidating',
    body: 'We design "human-first" interfaces that make advanced tech intuitive and playful for any audience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={painPointIconClass} aria-hidden="true">
        <polygon points="12,3 21,8.5 21,15.5 12,21 3,15.5 3,8.5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Experiences lack emotional relevance',
    body: 'EDT creates experiential storytelling that differentiates beyond ads — through installations, simulations, and lived experiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={painPointIconClass} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polygon points="12,5 15,12 12,19 9,12" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '05',
    title: "Brands can't stand out",
    body: 'We localise technology with Malaysian and SEA cultural context, language, and narratives to create emotional resonance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={painPointIconClass} aria-hidden="true">
        <polygon points="12,3 14.5,9.5 21,10 16,14.5 17.5,21 12,17.5 6.5,21 8,14.5 3,10 9.5,9.5" />
      </svg>
    ),
  },
]

const services = [
  {
    icon: '/icons/services/ar-vr-mr-development.svg',
    title: 'AR / VR / MR Development',
    desc: 'Cross-platform immersive experiences from WebAR to full VR simulations',
    href: '/services/ar-vr-mr-development',
    video: '/videos/services/ar-vr-mr-development.webm',
  },
  {
    icon: '/icons/services/ai-avatars-holograms.svg',
    title: 'AI Avatars & Holograms',
    desc: 'Intelligent holographic avatars that know your business',
    href: '/services/ai-avatars-holograms',
    video: '/videos/services/ai-avatars-holograms.webm',
  },
  {
    icon: '/icons/services/virtual-production.svg',
    title: 'Virtual Production',
    desc: 'Unreal Engine environments for live streaming and branded content',
    href: '/services/virtual-production',
    video: '/videos/services/virtual-production.webm',
  },
  {
    icon: '/icons/services/interactive-installations.svg',
    title: 'Interactive Installations',
    desc: 'LED walls, touch displays, and immersive rooms that respond to people',
    href: '/services/interactive-installations',
    video: '/videos/services/interactive-installations.webm',
  },
  {
    icon: '/icons/services/projection-mapping.svg',
    title: 'Projection Mapping',
    desc: 'Any surface becomes a canvas',
    href: '/services/projection-mapping',
    video: '/videos/services/projection-mapping.webm',
  },
  {
    icon: '/icons/services/immersive-events.svg',
    title: 'Immersive Events',
    desc: 'End-to-end experiential event production — pitch to post-event',
    href: '/services/immersive-events',
    video: '/videos/services/immersive-events.webm',
  },
]

const products = [
  {
    badge: 'MR Platform',
    title: 'RiaReality',
    desc: 'MR platform for physical spaces. Games, education, real estate, heritage.',
    href: '/products/riaReality',
    image: '/images/products/riareality_thumb.jpg',
  },
  {
    badge: 'AI Product',
    title: 'Hoomans.ai',
    desc: 'AI-powered holographic avatars with RAG knowledge and TTS voice.',
    href: '/products/hoomans-ai',
    image: '/images/products/hoomans-ai_thumb.jpg',
  },
  {
    badge: 'AI Photobooth',
    title: 'MimpiLab',
    desc: 'AI photobooth with 100% brand-controllable themed photos.',
    href: '/products/mimpilab',
    image: '/images/products/mimpilab_thumb.jpg',
  },
  {
    badge: 'AR Heritage',
    title: 'CheritAR',
    desc: 'AR avatars that give historical landmarks a voice.',
    href: '/products/cheritar',
    image: '/images/cheritar-think-city/cheritar-think-city_hero.jpg',
  },
  {
    badge: 'VR Wellness',
    title: 'WayangMind',
    desc: 'VR mental wellness with AI-personalized guided sessions.',
    href: '/products/wayangmind',
    image: '/images/products/wayangmind_thumb.jpg',
  },
  {
    badge: 'Virtual Production',
    title: 'ARVENA',
    desc: 'Virtual production platform replacing physical sets with Unreal Engine.',
    href: '/products/arvena',
    image: '/images/products/arvena_thumb.jpg',
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

const caseStudies = [
  {
    badge: 'VR Training',
    client: 'MCMC',
    title: 'VR onboarding that set a Malaysian record.',
    stats: ['93% satisfaction', '40% efficiency gain', '145 employees', 'Guinness Record 2024'],
    href: '/work/metahrise',
    image: '/images/metahrise/metahrise_thumb.jpg',
  },
  {
    badge: 'AR Event',
    client: 'ARFestKL',
    title: 'Downtown KL transformed into a 30-point AR playground.',
    stats: ['52,417 AR impressions', '12,040 QR scans', '42 artists', '35 artworks'],
    href: '/work/arfestkl',
    image: '/images/arfestkl/arfestkl_thumb.jpg',
  },
  {
    badge: 'Immersive Exhibition',
    client: 'IKAT Malaysia',
    title: 'Textile heritage that generated RM 3.2M in media value.',
    stats: ['5,822 visitors', 'RM 3.2M media value', '382,720 social reach', '3 cities'],
    href: '/work/ikat',
    image: '/images/ikat/ikat_thumb.jpg',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <HeroShowreel />

      {/* ── SECTION 2: PROBLEMS WE SOLVE ────────────────────────────── */}
      <section className="bg-edt-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
              Why EDT
            </span>
            <h2 className="display-md text-white mt-4 max-w-[900px]">
              Bridging the gap between what brands want and what audiences feel.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
            {painPoints.map((p) => (
              <div key={p.num} className="bg-edt-black p-8 lg:p-10">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-edt-blue/60 mb-4 block">
                  {p.num}
                </span>
                {p.icon}
                <h3 className="font-sans text-[17px] font-semibold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
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
                className="bg-edt-black group hover:bg-surface transition-colors block overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden bg-edt-blue/10">
                  <video
                    src={s.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="w-10 h-10 border border-edt-blue/30 flex items-center justify-center mb-5 group-hover:border-edt-blue transition-colors">
                    <img src={s.icon} alt="" aria-hidden="true" className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-[16px] font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="font-sans text-[13px] text-edt-grey leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="btn-ghost text-[12px]">Learn more →</span>
                </div>
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
                className="group border border-edt-blue/20 hover:border-edt-blue bg-edt-black flex flex-col transition-colors overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden bg-edt-blue/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-50 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-edt-black/70 to-transparent" />
                  <span className="edt-badge absolute top-4 left-4 z-10">{p.badge}</span>
                </div>
                <div className="p-6 lg:p-8 flex flex-col gap-4 flex-1">
                  <h3 className="display-sm text-white">{p.title}</h3>
                  <p className="font-sans text-[13px] text-edt-grey leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <span className="btn-ghost text-[12px]">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROOF — CLIENT LOGO TICKER ───────────────────── */}
      <section className="bg-white py-8 lg:py-10 border-t border-black/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-10 text-center">
            Trusted by Malaysia&apos;s most recognised brands
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex flex-nowrap items-center w-max">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center justify-center shrink-0 px-8 lg:px-[45px]"
                aria-hidden={i >= clients.length ? true : undefined}
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

                {/* Thumbnail */}
                <div className="h-48 lg:h-56 relative overflow-hidden bg-edt-blue/10">
                  <img
                    src={cs.image}
                    alt={`${cs.client} — ${cs.title}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-edt-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10">
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

      {/* ── SECTION 7: PARTNER CTA ──────────────────────────────────── */}
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

      {/* ── SECTION 8: FINAL CTA / LEAD FORM ───────────────────────── */}
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
    <FormspreeForm
      endpoint="https://formspree.io/f/xjglgzav"
      thankYouType="lead"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New homepage lead — EDT" />
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
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
      <button type="submit" className="btn-primary self-start">
        Let&apos;s Talk →
      </button>
    </FormspreeForm>
  )
}
