import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | EDT',
  description: 'EDT blog article — coming soon.',
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)

  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <Link href="/blog" className="text-edt-grey text-sm hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>
          <span className="edt-badge mb-6 inline-block">Article</span>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl break-all">
            {slug.replace(/-/g, ' ')}
          </h1>
          <p className="text-edt-grey text-lg max-w-xl">
            Full article coming soon.
          </p>
        </div>
      </section>

      {/* COMING SOON BODY */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="max-w-2xl">
            <div className="bg-edt-black border border-white/10 p-8 lg:p-12 mb-12">
              <div className="window-bar mb-6">
                <span className="window-dot"></span>
                <span className="window-dot"></span>
                <span className="window-dot"></span>
              </div>
              <div className="text-edt-grey text-sm font-mono mb-4">
                <span className="text-edt-blue">article</span>
                <span className="text-white/40">.</span>
                <span className="text-white">slug</span>
                <span className="text-white/40"> = </span>
                <span className="text-green-400">&quot;{slug}&quot;</span>
              </div>
              <div className="text-edt-grey text-sm font-mono">
                <span className="text-edt-blue">article</span>
                <span className="text-white/40">.</span>
                <span className="text-white">status</span>
                <span className="text-white/40"> = </span>
                <span className="text-yellow-400">&quot;coming_soon&quot;</span>
              </div>
            </div>

            <h2 className="display-md font-display uppercase text-white mb-6">
              This Article Is Coming Soon
            </h2>
            <p className="text-edt-grey text-lg leading-relaxed mb-4">
              EDT's editorial team is working on this article. Check back soon for the full
              piece, or browse other published articles on the blog.
            </p>
            <p className="text-edt-grey leading-relaxed mb-10">
              Article slug:{'  '}<span className="text-white font-mono bg-surface border border-white/10 px-2 py-1 text-sm">{slug}</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary">
                Back to Blog
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTED READING */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-10">More from EDT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'The Complete Guide to AR/VR Events in Malaysia (2026)',
                category: 'Guides',
                date: 'March 2026',
                slug: 'complete-guide-ar-vr-events-malaysia-2026',
              },
              {
                title: "What Is CheritAR? Malaysia's First AI-Powered Heritage AR Platform",
                category: 'Products',
                date: 'Jan 2026',
                slug: 'what-is-cheritar-ar-heritage-malaysia',
              },
              {
                title: '5 Questions to Ask Before Hiring an XR Agency in Malaysia',
                category: 'Guides',
                date: 'Dec 2025',
                slug: '5-questions-before-hiring-xr-agency-malaysia',
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-edt-blue text-xs uppercase tracking-widest font-semibold">
                    {post.category}
                  </span>
                  <span className="text-edt-grey text-xs">{post.date}</span>
                </div>
                <h3 className="text-white font-semibold leading-tight mb-4 group-hover:text-edt-blue transition-colors">
                  {post.title}
                </h3>
                <span className="text-edt-blue text-sm">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Build Your Next Immersive Experience
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            EDT delivers AR, VR, AI, and interactive installation projects across Malaysia
            and Southeast Asia. Let's talk about yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get in Touch
            </Link>
            <Link href="/work" className="btn-ghost border-white text-white">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
