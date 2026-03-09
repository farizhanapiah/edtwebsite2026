import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CheritAR × Think City | AR Heritage Case Study | EDT',
  description:
    "How EDT and Think City brought Kuala Lumpur's heritage buildings to life with AI-powered AR avatars, reaching tourists from 12+ countries.",
}

export default function CheritarThinkCityPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <span className="edt-badge">Case Study</span>
            <span className="edt-badge">AR Heritage</span>
            <span className="edt-badge">Think City</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            CheritAR × Think City
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            How EDT and Think City brought Kuala Lumpur's heritage buildings to life with
            AI-powered AR avatars — reached by tourists from 12+ countries, zero app
            downloads required.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products/cheritar" className="btn-primary">
              View CheritAR Product
            </Link>
            <Link href="/contact" className="btn-ghost">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1,442', label: 'AR Impressions' },
              { value: '12+', label: 'Countries Reached' },
              { value: '3', label: 'KL Locations' },
              { value: '0', label: 'App Downloads Required' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="display-lg font-display uppercase text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="display-md font-display uppercase mb-8">Project Overview</h2>
              <p className="text-edt-grey text-lg leading-relaxed">
                CheritAR is a WebAR heritage platform developed by EDT in partnership with
                Think City — an urban regeneration organisation committed to preserving the
                soul of Kuala Lumpur. The project set out to add a living, digital layer to
                three of KL's most storied landmarks, letting visitors engage with history
                in a way that no plaque or pamphlet could replicate.
              </p>
            </div>
            <div className="bg-surface border border-white/10 p-8">
              <div className="window-bar mb-6">
                <span className="window-dot"></span>
                <span className="window-dot"></span>
                <span className="window-dot"></span>
              </div>
              <dl className="space-y-5">
                {[
                  { label: 'Client', value: 'Think City' },
                  { label: 'Category', value: 'AR Heritage' },
                  { label: 'Technology', value: 'WebAR · AI · RAG · 8th Wall' },
                  { label: 'Locations', value: '3 KL Heritage Sites' },
                  { label: 'Delivery', value: 'QR-activated, no app required' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-6 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <dt className="text-edt-grey text-sm uppercase tracking-widest w-32 shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <span className="edt-badge mb-6 inline-block">The Challenge</span>
            <h2 className="display-md font-display uppercase mb-6">
              Heritage Tourism Needed More Than Static Signage
            </h2>
            <p className="text-edt-grey text-lg leading-relaxed mb-6">
              Kuala Lumpur's heritage district draws visitors from across the world, yet
              the experience on the ground remained largely unchanged — bronze plaques,
              printed brochures, and guided tours that not everyone could join. Think City
              identified a gap: tourists arriving from 12+ countries had no interactive
              layer through which to discover the stories embedded in the buildings around
              them.
            </p>
            <p className="text-edt-grey text-lg leading-relaxed">
              The brief was ambitious: create an experience that was accessible (no app
              store friction), multilingual, deeply informed, and above all — memorable.
              It had to work on any smartphone, survive outdoor conditions, and feel worthy
              of the landmarks it represented.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">The Solution</span>
          <h2 className="display-md font-display uppercase mb-10 max-w-2xl">
            The Buildings Speak for Themselves
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'QR Activation',
                body: 'Visitors scan a QR code mounted at each heritage site. The experience launches instantly in the mobile browser — no app download, no account.',
              },
              {
                step: '02',
                title: 'AR Avatar Appears',
                body: 'An AR avatar of the building itself materialises in the camera view — architecturally accurate, animated, and anchored to the real-world location.',
              },
              {
                step: '03',
                title: 'RAG-Powered Knowledge',
                body: 'Each landmark speaks in its own voice, drawing answers from a curated Retrieval-Augmented Generation knowledge base of historical archives and cultural records.',
              },
            ].map((card) => (
              <div key={card.step} className="bg-surface border border-white/10 p-8">
                <div className="text-edt-blue font-display text-4xl mb-4">{card.step}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-edt-grey leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-surface border border-white/10 p-8 lg:p-12">
            <h3 className="display-sm font-display uppercase text-white mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {['8th Wall WebAR', 'Retrieval-Augmented Generation (RAG)', 'Custom AI Avatar Engine', 'QR Deep-Link System', 'Multilingual NLP', 'Cloud Knowledge Base'].map(
                (tech) => (
                  <span key={tech} className="edt-badge">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">The Three Locations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sultan Abdul Samad Building',
                year: '1897',
                desc: "The crown jewel of Dataran Merdeka. The AR avatar narrates the building\'s transition from colonial administrative centre to a symbol of Malaysian independence.",
              },
              {
                name: 'Victoria Fountain',
                year: '1897',
                desc: "Built to commemorate Queen Victoria\'s Diamond Jubilee, the fountain became a centrepiece of colonial KL. CheritAR reveals the social history surrounding it.",
              },
              {
                name: 'National Textile Museum',
                year: 'Est. 2010',
                desc: "Housed in the former Chartered Bank building, the museum holds Malaysia\'s textile heritage. The AR avatar guides visitors through centuries of craft and culture.",
              },
            ].map((loc) => (
              <div key={loc.name} className="border border-white/10 p-8">
                <div className="text-edt-blue font-display text-sm uppercase tracking-widest mb-2">
                  {loc.year}
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">{loc.name}</h3>
                <p className="text-edt-grey leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-10">Explore Further</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { label: 'CheritAR Product', href: '/products/cheritar', desc: 'The full CheritAR platform — deployable at any heritage site.' },
              { label: 'AR/VR/MR Development', href: '/services/ar-vr-mr-development', desc: "EDT\'s full-stack extended reality development service." },
              { label: 'Tourism & Heritage', href: '/industries/tourism-heritage', desc: "How EDT serves Malaysia\'s tourism and heritage sector." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block group transition-colors"
              >
                <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold">
                  {link.label} →
                </div>
                <p className="text-edt-grey text-sm leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Bring Your Heritage Site to Life
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            CheritAR is deployable at any cultural landmark, heritage trail, or tourism
            attraction. Let's talk about your location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Request a Demo
            </Link>
            <Link href="/products/cheritar" className="btn-ghost border-white text-white">
              Learn About CheritAR
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
