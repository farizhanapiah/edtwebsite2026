import { createSupabaseAdminClient, BLOG_BUCKET, BLOG_TABLE } from '@/lib/supabase/admin'
import type { BlogPost } from '@/lib/types'

// Server-only helpers for the public blog. Posts are HTML files built in
// Claude and uploaded from /admin/blog; metadata lives in the blog_posts table.

const LIST_COLUMNS =
  'id, slug, title, excerpt, category, status, published_at, file_path, cover_path, og_image_path, seo_title, seo_description, canonical_path, read_minutes, created_at, updated_at'

// Public URL for an object in the (public) blog bucket.
export function blogFileUrl(path: string | null): string | null {
  if (!path) return null
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  return `${base}/storage/v1/object/public/${BLOG_BUCKET}/${path}`
}

// Live posts only: published and not scheduled for the future.
export async function getLivePosts(limit?: number): Promise<BlogPost[]> {
  const admin = createSupabaseAdminClient()
  let query = admin
    .from(BLOG_TABLE)
    .select(LIST_COLUMNS)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false })
  if (limit) query = query.limit(limit)
  const { data } = await query
  return (data ?? []) as BlogPost[]
}

export async function getLivePostBySlug(slug: string): Promise<BlogPost | null> {
  const admin = createSupabaseAdminClient()
  const { data } = await admin
    .from(BLOG_TABLE)
    .select(LIST_COLUMNS)
    .eq('slug', slug)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .maybeSingle()
  return (data as BlogPost | null) ?? null
}

export async function getPostHtml(post: Pick<BlogPost, 'file_path'>): Promise<string | null> {
  const admin = createSupabaseAdminClient()
  const { data, error } = await admin.storage.from(BLOG_BUCKET).download(post.file_path)
  if (error || !data) return null
  return data.text()
}

export type PreparedPost = {
  // Goes inside the post's shadow root (isolated from site CSS).
  html: string
  // Font stylesheets, @font-face and @property rules must live at document
  // level — browsers ignore them inside a shadow root (Tailwind v4 relies on
  // @property, so without this its transforms/shadows/gradients break).
  fontHrefs: string[]
  documentCss: string
}

// Turn a full standalone HTML page into something that can sit inside the
// site's nav/footer: keep its <style>/<link> CSS, take the <body> content,
// drop scripts, and retarget html/body/:root selectors at the wrapper.
export function prepareBlogHtml(raw: string): PreparedPost {
  const head = raw.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? ''
  const bodyTag = raw.match(/<body([^>]*)>([\s\S]*?)<\/body>/i)
  let body = bodyTag
    ? bodyTag[2]
    : raw
        .replace(/<head[^>]*>[\s\S]*?<\/head>/i, '')
        .replace(/<!doctype[^>]*>|<\/?html[^>]*>|<\/?body[^>]*>/gi, '')

  body = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi, (_m, attrs, css) => `<style${attrs}>${scopeCss(css)}</style>`)

  const styles = [...head.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1])
  const links = [...head.matchAll(/<link\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((tag) => /rel=["']?stylesheet/i.test(tag))

  const fontHrefs = new Set<string>()
  const documentRules: string[] = []
  const linkTags: string[] = []
  for (const tag of links) {
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1]
    if (!href) continue
    if (/fonts\.googleapis\.com|use\.typekit\.net|fonts\.bunny\.net/i.test(href)) fontHrefs.add(href)
    linkTags.push(`<link rel="stylesheet" href="${href}">`)
  }
  const css = styles
    .map((block) =>
      block
        .replace(/@import\s+url\(\s*["']?([^"')]+)["']?\s*\)[^;]*;|@import\s+["']([^"']+)["'][^;]*;/gi, (m, a, b) => {
          const href = a || b
          if (/fonts\.googleapis\.com|use\.typekit\.net|fonts\.bunny\.net/i.test(href)) fontHrefs.add(href)
          return m
        })
        .replace(/@(font-face|property)\b[^{]*\{[^}]*\}/gi, (m) => {
          documentRules.push(m)
          return m
        })
    )
    .map(scopeCss)
    .join('\n')

  // Carry the original <body> attributes (class, style, data-theme…) onto the wrapper.
  const bodyAttrs = bodyTag?.[1] ?? ''
  const wrapperAttrs = /class=["']/i.test(bodyAttrs)
    ? bodyAttrs.replace(/class=(["'])/i, 'class=$1edt-post ')
    : `${bodyAttrs} class="edt-post"`

  // contain: layout paint → position:fixed / full-viewport layouts are pinned
  // and clipped to the article box, so they can never cover the site chrome.
  const base =
    ':host{display:block;}.edt-post{display:block;min-height:100%;position:relative;contain:layout paint;}'
  const html = `${linkTags.join('')}<style>${base}\n${css}</style><div${wrapperAttrs}>${body}</div>`

  return { html, fontHrefs: [...fontHrefs], documentCss: documentRules.join('\n') }
}

// html/body/:root selectors don't match inside a shadow root — point them at
// the host / wrapper instead.
function scopeCss(css: string): string {
  return css
    .replace(/:root\b/g, ':host')
    .replace(/(^|[\s,}>+~(])(html|body)(?=[\s,{.:#[>+~)])/g, '$1.edt-post')
    .replace(/\.edt-post\s*>?\s*\.edt-post/g, '.edt-post') // "html body" → one wrapper
}

// ~220 words per minute, based on visible text.
export function estimateReadMinutes(raw: string): number {
  const body = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? raw
  const text = body
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}
