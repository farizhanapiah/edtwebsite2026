import type { Metadata } from 'next'
import Link from 'next/link'
import BlogFooterSections from '@/components/blog/BlogFooterSections'
import PostCard, { PostMeta } from '@/components/blog/PostCard'
import { blogFileUrl, getLivePosts } from '@/lib/blog'
import { BLOG_CATEGORIES, BLOG_CATEGORY_COLOURS, type BlogCategory } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Blog — Immersive Tech Insights',
  description:
    "EDT's blog: guides, case studies, product deep dives and insights on AR, VR, MR, AI avatars, and immersive experience design in Malaysia.",
  alternates: {
    canonical: '/blog',
    languages: { 'en-MY': '/blog', 'x-default': '/blog' },
  },
}

const teasers: { category: BlogCategory; copy: string }[] = [
  { category: 'Guides', copy: 'Practical playbooks for deploying AR/VR in Malaysia.' },
  { category: 'Case Studies', copy: 'Behind-the-scenes breakdowns of EDT projects.' },
  { category: 'Products', copy: 'Deep dives on RiaReality, CheritAR, MimpiLab, and more.' },
  { category: 'Insights', copy: 'Industry analysis and engagement benchmarks.' },
]

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const allPosts = await getLivePosts()
  const active = BLOG_CATEGORIES.find((c) => c === category)
  const posts = active ? allPosts.filter((p) => p.category === active) : allPosts

  if (allPosts.length === 0) return <ComingSoon />

  // Newest post is featured on the unfiltered view.
  const featured = active ? undefined : posts[0]
  const rest = active ? posts : posts.slice(1)

  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Blog</span>
          <h1 className="display-xl font-display uppercase mb-6">Field Notes.</h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            Insights on AR, VR, MR, AI avatars, virtual production, and immersive experience
            design, from the team building them.
          </p>
          <nav className="flex flex-wrap gap-3 mt-10" aria-label="Filter by category">
            {[undefined, ...BLOG_CATEGORIES].map((c) => {
              const selected = c === active
              return (
                <Link
                  key={c ?? 'all'}
                  href={c ? `/blog?category=${encodeURIComponent(c)}` : '/blog'}
                  scroll={false}
                  className={`text-xs uppercase tracking-widest font-semibold border px-4 py-2 transition-colors ${
                    selected ? 'border-edt-blue bg-edt-blue text-white' : 'border-white/20 text-white/70 hover:border-white hover:text-white'
                  }`}
                >
                  {c ?? 'All'}
                </Link>
              )
            })}
          </nav>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="bg-edt-black border-b border-white/10">
          <Link
            href={`/blog/${featured.slug}`}
            className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group"
          >
            <div className="aspect-video bg-surface border border-white/10 overflow-hidden">
              {featured.cover_path && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={blogFileUrl(featured.cover_path)!}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div>
              <PostMeta category={featured.category} date={featured.published_at} minutes={featured.read_minutes} />
              <h2 className="display-md font-display uppercase mt-4 mb-6 group-hover:text-edt-blue transition-colors">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-edt-grey text-lg leading-relaxed mb-8">{featured.excerpt}</p>
              )}
              <span className="text-edt-blue text-sm uppercase tracking-widest font-semibold">Read article →</span>
            </div>
          </Link>
        </section>
      )}

      {/* GRID */}
      <section className="bg-edt-black py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          {rest.length === 0 && !featured ? (
            <p className="text-edt-grey">No {active} posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {rest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <BlogFooterSections />
    </main>
  )
}

function ComingSoon() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Blog</span>
          <h1 className="display-xl font-display uppercase mb-6">Coming Soon.</h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            We&apos;re putting the finishing touches on EDT&apos;s blog. Insights on AR, VR, MR,
            AI avatars, virtual production, and immersive experience design — landing soon.
          </p>
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="bg-edt-black py-20 lg:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-edt-blue">
            What&apos;s Coming
          </span>
          <h2 className="display-md font-display uppercase mt-4 mb-12 max-w-2xl">
            Four streams. One feed.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {teasers.map((t) => (
              <div key={t.category} className="bg-edt-black p-8 lg:p-10">
                <span
                  className={`text-xs uppercase tracking-widest font-semibold mb-4 block ${BLOG_CATEGORY_COLOURS[t.category]}`}
                >
                  {t.category}
                </span>
                <p className="font-sans text-[14px] text-edt-grey leading-relaxed">
                  {t.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogFooterSections newsletterCopy="Drop your email — we’ll send you the first three articles the day they go live. No spam. Unsubscribe any time." />
    </main>
  )
}
