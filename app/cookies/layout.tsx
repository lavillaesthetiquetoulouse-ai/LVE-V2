import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestion des Cookies - La Villa Esthétique',
  description: 'Politique de gestion des cookies du site La Villa Esthétique. Informations sur les cookies utilisés et comment les gérer.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/cookies/'
  }
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
