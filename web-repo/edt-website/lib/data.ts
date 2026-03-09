export const CLIENTS = [
  'Petronas', 'AirAsia', 'Astro', 'Sunway', 'Malaysian Airlines',
  'Permodalan Nasional Berhad', 'MCMC', 'Sime Darby', 'New Balance',
  'Prudential', 'Sarawak Tourism Board', 'ECCO', 'Vans', 'CelcomDigi',
  'Petrosains', 'Think City',
];

export const STATS = [
  { number: '52,417', label: 'AR Impressions (ARFestKL)', suffix: '' },
  { number: '93', label: 'Client Satisfaction Rate', suffix: '%' },
  { number: '40', label: 'Efficiency Improvement (MetaHRise)', suffix: '%' },
  { number: '12', label: 'Countries Reached (CheritAR)', suffix: '+' },
  { number: '3.2', label: 'Media Value Generated (RM)', suffix: 'M' },
  { number: '50', label: 'Projects Delivered', suffix: '+' },
];

export const AWARDS = [
  { year: '2025', title: 'Management Initiative of the Year', body: 'Malaysia' },
  { year: '2024', title: 'Excellence Awards', body: 'Malaysia' },
  { year: '2024', title: 'Book of Records', body: 'Malaysia' },
];

export const SERVICES = [
  {
    id: 'ar-vr-mr-development',
    title: 'AR / VR / MR Development',
    tagline: 'Build experiences that transport people.',
    description:
      'From WebAR activations to full Quest 3 VR simulations, EDT develops cross-platform immersive experiences using Unity and Unreal Engine.',
    icon: '🥽',
    slug: '/services/ar-vr-mr-development',
    keywords: ['AR VR Malaysia', 'mixed reality development', 'XR studio KL'],
    tools: ['Unity', 'Unreal Engine', 'Meta Quest 3', '8th Wall', 'Onirix'],
  },
  {
    id: 'ai-avatars-holograms',
    title: 'AI Avatars & Holograms',
    tagline: 'Your brand, alive and intelligent.',
    description:
      'AI-powered holographic avatars with RAG knowledge bases, TTS voices, and 86" Stellarlink holographic displays. Real-time or pre-animated.',
    icon: '🤖',
    slug: '/services/ai-avatars-holograms',
    keywords: ['AI hologram Malaysia', 'AI avatar kiosk', 'Hoomans.ai'],
    tools: ['Hoomans.ai', 'StellarLink 86"', 'OpenAI', 'ElevenLabs TTS', 'Rokoko Motion Capture'],
  },
  {
    id: 'virtual-production',
    title: 'Virtual Production',
    tagline: 'No set. No limits. Pure story.',
    description:
      'ARVENA is EDT\'s virtual production platform — Unreal Engine environments synced with PTZ cameras for live streaming, branded content, and panel shows.',
    icon: '🎬',
    slug: '/services/virtual-production',
    keywords: ['virtual production Malaysia', 'Unreal Engine live broadcast', 'ARVENA'],
    tools: ['Unreal Engine', 'ARVENA Platform', 'Panasonic PTZ', 'TouchDesigner'],
  },
  {
    id: 'interactive-installations',
    title: 'Interactive Installations',
    tagline: 'Spaces that respond to people.',
    description:
      'Interactive LED walls, touch displays, interactive wishing wells, and immersive rooms that turn passive spaces into living brand experiences.',
    icon: '💡',
    slug: '/services/interactive-installations',
    keywords: ['interactive wall Malaysia', 'LED installation KL', 'immersive room hire'],
    tools: ['TouchDesigner', 'LED P2.0-P2.5', 'LiDAR', 'Touch Displays'],
  },
  {
    id: 'projection-mapping',
    title: 'Projection Mapping',
    tagline: 'Any surface becomes a canvas.',
    description:
      'Architectural projection mapping from award-winning international festivals to corporate brand launches. Epson 7K-10K ANSI projectors, real-time content.',
    icon: '📽️',
    slug: '/services/projection-mapping',
    keywords: ['projection mapping Malaysia', 'projection art', 'building mapping KL'],
    tools: ['Epson 7K-10K ANSI', 'TouchDesigner', 'Real-time rendering'],
  },
  {
    id: 'immersive-events',
    title: 'Full Immersive Events',
    tagline: 'Pitch. Deploy. Unforgettable.',
    description:
      'End-to-end immersive event production: concept, build, deploy, post-event. White-label friendly. Anywhere, any scale, any brand.',
    icon: '🎪',
    slug: '/services/immersive-events',
    keywords: ['immersive event Malaysia', 'brand activation XR', 'experiential marketing KL'],
    tools: ['Full EDT stack', 'EcoFlow Delta systems', 'BambuLab 3D printers'],
  },
];

