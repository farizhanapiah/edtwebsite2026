import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | AR VR MR Development, AI Avatars & Immersive Events Malaysia',
  description:
    'Full-spectrum immersive technology services: AR/VR/MR development, AI holograms, virtual production, projection mapping and interactive installations.',
}

const services = [
  {
    num: '01',
    title: 'AR / VR / MR Development',
    desc: 'Build immersive worlds your audience can step into — on mobile, headset, or the open web.',
    href: '/services/ar-vr-mr-development',
    tags: ['WebAR', 'Native AR', 'VR Headsets', 'Mixed Reality'],
  },
  {
    num: '02',
    title: 'AI Avatars & Holograms',
    desc: 'Bring your brand to life with intelligent, AI-powered holographic avatars.',
    href: '/services/ai-avatars-holograms',
    tags: ['Hoomans.ai', 'Stellarlink 86"', 'RAG Knowledge Base', 'ElevenLabs TTS'],
  },
  {
    num: '03',
    title: 'Virtual Production',
    desc: 'Replace physical sets with stunning Unreal Engine environments for live broadcast and content creation.',
    href: '/services/virtual-production',
    tags: ['ARVENA Platform', 'Unreal Engine', 'Live Streaming', 'PTZ Cameras'],
  },
  {
    num: '04',
    title: 'Interactive Installations',
    desc: 'Transform spaces into living brand experiences with LED walls, touch systems, and immersive rooms.',
    href: '/services/interactive-installations',
    tags: ['LED Walls', 'Touch Displays', 'Immersive Rooms', 'Motion Sensors'],
  },
  {
    num: '05',
    title: 'Projection Mapping',
    desc: 'Turn any surface into a canvas — buildings, floors, stages, and curved structures.',
    href: '/services/projection-mapping',
    tags: ['Building Mapping', 'Stage Mapping', 'Epson 7K–10K ANSI', 'TouchDesigner'],
  },
  {
    num: '06',
    title: 'Immersive Events',
    desc: 'Full production packages for brand activations, exhibitions, and public experiences.',
    href: '/services/immersive-events',
    tags: ['Brand Activations', 'Exhibitions', 'Public Experiences', 'End-to-End Production'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue mb-4 block">
            What We Do
          </span>
          <h1 className="display-lg text-white max-w-[700px] mb-6">Our Services</h1>
          <p className="font-sans text-[17px] text-edt-grey leading-relaxed max-w-[600px]">
            From AR mobile activations to full Unreal Engine virtual productions, EDT delivers
            end-to-end immersive technology services. We pitch, build, and deploy — anywhere, any scale.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-edt-black py-0 border-b border-white/10">
        {services.map((s, i) => (
          <Link
            key={s.href}
            href={s.href}
            className={`block border-b border-white/10 group hover:bg-surface transition-colors ${i % 2 === 1 ? 'bg-surface/40' : ''}`}
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[80px_1fr_200px] gap-6 items-start">
              <span className="font-sans text-[13px] font-semibold tracking-widest text-edt-blue/50">
                {s.num}
              </span>
              <div>
                <h2 className="display-sm text-white mb-3 group-hover:text-edt-blue transition-colors">
                  {s.title}
                </h2>
                <p className="font-sans text-[15px] text-edt-grey leading-relaxed max-w-[500px] mb-4">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="font-sans text-[11px] text-white/40 border border-white/15 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="btn-ghost">Explore →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-3">Ready to start a project?</h2>
            <p className="font-sans text-[15px] text-white/80">
              Tell us about your brief and we&apos;ll match you with the right service.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-edt-blue flex-shrink-0">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
