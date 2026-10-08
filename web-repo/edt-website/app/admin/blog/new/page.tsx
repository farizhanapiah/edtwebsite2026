import Link from 'next/link'
import BlogPostForm from '@/components/admin/BlogPostForm'

export default function NewBlogPostPage() {
  return (
    <div>
      <Link href="/admin/blog" className="text-edt-grey text-sm hover:text-white transition-colors">
        ← All Posts
      </Link>
      <h1 className="display-md font-display uppercase mt-6 mb-10">New Post</h1>
      <BlogPostForm />
    </div>
  )
}
