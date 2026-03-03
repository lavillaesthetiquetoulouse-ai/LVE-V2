import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - La Villa Esthétique | Dr Nadine Baron',
  description: 'Mentions légales du cabinet de médecine esthétique La Villa Esthétique à Toulouse, Dr Nadine Baron.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/mentions-legales/'
  }
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Mentions Légales' }]} />
        </div>

        <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-outfit font-bold text-neutral-900 mb-8">
                Mentions Légales
              </h1>

              <div className="prose prose-neutral max-w-none space-y-8">

                {/* Éditeur du site */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    1. Éditeur du site
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Raison sociale :</strong> La Villa Esthétique</p>
                    <p className="mb-2"><strong>Forme juridique :</strong> Cabinet médical</p>
                    <p className="mb-2"><strong>Représentant légal :</strong> Dr Nadine Baron</p>
                    <p className="mb-2"><strong>Adresse :</strong> 286 avenue de Lardenne, 31100 Toulouse</p>
                    <p className="mb-2"><strong>Téléphone :</strong> 05 62 14 04 10</p>
                    <p className="mb-2"><strong>Email :</strong> dr.baron.nadine@gmail.com</p>
                    <p className="mb-2"><strong>N° RPPS :</strong> [Numéro RPPS du médecin]</p>
                    <p className="mb-2"><strong>N° ADELI :</strong> [Numéro ADELI]</p>
                  </div>
                </section>

                {/* Directeur de publication */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    2. Directeur de publication
                  </h2>
                  <p>Dr Nadine Baron, Docteur en Médecine</p>
                  <p className="text-sm text-neutral-600 mt-2">
                    Médecin qualifié inscrit au Conseil de l'Ordre des Médecins
                  </p>
                </section>

                {/* Hébergeur */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    3. Hébergeur du site
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Raison sociale :</strong> Netlify, Inc.</p>
                    <p className="mb-2"><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</p>
                    <p className="mb-2"><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.netlify.com</a></p>
                  </div>
                </section>

                {/* Conception et réalisation */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    4. Conception et réalisation
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Agence :</strong> WebFitYou</p>
                    <p className="mb-2"><strong>Site web :</strong> <a href="https://www.webfityou.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.webfityou.com</a></p>
                  </div>
                </section>

                {/* Propriété intellectuelle */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    5. Propriété intellectuelle
                  </h2>
                  <p className="mb-4">
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes,
                    icônes, sons, logiciels) est la propriété exclusive de La Villa Esthétique ou
                    de ses partenaires, sauf mention contraire.
                  </p>
                  <p className="mb-4">
                    Toute reproduction, représentation, modification, publication, transmission,
                    dénaturation totale ou partielle du site ou de son contenu, par quelque procédé
                    que ce soit, et sur quelque support que ce soit, est interdite sans l'autorisation
                    écrite préalable de La Villa Esthétique.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Toute exploitation non autorisée du site ou de son contenu engagerait la
                    responsabilité de l'utilisateur et constituerait une contrefaçon sanctionnée
                    par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </section>

                {/* Protection des données */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    6. Protection des données personnelles
                  </h2>
                  <p className="mb-4">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à
                    la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un
                    droit d'accès, de rectification, de suppression et d'opposition aux données
                    personnelles vous concernant.
                  </p>
                  <p className="mb-4">
                    Pour exercer ces droits, vous pouvez nous contacter :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Par email : dr.baron.nadine@gmail.com</li>
                    <li>Par courrier : 286 avenue de Lardenne, 31100 Toulouse</li>
                  </ul>
                  <p className="mt-4">
                    Pour plus d'informations, consultez notre{' '}
                    <a href="/politique-de-confidentialite/" className="text-brand hover:underline">
                      politique de confidentialité
                    </a>.
                  </p>
                </section>

                {/* Cookies */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    7. Cookies
                  </h2>
                  <p className="mb-4">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation et
                    réaliser des statistiques de visites.
                  </p>
                  <p>
                    Pour en savoir plus, consultez notre{' '}
                    <a href="/cookies/" className="text-brand hover:underline">
                      politique de gestion des cookies
                    </a>.
                  </p>
                </section>

                {/* Responsabilité */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    8. Limitation de responsabilité
                  </h2>
                  <p className="mb-4">
                    Les informations présentes sur ce site sont fournies à titre indicatif et ne
                    sauraient se substituer à une consultation médicale personnalisée.
                  </p>
                  <p className="mb-4">
                    La Villa Esthétique ne saurait être tenue responsable des dommages directs ou
                    indirects résultant de l'accès au site ou de l'utilisation de celui-ci.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Le cabinet se réserve le droit de modifier ou de corriger le contenu de ce site
                    à tout moment et sans préavis.
                  </p>
                </section>

                {/* Liens hypertextes */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    9. Liens hypertextes
                  </h2>
                  <p className="mb-4">
                    Ce site peut contenir des liens vers des sites externes. La Villa Esthétique
                    n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                    leur contenu.
                  </p>
                  <p className="text-sm text-neutral-600">
                    La mise en place de liens hypertextes vers ce site nécessite une autorisation
                    préalable écrite de La Villa Esthétique.
                  </p>
                </section>

                {/* Droit applicable */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    10. Droit applicable et juridiction
                  </h2>
                  <p className="mb-4">
                    Les présentes mentions légales sont soumises au droit français.
                  </p>
                  <p className="text-sm text-neutral-600">
                    En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                </section>

                {/* Déontologie médicale */}
                <section>
                  <h2 className="text-2xl font-outfit font-semibold text-neutral-900 mb-4">
                    11. Déontologie médicale
                  </h2>
                  <p className="mb-4">
                    Le Dr Nadine Baron est soumis au Code de Déontologie Médicale et inscrit au
                    Conseil de l'Ordre des Médecins de Haute-Garonne.
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <p className="mb-2"><strong>Conseil Départemental de l'Ordre des Médecins :</strong></p>
                    <p className="mb-2">Haute-Garonne (31)</p>
                    <p className="mb-2">Site web : <a href="https://www.conseil-national.medecin.fr/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.conseil-national.medecin.fr</a></p>
                  </div>
                </section>

                {/* Date de mise à jour */}
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
