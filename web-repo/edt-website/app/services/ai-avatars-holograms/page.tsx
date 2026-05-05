import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Hologram Avatar Malaysia | Hoomans.ai | EDT',
  description:
    "AI-powered holographic avatars for exhibitions, events, and customer service. Intelligent, branded, and deployed on 86\" Stellarlink holographic displays across Malaysia.",
}

const offerings = [
  { title: 'Hoomans.ai', desc: 'Web-based AI avatar with RAG knowledge base, TTS voice, and client dashboard' },
  { title: 'Pre-animated avatars', desc: 'Motion-captured, scripted characters for controlled deployments' },
  { title: 'Real-time AI-powered avatars', desc: 'Live generative AI responses via Any LLM integration' },
  { title: 'Virtual influencers', desc: 'Branded AI characters for ongoing social and event use' },
  { title: 'Holographic Concierge System', desc: 'Information kiosks for airports, museums, malls' },
]

const deployments = [
  { event: "LIMA '23", type: 'Pre-animated hologram' },
  { event: 'MDX 2024', type: 'Real-time AI-powered avatar' },
  { event: 'MYDCF 2023', type: 'Pre-animated motion capture' },
  { event: 'International Radio Day 2023', type: 'Real-time AI avatar' },
  { event: 'Malaysian Airlines', type: 'Holographic stewardess at MATIC' },
  { event: 'Muzium Kraftangan', type: 'Hologram AI avatar for craft heritage storytelling' },
  { event: 'Astro X UMobile', type: 'AI Holobox at Bombastic Raya' },
]

const faqs = [
  {
    q: 'How does an AI hologram work?',
    a: "The avatar is displayed on a specialized holographic screen (such as the Stellarlink 86\"). The AI layer uses a custom knowledge base (RAG) so it can answer specific questions about your brand, product, or location — in real time, with a natural voice powered by ElevenLabs TTS.",
  },
  {
    q: 'Can the hologram speak in Bahasa Malaysia?',
    a: "Yes. EDT has deployed multilingual avatars in English and Bahasa Malaysia. Custom language support can be integrated based on your target audience.",
  },
  {
    q: "What's the difference between a pre-animated and a real-time AI avatar?",
    a: "Pre-animated avatars follow a scripted sequence — ideal for controlled messaging at exhibitions. Real-time AI avatars use generative AI to respond dynamically to visitor questions — ideal for interactive customer service or educational applications.",
  },
  {
    q: 'Can we white-label the Hoomans.ai system?',
    a: "Yes. EDT offers white-label and branded versions of Hoomans.ai for agencies and corporate clients. Contact us to discuss licensing.",
  },
]

export default function AIAvatarsPage() {
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
            <span className="text-white">AI Avatars & Holograms</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Service</span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">AI Avatars & Holograms</h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            AI holograms combine lifelike holographic display technology with real-time artificial
            intelligence — creating interactive digital personas that can answer questions, tell stories,
            host events, or represent your brand 24/7.
          </p>
          <Link href="/contact" className="btn-primary">Request a Demo →</Link>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Offerings</span>
          <h2 className="display-md text-white mb-12">What We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {offerings.map((o) => (
              <div key={o.title} className="bg-edt-black p-8">
                <h3 className="font-sans text-[15px] font-semibold text-white mb-2">{o.title}</h3>
                <p className="font-sans text-[13px] text-edt-grey">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CALLOUT */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[13px] font-semibold tracking-widest uppercase text-white/70 mb-3">Powered by</p>
          <div className="flex flex-wrap gap-4">
            {['Any LLM', 'RAG Knowledge Base', 'ElevenLabs TTS', '86" Stellarlink Display', 'Multilingual Support'].map((t) => (
              <span key={t} className="font-sans text-[13px] font-semibold text-white border border-white/30 px-4 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PAST DEPLOYMENTS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Track Record</span>
          <h2 className="display-md text-white mb-12">Past Deployments</h2>
          <div className="flex flex-col gap-0 border-t border-white/10">
            {deployments.map((d) => (
              <div key={d.event} className="flex items-start justify-between gap-4 border-b border-white/10 py-5">
                <h3 className="font-sans text-[15px] font-semibold text-white">{d.event}</h3>
                <span className="font-sans text-[13px] text-edt-grey text-right">{d.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 max-w-[800px]">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">FAQ</span>
          <h2 className="display-md text-white mb-12">Common Questions</h2>
          <div className="flex flex-col gap-0 border-t border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/10 py-8">
                <h3 className="font-sans text-[16px] font-semibold text-white mb-3">{f.q}</h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCT */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[13px] text-edt-grey mb-4">Related Product</p>
          <div className="flex items-center justify-between gap-6 border border-edt-blue/20 p-6 lg:p-8">
            <div>
              <span className="edt-badge mb-3 inline-block">AI Product</span>
              <h3 className="display-sm text-white mb-2">Hoomans.ai</h3>
              <p className="font-sans text-[14px] text-edt-grey">AI avatars that know your business. Deploy in hours.</p>
            </div>
            <Link href="/products/hoomans-ai" className="btn-ghost flex-shrink-0">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-2">Request a Demo</h2>
            <p className="font-sans text-[15px] text-white/80">See Hoomans.ai in action before you commit.</p>
          </div>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Request a Demo →
          </Link>
        </div>
      </section>
    </>
  )
}
