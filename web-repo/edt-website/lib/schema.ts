export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Experiential Design Team',
  alternateName: 'EDT',
  legalName: 'Adticles Sdn Bhd',
  url: 'https://weareedt.com',
  logo: 'https://weareedt.com/images/edt-logo.png',
  description:
    "Malaysia's leading creative technology studio specializing in AR, VR, MR, AI avatars, projection mapping, and immersive digital experiences.",
  foundingLocation: { '@type': 'Place', name: 'Kuala Lumpur, Malaysia' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-3-13 Centrio Pantai Hillpark, Jalan Pantai Murni',
    addressLocality: 'Kuala Lumpur',
    postalCode: '59200',
    addressCountry: 'MY',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+60364115361',
    contactType: 'sales',
    areaServed: ['MY', 'SG', 'QA', 'AE', 'HK'],
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/weareedt/',
    'https://www.linkedin.com/company/31284467/',
    'https://www.youtube.com/@weareEDT',
  ],
  areaServed: ['Malaysia', 'Singapore', 'Qatar', 'Hong Kong', 'Southeast Asia'],
  knowsAbout: [
    'Augmented Reality',
    'Virtual Reality',
    'Mixed Reality',
    'AI Avatars',
    'Holographic Displays',
    'Projection Mapping',
    'Interactive Installations',
    'Virtual Production',
    'Experiential Marketing',
    'Immersive Events',
  ],
  award: [
    'Malaysia Management Initiative of the Year 2025',
    'Malaysia Excellence Awards 2024',
    'Malaysia Book of Records 2024',
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Experiential Design Team (EDT)',
  image: 'https://weareedt.com/images/edt-office.jpg',
  url: 'https://weareedt.com',
  telephone: '+60364115361',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-3-13 Centrio Pantai Hillpark, Jalan Pantai Murni',
    addressLocality: 'Kuala Lumpur',
    postalCode: '59200',
    addressCountry: 'MY',
  },
  priceRange: '$$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://weareedt.com${item.url}`,
  })),
});
