import { createClient } from '@supabase/supabase-js'

// Privileged service-role client — bypasses RLS. SERVER-ONLY.
// Never import this into a client component or anything reaching the browser.
// Used for storage uploads, signed URLs, and table writes from trusted routes.
export function createSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Supabase admin client is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    )
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// Storage bucket names (created in the Supabase dashboard).
export const DECKS_BUCKET = 'decks'
export const CVS_BUCKET = 'cvs'

// Table for the pitch-deck uploader. Named separately from the pre-existing
// `decks` table (a different system) so the two never collide.
export const DECKS_TABLE = 'deck_uploads'
