'use client'

import { useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

export default function SignOutButton() {
  const router = useRouter()

  async function signOut() {
    const supabase = createSupabaseBrowserClient()
    await supabase.auth.signOut()
    router.replace('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={signOut}
      className="font-sans text-[13px] font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors"
    >
      Sign Out
    </button>
  )
}
