import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Auth-aware server client (reads/refreshes the Supabase session cookie).
// Use in server components and route handlers that need the logged-in user.
export async function createSupabaseServerClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          // setAll can be called from a Server Component (read-only cookies);
          // the middleware handles session refresh, so ignore failures here.
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // no-op
          }
        },
      },
    }
  )
}
