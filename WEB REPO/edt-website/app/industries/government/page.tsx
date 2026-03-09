import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Government & GovTech Immersive Experiences Malaysia | EDT',
  description:
    "EDT builds digital transformation and public engagement experiences aligned with Malaysia's national digital agenda — for MCMC, MDEC, and government agencies.",
}

export default function GovernmentPage() {
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
            <span className="edt-badge">Government & GovTech</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Government &amp; GovTech
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Malaysia's national digital ambitions require public experiences that match the
            aspiration. EDT builds VR training programmes, public engagement platforms, and
            interactive exhibitions for government agencies and statutory bodies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
            <Link href="/work/metahrise" className="btn-ghost">
              MCMC Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">National Context</span>
              <h2 className="display-md font-display uppercase mb-6">
                Malaysia's Digital Transformation Is Happening Now
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                MyDIGITAL, MDEC's digital economy roadmap, and MCMC's regulatory mandates
                collectively represent Malaysia's most ambitious national digital
                transformation agenda to date. Government agencies are under pressure to
                demonstrate digital leadership — not just in policy, but in practice.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Public exhibitions, government training centres, and national events are
                opportunities to show citizens what Malaysia's digital future looks like.
                EDT builds those demonstrations — immersive, credible, and aligned with
                national branding.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT has delivered projects directly for MCMC, MYDCF, and other government
                bodies. We understand procurement processes, approval workflows, and the
                reputational stakes of public-sector delivery.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Initiative', value: 'MyDIGITAL Blueprint' },
                { label: 'Agency', value: 'MCMC — MyDCF, MetaHRise' },
                { label: 'Agency', value: 'MDEC — Digital Economy' },
                { label: 'Focus', value: 'Public Engagement & Digital Skills' },
                { label: 'EDT Role', value: 'Immersive Tech Partner' },
              ].map((row) => (
                <div key={row.value} className="flex items-start gap-6 border border-white/10 p-5">
                  <span className="text-edt-grey text-sm w-24 shrink-0 uppercase tracking-widest">{row.label}</span>
                  <span className="text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW EDT SERVES GOVERNMENT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Solutions</span>
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            How EDT Serves Government
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'VR Training Programmes',
                desc: 'MetaHRise-powered VR onboarding and skills training for government employees. Safety inductions, digital literacy programmes, and leadership development — all delivered in immersive VR environments.',
                tags: ['MetaHRise', 'VR', 'Skills Development'],
              },
              {
                title: 'Public Exhibitions & Showcases',
                desc: 'Interactive exhibition environments for national events — AI kiosks, AR showcases, and immersive demonstration booths that communicate complex government initiatives to a public audience.',
                tags: ['Interactive Kiosks', 'National Events', 'Public Communication'],
              },
              {
                title: 'Interactive Information Kiosks',
                desc: "AI-powered information kiosks with natural language interfaces — deployable at government service centres, public libraries, and civic spaces. Powered by Hoomans.ai's conversational AI platform.",
                tags: ['Hoomans.ai', 'AI Kiosk', 'Citizen Services'],
              },
              {
                title: 'AR Public Engagement',
                desc: 'Location-aware AR experiences for public spaces — city heritage trails, national day celebrations, and civic education campaigns. QR-activated, browser-based, deployable anywhere.',
                tags: ['WebAR', 'Civic Engagement', 'RiaReality'],
              },
            ].map((sol) => (
              <div key={sol.title} className="bg-surface border border-white/10 p-8">
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

      {/* PROJECTS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Government Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'MCMC MetaHRise',
                category: 'VR Training',
                desc: 'VR onboarding platform developed for MCMC employees. 93% satisfaction rate, 40% efficiency gain, comprehension up from 48% to 83%.',
                href: '/work/metahrise',
              },
              {
                name: 'MYDCF',
                category: 'Interactive Exhibition',
                desc: 'EDT delivered interactive exhibition experiences for Malaysia Digital Content Festival — AI showcases, AR activations, and immersive product demonstrations.',
                href: '/work',
              },
              {
                name: 'MCMC Hologram',
                category: 'AI Hologram',
                desc: "An AI hologram spokesperson deployed for MCMC's public communications — powered by Hoomans.ai's conversational digital human platform.",
                href: '/products/hoomans-ai',
              },
            ].map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
              >
                <div className="text-edt-blue text-xs uppercase tracking-widest mb-3">{project.category}</div>
                <h3 className="text-white font-semibold text-xl mb-4 group-hover:text-edt-blue transition-colors">
                  {project.name}
                </h3>
                <p className="text-edt-grey text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="text-edt-blue text-sm">View Project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Relevant Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: 'Hoomans.ai',
                tagline: 'AI Hologram Platform',
                desc: 'AI-powered digital spokespersons and holographic presenters. Deployable at exhibitions, government service centres, and public-facing events.',
                href: '/products/hoomans-ai',
              },
              {
                name: 'RiaReality',
                tagline: 'MR & AR Platform',
                desc: 'Mixed reality experiences for public engagement, civic education, and interactive exhibitions. Browser-based, no app required.',
                href: '/products/riareality',
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
            Deliver Malaysia's Digital Future
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            EDT has experience working within government procurement frameworks. Share your
            brief and we'll show you how immersive technology can serve your agency's
            mandate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Start a Conversation
            </Link>
            <Link href="/work/metahrise" className="btn-ghost border-white text-white">
              View MCMC Case Study
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
