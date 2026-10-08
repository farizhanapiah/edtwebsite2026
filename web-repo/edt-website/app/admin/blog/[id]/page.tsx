import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createSupabaseAdminClient, BLOG_TABLE } from '@/lib/supabase/admin'
import { blogFileUrl } from '@/lib/blog'
import type { BlogPost } from '@/lib/types'
import BlogPostForm from '@/components/admin/BlogPostForm'

export const dynamic = 'force-dynamic'

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const admin = createSupabaseAdminClient()
  const { data } = await admin.from(BLOG_TABLE).select('*').eq('id', id).maybeSingle()
  if (!data) notFound()
  const post = data as BlogPost

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/admin/blog" className="text-edt-grey text-sm hover:text-white transition-colors">
          ← All Posts
        </Link>
        <a
          href={`/admin/blog/${post.id}/preview`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest font-semibold border border-white/20 px-4 py-2 text-white/80 hover:border-edt-blue hover:text-white transition-colors"
        >
          Preview Saved Version
        </a>
      </div>
      <h1 className="display-md font-display uppercase mt-6 mb-10">Edit Post</h1>
      <BlogPostForm
        post={post}
        coverUrl={blogFileUrl(post.cover_path)}
        ogUrl={blogFileUrl(post.og_image_path)}
      />
    </div>
  )
}
