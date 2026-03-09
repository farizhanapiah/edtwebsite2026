import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AR VR MR Development Malaysia | EDT Immersive Tech Studio',
  description:
    "Malaysia's leading AR, VR, and Mixed Reality development studio. From WebAR brand activations to full VR simulations — built in Unity and Unreal Engine.",
}

const deliverables = [
  'WebAR experiences (no app download, works on any smartphone)',
  'Native AR apps (iOS/Android)',
  'Meta Quest 3 VR experiences (standalone and multiplayer)',
  'Mixed Reality platforms (RiaReality)',
  '360° immersive rooms and projection environments',
]

const useCases = [
  { title: 'Brand activations', desc: 'AR product demos, virtual try-ons, branded AR filters' },
  { title: 'Corporate training', desc: 'VR safety simulations, forklift operations, onboarding' },
  { title: 'Tourism & heritage', desc: 'AR historical avatars, location-based AR storytelling' },
  { title: 'Education', desc: 'VR science labs, 3D anatomy, immersive history lessons' },
  { title: 'Events & exhibitions', desc: 'Live AR installations, interactive AR game zones' },
]

const process = [
  { step: 'Brief & Discovery', desc: 'We understand your audience, venue, objectives, and technical constraints.' },
  { step: 'Concept & Design', desc: 'Experience design, UX storyboarding, and technical architecture.' },
  { step: 'Build & Test', desc: 'Unity/Unreal development, hardware integration, and QA testing.' },
  { step: 'Deploy & Support', desc: 'On-site setup, staff training, and post-event technical support.' },
]

const tech = ['Unity', 'Unreal Engine', 'Meta Quest 3', '8th Wall (WebAR)', 'Onirix', 'LiDAR integration', 'Rokoko motion capture']

const faqs = [
  {
    q: "What's the difference between AR, VR, and MR?",
    a: "AR adds digital elements to the real world (usually via smartphone). VR replaces the real world with a digital one (via headset). MR places digital objects into the real world in a way that they interact with physical surfaces and objects — typically requiring a headset like Meta Quest 3.",
  },
  {
    q: 'Does AR require an app download?',
    a: "Not necessarily. EDT builds WebAR experiences using 8th Wall and Onirix that work directly in a mobile browser — no download required. This dramatically increases participation rates at events.",
  },
  {
    q: 'How long does it take to build an AR/VR experience?',
    a: "Simple WebAR activations can be ready in 2–4 weeks. Complex VR simulations with multiplayer and scoring typically take 6–12 weeks. We recommend contacting us at least 6 weeks before your event.",
  },
  {
    q: 'Can you build experiences that work at large outdoor events?',
    a: "Yes. EDT has deployed at large outdoor activations including ARFestKL (52,417 AR impressions across Downtown KL) and the Georgetown Festival Projection Mapping Competition.",
  },
  {
    q: 'Do you provide post-event support?',
    a: "All EDT projects include on-site technical support during the event and a post-event handover. We also offer maintenance packages for permanent installations.",
  },
]

export default function ARVRMRPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] text-edt-grey mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">AR / VR / MR Development</span>
          </nav>
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            Service
          </span>
          <h1 className="display-lg text-white max-w-[800px] mb-6">
            AR / VR / MR Development
          </h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[600px] mb-10">
            Augmented Reality (AR) overlays digital content onto the real world. Virtual Reality (VR)
            immerses users in fully digital environments. Mixed Reality (MR) blends both — allowing
            digital objects to interact with physical space in real time.
          </p>
          <Link href="/contact" className="btn-primary">Request a Quote →</Link>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Process</span>
            <h2 className="display-md text-white mb-10">How EDT Delivers AR/VR/MR</h2>
            <div className="flex flex-col gap-6">
              {process.map((p, i) => (
                <div key={p.step} className="flex gap-5">
                  <span className="font-sans text-[11px] font-semibold tracking-widest text-edt-blue/50 pt-1 flex-shrink-0 w-6">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-[15px] font-semibold text-white mb-1">{p.step}</h3>
                    <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Deliverables</span>
            <h2 className="display-md text-white mb-10">What We Build</h2>
            <ul className="flex flex-col gap-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span className="text-edt-blue mt-1 flex-shrink-0">→</span>
                  <span className="font-sans text-[14px] text-white/75">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Applications</span>
          <h2 className="display-md text-white mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {useCases.map((u) => (
              <div key={u.title} className="bg-surface p-8">
                <h3 className="font-sans text-[15px] font-semibold text-white mb-2">{u.title}</h3>
                <p className="font-sans text-[13px] text-edt-grey">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-edt-black py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">Featured Project</span>
          <div className="border border-edt-blue/20 p-8 lg:p-12">
            <span className="edt-badge mb-4 inline-block">VR Training</span>
            <h2 className="display-md text-white mb-4">MetaHRise (MCMC)</h2>
            <p className="font-sans text-[15px] text-white/70 mb-6 max-w-[500px]">
              VR Onboarding Simulation — 145 employees onboarded · 93% satisfaction · 40% efficiency gain ·
              Malaysia Book of Records 2024
            </p>
            <Link href="/work/metahrise" className="btn-ghost">Read the Case Study →</Link>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-surface py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-6 block">Technology Stack</span>
          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="font-sans text-[13px] font-semibold text-white border border-white/20 px-4 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 max-w-[800px]">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">FAQ</span>
          <h2 className="display-md text-white mb-12">Common Questions</h2>
          <div className="flex flex-col gap-0 border-t border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/10 py-8">
                <h3 className="font-sans text-[16px] font-semibold text-white mb-3">{f.q}</h3>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-2">Request a Quote for AR/VR/MR</h2>
            <p className="font-sans text-[15px] text-white/80">We respond within 24 hours.</p>
          </div>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
