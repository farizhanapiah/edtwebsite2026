import { NextResponse, type NextRequest } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseAdminClient, DECKS_BUCKET, DECKS_TABLE } from '@/lib/supabase/admin'
import { slugify } from '@/lib/types'

export const dynamic = 'force-dynamic'

const MAX_DECK_BYTES = 25 * 1024 * 1024 // 25 MB

async function requireUser() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

// Upload a new pitch deck (HTML) and create its library record.
export async function POST(request: NextRequest) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const form = await request.formData()
  const title = String(form.get('title') || '').trim()
  const clientName = String(form.get('client_name') || '').trim()
  const rawSlug = String(form.get('slug') || '').trim()
  const file = form.get('file')

  if (!title) {
    return NextResponse.json({ error: 'Title is required.' }, { status: 400 })
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'An HTML file is required.' }, { status: 400 })
  }
  const isHtml =
    file.type === 'text/html' || file.name.toLowerCase().endsWith('.html') ||
    file.name.toLowerCase().endsWith('.htm')
  if (!isHtml) {
    return NextResponse.json({ error: 'Only .html files are allowed.' }, { status: 400 })
  }
  if (file.size > MAX_DECK_BYTES) {
    return NextResponse.json({ error: 'File exceeds the 25 MB limit.' }, { status: 400 })
  }

  const slug = slugify(rawSlug || title)
  if (!slug) {
    return NextResponse.json({ error: 'Could not derive a valid slug.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()

  // Reject duplicate slugs early for a clear error.
  const { data: existing } = await admin
    .from(DECKS_TABLE)
    .select('id')
    .eq('slug', slug)
    .maybeSingle()
  if (existing) {
    return NextResponse.json(
      { error: `Slug "${slug}" is already in use. Choose a different one.` },
      { status: 409 }
    )
  }

  const filePath = `${slug}/index.html`
  const buffer = Buffer.from(await file.arrayBuffer())

  const { error: uploadError } = await admin.storage
    .from(DECKS_BUCKET)
    .upload(filePath, buffer, { contentType: 'text/html', upsert: false })
  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  const { error: insertError } = await admin.from(DECKS_TABLE).insert({
    slug,
    title,
    client_name: clientName || null,
    file_path: filePath,
    created_by: user.id,
  })
  if (insertError) {
    // Roll back the orphaned upload.
    await admin.storage.from(DECKS_BUCKET).remove([filePath])
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, slug })
}

// Delete a deck record and its stored file.
export async function DELETE(request: NextRequest) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Missing deck id.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()
  const { data: deck } = await admin
    .from(DECKS_TABLE)
    .select('file_path')
    .eq('id', id)
    .maybeSingle()

  if (deck?.file_path) {
    await admin.storage.from(DECKS_BUCKET).remove([deck.file_path])
  }

  const { error } = await admin.from(DECKS_TABLE).delete().eq('id', id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
