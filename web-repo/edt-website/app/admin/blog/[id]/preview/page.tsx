import { notFound } from 'next/navigation'
import { createSupabaseAdminClient, BLOG_TABLE } from '@/lib/supabase/admin'
import { getPostHtml, prepareBlogHtml } from '@/lib/blog'
import { blogPostState, type BlogPost } from '@/lib/types'
import PostBody from '@/components/blog/PostBody'

export const dynamic = 'force-dynamic'

// Admin-only preview (behind the /admin auth gate) — works for drafts and
// scheduled posts that aren't public yet.
export default async function PreviewBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const admin = createSupabaseAdminClient()
  const { data } = await admin.from(BLOG_TABLE).select('*').eq('id', id).maybeSingle()
  if (!data) notFound()
  const post = data as BlogPost
  const raw = await getPostHtml(post)

  return (
    <div>
      <div className="mb-6 border border-amber-400/40 text-amber-400 text-xs uppercase tracking-widest px-4 py-3">
        Preview · {blogPostState(post)} · /blog/{post.slug}
      </div>
      <div className="border border-white/10 -mx-6 lg:mx-0">
        {raw ? (
          <PostBody post={prepareBlogHtml(raw)} />
        ) : (
          <p className="p-8 text-red-400 text-sm">Post file could not be loaded.</p>
        )}
      </div>
    </div>
  )
}
