import Link from 'next/link'
import { blogFileUrl } from '@/lib/blog'
import { BLOG_CATEGORY_COLOURS, type BlogCategory, type BlogPost } from '@/lib/types'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function PostMeta({ category, date, minutes }: { category: BlogCategory; date: string; minutes: number | null }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-widest">
      <span className={`font-semibold ${BLOG_CATEGORY_COLOURS[category]}`}>{category}</span>
      <span className="text-edt-grey/60">{formatDate(date)}</span>
      {minutes && <span className="text-edt-grey/60">{minutes} min read</span>}
    </div>
  )
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="bg-edt-black p-6 lg:p-8 flex flex-col group">
      <div className="aspect-video bg-surface border border-white/10 overflow-hidden mb-6">
        {post.cover_path && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blogFileUrl(post.cover_path)!}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <PostMeta category={post.category} date={post.published_at} minutes={post.read_minutes} />
      <h3 className="text-white font-semibold text-xl leading-snug mt-3 mb-3 group-hover:text-edt-blue transition-colors">
        {post.title}
      </h3>
      {post.excerpt && <p className="text-edt-grey text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>}
    </Link>
  )
}