export const PRODUCTS = [
  {
    id: 'riaReality',
    name: 'RiaReality',
    tagline: 'The MR platform for physical spaces.',
    description:
      'A one-hand-onboarding Mixed Reality platform featuring multiplayer games, educational modules, real estate visualization, and heritage tours. Deployable at malls, events, and exhibitions.',
    slug: '/products/riaReality',
    badge: 'Platform',
    useCases: ['Entertainment & Events', 'Education & Training', 'Sales Visualization', 'Heritage & Tourism'],
    highlights: ['Games: Durian Dash, Spooky Smash, Skyscrapers, Milky Way', 'Multiplayer XR interactions', 'Physical space spatial tracking', 'No app download needed'],
  },
  {
    id: 'hoomans-ai',
    name: 'Hoomans.ai',
    tagline: 'AI avatars that know your business.',
    description:
      'Web-based AI holographic avatars with RAG knowledge base, TTS voice synthesis, and client dashboards. Deployed on 86" Stellarlink holographic displays for customer service, education, and brand activation.',
    slug: '/products/hoomans-ai',
    badge: 'AI Product',
    useCases: ['Customer service AI', 'Brand ambassador', 'Museum guide', 'Event host'],
    highlights: ['Real-time AI responses', '86" Stellarlink holographic display', 'Custom knowledge base (RAG)', 'ElevenLabs TTS voice'],
  },
  {
    id: 'mimpilab',
    name: 'MimpiLab',
    tagline: '100% controllable AI photos, on theme.',
    description:
      'AI-powered real-time photo experience. Guests step into fully themed branded environments generated by AI — branded, on-theme, shareable in seconds. Used at corporate events, malls, conferences, and festivals.',
    slug: '/products/mimpilab',
    badge: 'AI Product',
    useCases: ['Corporate events', 'Shopping malls', 'Conferences', 'Brand activations'],
    highlights: ['Real-time AI photo generation', '100% theme-controllable', 'Instant brand match', 'High shareability = organic reach'],
  },
  {
    id: 'cheritar',
    name: 'CheritAR',
    tagline: 'Buildings that speak. History that lives.',
    description:
      'AI-powered AR avatars that tell the story of historical landmarks and places of interest. Developed with Think City. Users scan a location to engage in real-time conversations with virtual avatars of iconic buildings.',
    slug: '/products/cheritar',
    badge: 'AR Heritage',
    useCases: ['Heritage tourism', 'Cultural sites', 'Museum engagement', 'City placemaking'],
    highlights: ['12+ countries\' tourist reach', '1,442 AR impressions in 3 months', '3 landmark locations', 'AI-powered real-time conversation'],
  },
  {
    id: 'wayangmind',
    name: 'WayangMind',
    tagline: 'Mindfulness that meets you where you are.',
    description:
      'VR mental wellness platform with AI-personalized guided sessions, pre-assessment pipelines, and audio-driven VR scene triggering. Culturally relevant to Malaysian and SEA youth.',
    slug: '/products/wayangmind',
    badge: 'Wellness',
    useCases: ['Corporate wellness', 'Healthcare', 'Youth mental health', 'VR therapy'],
    highlights: ['AI-personalized sessions', 'Pre-assessment pipeline', 'Localized cultural content', 'App + VR + immersive space'],
  },
  {
    id: 'arvena',
    name: 'ARVENA',
    tagline: 'Virtual production without the studio.',
    description:
      'A virtual production platform that replaces physical sets with Unreal Engine environments. Ideal for panel talks, live streams, music videos, and branded content. Used for AirAsia Supersale and Mobile Legends SupremaSEA.',
    slug: '/products/arvena',
    badge: 'Production',
    useCases: ['Live streaming', 'Branded content', 'Music videos', 'Panel shows'],
    highlights: ['No physical set needed', 'Panasonic PTZ + Unreal Engine sync', 'Live call integration', 'Minimal footprint, maximum impact'],
  },
];

