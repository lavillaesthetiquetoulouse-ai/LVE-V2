import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lavillaesthetique-toulouse.com'
  const now = new Date()

  // Pages principales du site avec priorités optimisées
  const mainRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/actes', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/docteur-laser', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/la-villa-esthetique', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/a-propos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/on-parle-de-nous', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const }
  ]

  // Pages de soins individuelles (toutes les pages de traitements)
  const treatmentRoutes = [
    // Injections
    { url: '/actes/injections-anti-age', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/actes/injection-radiesse', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/actes/injection-acide-hyaluronique', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/actes/injection-polynucleotides', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/injection-exosomes', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/injection-sculptra', priority: 0.9, changeFrequency: 'weekly' as const },
    // Technologies avancées
    { url: '/actes/morpheus-8', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/actes/hifu-focus-dual', priority: 0.9, changeFrequency: 'weekly' as const },
    // Lasers et lumière
    { url: '/actes/detatouage', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/actes/epilation-clarity-2', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/actes/epilation-apilus', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/actes/lumiere-pulsee-lumecca', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/laser-co2-deka', priority: 0.8, changeFrequency: 'weekly' as const },
    // Soins visage et corps
    { url: '/actes/hydrafacial', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/peelings-medicaux', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/cryolipolyse', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/actes/cristal-fit', priority: 0.8, changeFrequency: 'weekly' as const },
    // Diagnostic
    { url: '/actes/echographie', priority: 0.6, changeFrequency: 'monthly' as const }
  ]

  // Pages légales et de service
  const legalRoutes = [
    { url: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/politique-de-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cgv', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/accessibilite', priority: 0.3, changeFrequency: 'yearly' as const }
  ]

  // Génération du sitemap avec métadonnées détaillées
  const staticPages = mainRoutes.map((route) => ({
    url: `${baseUrl}${route.url}/`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const treatmentPages = treatmentRoutes.map((route) => ({
    url: `${baseUrl}${route.url}/`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const legalPages = legalRoutes.map((route) => ({
    url: `${baseUrl}${route.url}/`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [
    ...staticPages,
    ...treatmentPages,
    ...legalPages
  ]
}