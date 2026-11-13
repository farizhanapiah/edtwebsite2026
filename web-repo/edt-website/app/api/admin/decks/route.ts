import { NextResponse, type NextRequest } from 'next/server'
import { randomBytes } from 'crypto'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseAdminClient, DECKS_BUCKET, DECKS_TABLE } from '@/lib/supabase/admin'
import { slugify } from '@/lib/types'

export const dynamic = 'force-dynamic'

async function requireUser() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

// The deck HTML can be up to 25 MB — far above Vercel's ~4.5 MB function body
// limit — so the browser uploads it DIRECTLY to Supabase Storage. This endpoint
// only handles small JSON metadata, in two phases:
//   phase 'sign'   → validate + return a one-time signed upload URL
//   phase 'commit' → after the browser uploads, create the library row
export async function POST(request: NextRequest) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const title = String(body.title || '').trim()
  const clientName = String(body.client_name || '').trim()
  // Leave room for the 13-char "-<token>" suffix so the final slug stays
  // within slugify's 80-char cap. (Previously a long title produced an
  // 85-char slug at sign time that got truncated to 80 at commit time, so
  // commit looked in the wrong folder and reported "Upload not found".)
  const baseSlug = slugify(String(body.slug || '') || title).slice(0, 67).replace(/-+$/, '')

  if (!title) {
    return NextResponse.json({ error: 'Title is required.' }, { status: 400 })
  }
  if (!baseSlug) {
    return NextResponse.json({ error: 'Could not derive a valid slug.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()

  // ---- Phase 1: sign ----
  if (body.phase === 'sign') {
    // Append an unguessable token so share links can't be guessed/enumerated.
    const slug = `${baseSlug}-${randomBytes(6).toString('hex')}`
    const filePath = `${slug}/index.html`
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

    // Clear any stale object from a previous failed attempt, then sign.
    await admin.storage.from(DECKS_BUCKET).remove([filePath])
    const { data, error } = await admin.storage
      .from(DECKS_BUCKET)
      .createSignedUploadUrl(filePath)
    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || 'Could not prepare the upload.' },
        { status: 500 }
      )
    }
    return NextResponse.json({ slug, path: filePath, token: data.token })
  }

  // ---- Phase 2: commit ----
  if (body.phase === 'commit') {
    // The client sends back the tokened slug from the sign phase. Use it
    // verbatim (do NOT re-slugify/truncate it) — it must match the folder
    // the file was uploaded to.
    const slug = String(body.slug || '').trim()
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*-[0-9a-f]{12}$/.test(slug)) {
      return NextResponse.json({ error: 'Invalid upload reference.' }, { status: 400 })
    }
    const filePath = `${slug}/index.html`

    // Confirm the file actually landed in storage before recording the row.
    const { data: uploaded } = await admin.storage
      .from(DECKS_BUCKET)
      .exists(filePath)
    if (!uploaded) {
      return NextResponse.json({ error: 'Upload not found. Please try again.' }, { status: 400 })
    }

    const { error: insertError } = await admin.from(DECKS_TABLE).insert({
      slug,
      title,
      client_name: clientName || null,
      file_path: filePath,
      created_by: user.id,
    })
    if (insertError) {
      await admin.storage.from(DECKS_BUCKET).remove([filePath])
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true, slug })
  }

  return NextResponse.json({ error: 'Unknown phase.' }, { status: 400 })
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
