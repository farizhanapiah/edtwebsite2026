import type { Metadata } from 'next'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'ARFestKL Case Study | Downtown KL AR Playground | EDT',
  description:
    'How EDT transformed Downtown Kuala Lumpur into a 30-point AR playground — 52,417 AR impressions, 42 artists, and 35 artworks across the city centre.',
  alternates: {
    canonical: '/work/arfestkl',
    languages: { 'en-MY': '/work/arfestkl', 'x-default': '/work/arfestkl' },
  },
}

const URL_BASE = 'https://weareedt.com'
const PAGE_URL = `${URL_BASE}/work/arfestkl`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: URL_BASE },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${URL_BASE}/work` },
    { '@type': 'ListItem', position: 3, name: 'ARFestKL', item: PAGE_URL },
  ],
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'ARFestKL — City-Wide WebAR Art Festival',
  url: PAGE_URL,
  description:
    'Downtown Kuala Lumpur transformed into a 30-point WebAR playground featuring 35 AR artworks by 42 local and international artists. 52,417 AR impressions and 12,040 QR scans during the festival.',
  image: `${URL_BASE}/images/arfestkl/arfestkl_hero.jpg`,
  creator: { '@id': `${URL_BASE}/#organization` },
  about: ['Augmented Reality', 'Public Art Festival', 'WebAR'],
  keywords: ['8th Wall', 'WebAR', 'public art', 'QR activation', 'Kuala Lumpur', 'AR festival'],
  inLanguage: 'en-MY',
  isPartOf: { '@id': `${URL_BASE}/#website` },
  locationCreated: {
    '@type': 'Place',
    name: 'Downtown Kuala Lumpur',
    address: { '@type': 'PostalAddress', addressLocality: 'Kuala Lumpur', addressCountry: 'MY' },
  },
}

const results = [
  { metric: 'AR Impressions', result: '52,417' },
  { metric: 'QR Code Scans', result: '12,040' },
  { metric: 'Participating Artists', result: '42' },
  { metric: 'AR Artworks', result: '35' },
]

const galleryImages = [
  { n: 1, alt: 'ARFestKL — visitor scanning a QR code on a downtown KL street wall to activate a WebAR artwork' },
  { n: 2, alt: 'ARFestKL — augmented reality artwork rendered through a smartphone camera over a Kuala Lumpur cityscape' },
  { n: 3, alt: 'ARFestKL — festival signage and QR-activated AR touchpoint installation across downtown Kuala Lumpur' },
  { n: 4, alt: 'ARFestKL — interactive WebAR sculpture overlaid on a heritage building facade' },
  { n: 5, alt: 'ARFestKL — festival attendees engaging with multiple AR artworks throughout the city centre' },
]

export default function ARFestKLPage() {
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

      {/* MEDIA — hero video (poster falls back to hero image; section's pixel-grid is the final fallback) */}
      <section className="bg-edt-black border-b border-white/10 relative overflow-hidden pixel-grid">
        <div className="aspect-video w-full relative group">
          <img
            src="/images/arfestkl/arfestkl_hero.jpg"
            alt="ARFestKL"
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
                src={`/images/arfestkl/arfestkl_gallery_0${g.n}.jpg`}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-cover border border-white/10"
              />
            ))}
          </div>
          <YouTubeEmbed videoId="1QhRY4hOxpM" title="ARFestKL" />
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
            <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-4">
              ARFestKL wanted to turn Kuala Lumpur&apos;s city centre into a living art festival —
              42 local and international artists, 35 AR artworks, all distributed across 30+
              physical touchpoints between Bukit Bintang, Pasar Seni and Dataran Merdeka. The
              public experience had to be frictionless: no app store, no account, no learning
              curve.
            </p>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              The hard part was scale and reliability. AR experiences in a busy outdoor environment
              need to load fast on mid-tier Android devices, survive intermittent 4G, and render
              accurately under harsh tropical sun. Each artwork also needed to be authored, hosted
              and tracked independently so participating artists could measure their own reach.
            </p>
          </div>
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Solution</span>
            <h2 className="display-md text-white mb-6">What We Delivered</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-4">
              EDT built 35 WebAR experiences on 8th Wall, distributed across 30+ Downtown KL
              touchpoints. Each QR code activated a unique AR artwork in-situ — sculptures
              hovering over heritage walls, particle systems wrapping around lamp posts, generative
              animations pinned to plaza floors. The system was app-free: any iOS or Android browser
              could load the experience inside three seconds.
            </p>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              Behind the scenes, EDT instrumented every artwork with real-time analytics, giving
              ARFestKL and individual artists access to live impression and scan data. By the end of
              the festival, the project had recorded 52,417 AR impressions and 12,040 QR scans —
              numbers that turned ARFestKL from a one-off art event into an ongoing case study cited
              across Southeast Asia&apos;s public-art sector.
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
