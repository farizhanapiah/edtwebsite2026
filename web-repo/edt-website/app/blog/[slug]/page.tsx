import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogFooterSections from '@/components/blog/BlogFooterSections'
import PostBody from '@/components/blog/PostBody'
import PostCard, { PostMeta } from '@/components/blog/PostCard'
import { blogFileUrl, getLivePostBySlug, getLivePosts, getPostHtml, prepareBlogHtml } from '@/lib/blog'
import { SITE_URL } from '@/lib/seo'

// Cached and refreshed every 5 minutes (also revalidated instantly when a post
// is saved in /admin/blog). Scheduled posts go live within ~5 minutes.
export const revalidate = 300

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getLivePostBySlug(slug)
  if (!post) return { title: 'Post not found' }

  const title = post.seo_title || post.title
  const description = post.seo_description || post.excerpt || undefined
  const image = blogFileUrl(post.og_image_path) || blogFileUrl(post.cover_path)

  return {
    title, // root layout template appends " | EDT"
    description,
    alternates: { canonical: post.canonical_path || `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      section: post.category,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = await getLivePostBySlug(slug)
  if (!post) notFound()

  const [raw, latest] = await Promise.all([getPostHtml(post), getLivePosts(4)])
  if (!raw) notFound()
  const related = latest.filter((p) => p.id !== post.id).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo_description || post.excerpt || undefined,
    image: blogFileUrl(post.og_image_path) || blogFileUrl(post.cover_path) || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    articleSection: post.category,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'Experiential Design Team (EDT)', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Experiential Design Team (EDT)', url: SITE_URL },
  }

  return (
    <main className="bg-edt-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* META BAR — the article itself (title, hero, body) comes from the uploaded HTML */}
      <section className="bg-edt-black border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-5 flex flex-wrap items-center justify-between gap-4">
          <Link href="/blog" className="text-edt-grey text-sm hover:text-white transition-colors">
            ← Back to Blog
          </Link>
          <PostMeta category={post.category} date={post.published_at} minutes={post.read_minutes} />
        </div>
      </section>

      <article>
        <PostBody post={prepareBlogHtml(raw)} />
      </article>

      {/* MORE POSTS */}
      {related.length > 0 && (
        <section className="bg-edt-black py-16 lg:py-20 border-t border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 className="display-md font-display uppercase">More from the Blog</h2>
              <Link href="/blog" className="text-edt-blue text-sm uppercase tracking-widest font-semibold hover:underline">
                All posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogFooterSections />
    </main>
  )
}
