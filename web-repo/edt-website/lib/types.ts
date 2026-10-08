export type Deck = {
  id: string
  slug: string
  title: string
  client_name: string | null
  file_path: string
  created_at: string
}

export type ApplicantType = 'intern' | 'full-time'

export type Application = {
  id: string
  applicant_type: ApplicantType
  full_name: string
  email: string
  phone: string | null
  role_interest: string | null
  profile: string | null
  portfolio_url: string
  linkedin_url: string | null
  cv_path: string | null
  source: string | null
  notes: string | null
  availability: string | null
  created_at: string
}

export const BLOG_CATEGORIES = ['Guides', 'Case Studies', 'Products', 'Insights'] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

// Accent colour per category, matching the streams on the blog page.
export const BLOG_CATEGORY_COLOURS: Record<BlogCategory, string> = {
  Guides: 'text-edt-blue',
  'Case Studies': 'text-green-400',
  Products: 'text-purple-400',
  Insights: 'text-pink-400',
}

export type BlogStatus = 'draft' | 'published'

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string | null
  category: BlogCategory
  status: BlogStatus
  published_at: string
  file_path: string
  cover_path: string | null
  og_image_path: string | null
  seo_title: string | null
  seo_description: string | null
  canonical_path: string | null // e.g. /work/metahrise — set when the post copies an existing page
  read_minutes: number | null
  created_at: string
  updated_at: string
}

// Draft → not public. Published with a future date → scheduled. Otherwise live.
export function blogPostState(post: Pick<BlogPost, 'status' | 'published_at'>) {
  if (post.status === 'draft') return 'draft' as const
  return new Date(post.published_at) > new Date() ? ('scheduled' as const) : ('live' as const)
}

// "my Deck Title!" -> "my-deck-title"
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}
