import { NextResponse, type NextRequest } from 'next/server'
import { createSupabaseAdminClient, DECKS_BUCKET, DECKS_TABLE } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

// Public share URL for a pitch deck: weareedt.com/d/<slug>
// Streams the stored HTML so clients can view it without any login.
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const admin = createSupabaseAdminClient()

  const { data: deck } = await admin
    .from(DECKS_TABLE)
    .select('file_path')
    .eq('slug', slug)
    .maybeSingle()

  if (!deck) {
    return new NextResponse('Deck not found', { status: 404 })
  }

  const { data: file, error } = await admin.storage
    .from(DECKS_BUCKET)
    .download(deck.file_path)

  if (error || !file) {
    return new NextResponse('Deck file unavailable', { status: 404 })
  }

  const html = await file.text()

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'X-Robots-Tag': 'noindex',
    },
  })
}
