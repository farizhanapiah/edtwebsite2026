'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { slugify } from '@/lib/types'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

const DECKS_BUCKET = 'decks'
const MAX_DECK_BYTES = 25 * 1024 * 1024 // 25 MB

export default function DeckUploadForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slugEdited, setSlugEdited] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function onTitleChange(value: string) {
    setTitle(value)
    if (!slugEdited) setSlug(slugify(value))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    const formEl = e.currentTarget
    const fd = new FormData(formEl)
    const clientName = String(fd.get('client_name') || '').trim()
    const file = fd.get('file')

    if (!(file instanceof File) || file.size === 0) {
      setError('Please choose an .html file.')
      return
    }
    if (file.size > MAX_DECK_BYTES) {
      setError('File exceeds the 25 MB limit.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      // 1) Ask the server to validate + issue a one-time signed upload URL.
      const signRes = await fetch('/api/admin/decks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phase: 'sign', title, slug, client_name: clientName }),
      })
      const sign = await signRes.json().catch(() => null)
      if (!signRes.ok) {
        setError(sign?.error || 'Upload failed. Please try again.')
        setSubmitting(false)
        return
      }

      // 2) Upload the file straight to Supabase Storage (bypasses the function
      //    body limit — this is what fixes large decks).
      const supabase = createSupabaseBrowserClient()
      const { error: upErr } = await supabase.storage
        .from(DECKS_BUCKET)
        .uploadToSignedUrl(sign.path, sign.token, file, { contentType: 'text/html' })
      if (upErr) {
        setError(upErr.message || 'Storage upload failed.')
        setSubmitting(false)
        return
      }

      // 3) Record the deck row.
      const commitRes = await fetch('/api/admin/decks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phase: 'commit', title, slug: sign.slug, client_name: clientName }),
      })
      const commit = await commitRes.json().catch(() => null)
      if (!commitRes.ok) {
        setError(commit?.error || 'Could not save the deck. Please try again.')
        setSubmitting(false)
        return
      }

      // Reset and refresh the list.
      setTitle('')
      setSlug('')
      setSlugEdited(false)
      formEl.reset()
      setSubmitting(false)
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
            Deck Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full bg-edt-black border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
            placeholder="Acme Corp — Brand Activation Pitch"
          />
        </div>
        <div>
          <label className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
            Client Name
          </label>
          <input
            type="text"
            name="client_name"
            className="w-full bg-edt-black border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div>
        <label className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
          Share Slug *
        </label>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-edt-grey text-sm">/d/</span>
          <input
            type="text"
            name="slug"
            required
            value={slug}
            onChange={(e) => {
              setSlugEdited(true)
              setSlug(slugify(e.target.value))
            }}
            className="flex-1 min-w-[200px] bg-edt-black border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
            placeholder="acme-corp-pitch"
          />
        </div>
        <p className="text-edt-grey/70 text-xs mt-2">
          This becomes the public link you share with the client. A random code
          is added to the end so the link can&apos;t be guessed.
        </p>
      </div>

      <div>
        <label className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
          HTML File *
        </label>
        <input
          type="file"
          name="file"
          required
          accept=".html,.htm,text/html"
          className="w-full bg-edt-black border border-white/20 text-white px-5 py-4 text-sm file:mr-4 file:border-0 file:bg-edt-blue file:text-white file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-widest file:cursor-pointer"
        />
        <p className="text-edt-grey/70 text-xs mt-2">
          Self-contained .html export from Claude Co-Work (max 25 MB).
        </p>
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={submitting}>
        {submitting ? 'Uploading…' : 'Upload Deck'}
      </button>
    </form>
  )
}
