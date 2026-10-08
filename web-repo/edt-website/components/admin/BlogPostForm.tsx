'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { BLOG_CATEGORIES, slugify, type BlogPost, type BlogStatus } from '@/lib/types'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

const BLOG_BUCKET = 'blog'
const MAX_HTML_BYTES = 25 * 1024 * 1024 // 25 MB
const MAX_IMAGE_BYTES = 10 * 1024 * 1024 // 10 MB

const inputClass =
  'w-full bg-edt-black border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue'
const fileClass =
  'w-full bg-edt-black border border-white/20 text-white px-5 py-4 text-sm file:mr-4 file:border-0 file:bg-edt-blue file:text-white file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-widest file:cursor-pointer'
const labelClass = 'block text-edt-grey text-sm uppercase tracking-widest mb-2'
const hintClass = 'text-edt-grey/70 text-xs mt-2'

// ISO → value for <input type="datetime-local"> in the browser's timezone.
function toLocalInput(iso: string | Date): string {
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

// Flags files that won't work as a blog post: scripts are stripped on the
// site, and full-screen layouts (decks, motion pieces) don't fit an article.
function checkPostHtml(raw: string): string[] {
  const warnings: string[] = []
  const scripts = raw.match(/<script\b(?![^>]*type=["']application\/(?:ld\+)?json)[^>]*>/gi) ?? []
  if (scripts.some((tag) => /cdn\.tailwindcss\.com/i.test(tag))) {
    warnings.push('It uses the Tailwind CDN script, which is removed on the blog, so the post will lose its styling. Ask Claude for plain CSS in a <style> tag.')
  } else if (scripts.length) {
    warnings.push('It contains JavaScript, which is removed on the blog. Animations or interactive parts that rely on it won’t work (CSS animations are fine).')
  }
  if (/position\s*:\s*fixed/i.test(raw) || /height\s*:\s*100(?:d|s)?vh\b[^}]*overflow\s*:\s*hidden|overflow\s*:\s*hidden[^}]*height\s*:\s*100(?:d|s)?vh/i.test(raw)) {
    warnings.push('It looks like a full-screen layout (like a deck or presentation). Blog posts should be normal scrolling pages.')
  }
  return warnings
}

// Downscale + re-encode large images in the browser before upload.
async function compressImage(file: File, maxWidth: number): Promise<File> {
  if (file.type === 'image/gif' || file.type === 'image/svg+xml') return file
  const bitmap = await createImageBitmap(file).catch(() => null)
  if (!bitmap) return file
  if (bitmap.width <= maxWidth && file.size <= 600 * 1024) return file
  const scale = Math.min(1, maxWidth / bitmap.width)
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.85))
  if (!blob || blob.size >= file.size) return file
  return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.webp', { type: 'image/webp' })
}

function extOf(file: File): string {
  return file.name.split('.').pop()?.toLowerCase() || ''
}

type Props = {
  post?: BlogPost
  coverUrl?: string | null
  ogUrl?: string | null
}

