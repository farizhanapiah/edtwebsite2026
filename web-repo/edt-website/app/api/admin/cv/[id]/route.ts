import { NextResponse, type NextRequest } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseAdminClient, CVS_BUCKET } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

// Auth-protected: redirects to a short-lived signed URL for an applicant's CV.
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const admin = createSupabaseAdminClient()

  const { data: application } = await admin
    .from('applications')
    .select('cv_path')
    .eq('id', id)
    .maybeSingle()

  if (!application?.cv_path) {
    return NextResponse.json({ error: 'CV not found.' }, { status: 404 })
  }

  const { data, error } = await admin.storage
    .from(CVS_BUCKET)
    .createSignedUrl(application.cv_path, 60) // valid for 60 seconds

  if (error || !data?.signedUrl) {
    return NextResponse.json({ error: 'Could not generate CV link.' }, { status: 500 })
  }

  return NextResponse.redirect(data.signedUrl)
}
