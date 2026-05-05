import type { Metadata } from 'next'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: "AirAsia Founders' Gallery | Interactive Installation | EDT",
  description:
    "EDT built an interactive wall + AR + AI imagery installation for the AirAsia Founders' Gallery — bringing the airline's founding story to life.",
  alternates: {
    canonical: '/work/airasia-founders-gallery',
    languages: {
      'en-MY': '/work/airasia-founders-gallery',
      'x-default': '/work/airasia-founders-gallery',
    },
  },
}

const URL_BASE = 'https://weareedt.com'
const PAGE_URL = `${URL_BASE}/work/airasia-founders-gallery`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: URL_BASE },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${URL_BASE}/work` },
    { '@type': 'ListItem', position: 3, name: "AirAsia Founders' Gallery", item: PAGE_URL },
  ],
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: "AirAsia Founders' Gallery — Permanent Interactive Installation",
  url: PAGE_URL,
  description:
    "Permanent interactive gallery designed and built by EDT at AirAsia's RedQ headquarters in Sepang. Combines multi-panel interactive walls, WebAR touchpoints, AI-generated historical imagery and a 270° LED display environment to tell the airline's founding story.",
  image: `${URL_BASE}/images/airasia-founders-gallery/airasia-founders-gallery_hero.jpg`,
  creator: { '@id': `${URL_BASE}/#organization` },
  about: ['Interactive Installation', 'Brand Heritage', 'AI Generative Imagery', 'WebAR'],
  keywords: [
    'TouchDesigner',
    'WebAR',
    'LED P2.0',
    'generative AI imagery',
    'interactive walls',
    'AirAsia',
    'permanent installation',
  ],
  inLanguage: 'en-MY',
  isPartOf: { '@id': `${URL_BASE}/#website` },
  locationCreated: {
    '@type': 'Place',
    name: 'AirAsia RedQ HQ, Sepang',
    address: { '@type': 'PostalAddress', addressLocality: 'Sepang', addressCountry: 'MY' },
  },
}

const galleryImages = [
  { n: 1, alt: "AirAsia Founders' Gallery — multi-panel interactive timeline wall at AirAsia RedQ HQ Sepang" },
  { n: 2, alt: "AirAsia Founders' Gallery — visitor exploring AI-generated historical imagery of AirAsia's founding moments" },
  { n: 3, alt: "AirAsia Founders' Gallery — 270-degree curved LED wall delivering ambient AirAsia brand films and timeline animations" },
  { n: 4, alt: "AirAsia Founders' Gallery — WebAR touchpoint surfacing 3D aircraft models and route map content" },
]

