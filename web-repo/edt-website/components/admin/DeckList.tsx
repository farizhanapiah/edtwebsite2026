'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Deck } from '@/lib/types'

export default function DeckList({ decks }: { decks: Deck[] }) {
  const router = useRouter()
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)

  async function copyLink(deck: Deck) {
    const url = `${window.location.origin}/d/${deck.slug}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(deck.id)
      setTimeout(() => setCopiedId((c) => (c === deck.id ? null : c)), 2000)
    } catch {
      window.prompt('Copy this link:', url)
    }
  }

  async function deleteDeck(deck: Deck) {
    if (!window.confirm(`Delete "${deck.title}"? This cannot be undone.`)) return
    setBusyId(deck.id)
    const res = await fetch(`/api/admin/decks?id=${deck.id}`, { method: 'DELETE' })
    setBusyId(null)
    if (res.ok) {
      router.refresh()
    } else {
      const json = await res.json().catch(() => null)
      window.alert(json?.error || 'Failed to delete deck.')
    }
  }

  if (decks.length === 0) {
    return (
      <p className="text-edt-grey text-sm border border-white/10 p-8">
        No decks yet. Upload your first deck above.
      </p>
    )
  }

  return (
    <div className="border border-white/10 divide-y divide-white/10">
      {decks.map((deck) => (
        <div
          key={deck.id}
          className="p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6"
        >
          <div className="flex-1 min-w-0">
            <div className="text-white font-semibold truncate">{deck.title}</div>
            <div className="text-edt-grey text-sm mt-1 flex flex-wrap gap-x-3 gap-y-1">
              {deck.client_name && <span>{deck.client_name}</span>}
              <span className="text-edt-blue">/d/{deck.slug}</span>
              <span className="text-edt-grey/60">
                {new Date(deck.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => copyLink(deck)}
              className="text-xs uppercase tracking-widest font-semibold border border-white/20 px-4 py-2 text-white/80 hover:border-edt-blue hover:text-white transition-colors"
            >
              {copiedId === deck.id ? 'Copied!' : 'Copy Link'}
            </button>
            <a
              href={`/d/${deck.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-semibold border border-white/20 px-4 py-2 text-white/80 hover:border-edt-blue hover:text-white transition-colors"
            >
              Open
            </a>
            <button
              onClick={() => deleteDeck(deck)}
              disabled={busyId === deck.id}
              className="text-xs uppercase tracking-widest font-semibold border border-red-500/40 px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
            >
              {busyId === deck.id ? '…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
