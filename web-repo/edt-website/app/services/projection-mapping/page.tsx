import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projection Mapping Malaysia | Building & Stage Mapping | EDT',
  description: 'Transform any surface into a canvas. EDT delivers projection mapping for buildings, stages, floors, and cultural landmarks across Malaysia and SEA.',
}

const capabilities = [
  {
    label: 'Building Facades',
    desc: 'Large-scale outdoor projection mapping on architectural surfaces — government buildings, hotel facades, shopping mall exteriors. EDT handles structural survey, content production, and multi-projector alignment.',
  },
  {
    label: 'Stage & Floor Mapping',
    desc: 'Dynamic projection mapped stages and LED floors for concerts, award shows, and live performances. Real-time content switching, timecoded sequences, and live camera integration.',
  },
  {
    label: 'Indoor Architectural',
    desc: 'Interior venue transformation using projection on ceilings, pillars, arches, and curved surfaces. Perfect for galas, product launches, and permanent museum installations.',
  },
  {
    label: 'Cultural & Heritage Sites',
    desc: 'Projection mapping on historical landmarks, heritage buildings, and cultural monuments. Respectful, reversible, and designed to tell local stories with sensitivity.',
  },
]

const pastProjects = [
  {
    name: 'Georgetown Festival — Penang Heritage Mapping',
    client: 'Georgetown Festival',
    location: 'George Town, Penang',
    description:
      'A multi-night public projection mapping event celebrating Penang\u2019s UNESCO heritage. Historical archival images, local art, and generative animations were mapped across colonial-era shophouse facades in the heritage zone, attracting thousands of nightly visitors.',
    tags: ['Building Facade', 'Cultural Heritage', 'Multi-Night', 'TouchDesigner'],
  },
  {
    name: 'Sarawak Tourism Board — Rainforest World Music Festival',
    client: 'Sarawak Tourism Board',
    location: 'Kuching, Sarawak',
    description:
      'Outdoor stage projection mapping for the Rainforest World Music Festival. EDT produced real-time generative content tied to the musical performances, with projection-mapped stage wings and custom LED integration for the main stage.',
    tags: ['Stage Mapping', 'Live Performance', 'Generative Content', 'Sarawak'],
  },
  {
    name: 'Sarawak Tourism Board — Kuching Festival',
    client: 'Sarawak Tourism Board',
    location: 'Kuching, Sarawak',
    description:
      "Architectural projection mapping on a heritage building for Kuching's annual city festival. The piece narrated Sarawak's history and natural landscape through layered animations and archival photography, running nightly over a two-week festival period.",
    tags: ['Heritage Building', 'Festival', 'Archival Content', 'Sarawak'],
  },
]

const faqs = [
  {
    q: 'What surfaces can be projection mapped?',
    a: 'Almost any surface — building facades, stage structures, floors, ceilings, curved architectural features, and even organic shapes like trees or rocky terrain. The key variable is the throw distance and ambient light. EDT conducts a site survey for every outdoor project to plan projector placement, lens selection, and content geometry.',
  },
  {
    q: 'How far in advance do you need to be booked for a projection mapping event?',
    a: 'For large outdoor building facade projects, we recommend a minimum of 8 weeks lead time — this covers site survey, structural permits (if needed), content production, and technical rehearsal. For smaller indoor architectural mapping or stage work, 4–6 weeks is typically sufficient.',
  },
  {
    q: 'Can projection mapping work in daylight or bright environments?',
    a: 'Standard projection mapping requires low ambient light to achieve optimal visual impact — which is why most outdoor events are scheduled after dusk. For indoor daytime environments, we specify higher-lumen projectors and use contrast-optimised content. We always advise on the right setup for your specific venue and timing.',
  },
]

export default function ProjectionMappingPage() {
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
            <span className="text-white">Projection Mapping</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Service
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Every Surface Is a Canvas
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            EDT delivers projection mapping for buildings, stages, floors, and cultural landmarks across Malaysia and SEA — from single-night festivals to permanent architectural installations.
          </p>
          <Link href="/contact" className="btn-primary">Brief a Project →</Link>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Capabilities
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            What We Map and How
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.label} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.08em] text-edt-blue mb-3">
                  {cap.label}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST PROJECTS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Past Projects
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Where We Have Mapped
          </h2>
          <div className="space-y-8">
            {pastProjects.map((proj) => (
              <div key={proj.name} className="border border-white/10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-1">
                      {proj.client} — {proj.location}
                    </p>
                    <h3 className="font-display text-[17px] uppercase tracking-[0.06em] text-white">
                      {proj.name}
                    </h3>
                  </div>
                </div>
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
            Got a Surface? We Have a Story for It.
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Start the Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
