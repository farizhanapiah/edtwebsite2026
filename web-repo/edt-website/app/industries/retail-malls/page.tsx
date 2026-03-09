import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retail & Mall Immersive Experiences Malaysia | AI Photobooth & AR | EDT',
  description:
    'EDT increases dwell time, engagement, and social sharing for Malaysian shopping malls and retail brands with AI photobooths and interactive AR.',
}

export default function RetailMallsPage() {
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
            <span className="edt-badge">Retail & Malls</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Retail &amp; Malls
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Malaysian shopping malls compete for dwell time. EDT builds immersive experiences
            that give visitors a reason to stay, engage, and share — driving footfall, tenant
            value, and social amplification.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products/mimpilab" className="btn-primary">
              Explore MimpiLab
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-edt-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '20–40', label: 'AI Photos/Hour per MimpiLab Station' },
              { value: '100%', label: 'Browser-Based — No App Download' },
              { value: 'Multi-Site', label: 'Sunway & Mall Deployments' },
              { value: 'Viral', label: 'Social Sharing Built-In' },
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
                Malls Need Dwell Time Drivers
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                The threat to Malaysian retail malls isn't e-commerce — it's irrelevance.
                Shoppers come for experiences they can't get online. The malls that win are
                the ones that give visitors a reason to stay beyond the transaction, to bring
                friends, and to share what they did on their social media.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT builds the kind of experiences that make people pull out their phones —
                not to scroll past your mall, but to document something unforgettable
                happening inside it.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Dwell time directly correlates with per-visit spend',
                'Social content generated on-site amplifies reach without ad spend',
                'AI photobooth experiences are inherently sharable and re-visitable',
                'Interactive concourse installations drive foot traffic to anchor tenants',
                'AR try-on reduces purchase hesitation for fashion retailers',
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
            Experiences That Drive Dwell Time
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'MimpiLab AI Photobooth',
                desc: "Malaysia's most-deployed AI photobooth. Visitors input their portrait and receive a personalised, branded AI-generated image in seconds. 20–40 photos per station per hour. Available as standalone kiosk or multi-station event deployment.",
                tags: ['AI Photobooth', 'Branded Output', 'High Throughput'],
              },
              {
                title: 'RiaReality MR Concourse Games',
                desc: 'Mixed reality games and interactive experiences deployable in mall concourses — AR treasure hunts, MR sports experiences, and location-aware digital activations that bring families and groups to specific zones.',
                tags: ['Mixed Reality', 'Concourse Activation', 'Family Engagement'],
              },
              {
                title: 'AR Try-On Experiences',
                desc: 'WebAR try-on for fashion retailers, footwear brands, and accessories — let shoppers virtually try products before they commit. Deployable via QR code in-store or as a standalone kiosk experience.',
                tags: ['WebAR', 'Fashion & Footwear', 'Conversion Driver'],
              },
              {
                title: 'Interactive LED Displays',
                desc: 'Motion-reactive LED wall installations for concourses, atriums, and anchor tenant zones — dynamic content that responds to foot traffic, time of day, or live data feeds. Permanent or seasonal.',
                tags: ['LED Installation', 'Motion-Reactive', 'Permanent / Seasonal'],
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

      {/* MIMPILAB SPOTLIGHT */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="bg-surface border border-white/10 p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="edt-badge mb-4 inline-block">Featured Deployment</span>
                <h2 className="display-md font-display uppercase mb-6">
                  MimpiLab × Sunway Wishing Well
                </h2>
                <p className="text-edt-grey text-lg leading-relaxed mb-8">
                  EDT deployed MimpiLab as part of the Sunway Wishing Well activation —
                  a high-footfall concourse installation where shoppers generated
                  personalised AI portraits tied to a wishing-well narrative theme.
                  The branded output drove organic social sharing across Instagram,
                  TikTok, and Facebook, amplifying the campaign beyond the physical space.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '20–40', label: 'Photos/Hour/Station' },
                    { value: 'Organic', label: 'Social Amplification' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="display-sm font-display uppercase text-edt-blue mb-1">{stat.value}</div>
                      <div className="text-edt-grey text-xs uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/products/mimpilab" className="btn-primary">
                  Explore MimpiLab
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Why MimpiLab Works</h3>
                {[
                  'Zero friction — visitors see results in under 60 seconds',
                  'Branded output that shoppers actually want to share',
                  'Configurable themes for seasonal and campaign alignment',
                  'Queue management built into the kiosk flow',
                  'Analytics dashboard for footfall and engagement reporting',
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
                name: 'MimpiLab',
                tagline: 'AI Photobooth for Retail & Malls',
                desc: "Malaysia's leading AI photobooth. Generates personalised, branded AI portraits in seconds. 20–40 photos per hour per station.",
                href: '/products/mimpilab',
              },
              {
                name: 'RiaReality',
                tagline: 'MR Experiences for Concourses',
                desc: 'Mixed reality games and interactive experiences for mall concourses and retail brand activations.',
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
            Drive Dwell Time at Your Mall
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Share your calendar, footfall targets, and campaign objectives. EDT will propose
            the right mix of AI photobooth, AR, and interactive installations for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Request a Proposal
            </Link>
            <Link href="/products/mimpilab" className="btn-ghost border-white text-white">
              MimpiLab Details
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
