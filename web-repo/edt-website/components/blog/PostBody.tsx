'use client'

import { useEffect, useRef } from 'react'
import type { PreparedPost } from '@/lib/blog'

// Renders an uploaded post inside a shadow root so its CSS and the site's CSS
// can't affect each other. The server sends a declarative shadow root
// (<template shadowrootmode>) so the content is in the initial HTML for SEO;
// on client-side navigation (where innerHTML doesn't parse declarative shadow
// roots) the effect attaches the shadow root instead.
export default function PostBody({ post }: { post: PreparedPost }) {
  const ref = useRef<HTMLDivElement>(null)
  const rendered = useRef<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.shadowRoot && rendered.current === null && el.shadowRoot.childNodes.length > 0) {
      rendered.current = post.html // already parsed from the server HTML
      return
    }
    if (rendered.current === post.html) return
    const root = el.shadowRoot ?? el.attachShadow({ mode: 'open' })
    root.innerHTML = post.html
    rendered.current = post.html
  }, [post.html])

  return (
    <>
      {post.fontHrefs.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
      {post.documentCss && (
        <style href={`blog-post-${post.documentCss.length}`} precedence="default">
          {post.documentCss}
        </style>
      )}
      <div
        ref={ref}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: `<template shadowrootmode="open">${post.html}</template>` }}
      />
    </>
  )
}
