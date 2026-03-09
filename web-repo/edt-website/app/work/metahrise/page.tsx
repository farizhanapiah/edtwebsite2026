import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MetaHRise Case Study | VR Onboarding for MCMC | EDT',
  description:
    "How EDT built MetaHRise for MCMC — a multiplayer VR onboarding game that achieved 93% satisfaction, 40% efficiency gain, and set the Malaysia Book of Records.",
}

const results = [
  { metric: 'Employees Onboarded', result: '145' },
  { metric: 'Satisfaction Rate', result: '93%' },
  { metric: 'Efficiency Improvement', result: '40%' },
  { metric: 'Role Comprehension (post)', result: '83% (up from 48%)' },
]

const awards = [
  'Management Initiative of the Year — Malaysia, 2025',
  'Malaysia Book of Records — 2024',
]

export default function MetaHRisePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <span>/</span>
            <span className="text-white">MetaHRise</span>
          </nav>
          <span className="edt-badge mb-4 inline-block">VR Training</span>
          <h1 className="display-lg text-white max-w-[800px] mb-6">
            MetaHRise: VR Onboarding That Set a National Record.
          </h1>

          {/* Overview table */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-12">
            {[
              { label: 'Client', value: 'MCMC' },
              { label: 'Category', value: 'VR Training' },
              { label: 'Technology', value: 'Unity · Multiplayer VR · Meta Quest 3' },
              { label: 'Year', value: '2024' },
            ].map((i) => (
              <div key={i.label} className="bg-edt-black p-6">
                <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-edt-blue mb-1">{i.label}</p>
                <p className="font-sans text-[14px] text-white">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS — STAT CARDS */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="font-sans text-[11px] font-semibold tracking-widest uppercase text-white/70 mb-8">Results</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((r) => (
              <div key={r.metric} className="border border-white/20 p-6">
                <div className="font-display text-white text-4xl lg:text-5xl leading-none mb-2">{r.result}</div>
                <p className="font-sans text-[12px] font-semibold tracking-wider uppercase text-white/70">{r.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Challenge</span>
            <h2 className="display-md text-white mb-6">The Problem</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              MCMC needed to onboard 145 new employees simultaneously — familiarising them with the
              company&apos;s brand, culture, and specific roles in a way that was engaging, memorable, and
              measurable. Traditional onboarding was slow, inconsistent, and generated poor comprehension scores.
            </p>
          </div>
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">The Solution</span>
            <h2 className="display-md text-white mb-6">What We Built</h2>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed">
              EDT developed MetaHRise — a multiplayer VR onboarding game that immerses new recruits in
              MCMC&apos;s brand universe. Players complete interactive scenarios that reflect real workplace
              situations, brand values, and departmental roles. The experience is fully gamified with a
              multiplayer structure to foster team bonding.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-6 block">Recognition</span>
          <div className="flex flex-col gap-4">
            {awards.map((a) => (
              <div key={a} className="flex items-center gap-4 border border-edt-blue/20 p-6">
                <span className="text-edt-blue text-xl">▲</span>
                <p className="font-sans text-[15px] font-semibold text-white">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-edt-black py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 max-w-[760px]">
          <div className="font-display text-edt-blue text-6xl leading-none mb-6">&ldquo;</div>
          <blockquote className="font-sans text-[20px] text-white leading-relaxed mb-6">
            MetaHRise transformed how we introduce new talent to MCMC. The immersive experience
            dramatically improved both engagement and comprehension.
          </blockquote>
          <p className="font-sans text-[13px] text-edt-grey uppercase tracking-widest">— MCMC</p>
        </div>
      </section>

      {/* RELATED SERVICE */}
      <section className="bg-surface py-12 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-wrap items-center gap-4">
          <span className="font-sans text-[13px] text-edt-grey">Related service:</span>
          <Link href="/services/ar-vr-mr-development" className="btn-ghost">AR / VR / MR Development →</Link>
          <Link href="/industries/education" className="btn-ghost">Corporate Training & Education →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-2">Build Your VR Training Program</h2>
            <p className="font-sans text-[15px] text-white/80">Custom VR onboarding and training for your team.</p>
          </div>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
