import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoomans.ai | AI Holographic Avatar Platform Malaysia | EDT',
  description: 'Hoomans.ai brings intelligent AI avatars to life on 86" Stellarlink holographic displays. Custom knowledge base, real-time voice, and client dashboard.',
}

const coreFeatures = [
  {
    label: 'OpenAI + RAG Knowledge Base',
    desc: 'Each avatar is powered by a retrieval-augmented generation (RAG) system trained on your specific content — product specs, company history, FAQs, and brand messaging. No hallucinations. Accurate answers.',
  },
  {
    label: 'ElevenLabs Voice Synthesis',
    desc: 'Natural, expressive voices in English, Bahasa Malaysia, and Mandarin — with custom voice personas matched to your brand. Real-time speech synthesis with sub-second response latency.',
  },
  {
    label: '86" Stellarlink Holographic Display',
    desc: 'The Hoomans.ai platform is optimised for the 86-inch Stellarlink transparent holographic screen — creating a life-size, floating avatar presence that commands attention in any exhibition or retail environment.',
  },
  {
    label: 'Client Dashboard',
    desc: "Manage your avatar's knowledge base, monitor visitor interactions, update content, and export conversation analytics — all through a web-based client dashboard with no technical expertise required.",
  },
  {
    label: 'White-Label Ready',
    desc: 'Deploy Hoomans.ai under your own brand identity. Custom avatar design, branded UI, and tailored persona — no EDT branding unless you want it.',
  },
  {
    label: 'Multilingual Support',
    desc: "Real-time language switching between English, Bahasa Malaysia, and Mandarin. The avatar detects visitor preference and responds in kind — critical for Malaysia's multilingual market.",
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Load Your Knowledge',
    desc: 'Upload documents, FAQs, product specs, or website content to the Hoomans.ai knowledge base. Our team structures and optimises the data for accurate retrieval.',
  },
  {
    step: '02',
    title: 'Customise the Avatar',
    desc: 'Choose a pre-built avatar persona or commission a custom 3D character. Configure voice, language, tone, and visual styling to match your brand.',
  },
  {
    step: '03',
    title: 'Deploy to Display',
    desc: 'The avatar goes live on the 86" Stellarlink holographic display at your exhibition booth, retail store, or permanent installation. Setup takes under 2 hours.',
  },
  {
    step: '04',
    title: 'Monitor & Optimise',
    desc: 'Track visitor interactions, popular questions, and engagement duration through the client dashboard. Update knowledge base content remotely at any time.',
  },
]

const pastDeployments = [
  {
    event: 'LIMA 2023',
    context: 'Langkawi International Maritime & Aerospace Exhibition',
    desc: 'Deployed as an interactive information avatar at a defence industry booth — answering technical questions about equipment specifications and company background for international visitors.',
  },
  {
    event: 'MDX 2024',
    context: 'Malaysia Digital Expo 2024',
    desc: 'Featured as a showcase of Malaysian AI capability at the national digital economy exhibition. The avatar attracted significant media coverage and ministerial attention.',
  },
  {
    event: 'International Radio Day 2023',
    context: 'RTM — Radio Television Malaysia',
    desc: 'A custom avatar celebrating the history of Malaysian radio broadcasting, deployed for public engagement at the International Radio Day national commemoration.',
  },
  {
    event: 'Muzium Kraftangan',
    context: 'Craft Cultural Complex, Kuala Lumpur',
    desc: "Permanent deployment at Malaysia's national craft museum — the avatar serves as a multilingual guide to traditional Malaysian crafts and their cultural significance.",
  },
  {
    event: 'Astro x UMobile',
    context: 'Brand Activation',
    desc: 'A co-branded activation avatar deployed for the Astro and UMobile partnership campaign — answering product questions, demonstrating bundle offers, and capturing lead data.',
  },
]

