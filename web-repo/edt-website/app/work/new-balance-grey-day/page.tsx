import type { Metadata } from 'next'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'New Balance Grey Day | AR + Immersive Room | EDT',
  description:
    "EDT created an AR try-on experience and immersive brand room for New Balance's Grey Day activation in Malaysia.",
  alternates: {
    canonical: '/work/new-balance-grey-day',
    languages: {
      'en-MY': '/work/new-balance-grey-day',
      'x-default': '/work/new-balance-grey-day',
    },
  },
}

const URL_BASE = 'https://weareedt.com'
const PAGE_URL = `${URL_BASE}/work/new-balance-grey-day`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: URL_BASE },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${URL_BASE}/work` },
    { '@type': 'ListItem', position: 3, name: 'New Balance Grey Day', item: PAGE_URL },
  ],
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'New Balance Grey Day Malaysia — AR Try-On + Immersive Brand Room',
  url: PAGE_URL,
  description:
    "Two-part Grey Day activation built by EDT for New Balance Malaysia: a WebAR foot-tracking try-on experience for the Grey Day collection and a motion-reactive immersive brand room with LED P2.0 walls and TouchDesigner-driven content.",
  image: `${URL_BASE}/images/new-balance-grey-day/new-balance-grey-day_hero.jpg`,
  creator: { '@id': `${URL_BASE}/#organization` },
  about: ['Augmented Reality', 'Brand Activation', 'Immersive Installation', 'Sneaker Retail'],
  keywords: [
    '8th Wall',
    'WebAR foot tracking',
    'TouchDesigner',
    'LED P2.0',
    'New Balance',
    'Grey Day',
    'brand activation',
  ],
  inLanguage: 'en-MY',
  isPartOf: { '@id': `${URL_BASE}/#website` },
  locationCreated: {
    '@type': 'Place',
    name: 'Malaysia',
    address: { '@type': 'PostalAddress', addressCountry: 'MY' },
  },
}

const galleryImages = [
  { n: 1, alt: 'New Balance Grey Day Malaysia — visitor using WebAR foot-tracking to virtually try on the Grey Day sneaker collection' },
  { n: 2, alt: 'New Balance Grey Day Malaysia — motion-reactive LED brand room responding to attendees as they move through the activation space' },
  { n: 3, alt: 'New Balance Grey Day Malaysia — branded content moment inside the immersive Grey Day room set up for social capture' },
  { n: 4, alt: "New Balance Grey Day Malaysia — close-up of the AR try-on interface showing a Grey Day silhouette rendered onto a shopper's foot" },
]

