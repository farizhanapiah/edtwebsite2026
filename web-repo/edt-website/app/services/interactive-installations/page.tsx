import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interactive Installations Malaysia | LED Walls & Immersive Rooms | EDT',
  description: 'Transform spaces with LED walls, touch displays, EEG systems, and immersive rooms. EDT builds interactive installations for brand events, exhibitions, and permanent retail.',
}

const whatWeBuild = [
  {
    label: 'LED Walls',
    desc: 'High-resolution LED panels from P2.0 to P2.5 pitch — scalable from intimate retail displays to full stadium-scale video walls. Built for permanent or event-based deployment.',
  },
  {
    label: 'Touch Displays',
    desc: 'Multi-touch interactive screens with custom CMS, gesture navigation, and real-time content switching. Ideal for wayfinding, product exploration, and self-service kiosks.',
  },
  {
    label: 'Motion-Reactive Systems',
    desc: 'Kinect and LiDAR-powered installations that respond to body movement, presence, and gesture — turning passive audiences into active participants.',
  },
  {
    label: 'Immersive Rooms',
    desc: '360° projection environments that surround visitors in real-time generative content. Scalable from 4m x 4m pop-up rooms to permanent gallery spaces.',
  },
  {
    label: 'Holographic Screens',
    desc: 'Transparent OLED and holographic fan displays for retail windows, trade stands, and exhibition booths. Product-forward, attention-stopping.',
  },
  {
    label: 'EEG & Biometric Inputs',
    desc: 'Cutting-edge installations that read brainwave data or biometric signals and translate them into visual responses — for research labs, premium brand activations, and science museums.',
  },
]

const useCases = [
  {
    type: 'Brand Activations',
    desc: 'Immersive brand experiences that draw crowds, drive social sharing, and leave a lasting impression — at product launches, roadshows, and flagship store openings.',
  },
  {
    type: 'Museums & Heritage',
    desc: 'Permanent and semi-permanent interactive galleries for public institutions, science centres, and cultural museums across Malaysia and SEA.',
  },
  {
    type: 'Retail Environments',
    desc: 'In-store installations that extend dwell time, showcase product ranges interactively, and generate walk-in traffic from street-level display technology.',
  },
  {
    type: 'Exhibitions & Trade Shows',
    desc: 'Turnkey booth installations that integrate LED walls, touch kiosks, and motion-reactive elements — designed to attract, inform, and convert at KLCC, Matrade, and beyond.',
  },
]

const featuredProjects = [
  {
    name: 'PNB 118 Stories Interactive Wall',
    client: 'PNB Merdeka Ventures',
    description:
      'A large-scale multi-panel interactive LED installation inside the PNB 118 skyscraper visitor experience. Visitors navigate 118 floors of Malaysian history through a touch-driven LED wall, with layered media, archival footage, and generative animations.',
    tags: ['LED Wall', 'Touch Display', 'TouchDesigner', 'Permanent Installation'],
  },
  {
    name: 'New Balance Immersive Room',
    client: 'New Balance Malaysia',
    description:
      'A 360° projection-mapped immersive room experience for New Balance\u2019s flagship retail activation. Motion sensors tracked visitor movement, triggering real-time generative visuals that responded to how visitors moved through the space.',
    tags: ['Immersive Room', 'Motion Reactive', 'Kinect', 'Retail Activation'],
  },
]

const techStack = [
  { item: 'Software', detail: 'TouchDesigner, Unity 3D, Notch' },
  { item: 'LED Panels', detail: 'P2.0 – P2.5 indoor pitch, scalable configurations' },
  { item: 'Sensors', detail: 'Microsoft Kinect, SICK LiDAR, depth cameras' },
  { item: 'Display Hardware', detail: 'Multi-touch overlays, transparent OLED, holographic fans' },
  { item: 'Content Delivery', detail: 'Real-time rendering, CMS-driven content management' },
  { item: 'Structural', detail: 'Custom aluminium rigging, pixel-map calibration' },
]

const faqs = [
  {
    q: 'How long does it take to build an interactive installation?',
    a: 'Lead time varies by complexity. A single touch kiosk or LED wall can be delivered in 3–4 weeks. A full immersive room or multi-element installation typically requires 6–12 weeks from concept sign-off to deployment, including content production, hardware sourcing, and on-site calibration.',
  },
  {
    q: 'Can installations be built for both permanent and temporary use?',
    a: 'Yes. EDT designs and builds installations for both permanent venues (museums, retail stores, lobbies) and temporary event use (brand activations, trade shows, festivals). Hardware and structural design differ based on deployment type and we scope accordingly.',
  },
  {
    q: 'Do you handle content as well as hardware?',
    a: 'Absolutely. EDT is a full-stack team — we produce the interactive content (TouchDesigner patches, Unity builds, generative animations) alongside the hardware infrastructure. You do not need a separate creative or tech vendor.',
  },
]

export default function InteractiveInstallationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Interactive Installations</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Service
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Spaces That Respond, React, and Remember
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            EDT designs and builds interactive installations — LED walls, touch displays, motion-reactive systems, and immersive rooms — for brand activations, exhibitions, museums, and permanent retail environments across Malaysia and SEA.
          </p>
          <Link href="/contact" className="btn-primary">Start a Project →</Link>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            What We Build
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Six Types of Interactive Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10">
            {whatWeBuild.map((item) => (
              <div key={item.label} className="bg-surface p-8 border border-white/10">
                <h3 className="font-display text-[14px] uppercase tracking-[0.08em] text-white mb-3">
                  {item.label}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Use Cases
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Built for Real Environments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <div key={uc.type} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.08em] text-edt-blue mb-3">
                  {uc.type}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Featured Projects
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Installations We Have Delivered
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((proj) => (
              <div key={proj.name} className="border border-white/10 p-8">
                <div className="window-bar mb-6">
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="window-dot" />
                </div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-2">
                  {proj.client}
                </p>
                <h3 className="font-display text-[18px] uppercase tracking-[0.06em] text-white mb-4">
                  {proj.name}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed mb-6">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="edt-badge">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/work" className="btn-ghost">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Technology
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Hardware and Software We Use
          </h2>
          <div className="border border-white/10 divide-y divide-white/10">
            {techStack.map((row) => (
              <div key={row.item} className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-6">
                <span className="font-display text-[12px] uppercase tracking-[0.08em] text-edt-grey">
                  {row.item}
                </span>
                <span className="font-sans text-[15px] text-white md:col-span-2">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            FAQ
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Common Questions
          </h2>
          <div className="max-w-[760px] space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-8">
                <h3 className="font-display text-[14px] uppercase tracking-[0.06em] text-white mb-3">
                  {faq.q}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">
            Ready to Build an Interactive Installation?
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Talk to EDT →
          </Link>
        </div>
      </section>
    </>
  )
}
