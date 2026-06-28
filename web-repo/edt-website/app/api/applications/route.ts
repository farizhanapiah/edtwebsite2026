import { NextResponse, type NextRequest } from 'next/server'
import { randomUUID } from 'crypto'
import { createSupabaseAdminClient, CVS_BUCKET } from '@/lib/supabase/admin'
import { slugify } from '@/lib/types'
import { sendApplicationNotification } from '@/lib/email'

export const dynamic = 'force-dynamic'

const MAX_CV_BYTES = 10 * 1024 * 1024 // 10 MB
const ALLOWED_CV_EXT = ['.pdf', '.doc', '.docx']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Public endpoint — anyone can submit a job/internship application.
export async function POST(request: NextRequest) {
  const form = await request.formData()

  // Honeypot: real users leave this empty.
  if (String(form.get('_gotcha') || '').trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const applicantType = String(form.get('applicant_type') || '').trim()
  const fullName = String(form.get('full_name') || '').trim()
  const email = String(form.get('email') || '').trim()
  const portfolioUrl = String(form.get('portfolio_url') || '').trim()
  const file = form.get('cv')

  if (applicantType !== 'intern' && applicantType !== 'full-time') {
    return NextResponse.json({ error: 'Please select intern or full-time.' }, { status: 400 })
  }
  if (!fullName) {
    return NextResponse.json({ error: 'Full name is required.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }
  if (!portfolioUrl) {
    return NextResponse.json({ error: 'A portfolio link is required.' }, { status: 400 })
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'Please attach your CV.' }, { status: 400 })
  }

  const lowerName = file.name.toLowerCase()
  const ext = ALLOWED_CV_EXT.find((e) => lowerName.endsWith(e))
  if (!ext) {
    return NextResponse.json(
      { error: 'CV must be a PDF, DOC, or DOCX file.' },
      { status: 400 }
    )
  }
  if (file.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: 'CV exceeds the 10 MB limit.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()

  const cvPath = `${applicantType}/${randomUUID()}-${slugify(fullName) || 'applicant'}${ext}`
  const buffer = Buffer.from(await file.arrayBuffer())

  const { error: uploadError } = await admin.storage
    .from(CVS_BUCKET)
    .upload(cvPath, buffer, {
      contentType: file.type || 'application/octet-stream',
      upsert: false,
    })
  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  const record = {
    applicant_type: applicantType as 'intern' | 'full-time',
    full_name: fullName,
    email,
    phone: String(form.get('phone') || '').trim() || null,
    role_interest: String(form.get('role_interest') || '').trim() || null,
    profile: String(form.get('profile') || '').trim() || null,
    portfolio_url: portfolioUrl,
    linkedin_url: String(form.get('linkedin_url') || '').trim() || null,
    source: String(form.get('source') || '').trim() || null,
    notes: String(form.get('notes') || '').trim() || null,
    availability: String(form.get('availability') || '').trim() || null,
  }

  const { error: insertError } = await admin
    .from('applications')
    .insert({ ...record, cv_path: cvPath })
  if (insertError) {
    await admin.storage.from(CVS_BUCKET).remove([cvPath])
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Notify the team — never let an email failure break the submission.
  try {
    await sendApplicationNotification(record)
  } catch (err) {
    console.error('Application notification email failed:', err)
  }

  return NextResponse.json({ ok: true })
}
