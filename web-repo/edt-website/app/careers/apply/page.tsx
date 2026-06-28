import type { Metadata } from 'next'
import Link from 'next/link'
import ApplicationForm from '@/components/ApplicationForm'
import type { ApplicantType } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Apply to EDT | Job & Internship Application',
  description:
    'Apply to join EDT. Share your profile, portfolio and CV for full-time roles or internships in immersive technology.',
  alternates: {
    canonical: '/careers/apply',
    languages: { 'en-MY': '/careers/apply', 'x-default': '/careers/apply' },
  },
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const initialType: ApplicantType = type === 'full-time' ? 'full-time' : 'intern'

  return (
    <main className="bg-edt-black text-white">
      <section className="bg-edt-black pt-20 pb-16 lg:pt-28 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="text-edt-grey text-sm mb-6">
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Apply</span>
          </nav>
          <h1 className="display-lg font-display uppercase mb-6 max-w-3xl">
            Tell Us Who You Are.
          </h1>
          <p className="text-lg text-edt-grey max-w-xl leading-relaxed">
            A few details and your portfolio. We review every application and keep
            it on file for current and future opportunities.
          </p>
        </div>
      </section>

      <section className="bg-edt-black py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-[860px] mx-auto px-6 lg:px-20">
          <ApplicationForm initialType={initialType} />
        </div>
      </section>
    </main>
  )
}