export default function BlogPostForm({ post, coverUrl, ogUrl }: Props) {
  const router = useRouter()
  const editing = Boolean(post)

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [slugEdited, setSlugEdited] = useState(editing)
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [status, setStatus] = useState<BlogStatus>(post?.status ?? 'draft')
  const [publishedAt, setPublishedAt] = useState('')
  const [seoTitle, setSeoTitle] = useState(post?.seo_title ?? '')
  const [seoDescription, setSeoDescription] = useState(post?.seo_description ?? '')
  const [canonicalPath, setCanonicalPath] = useState(post?.canonical_path ?? '')
  const [coverPreview, setCoverPreview] = useState<string | null>(coverUrl ?? null)
  const [removeOg, setRemoveOg] = useState(false)
  const [htmlWarnings, setHtmlWarnings] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Set after mount so the server render and the browser agree on timezone.
  useEffect(() => {
    setPublishedAt(toLocalInput(post?.published_at ?? new Date()))
  }, [post?.published_at])

  function onTitleChange(value: string) {
    setTitle(value)
    if (!slugEdited) setSlug(slugify(value))
  }

  const scheduled = status === 'published' && publishedAt && new Date(publishedAt) > new Date()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    const fd = new FormData(e.currentTarget)
    const pick = (name: string) => {
      const f = fd.get(name)
      return f instanceof File && f.size > 0 ? f : null
    }
    const html = pick('html')
    const rawCover = pick('cover')
    const rawOg = pick('og')

    if (!editing && !html) return setError('Please choose the post .html file.')
    if (!editing && !rawCover) return setError('Please choose a cover image.')
    if (html && html.size > MAX_HTML_BYTES) return setError('HTML file exceeds the 25 MB limit.')
    if (htmlWarnings.length && status === 'published' &&
        !window.confirm('This HTML file may not display correctly on the blog:\n\n• ' + htmlWarnings.join('\n• ') + '\n\nPublish anyway?')) {
      return
    }

    setSubmitting(true)
    setError(null)
    const cover = rawCover && (await compressImage(rawCover, 2400))
    const og = rawOg && (await compressImage(rawOg, 1600))
    if ((cover && cover.size > MAX_IMAGE_BYTES) || (og && og.size > MAX_IMAGE_BYTES)) {
      setSubmitting(false)
      return setError('Images must be under 10 MB.')
    }

    const fields = {
      title,
      slug,
      excerpt,
      category: String(fd.get('category') || ''),
      status,
      published_at: publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString(),
      seo_title: seoTitle,
      seo_description: seoDescription,
      canonical_path: canonicalPath,
    }

    try {
      // 1) Reserve the post id + get signed upload URLs for any new files.
      const signRes = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phase: 'sign',
          id: post?.id,
          title,
          slug,
          files: {
            html: Boolean(html),
            cover: cover ? extOf(cover) : undefined,
            og: og ? extOf(og) : undefined,
          },
        }),
      })
      const sign = await signRes.json().catch(() => null)
      if (!signRes.ok) throw new Error(sign?.error || 'Save failed. Please try again.')

      // 2) Upload straight to Supabase Storage.
      const supabase = createSupabaseBrowserClient()
      const uploaded: Record<string, string> = {}
      const jobs: [string, File | null, string][] = [
        ['html', html, 'text/html'],
        ['cover', cover, cover?.type || 'image/jpeg'],
        ['og', og, og?.type || 'image/jpeg'],
      ]
      for (const [key, file, contentType] of jobs) {
        if (!file) continue
        const { path, token } = sign.uploads[key]
        const { error: upErr } = await supabase.storage
          .from(BLOG_BUCKET)
          .uploadToSignedUrl(path, token, file, { contentType })
        if (upErr) throw new Error(upErr.message || 'Storage upload failed.')
        uploaded[key] = path
      }

      // 3) Save the post row.
      const commitRes = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phase: 'commit',
          id: sign.id,
          ...fields,
          slug: sign.slug,
          file_path: uploaded.html,
          cover_path: uploaded.cover,
          og_image_path: uploaded.og,
          remove_og: removeOg && !og,
        }),
      })
      const commit = await commitRes.json().catch(() => null)
      if (!commitRes.ok) throw new Error(commit?.error || 'Could not save the post.')

      router.push('/admin/blog')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* CONTENT */}
      <section className="bg-surface border border-white/10 p-8 space-y-6">
        <h2 className="text-white font-semibold text-lg">Post</h2>

        <div>
          <label className={labelClass}>Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className={inputClass}
            placeholder="The Complete Guide to AR/VR Events in Malaysia (2026)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>URL Slug *</label>
            <div className="flex items-center gap-2">
              <span className="text-edt-grey text-sm">/blog/</span>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => {
                  setSlugEdited(true)
                  setSlug(slugify(e.target.value))
                }}
                className={inputClass}
                placeholder="complete-guide-ar-vr-events-malaysia"
              />
            </div>
            {editing && post?.status === 'published' && slug !== post.slug && (
              <p className="text-amber-400 text-xs mt-2">
                Changing the slug of a live post breaks any links already shared.
              </p>
            )}
          </div>
          <div>
            <label className={labelClass}>Category *</label>
            <select name="category" required defaultValue={post?.category ?? ''} className={inputClass}>
              <option value="" disabled>
                Choose a category
              </option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className={inputClass}
            placeholder="One or two sentences shown on the blog listing card."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Post HTML File {editing ? '' : '*'}</label>
            <input
              type="file"
              name="html"
              accept=".html,.htm,text/html"
              className={fileClass}
              onChange={async (e) => {
                const f = e.target.files?.[0]
                setHtmlWarnings(f ? checkPostHtml(await f.text()) : [])
              }}
            />
            {htmlWarnings.length > 0 && (
              <div className="mt-3 border border-amber-400/40 bg-amber-400/5 p-4 text-amber-300 text-xs leading-relaxed space-y-2">
                <p className="font-semibold uppercase tracking-widest">This file may not display correctly</p>
                {htmlWarnings.map((w) => (
                  <p key={w}>• {w}</p>
                ))}
              </div>
            )}
            <p className={hintClass}>
              {editing
                ? 'Leave empty to keep the current file. Choose a new one to replace it.'
                : 'Self-contained .html built in Claude (max 25 MB). Don’t include the site nav or footer; the website adds them.'}
            </p>
          </div>
          <div>
            <label className={labelClass}>Cover Image {editing ? '' : '*'}</label>
            <input
              type="file"
              name="cover"
              accept="image/jpeg,image/png,image/webp,image/avif"
              className={fileClass}
              onChange={(e) => {
                const f = e.target.files?.[0]
                setCoverPreview(f ? URL.createObjectURL(f) : coverUrl ?? null)
              }}
            />
            <p className={hintClass}>16:9, at least 1600×900. Shown on the blog card.</p>
            {coverPreview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={coverPreview} alt="" className="mt-4 w-full max-w-sm aspect-video object-cover border border-white/10" />
            )}
          </div>
        </div>
      </section>

      {/* PUBLISHING */}
      <section className="bg-surface border border-white/10 p-8 space-y-6">
        <h2 className="text-white font-semibold text-lg">Publishing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Status</label>
            <div className="flex border border-white/20 w-fit">
              {(['draft', 'published'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                    status === s ? 'bg-edt-blue text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {s === 'draft' ? 'Draft' : 'Published'}
                </button>
              ))}
            </div>
            <p className={hintClass}>Drafts are only visible here in the admin.</p>
          </div>
          <div>
            <label className={labelClass}>Publish Date</label>
            <input
              type="datetime-local"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className={`${inputClass} [color-scheme:dark]`}
            />
            <p className={hintClass}>
              {scheduled
                ? 'Scheduled: the post goes live automatically at this time.'
                : 'Pick a future date to schedule a published post.'}
            </p>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="bg-surface border border-white/10 p-8 space-y-6">
        <h2 className="text-white font-semibold text-lg">SEO & Sharing</h2>
        <div>
          <label className={labelClass}>
            Meta Title <span className="normal-case tracking-normal text-edt-grey/60">({seoTitle.length}/60)</span>
          </label>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className={inputClass}
            placeholder={title || 'Defaults to the post title'}
          />
        </div>
        <div>
          <label className={labelClass}>
            Meta Description{' '}
            <span className="normal-case tracking-normal text-edt-grey/60">({seoDescription.length}/160)</span>
          </label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            rows={2}
            className={inputClass}
            placeholder={excerpt || 'Defaults to the excerpt'}
          />
        </div>
        <div>
          <label className={labelClass}>Canonical URL</label>
          <input
            type="text"
            value={canonicalPath}
            onChange={(e) => setCanonicalPath(e.target.value.trim())}
            className={inputClass}
            placeholder="/work/metahrise"
          />
          <p className={hintClass}>
            Only if this post copies an existing page: Google ranks that page instead, and the post is
            left out of the sitemap. Leave empty for original articles.
          </p>
        </div>
        <div>
          <label className={labelClass}>Share Image</label>
          <input type="file" name="og" accept="image/jpeg,image/png,image/webp" className={fileClass} />
          <p className={hintClass}>Optional, 1200×630. Defaults to the cover image.</p>
          {ogUrl && !removeOg && (
            <div className="mt-4 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ogUrl} alt="" className="w-48 aspect-[1200/630] object-cover border border-white/10" />
              <button type="button" onClick={() => setRemoveOg(true)} className="text-xs uppercase tracking-widest text-red-400 hover:underline">
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Search result preview */}
        <div className="border border-white/10 bg-edt-black p-5 max-w-2xl">
          <div className="text-edt-grey/60 text-xs mb-1">weareedt.com › blog › {slug || 'your-post'}</div>
          <div className="text-[#8ab4f8] text-lg leading-snug truncate">{seoTitle || title || 'Post title'} | EDT</div>
          <div className="text-edt-grey text-sm mt-1 line-clamp-2">
            {seoDescription || excerpt || 'Meta description shows here.'}
          </div>
        </div>
      </section>

      {error && (
        <p role="alert" className="text-red-400 text-sm">
          {error}
        </p>
      )}

      <div className="flex items-center gap-4">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting
            ? 'Saving…'
            : status === 'draft'
              ? 'Save Draft'
              : scheduled
                ? 'Schedule Post'
                : editing && post?.status === 'published'
                  ? 'Update Post'
                  : 'Publish Post'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/blog')}
          className="text-xs uppercase tracking-widest text-white/60 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