export const CASE_STUDIES = [
  {
    id: 'metahrise',
    client: 'MCMC',
    project: 'MetaHRise',
    category: 'VR Training',
    slug: '/work/metahrise',
    headline: 'VR onboarding that set a Malaysian record.',
    summary:
      'EDT developed MetaHRise for MCMC — a multiplayer VR onboarding game that familiarizes new recruits with brand, culture, and roles. 145 employees onboarded, 93% satisfaction, 40% efficiency gain.',
    stats: [
      { label: 'Employee Satisfaction', value: '93%' },
      { label: 'Efficiency Gain', value: '40%' },
      { label: 'Employees Onboarded', value: '145' },
      { label: 'Role Comprehension', value: '83%' },
    ],
    awards: ['Management Initiative of the Year 2025', 'Malaysia Book of Records 2024'],
    tech: ['Virtual Reality', 'Multiplayer VR', 'Unity'],
    image: '/images/metahrise.jpg',
  },
  {
    id: 'cheritar-think-city',
    client: 'Think City',
    project: 'CheritAR',
    category: 'AR Heritage',
    slug: '/work/cheritar-think-city',
    headline: 'KL\'s historical buildings, given a voice.',
    summary:
      'CheritAR brings Kuala Lumpur\'s historical landmarks to life via AI-powered AR avatars. Tourists from 12+ countries engaged with the Sultan Abdul Samad Building, Victoria Fountain, and National Textile Museum.',
    stats: [
      { label: 'AR Impressions', value: '1,442' },
      { label: 'Countries Reached', value: '12+' },
      { label: 'Locations', value: '3' },
      { label: 'Duration', value: '3 months' },
    ],
    awards: [],
    tech: ['Augmented Reality', 'AI Avatars', 'WebAR'],
    image: '/images/cheritar.jpg',
  },
  {
    id: 'arfestkl',
    client: 'ARFestKL',
    project: 'ARFest Kuala Lumpur',
    category: 'AR Event',
    slug: '/work/arfestkl',
    headline: 'Downtown KL as a 30-point AR playground.',
    summary:
      'EDT transformed Downtown KL into an interactive digital playground with 30+ AR activations across 10 locations. Living murals, monumental digital sculptures, and AI-powered historical narratives.',
    stats: [
      { label: 'AR Impressions', value: '52,417' },
      { label: 'QR Code Scans', value: '12,040' },
      { label: 'AR Artists', value: '42' },
      { label: 'AR Artworks', value: '35' },
    ],
    awards: [],
    tech: ['Augmented Reality', 'WebAR', 'AI Narrative'],
    image: '/images/arfestkl.jpg',
  },
  {
    id: 'ikat',
    client: 'Immersive Knowledge And Textile',
    project: 'IKAT Malaysia',
    category: 'Immersive Exhibition',
    slug: '/work/ikat',
    headline: 'Textile heritage that generates RM 3.2M media value.',
    summary:
      'IKAT blends traditional Malaysian textile heritage with VR, AR, and immersive exhibitions. 3 cities, 5,822 visitors, and RM 3.2 million in earned media value across 12 programmes.',
    stats: [
      { label: 'Total Visitors', value: '5,822' },
      { label: 'Media Value', value: 'RM 3.2M' },
      { label: 'Artisans', value: '12' },
      { label: 'Social Reach', value: '382,720' },
    ],
    awards: [],
    tech: ['VR', 'AR', 'Projection Mapping', 'Immersive Installations'],
    image: '/images/ikat.jpg',
  },
];

