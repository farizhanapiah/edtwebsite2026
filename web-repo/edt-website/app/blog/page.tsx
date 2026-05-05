import type { Metadata } from 'next'
import Link from 'next/link'
import FormspreeForm from '@/components/FormspreeForm'

export const metadata: Metadata = {
  title: 'Blog | Coming Soon — EDT',
  description:
    "EDT's blog is launching soon. Subscribe to be the first to read insights on AR, VR, MR, AI avatars, and immersive experience design in Malaysia.",
  alternates: {
    canonical: '/blog',
    languages: { 'en-MY': '/blog', 'x-default': '/blog' },
  },
}

const teasers: { category: string; copy: string; colour: string }[] = [
  {
    category: 'Guides',
    copy: 'Practical playbooks for deploying AR/VR in Malaysia.',
    colour: 'text-edt-blue',
  },
  {
    category: 'Case Studies',
    copy: 'Behind-the-scenes breakdowns of EDT projects.',
    colour: 'text-green-400',
  },
  {
    category: 'Products',
    copy: 'Deep dives on RiaReality, CheritAR, MimpiLab, and more.',
    colour: 'text-purple-400',
  },
  {
    category: 'Insights',
    copy: 'Industry analysis and engagement benchmarks.',
    colour: 'text-pink-400',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Blog</span>
          <h1 className="display-xl font-display uppercase mb-6">Coming Soon.</h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            We&apos;re putting the finishing touches on EDT&apos;s blog. Insights on AR, VR, MR,
            AI avatars, virtual production, and immersive experience design — landing soon.
          </p>
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="bg-edt-black py-20 lg:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
            What&apos;s Coming
          </span>
          <h2 className="display-md font-display uppercase mt-4 mb-12 max-w-2xl">
            Four streams. One feed.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {teasers.map((t) => (
              <div key={t.category} className="bg-edt-black p-8 lg:p-10">
                <span
                  className={`text-xs uppercase tracking-widest font-semibold mb-4 block ${t.colour}`}
                >
                  {t.category}
                </span>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">
                  {t.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md font-display uppercase mb-6">
                Be First to Read It
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed">
                Drop your email — we&apos;ll send you the first three articles the day they
                go live. No spam. Unsubscribe any time.
              </p>
            </div>
            <div>
              <FormspreeForm
                endpoint="https://formspree.io/f/xqenejyp"
                thankYouType="newsletter"
                className="flex gap-0"
              >
                <input type="hidden" name="_subject" value="New newsletter subscriber — EDT" />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-edt-black border border-white/20 text-white px-6 py-4 text-sm placeholder:text-edt-grey focus:outline-none focus:border-edt-blue"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </FormspreeForm>
              <p className="text-edt-grey text-xs mt-3">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Reading about immersive tech is one thing. Deploying it for your brand, event,
            or institution is another. Let&apos;s talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get in Touch
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
