import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healthcare & Wellness VR Experiences Malaysia | WayangMind | EDT',
  description:
    'EDT builds VR therapy environments, wellness platforms, and immersive experiences that advance mental health for Malaysian healthcare providers.',
}

export default function HealthcareWellnessPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <Link href="/industries" className="text-edt-grey text-sm hover:text-white transition-colors">
              Industries
            </Link>
            <span className="text-edt-grey/40">→</span>
            <span className="edt-badge">Healthcare & Wellness</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Healthcare &amp; Wellness
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Youth mental health in Southeast Asia is a growing crisis. Accessible, culturally
            appropriate therapy is scarce. EDT is building the bridge — immersive VR
            environments and AI-personalised wellness tools grounded in local context.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products/wayangmind" className="btn-primary">
              Explore WayangMind
            </Link>
            <Link href="/contact" className="btn-ghost">
              Partner With EDT
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">The Problem</span>
              <h2 className="display-md font-display uppercase mb-6">
                Mental Health Support in SEA Is Scarce and Culturally Misaligned
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Southeast Asia faces a mounting mental health challenge. Among youth
                populations in Malaysia, anxiety, depression, and stress-related conditions
                are rising — yet access to professional mental health support remains deeply
                unequal. Cost, stigma, and availability all function as barriers.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Even where professional support exists, much of it is designed for Western
                cultural contexts — frameworks, metaphors, and therapeutic approaches that
                do not resonate with the lived experience of Malaysian youth. The result is
                disengagement, dropout, and unmet need.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT built WayangMind to address both dimensions of this problem: access
                and cultural fit — using immersive technology and AI to deliver support
                that meets young Malaysians where they are.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: '1 in 3', desc: 'Malaysian youth report mental health challenges' },
                { stat: 'Low', desc: 'Availability of culturally aligned mental health support' },
                { stat: 'Stigma', desc: 'Primary barrier to help-seeking in SEA' },
                { stat: 'VR', desc: 'Clinically validated for anxiety and trauma therapy' },
                { stat: 'AI', desc: 'Enables personalisation at scale without specialist constraint' },
              ].map((item) => (
                <div key={item.desc} className="flex items-start gap-6 border border-white/10 p-5">
                  <span className="text-edt-blue font-semibold w-16 shrink-0">{item.stat}</span>
                  <span className="text-edt-grey leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAYANGMIND */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">Featured Product</span>
          <div className="bg-surface border border-white/10 p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="display-md font-display uppercase mb-6">WayangMind</h2>
                <p className="text-edt-grey text-lg leading-relaxed mb-6">
                  WayangMind is EDT's culturally localised mental health and wellness
                  platform — drawing on Malaysia's wayang kulit shadow puppet tradition as
                  a framework for emotional storytelling, identity, and healing. The platform
                  uses AI personalisation to adapt the experience to each user's needs,
                  preferences, and emotional state.
                </p>
                <p className="text-edt-grey text-lg leading-relaxed mb-8">
                  WayangMind is available in three deployment formats: a standalone mobile
                  app, a VR immersive environment, and a dedicated physical WayangMind Space
                  — a therapeutic room environment that combines spatial design with
                  immersive content.
                </p>
                <Link href="/products/wayangmind" className="btn-primary">
                  View WayangMind
                </Link>
              </div>
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-lg">Three Deployment Formats</h3>
                {[
                  {
                    format: 'WayangMind App',
                    desc: 'Mobile-first mental wellness companion — guided breathing, mood tracking, and AI-personalised coping exercises. Available on iOS and Android.',
                  },
                  {
                    format: 'WayangMind VR',
                    desc: 'Immersive VR therapy environments — calming virtual spaces, guided mindfulness journeys, and AI-facilitated narrative therapy sessions.',
                  },
                  {
                    format: 'WayangMind Space',
                    desc: 'A purpose-designed therapeutic room environment — spatial design, ambient soundscapes, projection content, and integrated wellness technology.',
                  },
                ].map((item) => (
                  <div key={item.format} className="border border-white/10 p-6">
                    <div className="text-edt-blue font-semibold mb-2">{item.format}</div>
                    <p className="text-edt-grey text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT DEPLOYS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Deployment Contexts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                context: 'Corporate Wellness Days',
                desc: 'WayangMind stations deployed at employee wellness events — VR mindfulness sessions, stress assessment tools, and branded wellness content. A differentiating benefit for HR and corporate wellness programmes.',
                icon: '01',
              },
              {
                context: 'Hospitals & Clinics',
                desc: 'WayangMind VR environments for patient waiting areas and pre-procedure anxiety reduction. Clinically validated approaches adapted for Malaysian cultural context.',
                icon: '02',
              },
              {
                context: 'University Student Wellness',
                desc: 'WayangMind App and VR Space deployments for university counselling centres and student wellness programmes — meeting students where they are, in formats they engage with.',
                icon: '03',
              },
            ].map((card) => (
              <div key={card.context} className="border border-white/10 p-8">
                <div className="text-edt-blue font-display text-3xl mb-4">{card.icon}</div>
                <h3 className="text-white font-semibold text-xl mb-4">{card.context}</h3>
                <p className="text-edt-grey leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES WAYANGMIND DIFFERENT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Why Cultural Localisation Matters
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Wayang Kulit as Therapeutic Framework',
                desc: 'Shadow puppetry is a deeply embedded cultural form in the Malaysian psyche. WayangMind uses its visual language, narrative structures, and symbolic vocabulary to make emotional exploration feel familiar rather than clinical.',
              },
              {
                title: 'AI-Personalised Experience',
                desc: "No two users experience WayangMind the same way. The AI adapts the content, pacing, narrative choices, and emotional tone based on the user\'s ongoing interaction and stated needs.",
              },
              {
                title: 'Multilingual by Design',
                desc: "WayangMind supports Bahasa Malaysia, English, and Mandarin — ensuring the platform serves Malaysia\'s full demographic. Language is not an additional barrier.",
              },
              {
                title: 'Evidence-Informed Approach',
                desc: "WayangMind\'s therapeutic framework is informed by validated approaches — mindfulness-based stress reduction (MBSR), cognitive behavioural principles, and narrative therapy — adapted for the platform format.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-surface border border-white/10 p-8">
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
            Bring Accessible Wellness to Your Organisation
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Whether you're a hospital, university, or corporate HR team — WayangMind can
            be configured for your specific context and community. Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Partner With EDT
            </Link>
            <Link href="/products/wayangmind" className="btn-ghost border-white text-white">
              Explore WayangMind
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
