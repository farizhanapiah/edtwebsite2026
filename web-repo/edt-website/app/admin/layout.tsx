import type { Metadata } from 'next'
import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import AdminNav from './AdminNav'
import SignOutButton from './SignOutButton'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'EDT Admin',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // The login page renders without a session (middleware lets it through).
  if (!user) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-edt-black text-white">
      <header className="border-b border-white/10 sticky top-0 bg-edt-black z-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-16 flex items-center justify-between gap-8">
          <Link
            href="/admin"
            className="font-display uppercase text-sm tracking-widest text-white"
          >
            EDT Admin
          </Link>
          <AdminNav />
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-edt-grey text-xs truncate max-w-[180px]">
              {user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">{children}</div>
    </div>
  )
}