export default function NewBalanceGreyDayPage() {
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
            <span className="edt-badge">Brand Activation</span>
            <span className="edt-badge">New Balance</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            New Balance Grey Day
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            EDT built a two-part Grey Day activation for New Balance Malaysia — a WebAR
            try-on experience for the collection and an immersive brand room with LED walls
            and motion-reactive content that put the brand on another level.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services/ar-vr-mr-development" className="btn-primary">
              AR Development Service
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
            src="/images/new-balance-grey-day/new-balance-grey-day_hero.jpg"
            alt="New Balance Grey Day"
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
                src={`/images/new-balance-grey-day/new-balance-grey-day_gallery_0${g.n}.jpg`}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-cover border border-white/10"
              />
            ))}
          </div>
          <YouTubeEmbed videoId="drOAYjmo928" title="New Balance Grey Day" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="display-md font-display uppercase mb-8">Project Overview</h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                New Balance's Grey Day is a global moment — a celebration of grey as a
                colour, a culture, and an identity. For the Malaysia activation, New Balance
                needed an experience that went beyond the pop-up table and branded backdrop.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT designed and delivered two interlocking experiences: a WebAR try-on
                that let shoppers virtually preview the Grey Day collection on their own feet,
                and an immersive brand room installation that wrapped attendees in the visual
                world of Grey Day through reactive LED displays.
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
                  { label: 'Client', value: 'New Balance Malaysia' },
                  { label: 'Category', value: 'AR + Immersive Room' },
                  { label: 'Technology', value: 'WebAR · Immersive Room · LED' },
                  { label: 'Event', value: 'Grey Day Malaysia' },
                  { label: 'Type', value: 'Pop-Up Brand Activation' },
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
              Standing Out in a Saturated Sneaker Market
            </h2>
            <p className="text-edt-grey text-lg leading-relaxed mb-6">
              The Malaysian sneaker scene is deeply engaged — and deeply discerning. Grey
              Day activations happen across the region simultaneously, which means local
              brand moments risk feeling like carbon copies of a global template. New
              Balance needed the Malaysia Grey Day to be unmistakably premium and
              unmistakably theirs.
            </p>
            <p className="text-edt-grey text-lg leading-relaxed">
              The activation also needed to drive social content. In a market where every
              brand activation competes for the same Instagram grid, the experience had to
              be inherently shareable — giving attendees a reason to document, post, and
              amplify the moment organically.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION — TWO EXPERIENCES */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">The Solution</span>
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Two Experiences. One Grey Day.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Experience 1 */}
            <div className="border border-edt-blue p-8 lg:p-10">
              <div className="text-edt-blue font-display text-sm uppercase tracking-widest mb-4">
                Experience 01
              </div>
              <h3 className="display-sm font-display uppercase text-white mb-6">
                WebAR Try-On
              </h3>
              <p className="text-edt-grey leading-relaxed mb-6">
                Shoppers pointed their phone camera at their feet and virtually tried on the
                entire Grey Day collection via WebAR — no app download, no waiting in line.
                Each silhouette was rendered in accurate proportions with real-time foot
                tracking.
              </p>
              <ul className="space-y-3">
                {[
                  'Full Grey Day collection AR-mapped',
                  '8th Wall foot-tracking technology',
                  'Share-to-story integration',
                  'Works on any iOS/Android browser',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-edt-grey text-sm">
                    <span className="text-edt-blue mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border border-white/20 p-8 lg:p-10">
              <div className="text-edt-blue font-display text-sm uppercase tracking-widest mb-4">
                Experience 02
              </div>
              <h3 className="display-sm font-display uppercase text-white mb-6">
                Immersive Brand Room
              </h3>
              <p className="text-edt-grey leading-relaxed mb-6">
                A dedicated installation space lined with high-resolution LED walls and
                motion sensors. As visitors moved through the room, the content responded —
                dynamic Grey Day visual world shifting around them in real time.
              </p>
              <ul className="space-y-3">
                {[
                  'LED P2.0 wall installation',
                  'Motion-reactive content via TouchDesigner',
                  'Branded content grid for social capture',
                  'Soundscape and ambient lighting sync',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-edt-grey text-sm">
                    <span className="text-edt-blue mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-white/10 p-8 lg:p-12">
            <h3 className="display-sm font-display uppercase text-white mb-6">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                '8th Wall WebAR',
                'TouchDesigner',
                'LED P2.0 Displays',
                'Motion Sensors',
                'Real-Time Rendering',
                'Share-to-Social API',
              ].map((tech) => (
                <span key={tech} className="edt-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT WORKED */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Why It Worked</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'No Friction',
                desc: 'WebAR launched directly in the browser. Attendees went from "What is this?" to actively trying on shoes in under 10 seconds.',
              },
              {
                title: 'Built for Sharing',
                desc: 'Every moment in the brand room was framed for the camera. The motion-reactive visuals gave every visitor a unique, shareable moment.',
              },
              {
                title: 'On-Brand Precision',
                desc: "Grey Day\'s visual identity — its palette, typography, and aesthetic — was respected and amplified through every pixel of the installation.",
              },
            ].map((card) => (
              <div key={card.title} className="border border-white/10 p-8">
                <h3 className="text-white font-semibold text-lg mb-4">{card.title}</h3>
                <p className="text-edt-grey leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-10">Explore Further</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                label: 'AR/VR/MR Development',
                href: '/services/ar-vr-mr-development',
                desc: "EDT's full-stack XR development — WebAR, native AR, and mixed reality.",
              },
              {
                label: 'Interactive Installations',
                href: '/services/interactive-installations',
                desc: 'LED walls, motion-reactive content, and immersive spatial design.',
              },
              {
                label: 'Retail & Malls',
                href: '/industries/retail-malls',
                desc: 'How EDT drives dwell time and social sharing for retail brands.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors"
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
            Make Your Next Brand Activation Unforgettable
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            EDT builds AR and immersive room experiences for retail brands, product launches,
            and pop-up activations across Malaysia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get a Quote
            </Link>
            <Link href="/industries/retail-malls" className="btn-ghost border-white text-white">
              Retail & Malls
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
