import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank you — EDT',
  robots: { index: false, follow: false },
}

const variants = {
  contact: {
    badge: 'Message Received',
    heading: "Thanks. We'll be in touch.",
    body: 'EDT responds to all enquiries within 24 hours on Malaysian working days (Mon–Fri, 9am–6pm MYT).',
  },
  lead: {
    badge: 'Message Received',
    heading: "Thanks. We'll be in touch.",
    body: "Tell us more anytime — we'll get back within 24 hours on working days.",
  },
  partner: {
    badge: 'Enquiry Received',
    heading: 'Welcome to the partner pipeline.',
    body: "EDT's partnership team will be in touch within 24 hours. All conversations are confidential.",
  },
  newsletter: {
    badge: "You're In",
    heading: 'Welcome to the list.',
    body: 'EDT publishes new insights on AR, VR, AI and immersive design monthly. No spam — just the ideas worth reading.',
  },
} as const

type VariantKey = keyof typeof variants

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const key: VariantKey = type && type in variants ? (type as VariantKey) : 'contact'
  const variant = variants[key]

  return (
    <main className="bg-edt-black text-white">
      <section className="bg-edt-black py-32 lg:py-40 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <span className="edt-badge mb-6 inline-block">{variant.badge}</span>
          <h1 className="display-xl font-display uppercase mb-6">
            {variant.heading}
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl mx-auto mb-12 leading-relaxed">
            {variant.body}
          </p>
          <Link href="/" className="btn-primary">
            Back to Home →
          </Link>
        </div>
      </section>
    </main>
  )
}
