'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FAQ } from '@/components/faq';
import { Calendar, ArrowRight, Clock, Target, CheckCircle, Star, Shield, Thermometer, AlertCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "Comment est établie la tarification d'une injection de lèvres à La Villa Esthétique ?",
    answer: "À La Villa Esthétique (286 avenue de Lardenne, Toulouse 31100), la tarification est établie sur demande lors de la consultation médicale avec le Dr Nadine Baron. Le devis est personnalisé selon le volume de produit adapté à votre morphologie labiale et vos attentes. La consultation médicale préalable, le produit certifié CE avec lidocaïne intégrée, et le suivi post-traitement sont inclus.",
  },
  {
    question: "Combien de temps durent les effets d'une injection de lèvres à Toulouse ?",
    answer: "Les injections de lèvres à l'acide hyaluronique durent en moyenne 9 à 12 mois à La Villa Esthétique. La durée varie selon le produit utilisé, votre métabolisme individuel et la quantité injectée. Les personnes qui pratiquent un sport intense ou qui fument voient souvent des résultats se résorber plus rapidement. Une retouche annuelle permet de maintenir un résultat naturel et harmonieux.",
  },
  {
    question: "Y a-t-il un gonflement après une injection de lèvres à Toulouse ?",
    answer: "Oui, un gonflement et de légères ecchymoses sont normaux et attendus après l'injection des lèvres. Le gonflement est maximal dans les 24 à 48h suivant la séance, puis diminue progressivement. Le résultat définitif s'apprécie entre J+7 et J+14, une fois que l'acide hyaluronique s'est intégré dans les tissus.",
  },
  {
    question: "Le Dr Baron utilise-t-il une aiguille ou une cannule pour les lèvres ?",
    answer: "Le Dr Nadine Baron adapte la technique à chaque patient. L'aiguille fine (30-32G) est utilisée pour les injections précises du contour (arc de Cupidon, philtrum, bord vermillon). La cannule souple est préférée pour le remplissage du corps de la lèvre car elle réduit le risque d'hématomes. Les deux techniques peuvent être combinées selon les besoins.",
  },
  {
    question: "Peut-on dissoudre l'acide hyaluronique des lèvres si le résultat ne convient pas ?",
    answer: "Oui, l'acide hyaluronique est entièrement réversible grâce à la hyaluronidase, une enzyme qui dissout le produit en quelques heures. C'est l'un des avantages majeurs de l'acide hyaluronique. Le Dr Nadine Baron peut procéder à la dissolution lors d'une consultation dédiée au cabinet de Lardenne à Toulouse.",
  },
  {
    question: "Quelle quantité d'acide hyaluronique est recommandée pour les lèvres ?",
    answer: "La quantité recommandée varie selon la morphologie labiale et les attentes de chaque patient. Pour un premier traitement, une quantité modérée convient généralement pour un résultat naturel. Pour un volume plus prononcé, une quantité supérieure peut être envisagée. Il est toujours possible d'ajouter du volume progressivement lors d'une séance ultérieure. La tarification est établie lors de la consultation.",
  },
];

const details = [
  'Acide hyaluronique certifié CE avec lidocaïne intégrée pour un confort optimal',
  'Augmentation du volume et redéfinition du contour labial',
  'Techniques : aiguille fine 30-32G et/ou cannule souple selon les zones',
  'Correction de l\'asymétrie et hydratation profonde des lèvres',
  'Résultats immédiats, résultat final apprécié à J+7-14',
  'Durée des résultats : 9 à 12 mois selon le métabolisme',
  'Traitement entièrement réversible par hyaluronidase',
];

const longDescription = "L'injection de lèvres à l'acide hyaluronique est l'un des traitements les plus demandés en médecine esthétique. À La Villa Esthétique de Toulouse, le Dr Nadine Baron réalise ces injections avec une approche naturelle et personnalisée : sublimer les lèvres, jamais les déformer. L'acide hyaluronique utilisé est certifié CE et contient de la lidocaïne intégrée pour minimiser l'inconfort. Les objectifs peuvent varier selon les besoins de chaque patient : augmentation du volume labial, redéfinition du contour (arc de Cupidon, bord vermillon, philtrum), hydratation profonde, correction d'une asymétrie ou effet pout naturel. La technique est adaptée à chaque morphologie : aiguille fine pour les zones de précision, cannule souple pour le remplissage du corps de la lèvre. Les résultats sont immédiats et naturels, avec un résultat définitif apprécié entre J+7 et J+14. En cas d'insatisfaction, une dissolution par hyaluronidase est possible à tout moment.";

export default function InjectionLevresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Injection Lèvres Toulouse – Acide Hyaluronique – Dr Nadine Baron',
            description: 'Injection lèvres à l\'acide hyaluronique à Toulouse par le Dr Nadine Baron. Volume naturel, contour, hydratation. Cabinet médical agréé, 15 ans d\'expérience.',
            url: 'https://lavillaesthetique-toulouse.com/actes/injection-levres/',
            mainEntity: {
              '@type': 'MedicalProcedure',
              name: 'Injection Lèvres – Acide Hyaluronique',
              description: longDescription,
              procedureType: 'Aesthetic Medicine',
              followup: 'Résultat définitif apprécié à J+7-14',
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
                { '@type': 'ListItem', position: 3, name: 'Injection Lèvres', item: 'https://lavillaesthetique-toulouse.com/actes/injection-levres/' },
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
            { label: 'Injection Lèvres – Acide Hyaluronique' },
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
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl text-white flex-shrink-0 shadow-xl text-3xl">
                  💋
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-4">
                    Injection Lèvres – Acide Hyaluronique
                  </h1>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    Augmentation naturelle et redéfinition des lèvres à l'acide hyaluronique. Résultats immédiats, effet naturel, par le Dr Nadine Baron à Toulouse.
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
                  <p className="text-neutral-600">30 à 45 minutes</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Entretien</h3>
                  </div>
                  <p className="text-neutral-600">Renouvellement tous les 9-12 mois</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Résultats</h3>
                  </div>
                  <p className="text-neutral-600">Immédiats, définitifs à J+7-14</p>
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
                          <strong>Contre-indications :</strong> Certaines conditions médicales peuvent contre-indiquer ce traitement (grossesse, herpès labial actif, anticoagulants). Merci de signaler tout problème de santé lors de la consultation.
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
                      Les tarifs dépendent du volume de produit et du protocole personnalisé. Un devis détaillé vous sera remis lors de votre consultation.
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
                        <span>Acide hyaluronique certifié CE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Médecin diplômée, 15 ans d'exp.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Traitement réversible par hyaluronidase</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur l'injection de lèvres à Toulouse" />

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
