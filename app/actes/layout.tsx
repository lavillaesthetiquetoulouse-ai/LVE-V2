import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitements Médecine Esthétique Toulouse | Botox, Laser, Injections | Dr Baron',
  description: 'Tous nos soins de médecine esthétique à Toulouse : botox, acide hyaluronique, épilation laser Clarity 2, Morpheus 8, peeling, cryolipolyse. Dr Nadine Baron ⭐ 4.9/5 · RDV en 48h.',
  keywords: 'médecine esthétique Toulouse, injections acide hyaluronique, épilation laser Toulouse, Morpheus 8, HydraFacial, peelings médicaux, SCULPTRA, HIFU, Dr Nadine Baron',
  alternates: {
    canonical: 'https://lavillaesthetique-toulouse.com/actes/'
  }
};

export default function ActesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}