export const INDUSTRIES = [
  {
    id: 'corporate-events',
    title: 'Corporate & Brand Events',
    slug: '/industries/corporate-events',
    description: 'Immersive brand activations, product launches, and event experiences that generate PR value and genuine audience engagement.',
    icon: '🏢',
    clients: ['AirAsia', 'New Balance', 'Astro', 'Sunway', 'Safi Shayla'],
  },
  {
    id: 'tourism-heritage',
    title: 'Tourism & Heritage',
    slug: '/industries/tourism-heritage',
    description: 'AR/VR experiences that bring historical sites, cultural landmarks, and tourism attractions to life.',
    icon: '🏛️',
    clients: ['Sarawak Tourism Board', 'Think City', 'Muzium Kraftangan', 'IKAT Malaysia'],
  },
  {
    id: 'education',
    title: 'Education & Training',
    slug: '/industries/education',
    description: 'VR training simulations and MR educational modules that improve comprehension, safety, and knowledge retention.',
    icon: '🎓',
    clients: ['MCMC', 'Sime Darby', 'Tokyo Fire Department', 'Universities'],
  },
  {
    id: 'retail-malls',
    title: 'Retail & Malls',
    slug: '/industries/retail-malls',
    description: 'Interactive installations and AI photobooths that increase dwell time, engagement, and social sharing for retail spaces.',
    icon: '🛍️',
    clients: ['Sunway Mall', 'GMBB'],
  },
  {
    id: 'government',
    title: 'Government & GovTech',
    slug: '/industries/government',
    description: 'Digital transformation, public engagement, and interactive experiences aligned with Malaysia\'s national digital agenda.',
    icon: '🏛️',
    clients: ['MCMC', 'MDEC', 'Permodalan Nasional Berhad'],
  },
  {
    id: 'healthcare-wellness',
    title: 'Healthcare & Wellness',
    slug: '/industries/healthcare-wellness',
    description: 'VR therapy environments, wellness platforms, and EEG-powered experiences that advance mental health and well-being.',
    icon: '💚',
    clients: ['WayangMind', 'Prudential SG'],
  },
];

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
];

export const BLOG_POSTS = [
  {
    slug: 'complete-guide-ar-vr-events-malaysia-2026',
    title: 'The Complete Guide to AR/VR Events in Malaysia (2026)',
    excerpt: 'Everything you need to know about creating immersive AR and VR experiences for corporate events and brand activations in Malaysia.',
    date: '2026-03-01',
    readTime: '8 min read',
    category: 'Guides',
    tags: ['AR VR Malaysia', 'events', 'immersive tech'],
    seoTarget: 'best AR VR company Malaysia',
    funnel: 'TOFU',
  },
  {
    slug: 'mcmc-metahrise-vr-onboarding-case-study',
    title: 'How EDT Used Mixed Reality to Improve MCMC Onboarding by 40%',
    excerpt: 'Behind the scenes of MetaHRise — Malaysia\'s award-winning VR onboarding program that set a national record.',
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Case Studies',
    tags: ['VR training', 'corporate', 'MCMC'],
    seoTarget: 'VR onboarding corporate Malaysia',
    funnel: 'MOFU',
  },
  {
    slug: 'ai-holograms-vs-traditional-booths-engagement',
    title: 'AI Holograms vs Traditional Booths: Which Drives More Engagement?',
    excerpt: 'A data-driven comparison of AI holographic displays vs traditional event booths, with real metrics from EDT deployments.',
    date: '2026-02-01',
    readTime: '5 min read',
    category: 'Insights',
    tags: ['AI hologram', 'events', 'engagement'],
    seoTarget: 'AI hologram kiosk Malaysia',
    funnel: 'MOFU',
  },
  {
    slug: 'what-is-cheritar-ar-heritage-malaysia',
    title: 'What Is CheritAR? Malaysia\'s First AI-Powered Heritage AR Platform',
    excerpt: 'How CheritAR is giving historical landmarks a voice — and reaching tourists from 12+ countries in the process.',
    date: '2026-01-20',
    readTime: '4 min read',
    category: 'Products',
    tags: ['CheritAR', 'AR heritage', 'tourism'],
    seoTarget: 'AR heritage tourism Malaysia',
    funnel: 'MOFU',
  },
  {
    slug: 'virtual-production-malaysia-arvena-live-events',
    title: 'Virtual Production in Malaysia: How ARVENA Is Changing Live Events',
    excerpt: 'ARVENA eliminates the need for physical sets with Unreal Engine virtual environments. Here\'s how it works.',
    date: '2026-01-10',
    readTime: '5 min read',
    category: 'Products',
    tags: ['virtual production', 'ARVENA', 'Unreal Engine'],
    seoTarget: 'virtual production Malaysia',
    funnel: 'MOFU',
  },
  {
    slug: '5-questions-before-hiring-xr-agency-malaysia',
    title: '5 Questions to Ask Before Hiring an XR Agency in Malaysia',
    excerpt: 'Before you sign with an XR studio, ask these five questions to protect your investment and guarantee results.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Guides',
    tags: ['XR agency', 'hiring', 'Malaysia'],
    seoTarget: 'how to choose XR agency Malaysia',
    funnel: 'BOFU',
  },
];