export default function AirAsiaFoundersGalleryPage() {
  return (
    <main className="bg-edt-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <span className="edt-badge">Case Study</span>
            <span className="edt-badge">Interactive Installation</span>
            <span className="edt-badge">AirAsia</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            AirAsia Founders' Gallery
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            EDT built a permanent interactive gallery for AirAsia's RedQ headquarters —
            multi-panel interactive walls, WebAR touchpoints, and AI-generated historical
            imagery that bring the airline's founding story to life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services/interactive-installations" className="btn-primary">
              Interactive Installations
            </Link>
            <Link href="/contact" className="btn-ghost">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA — hero video (poster falls back to hero image; section's pixel-grid is the final fallback) */}
      <section className="bg-edt-black border-b border-white/10 relative overflow-hidden pixel-grid">
        <div className="aspect-video w-full relative group">
          <img
            src="/images/airasia-founders-gallery/airasia-founders-gallery_hero.jpg"
            alt="AirAsia Founders' Gallery"
            className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-500"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-edt-black py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-8">Gallery</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {galleryImages.map((g) => (
              <img
                key={g.n}
                src={`/images/airasia-founders-gallery/airasia-founders-gallery_gallery_0${g.n}.jpg`}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-cover border border-white/10"
              />
            ))}
          </div>
          <YouTubeEmbed videoId="Y9w3nrGThGs" title="AirAsia Founders' Gallery" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="display-md font-display uppercase mb-8">Project Overview</h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                When AirAsia commissioned EDT to design the Founders' Gallery at their RedQ
                headquarters in Sepang, the brief was clear: create a permanent space that
                honoured the airline's origin story in a way that matched the audacity of
                the brand itself. Static displays and framed photographs wouldn't do.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT designed and delivered a multi-sensory gallery environment where visitors
                move through AirAsia's history via touch, motion, and immersive media — from
                the earliest board meetings to the airline's transformation into Southeast
                Asia's most recognised low-cost carrier.
              </p>
            </div>
            <div className="bg-surface border border-white/10 p-8">
              <div className="window-bar mb-6">
                <span className="window-dot"></span>
                <span className="window-dot"></span>
                <span className="window-dot"></span>
              </div>
              <dl className="space-y-5">
                {[
                  { label: 'Client', value: 'AirAsia' },
                  { label: 'Category', value: 'Interactive Installation' },
                  { label: 'Technology', value: 'Interactive Walls · AR · AI Generative Imagery' },
                  { label: 'Venue', value: 'AirAsia RedQ HQ, Sepang' },
                  { label: 'Type', value: 'Permanent Installation' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-6 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <dt className="text-edt-grey text-sm uppercase tracking-widest w-32 shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <span className="edt-badge mb-6 inline-block">The Challenge</span>
            <h2 className="display-md font-display uppercase mb-6">
              A Pioneering Brand Deserved a Pioneering Gallery
            </h2>
            <p className="text-edt-grey text-lg leading-relaxed mb-6">
              AirAsia's founding story is one of Southeast Asia's most compelling business
              narratives — a deeply human story of conviction, risk, and transformation.
              The challenge was to translate that story into a physical space that employees,
              visitors, and dignitaries could walk through and genuinely feel.
            </p>
            <p className="text-edt-grey text-lg leading-relaxed">
              Standard exhibition design — printed panels, display cases, TV screens
              playing looped reels — wouldn't reflect the ambition or values of a brand
              that redefined an entire industry. AirAsia needed something that felt as
              bold as the decision to buy an airline for one ringgit.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">The Solution</span>
          <h2 className="display-md font-display uppercase mb-10 max-w-2xl">
            Touch. Motion. Immersive Media.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Multi-Panel Interactive Walls',
                body: "Floor-to-ceiling interactive display panels let visitors navigate AirAsia\'s timeline by touch. Each chapter of the story is a node — tappable, zoomable, and linked to archival media.",
              },
              {
                title: 'WebAR Touchpoints',
                body: "Embedded AR triggers throughout the gallery surface hidden layers of content — video messages from founders, 3D aircraft models, and interactive route maps showing AirAsia\'s network expansion.",
              },
              {
                title: 'AI-Generated Historical Imagery',
                body: 'Where archival photography was scarce, EDT used generative AI to recreate historically accurate scenes — composite imagery blending verified archival footage with AI-synthesised environments.',
              },
              {
                title: 'LED Display Environment',
                body: "The gallery's centrepiece is a curved LED wall delivering a 270-degree ambient experience — dynamic brand films, timeline animations, and live data feeds from AirAsia's current operations.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-surface border border-white/10 p-8">
                <h3 className="text-white font-semibold text-lg mb-4">{card.title}</h3>
                <p className="text-edt-grey leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-white/10 p-8 lg:p-12">
            <h3 className="display-sm font-display uppercase text-white mb-6">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'TouchDesigner',
                'WebAR',
                'Generative AI Imagery',
                'LED P2.0 Displays',
                'Custom Touch Interface',
                'Archival Media Integration',
                'Real-Time Data Feeds',
              ].map((tech) => (
                <span key={tech} className="edt-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE FLOW */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">The Visitor Journey</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              { step: '01', title: 'Enter', desc: 'Ambient LED environment sets the mood. Brand film plays across the centrepiece wall.' },
              { step: '02', title: 'Explore', desc: 'Touch the timeline walls. Select chapters. Dive into the moments that defined AirAsia.' },
              { step: '03', title: 'Discover', desc: 'Scan AR markers to unlock hidden content — founder messages, 3D models, and AI-reconstructed scenes.' },
              { step: '04', title: 'Reflect', desc: "A final interactive station connects visitors to AirAsia\'s present-day network and future ambitions." },
            ].map((stage, i) => (
              <div key={stage.step} className={`p-8 ${i < 3 ? 'border-r border-white/10' : ''}`}>
                <div className="text-edt-blue font-display text-4xl mb-4">{stage.step}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{stage.title}</h3>
                <p className="text-edt-grey text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-10">Explore Further</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                label: 'Interactive Installations',
                href: '/services/interactive-installations',
                desc: "EDT's full-service interactive installation offering — from concept through to commissioning.",
              },
              {
                label: 'AR/VR/MR Development',
                href: '/services/ar-vr-mr-development',
                desc: 'WebAR, native AR, and mixed reality development for brand and enterprise.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block group transition-colors"
              >
                <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold">
                  {link.label} →
                </div>
                <p className="text-edt-grey text-sm leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Build a Gallery That Tells Your Story
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Whether it's a permanent installation or a touring exhibition, EDT designs
            interactive environments that make your history feel alive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get a Quote
            </Link>
            <Link href="/services/interactive-installations" className="btn-ghost border-white text-white">
              View Service
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
