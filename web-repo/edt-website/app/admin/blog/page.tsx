import Link from 'next/link'
import { createSupabaseAdminClient, BLOG_TABLE } from '@/lib/supabase/admin'
import { blogFileUrl } from '@/lib/blog'
import type { BlogPost } from '@/lib/types'
import BlogPostList from '@/components/admin/BlogPostList'

export const dynamic = 'force-dynamic'

export default async function AdminBlogPage() {
  const admin = createSupabaseAdminClient()
  const { data } = await admin
    .from(BLOG_TABLE)
    .select('*')
    .order('published_at', { ascending: false })

  const posts = (data ?? []) as BlogPost[]
  const coverUrls = Object.fromEntries(posts.map((p) => [p.id, blogFileUrl(p.cover_path)]))

  return (
    <div>
      <span className="edt-badge mb-6 inline-block">Blog</span>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="display-md font-display uppercase mb-2">Blog Posts</h1>
          <p className="text-edt-grey text-sm max-w-2xl">
            Upload an HTML article built in Claude. Published posts appear on
            weareedt.com/blog inside the site&apos;s nav and footer.
          </p>
        </div>
        <Link href="/admin/blog/new" className="btn-primary">
          New Post
        </Link>
      </div>

      <h2 className="text-white font-semibold text-lg mb-4">All Posts ({posts.length})</h2>
      <BlogPostList posts={posts} coverUrls={coverUrls} />
    </div>
  )
}