const faqs = [
  {
    q: "Can the avatar answer questions it hasn't been specifically trained on?",
    a: 'The avatar is grounded in your specific knowledge base to prevent inaccurate responses. If a question falls outside its training data, it will gracefully acknowledge the limitation and suggest an alternative — such as directing visitors to a human staff member or a website. This is intentional: accuracy matters more than breadth.',
  },
  {
    q: 'How long does it take to deploy Hoomans.ai for an event?',
    a: 'For a standard event deployment with an existing avatar persona and pre-prepared knowledge base, setup takes 5–7 business days from content submission to go-live. Custom avatar 3D character development adds 2–3 weeks. We recommend contacting us at least 4 weeks before your event.',
  },
  {
    q: 'Can Hoomans.ai be rented for a single event rather than purchased?',
    a: 'Yes. Hoomans.ai is available as an event hire package (including the holographic display hardware, avatar software, and on-site technical support) or as a long-term deployment licence for permanent installations. Pricing is scoped per project.',
  },
  {
    q: 'Is the Stellarlink display provided as part of the package?',
    a: 'Yes. EDT provides the 86" Stellarlink holographic display as part of all Hoomans.ai event hire packages. For permanent installations, we can supply the hardware for purchase or on a long-term lease arrangement. The display requires a standard power connection and can be floor-standing or integrated into custom exhibit structures.',
  },
]

export default function HoomansAiPage() {
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
            <span className="text-white">Hoomans.ai</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            An Avatar That Actually Knows Your Business
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            Hoomans.ai brings intelligent AI avatars to life on 86" holographic displays — powered by your knowledge base, speaking your languages, available 24/7 without a salary.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Deploy Hoomans.ai →</Link>
            <a href="https://hoomans.ai" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Visit Hoomans.ai ↗
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
                The Problem
              </span>
              <h2 className="display-md text-white mb-8">
                Exhibitions Need Expertise. Human Staff Don't Scale.
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-edt-blue pl-6">
                  <p className="font-sans text-[15px] text-edt-grey leading-relaxed">
                    Every exhibition booth, showroom, and museum needs knowledgeable staff who can answer complex questions accurately — in multiple languages — for the full duration of an event.
                  </p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <p className="font-sans text-[15px] text-edt-grey leading-relaxed">
                    Human staff are expensive, inconsistent, and fatigued after hours of the same questions. Printed brochures get ignored. Touchscreen kiosks feel cold.
                  </p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <p className="font-sans text-[15px] text-edt-grey leading-relaxed">
                    Hoomans.ai is the solution: a life-size holographic AI avatar that knows everything about your business, never gets tired, speaks your visitors' language, and costs a fraction of a staffing team.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-white/10 p-8 lg:p-12">
              <div className="window-bar mb-8">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="space-y-6">
                {[
                  ['Available', '24 / 7 — no breaks, no fatigue'],
                  ['Languages', 'English, BM, Mandarin simultaneously'],
                  ['Knowledge', 'Trained on your exact content'],
                  ['Display', '86" Stellarlink holographic screen'],
                  ['Response Time', 'Sub-second voice synthesis'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start border-b border-white/10 pb-4">
                    <span className="font-display text-[12px] uppercase tracking-[0.08em] text-edt-grey">{label}</span>
                    <span className="font-sans text-[14px] text-white text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Core Features
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Built on the Best AI Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feat) => (
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

      {/* HOW IT WORKS */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            How It Works
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            From Brief to Booth in Four Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-white/10">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-edt-black p-8 border border-white/10">
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

      {/* PAST DEPLOYMENTS */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Past Deployments
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Trusted at Malaysia's Biggest Platforms
          </h2>
          <div className="border border-white/10 divide-y divide-white/10">
            {pastDeployments.map((dep) => (
              <div key={dep.event} className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-8 py-8">
                <div>
                  <p className="font-display text-[14px] uppercase tracking-[0.06em] text-white mb-1">
                    {dep.event}
                  </p>
                  <p className="font-sans text-[12px] text-edt-grey">{dep.context}</p>
                </div>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed lg:col-span-3">
                  {dep.desc}
                </p>
              </div>
            ))}
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
            Ready to Deploy Your AI Avatar?
          </h2>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0"
          >
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
