import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tourism & Heritage Immersive Experiences Malaysia | AR Heritage | EDT',
  description:
    'EDT brings historical sites, cultural landmarks, and tourism attractions to life with AR, VR, and AI avatars for domestic and international visitors.',
}

export default function TourismHeritagePage() {
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
            <span className="edt-badge">Tourism & Heritage</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Tourism &amp; Heritage
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Malaysia's heritage is extraordinary. The stories embedded in its buildings,
            streets, and cultural sites deserve more than a plaque. EDT adds the digital
            layer that makes history feel alive.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products/cheritar" className="btn-primary">
              Explore CheritAR
            </Link>
            <Link href="/contact" className="btn-ghost">
              Discuss Your Site
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1,442', label: 'CheritAR AR Impressions' },
              { value: '12+', label: 'Countries Reached' },
              { value: '3', label: 'KL Heritage Sites' },
              { value: '0', label: 'App Downloads Required' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="display-lg font-display uppercase text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">The Opportunity</span>
              <h2 className="display-md font-display uppercase mb-6">
                Malaysia's Heritage Deserves a Digital Layer
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Malaysia is extraordinarily rich in cultural and heritage assets — colonial
                architecture, royal towns, UNESCO World Heritage Sites, multicultural
                neighbourhoods, and thousands of years of layered history. Domestic and
                international visitors arrive curious, but the experience of discovery often
                falls short of the heritage's depth.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                AR, VR, and AI avatar technology gives tourism boards, local councils, and
                heritage trusts a way to add interactive depth without altering or disturbing
                the physical sites. The building stays intact. The story becomes immersive.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'International visitors want stories, not just sights',
                'QR-activated WebAR requires no app download — zero friction',
                'Multilingual AI guides serve global audiences simultaneously',
                'Digital layers can be updated without physical changes to sites',
                'AR experiences generate social content and organic reach',
              ].map((point) => (
                <div key={point} className="flex items-start gap-4 border border-white/10 p-5">
                  <span className="text-edt-blue mt-0.5 shrink-0">—</span>
                  <span className="text-edt-grey leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Solutions</span>
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Bringing Heritage to Life
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'CheritAR — Heritage AR Platform',
                desc: "EDT\'s flagship heritage product. AR avatars of landmarks, powered by AI and a curated RAG knowledge base. QR-activated, browser-based, multilingual. Deployable at any heritage site.",
                badge: 'Flagship Product',
                href: '/products/cheritar',
              },
              {
                title: 'AR Walking Tours',
                desc: 'Location-aware AR layers mapped across entire heritage districts or tourism trails. Visitors follow a narrative thread through physical space, with AR content triggered at each point of interest.',
                badge: 'Service',
                href: '/services/ar-vr-mr-development',
              },
              {
                title: 'Projection Mapping for Heritage Buildings',
                desc: 'Large-scale architectural projection mapping that transforms heritage building facades into living canvases — for festivals, national days, cultural events, or permanent night installations.',
                badge: 'Service',
                href: '/services/interactive-installations',
              },
              {
                title: 'AI Avatar Guides',
                desc: 'Digital human guides powered by RiaReality or Hoomans.ai — deployed on screens, kiosks, or as AR overlays to answer visitor questions in natural language across multiple languages.',
                badge: 'Product',
                href: '/products/riareality',
              },
            ].map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
              >
                <span className="edt-badge mb-4 inline-block">{sol.badge}</span>
                <h3 className="text-white font-semibold text-xl mb-4 group-hover:text-edt-blue transition-colors">
                  {sol.title}
                </h3>
                <p className="text-edt-grey text-sm leading-relaxed mb-4">{sol.desc}</p>
                <span className="text-edt-blue text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHERITAR SPOTLIGHT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="bg-surface border border-white/10 p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="edt-badge mb-4 inline-block">Case Study</span>
                <h2 className="display-md font-display uppercase mb-6">
                  CheritAR × Think City
                </h2>
                <p className="text-edt-grey text-lg leading-relaxed mb-8">
                  EDT partnered with Think City to deploy CheritAR at three iconic KL
                  heritage sites — the Sultan Abdul Samad Building, Victoria Fountain, and
                  the National Textile Museum. Tourists from 12+ countries scanned QR
                  codes and were greeted by AR avatars of the buildings themselves,
                  speaking in their own voice using a RAG knowledge base.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '1,442', label: 'AR Impressions' },
                    { value: '12+', label: 'Countries Reached' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="display-sm font-display uppercase text-edt-blue mb-1">{stat.value}</div>
                      <div className="text-edt-grey text-xs uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/work/cheritar-think-city" className="btn-primary">
                  Read Case Study
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Three Locations</h3>
                {[
                  { name: 'Sultan Abdul Samad Building', year: '1897' },
                  { name: 'Victoria Fountain', year: '1897' },
                  { name: 'National Textile Museum', year: 'Est. 2010' },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between border border-white/10 p-5">
                    <span className="text-white">{loc.name}</span>
                    <span className="text-edt-blue text-sm">{loc.year}</span>
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
                name: 'CheritAR',
                tagline: 'Heritage AR Platform',
                desc: 'QR-activated, browser-based AR avatars for heritage buildings and cultural landmarks. RAG-powered knowledge base. No app download.',
                href: '/products/cheritar',
              },
              {
                name: 'RiaReality',
                tagline: 'AI Guide & MR Platform',
                desc: 'AI-powered digital guides and mixed reality educational experiences. Deployable on screens, kiosks, or as AR overlays.',
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
            Bring Your Heritage Site to Life
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your location, your visitors, and your objectives. EDT will design
            an immersive experience that serves both preservation and engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Start a Conversation
            </Link>
            <Link href="/products/cheritar" className="btn-ghost border-white text-white">
              Explore CheritAR
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
