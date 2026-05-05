import type { Metadata } from 'next'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'Immersive Events Malaysia | Brand Activations & Experiential Production | EDT',
  description: 'End-to-end immersive event production. EDT delivers brand activations, exhibitions, and public experiences — from concept to post-event.',
}

const whatsIncluded = [
  {
    phase: '01 — Concept',
    label: 'Creative Concept & Strategy',
    desc: 'We develop the narrative, audience journey, and experiential architecture — translating your brief into a cohesive immersive concept with clear KPIs.',
  },
  {
    phase: '02 — Design',
    label: 'Visual & Experience Design',
    desc: 'Spatial design, motion graphics direction, UI/UX for interactive touchpoints, and brand integration across every surface and moment.',
  },
  {
    phase: '03 — Technology',
    label: 'Tech Build & Integration',
    desc: 'AR, projection mapping, LED walls, interactive installations, AI avatars — whichever technologies serve the experience best, built and integrated by our in-house team.',
  },
  {
    phase: '04 — Crew',
    label: 'Production Crew & Logistics',
    desc: 'Project managers, technicians, content producers, and event coordinators — a dedicated crew from pre-production through breakdown.',
  },
  {
    phase: '05 — On-Site',
    label: 'On-Site Execution',
    desc: 'Full on-site technical management, real-time content switching, crowd flow management, and live troubleshooting by experienced EDT operators.',
  },
  {
    phase: '06 — Post',
    label: 'Post-Event Reporting',
    desc: 'Engagement analytics, media documentation, highlight reels, and performance reports — everything you need to prove ROI and plan the next one.',
  },
]

const eventTypes = [
  {
    type: 'Corporate Events & Product Launches',
    desc: 'Immersive product launches, shareholder experiences, and brand activations for Fortune 500 companies and local conglomerates. We build moments that earn media coverage.',
  },
  {
    type: 'Public Festivals & Cultural Events',
    desc: 'Large-scale public experiences for city festivals, national campaigns, and cultural celebrations. We design for high-volume, diverse audiences with inclusive technology.',
  },
  {
    type: 'Government & Tourism Campaigns',
    desc: 'Experiences that support national tourism narratives, government communication campaigns, and ministry-led exhibitions — from Sarawak to Putrajaya.',
  },
  {
    type: 'Retail & Mall Activations',
    desc: 'In-mall experiential activations that drive footfall, brand awareness, and social sharing. Designed for the Malaysian retail environment — high-energy, photogenic, crowd-tested.',
  },
]

const stats = [
  { value: '52,417', label: 'AR impressions — ARFestKL' },
  { value: '5,822', label: 'Visitors — IKAT Experience' },
  { value: '3', label: 'Cities toured — IKAT national rollout' },
  { value: '12+', label: 'Countries reached — CheritAR activation' },
]

const relatedCaseStudies = [
  {
    name: 'ARFestKL',
    videoId: '1QhRY4hOxpM',
    client: 'Kuala Lumpur City Hall (DBKL)',
    description:
      'Malaysia\u2019s first city-scale AR festival. Deployed across 10+ landmark locations in KL, ARFestKL generated 52,417 AR impressions through WebAR activations, interactive LED installations, and a public AR photo experience that trended nationally.',
    tags: ['WebAR', 'LED Installation', 'Public Festival', 'DBKL'],
    metric: '52,417 AR Impressions',
  },
  {
    name: 'IKAT — Cultural Textile Experience',
    videoId: 'kZkYuuD3Fjc',
    client: 'Ministry of Tourism, Arts & Culture',
    description:
      'A travelling immersive exhibition celebrating Malaysia\u2019s IKAT textile heritage. The experience deployed across 3 cities, combining projection mapping, interactive weaving simulations, and an AI-guided narrative — reaching 5,822 visitors in its first run.',
    tags: ['Projection Mapping', 'Interactive', 'Travelling Exhibition', 'MOTAC'],
    metric: '5,822 Visitors',
  },
]

const faqs = [
  {
    q: 'Do you handle events end-to-end or only the technology?',
    a: 'EDT can engage at any level — as a technology partner, a creative production house, or a full end-to-end event producer. Most clients engage us for full production: concept, tech build, crew, on-site execution, and post-event reporting. We also work alongside existing event agencies as a specialist tech and creative layer.',
  },
  {
    q: 'What is the minimum lead time for an immersive event?',
    a: 'For a full-scale immersive event with custom content and technology, we recommend a minimum of 8 weeks. Simpler brand activations using existing products (like MimpiLab or Hoomans.ai) can be turned around in 2–3 weeks. Tight timelines are possible — contact us early and we will give you an honest scoping.',
  },
  {
    q: 'Can you work with an existing creative agency or event organiser?',
    a: 'Yes, and we do it regularly. EDT integrates smoothly into existing production structures — we plug in as the tech and content specialists while your agency handles brand strategy and logistics. We have worked alongside many of Malaysia\u2019s top event agencies and creative studios.',
  },
]

export default function ImmersiveEventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 overflow-hidden">
        <img
          src="/images/ikat/ikat_hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-edt-black via-edt-black/80 to-edt-black/40" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Immersive Events</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Service
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Experiences Built to Be Felt
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            EDT delivers end-to-end immersive event production — brand activations, public exhibitions, and government campaigns — from first concept through post-event reporting. One team. Every layer.
          </p>
          <Link href="/contact" className="btn-primary">Plan Your Event →</Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-white/10">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-edt-black p-8 border border-white/10">
                <p className="font-display text-[36px] lg:text-[48px] text-edt-blue mb-2">{stat.value}</p>
                <p className="font-sans text-[13px] text-edt-grey leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            What's Included
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Six Phases, One Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsIncluded.map((item) => (
              <div key={item.phase} className="border border-white/10 p-8">
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-blue mb-2">
                  {item.phase}
                </p>
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-white mb-3">
                  {item.label}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Event Types
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Who We Produce For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((et) => (
              <div key={et.type} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-white mb-3">
                  {et.type}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Related Case Studies
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Events We Have Delivered
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedCaseStudies.map((cs) => (
              <div key={cs.name} className="border border-white/10 p-8">
                <YouTubeEmbed videoId={cs.videoId} title={cs.name} className="mb-6" />
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-edt-grey mb-2">
                  {cs.client}
                </p>
                <h3 className="font-display text-[18px] uppercase tracking-[0.06em] text-white mb-2">
                  {cs.name}
                </h3>
                <p className="font-display text-[13px] text-edt-blue mb-4">{cs.metric}</p>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed mb-6">
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
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
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
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
            Let's Build Something Unforgettable.
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Brief EDT →
          </Link>
        </div>
      </section>
    </>
  )
}
