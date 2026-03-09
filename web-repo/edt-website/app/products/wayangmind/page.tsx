import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WayangMind | VR Mental Wellness Platform Malaysia | EDT',
  description: 'WayangMind reimagines mindfulness with localized VR therapy, AI-personalized guided sessions, and culturally relevant content for Malaysian and SEA youth.',
}

const channels = [
  {
    name: 'WayangMind App',
    platform: 'iOS & Android',
    desc: 'A mobile mindfulness app with AI-personalized meditation and mental wellness sessions — culturally localized for Malaysian and SEA users. Available for individual use, schools, and corporate wellness programmes.',
  },
  {
    name: 'WayangMind VR',
    platform: 'VR Headset',
    desc: 'Immersive guided therapy and mindfulness sessions in virtual environments designed around local landscapes, cultural settings, and familiar sensory cues — reducing the clinical distance often felt in Western wellness content.',
  },
  {
    name: 'WayangMind Space',
    platform: 'Physical Installation',
    desc: 'A dedicated wellness pod or room installation for schools, corporate offices, and wellness centres — combining spatial audio, ambient lighting, and VR sessions in a physical space optimised for mental recovery.',
  },
]

const keyFeatures = [
  {
    label: 'AI-Personalized Sessions',
    desc: "WayangMind\'s AI layer adapts session length, breathing exercises, and narrative pace based on user mood input and historical session data — no two experiences are identical.",
  },
  {
    label: 'Culturally Localized Content',
    desc: 'Sessions feature Malaysian and SEA environments, sounds, and cultural references — rainforest canopies, coastal fishing villages, and kampung twilight — making mindfulness feel familiar, not foreign.',
  },
  {
    label: '4-Part Guided Sessions',
    desc: 'Each session follows a structured four-part framework: Grounding, Breathwork, Narrative Immersion, and Integration. Evidence-informed and accessible to first-time mindfulness practitioners.',
  },
  {
    label: 'Corporate Wellness',
    desc: 'WayangMind is available as a white-label corporate wellness platform — deployable for employee wellness days, mental health campaigns, and ongoing staff wellbeing programmes.',
  },
]

const problemStats = [
  { value: '1 in 3', label: 'Malaysian youth report mental health challenges' },
  { value: '72%', label: 'SEA youth prefer digital over in-person therapy entry points' },
  { value: '< 5%', label: 'Mental wellness apps offer culturally localized SEA content' },
]

export default function WayangMindPage() {
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
            <span className="text-white">WayangMind</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            Mental Wellness, Rooted in Where You're From
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            WayangMind reimagines mindfulness for Malaysian and SEA youth — AI-personalized VR therapy and guided wellness sessions built around cultural familiarity, not clinical distance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Partner with WayangMind →</Link>
            <a
              href="https://www.instagram.com/wayangmind"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow @wayangmind ↗
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            The Problem
          </span>
          <h2 className="display-md text-white max-w-[600px] mb-12">
            Youth Mental Health in SEA Is at a Breaking Point
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px border border-white/10 mb-12">
            {problemStats.map((stat) => (
              <div key={stat.value} className="bg-edt-black p-8 border border-white/10">
                <p className="font-display text-[40px] lg:text-[52px] text-edt-blue mb-2">{stat.value}</p>
                <p className="font-sans text-[14px] text-edt-grey leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[760px] space-y-6">
            <div className="border-l-2 border-edt-blue pl-6">
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                The majority of existing mental wellness platforms are designed for Western markets — with content, aesthetics, and cultural references that feel distant and alienating for Malaysian and SEA users.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                Young people in Malaysia face growing mental health challenges but lack accessible, culturally relevant tools that meet them where they are — on their phones, in their language, in their world.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                WayangMind was built to close this gap — using immersive technology and AI to deliver evidence-informed wellness experiences that feel authentically SEA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION — 3 CHANNELS */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            The Solution
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Three Channels. One Ecosystem.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {channels.map((ch) => (
              <div key={ch.name} className="border border-white/10 p-8">
                <span className="edt-badge mb-4 inline-block">{ch.platform}</span>
                <h3 className="font-display text-[16px] uppercase tracking-[0.06em] text-white mb-4">
                  {ch.name}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Key Features
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            What Makes WayangMind Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feat) => (
              <div key={feat.label} className="border border-white/10 p-8">
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-edt-blue mb-3">
                  {feat.label}
                </h3>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW */}
      <section className="bg-edt-black py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="font-display text-[13px] uppercase tracking-[0.08em] text-edt-grey mb-2">
              Follow the Journey
            </p>
            <p className="font-sans text-[16px] text-white">
              WayangMind is growing. Follow{' '}
              <a
                href="https://www.instagram.com/wayangmind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-edt-blue hover:underline"
              >
                @wayangmind
              </a>{' '}
              for updates on new content, research partnerships, and deployment news.
            </p>
          </div>
          <a
            href="https://www.instagram.com/wayangmind"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0"
          >
            @wayangmind ↗
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="display-md text-white">
            Bring WayangMind to Your Organisation.
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
