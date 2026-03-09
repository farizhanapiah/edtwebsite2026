import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Education & VR Training Malaysia | Immersive Learning | EDT',
  description:
    'EDT builds VR training simulations and MR educational modules that improve safety, comprehension, and knowledge retention for Malaysian institutions.',
}

export default function EducationPage() {
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
            <span className="edt-badge">Education & Training</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Education &amp; Training
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Passive learning produces passive retention. EDT builds immersive VR training
            simulations and MR educational modules that improve comprehension, safety, and
            knowledge retention for Malaysian institutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Demo
            </Link>
            <Link href="/products/riareality" className="btn-ghost">
              Explore RiaReality
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '93%', label: 'MetaHRise Satisfaction Rate' },
              { value: '40%', label: 'Onboarding Efficiency Gain' },
              { value: '83%', label: 'Post-VR Comprehension' },
              { value: '48%', label: 'Pre-VR Comprehension (Baseline)' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="display-lg font-display uppercase text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">The Problem</span>
              <h2 className="display-md font-display uppercase mb-6">
                Passive Learning Produces Poor Retention
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Traditional training approaches — slide decks, printed manuals, classroom
                lectures — share a fundamental limitation: they ask learners to receive
                information passively. Comprehension during training is frequently
                conflated with retention after training. The two are not the same.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                In high-stakes environments — industrial safety, medical procedures,
                emergency response — this gap has real consequences. A worker who
                understood the forklift safety protocol in a classroom may respond
                differently under the conditions of an actual warehouse.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                VR training closes this gap by putting learners inside the scenario, making
                decisions in real time, in environments that simulate the physical and
                emotional conditions of the actual situation.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Traditional training comprehension rate (average)', value: '~48%' },
                { label: 'VR training comprehension rate (MetaHRise)', value: '83%' },
                { label: 'Improvement in comprehension', value: '+35 percentage points' },
                { label: 'Reduction in onboarding time', value: '40% faster' },
                { label: 'Learner satisfaction score', value: '93%' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-start justify-between gap-6 border border-white/10 p-5">
                  <span className="text-edt-grey text-sm leading-relaxed">{stat.label}</span>
                  <span className="text-edt-blue font-semibold text-sm whitespace-nowrap">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDT SOLUTIONS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Solutions</span>
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Immersive Learning That Sticks
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'MetaHRise — VR Onboarding Platform',
                desc: 'A VR-based employee onboarding and corporate training platform. Learners navigate virtual workplace scenarios, complete safety inductions, and demonstrate competency — all before their first day on-site. Deployed with MCMC.',
                tags: ['Corporate Onboarding', 'VR', 'Assessment Module'],
              },
              {
                title: 'VR Safety Simulations',
                desc: 'Custom VR environments that simulate industrial hazards — forklift operation, fire evacuation, chemical handling, working at heights. Built to replicate the actual conditions of the workplace with precision.',
                tags: ['Industrial Safety', 'Custom Build', 'Sime Darby Forklift VR'],
              },
              {
                title: 'RiaReality — MR Educational Modules',
                desc: 'Mixed reality science and geography modules that overlay 3D educational content onto physical environments. Students interact with AR models of the solar system, human anatomy, historical maps, and more.',
                tags: ['Science', 'Geography', 'MR Classroom'],
              },
              {
                title: 'WayangMind — Mental Health Education',
                desc: 'A culturally localised mental health education platform that uses wayang kulit-inspired storytelling and AI to teach coping strategies and emotional literacy — for schools, universities, and workplace wellness.',
                tags: ['Mental Health', 'Cultural Localisation', 'AI-Personalised'],
              },
            ].map((sol) => (
              <div key={sol.title} className="border border-white/10 p-8">
                <h3 className="text-white font-semibold text-xl mb-4">{sol.title}</h3>
                <p className="text-edt-grey leading-relaxed mb-6">{sol.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sol.tags.map((tag) => (
                    <span key={tag} className="edt-badge text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METAHRISE SPOTLIGHT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="bg-surface border border-white/10 p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="edt-badge mb-4 inline-block">Case Study</span>
                <h2 className="display-md font-display uppercase mb-6">
                  MetaHRise × MCMC
                </h2>
                <p className="text-edt-grey text-lg leading-relaxed mb-8">
                  EDT developed MetaHRise for MCMC's employee onboarding programme —
                  replacing traditional induction sessions with an immersive VR environment
                  that replicated MCMC's actual workspace. New employees completed safety
                  inductions, departmental orientations, and competency assessments in VR.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: '93%', label: 'Satisfaction' },
                    { value: '40%', label: 'Efficiency Gain' },
                    { value: '83%', label: 'Comprehension' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="display-sm font-display uppercase text-edt-blue mb-1">{stat.value}</div>
                      <div className="text-edt-grey text-xs uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/work/metahrise" className="btn-primary">
                  Read Case Study
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Key Outcomes</h3>
                {[
                  'Comprehension rose from 48% to 83%',
                  'Onboarding time reduced by 40%',
                  '93% of participants rated the experience excellent',
                  'Fully scalable — no physical space required per cohort',
                  'Assessment data captured automatically for HR reporting',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4 border border-white/10 p-4">
                    <span className="text-edt-blue shrink-0">—</span>
                    <span className="text-edt-grey text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Relevant Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: 'RiaReality',
                tagline: 'MR Educational Platform',
                desc: 'Mixed reality modules for science, geography, and interactive learning. Deployable in classrooms, museums, and learning centres.',
                href: '/products/riareality',
              },
              {
                name: 'WayangMind',
                tagline: 'Mental Health Education',
                desc: 'AI-personalised, culturally localised mental health education platform for schools, universities, and corporate wellness programmes.',
                href: '/products/wayangmind',
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="border border-white/10 hover:border-edt-blue p-8 block transition-colors"
              >
                <span className="edt-badge mb-4 inline-block">{product.tagline}</span>
                <h3 className="display-sm font-display uppercase text-white mb-4">{product.name}</h3>
                <p className="text-edt-grey text-sm leading-relaxed mb-6">{product.desc}</p>
                <span className="text-edt-blue text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Upgrade Your Training Programme
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Whether it's employee safety training, university curricula, or corporate
            onboarding — EDT can design a VR or MR solution for your specific learning
            objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Request a Demo
            </Link>
            <Link href="/work/metahrise" className="btn-ghost border-white text-white">
              MetaHRise Case Study
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
