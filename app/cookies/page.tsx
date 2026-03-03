import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Cookie, Settings, BarChart3, Shield } from 'lucide-react';

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Gestion des Cookies' }]} />
        </div>

        <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h1 className="text-4xl font-outfit font-bold text-neutral-900">
                    Gestion des Cookies
                  </h1>
                  <p className="text-neutral-600 mt-2">Transparence et contrôle sur les cookies utilisés</p>
                </div>
              </div>

              <div className="prose prose-neutral max-w-none space-y-8">

                {/* Introduction */}
                <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                    🍪 Qu'est-ce qu'un cookie ?
                  </h2>
                  <p className="text-neutral-700 mb-0">
                    Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette)
                    lors de votre visite sur notre site. Les cookies permettent de mémoriser vos préférences,
                    analyser l'audience et améliorer votre expérience de navigation.
                  </p>
                </section>

                {/* Types de cookies */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      1. Types de cookies utilisés
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Cookies essentiels */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                            Cookies essentiels (obligatoires)
                          </h3>
                          <p className="text-neutral-700 mb-3">
                            Ces cookies sont nécessaires au bon fonctionnement du site et ne peuvent pas être désactivés.
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600">
                            <li>Préférences de cookies (votre choix d'acceptation)</li>
                            <li>Sécurité et authentification</li>
                            <li>Sessions de navigation</li>
                          </ul>
                          <div className="mt-3 text-sm">
                            <span className="font-semibold">Durée :</span> Session ou 1 an maximum
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cookies analytiques */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                            Cookies analytiques (optionnels)
                          </h3>
                          <p className="text-neutral-700 mb-3">
                            Ces cookies nous permettent de mesurer l'audience et d'améliorer notre site.
                            Les données sont anonymisées.
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600 mb-3">
                            <li>Pages visitées et temps passé</li>
                            <li>Parcours de navigation</li>
                            <li>Type d'appareil utilisé</li>
                            <li>Provenance géographique (pays/région)</li>
                          </ul>
                          <div className="bg-blue-50 rounded-lg p-3 mb-3">
                            <p className="text-sm text-neutral-700 mb-0">
                              <strong>⚠️ Votre consentement est requis</strong> pour ces cookies.
                              Vous pouvez les refuser sans impact sur la navigation.
                            </p>
                          </div>
                          <div className="text-sm">
                            <span className="font-semibold">Durée :</span> 13 mois maximum
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cookies tiers */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                        Cookies de services tiers
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-brand mt-1">•</span>
                          <div>
                            <p className="font-semibold text-neutral-900">YouTube</p>
                            <p className="text-sm text-neutral-600">
                              Cookies déposés lors de la lecture de vidéos YouTube intégrées
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-brand mt-1">•</span>
                          <div>
                            <p className="font-semibold text-neutral-900">Google Fonts</p>
                            <p className="text-sm text-neutral-600">
                              Chargement des polices de caractères
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-brand mt-1">•</span>
                          <div>
                            <p className="font-semibold text-neutral-900">Doctolib (widget de prise de RDV)</p>
                            <p className="text-sm text-neutral-600">
                              Cookies de fonctionnement du module de rendez-vous
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 mt-4 mb-0">
                        Ces services tiers ont leurs propres politiques de cookies que nous vous invitons à consulter.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Gestion des cookies */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    2. Comment gérer vos préférences de cookies ?
                  </h2>

                  <div className="space-y-6">
                    {/* Bandeau cookies */}
                    <div className="bg-gradient-to-br from-brand-subtle to-laser-subtle rounded-xl p-6 border border-brand/20">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                        🔧 Via le bandeau de consentement
                      </h3>
                      <p className="mb-4">
                        À votre première visite, un bandeau apparaît automatiquement vous permettant de choisir vos préférences.
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-brand/20">
                        <p className="text-sm text-neutral-700">
                          <strong>💡 Astuce :</strong> Pour modifier vos préférences de cookies, vous pouvez :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-neutral-600">
                          <li>Supprimer les cookies de votre navigateur (voir section ci-dessous)</li>
                          <li>Vider le cache de votre navigateur</li>
                          <li>Recharger la page en navigation privée</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paramètres navigateur */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                        🌐 Via votre navigateur
                      </h3>
                      <p className="mb-4">Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies :</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          <span className="text-neutral-700">Chrome</span>
                          <span className="ml-auto text-brand text-sm">→</span>
                        </a>
                        <a
                          href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          <span className="text-neutral-700">Firefox</span>
                          <span className="ml-auto text-brand text-sm">→</span>
                        </a>
                        <a
                          href="https://support.apple.com/fr-fr/HT201265"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          <span className="text-neutral-700">Safari</span>
                          <span className="ml-auto text-brand text-sm">→</span>
                        </a>
                        <a
                          href="https://support.microsoft.com/fr-fr/microsoft-edge"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          <span className="text-neutral-700">Edge</span>
                          <span className="ml-auto text-brand text-sm">→</span>
                        </a>
                      </div>
                      <p className="text-sm text-neutral-600 mt-4 mb-0">
                        ⚠️ Attention : Bloquer tous les cookies peut altérer votre expérience de navigation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Finalités détaillées */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    3. À quoi servent ces cookies ?
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Améliorer votre expérience :</strong> Mémoriser vos préférences et faciliter votre navigation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Comprendre notre audience :</strong> Savoir quelles pages sont les plus consultées</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Optimiser le site :</strong> Identifier les problèmes techniques et améliorer les performances</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Sécuriser le site :</strong> Détecter et prévenir les activités frauduleuses</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Vos droits */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    4. Vos droits
                  </h2>
                  <p className="mb-4">
                    Conformément au RGPD, vous bénéficiez de droits sur vos données personnelles collectées
                    via les cookies.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <p className="mb-3">
                      Pour exercer vos droits (accès, rectification, suppression, opposition) :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✉️</span>
                        <span><strong>Email :</strong> dr.baron.nadine@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">📄</span>
                        <span>
                          <a href="/politique-de-confidentialite/" className="text-brand hover:underline">
                            Consultez notre politique de confidentialité
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    5. Contact
                  </h2>
                  <p className="mb-4">
                    Pour toute question concernant notre utilisation des cookies :
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors shadow-lg"
                  >
                    Nous contacter
                  </a>
                </section>

                {/* Mise à jour */}
                <section className="pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    <strong>Dernière mise à jour :</strong> Décembre 2024
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
