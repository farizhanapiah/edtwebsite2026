'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { blogPostState, BLOG_CATEGORY_COLOURS, type BlogPost } from '@/lib/types'

const STATE_STYLES = {
  draft: 'border-white/30 text-white/60',
  scheduled: 'border-amber-400/50 text-amber-400',
  live: 'border-green-400/50 text-green-400',
} as const

const btnClass =
  'text-xs uppercase tracking-widest font-semibold border border-white/20 px-4 py-2 text-white/80 hover:border-edt-blue hover:text-white transition-colors'

export default function BlogPostList({
  posts,
  coverUrls,
}: {
  posts: BlogPost[]
  coverUrls: Record<string, string | null>
}) {
  const router = useRouter()
  const [busyId, setBusyId] = useState<string | null>(null)

  async function deletePost(post: BlogPost) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    setBusyId(post.id)
    const res = await fetch(`/api/admin/blog?id=${post.id}`, { method: 'DELETE' })
    setBusyId(null)
    if (res.ok) {
      router.refresh()
    } else {
      const json = await res.json().catch(() => null)
      window.alert(json?.error || 'Failed to delete post.')
    }
  }

  if (posts.length === 0) {
    return (
      <p className="text-edt-grey text-sm border border-white/10 p-8">
        No posts yet. Click “New Post” to upload your first article.
      </p>
    )
  }

  return (
    <div className="border border-white/10 divide-y divide-white/10">
      {posts.map((post) => {
        const state = blogPostState(post)
        const cover = coverUrls[post.id]
        return (
          <div key={post.id} className="p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="w-full lg:w-40 aspect-video bg-edt-black border border-white/10 shrink-0 overflow-hidden">
              {cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt="" className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className={`text-[10px] uppercase tracking-widest font-semibold border px-2 py-0.5 ${STATE_STYLES[state]}`}>
                  {state}
                </span>
                <span className={`text-xs uppercase tracking-widest font-semibold ${BLOG_CATEGORY_COLOURS[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <div className="text-white font-semibold truncate">{post.title}</div>
              <div className="text-edt-grey text-sm mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <span className="text-edt-blue">/blog/{post.slug}</span>
                <span className="text-edt-grey/60">
                  {state === 'draft' ? 'Edited ' : state === 'scheduled' ? 'Goes live ' : 'Published '}
                  {new Date(state === 'draft' ? post.updated_at : post.published_at).toLocaleString(undefined, {
                    dateStyle: 'medium',
                    timeStyle: state === 'scheduled' ? 'short' : undefined,
                  })}
                </span>
                {post.read_minutes && <span className="text-edt-grey/60">{post.read_minutes} min read</span>}
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href={`/admin/blog/${post.id}`} className={btnClass}>
                Edit
              </Link>
              <a
                href={state === 'live' ? `/blog/${post.slug}` : `/admin/blog/${post.id}/preview`}
                target="_blank"
                rel="noopener noreferrer"
                className={btnClass}
              >
                {state === 'live' ? 'View' : 'Preview'}
              </a>
              <button
                onClick={() => deletePost(post)}
                disabled={busyId === post.id}
                className="text-xs uppercase tracking-widest font-semibold border border-red-500/40 px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
              >
                {busyId === post.id ? '…' : 'Delete'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
