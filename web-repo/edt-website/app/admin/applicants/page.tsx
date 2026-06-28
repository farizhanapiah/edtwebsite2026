import { createSupabaseAdminClient } from '@/lib/supabase/admin'
import type { Application } from '@/lib/types'
import ApplicantList from '@/components/admin/ApplicantList'

export const dynamic = 'force-dynamic'

export default async function AdminApplicantsPage() {
  const admin = createSupabaseAdminClient()
  const { data } = await admin
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false })

  const applications = (data ?? []) as Application[]

  return (
    <div>
      <span className="edt-badge mb-6 inline-block">Talent Pool</span>
      <h1 className="display-md font-display uppercase mb-2">Applicants</h1>
      <p className="text-edt-grey text-sm mb-10 max-w-2xl">
        Every job and internship application, kept on file. Filter by type, open
        portfolios, and download CVs.
      </p>
      <ApplicantList applications={applications} />
    </div>
  )
}
