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

// "my Deck Title!" -> "my-deck-title"
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}
