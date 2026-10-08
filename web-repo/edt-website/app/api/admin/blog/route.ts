import { NextResponse, type NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'
import { randomBytes, randomUUID } from 'crypto'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseAdminClient, BLOG_BUCKET, BLOG_TABLE } from '@/lib/supabase/admin'
import { BLOG_CATEGORIES, slugify, type BlogCategory } from '@/lib/types'
import { estimateReadMinutes } from '@/lib/blog'

export const dynamic = 'force-dynamic'

const IMAGE_EXTS = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

async function requireUser() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

function str(value: unknown): string {
  return String(value ?? '').trim()
}

// Same pattern as the deck uploader: files go DIRECTLY from the browser to
// Supabase Storage (no Vercel body limit); this endpoint handles JSON only.
//   phase 'sign'   → reserve/confirm the post id, return signed upload URLs
//   phase 'commit' → after the browser uploads, create or update the row
// Used for both new posts and edits (an edit may replace any file, or none).
export async function POST(request: NextRequest) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()
  const slug = slugify(str(body.slug) || str(body.title))
  if (!slug) {
    return NextResponse.json({ error: 'Could not derive a valid slug.' }, { status: 400 })
  }

  // ---- Phase 1: sign ----
  if (body.phase === 'sign') {
    let id = str(body.id)
    if (id) {
      if (!UUID_RE.test(id)) {
        return NextResponse.json({ error: 'Invalid post id.' }, { status: 400 })
      }
      const { data: existing } = await admin.from(BLOG_TABLE).select('id').eq('id', id).maybeSingle()
      if (!existing) {
        return NextResponse.json({ error: 'Post not found.' }, { status: 404 })
      }
    } else {
      id = randomUUID()
    }

    const { data: clash } = await admin
      .from(BLOG_TABLE)
      .select('id')
      .eq('slug', slug)
      .neq('id', id)
      .maybeSingle()
    if (clash) {
      return NextResponse.json(
        { error: `The URL /blog/${slug} is already used by another post.` },
        { status: 409 }
      )
    }

    // Random folder per upload: busts caches when a file is replaced and
    // keeps draft files unguessable in the public bucket.
    const folder = `${id}/${randomBytes(8).toString('hex')}`
    const wanted: Record<string, string> = {}
    const files = (body.files ?? {}) as Record<string, unknown>
    if (files.html) wanted.html = `${folder}/index.html`
    for (const key of ['cover', 'og'] as const) {
      if (!files[key]) continue
      const ext = str(files[key]).toLowerCase()
      if (!IMAGE_EXTS.includes(ext)) {
        return NextResponse.json({ error: `Unsupported image type: .${ext}` }, { status: 400 })
      }
      wanted[key] = `${folder}/${key}.${ext}`
    }

    const uploads: Record<string, { path: string; token: string }> = {}
    for (const [key, path] of Object.entries(wanted)) {
      const { data, error } = await admin.storage.from(BLOG_BUCKET).createSignedUploadUrl(path)
      if (error || !data) {
        return NextResponse.json(
          { error: error?.message || 'Could not prepare the upload.' },
          { status: 500 }
        )
      }
      uploads[key] = { path, token: data.token }
    }

    return NextResponse.json({ id, slug, uploads })
  }

  // ---- Phase 2: commit ----
  if (body.phase === 'commit') {
    const id = str(body.id)
    if (!UUID_RE.test(id)) {
      return NextResponse.json({ error: 'Invalid post id.' }, { status: 400 })
    }

    const title = str(body.title)
    const category = str(body.category) as BlogCategory
    const status = body.status === 'published' ? 'published' : 'draft'
    const publishedAt = new Date(str(body.published_at) || Date.now())

    if (!title) {
      return NextResponse.json({ error: 'Title is required.' }, { status: 400 })
    }
    if (!BLOG_CATEGORIES.includes(category)) {
      return NextResponse.json({ error: 'Choose a category.' }, { status: 400 })
    }
    const canonicalPath = str(body.canonical_path)
    if (canonicalPath && !/^(\/[^\s]*|https:\/\/\S+)$/.test(canonicalPath)) {
      return NextResponse.json(
        { error: 'Canonical URL must start with / or https://' },
        { status: 400 }
      )
    }
    if (Number.isNaN(publishedAt.getTime())) {
      return NextResponse.json({ error: 'Invalid publish date.' }, { status: 400 })
    }

    // Confirm any newly uploaded files belong to this post and actually landed.
    const newPaths: Record<'file_path' | 'cover_path' | 'og_image_path', string | null> = {
      file_path: str(body.file_path) || null,
      cover_path: str(body.cover_path) || null,
      og_image_path: str(body.og_image_path) || null,
    }
    for (const path of Object.values(newPaths)) {
      if (!path) continue
      const dir = path.slice(0, path.lastIndexOf('/'))
      const name = path.slice(path.lastIndexOf('/') + 1)
      if (!path.startsWith(`${id}/`)) {
        return NextResponse.json({ error: 'Invalid file path.' }, { status: 400 })
      }
      const { data: list } = await admin.storage.from(BLOG_BUCKET).list(dir)
      if (!list?.some((o) => o.name === name)) {
        return NextResponse.json({ error: 'Upload not found. Please try again.' }, { status: 400 })
      }
    }

    const { data: existing } = await admin
      .from(BLOG_TABLE)
      .select('slug, file_path, cover_path, og_image_path, read_minutes')
      .eq('id', id)
      .maybeSingle()

    if (!existing && !newPaths.file_path) {
      return NextResponse.json({ error: 'Please choose the post .html file.' }, { status: 400 })
    }

    let readMinutes: number | null = existing?.read_minutes ?? null
    if (newPaths.file_path) {
      const { data: file } = await admin.storage.from(BLOG_BUCKET).download(newPaths.file_path)
      if (file) readMinutes = estimateReadMinutes(await file.text())
    }

    const removeOg = body.remove_og === true
    const row = {
      id,
      slug,
      title,
      excerpt: str(body.excerpt) || null,
      category,
      status,
      published_at: publishedAt.toISOString(),
      seo_title: str(body.seo_title) || null,
      seo_description: str(body.seo_description) || null,
      canonical_path: canonicalPath || null,
      file_path: newPaths.file_path ?? existing!.file_path,
      cover_path: newPaths.cover_path ?? existing?.cover_path ?? null,
      og_image_path: removeOg ? null : (newPaths.og_image_path ?? existing?.og_image_path ?? null),
      read_minutes: readMinutes,
      updated_at: new Date().toISOString(),
      ...(existing ? {} : { created_by: user.id }),
    }

    const { error } = existing
      ? await admin.from(BLOG_TABLE).update(row).eq('id', id)
      : await admin.from(BLOG_TABLE).insert(row)
    if (error) {
      const fresh = Object.values(newPaths).filter(Boolean) as string[]
      if (fresh.length) await admin.storage.from(BLOG_BUCKET).remove(fresh)
      const message = error.code === '23505' ? `The URL /blog/${slug} is already in use.` : error.message
      return NextResponse.json({ error: message }, { status: 500 })
    }

    // Clean up files this save replaced.
    if (existing) {
      const stale = [
        newPaths.file_path && existing.file_path,
        newPaths.cover_path && existing.cover_path,
        (newPaths.og_image_path || removeOg) && existing.og_image_path,
      ].filter(Boolean) as string[]
      if (stale.length) await admin.storage.from(BLOG_BUCKET).remove(stale)
    }

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)
    if (existing && existing.slug !== slug) revalidatePath(`/blog/${existing.slug}`)
    revalidatePath('/sitemap.xml')

    return NextResponse.json({ ok: true, id, slug })
  }

  return NextResponse.json({ error: 'Unknown phase.' }, { status: 400 })
}

// Delete a post record and its stored files.
export async function DELETE(request: NextRequest) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Missing post id.' }, { status: 400 })
  }

  const admin = createSupabaseAdminClient()
  const { data: post } = await admin
    .from(BLOG_TABLE)
    .select('slug, file_path, cover_path, og_image_path')
    .eq('id', id)
    .maybeSingle()

  const files = [post?.file_path, post?.cover_path, post?.og_image_path].filter(Boolean) as string[]
  if (files.length) await admin.storage.from(BLOG_BUCKET).remove(files)

  const { error } = await admin.from(BLOG_TABLE).delete().eq('id', id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  revalidatePath('/blog')
  if (post?.slug) revalidatePath(`/blog/${post.slug}`)
  revalidatePath('/sitemap.xml')

  return NextResponse.json({ ok: true })
}
