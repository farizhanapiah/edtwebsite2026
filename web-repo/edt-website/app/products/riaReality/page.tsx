import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RiaReality | Mixed Reality Platform Malaysia | MR Games & Education',
  description: "RiaReality is EDT's Mixed Reality platform for physical spaces. MR games, education, real estate visualization, and heritage experiences — no headset required.",
}

const experienceCatalogue = [
  {
    title: 'Durian Dash',
    category: 'Gaming',
    type: 'Competitive Multiplayer',
    desc: 'A fast-paced mixed reality game where players physically move to catch falling durians while dodging obstacles. Loud, competitive, and perfectly Malaysian — ideal for mall activations and brand events.',
    tags: ['Gaming', 'Multiplayer', 'Family-Friendly'],
  },
  {
    title: 'Spooky Smash',
    category: 'Gaming',
    type: 'Malaysian Folklore',
    desc: 'Players battle iconic Malaysian folkloric creatures — Pontianak, Hantu Raya, and Toyol — using mixed reality interactions. Built on local cultural mythology, it creates an immediate connection with Malaysian audiences.',
    tags: ['Gaming', 'Malaysian Folklore', 'Cultural'],
  },
  {
    title: 'Skyscrapers of the World',
    category: 'Real Estate',
    type: 'Visualization',
    desc: 'A mixed reality property showcase experience — visitors walk around and interact with 1:1 scale architectural models of towers and developments overlaid in real space. Ideal for property launches and developer showrooms.',
    tags: ['Real Estate', 'Architecture', 'Visualization'],
  },
  {
    title: 'Milky Way',
    category: 'Education',
    type: 'Science Exploration',
    desc: 'An immersive educational experience that places the solar system and deep-space objects in the room around students. Scale-accurate, interactive, and curriculum-aligned for secondary and tertiary science education.',
    tags: ['Education', 'Science', 'School Programmes'],
  },
]

const applications = [
  {
    sector: 'Entertainment & Events',
    desc: 'High-energy MR game experiences for mall activations, public festivals, and brand events. RiaReality games are designed to draw crowds, generate content, and run continuously with minimal operator intervention.',
  },
  {
    sector: 'Education & Training',
    desc: 'Curriculum-linked MR experiences for schools, universities, and corporate training programmes. Students engage with spatial content — from molecular structures to historical events — in ways textbooks cannot replicate.',
  },
  {
    sector: 'Property & Real Estate Sales',
    desc: 'Property developers use RiaReality to showcase off-plan developments at scale in showroom environments. Buyers walk through and around true-scale architectural overlays without requiring a physical show unit.',
  },
  {
    sector: 'Heritage & Cultural Tourism',
    desc: 'Bring historical narratives to life in museum galleries, heritage sites, and cultural institutions — overlaying period-accurate 3D reconstructions onto existing spaces.',
  },
]

export default function RiaRealityPage() {
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
            <span className="text-white">RiaReality</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Mixed Reality for Physical Spaces. No Headset.
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            RiaReality is EDT's Mixed Reality platform that overlays interactive digital worlds onto real environments — for gaming, education, real estate, and heritage experiences. Accessible to anyone. Deployable anywhere.
          </p>
          <Link href="/contact" className="btn-primary">Deploy RiaReality →</Link>
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
                Real Spaces. Digital Worlds. No Hardware Barrier.
              </h2>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                RiaReality uses large-format screens, camera tracking, and real-time rendering to create Mixed Reality experiences that feel physical and immediate — without requiring visitors to wear any headset or download any app.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                The visitor steps into the space, and the environment responds to their presence and movement in real time. Digital objects occupy the physical room. Interactions happen naturally — through gesture, motion, or touch.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                The result: immersive, accessible experiences that work for every age group and technical ability — from five-year-olds to C-suite executives.
              </p>
            </div>
            <div className="border border-white/10 p-8">
              <div className="window-bar mb-6">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="space-y-4">
                {[
                  ['Headset Required', 'No — screen-based MR'],
                  ['App Download', 'No — walk-in experience'],
                  ['Platforms', 'Gaming, Education, Real Estate, Heritage'],
                  ['Multiplayer', 'Up to 4 simultaneous players'],
                  ['Setup Time', '2–4 hours on-site'],
                  ['Space Required', 'From 4m x 4m'],
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

      {/* EXPERIENCE CATALOGUE */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Experience Catalogue
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Ready-to-Deploy Experiences
          </h2>
          <div className="border border-white/10 overflow-hidden">
            <div className="hidden lg:grid grid-cols-12 px-8 py-4 bg-surface border-b border-white/10">
              <span className="col-span-3 font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Experience</span>
              <span className="col-span-2 font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Category</span>
              <span className="col-span-2 font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Type</span>
              <span className="col-span-5 font-display text-[11px] uppercase tracking-[0.1em] text-edt-grey">Description</span>
            </div>
            {experienceCatalogue.map((exp) => (
              <div key={exp.title} className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-8 py-8 border-b border-white/10 last:border-b-0">
                <div className="lg:col-span-3">
                  <p className="font-display text-[15px] uppercase tracking-[0.06em] text-white">{exp.title}</p>
                </div>
                <div className="lg:col-span-2">
                  <span className="edt-badge">{exp.category}</span>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-sans text-[13px] text-edt-grey">{exp.type}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-sans text-[14px] text-edt-grey leading-relaxed mb-3">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="font-sans text-[10px] text-edt-grey border border-white/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Applications
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Four Sectors, One Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div key={app.sector} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-edt-blue mb-3">
                  {app.sector}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">
            Bring Mixed Reality Into Your Space.
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
