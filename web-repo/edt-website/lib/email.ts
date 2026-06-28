import { Resend } from 'resend'
import type { Application } from '@/lib/types'

// Sends a "new application" alert to the EDT team via Resend.
// No-ops silently if email env vars are not configured, so a missing key or a
// send failure never blocks an applicant's submission.
export async function sendApplicationNotification(
  application: Pick<
    Application,
    | 'applicant_type'
    | 'full_name'
    | 'email'
    | 'phone'
    | 'role_interest'
    | 'profile'
    | 'portfolio_url'
    | 'linkedin_url'
    | 'source'
    | 'notes'
    | 'availability'
  >
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.APPLICATION_NOTIFY_FROM
  const to = (process.env.APPLICATION_NOTIFY_TO || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  if (!apiKey || !from || to.length === 0) {
    // Not configured — skip quietly.
    return
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weareedt.com'
  const typeLabel =
    application.applicant_type === 'intern' ? 'Internship' : 'Full-time'

  const rows: Array<[string, string | null | undefined]> = [
    ['Type', typeLabel],
    ['Name', application.full_name],
    ['Email', application.email],
    ['Phone', application.phone],
    ['Role / Discipline', application.role_interest],
    ['Portfolio', application.portfolio_url],
    ['LinkedIn', application.linkedin_url],
    ['Availability', application.availability],
    ['Found EDT via', application.source],
  ]

  const esc = (v: string) =>
    v
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

  const link = (v: string) =>
    /^https?:\/\//i.test(v)
      ? `<a href="${esc(v)}">${esc(v)}</a>`
      : esc(v)

  const rowsHtml = rows
    .filter(([, v]) => v)
    .map(
      ([label, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0">${link(
          v as string
        )}</td></tr>`
    )
    .join('')

  const block = (label: string, v: string) =>
    `<p style="margin:16px 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${label}</p><p style="margin:0;white-space:pre-wrap">${esc(
      v
    )}</p>`

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;color:#111">
      <h2 style="margin:0 0 4px">New ${typeLabel} application</h2>
      <p style="margin:0 0 20px;color:#555">${esc(application.full_name)} just applied via the careers page.</p>
      <table style="border-collapse:collapse;font-size:14px">${rowsHtml}</table>
      ${application.profile ? block('Personal Profile', application.profile) : ''}
      ${application.notes ? block('Notes', application.notes) : ''}
      <p style="margin:28px 0 0">
        <a href="${siteUrl}/admin/applicants"
           style="display:inline-block;background:#2D2DFF;color:#fff;text-decoration:none;padding:12px 20px;font-size:13px;font-weight:600">
          Review in Admin (download CV) →
        </a>
      </p>
    </div>
  `

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from,
    to,
    replyTo: application.email,
    subject: `New ${typeLabel} application — ${application.full_name}`,
    html,
  })
}
