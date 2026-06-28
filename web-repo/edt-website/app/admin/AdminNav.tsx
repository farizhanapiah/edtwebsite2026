'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { label: 'Pitch Decks', href: '/admin/decks' },
  { label: 'Applicants', href: '/admin/applicants' },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-8">
      {tabs.map((tab) => {
        const active = pathname?.startsWith(tab.href)
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`font-sans text-[13px] font-medium tracking-widest uppercase transition-colors ${
              active ? 'text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}
