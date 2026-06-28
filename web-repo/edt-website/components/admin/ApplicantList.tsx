'use client'

import { useState } from 'react'
import type { Application, ApplicantType } from '@/lib/types'

type Filter = 'all' | ApplicantType

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'intern', label: 'Interns' },
  { key: 'full-time', label: 'Full-time' },
]

export default function ApplicantList({ applications }: { applications: Application[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const visible =
    filter === 'all'
      ? applications
      : applications.filter((a) => a.applicant_type === filter)

  const count = (key: Filter) =>
    key === 'all'
      ? applications.length
      : applications.filter((a) => a.applicant_type === key).length

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold border transition-colors ${
              filter === f.key
                ? 'bg-edt-blue border-edt-blue text-white'
                : 'border-white/20 text-white/60 hover:text-white'
            }`}
          >
            {f.label} ({count(f.key)})
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-edt-grey text-sm border border-white/10 p-8">
          No applications in this view yet.
        </p>
      ) : (
        <div className="border border-white/10 divide-y divide-white/10">
          {visible.map((app) => {
            const open = openId === app.id
            return (
              <div key={app.id}>
                <button
                  onClick={() => setOpenId(open ? null : app.id)}
                  className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold">{app.full_name}</div>
                    <div className="text-edt-grey text-sm">
                      {app.role_interest || '—'}
                    </div>
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 self-start ${
                      app.applicant_type === 'intern'
                        ? 'bg-white/10 text-white/70'
                        : 'bg-edt-blue/20 text-edt-blue'
                    }`}
                  >
                    {app.applicant_type === 'intern' ? 'Intern' : 'Full-time'}
                  </span>
                  <div className="text-edt-grey/60 text-xs sm:w-28 sm:text-right">
                    {new Date(app.created_at).toLocaleDateString()}
                  </div>
                </button>

                {open && (
                  <div className="px-6 pb-8 pt-2 space-y-5 bg-white/[0.015]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <Detail label="Email" value={app.email} href={`mailto:${app.email}`} />
                      <Detail label="Phone" value={app.phone} />
                      <Detail
                        label="Portfolio"
                        value={app.portfolio_url}
                        href={app.portfolio_url}
                        external
                      />
                      <Detail
                        label="LinkedIn"
                        value={app.linkedin_url}
                        href={app.linkedin_url || undefined}
                        external
                      />
                      <Detail label="Availability" value={app.availability} />
                      <Detail label="Found EDT via" value={app.source} />
                    </div>

                    {app.profile && (
                      <Block label="Personal Profile" value={app.profile} />
                    )}
                    {app.notes && <Block label="Notes" value={app.notes} />}

                    <div className="flex flex-wrap gap-3 pt-2">
                      {app.cv_path && (
                        <a
                          href={`/api/admin/cv/${app.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs"
                        >
                          Download CV →
                        </a>
                      )}
                      <a
                        href={app.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs"
                      >
                        Open Portfolio →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Detail({
  label,
  value,
  href,
  external,
}: {
  label: string
  value: string | null
  href?: string
  external?: boolean
}) {
  return (
    <div>
      <div className="text-edt-grey/60 text-[11px] uppercase tracking-widest mb-1">
        {label}
      </div>
      {value ? (
        href ? (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-edt-blue hover:underline break-all"
          >
            {value}
          </a>
        ) : (
          <span className="text-white break-words">{value}</span>
        )
      ) : (
        <span className="text-edt-grey/40">—</span>
      )}
    </div>
  )
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-edt-grey/60 text-[11px] uppercase tracking-widest mb-1">
        {label}
      </div>
      <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
        {value}
      </p>
    </div>
  )
}
