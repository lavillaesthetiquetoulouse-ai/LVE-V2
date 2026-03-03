import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Metadata } from 'next';
import { Accessibility, Monitor, Smartphone, Eye, Ear, Hand, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibilité Numérique - La Villa Esthétique',
  description: 'Déclaration d\'accessibilité du site La Villa Esthétique. Notre engagement pour un site accessible à tous.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/accessibilite/'
  }
};

export default function AccessibilitePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Accessibilité' }]} />
        </div>

        <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Accessibility className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-4xl font-outfit font-bold text-neutral-900">
                    Accessibilité Numérique
                  </h1>
                  <p className="text-neutral-600 mt-2">Notre engagement pour un site accessible à tous</p>
                </div>
              </div>

              <div className="prose prose-neutral max-w-none space-y-8">

                {/* Introduction */}
                <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-neutral-700 mb-2">
                    La Villa Esthétique s'engage à rendre son site internet accessible conformément à
                    l'article 47 de la loi n° 2005-102 du 11 février 2005.
                  </p>
                  <p className="text-sm text-neutral-600 mb-0">
                    Cette déclaration d'accessibilité s'applique au site{' '}
                    <strong>https://lavillaesthetique-toulouse.com</strong>
                  </p>
                </section>

                {/* État de conformité */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-6 h-6 text-brand" />
                    <h2 className="text-2xl font-outfit font-semibold text-neutral-900">
                      1. État de conformité
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-4">
                      Le site <strong>lavillaesthetique-toulouse.com</strong> est <strong>partiellement
                      conforme</strong> avec le Référentiel Général d'Amélioration de l'Accessibilité (RGAA) version 4.1.
                    </p>
                    <p className="text-sm text-neutral-600 mb-0">
                      Les non-conformités et les dérogations sont énumérées ci-dessous.
                    </p>
                  </div>
                </section>

                {/* Résultats des tests */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    2. Résultats des tests
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-3">
                      <strong>Dernière évaluation :</strong> Décembre 2024
                    </p>
                    <p className="mb-3">
                      <strong>Méthode d'évaluation :</strong> Auto-évaluation
                    </p>
                    <p className="mb-0">
                      <strong>Technologies utilisées :</strong> HTML5, CSS3, JavaScript (React/Next.js), WAI-ARIA
                    </p>
                  </div>
                </section>

                {/* Contenus accessibles */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    3. Contenus accessibles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Navigation au clavier</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Toutes les fonctionnalités sont accessibles au clavier
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Contrastes de couleurs</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Ratio de contraste conforme WCAG AA
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Textes alternatifs</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Images décoratives et informatives correctement balisées
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Structure sémantique</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Hiérarchie de titres cohérente (H1-H6)
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Liens explicites</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Tous les liens ont un intitulé explicite
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-neutral-900">Responsive design</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Adaptation mobile, tablette et desktop
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contenus non accessibles */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    4. Contenus non accessibles
                  </h2>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.1 Non-conformités
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-200">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Vidéos YouTube intégrées</h4>
                          <p className="text-sm text-neutral-600">
                            Les vidéos YouTube peuvent ne pas avoir de transcription textuelle complète.
                            Nous travaillons à l'ajout de sous-titres sur toutes nos vidéos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-200">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Widget Doctolib</h4>
                          <p className="text-sm text-neutral-600">
                            Le module de prise de rendez-vous Doctolib est un service tiers dont nous
                            ne maîtrisons pas l'accessibilité.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.2 Dérogations pour charge disproportionnée
                  </h3>
                  <p className="mb-4">Aucune dérogation pour charge disproportionnée n'est invoquée.</p>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.3 Contenus non soumis à l'obligation d'accessibilité
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contenus de services tiers (YouTube, Google Maps, Doctolib)</li>
                    <li>Archives antérieures à septembre 2019</li>
                  </ul>
                </section>

                {/* Technologies d'assistance */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    5. Technologies d'assistance compatibles
                  </h2>
                  <p className="mb-4">Le site est compatible avec les technologies d'assistance suivantes :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Monitor className="w-5 h-5 text-brand" />
                        <h4 className="font-semibold text-neutral-900">Lecteurs d'écran</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        NVDA, JAWS, VoiceOver (macOS/iOS), TalkBack (Android)
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Smartphone className="w-5 h-5 text-brand" />
                        <h4 className="font-semibold text-neutral-900">Navigation vocale</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Dragon NaturallySpeaking, dictée vocale native
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Eye className="w-5 h-5 text-brand" />
                        <h4 className="font-semibold text-neutral-900">Loupes d'écran</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        ZoomText, loupe Windows, Zoom macOS
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Hand className="w-5 h-5 text-brand" />
                        <h4 className="font-semibold text-neutral-900">Navigation alternative</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Clavier, trackpad, contacteur, joystick
                      </p>
                    </div>
                  </div>
                </section>

                {/* Outils utilisés */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    6. Outils pour évaluer l'accessibilité
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Assistant RGAA (extension navigateur)</li>
                    <li>Axe DevTools (analyse automatisée)</li>
                    <li>Wave (Web Accessibility Evaluation Tool)</li>
                    <li>Lighthouse (Google Chrome DevTools)</li>
                    <li>Tests manuels au clavier et avec lecteurs d'écran</li>
                  </ul>
                </section>

                {/* Amélioration continue */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    7. Amélioration et contact
                  </h2>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    7.1 Plan d'action
                  </h3>
                  <p className="mb-4">
                    Nous nous engageons à améliorer continuellement l'accessibilité de notre site.
                    Voici nos actions prévues :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Ajout de sous-titres sur toutes les vidéos (Q1 2025)</li>
                    <li>Audit RGAA complet par un expert tiers (2025)</li>
                    <li>Formation continue de l'équipe aux bonnes pratiques d'accessibilité</li>
                    <li>Tests réguliers avec des utilisateurs en situation de handicap</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    7.2 Signaler un problème d'accessibilité
                  </h3>
                  <div className="bg-brand-subtle rounded-xl p-6 border border-brand/20">
                    <p className="mb-4">
                      Si vous rencontrez un problème d'accessibilité sur notre site, n'hésitez pas à nous le signaler :
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2">
                        <span className="text-brand">✉️</span>
                        <span><strong>Email :</strong> dr.baron.nadine@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">📞</span>
                        <span><strong>Téléphone :</strong> 05 62 14 04 10</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand">📮</span>
                        <span><strong>Courrier :</strong> 286 avenue de Lardenne, 31100 Toulouse</span>
                      </li>
                    </ul>
                    <p className="text-sm text-neutral-600 mb-0">
                      Nous nous engageons à vous répondre sous <strong>15 jours ouvrés</strong> et à apporter
                      une solution d'accessibilité ou une alternative.
                    </p>
                  </div>
                </section>

                {/* Voies de recours */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    8. Voies de recours
                  </h2>
                  <p className="mb-4">
                    Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou
                    une fonctionnalité et que vous nous l'avez signalé sans obtenir de réponse satisfaisante,
                    vous pouvez :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Écrire un message au <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Défenseur des droits</a>
                    </li>
                    <li>
                      Contacter le délégué du Défenseur des droits dans votre région
                    </li>
                    <li>
                      Envoyer un courrier (gratuit, sans affranchissement) :<br />
                      <span className="text-sm text-neutral-600">
                        Défenseur des droits<br />
                        Libre réponse 71120<br />
                        75342 Paris CEDEX 07
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Nos engagements */}
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    Notre engagement pour l'inclusion
                  </h2>
                  <p className="mb-4">
                    La Villa Esthétique croit fermement que l'accès à l'information médicale doit être
                    universel. Nous travaillons chaque jour pour que notre site soit accessible à tous,
                    quelles que soient les capacités de chacun.
                  </p>
                  <p className="text-sm text-neutral-600 mb-4">
                    Vos retours sont précieux pour nous aider à améliorer l'accessibilité de notre site.
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
                    <strong>Déclaration établie le :</strong> Décembre 2024
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
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
