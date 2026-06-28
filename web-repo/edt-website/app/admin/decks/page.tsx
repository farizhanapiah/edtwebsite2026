import { createSupabaseAdminClient, DECKS_TABLE } from '@/lib/supabase/admin'
import type { Deck } from '@/lib/types'
import DeckUploadForm from '@/components/admin/DeckUploadForm'
import DeckList from '@/components/admin/DeckList'

export const dynamic = 'force-dynamic'

export default async function AdminDecksPage() {
  const admin = createSupabaseAdminClient()
  const { data } = await admin
    .from(DECKS_TABLE)
    .select('id, slug, title, client_name, file_path, created_at')
    .order('created_at', { ascending: false })

  const decks = (data ?? []) as Deck[]

  return (
    <div>
      <span className="edt-badge mb-6 inline-block">Pitch Decks</span>
      <h1 className="display-md font-display uppercase mb-2">Deck Library</h1>
      <p className="text-edt-grey text-sm mb-10 max-w-2xl">
        Upload an HTML presentation, then copy its public link to share with a
        specific client. Only your team can see this list.
      </p>

      <section className="bg-surface border border-white/10 p-8 mb-12">
        <h2 className="text-white font-semibold text-lg mb-6">Upload a New Deck</h2>
        <DeckUploadForm />
      </section>

      <h2 className="text-white font-semibold text-lg mb-4">
        All Decks ({decks.length})
      </h2>
      <DeckList decks={decks} />
    </div>
  )
}
