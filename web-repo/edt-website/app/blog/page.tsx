import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Immersive Tech Insights, AR VR News & Case Studies | EDT',
  description:
    "Explore EDT\'s blog for insights on AR, VR, MR, AI avatars, virtual production, and immersive experience design in Malaysia and Southeast Asia.",
}

const posts = [
  {
    title: 'The Complete Guide to AR/VR Events in Malaysia (2026)',
    category: 'Guides',
    date: 'March 2026',
    readTime: '8 min',
    slug: 'complete-guide-ar-vr-events-malaysia-2026',
    excerpt:
      'Everything event planners, brand marketers, and experiential agencies need to know about deploying AR and VR at Malaysian events in 2026.',
  },
  {
    title: 'How EDT Used Mixed Reality to Improve MCMC Onboarding by 40%',
    category: 'Case Studies',
    date: 'Feb 2026',
    readTime: '6 min',
    slug: 'mcmc-metahrise-vr-onboarding-case-study',
    excerpt:
      'A full breakdown of the MetaHRise VR onboarding programme built for MCMC — methodology, results, and what made it work.',
  },
  {
    title: 'AI Holograms vs Traditional Booths: Which Drives More Engagement?',
    category: 'Insights',
    date: 'Feb 2026',
    readTime: '5 min',
    slug: 'ai-holograms-vs-traditional-booths-engagement',
    excerpt:
      "EDT's analysis of engagement metrics across AI hologram deployments versus traditional exhibition booths at Malaysian trade events.",
  },
  {
    title: "What Is CheritAR? Malaysia's First AI-Powered Heritage AR Platform",
    category: 'Products',
    date: 'Jan 2026',
    readTime: '4 min',
    slug: 'what-is-cheritar-ar-heritage-malaysia',
    excerpt:
      'A deep dive into CheritAR — how the platform works, the technology behind it, and where it has been deployed across Kuala Lumpur.',
  },
  {
    title: 'Virtual Production in Malaysia: How ARVENA Is Changing Live Events',
    category: 'Products',
    date: 'Jan 2026',
    readTime: '5 min',
    slug: 'virtual-production-malaysia-arvena-live-events',
    excerpt:
      "ARVENA brings cinematic LED wall virtual production to Malaysia's live events and broadcast industry. Here's what that actually means in practice.",
  },
  {
    title: '5 Questions to Ask Before Hiring an XR Agency in Malaysia',
    category: 'Guides',
    date: 'Dec 2025',
    readTime: '4 min',
    slug: '5-questions-before-hiring-xr-agency-malaysia',
    excerpt:
      'Not all XR agencies are equal. Before you sign a contract, here are the five questions every client should ask — and what the right answers look like.',
  },
]

const categories = ['All', 'Guides', 'Case Studies', 'Products', 'Industry', 'News', 'Insights']

const categoryColour: Record<string, string> = {
  Guides: 'text-edt-blue',
  'Case Studies': 'text-green-400',
  Products: 'text-purple-400',
  Industry: 'text-yellow-400',
  News: 'text-orange-400',
  Insights: 'text-pink-400',
}

export default function BlogPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">EDT Blog</span>
          <h1 className="display-xl font-display uppercase mb-6">Insights &amp; Ideas.</h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            AR, VR, MR, AI avatars, virtual production, and immersive experience design
            in Malaysia and Southeast Asia — from the team that builds it.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="bg-surface border-b border-white/10 py-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-edt-grey text-sm uppercase tracking-widest mr-2">Filter:</span>
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 text-sm border cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'border-edt-blue text-edt-blue'
                    : 'border-white/20 text-edt-grey hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="bg-edt-black py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
            <div className="bg-edt-blue p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-white/70 text-xs uppercase tracking-widest mb-4 block">
                  Featured Article
                </span>
                <h2 className="display-md font-display uppercase text-white mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">{posts[0].excerpt}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm">{posts[0].date}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/60 text-sm">{posts[0].readTime} read</span>
                </div>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="btn-secondary border-white text-white text-sm"
                >
                  Read Article
                </Link>
              </div>
            </div>
            <div className="border-l border-white/10 p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className={`text-xs uppercase tracking-widest mb-4 block font-semibold ${categoryColour[posts[1].category] ?? 'text-edt-grey'}`}>
                  {posts[1].category}
                </span>
                <h2 className="text-white text-2xl font-semibold mb-4 leading-tight">
                  {posts[1].title}
                </h2>
                <p className="text-edt-grey leading-relaxed mb-8">{posts[1].excerpt}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-edt-grey text-sm">{posts[1].date}</span>
                  <span className="text-edt-grey/40">·</span>
                  <span className="text-edt-grey text-sm">{posts[1].readTime} read</span>
                </div>
                <Link
                  href={`/blog/${posts[1].slug}`}
                  className="text-edt-blue text-sm hover:underline"
                >
                  Read →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL POSTS GRID */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">All Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs uppercase tracking-widest font-semibold ${categoryColour[post.category] ?? 'text-edt-grey'}`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-edt-grey text-xs">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight mb-4 group-hover:text-edt-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-edt-grey text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <span className="text-edt-blue text-sm">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md font-display uppercase mb-6">
                Stay Ahead of Immersive Tech
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed">
                EDT publishes new insights on AR, VR, AI, and immersive experience design
                monthly. No spam. Just the ideas worth reading.
              </p>
            </div>
            <div>
              <form action="#" method="POST" className="flex gap-0">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-edt-black border border-white/20 text-white px-6 py-4 text-sm placeholder:text-edt-grey focus:outline-none focus:border-edt-blue"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-edt-grey text-xs mt-3">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Reading about immersive tech is one thing. Deploying it for your brand, event,
            or institution is another. Let's talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get in Touch
            </Link>
            <Link href="/work" className="btn-ghost border-white text-white">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
