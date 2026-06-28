'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import type { ApplicantType } from '@/lib/types'

const inputClass =
  'w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue'
const labelClass =
  'block text-edt-grey text-sm uppercase tracking-widest mb-2'

export default function ApplicationForm({
  initialType = 'intern',
}: {
  initialType?: ApplicantType
}) {
  const router = useRouter()
  const [type, setType] = useState<ApplicantType>(initialType)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)

    const data = new FormData(e.currentTarget)
    data.set('applicant_type', type)

    try {
      const res = await fetch('/api/applications', { method: 'POST', body: data })
      const json = await res.json().catch(() => null)
      if (!res.ok) {
        setError(json?.error || 'Submission failed. Please try again.')
        setSubmitting(false)
        return
      }
      router.push('/thank-you?type=application')
    } catch {
      setError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={submitting}>
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Applicant type toggle */}
      <div>
        <label className={labelClass}>Applying As *</label>
        <div className="inline-flex border border-white/20">
          {(['intern', 'full-time'] as ApplicantType[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                type === t
                  ? 'bg-edt-blue text-white'
                  : 'bg-transparent text-white/60 hover:text-white'
              }`}
            >
              {t === 'intern' ? 'Internship' : 'Full-time'}
            </button>
          ))}
        </div>
      </div>

      <fieldset disabled={submitting} className="contents">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full_name" className={labelClass}>Full Name *</label>
            <input id="full_name" name="full_name" type="text" required className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email *</label>
            <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Your phone number" />
          </div>
          <div>
            <label htmlFor="role_interest" className={labelClass}>Role / Discipline of Interest</label>
            <input id="role_interest" name="role_interest" type="text" className={inputClass} placeholder="e.g. 3D Artist, Unity Dev, Producer" />
          </div>
        </div>

        <div>
          <label htmlFor="profile" className={labelClass}>Personal Profile *</label>
          <textarea id="profile" name="profile" rows={5} required className={`${inputClass} resize-none`} placeholder="Tell us about yourself — your background, strengths, and what draws you to immersive / experiential work." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="portfolio_url" className={labelClass}>Portfolio Link *</label>
            <input id="portfolio_url" name="portfolio_url" type="url" required className={inputClass} placeholder="https://your-portfolio.com" />
          </div>
          <div>
            <label htmlFor="linkedin_url" className={labelClass}>LinkedIn</label>
            <input id="linkedin_url" name="linkedin_url" type="url" className={inputClass} placeholder="https://linkedin.com/in/you" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cv" className={labelClass}>CV / Resume *</label>
            <input
              id="cv"
              name="cv"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm file:mr-4 file:border-0 file:bg-edt-blue file:text-white file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-widest file:cursor-pointer"
            />
            <p className="text-edt-grey/70 text-xs mt-2">PDF, DOC, or DOCX (max 10 MB).</p>
          </div>
          <div>
            <label htmlFor="availability" className={labelClass}>Availability / Earliest Start</label>
            <input id="availability" name="availability" type="text" className={inputClass} placeholder="e.g. Immediately, July 2026, 3-month intern" />
          </div>
        </div>

        <div>
          <label htmlFor="source" className={labelClass}>How Did You Find EDT?</label>
          <select id="source" name="source" defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select an option</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral / Word of mouth</option>
            <option value="event">Event / University</option>
            <option value="search">Google / Search</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>Anything Else We Should Know?</label>
          <textarea id="notes" name="notes" rows={4} className={`${inputClass} resize-none`} placeholder="Links to specific projects, showreels, awards, or anything that makes you a great fit." />
        </div>

        {error && (
          <p role="alert" className="text-red-400 text-sm">{error}</p>
        )}

        <div className="flex items-center gap-6 flex-wrap">
          <button type="submit" className="btn-primary">
            {submitting ? 'Submitting…' : 'Submit Application'}
          </button>
          <p className="text-edt-grey text-sm">
            Your details join our talent pool — we may reach out even if there&apos;s no open role today.
          </p>
        </div>
      </fieldset>
    </form>
  )
}
