'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FAQ } from '@/components/faq';
import { Calendar, ArrowRight, Clock, Target, CheckCircle, Star, Shield, Thermometer, AlertCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "Comment est établie la tarification du botox à La Villa Esthétique Toulouse ?",
    answer: "À La Villa Esthétique (286 avenue de Lardenne, Toulouse 31100), la tarification est établie sur demande lors de la consultation médicale avec le Dr Nadine Baron. Le devis est personnalisé selon les zones à traiter et le protocole adapté à votre situation. La consultation médicale préalable, les produits et le contrôle à J+15 avec retouche gratuite sont inclus dans le tarif.",
  },
  {
    question: 'Combien de temps durent les effets du botox injecté à Toulouse ?',
    answer: "Les effets de la toxine botulique durent en moyenne 4 à 6 mois selon le métabolisme du patient et la zone traitée. Les pattes d'oie se résorbent légèrement plus vite que le front. Pour l'hyperhidrose axillaire, la durée est plus longue : 6 à 9 mois. Un entretien biannuel est recommandé pour maintenir des résultats naturels durables.",
  },
  {
    question: 'Quand le botox commence-t-il à agir après la séance ?',
    answer: "Le botox ne produit pas d'effet immédiat. Les premières modifications musculaires sont perceptibles entre 3 et 5 jours après l'injection. Le résultat optimal est atteint entre le 10e et le 15e jour. C'est pourquoi le Dr Nadine Baron propose systématiquement un contrôle à J+14-15 avec retouche gratuite si un ajustement est nécessaire.",
  },
  {
    question: "L'injection de botox est-elle douloureuse à La Villa Esthétique Toulouse ?",
    answer: "L'injection de toxine botulique est généralement très bien tolérée. Elle est réalisée à l'aide d'aiguilles ultra-fines de calibre 30 à 32G. La plupart des patients décrivent une légère piqûre d'insecte de 1 à 2 secondes par point d'injection. Pour les patients plus sensibles, une crème anesthésiante peut être appliquée avant la séance sur demande.",
  },
  {
    question: 'Le Dr Baron traite-t-il la transpiration excessive (hyperhidrose) à Toulouse ?',
    answer: "Oui, la toxine botulique est un traitement de référence pour l'hyperhidrose primaire localisée. À La Villa Esthétique, le Dr Nadine Baron réalise des injections intradermiques de botox pour traiter l'hyperhidrose axillaire (aisselles), palmaire (mains) et plantaire (pieds). Les résultats durent entre 6 et 9 mois pour les aisselles.",
  },
  {
    question: "Quelles sont les garanties du traitement botox au cabinet de Lardenne à Toulouse ?",
    answer: "À La Villa Esthétique, le Dr Nadine Baron est médecin diplômée (DIU de Médecine Esthétique) avec plus de 15 ans d'expérience. Elle utilise exclusivement des toxines botuliques certifiées CE. Chaque traitement inclut une consultation médicale approfondie et un contrôle à J+15 avec retouche gratuite si nécessaire. La tarification est établie sur demande lors de la consultation.",
  },
];

const details = [
  'Toxine botulique certifiée CE (Botox®, Dysport® ou Bocouture®)',
  'Traitement des rides du front, rides du lion et pattes d\'oie',
  'Techniques avancées : brow lift, lip flip, Nefertiti lift',
  'Traitement de l\'hyperhidrose (transpiration excessive)',
  'Résultats naturels visibles dès J+3-5, optimaux à J+14',
  'Durée des effets : 4 à 6 mois selon les zones',
  'Contrôle médical à J+15 avec retouche gratuite incluse',
];

const longDescription = "La toxine botulique (botox) est l'un des traitements de médecine esthétique les plus utilisés au monde pour atténuer les rides d'expression. À La Villa Esthétique de Toulouse, le Dr Nadine Baron réalise ces injections avec une précision chirurgicale, en adaptant la technique et les doses à l'anatomie de chaque patient. L'objectif est toujours d'obtenir un résultat naturel : le visage paraît reposé et détendu, sans perdre son expressivité. La toxine bloque temporairement la contraction des muscles responsables des rides, permettant à la peau de se lisser progressivement. En plus des zones classiques (front, rides du lion, pattes d'oie), le Dr Baron propose des techniques avancées comme le brow lift pour ouvrir le regard, le lip flip pour un léger retroussé naturel des lèvres, le Nefertiti lift pour redéfinir l'ovale du visage, et le traitement de l'hyperhidrose axillaire pour réduire la transpiration excessive.";

