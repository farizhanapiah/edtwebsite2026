import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MimpiLab | AI Photobooth Malaysia | Branded AI Photos for Events',
  description: "MimpiLab is EDT's AI-powered photobooth — real-time branded photo generation with 100% theme control. Perfect for corporate events, malls, and brand activations.",
}

const whoItsFor = [
  {
    segment: 'Corporate Events & Conferences',
    desc: 'Branded AI photos as a networking icebreaker and memorable takeaway. Attendees generate their photo in the company theme and share it immediately — organic reach, zero printing costs.',
  },
  {
    segment: 'Shopping Malls & Retail',
    desc: 'High-throughput activations for mall corridors and retail pop-ups. MimpiLab handles queues efficiently with sub-30 second generation time and instant QR sharing.',
  },
  {
    segment: 'Brand Activations & Roadshows',
    desc: '100% brand-controlled visual output — every photo carries your campaign theme, colour palette, and visual identity. The antidote to generic green-screen backdrops.',
  },
  {
    segment: 'Government & Public Events',
    desc: 'Culturally relevant themes and inclusive design for national campaigns, public festivals, and ministry-led events. Deployable across multiple simultaneous locations.',
  },
  {
    segment: 'Weddings & Private Events',
    desc: 'Custom AI themes designed around the couple or host\u2019s brief — matching colour palettes, aesthetic styles, and even incorporating venue or cultural motifs.',
  },
]

const coreFeatures = [
  {
    label: '100% Theme Control',
    desc: 'Every photo is generated within a tightly controlled visual theme — no random AI outputs, no off-brand results. EDT designs the AI model and style parameters before your event.',
  },
  {
    label: 'Real-Time Generation',
    desc: 'Photos are generated in under 30 seconds from capture to output. No waiting room, no batch processing — immediate gratification that keeps queues moving.',
  },
  {
    label: 'QR Sharing',
    desc: 'Each photo is delivered via a unique QR code — visitors scan and download instantly to their phone. No email, no app download, no friction.',
  },
  {
    label: 'High Volume Ready',
    desc: 'MimpiLab handles hundreds of users per hour without degradation. Designed for busy activation environments with parallel processing architecture.',
  },
  {
    label: 'White-Label Ready',
    desc: 'Deploy under your brand name and identity. Custom UI, branded QR landing page, and event-specific watermarks — MimpiLab disappears into your campaign.',
  },
  {
    label: 'Analytics Dashboard',
    desc: 'Real-time usage data, total generations, peak hours, and share rates — accessible through the event dashboard during and after your activation.',
  },
]

const faqs = [
  {
    q: 'Does MimpiLab require a green screen or studio setup?',
    a: 'No. That is the core difference between MimpiLab and traditional photobooths. MimpiLab uses generative AI to composite the visitor into a fully designed scene — no green screen, no special backdrop, no studio lighting required. A standard iPad or touchscreen kiosk and a camera are all that is needed at the event.',
  },
  {
    q: 'How are the AI themes created and controlled?',
    a: "EDT's creative team designs each theme before your event — including style reference, colour palette, scene composition, and brand integration. The AI generation is then constrained to produce outputs within those parameters. You review and approve the theme output before go-live, and it cannot deviate from the approved style during the activation.",
  },
  {
    q: 'Can MimpiLab run offline at venues with poor internet connectivity?',
    a: 'MimpiLab requires a stable internet connection for AI image generation as processing happens on cloud infrastructure. For venues with unreliable connectivity, we advise using a dedicated 4G/5G data SIM router as a backup. EDT can provide this as part of the deployment package. We always conduct a connectivity check before every event.',
  },
  {
    q: 'Is there a minimum event size or duration for MimpiLab rental?',
    a: 'MimpiLab is available for single-day events through to multi-week permanent activations. There is no minimum event size — we have deployed for intimate 50-person corporate dinners and city-wide public festivals with thousands of users. Pricing scales with deployment duration and the number of simultaneous kiosks required.',
  },
]

export default function MimpiLabPage() {
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
            <span className="text-white">MimpiLab</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Product
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">
            The AI Photobooth That Looks Like Your Brand
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[580px] mb-10">
            MimpiLab generates real-time branded AI photos at events — no green screens, no generic filters, no off-brand results. 100% theme control. Sub-30 second output. Built for scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Deploy MimpiLab →</Link>
            <a
              href="https://www.mlbb.my"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Try It at mlbb.my ↗
            </a>
          </div>
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
                Generative AI Photobooth — Designed for Events
              </h2>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                MimpiLab is EDT's AI-powered photobooth product. Visitors step up, take a photo, and within seconds receive a fully AI-generated image that places them inside a custom-designed visual world — your campaign theme, your brand colours, your story.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed mb-6">
                Unlike traditional photobooths that overlay a static backdrop, MimpiLab generates a unique compositional image for every visitor — meaning no two outputs are identical, while all remain firmly within your visual brief.
              </p>
              <p className="font-sans text-[16px] text-edt-grey leading-relaxed">
                Try a live demo at{' '}
                <a
                  href="https://www.mlbb.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-edt-blue hover:underline"
                >
                  www.mlbb.my
                </a>
                .
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
                  ['Generation Time', 'Under 30 seconds'],
                  ['Green Screen Required', 'No'],
                  ['Theme Control', '100% — approved before go-live'],
                  ['Delivery Method', 'QR code download, no app required'],
                  ['Languages', 'English, BM, Mandarin'],
                  ['Concurrent Kiosks', 'Unlimited — parallel deployment'],
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

      {/* WHO IT'S FOR */}
      <section className="bg-edt-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Who It's For
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            Five Markets, One Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoItsFor.map((seg) => (
              <div key={seg.segment} className="border border-white/10 p-8">
                <h3 className="font-display text-[12px] uppercase tracking-[0.08em] text-edt-blue mb-3">
                  {seg.segment}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-surface py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Core Features
          </span>
          <h2 className="display-md text-white max-w-[560px] mb-16">
            What Makes MimpiLab Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10">
            {coreFeatures.map((feat) => (
              <div key={feat.label} className="bg-edt-black p-8 border border-white/10">
                <h3 className="font-display text-[13px] uppercase tracking-[0.06em] text-white mb-3">
                  {feat.label}
                </h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{feat.desc}</p>
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
            Bring MimpiLab to Your Next Event.
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
