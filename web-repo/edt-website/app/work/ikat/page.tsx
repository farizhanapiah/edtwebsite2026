import type { Metadata } from 'next'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'IKAT Malaysia Case Study | Immersive Textile Exhibition | EDT',
  description:
    'How EDT brought Malaysian textile heritage to life — RM 3.2M in media value, 5,822 visitors, 382,720 social reach, across 3 cities.',
  alternates: {
    canonical: '/work/ikat',
    languages: { 'en-MY': '/work/ikat', 'x-default': '/work/ikat' },
  },
}

const URL_BASE = 'https://weareedt.com'
const PAGE_URL = `${URL_BASE}/work/ikat`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: URL_BASE },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${URL_BASE}/work` },
    { '@type': 'ListItem', position: 3, name: 'IKAT Malaysia', item: PAGE_URL },
  ],
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'IKAT Malaysia — Immersive Textile Heritage Exhibition',
  url: PAGE_URL,
  description:
    'Touring immersive exhibition combining interactive installations, projection mapping, AR and tangible textile experiences. 5,822 visitors, RM 3.2M media value, 382,720 social reach across Kuala Lumpur, Sarawak and Johor.',
  image: `${URL_BASE}/images/ikat/ikat_hero.jpg`,
  creator: { '@id': `${URL_BASE}/#organization` },
  about: ['Malaysian Textile Heritage', 'Immersive Exhibition', 'Cultural Heritage'],
  keywords: [
    'projection mapping',
    'interactive installation',
    'WebAR',
    'TouchDesigner',
    'cultural heritage',
    'Malaysian textile',
    'IKAT',
  ],
  inLanguage: 'en-MY',
  isPartOf: { '@id': `${URL_BASE}/#website` },
  locationCreated: {
    '@type': 'Place',
    name: 'Kuala Lumpur, Sarawak, Johor',
    address: { '@type': 'PostalAddress', addressCountry: 'MY' },
  },
}

const results = [
  { metric: 'Visitors', result: '5,822' },
  { metric: 'Media Value', result: 'RM 3.2M' },
  { metric: 'Social Reach', result: '382,720' },
  { metric: 'Cities', result: '3' },
]

const galleryImages = [
  { n: 1, alt: 'IKAT Malaysia exhibition — projection-mapped textile installation with traditional Malaysian patterns' },
  { n: 2, alt: 'IKAT Malaysia exhibition — visitors interacting with the immersive heritage display' },
  { n: 3, alt: 'IKAT Malaysia exhibition — interactive textile gallery with ambient lighting and motion-reactive visuals' },
  { n: 4, alt: 'IKAT Malaysia exhibition — close-up of woven textile artefacts displayed within the immersive environment' },
  { n: 5, alt: 'IKAT Malaysia exhibition — wide view of the touring gallery installation with attendees exploring the space' },
]

export default function IKATPage() {
  return (
    <>
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

      {/* MEDIA — hero video (poster falls back to hero image; section's pixel-grid is the final fallback) */}
      <section className="bg-edt-black border-b border-white/10 relative overflow-hidden pixel-grid">
        <div className="aspect-video w-full relative group">
          <img
            src="/images/ikat/ikat_hero.jpg"
            alt="IKAT Malaysia"
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
                src={`/images/ikat/ikat_gallery_0${g.n}.jpg`}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-cover border border-white/10"
              />
            ))}
          </div>
          <YouTubeEmbed videoId="kZkYuuD3Fjc" title="IKAT Malaysia" />
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
            <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-4">
              IKAT Malaysia sought to revitalize interest in the country&apos;s traditional textile
              heritage — particularly among younger audiences — and tour the experience across three
              cities. Traditional craft exhibitions in Malaysia historically struggle with footfall:
              the artefacts are extraordinary, but the storytelling rarely competes with a generation
              raised on phone screens.
            </p>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              The brief asked for an exhibition that could travel across Kuala Lumpur, Sarawak and
              Johor, hold the attention of 18–34 audiences, and produce content valuable enough that
              media outlets and social influencers would amplify it organically. It also had to
              respect the textile artefacts themselves — never reducing the craft to a backdrop for
              technology.
            </p>
          </div>
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Solution</span>
            <h2 className="display-md text-white mb-6">What We Created</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-4">
              EDT designed and produced a touring immersive exhibition that wove together interactive
              installations, projection mapping, WebAR triggers and tangible textile experiences into
              a single cohesive journey. Visitors entered through a projection-mapped corridor where
              traditional Malaysian patterns dissolved and reformed in response to their movement,
              setting up the show&apos;s central idea: heritage as something living, not something
              archived.
            </p>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              At the core of the exhibition were generative-art stations where TouchDesigner-driven
              visuals reinterpreted ikat motifs in real time, alongside WebAR overlays that surfaced
              the cultural and historical context behind each pattern. The result was an exhibition
              that generated RM 3.2M in earned media value, 382,720 social impressions, and brought
              5,822 paying and walk-in visitors across the three-city tour.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-edt-black py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 max-w-[900px]">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Outcome</span>
          <h2 className="display-md text-white mb-6">Heritage That Travels</h2>
          <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-4">
            IKAT Malaysia became the most-covered heritage exhibition of its tour cycle, with
            features in national press and pickup from regional design and culture publications.
            More importantly, the exhibition demonstrated a replicable model for heritage tourism:
            an installation light enough to tour, technical enough to surprise digital-first
            audiences, and respectful enough that it could anchor cultural programming for
            government and museum partners.
          </p>
          <p className="font-sans text-[16px] text-white/70 leading-relaxed">
            For EDT, the project consolidated a methodology now applied across heritage and tourism
            briefs — pairing tangible artefact display with generative and AR layers that increase
            dwell time and amplify shareability without diluting the source material.
          </p>
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
