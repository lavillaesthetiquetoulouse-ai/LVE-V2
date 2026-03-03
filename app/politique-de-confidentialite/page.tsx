import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Metadata } from 'next';
import { Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - La Villa Esthétique | RGPD',
  description: 'Politique de confidentialité et protection des données personnelles conforme au RGPD - Cabinet Dr Nadine Baron, Toulouse.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/politique-de-confidentialite/'
  }
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Politique de Confidentialité' }]} />
        </div>

        <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h1 className="text-4xl font-outfit font-bold text-neutral-900">
                    Politique de Confidentialité
                  </h1>
                  <p className="text-neutral-600 mt-2">Conforme au RGPD et à la loi Informatique et Libertés</p>
                </div>
              </div>

              <div className="prose prose-neutral max-w-none space-y-8">

                {/* Introduction */}
                <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-neutral-700 mb-4">
                    La protection de vos données personnelles est une priorité pour La Villa Esthétique.
                    Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons
                    vos données conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> et
                    à la <strong>loi Informatique et Libertés</strong>.
                  </p>
                  <p className="text-sm text-neutral-600 mb-0">
                    Dernière mise à jour : Décembre 2024
                  </p>
                </section>

                {/* Responsable du traitement */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      1. Responsable du traitement des données
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Responsable :</strong> Dr Nadine Baron</p>
                    <p className="mb-2"><strong>Cabinet :</strong> La Villa Esthétique</p>
                    <p className="mb-2"><strong>Adresse :</strong> 286 avenue de Lardenne, 31100 Toulouse</p>
                    <p className="mb-2"><strong>Email :</strong> dr.baron.nadine@gmail.com</p>
                    <p className="mb-0"><strong>Téléphone :</strong> 05 62 14 04 10</p>
                  </div>
                </section>

                {/* Données collectées */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      2. Données personnelles collectées
                    </h2>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                    2.1 Données collectées via le site web
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Message ou demande de renseignements</li>
                    <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    2.2 Données médicales (cabinet médical)
                  </h3>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-4">
                    <p className="text-neutral-700 mb-2">
                      <strong>⚕️ Secret médical :</strong> Les données médicales (dossier patient, antécédents,
                      traitements, photos médicales) sont collectées et conservées dans le strict respect du
                      secret médical et de la déontologie médicale.
                    </p>
                    <p className="text-sm text-neutral-600 mb-0">
                      Ces données ne sont jamais transmises via le site internet et sont stockées de manière
                      sécurisée au cabinet médical.
                    </p>
                  </div>
                </section>

                {/* Finalités */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      3. Finalités du traitement
                    </h2>
                  </div>
                  <p className="mb-4">Vos données personnelles sont utilisées pour :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">📧 Gestion des demandes</h4>
                      <p className="text-sm text-neutral-600">Répondre à vos demandes de contact et de renseignements</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">📅 Prise de rendez-vous</h4>
                      <p className="text-sm text-neutral-600">Gérer les consultations via Doctolib (partenaire tiers)</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">⚕️ Suivi médical</h4>
                      <p className="text-sm text-neutral-600">Constitution et gestion du dossier médical patient</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">📊 Statistiques</h4>
                      <p className="text-sm text-neutral-600">Analyse anonymisée de la fréquentation du site</p>
                    </div>
                  </div>
                </section>

                {/* Base légale */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      4. Base légale du traitement
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">✓</span>
                      <span><strong>Consentement</strong> : Pour l'envoi de formulaires de contact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">✓</span>
                      <span><strong>Exécution du contrat</strong> : Gestion de la relation patient/médecin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">✓</span>
                      <span><strong>Obligation légale</strong> : Conservation du dossier médical (20 ans minimum)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">✓</span>
                      <span><strong>Intérêt légitime</strong> : Amélioration du site et sécurité</span>
                    </li>
                  </ul>
                </section>

                {/* Durée de conservation */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    5. Durée de conservation des données
                  </h2>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200">
                    <table className="w-full">
                      <thead className="bg-neutral-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Type de données</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Durée de conservation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        <tr>
                          <td className="px-6 py-4 text-sm">Formulaires de contact</td>
                          <td className="px-6 py-4 text-sm">3 ans après le dernier contact</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm">Dossier médical patient</td>
                          <td className="px-6 py-4 text-sm">20 ans minimum (obligation légale)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm">Cookies analytiques</td>
                          <td className="px-6 py-4 text-sm">13 mois maximum</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm">Logs de connexion</td>
                          <td className="px-6 py-4 text-sm">1 an</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Destinataires */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    6. Destinataires des données
                  </h2>
                  <p className="mb-4">Vos données personnelles peuvent être transmises à :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Le personnel médical autorisé</strong> du cabinet (secret médical)</li>
                    <li><strong>Doctolib</strong> : Plateforme de prise de rendez-vous (sous-traitant RGPD)</li>
                    <li><strong>Supabase</strong> : Hébergement de données (sous-traitant RGPD, serveurs UE)</li>
                    <li><strong>Netlify</strong> : Hébergement du site web (sous-traitant RGPD)</li>
                    <li><strong>Autorités légales</strong> : En cas d'obligation légale uniquement</li>
                  </ul>
                  <p className="text-sm text-neutral-600 mt-4">
                    Aucune donnée n'est vendue ou louée à des tiers à des fins commerciales.
                  </p>
                </section>

                {/* Droits */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      7. Vos droits sur vos données
                    </h2>
                  </div>
                  <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">👁️ Droit d'accès</h4>
                      <p className="text-sm text-neutral-600">Connaître les données vous concernant</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">✏️ Droit de rectification</h4>
                      <p className="text-sm text-neutral-600">Corriger vos données inexactes</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">🗑️ Droit à l'effacement</h4>
                      <p className="text-sm text-neutral-600">Supprimer vos données (sauf dossier médical)</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">⛔ Droit d'opposition</h4>
                      <p className="text-sm text-neutral-600">Refuser le traitement de vos données</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">🔒 Droit à la limitation</h4>
                      <p className="text-sm text-neutral-600">Limiter le traitement de vos données</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">📦 Droit à la portabilité</h4>
                      <p className="text-sm text-neutral-600">Récupérer vos données dans un format lisible</p>
                    </div>
                  </div>

                  <div className="bg-brand-subtle rounded-xl p-6 border border-brand/20">
                    <h3 className="font-semibold text-neutral-900 mb-3">Comment exercer vos droits ?</h3>
                    <p className="mb-3">Contactez-nous par :</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✉️</span>
                        <span><strong>Email :</strong> dr.baron.nadine@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">📮</span>
                        <span><strong>Courrier :</strong> 286 avenue de Lardenne, 31100 Toulouse</span>
                      </li>
                    </ul>
                    <p className="text-sm text-neutral-600 mt-4 mb-0">
                      Nous vous répondrons sous 1 mois maximum. Une pièce d'identité pourra être demandée.
                    </p>
                  </div>
                </section>

                {/* Sécurité */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    8. Sécurité des données
                  </h2>
                  <p className="mb-4">Nous mettons en œuvre les mesures techniques et organisationnelles suivantes :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Chiffrement SSL/TLS de toutes les communications (HTTPS)</li>
                    <li>Hébergement sécurisé avec sauvegardes régulières</li>
                    <li>Accès restreint aux données médicales (authentification forte)</li>
                    <li>Mises à jour de sécurité régulières</li>
                    <li>Formation du personnel au RGPD et au secret médical</li>
                  </ul>
                </section>

                {/* Réclamation */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    9. Droit de réclamation
                  </h2>
                  <p className="mb-4">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
                    réclamation auprès de la CNIL :
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></p>
                    <p className="mb-2">3 Place de Fontenoy - TSA 80715</p>
                    <p className="mb-2">75334 PARIS CEDEX 07</p>
                    <p className="mb-0">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.cnil.fr</a></p>
                  </div>
                </section>

                {/* Modifications */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    10. Modifications de la politique
                  </h2>
                  <p className="text-neutral-700">
                    Cette politique de confidentialité peut être modifiée à tout moment. La version
                    en vigueur est toujours disponible sur cette page avec la date de dernière mise à jour.
                  </p>
                </section>

                {/* Contact */}
                <section className="bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-xl p-8 border border-brand/20">
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Des questions sur vos données ?
                  </h2>
                  <p className="mb-4">
                    Pour toute question concernant cette politique ou le traitement de vos données personnelles,
                    n'hésitez pas à nous contacter.
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors shadow-lg"
                  >
                    Nous contacter
                  </a>
                </section>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
