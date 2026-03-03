import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Metadata } from 'next';
import { FileText, Calendar, Euro, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - La Villa Esthétique',
  description: 'Conditions générales de vente et de prestation de services du cabinet de médecine esthétique La Villa Esthétique, Dr Nadine Baron.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/cgv/'
  }
};

export default function CGVPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Conditions Générales de Vente' }]} />
        </div>

        <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h1 className="text-4xl font-outfit font-bold text-neutral-900">
                    Conditions Générales de Vente
                  </h1>
                  <p className="text-neutral-600 mt-2">Prestations de médecine esthétique</p>
                </div>
              </div>

              <div className="prose prose-neutral max-w-none space-y-8">

                {/* Introduction */}
                <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-neutral-700 mb-2">
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
                    entre le Dr Nadine Baron, exerçant au sein du cabinet La Villa Esthétique, et ses patients
                    pour les prestations de médecine esthétique.
                  </p>
                  <p className="text-sm text-neutral-600 mb-0">
                    Toute consultation ou soin implique l'acceptation pleine et entière des présentes CGV.
                  </p>
                </section>

                {/* Article 1 */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardCheck className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      Article 1 - Objet
                    </h2>
                  </div>
                  <p className="mb-4">
                    Les présentes CGV s'appliquent à l'ensemble des prestations de médecine esthétique
                    proposées par le Dr Nadine Baron, notamment :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Consultations médicales esthétiques</li>
                    <li>Injections esthétiques (acide hyaluronique, toxine botulique, inducteurs de collagène, etc.)</li>
                    <li>Traitements par lasers médicaux et technologies avancées</li>
                    <li>Soins du visage et du corps (peelings, HydraFacial, etc.)</li>
                    <li>Toute autre prestation de médecine esthétique non chirurgicale</li>
                  </ul>
                </section>

                {/* Article 2 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 2 - Champ d'application
                  </h2>
                  <p className="mb-4">
                    Les présentes CGV sont applicables à tous les patients consultant au cabinet
                    La Villa Esthétique, situé au 286 avenue de Lardenne, 31100 Toulouse.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Le Dr Nadine Baron se réserve le droit de modifier les présentes CGV à tout moment.
                    Les CGV applicables sont celles en vigueur à la date de la prestation.
                  </p>
                </section>

                {/* Article 3 */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      Article 3 - Prise de rendez-vous
                    </h2>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                    3.1 Modalités de prise de rendez-vous
                  </h3>
                  <p className="mb-4">Les rendez-vous peuvent être pris :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>En ligne via la plateforme Doctolib (24h/24)</li>
                    <li>Par téléphone au 05 62 14 04 10 (aux heures d'ouverture)</li>
                    <li>Par email à dr.baron.nadine@gmail.com</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    3.2 Annulation et modification
                  </h3>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-4">
                    <p className="mb-3">
                      <strong>⚠️ Délai d'annulation :</strong> Toute annulation ou modification de rendez-vous
                      doit être effectuée au moins <strong>48 heures à l'avance</strong>.
                    </p>
                    <p className="mb-0 text-sm">
                      En cas d'annulation tardive (moins de 48h) ou d'absence sans prévenir,
                      le cabinet se réserve le droit de facturer tout ou partie de la consultation.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    3.3 Retard
                  </h3>
                  <p>
                    En cas de retard supérieur à 15 minutes, le praticien se réserve le droit de réduire
                    la durée de la consultation ou de reporter le rendez-vous.
                  </p>
                </section>

                {/* Article 4 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 4 - Consultation et délai de réflexion
                  </h2>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.1 Consultation préalable obligatoire
                  </h3>
                  <p className="mb-6">
                    Une consultation médicale préalable est obligatoire avant tout acte esthétique.
                    Cette consultation permet :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>L'examen médical et l'évaluation de vos attentes</li>
                    <li>L'information sur les bénéfices, risques et alternatives</li>
                    <li>La remise d'un devis détaillé et d'un consentement éclairé</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.2 Délai de réflexion légal
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <p className="mb-3">
                      <strong>📅 Délai minimum obligatoire :</strong> Conformément à la réglementation,
                      un délai de réflexion minimum de <strong>15 jours</strong> doit être respecté entre
                      la consultation d'information et la réalisation de certains actes esthétiques.
                    </p>
                    <p className="text-sm text-neutral-600 mb-0">
                      Ce délai permet de prendre une décision éclairée et mûrement réfléchie.
                    </p>
                  </div>
                </section>

                {/* Article 5 */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      Article 5 - Tarifs et modalités de paiement
                    </h2>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                    5.1 Tarifs
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Les tarifs sont fixés librement par le praticien et communiqués lors de la consultation</li>
                    <li>Un devis détaillé et personnalisé vous sera remis avant tout traitement</li>
                    <li>Les tarifs sont susceptibles d'évoluer et ceux applicables sont ceux en vigueur le jour de la prestation</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    5.2 Modalités de paiement
                  </h3>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 mb-4">
                    <p className="mb-3"><strong>Moyens de paiement acceptés :</strong></p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✓</span>
                        <span>Carte bancaire (CB, Visa, Mastercard)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✓</span>
                        <span>Espèces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✓</span>
                        <span>Chèque</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✓</span>
                        <span>Virement bancaire</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-4">
                    Le paiement s'effectue le jour de la prestation, sauf accord particulier préalable.
                  </p>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    5.3 Remboursement
                  </h3>
                  <p className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <strong>⚠️ Actes non remboursés :</strong> Les actes de médecine esthétique ne sont
                    généralement pas pris en charge par l'Assurance Maladie ni par les mutuelles,
                    sauf exception particulière.
                  </p>
                </section>

                {/* Article 6 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 6 - Obligations du patient
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Informer le praticien</strong> de tout antécédent médical, allergie, traitement
                      en cours ou grossesse
                    </li>
                    <li>
                      <strong>Respecter les recommandations</strong> pré et post-traitement données par le médecin
                    </li>
                    <li>
                      <strong>Signaler tout effet indésirable</strong> ou complication dans les plus brefs délais
                    </li>
                    <li>
                      <strong>Ne pas modifier</strong> les dosages ou protocoles sans l'accord du praticien
                    </li>
                  </ul>
                </section>

                {/* Article 7 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 7 - Résultats et garanties
                  </h2>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <p className="mb-3">
                      <strong>⚠️ Obligation de moyens :</strong> Le Dr Nadine Baron s'engage à mettre en œuvre
                      tous les moyens nécessaires conformément aux données acquises de la science médicale.
                    </p>
                    <p className="mb-0">
                      Cependant, la médecine n'étant pas une science exacte, <strong>aucun résultat spécifique
                      ne peut être garanti</strong>. Les résultats peuvent varier d'une personne à l'autre en
                      fonction de nombreux facteurs (âge, type de peau, hygiène de vie, etc.).
                    </p>
                  </div>
                </section>

                {/* Article 8 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 8 - Responsabilité
                  </h2>
                  <p className="mb-4">
                    Le Dr Nadine Baron dispose d'une assurance responsabilité civile professionnelle
                    conformément à la réglementation en vigueur.
                  </p>
                  <p className="mb-4">
                    La responsabilité du praticien ne peut être engagée que dans le cadre d'une faute
                    professionnelle avérée.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Les complications liées au non-respect des consignes post-traitement ou à la non-déclaration
                    d'antécédents médicaux ne sauraient engager la responsabilité du praticien.
                  </p>
                </section>

                {/* Article 9 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 9 - Confidentialité et secret médical
                  </h2>
                  <p className="mb-4">
                    Le Dr Nadine Baron est soumis au <strong>secret médical</strong> conformément au Code
                    de Déontologie Médicale (article R.4127-4 du Code de la Santé Publique).
                  </p>
                  <p>
                    Toutes les informations relatives à votre santé sont strictement confidentielles et
                    ne peuvent être communiquées qu'avec votre accord écrit ou en cas d'obligation légale.
                  </p>
                </section>

                {/* Article 10 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 10 - Droit à l'image
                  </h2>
                  <p className="mb-4">
                    Les photographies médicales (avant/après) ne peuvent être utilisées à des fins
                    pédagogiques, scientifiques ou publicitaires qu'avec votre <strong>consentement
                    écrit préalable</strong>.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Vous disposez d'un droit de retrait de votre consentement à tout moment.
                  </p>
                </section>

                {/* Article 11 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 11 - Règlement des litiges
                  </h2>
                  <p className="mb-4">
                    En cas de litige, nous vous invitons à nous contacter en priorité pour trouver une
                    solution amiable.
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 mb-4">
                    <p className="mb-2"><strong>Médiation :</strong></p>
                    <p className="mb-3 text-sm">
                      En cas de désaccord persistant, vous pouvez saisir le Conseil Départemental de
                      l'Ordre des Médecins de Haute-Garonne pour une médiation.
                    </p>
                    <p className="mb-2"><strong>Juridiction compétente :</strong></p>
                    <p className="mb-0 text-sm">
                      À défaut de règlement amiable, les tribunaux de Toulouse sont seuls compétents.
                    </p>
                  </div>
                </section>

                {/* Article 12 */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Article 12 - Droit applicable
                  </h2>
                  <p>
                    Les présentes CGV sont soumises au droit français, notamment au Code de la Santé
                    Publique et au Code de Déontologie Médicale.
                  </p>
                </section>

                {/* Contact */}
                <section className="bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-xl p-8 border border-brand/20">
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Des questions sur nos CGV ?
                  </h2>
                  <p className="mb-4">
                    Pour toute question concernant les présentes conditions générales de vente,
                    n'hésitez pas à nous contacter.
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors shadow-lg"
                  >
                    Nous contacter
                  </a>
                </section>

                {/* Date de mise à jour */}
                <section className="pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    <strong>Dernière mise à jour :</strong> Décembre 2024
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    <strong>Version :</strong> 1.0
                  </p>
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
