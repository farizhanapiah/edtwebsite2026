import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

// Only run the auth gate on the admin subtree. Public pages, the /d deck
// route, and the application API are untouched.
export const config = {
  matcher: ['/admin/:path*'],
}
