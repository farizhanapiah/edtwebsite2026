export const SITE_URL = 'https://weareedt.com';
export const SITE_NAME = 'EDT | Experiential Design Team';

export const DEFAULT_SEO = {
  title: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
  description:
    "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms, immersive activations and projection mapping for brands, events, tourism and government across Southeast Asia.",
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'EDT — Experiential Design Team',
      },
    ],
  },
  twitter: {
    handle: '@weareedt',
    site: '@weareedt',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'keywords', content: 'AR VR Malaysia, immersive experience Malaysia, AI avatar hologram, mixed reality events, XR studio Southeast Asia, projection mapping Malaysia, interactive installations KL' },
    { name: 'author', content: 'Experiential Design Team (EDT)' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
  ],
};

export const PAGE_SEO: Record<string, { title: string; description: string; path: string }> = {
  home: {
    title: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
    description: "Malaysia's leading immersive tech studio. AR, VR, MR, AI avatars, projection mapping and experiential activations.",
    path: '/',
  },
  about: {
    title: 'About EDT | Malaysia\'s Premier Experiential Technology Studio',
    description: 'Meet the team behind Malaysia\'s most immersive experiences. EDT (Adticles Sdn Bhd) has delivered 50+ projects across 12 countries for Petronas, AirAsia, Sunway and more.',
    path: '/about',
  },
  services: {
    title: 'Services | AR VR MR Development, AI Avatars & Immersive Events',
    description: 'Full-spectrum immersive technology services: AR/VR/MR development, AI holograms, virtual production, projection mapping and interactive installations.',
    path: '/services',
  },
  products: {
    title: 'Products | RiaReality, Hoomans.ai, MimpiLab, CheritAR & More',
    description: 'Six flagship immersive technology platforms built by EDT. From AI holographic avatars to mixed reality gaming to VR mental wellness.',
    path: '/products',
  },
  work: {
    title: 'Portfolio | EDT Immersive Experience Case Studies',
    description: 'Explore EDT\'s portfolio: 52,000+ AR impressions, 93% satisfaction rates, Guinness World Records, and experiential campaigns for Malaysia\'s biggest brands.',
    path: '/work',
  },
  partners: {
    title: 'Agency Partners | Strengthen Your Pitch with EDT\'s XR Capability',
    description: 'EDT is Malaysia\'s white-label XR and immersive tech partner. No hiring, no R&D risk. Pitch, deploy, and deliver unforgettable experiences for your clients.',
    path: '/partners',
  },
  contact: {
    title: 'Contact EDT | Get a Quote for AR VR & Immersive Experiences',
    description: 'Ready to build something unforgettable? Contact EDT to request a demo, get a quote, or discuss your next immersive project in Malaysia or Southeast Asia.',
    path: '/contact',
  },
};
