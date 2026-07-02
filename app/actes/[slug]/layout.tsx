import { Metadata } from 'next';

interface FAQItem { question: string; answer: string; }

// Données des traitements pour générer les métadonnées
const soinsMetadata: Record<string, { title: string; description: string; reviewCount: number; procedureName: string; faq?: FAQItem[] }> = {
  // injection-botox-toxine-botulique : metadata et JSON-LD gérés directement
  // dans app/actes/injection-botox-toxine-botulique/page.tsx (version enrichie
  // avec Offer, GeoCoordinates, hasCredential, FAQPage 6 questions, BreadcrumbList).
  // Ne pas remettre cette entrée ici pour eviter le JSON-LD duplique.
  'injections-anti-age': {
    title: 'Injections Anti-Âge Toulouse | Botox & Acide Hyaluronique | Dr Baron',
    description: 'Injections anti-âge à Toulouse : botox, acide hyaluronique, Radiesse, polynucléotides. Dr Baron, médecin esthétique. Résultats naturels garantis. ⭐ 4.6/5 · Lardenne · RDV en 48h.',
    procedureName: 'Injections Anti-Âge',
    reviewCount: 67
  },
  // injection-levres : metadata et JSON-LD gérés directement dans
  // app/actes/injection-levres/page.tsx (version enrichie avec Offer,
  // GeoCoordinates, hasCredential, FAQPage 6 questions, BreadcrumbList).
  // Ne pas remettre cette entrée ici pour eviter le JSON-LD duplique.
  'injection-radiesse': {
    title: 'Injection Radiesse Toulouse | Collagène Naturel Durable | Dr Baron',
    description: 'Injection Radiesse à Toulouse par médecin esthétique. Résultats naturels 12-18 mois. Rides, volumes, mains. ⭐ 4.6/5 · Lardenne · RDV Doctolib 24h/24 · Blagnac, Colomiers.',
    procedureName: 'Injection Radiesse',
    reviewCount: 29
  },
  'injection-acide-hyaluronique': {
    title: 'Injection Acide Hyaluronique Toulouse | Médecin | Prix & RDV',
    description: 'Injection acide hyaluronique à Toulouse par le Dr Baron, médecin esthétique. Lèvres, rides, cernes. Résultats immédiats. À partir de 250€ · ⭐ 4.6/5 · RDV Doctolib en 48h.',
    procedureName: 'Injection Acide Hyaluronique',
    reviewCount: 61,
    faq: [
      { question: 'Quel est le prix d\'une injection d\'acide hyaluronique à Toulouse ?', answer: 'Le tarif d\'une injection d\'acide hyaluronique à La Villa Esthétique varie entre 250€ et 600€ selon la zone (lèvres, cernes, rides, volumes). Une consultation est incluse.' },
      { question: 'Combien de temps dure l\'acide hyaluronique ?', answer: 'L\'acide hyaluronique dure entre 9 et 18 mois selon la zone traitée et le produit utilisé. Les lèvres se résorbent en 9-12 mois, les pommettes en 12-18 mois.' },
      { question: 'Quelle est la différence entre botox et acide hyaluronique ?', answer: 'Le botox détend les muscles responsables des rides d\'expression. L\'acide hyaluronique comble les rides et restaure les volumes. Ces deux traitements sont souvent complémentaires.' },
      { question: 'L\'injection d\'acide hyaluronique est-elle réversible ?', answer: 'Oui, l\'acide hyaluronique est entièrement réversible grâce à la hyaluronidase, une enzyme qui dissout le produit en quelques heures si nécessaire.' },
      { question: 'Combien de temps dure une séance d\'injection à Toulouse ?', answer: 'Une séance d\'injection d\'acide hyaluronique dure entre 30 et 45 minutes, consultation incluse. Les résultats sont visibles immédiatement.' }
    ]
  },
  'injection-polynucleotides': {
    title: 'Injection Polynucléotides Toulouse | Régénération Peau | Dr Baron',
    description: 'Polynucléotides à Toulouse par médecin laseriste. Régénération cellulaire, cernes, qualité peau. Résultats visibles en 3 semaines. ⭐ 4.6/5 · Lardenne · RDV en ligne 24h/24.',
    procedureName: 'Injection Polynucléotides',
    reviewCount: 22
  },
  'injection-exosomes': {
    title: 'Injection Exosomes Toulouse | Rajeunissement Cellulaire | Dr Baron',
    description: 'Exosomes à Toulouse – thérapie régénérative de pointe par le Dr Baron. Fermeté, éclat, anti-âge profond. Résultats en 2-3 semaines. ⭐ 4.6/5 · Lardenne · RDV Doctolib.',
    procedureName: 'Injection Exosomes',
    reviewCount: 18
  },
  'injection-sculptra': {
    title: 'Sculptra Toulouse | Lifting Naturel Sans Chirurgie | Dr Baron',
    description: 'Sculptra à Toulouse par médecin esthétique. Stimulation naturelle du collagène, résultats jusqu\'à 2 ans. Visage & corps. ⭐ 4.6/5 · Lardenne · RDV disponible cette semaine.',
    procedureName: 'Sculptra – Stimulateur de Collagène',
    reviewCount: 31
  },
  'morpheus-8': {
    title: 'Morpheus 8 Toulouse | Lifting Médical Radiofréquence | Dr Baron',
    description: 'Morpheus 8 Toulouse – microneedling RF par médecin. Raffermissement visage, ventre, cuisses. Sans chirurgie, sans éviction. Résultats 3-6 mois. ⭐ 4.6/5 · RDV Doctolib 24h/24.',
    procedureName: 'Morpheus 8 – Microneedling Radiofréquence',
    reviewCount: 47,
    faq: [
      { question: 'Qu\'est-ce que le Morpheus 8 ?', answer: 'Le Morpheus 8 est un appareil de microneedling combiné à la radiofréquence (RF) de la marque InMode. Il stimule la production de collagène en profondeur pour raffermir la peau du visage et du corps sans chirurgie.' },
      { question: 'Combien coûte une séance de Morpheus 8 à Toulouse ?', answer: 'Le tarif d\'une séance de Morpheus 8 à La Villa Esthétique démarre à partir de 600€. Le prix varie selon la zone traitée. Des forfaits de 3 séances sont proposés.' },
      { question: 'Combien de séances de Morpheus 8 sont nécessaires ?', answer: '1 à 3 séances sont recommandées selon la zone et l\'intensité des résultats souhaités, espacées de 4 à 6 semaines. Les résultats s\'améliorent progressivement sur 3 à 6 mois.' },
      { question: 'Le Morpheus 8 est-il douloureux ?', answer: 'La séance est réalisée sous crème anesthésiante appliquée 45 minutes avant. L\'inconfort est modéré et bien toléré. Des rougeurs légères persistent 24 à 48h après.' },
      { question: 'Quelles zones peut-on traiter avec le Morpheus 8 ?', answer: 'Le Morpheus 8 traite le visage (ovale, cou, bajoues), mais aussi le ventre, les cuisses, les bras, la poitrine et les genoux pour les relâchements cutanés corporels.' }
    ]
  },
  'hifu-focus-dual': {
    title: 'HIFU Toulouse | Lifting Visage Sans Chirurgie | Dr Baron',
    description: 'HIFU Focus Dual à Toulouse – lifting médical par ultrasons focalisés. Ovale, bajoues, cou. 1 séance = résultats 12-18 mois. ⭐ 4.6/5 · Lardenne · Sans éviction sociale.',
    procedureName: 'HIFU Focus Dual – Lifting Ultrasons',
    reviewCount: 34
  },
  'detatouage': {
    title: 'Détatouage Laser Toulouse | Médecin Laseriste | Tarif & RDV',
    description: 'Détatouage laser à Toulouse par médecin laseriste. Toutes couleurs, tous tatouages. 5 à 12 séances. Prix selon taille. ⭐ 4.6/5 · Lardenne · Blagnac · RDV Doctolib 24h/24.',
    procedureName: 'Détatouage Laser',
    reviewCount: 41
  },
  'hydrafacial': {
    title: 'HydraFacial Toulouse | Soin Visage Médical | Prix & RDV',
    description: 'HydraFacial à Toulouse – nettoyage, exfoliation, hydratation en 1 séance. Résultats immédiats, peau éclatante. À partir de 150€ · ⭐ 4.6/5 · RDV Doctolib disponible.',
    procedureName: 'HydraFacial',
    reviewCount: 52
  },
  'cryolipolyse': {
    title: 'Cryolipolyse Toulouse | Éliminer les Bourrelets | Dr Baron',
    description: 'Cryolipolyse à Toulouse par médecin esthétique. Ventre, hanches, cuisses, double menton. -20 à 25% de graisse par séance. ⭐ 4.6/5 · Lardenne · RDV en ligne 24h/24.',
    procedureName: 'Cryolipolyse',
    reviewCount: 44
  },
  'cristal-fit': {
    title: 'Cristal Fit Toulouse | Tonification Musculaire Médicale | Dr Baron',
    description: 'Cristal Fit à Toulouse – 20 000 contractions musculaires par séance. Abdomen, fessiers, bras. Résultats sans effort physique. ⭐ 4.6/5 · Lardenne · RDV Doctolib disponible.',
    procedureName: 'Cristal Fit – Électrostimulation Musculaire',
    reviewCount: 26
  },
  'epilation-clarity-2': {
    title: 'Épilation Laser Toulouse Pas Cher | Médecin Laseriste | Clarity 2',
    description: 'Épilation laser définitive à Toulouse par médecin laseriste. Laser Clarity 2, tous phototypes. 90-95% d\'efficacité. Femme & homme. À partir de 80€ · ⭐ 4.6/5 · RDV 48h.',
    procedureName: 'Épilation Laser Clarity 2',
    reviewCount: 78,
    faq: [
      { question: 'Combien coûte une épilation laser à Toulouse ?', answer: 'Les tarifs d\'épilation laser à La Villa Esthétique démarrent à partir de 80€ par zone. Le prix varie selon la zone traitée et le nombre de séances. Des forfaits sont disponibles.' },
      { question: 'Combien de séances d\'épilation laser faut-il ?', answer: 'En moyenne, 6 à 8 séances sont nécessaires pour obtenir un résultat définitif à 90-95%. Les séances sont espacées de 4 à 8 semaines selon la zone.' },
      { question: 'L\'épilation laser Clarity 2 fonctionne-t-elle sur tous les phototypes ?', answer: 'Oui, le laser Clarity 2 est efficace sur tous les phototypes, y compris les peaux mates et foncées, grâce à sa double longueur d\'onde (Alexandrite 755nm et Nd:YAG 1064nm).' },
      { question: 'Est-ce que l\'épilation laser est efficace sur les poils blancs ou roux ?', answer: 'Non, l\'épilation laser n\'est pas efficace sur les poils blancs, gris ou roux car ces poils manquent de mélanine. Dans ce cas, l\'épilation électrique APILUS est recommandée.' },
      { question: 'Peut-on faire une épilation laser en été ?', answer: 'Il est conseillé d\'éviter les expositions solaires avant et après chaque séance. Au cabinet, nous pouvons traiter toute l\'année avec les protections adaptées.' }
    ]
  },
  'epilation-apilus': {
    title: 'Épilation Définitive Électrique Toulouse | APILUS | Dr Baron',
    description: 'Épilation électrique APILUS à Toulouse – poils blonds, blancs, roux, fins. Résultats définitifs 100%. Zones sensibles, visage. ⭐ 4.6/5 · Lardenne · RDV Doctolib 24h/24.',
    procedureName: 'Épilation Électrique APILUS',
    reviewCount: 33
  },
  'lumiere-pulsee-lumecca': {
    title: 'IPL Lumecca Toulouse | Taches, Couperose, Vasculaire | Dr Baron',
    description: 'Lumière pulsée LUMECCA à Toulouse par médecin laseriste. Taches brunes, couperose, lésions vasculaires, acné. Résultats dès la 1ère séance. ⭐ 4.6/5 · RDV Doctolib 24h/24.',
    procedureName: 'Lumière Pulsée LUMECCA – IPL',
    reviewCount: 39
  },
  'laser-co2-deka': {
    title: 'Laser CO2 Fractionné Toulouse | Peeling Laser | Dr Baron',
    description: 'Laser CO2 DEKA à Toulouse – peeling laser, resurfaçage, cicatrices d\'acné, rides, vergetures. Médecin laseriste. Résultats spectaculaires. ⭐ 4.6/5 · Blagnac · Colomiers.',
    procedureName: 'Laser CO2 Fractionné DEKA',
    reviewCount: 28
  },
  'peelings-medicaux': {
    title: 'Peeling Laser & Médical Toulouse | Taches, Acné | Dr Baron',
    description: 'Peelings médicaux et peeling laser à Toulouse. Taches pigmentaires, cicatrices acné, teint terne, vergetures. Peau neuve en 7-15 jours. ⭐ 4.6/5 · Lardenne · RDV en 48h.',
    procedureName: 'Peelings Médicaux',
    reviewCount: 35
  },
  'echographie': {
    title: 'Échographie Esthétique Toulouse | Diagnostic Précis | Dr Baron',
    description: 'Échographie esthétique haute résolution à Toulouse par le Dr Baron. Diagnostic précis avant traitement. Évaluation tissu cutané. ⭐ 4.6/5 · Lardenne · Prise de RDV rapide.',
    procedureName: 'Échographie Esthétique',
    reviewCount: 19
  }
};

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const metadata = soinsMetadata[slug];

  // Métadonnées par défaut si le traitement n'existe pas
  if (!metadata) {
    return {
      title: 'Traitement - La Villa Esthétique Toulouse',
      description: 'Découvrez nos traitements de médecine esthétique à Toulouse.',
      robots: 'noindex, nofollow'
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    robots: 'index, follow',
    alternates: {
      canonical: `https://lavillaesthetique-toulouse.com/actes/${slug}/`
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://lavillaesthetique-toulouse.com/actes/${slug}/`,
      siteName: 'La Villa Esthétique',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    }
  };
}

export default function TreatmentLayout({ children, params }: Props) {
  const metadata = soinsMetadata[params.slug];

  const jsonLd = metadata ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `https://lavillaesthetique-toulouse.com/actes/${params.slug}/#procedure`,
    'name': metadata.procedureName,
    'description': metadata.description,
    'url': `https://lavillaesthetique-toulouse.com/actes/${params.slug}/`,
    'performer': {
      '@type': 'Physician',
      '@id': 'https://lavillaesthetique-toulouse.com/a-propos/#nadine-baron',
      'name': 'Dr Nadine Baron'
    },
    'provider': {
      '@type': 'MedicalBusiness',
      '@id': 'https://lavillaesthetique-toulouse.com/#organization',
      'name': 'La Villa Esthétique',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '286 Avenue de Lardenne',
        'addressLocality': 'Toulouse',
        'postalCode': '31100',
        'addressCountry': 'FR'
      }
    },
  } : null;

  const faqLd = metadata?.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': metadata.faq.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      {children}
    </>
  );
}
