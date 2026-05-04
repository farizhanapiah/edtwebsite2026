import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | EDT Immersive Experience Case Studies Malaysia',
  description:
    "Explore EDT's portfolio: 52,000+ AR impressions, Guinness World Records, and experiential campaigns for Malaysia's biggest brands and government agencies.",
  alternates: {
    canonical: '/work',
    languages: { 'en-MY': '/work', 'x-default': '/work' },
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "EDT Portfolio — Immersive Experience Case Studies",
  url: 'https://weareedt.com/work',
  description:
    "EDT's portfolio of immersive AR, VR, MR, AI avatar, projection mapping and interactive installation projects across Malaysia and Southeast Asia.",
  isPartOf: { '@id': 'https://weareedt.com/#website' },
  about: { '@id': 'https://weareedt.com/#organization' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://weareedt.com' },
    { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://weareedt.com/work' },
  ],
}

const projects = [
  {
    client: 'MCMC',
    title: 'MetaHRise',
    category: 'VR Training',
    stat: '93% satisfaction · Malaysia Book of Records 2024',
    href: '/work/metahrise',
    image: '/images/metahrise/metahrise_thumb.jpg',
    youtubeId: 'E9LTZpKwLto',
    featured: true,
  },
  {
    client: 'Think City',
    title: 'CheritAR',
    category: 'AR Heritage',
    stat: '12 countries reached · 1,442 AR impressions',
    href: '/work/cheritar-think-city',
    image: '/images/cheritar-think-city/cheritar-think-city_thumb.jpg',
    youtubeId: 'oEW4lWgQin0',
    featured: true,
  },
  {
    client: 'ARFestKL',
    title: 'ARFestKL',
    category: 'AR Event',
    stat: '52,417 AR impressions · 12,040 QR scans',
    href: '/work/arfestkl',
    image: '/images/arfestkl/arfestkl_thumb.jpg',
    youtubeId: '1QhRY4hOxpM',
    featured: true,
  },
  {
    client: 'Ministry of Textile',
    title: 'IKAT Malaysia',
    category: 'Immersive Exhibition',
    stat: 'RM 3.2M media value · 5,822 visitors',
    href: '/work/ikat',
    image: '/images/ikat/ikat_thumb.jpg',
    youtubeId: 'kZkYuuD3Fjc',
    featured: false,
  },
  {
    client: 'AirAsia',
    title: "AirAsia Founders' Gallery",
    category: 'Interactive Installation',
    stat: 'Interactive walls + AR + AI imagery',
    href: '/work/airasia-founders-gallery',
    image: '/images/airasia-founders-gallery/airasia-founders-gallery_thumb.jpg',
    youtubeId: 'DCjNIa-R6tc',
    featured: false,
  },
  {
    client: 'New Balance',
    title: 'New Balance Grey Day',
    category: 'AR + Immersive Room',
    stat: 'AR try-on + immersive brand room',
    href: '/work/new-balance-grey-day',
    image: '/images/new-balance-grey-day/new-balance-grey-day_thumb.jpg',
    youtubeId: 'drOAYjmo928',
    featured: false,
  },
  {
    client: 'AirAsia',
    title: 'AirAsia Supersale',
    category: 'Virtual Production',
    stat: 'ARVENA platform · branded live stream',
    href: '/work',
    image: '/images/airasia-supersale/airasia-supersale_thumb.jpg',
    youtubeId: 'DPJieWjycu8',
    featured: false,
  },
  {
    client: 'Sunway',
    title: 'Sunway Wishing Well',
    category: 'AR Interactive LED',
    stat: 'AR + LED interactive installation',
    href: '/work',
    image: '/images/sunway-wishing-well/sunway-wishing-well_thumb.jpg',
    youtubeId: 'uCV_ouHd1_w',
    featured: false,
  },
  {
    client: 'Malaysia Airlines',
    title: 'Hologram Stewardess',
    category: 'AI Hologram',
    stat: 'Deployed at MATIC KL',
    href: '/work',
    image: '/images/hologram-stewardess/hologram-stewardess_thumb.jpg',
    youtubeId: 'ARaygC4XJ5U',
    youtubeIdSecondary: '8av3k7-6tmg',
    featured: false,
  },
  {
    client: 'PNB',
    title: 'PNB 118 Stories',
    category: 'Interactive Wall',
    stat: 'Largest interactive installation for PNB 118 tower',
    href: '/work',
    image: '/images/pnb-118-stories/pnb-118-stories_thumb.jpg',
    youtubeId: 'ezLgmijHWRI',
    featured: false,
  },
  {
    client: 'Sime Darby',
    title: 'VR Training',
    category: 'VR Training',
    stat: 'Forklift simulation · safety training',
    href: '/work',
    image: '/images/sime-darby-vr-training/sime-darby-vr-training_thumb.jpg',
    youtubeId: 'MoFESfgjgDE',
    featured: false,
  },
  {
    client: 'Prudential SG',
    title: 'EEG Brainwave Art',
    category: 'Interactive Installation',
    stat: 'EEG brainwave generative art · Singapore',
    href: '/work',
    image: '/images/eeg-brainwave-art/eeg-brainwave-art_thumb.jpg',
    youtubeId: 'GKMJ47xKQ3c',
    featured: false,
  },
  {
    client: 'ECCO',
    title: 'VR Putting Challenge',
    category: 'VR Experience',
    stat: 'ECCO VR activation · Singapore',
    href: '/work',
    image: '/images/ecco-vr-putting/ecco-vr-putting_thumb.jpg',
    youtubeId: 'BTumEJQTIVc',
    youtubeIdSecondary: '0ki23QmJS1s',
    featured: false,
  },
  {
    client: 'Tokyo Fire Department',
    title: 'VR Earthquake Simulation',
    category: 'VR Training',
    stat: 'Disaster preparedness VR · Japan',
    href: '/work',
    image: '/images/tokyo-vr-earthquake/tokyo-vr-earthquake_thumb.jpg',
    youtubeId: 'sc59WclFLog',
    featured: false,
  },
  {
    client: 'Sneakerlah',
    title: 'VR Experience',
    category: 'VR Experience',
    stat: 'VR activation · sneaker festival KL',
    href: '/work',
    image: '/images/sneakerlah-vr/sneakerlah-vr_thumb.jpg',
    youtubeId: '-GrZFwLmAr0',
    featured: false,
  },
  {
    client: 'Georgetown Festival',
    title: 'Projection Mapping',
    category: 'Projection Mapping',
    stat: 'Georgetown Festival competition win',
    href: '/work',
    image: '/images/georgetown-projection/georgetown-projection_thumb.png',
    youtubeId: 'bdcofqr7Hu4',
    featured: false,
  },
  {
    client: 'Sarawak Tourism Board',
    title: 'Projection Mapping (×2)',
    category: 'Projection Mapping',
    stat: '2 landmark projection projects',
    href: '/work',
    image: '/images/sarawak-projection/sarawak-projection_thumb.png',
    youtubeId: 'iGEyKhjoyXc',
    featured: false,
  },
  {
    client: 'Silau Maya',
    title: 'Experimental Digital Stage',
    category: 'Virtual Production',
    stat: 'ARVENA live music immersive stage',
    href: '/work',
    image: '/images/silau-maya-stage/silau-maya-stage_thumb.jpg',
    youtubeId: 'EBA4xa7uOX4',
    featured: false,
  },
  {
    client: 'Moonton / Garena',
    title: 'Mobile Legends SupremaSEA',
    category: 'Virtual Production',
    stat: 'Unreal Engine music video production',
    href: '/work',
    image: '/images/mobile-legends-supremasea/mobile-legends-supremasea_thumb.jpg',
    youtubeId: 'nf2AD52UUZs',
    featured: false,
  },
  {
    client: 'Safi',
    title: 'Shayla Sis Shayla',
    category: 'AI Virtual Influencer',
    stat: 'AI virtual influencer campaign',
    href: '/work',
    image: '/images/shayla-sis-shayla/shayla-sis-shayla_thumb.jpg',
    youtubeId: 'kmvf2IjQdNI',
    featured: false,
  },
]

const categories = ['All', 'AR / VR', 'AI Avatars', 'Projection Mapping', 'Interactive', 'Virtual Production', 'Wellness']

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Portfolio
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">Our Work.</h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[520px]">
            50+ projects. 12 countries. Unforgettable experiences. Explore what we&apos;ve built — and
            what we can build for you.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-edt-blue py-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '50+', l: 'Projects' },
              { n: '12', l: 'Countries' },
              { n: '93%', l: 'Satisfaction Rate' },
              { n: '3', l: 'National Awards' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-white text-4xl lg:text-5xl leading-none mb-1">{s.n}</div>
                <p className="font-sans text-[12px] font-semibold tracking-widest uppercase text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-surface border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide py-0">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`font-sans text-[12px] font-semibold tracking-widest uppercase px-5 py-4 whitespace-nowrap border-r border-white/10 cursor-pointer transition-colors ${
                  i === 0 ? 'text-white bg-edt-blue' : 'text-edt-grey hover:text-white'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="bg-edt-black py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-8">
            Featured
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((p) => (
              <Link
                key={p.href + p.title}
                href={p.href}
                className="group border border-white/10 hover:border-edt-blue transition-colors overflow-hidden block"
              >
                <div className="window-bar">
                  <div className="window-dot" /><div className="window-dot" /><div className="window-dot" />
                  <span className="ml-2 font-sans text-[10px] font-semibold tracking-widest uppercase text-white/30">
                    {p.client}.exe
                  </span>
                </div>
                <div className="h-44 bg-edt-blue/10 pixel-grid relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.client} — ${p.title}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="edt-badge">{p.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-grey mb-2">
                    {p.client}
                  </p>
                  <h2 className="font-sans text-[17px] font-semibold text-white mb-3 group-hover:text-edt-blue transition-colors">
                    {p.title}
                  </h2>
                  <p className="font-sans text-[12px] text-edt-blue/80 mb-4">{p.stat}</p>
                  <span className="btn-ghost text-[12px]">View Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PROJECTS GRID */}
      <section className="bg-edt-black py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-8">
            All Projects
          </p>
          <div className="flex flex-col gap-0 border-t border-white/10">
            {rest.map((p, i) => (
              <Link
                key={p.title + i}
                href={p.href}
                className="flex items-start justify-between gap-6 border-b border-white/10 py-6 group hover:bg-surface/50 px-4 -mx-4 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="font-sans text-[11px] font-semibold tracking-widest text-white/20 pt-1 flex-shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-24 h-16 flex-shrink-0 overflow-hidden bg-edt-blue/10 hidden sm:block">
                    <img
                      src={p.image}
                      alt={`${p.client} — ${p.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="edt-badge mb-2 inline-block">{p.category}</span>
                    <h3 className="font-sans text-[15px] font-semibold text-white group-hover:text-edt-blue transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[12px] text-edt-grey mt-1">{p.client}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-sans text-[12px] text-edt-grey/60 hidden sm:block max-w-[200px]">{p.stat}</p>
                  <span className="btn-ghost text-[11px] mt-2 inline-block">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-2">Ready to add your project to this list?</h2>
            <p className="font-sans text-[15px] text-white/80">Tell us about your brief.</p>
          </div>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Start a Project →
          </Link>
        </div>
      </section>
    </>
  )
}
