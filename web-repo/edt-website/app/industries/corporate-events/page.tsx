import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Events & Brand Activations | Immersive Experiences Malaysia | EDT',
  description:
    "EDT delivers brand activations, product launches, exhibitions, and immersive event experiences for Malaysia's leading corporates.",
}

export default function CorporateEventsPage() {
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
            <span className="edt-badge">Corporate & Brand Events</span>
          </div>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Corporate &amp; Brand Events
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            In a world where every brand competes for a shrinking window of attention, EDT
            builds activations that people remember, share, and talk about long after the
            event ends.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/work" className="btn-ghost">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">The Problem</span>
              <h2 className="display-md font-display uppercase mb-6">
                Activations Are Forgettable. Immersive Experiences Are Not.
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                The modern corporate event faces a paradox: brands invest significantly in
                physical presence, yet the average attendee's memory of a brand activation
                fades within 48 hours. Booths look alike. Promotional items pile up.
                Attention — already fragmented across dozens of competing touchpoints —
                is gone before the event ends.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                The brands that break through are the ones that give people something to
                do, something to feel, and something to share. That's the gap EDT was built
                to fill.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Average attention span at a trade show booth', value: '3–8 seconds' },
                { label: 'Brand recall 48h after a standard activation', value: 'Under 20%' },
                { label: 'Brand recall after an immersive experience', value: 'Up to 4× higher' },
                { label: 'Social posts generated per EDT activation', value: 'Organic amplification' },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/10 p-6 flex items-start justify-between gap-6">
                  <span className="text-edt-grey text-sm leading-relaxed">{stat.label}</span>
                  <span className="text-edt-blue font-semibold text-sm whitespace-nowrap">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW EDT HELPS */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">How EDT Helps</span>
          <h2 className="display-md font-display uppercase mb-12 max-w-2xl">
            Five Ways EDT Makes Corporate Events Unforgettable
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '01',
                title: 'AR Activations',
                desc: 'QR-activated WebAR experiences deployable at any booth or event touchpoint. No app downloads. Works on any smartphone.',
              },
              {
                icon: '02',
                title: 'AI Holograms',
                desc: "Hoomans.ai — EDT's AI hologram platform. Deploy a digital spokesperson, product presenter, or AI character in a transparent display enclosure.",
              },
              {
                icon: '03',
                title: 'MimpiLab AI Photobooth',
                desc: "Malaysia's most-deployed AI photobooth. Generates personalised, branded AI portraits in seconds. 20–40 photos per hour per station.",
              },
              {
                icon: '04',
                title: 'Interactive Installations',
                desc: 'Touch walls, motion-reactive LED displays, and spatial computing experiences that draw crowds and create content moments.',
              },
              {
                icon: '05',
                title: 'Virtual Production',
                desc: 'ARVENA virtual production stages for product launches, press events, and live broadcasts with photorealistic LED wall environments.',
              },
              {
                icon: '06',
                title: 'Full Event Integration',
                desc: 'EDT can serve as your full experiential design partner — from concept and creative direction through to on-site technical operation.',
              },
            ].map((card) => (
              <div key={card.icon} className="bg-surface border border-white/10 p-8">
                <div className="text-edt-blue font-display text-3xl mb-4">{card.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-edt-grey text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'ARFestKL',
                category: 'AR Public Event',
                desc: 'EDT led the immersive technology layer for ARFestKL — AR activations, interactive installations, and AI experiences across the festival grounds.',
                href: '/work/arfestkl',
              },
              {
                name: "AirAsia Founders' Gallery",
                category: 'Interactive Installation',
                desc: 'A permanent interactive gallery for AirAsia RedQ HQ — multi-panel touch walls, WebAR, and AI-generated historical imagery.',
                href: '/work/airasia-founders-gallery',
              },
              {
                name: 'New Balance Grey Day',
                category: 'Brand Activation',
                desc: "WebAR try-on experience and immersive brand room for New Balance Malaysia\'s Grey Day activation.",
                href: '/work/new-balance-grey-day',
              },
            ].map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
              >
                <div className="text-edt-blue text-xs uppercase tracking-widest mb-3">{project.category}</div>
                <h3 className="text-white font-semibold text-xl mb-4 group-hover:text-edt-blue transition-colors">
                  {project.name}
                </h3>
                <p className="text-edt-grey text-sm leading-relaxed mb-6">{project.desc}</p>
                <span className="text-edt-blue text-sm">View Case Study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">Relevant Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'MimpiLab',
                tagline: 'AI Photobooth for Events',
                desc: "Malaysia\'s leading AI photobooth platform. Generates personalised branded portraits in seconds. Available to rent or deploy.",
                href: '/products/mimpilab',
              },
              {
                name: 'Hoomans.ai',
                tagline: 'AI Hologram Platform',
                desc: 'Deploy AI-powered digital spokespersons and presenters in holographic enclosures at any event or exhibition.',
                href: '/products/hoomans-ai',
              },
              {
                name: 'ARVENA',
                tagline: 'Virtual Production Stage',
                desc: 'LED wall virtual production for product launches, media events, and live broadcast with cinematic LED environments.',
                href: '/products/arvena',
              },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors"
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
            Make Your Next Event Impossible to Forget
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Share your event brief with EDT. We'll respond within 24 hours with initial
            concepts and a proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Request a Quote
            </Link>
            <Link href="/work" className="btn-ghost border-white text-white">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
