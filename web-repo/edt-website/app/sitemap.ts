import type { MetadataRoute } from 'next'

const SITE_URL = 'https://weareedt.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },

    // Top-level
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/partners', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/careers', priority: 0.7, changeFrequency: 'monthly' },

    // Case studies
    { path: '/work/metahrise', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/arfestkl', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/ikat', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/airasia-founders-gallery', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/cheritar-think-city', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/new-balance-grey-day', priority: 0.8, changeFrequency: 'monthly' },

    // Services
    { path: '/services/ar-vr-mr-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/ai-avatars-holograms', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/virtual-production', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/interactive-installations', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/projection-mapping', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/immersive-events', priority: 0.7, changeFrequency: 'monthly' },

    // Products
    { path: '/products/riaReality', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/hoomans-ai', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/mimpilab', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/cheritar', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/wayangmind', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/arvena', priority: 0.7, changeFrequency: 'monthly' },

    // Industries
    { path: '/industries/corporate-events', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/industries/education', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/industries/government', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/industries/healthcare-wellness', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/industries/retail-malls', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/industries/tourism-heritage', priority: 0.6, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
