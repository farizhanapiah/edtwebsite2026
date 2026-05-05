import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { label: 'AR / VR / MR Development', href: '/services/ar-vr-mr-development' },
  { label: 'AI Avatars & Holograms', href: '/services/ai-avatars-holograms' },
  { label: 'Virtual Production', href: '/services/virtual-production' },
  { label: 'Interactive Installations', href: '/services/interactive-installations' },
  { label: 'Projection Mapping', href: '/services/projection-mapping' },
  { label: 'Immersive Events', href: '/services/immersive-events' },
]

const productLinks = [
  { label: 'RiaReality', href: '/products/riaReality' },
  { label: 'Hoomans.ai', href: '/products/hoomans-ai' },
  { label: 'MimpiLab', href: '/products/mimpilab' },
  { label: 'CheritAR', href: '/products/cheritar' },
  { label: 'WayangMind', href: '/products/wayangmind' },
  { label: 'ARVENA', href: '/products/arvena' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work / Portfolio', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/weareedt/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/31284467/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@weareEDT' },
]

export default function Footer() {
  return (
    <footer className="bg-edt-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/EDT-lockup-dark.svg"
                alt="Experiential Design Team"
                width={140}
                height={32}
              />
            </Link>
            <p className="font-sans text-[14px] text-white/60 leading-relaxed max-w-[220px]">
              We build experiences that can&apos;t be ignored.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] font-600 tracking-widest uppercase text-white/40 hover:text-edt-blue transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="font-sans text-[11px] font-700 tracking-widest uppercase text-edt-blue mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <p className="font-sans text-[11px] font-700 tracking-widest uppercase text-edt-blue mb-5">
              Products
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <p className="font-sans text-[11px] font-700 tracking-widest uppercase text-edt-blue mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-white/30">
            © 2026 Experiential Design Team (Adticles Sdn Bhd 1149616-M). All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <p className="font-sans text-[12px] text-white/30">
              A-3-13 Centrio Pantai Hillpark, Jalan Pantai Murni, 59200 Kuala Lumpur
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+60364115361"
                className="font-sans text-[12px] text-white/30 hover:text-white transition-colors"
              >
                +60 3-6411 5361
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
