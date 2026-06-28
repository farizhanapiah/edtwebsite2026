import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers & Internships at EDT | Join Malaysia\'s Immersive Tech Studio',
  description:
    'Join EDT, Malaysia\'s leading experiential technology studio. Apply for full-time roles or internships in AR, VR, AI, 3D, virtual production and interactive design. We keep every application in our talent pool.',
  alternates: {
    canonical: '/careers',
    languages: { 'en-MY': '/careers', 'x-default': '/careers' },
  },
}

const careersBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://weareedt.com' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://weareedt.com/careers' },
  ],
}

const reasons = [
  {
    title: 'Work on the unseen',
    desc: 'AR, VR, AI avatars, holograms, projection mapping and virtual production — for brands, museums, governments and global events.',
  },
  {
    title: 'Small team, big stages',
    desc: 'Your work ships to real audiences across Malaysia and Southeast Asia, from festival floors to national pavilions.',
  },
  {
    title: 'Craft over titles',
    desc: 'We care about what you can make. Strong portfolios speak louder than any CV line.',
  },
]

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersBreadcrumbSchema) }}
      />

      <main className="bg-edt-black text-white">
        {/* HERO */}
        <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <span className="edt-badge mb-6 inline-block">Join EDT</span>
            <h1 className="display-xl font-display uppercase mb-6 max-w-3xl">
              Build Experiences People Never Forget.
            </h1>
            <p className="text-xl text-edt-grey max-w-xl leading-relaxed mb-10">
              We&apos;re always meeting talented people — designers, developers,
              3D artists, producers. Tell us who you are. Even when we&apos;re not
              hiring, your application stays in our talent pool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/careers/apply?type=full-time" className="btn-primary">
                Apply Full-time →
              </Link>
              <Link href="/careers/apply?type=intern" className="btn-secondary">
                Apply as Intern →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY EDT */}
        <section className="bg-surface py-24 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <h2 className="display-md font-display uppercase mb-12">Why EDT</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`p-8 ${i < reasons.length - 1 ? 'lg:border-r border-white/10' : ''}`}
                >
                  <h3 className="text-white font-semibold text-lg mb-3">{r.title}</h3>
                  <p className="text-edt-grey text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO PATHS */}
        <section className="bg-edt-black py-24 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <h2 className="display-md font-display uppercase mb-10">Choose Your Path</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link
                href="/careers/apply?type=full-time"
                className="bg-surface border border-white/10 hover:border-edt-blue p-10 block transition-colors group"
              >
                <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold group-hover:underline">
                  Full-time →
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Join the core team</h3>
                <p className="text-edt-grey text-sm leading-relaxed">
                  Permanent roles across design, development, 3D, production and
                  emerging tech. Bring a portfolio that shows what you can build.
                </p>
              </Link>
              <Link
                href="/careers/apply?type=intern"
                className="bg-surface border border-white/10 hover:border-edt-blue p-10 block transition-colors group"
              >
                <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold group-hover:underline">
                  Internship →
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Learn on real projects</h3>
                <p className="text-edt-grey text-sm leading-relaxed">
                  Students and fresh grads — work alongside our team on live
                  immersive builds and ship something real to your portfolio.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