export default function InjectionBotoxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Injection Botox Toulouse – Toxine Botulique – Dr Nadine Baron',
            description: 'Injection de toxine botulique à Toulouse par le Dr Nadine Baron. Rides du front, pattes d\'oie, rides du lion, hyperhidrose. Cabinet médical agréé, 15 ans d\'expérience.',
            url: 'https://lavillaesthetique-toulouse.com/actes/injection-botox-toxine-botulique/',
            mainEntity: {
              '@type': 'MedicalProcedure',
              name: 'Injection Botox – Toxine Botulique',
              description: longDescription,
              procedureType: 'Aesthetic Medicine',
              followup: 'Contrôle médical à J+14-15 avec retouche gratuite incluse',
              preparation: 'Consultation médicale préalable obligatoire',
              medicalSpecialty: 'Médecine Esthétique',
            },
            provider: {
              '@type': 'MedicalBusiness',
              name: 'La Villa Esthétique',
              url: 'https://lavillaesthetique-toulouse.com/',
              telephone: '+33562140410',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '286 Avenue de Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR',
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lavillaesthetique-toulouse.com/' },
                { '@type': 'ListItem', position: 2, name: 'Soins', item: 'https://lavillaesthetique-toulouse.com/actes/' },
                { '@type': 'ListItem', position: 3, name: 'Injection Botox', item: 'https://lavillaesthetique-toulouse.com/actes/injection-botox-toxine-botulique/' },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Soins', href: '/actes/' },
            { label: 'Injection Botox – Toxine Botulique' },
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl text-white flex-shrink-0 shadow-xl text-3xl">
                  💉
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-4">
                    Injection Botox – Toxine Botulique
                  </h1>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    Traitement des rides d'expression par toxine botulique certifiée CE. Résultats naturels, sans chirurgie, par le Dr Nadine Baron à Toulouse.
                  </p>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Durée</h3>
                  </div>
                  <p className="text-neutral-600">20 à 30 minutes</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Entretien</h3>
                  </div>
                  <p className="text-neutral-600">Renouvellement tous les 4-6 mois</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Résultats</h3>
                  </div>
                  <p className="text-neutral-600">Visibles à J+3-5, optimaux à J+14</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Long Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200"
                  >
                    <h2 className="text-2xl font-outfit font-bold text-neutral-900 mb-4">
                      À propos du traitement
                    </h2>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      {longDescription}
                    </p>
                  </motion.div>

                  {/* Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200"
                  >
                    <h2 className="text-2xl font-outfit font-bold text-neutral-900 mb-6 flex items-center gap-2">
                      <Star className="w-6 h-6 text-brand" />
                      Détails du traitement
                    </h2>
                    <div className="space-y-4">
                      {details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                          <span className="text-neutral-700 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Medical Disclaimer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-info flex-shrink-0 mt-1" />
                      <div className="space-y-3 text-sm text-neutral-700">
                        <p>
                          <strong>Consultation préalable obligatoire :</strong> Tout traitement nécessite une consultation médicale avec le Dr Nadine Baron pour évaluer vos besoins et établir un protocole personnalisé.
                        </p>
                        <p>
                          <strong>Contre-indications :</strong> Certaines conditions médicales peuvent contre-indiquer ce traitement. Merci de signaler tout problème de santé lors de la consultation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  {/* CTA Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-brand to-laser rounded-2xl p-6 text-white shadow-xl sticky top-24"
                  >
                    <h3 className="text-2xl font-outfit font-bold mb-4">
                      Prêt à commencer ?
                    </h3>
                    <p className="mb-6 text-white/90">
                      Prenez rendez-vous avec le Dr Nadine Baron pour une consultation personnalisée.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white text-brand px-6 py-4 rounded-full font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
                      >
                        <Calendar className="w-5 h-5" />
                        Prendre RDV
                      </a>
                      <a
                        href="tel:+33562140410"
                        className="flex items-center justify-center gap-2 w-full bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
                      >
                        <Phone className="w-5 h-5" />
                        05 62 14 04 10
                      </a>
                    </div>
                  </motion.div>

                  {/* Pricing Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Thermometer className="w-5 h-5 text-brand" />
                      <h3 className="font-semibold text-lg text-brand">
                        Tarification personnalisée
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Les tarifs dépendent des zones à traiter et du protocole personnalisé. Un devis détaillé vous sera remis lors de votre consultation.
                    </p>
                  </motion.div>

                  {/* Safety Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-info" />
                      <h3 className="font-semibold text-lg text-neutral-900">
                        Sécurité et qualité
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Cabinet médical agréé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Toxine botulique certifiée CE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Médecin diplômée, 15 ans d'exp.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Retouche J+15 offerte</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur le botox à Toulouse" />

        {/* Related */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Découvrez nos autres traitements
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Explorez l'ensemble de nos soins de médecine esthétique pour un résultat harmonieux.
              </p>
              <a href="/actes/" className="btn-primary-villa inline-flex items-center gap-2">
                Voir tous les traitements
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
