import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve | EDT Immersive Tech for Corporate, Tourism, Education & More',
  description:
    'EDT creates immersive experiences for corporates, tourism boards, government agencies, educational institutions, retail spaces, and healthcare.',
}

const industries = [
  {
    name: 'Corporate & Brand Events',
    href: '/industries/corporate-events',
    desc: 'Brand activations, product launches, exhibitions, and live event experiences',
    tags: ['AR Activations', 'AI Holograms', 'Interactive Installations'],
    index: '01',
  },
  {
    name: 'Tourism & Heritage',
    href: '/industries/tourism-heritage',
    desc: 'AR/VR experiences that bring historical sites and tourism attractions to life',
    tags: ['CheritAR', 'AR Walking Tours', 'Projection Mapping'],
    index: '02',
  },
  {
    name: 'Education & Training',
    href: '/industries/education',
    desc: 'VR training simulations and MR educational modules',
    tags: ['VR Simulations', 'MR Learning', 'Safety Training'],
    index: '03',
  },
  {
    name: 'Retail & Malls',
    href: '/industries/retail-malls',
    desc: 'Interactive installations and AI photobooths that increase dwell time',
    tags: ['MimpiLab', 'AR Try-On', 'Interactive LED'],
    index: '04',
  },
  {
    name: 'Government & GovTech',
    href: '/industries/government',
    desc: 'Digital transformation, public engagement, and national digital agenda',
    tags: ['VR Training', 'Public Exhibitions', 'AI Kiosks'],
    index: '05',
  },
  {
    name: 'Healthcare & Wellness',
    href: '/industries/healthcare-wellness',
    desc: 'VR therapy environments, wellness platforms, and biometric experiences',
    tags: ['WayangMind', 'VR Therapy', 'Mental Health'],
    index: '06',
  },
]

export default function IndustriesPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">Industries</span>
          <h1 className="display-xl font-display uppercase mb-6 max-w-3xl">
            Industries We Serve.
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            EDT deploys immersive technology across six industry verticals — each with unique
            objectives, audiences, and success metrics.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md font-display uppercase mb-6">
                Built for Real Objectives
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Every industry has different success metrics. A government agency measures
                public engagement. A retail mall measures dwell time. A healthcare provider
                measures outcomes. EDT builds to each vertical's specific goals — not generic
                "immersive experiences" that look the same across sectors.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                Our six verticals represent the categories where EDT has the deepest project
                history, the most refined methodologies, and the strongest evidence of results.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-0 border border-white/10">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '6', label: 'Industry Verticals' },
                { value: 'MY + SEA', label: 'Coverage' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="display-sm font-display uppercase text-edt-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-edt-grey text-xs uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Six Verticals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 lg:p-10 block group transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-edt-blue font-display text-sm uppercase tracking-widest">
                    {industry.index}
                  </span>
                  <span className="text-edt-grey group-hover:text-edt-blue transition-colors text-xl">
                    →
                  </span>
                </div>
                <h3 className="display-sm font-display uppercase text-white mb-4">
                  {industry.name}
                </h3>
                <p className="text-edt-grey leading-relaxed mb-6">{industry.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span key={tag} className="edt-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EDT */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Why Organisations Choose EDT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Results-Oriented Briefs',
                desc: 'EDT starts every project with outcome definition. What does success look like for your industry and audience? Everything else flows from there.',
              },
              {
                title: 'Full-Stack Delivery',
                desc: 'Creative direction, software development, hardware procurement, on-site deployment, and post-project analytics — all under one roof.',
              },
              {
                title: 'Malaysia-First Context',
                desc: 'Built and deployed in Malaysia, for Malaysian audiences. Cultural nuance, local infrastructure, and regional supply chains are core to every project.',
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

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            What Industry Are You In?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project. We'll show you how EDT's immersive technology
            applies to your specific context, audience, and objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Start a Conversation
            </Link>
            <Link href="/work" className="btn-ghost border-white text-white">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
