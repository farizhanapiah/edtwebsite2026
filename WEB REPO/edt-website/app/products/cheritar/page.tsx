import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CheritAR | AI-Powered AR Heritage Platform Malaysia | EDT',
  description: "CheritAR gives historical landmarks a voice. Scan a site, talk to its building. AI-powered AR avatars for Malaysia\u2019s heritage tourism.",
}

const locations = [
  {
    name: 'Sultan Abdul Samad Building',
    area: 'Dataran Merdeka, Kuala Lumpur',
    desc: 'One of Malaysia\u2019s most iconic colonial-era landmarks comes to life through CheritAR. Visitors scan the QR at the building and an AR avatar narrates the structure\u2019s colonial history, architectural design, and its role in Malaysian independence.',
    year: 'Active',
  },
  {
    name: 'Victoria Fountain',
    area: 'Dataran Merdeka, Kuala Lumpur',
    desc: "The Victorian-era fountain at Dataran Merdeka hosts a CheritAR avatar that discusses the history of British colonial infrastructure in Kuala Lumpur and the symbolism embedded in the fountain's design.",
    year: 'Active',
  },
  {
    name: 'National Textile Museum',
    area: 'Kuala Lumpur',
    desc: 'Inside the National Textile Museum, CheritAR avatars guide visitors through Malaysia\u2019s textile heritage — explaining the cultural significance of songket, batik, and IKAT weaving traditions in an interactive conversational format.',
    year: 'Active',
  },
]

const metrics = [
  { value: '1,442', label: 'AR Impressions Recorded' },
  { value: '12+', label: 'Countries of Origin — Visitors' },
  { value: '3', label: 'Active KL Locations' },
  { value: '0', label: 'App Downloads Required' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Scan the QR',
    desc: 'A QR code is placed at the heritage site. Visitors scan it with any smartphone camera — no app download, no account registration.',
  },
  {
    step: '02',
    title: 'Activate in Browser',
    desc: 'CheritAR launches directly in the mobile browser. The camera activates and the AR environment loads within seconds.',
  },
  {
    step: '03',
    title: 'AR Avatar Appears',
    desc: "A contextually designed AR avatar emerges in the visitor\'s environment, anchored to the physical space around the landmark.",
  },
  {
    step: '04',
    title: 'Ask Questions',
    desc: "Visitors speak or type their questions. The AI avatar responds with accurate, curated information about the site\'s history, architecture, and cultural significance.",
  },
]

export default function CheritARPage() {
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
            <span className="text-white">CheritAR</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Buildings That Speak.
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            CheritAR gives Malaysia\u2019s historical landmarks a voice. Scan a QR code, and an AI-powered AR avatar appears — ready to tell the story of the building you're standing in front of, in your language, at your pace.
          </p>
          <Link href="/contact" className="btn-primary">Deploy CheritAR →</Link>
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
                Heritage Tourism Reimagined Through AI and AR
              </h2>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                CheritAR is EDT's AI-powered augmented reality platform for heritage tourism. Developed in partnership with Think City, CheritAR places conversational AI avatars at historical landmarks — giving every site a knowledgeable, always-available guide that visitors can have a real conversation with.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                It runs entirely in the mobile browser — no app download required. Visitors from over 12 countries have already interacted with CheritAR across three active Kuala Lumpur locations.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                CheritAR is available for deployment at heritage sites, museums, cultural institutions, and tourism destinations across Malaysia and internationally.
              </p>
            </div>
            <div className="border border-white/10 p-8">
              <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-2">Partnership</p>
              <p className="font-display text-[16px] uppercase tracking-[0.06em] text-white mb-6">
                Developed with Think City
              </p>
              <div className="window-bar mb-6">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="space-y-4">
                {[
                  ['Technology', 'WebAR + Conversational AI'],
                  ['App Required', 'No — browser-based'],
                  ['Language Support', 'English, BM, Mandarin'],
                  ['Partner', 'Think City (Urbanisme NGO)'],
                  ['Current Locations', '3 in Kuala Lumpur'],
                  ['Visitor Countries', '12+ nations'],
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

      {/* KEY METRICS */}
      <section className="bg-edt-black py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-white/10">
            {metrics.map((m) => (
              <div key={m.value} className="bg-surface p-8 border border-white/10">
                <p className="font-display text-[40px] lg:text-[52px] text-edt-blue mb-2">{m.value}</p>
                <p className="font-sans text-[13px] text-edt-grey leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE LOCATIONS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Active Locations
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Three KL Landmarks, Live Now
          </h2>
          <div className="space-y-6">
            {locations.map((loc, idx) => (
              <div key={loc.name} className="border border-white/10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-1">
                      Location {String(idx + 1).padStart(2, '0')} — {loc.area}
                    </p>
                    <h3 className="font-display text-[18px] uppercase tracking-[0.06em] text-white">
                      {loc.name}
                    </h3>
                  </div>
                  <span className="edt-badge self-start">{loc.year}</span>
                </div>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            How It Works
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Four Steps from Scan to Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-white/10">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-surface p-8 border border-white/10">
                <p className="font-display text-[36px] text-edt-blue mb-4">{step.step}</p>
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">
            Give Your Heritage Site a Voice.
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Deploy CheritAR →
          </Link>
        </div>
      </section>
    </>
  )
}
