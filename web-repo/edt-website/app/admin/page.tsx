import Link from 'next/link'

export const dynamic = 'force-dynamic'

const tools = [
  {
    label: 'Pitch Deck Library',
    href: '/admin/decks',
    desc: 'Upload Claude Co-Work HTML decks and copy a public share link to send to clients.',
  },
  {
    label: 'Talent Applicants',
    href: '/admin/applicants',
    desc: 'Browse intern and full-time applications, open portfolios, and download CVs.',
  },
]

export default function AdminHome() {
  return (
    <div>
      <span className="edt-badge mb-6 inline-block">Internal Tools</span>
      <h1 className="display-md font-display uppercase mb-10">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
          >
            <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold group-hover:underline">
              {tool.label} →
            </div>
            <p className="text-edt-grey text-sm leading-relaxed">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
