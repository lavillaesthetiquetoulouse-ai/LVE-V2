'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Calendar, ArrowRight, Clock, Target, CheckCircle, Star, Shield, Thermometer, AlertCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import { FAQ } from '@/components/faq';

interface SoinData {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  details: string[];
  duree: string;
  seances: string;
  resultats: string;
  icon_small: React.ReactElement;
  zones?: string[];
  categories?: string[];
  blogLink?: string;
  longDescription?: string;
}

const soinsData: Record<string, SoinData> = {
  'injection-radiesse': {
    title: 'Injection de Radiesse',
    description: 'Inducteurs de collagène pour un rajeunissement naturel et durable',
    icon: <OptimizedImage src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Radiesse" width={24} height={24} className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Stimulation naturelle de la production de collagène',
      'Comblement des rides profondes et restauration des volumes',
      'Résultats immédiats et amélioration progressive',
      'Effet lifting naturel sans chirurgie',
      'Durée d\'action prolongée (6-12 mois)',
      'Produit résorbable et biocompatible'
    ],
    duree: '30 à 45 minutes',
    seances: 'Renouvellement tous les 6-12 mois',
    resultats: 'Effet immédiat, amélioration progressive sur 3 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Radiesse" className="w-6 h-6" />,
    longDescription: "Le Radiesse® est un produit injectable révolutionnaire qui agit comme un véritable inducteur de collagène. Composé d'hydroxyapatite de calcium (CaHA), le Radiesse® stimule naturellement la production de collagène par votre organisme, offrant ainsi des résultats à la fois immédiats et durables. Ce traitement de médecine esthétique est idéal pour restaurer les volumes perdus avec l'âge, corriger les rides profondes et redéfinir l'ovale du visage. Le Dr Nadine Baron utilise cette technique innovante pour obtenir un effet lifting naturel sans chirurgie. Les résultats se développent progressivement sur plusieurs mois, pour un rajeunissement harmonieux et subtil du visage."
  },
  'injection-acide-hyaluronique': {
    title: 'Injection d\'Acide Hyaluronique',
    description: 'Hydratation profonde et restauration des volumes pour un visage harmonieux',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection.png" alt="Injection Acide Hyaluronique" className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    details: [
      'Comblement des rides et sillons nasogéniens',
      'Augmentation et redéfinition des lèvres',
      'Restauration des volumes des pommettes et du menton',
      'Hydratation profonde de la peau (skinboosters)',
      'Produits résorbables de haute qualité, certifiés CE',
      'Résultats immédiats avec amélioration progressive'
    ],
    duree: '30 à 45 minutes',
    seances: 'Durée 6 à 12 mois selon le produit',
    resultats: 'Effet immédiat, résultat optimal sous 15 jours',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection.png" alt="Injection Acide Hyaluronique" className="w-6 h-6" />,
    longDescription: "L'acide hyaluronique est la molécule star de la médecine esthétique moderne. Naturellement présent dans notre organisme, il possède une capacité exceptionnelle à retenir l'eau, assurant hydratation et volume à la peau. Avec l'âge, notre production d'acide hyaluronique diminue, entraînant l'apparition de rides et une perte de volume. Les injections d'acide hyaluronique permettent de corriger ces signes du vieillissement de manière naturelle et progressive. Le Dr Nadine Baron utilise exclusivement des produits de dernière génération, certifiés CE et parfaitement résorbables. Que ce soit pour combler les sillons nasogéniens, redessiner l'ovale du visage, augmenter les lèvres ou simplement hydrater la peau en profondeur (skinboosters), l'acide hyaluronique offre des résultats immédiats et harmonieux, pour un visage rajeuni et naturel."
  },
  'injection-polynucleotides': {
    title: 'Injection de Polynucléotides',
    description: 'Régénération cellulaire avancée pour une peau revitalisée',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Polynucléotides" className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Stimulation de la régénération cellulaire naturelle',
      'Amélioration de la qualité et texture de la peau',
      'Hydratation profonde et durable',
      'Réduction des signes de vieillissement',
      'Traitement des cernes et de la fatigue cutanée',
      'Protocole personnalisé selon les besoins'
    ],
    duree: '30 à 45 minutes',
    seances: '3 à 4 séances espacées de 3-4 semaines',
    resultats: 'Amélioration progressive de la qualité de peau',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Polynucléotides" className="w-6 h-6" />,
    longDescription: "Les polynucléotides représentent une avancée majeure en médecine esthétique régénérative. Ces molécules naturelles, dérivées d'ADN hautement purifié, stimulent les mécanismes naturels de réparation et de régénération cellulaire de la peau. Le traitement par polynucléotides améliore significativement la qualité, la texture et l'hydratation de la peau. Il est particulièrement efficace pour traiter les cernes, la fatigue cutanée et les premiers signes de vieillissement. Le Dr Nadine Baron établit un protocole personnalisé selon vos besoins spécifiques, généralement composé de 3 à 4 séances espacées de quelques semaines. Les résultats se développent progressivement, révélant une peau visiblement plus saine, plus lumineuse et mieux hydratée."
  },
  'injection-exosomes': {
    title: 'Injection d\'Exosomes',
    description: 'Thérapie régénérative de pointe pour un rajeunissement cellulaire optimal',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(2).png" alt="Injection Exosomes" className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500',
    details: [
      'Thérapie régénérative de dernière génération',
      'Stimulation intense de la régénération cellulaire',
      'Amélioration de l\'élasticité et fermeté de la peau',
      'Réduction des rides et ridules',
      'Éclat et luminosité retrouvés',
      'Traitement anti-âge révolutionnaire'
    ],
    duree: '45 à 60 minutes',
    seances: '3 à 6 séances selon les besoins',
    resultats: 'Régénération visible dès 2-3 semaines',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Morpheus8%20machine-dr-baron-la-villa-esthetique.png" alt="Injection Exosomes" className="w-6 h-6" />,
    longDescription: "Les exosomes représentent le summum de la médecine esthétique régénérative. Ces vésicules microscopiques, véritables messagers cellulaires, contiennent des protéines, des facteurs de croissance et des acides nucléiques qui stimulent intensément la régénération et la réparation des tissus cutanés. Cette thérapie de dernière génération permet d'obtenir des résultats spectaculaires en termes d'amélioration de la qualité de peau, de réduction des rides et ridules, et de restauration de l'éclat et de la fermeté du visage. Le Dr Nadine Baron propose cette technique révolutionnaire pour un rajeunissement cellulaire optimal. Les premiers résultats sont visibles dès 2 à 3 semaines, avec une amélioration continue sur plusieurs mois."
  },
  'injection-sculptra': {
    title: 'SCULPTRA® - Médecine Régénérative',
    description: 'Stimulation naturelle du collagène pour un rajeunissement progressif et durable',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Sculptra" className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    details: [
      'Acide poly-L-lactique (PLLA) biocompatible et biodégradable',
      'Stimulation de la production endogène de collagène',
      'Amélioration progressive et naturelle de la qualité des tissus',
      'Traitement de la perte de volume et du relâchement cutané',
      'Résultats durables jusqu\'à 2 ans ou plus',
      'Approche globale de médecine régénérative',
      'Visage : tempes, joues, pommettes, sillons, ovale',
      'Corps : cou, décolleté, fesses, hanches, cuisses'
    ],
    duree: '45 à 60 minutes',
    seances: '2 à 3 séances espacées de plusieurs semaines',
    resultats: 'Amélioration progressive sur plusieurs semaines, durée 2 ans+',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/injection%20(1).png" alt="Injection Sculptra" className="w-6 h-6" />,
    longDescription: "SCULPTRA® est bien plus qu'un simple produit de comblement : c'est une véritable thérapie de médecine régénérative. Composé d'acide poly-L-lactique (PLLA), SCULPTRA® stimule progressivement et naturellement la production de collagène par votre organisme. Contrairement aux produits de comblement classiques qui apportent un volume immédiat, SCULPTRA® agit en profondeur pour restaurer le capital collagène perdu avec l'âge. Les résultats se développent progressivement sur plusieurs semaines et peuvent durer jusqu'à 2 ans ou plus. Le Dr Nadine Baron utilise SCULPTRA® pour traiter la perte de volume et le relâchement cutané au niveau du visage (tempes, joues, pommettes, sillons, ovale) mais également sur le corps (cou, décolleté, fesses, hanches, cuisses). Cette approche globale de rajeunissement offre des résultats naturels et durables, pour une amélioration progressive et harmonieuse de votre apparence."
  },
  'morpheus-8': {
    title: 'Morpheus 8 Visage et Corps',
    description: 'Microneedling RF révolutionnaire pour raffermir et retendre la peau',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/traitement-facial.png" alt="Morpheus 8" className="w-6 h-6" />,
    color: 'from-purple-600 to-blue-600',
    details: [
      'Microneedling avec radiofréquence fractionnée',
      'Stimulation profonde du collagène et de l\'élastine',
      'Traitement visage et corps (3D pour le corps)',
      'Raffermissement et retension cutanée',
      'Amélioration de la texture et des cicatrices',
      'Résultats progressifs et durables'
    ],
    duree: '60 à 90 minutes',
    seances: '3 à 6 séances espacées de 4-6 semaines',
    resultats: 'Raffermissement progressif sur 3-6 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/traitement-facial.png" alt="Morpheus 8" className="w-6 h-6" />,
    longDescription: "Morpheus 8 est la technologie révolutionnaire qui combine le microneedling et la radiofréquence fractionnée pour un raffermissement cutané en profondeur. Cette technique de pointe permet de traiter le relâchement cutané, d'améliorer la texture de la peau et de réduire l'apparence des cicatrices, aussi bien sur le visage que sur le corps. Les micro-aiguilles pénètrent dans les couches profondes de la peau et délivrent de l'énergie par radiofréquence, stimulant ainsi la production de collagène et d'élastine. Le Dr Nadine Baron propose Morpheus 8 pour le visage et Morpheus Body (3D) pour les zones corporelles nécessitant un raffermissement. Les résultats sont progressifs et spectaculaires, avec une amélioration continue sur 3 à 6 mois. Cette technique est particulièrement efficace pour traiter le relâchement de l'ovale du visage, les bajoues, le cou, mais également l'abdomen, les bras et les cuisses."
  },
  'hifu-focus-dual': {
    title: 'HIFU Focus Dual DELEO',
    description: 'Lifting médical non chirurgical par ultrasons focalisés de haute intensité',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Laser%20CO2%20machine%20-%20dr-%20baron.png" alt="HIFU Focus Dual" className="w-6 h-6" />,
    color: 'from-violet-600 to-fuchsia-600',
    details: [
      'Ultrasons focalisés de haute intensité (HIFU)',
      'Effet lifting sans chirurgie, sans cicatrice',
      'Action ciblée sur la qualité cutanée et la fermeté',
      'Stimulation des structures de soutien du visage',
      'Contraction immédiate + production progressive de collagène',
      'Traitement du relâchement : ovale, bajoues, cou',
      'Sans éviction sociale, reprise immédiate des activités',
      'Résultats naturels, subtils et évolutifs'
    ],
    duree: '30 à 90 minutes selon les zones',
    seances: '1 à 2 séances selon les besoins',
    resultats: 'Effet tenseur immédiat, résultats optimaux sous 2-3 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Laser%20CO2%20machine%20-%20dr-%20baron.png" alt="HIFU Focus Dual" className="w-6 h-6" />,
    longDescription: "Le HIFU Focus Dual DELEO représente l'alternative non chirurgicale au lifting traditionnel. Cette technologie révolutionnaire utilise des ultrasons focalisés de haute intensité (HIFU) pour agir en profondeur sur les structures de soutien du visage, sans incision ni cicatrice. Les ultrasons créent des points de coagulation thermique dans les couches profondes de la peau, déclenchant une contraction immédiate des tissus et stimulant la production de collagène neuf. Le Dr Nadine Baron utilise le HIFU Focus Dual pour traiter efficacement le relâchement de l'ovale du visage, les bajoues et le cou. Le grand avantage de cette technique est l'absence totale d'éviction sociale : vous pouvez reprendre vos activités immédiatement après la séance. Les résultats sont à la fois immédiats (effet tenseur) et progressifs (stimulation du collagène sur 2-3 mois), pour un rajeunissement naturel et subtil du visage."
  },
  'detatouage': {
    title: 'Détatouage Laser',
    description: 'Effacement progressif et sécurisé des tatouages par laser Q-switched',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/laser%20(1).png" alt="Détatouage Laser" className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    details: [
      'Laser Q-switched multi-longueurs d\'onde',
      'Traitement efficace sur toutes les couleurs d\'encre',
      'Protocole adapté selon la taille et l\'âge du tatouage',
      'Effacement progressif respectant l\'intégrité de la peau',
      'Suivi personnalisé tout au long du processus',
      'Conseils post-traitement pour optimiser la cicatrisation'
    ],
    duree: '15 à 45 minutes selon la taille',
    seances: '5 à 12 séances selon le tatouage',
    resultats: 'Éclaircissement progressif, effacement possible',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/laser%20(1).png" alt="Détatouage Laser" className="w-6 h-6" />,
    longDescription: "Le détatouage laser est la technique de référence pour effacer progressivement et en toute sécurité les tatouages dont vous ne souhaitez plus. Le laser Q-switched émet des impulsions ultra-courtes qui fragmentent les pigments d'encre en microparticules, naturellement éliminées par le système lymphatique de l'organisme. Le cabinet La Villa Esthétique dispose d'un laser Q-switched multi-longueurs d'onde permettant de traiter efficacement toutes les couleurs d'encre (noir, bleu, vert, rouge, etc.). Le Dr Nadine Baron établit un protocole personnalisé en fonction de la taille du tatouage, de son âge, des couleurs utilisées et de votre type de peau. L'effacement se fait progressivement sur plusieurs séances (généralement 5 à 12 séances espacées de 6 à 8 semaines), respectant l'intégrité de votre peau. Un suivi attentif et des conseils post-traitement vous sont fournis pour optimiser la cicatrisation et les résultats."
  },
  'hydrafacial': {
    title: 'HydraFacial',
    description: 'Soin révolutionnaire 3-en-1 : nettoyage, exfoliation et hydratation',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Hydrafacial%20machine.png" alt="HydraFacial" className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    details: [
      'Nettoyage en profondeur et exfoliation douce',
      'Extraction des impuretés par aspiration douce',
      'Infusion de sérums personnalisés selon votre peau',
      'Hydratation intense avec acide hyaluronique',
      'Résultats immédiats : peau éclatante et hydratée',
      'Aucune éviction sociale, reprise d\'activité immédiate'
    ],
    duree: '45 à 60 minutes',
    seances: 'Séance unique ou cure selon les besoins',
    resultats: 'Éclat immédiat, peau lissée et hydratée',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Hydrafacial%20machine.png" alt="HydraFacial" className="w-6 h-6" />,
    longDescription: "L'HydraFacial est le soin du visage de nouvelle génération qui révolutionne l'approche des soins esthétiques. Ce traitement médical 3-en-1 combine le nettoyage en profondeur, l'exfoliation douce et l'hydratation intense en une seule séance. La technologie brevetée Vortex-Fusion permet d'extraire les impuretés et les points noirs par aspiration douce, tout en infusant simultanément des sérums ultra-concentrés personnalisés selon votre type de peau. Le soin HydraFacial s'adapte à tous les types de peau et à toutes les problématiques : peau déshydratée, terne, grasse, acnéique, mature, ou présentant des signes de vieillissement. Les résultats sont visibles immédiatement : votre peau est éclatante, lissée, hydratée et visiblement rajeunie. Sans aucune éviction sociale, vous pouvez reprendre vos activités immédiatement après la séance. Le Dr Nadine Baron recommande une séance ponctuelle avant un événement important, ou une cure de plusieurs séances pour des résultats optimaux et durables."
  },
  'cryolipolyse': {
    title: 'Cryolipolyse',
    description: 'Destruction des cellules graisseuses par le froid pour sculpter la silhouette',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/body-ache.png" alt="Cryolipolyse" className="w-6 h-6" />,
    color: 'from-blue-600 to-indigo-600',
    details: [
      'Destruction des cellules graisseuses par cristallisation à -10°C',
      'Traitement des bourrelets localisés : ventre, hanches, cuisses, bras',
      'Technique non invasive sans anesthésie ni éviction sociale',
      'Élimination naturelle des cellules détruites par le système lymphatique',
      'Résultats progressifs visibles dès 3 semaines',
      'Réduction de 20 à 25% de la masse graisseuse par séance'
    ],
    duree: '60 à 90 minutes par zone',
    seances: 'Une à quatre séances par zone selon les besoins',
    resultats: 'Réduction visible des bourrelets sous 2-3 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/body-ache.png" alt="Cryolipolyse" className="w-5 h-5" />,
    longDescription: "La cryolipolyse est la technique de référence pour éliminer définitivement les amas graisseux localisés sans chirurgie, sans anesthésie et sans éviction sociale. Le principe est simple mais redoutablement efficace : le froid contrôlé (environ -10°C) cristallise les cellules graisseuses (adipocytes) qui sont ensuite naturellement éliminées par le système lymphatique de l'organisme au fil des semaines. Le Dr Nadine Baron utilise cette technique pour traiter les bourrelets rebelles qui résistent au régime et à l'exercice physique : poignées d'amour, ventre, culotte de cheval, face interne des cuisses, bras, dos. Chaque séance permet de réduire de 20 à 25% la masse graisseuse de la zone traitée. Les résultats sont progressifs et visibles dès 3 semaines, avec un résultat optimal sous 2 à 3 mois. Selon l'importance de l'amas graisseux et vos objectifs, une à quatre séances peuvent être nécessaires. La cryolipolyse permet de sculpter durablement votre silhouette, pour un résultat naturel et harmonieux."
  },
  'cristal-fit': {
    title: 'Cristal Fit',
    description: 'Remodelage corporel par ondes électromagnétiques pour tonifier et sculpter',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Cristal%20fit%20machine.png" alt="Cristal Fit" className="w-6 h-6" />,
    color: 'from-green-500 to-teal-500',
    details: [
      'Stimulation musculaire par ondes électromagnétiques',
      'Tonification et renforcement musculaire',
      'Remodelage de la silhouette sans effort',
      'Traitement des zones : abdomen, fessiers, bras, cuisses',
      'Équivalent à 20 000 contractions musculaires par séance',
      'Résultats visibles dès les premières séances'
    ],
    duree: '30 minutes par zone',
    seances: '6 à 8 séances espacées de 2-3 jours',
    resultats: 'Tonification visible dès 2-3 semaines',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Cristal%20fit%20machine.png" alt="Cristal Fit" className="w-6 h-6" />,
    longDescription: "Cristal Fit est la technologie révolutionnaire qui permet de tonifier et renforcer vos muscles sans le moindre effort physique. Grâce aux ondes électromagnétiques de haute intensité (HIFEM), cette technique déclenche des contractions musculaires supramaximales impossibles à obtenir par l'exercice physique volontaire. Une séance de 30 minutes équivaut à environ 20 000 contractions musculaires ! Le Dr Nadine Baron utilise Cristal Fit pour sculpter et raffermir l'abdomen, les fessiers, les bras et les cuisses. Cette technique est idéale pour les personnes souhaitant renforcer leur masse musculaire, améliorer leur tonicité et redessiner leur silhouette, sans avoir à fournir d'effort physique intense. Le protocole standard comprend 6 à 8 séances espacées de 2 à 3 jours. Les résultats sont visibles dès les premières semaines : muscles renforcés, silhouette remodelée, peau plus ferme. Cristal Fit peut être combiné avec la cryolipolyse pour un remodelage corporel complet : élimination de la graisse et renforcement musculaire."
  },
  'epilation-clarity-2': {
    title: 'Épilation Laser Clarity 2',
    description: 'Épilation définitive avec le laser Clarity 2, technologie de pointe',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Laser Clarity 2" className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    details: [
      'Laser Clarity 2 dernière génération',
      'Traitement de toutes les zones du corps',
      'Efficace sur tous les phototypes de peau (I à VI)',
      'Réduction progressive de 90-95% de la pilosité',
      'Refroidissement intégré pour un confort optimal',
      'Protocole personnalisé selon votre type de peau'
    ],
    duree: '15 minutes à 1 heure selon la zone',
    seances: '6 à 8 séances en moyenne',
    resultats: 'Réduction progressive visible dès la 2ème séance',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Laser Clarity 2" className="w-5 h-5" />,
    longDescription: "L'épilation laser Clarity 2 représente le gold standard de l'épilation définitive. Cette technologie de dernière génération combine deux longueurs d'onde (Alexandrite 755 nm et Nd:YAG 1064 nm) permettant de traiter efficacement et en toute sécurité tous les types de peau et de poil. Le laser Clarity 2 détruit le follicule pileux en ciblant la mélanine contenue dans le poil, empêchant ainsi sa repousse définitive. Le Dr Nadine Baron utilise cette technologie pour traiter toutes les zones du corps : visage (lèvre supérieure, menton, joues), aisselles, maillot (classique, échancré, intégral), jambes (demi-jambes, jambes complètes), bras, dos, torse. Le système de refroidissement intégré Zimmer assure un confort optimal pendant la séance. Le protocole standard comprend 6 à 8 séances espacées de 4 à 8 semaines selon la zone traitée, permettant d'obtenir une réduction définitive de 90 à 95% de la pilosité. Les résultats sont progressifs et visibles dès les premières séances."
  },
  'epilation-apilus': {
    title: 'Épilation Électrique APILUS',
    description: 'Épilation définitive de précision par électrolyse médicale',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Électrique APILUS" className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    details: [
      'Technique d\'épilation définitive par électrolyse',
      'Idéale pour les poils fins, blancs, blonds ou roux',
      'Traitement des zones sensibles : sourcils, lèvre supérieure',
      'Épilation des poils résiduels après traitement laser',
      'Précision maximale pour un résultat parfait',
      'Séances courtes et ciblées pour un confort optimal'
    ],
    duree: '15 à 30 minutes',
    seances: 'Variable selon la zone',
    resultats: 'Épilation définitive progressive',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Épilation Électrique APILUS" className="w-5 h-5" />,
    longDescription: "L'épilation électrique APILUS est la technique d'épilation définitive de précision par excellence. Contrairement au laser qui cible la mélanine, l'électrolyse détruit le follicule pileux par un courant électrique de très faible intensité, quelle que soit la couleur du poil. Cette technique est donc particulièrement indiquée pour les poils fins, blancs, blonds ou roux que le laser ne peut pas traiter efficacement. Le Dr Nadine Baron utilise l'appareil APILUS, référence mondiale en matière d'électrolyse médicale, pour traiter avec une précision maximale les zones sensibles (sourcils, lèvre supérieure, menton) ou pour éliminer les poils résiduels après un traitement laser. L'épilation électrique est la seule technique reconnue comme véritablement définitive par les autorités sanitaires. Les séances sont courtes et ciblées (15 à 30 minutes), et le nombre de séances varie selon la zone à traiter et la densité pileuse. Cette technique complémentaire au laser permet d'obtenir une épilation définitive totale et parfaite."
  },
  'lumiere-pulsee-lumecca': {
    title: 'Lumière Pulsée LUMECCA',
    description: 'Traitement des taches pigmentaires et lésions vasculaires par IPL',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/epilation%20(1).png" alt="Lumière Pulsée LUMECCA" className="w-6 h-6" />,
    color: 'from-yellow-400 to-orange-400',
    details: [
      'IPL LUMECCA dernière génération',
      'Traitement des taches pigmentaires et lentigos',
      'Élimination des lésions vasculaires superficielles',
      'Amélioration de la texture et de l\'éclat de la peau',
      'Protocole adapté selon le type de lésions',
      'Résultats visibles dès la première séance'
    ],
    duree: '30 à 45 minutes',
    seances: '1 à 3 séances selon les lésions',
    resultats: 'Amélioration visible dès la première séance',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Traitement%20laser%20carbone-CO2-machine-dr-baron-la-villa-esthetique.png" alt="Lumière Pulsée LUMECCA" className="w-5 h-5" />,
    longDescription: "La Lumière Pulsée Intense (IPL) LUMECCA est la technologie de référence pour traiter les taches pigmentaires, les lésions vasculaires et améliorer globalement la qualité de la peau. LUMECCA est la lampe flash IPL la plus puissante du marché, offrant des résultats spectaculaires en un minimum de séances. Cette technologie utilise un large spectre de lumière filtrée pour cibler sélectivement la mélanine (taches brunes, lentigos solaires) et l'hémoglobine (rougeurs, couperose, angiomes). Le Dr Nadine Baron traite avec LUMECCA les taches de vieillissement, les taches solaires, les lentigos, la couperose, les petits vaisseaux dilatés, et améliore globalement la texture et l'éclat de la peau. Le traitement est rapide (30 à 45 minutes) et généralement 1 à 3 séances suffisent pour obtenir des résultats très satisfaisants. Les taches pigmentaires foncent dans les jours suivant la séance avant de s'éliminer progressivement, révélant une peau plus claire, plus uniforme et rajeunie."
  },
  'laser-co2-deka': {
    title: 'Laser CO2 DEKA',
    description: 'Resurfaçage cutané et traitement des cicatrices par laser CO2 fractionné',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Traitement%20laser%20carbone-CO2-machine-dr-baron-la-villa-esthetique.png" alt="Laser CO2 DEKA" className="w-6 h-6" />,
    color: 'from-red-600 to-pink-600',
    details: [
      'Laser CO2 fractionné DEKA dernière génération',
      'Resurfaçage cutané pour rajeunissement',
      'Traitement des cicatrices d\'acné et chirurgicales',
      'Amélioration des rides et ridules',
      'Stimulation profonde du collagène',
      'Résultats durables et spectaculaires'
    ],
    duree: '45 à 60 minutes',
    seances: '1 à 3 séances selon les besoins',
    resultats: 'Amélioration progressive sur 3-6 mois',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Laser%20CO2%20machine%20-%20dr-%20baron.png" alt="Laser CO2 DEKA" className="w-5 h-5" />,
    longDescription: "Le laser CO2 fractionné DEKA est le traitement de référence pour le resurfaçage cutané et le rajeunissement en profondeur de la peau. Cette technologie de pointe crée des micro-colonnes de coagulation thermique dans la peau, stimulant intensément la production de collagène neuf et le renouvellement cellulaire. Le laser CO2 fractionné est particulièrement efficace pour traiter les cicatrices d'acné, les cicatrices chirurgicales, les rides et ridules profondes, les pores dilatés, les vergetures et pour obtenir un rajeunissement global du visage. Le Dr Nadine Baron ajuste précisément les paramètres du laser (profondeur, densité, puissance) selon votre type de peau et vos objectifs esthétiques. Le traitement nécessite généralement 1 à 3 séances espacées de plusieurs mois. Une éviction sociale de quelques jours est à prévoir (rougeurs et desquamation). Les résultats sont progressifs et spectaculaires sur 3 à 6 mois : peau lissée, cicatrices atténuées, rides réduites, teint éclatant et unifié. Le laser CO2 fractionné offre un véritable rajeunissement cutané durable."
  },
  'peelings-medicaux': {
    title: 'Peelings Médicaux',
    description: 'Renouvellement cellulaire par exfoliation contrôlée pour une peau éclatante',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/soin-de-la-peau.png" alt="Peelings Médicaux" className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Peelings superficiels et moyens adaptés à votre peau',
      'Amélioration de la texture et de l\'éclat du teint',
      'Traitement des taches pigmentaires et cicatrices d\'acné',
      'Stimulation du renouvellement cellulaire',
      'Protocole personnalisé selon votre phototype',
      'Suivi post-peeling pour optimiser les résultats'
    ],
    duree: '30 à 45 minutes',
    seances: '1 à 3 séances selon le type de peeling',
    resultats: 'Peau plus lisse et éclatante sous 7-15 jours',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/soin-de-la-peau.png" alt="Peelings Médicaux" className="w-5 h-5" />,
    zones: ['visage', 'cou', 'décolleté'],
    categories: ['soins-visage', 'anti-age'],
    blogLink: '/blog/peelings-superficiels-guide-complet/',
    longDescription: "Les peelings médicaux sont des traitements d'exfoliation contrôlée qui stimulent le renouvellement cellulaire et améliorent significativement la qualité de la peau. Le Dr Nadine Baron propose une gamme complète de peelings superficiels et moyens, adaptés à tous les types de peau et à toutes les problématiques : taches pigmentaires, cicatrices d'acné, pores dilatés, teint terne, rides superficielles, relâchement cutané léger. Les peelings superficiels (aux acides de fruits, acide glycolique, acide salicylique) offrent un renouvellement doux de l'épiderme avec une éviction sociale minimale. Les peelings moyens (TCA) agissent plus en profondeur pour des résultats plus spectaculaires. Le protocole est personnalisé selon votre phototype, votre problématique et vos objectifs. Une préparation de la peau et un suivi post-peeling sont essentiels pour optimiser les résultats et éviter les complications. Les résultats apparaissent progressivement : peau plus lisse, teint éclatant et unifié, taches atténuées, texture améliorée."
  },
  'echographie': {
    title: 'Échographie Esthétique',
    description: 'Diagnostic et suivi des traitements par échographie haute résolution',
    icon: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Echographie.png" alt="Échographie Esthétique" className="w-6 h-6" />,
    color: 'from-gray-500 to-blue-500',
    details: [
      'Échographie haute résolution pour diagnostic esthétique',
      'Évaluation de la qualité de la peau et des tissus',
      'Suivi de l\'évolution des traitements',
      'Mesure de l\'épaisseur cutanée et sous-cutanée',
      'Détection des zones à traiter en priorité',
      'Outil de précision pour optimiser les résultats'
    ],
    duree: '20 à 30 minutes',
    seances: 'Selon les besoins de diagnostic',
    resultats: 'Diagnostic précis pour traitement optimal',
    icon_small: <img src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/icones%20medicales/Echographie.png" alt="Échographie Esthétique" className="w-5 h-5" />,
    longDescription: "L'échographie esthétique est un outil de diagnostic de précision qui permet au Dr Nadine Baron d'évaluer avec exactitude la qualité de votre peau et de vos tissus sous-cutanés. Cette technique d'imagerie non invasive utilise des ultrasons pour visualiser en temps réel les différentes couches de la peau (épiderme, derme, hypoderme) et mesurer avec précision leur épaisseur. L'échographie esthétique est particulièrement utile pour diagnostiquer la perte de volume, évaluer le relâchement cutané, mesurer l'épaisseur de la graisse sous-cutanée, détecter les zones à traiter en priorité, et suivre l'évolution des traitements dans le temps. Cet examen permet d'établir un diagnostic précis et objectif, et de personnaliser au mieux votre protocole de traitement. L'échographie esthétique peut être réalisée avant le traitement (diagnostic initial), pendant (ajustement du protocole) et après (évaluation des résultats). C'est un outil précieux pour optimiser vos résultats et assurer un suivi médical rigoureux."
  }
};

const faqData: Record<string, { question: string; answer: string }[]> = {
  'injection-radiesse': [
    { question: "Qu'est-ce que le Radiesse et comment fonctionne-t-il ?", answer: "Le Radiesse® est un produit injectable à base d'hydroxyapatite de calcium qui agit comme inducteur de collagène. Il offre un effet volumateur immédiat tout en stimulant naturellement la production de collagène sur plusieurs mois, pour un rajeunissement progressif et durable." },
    { question: "Combien de temps durent les résultats du Radiesse ?", answer: "Les résultats du Radiesse durent généralement de 12 à 18 mois selon les zones traitées et votre métabolisme. La stimulation collagénique continue d'agir même après la résorption du produit, prolongeant l'effet global." },
    { question: "Est-ce que l'injection de Radiesse est douloureuse ?", answer: "Le traitement est très bien toléré. Le Dr Baron utilise des micro-canules et un produit contenant de la lidocaïne (anesthésique local) pour minimiser l'inconfort. Une légère rougeur ou gonflement peut apparaître dans les 24-48h, sans éviction sociale." },
    { question: "Qui sont les bons candidats pour le Radiesse ?", answer: "Le Radiesse convient aux adultes présentant une perte de volume facial, des rides profondes ou un relâchement cutané. Une consultation préalable avec le Dr Baron est indispensable pour évaluer votre profil et définir le protocole adapté." },
  ],
  'injection-acide-hyaluronique': [
    { question: "L'acide hyaluronique est-il naturel ?", answer: "Oui, l'acide hyaluronique est une substance naturellement présente dans notre organisme, notamment dans la peau et les articulations. Les fillers utilisés en médecine esthétique sont synthétisés en laboratoire mais sont parfaitement biocompatibles et résorbables." },
    { question: "Quelles zones peut-on traiter avec l'acide hyaluronique ?", answer: "L'acide hyaluronique peut traiter de nombreuses zones : rides des lèvres, sillons nasogéniens, vallées des larmes, pommettes, menton, mâchoire, et hydratation globale du visage. Le Dr Baron détermine les zones prioritaires lors de la consultation." },
    { question: "Combien de temps durent les résultats ?", answer: "Selon la zone traitée et le type de filler, les résultats durent de 9 à 18 mois. La zone des lèvres se résorbe plus rapidement (6-9 mois) que les zones de soutien osseux comme les pommettes (12-18 mois)." },
    { question: "Peut-on dissoudre l'acide hyaluronique si je suis insatisfait(e) ?", answer: "Oui, c'est l'un des grands avantages de l'acide hyaluronique. Il peut être dissous à tout moment grâce à la hyaluronidase, une enzyme qui le dégrade rapidement. Cela permet d'ajuster ou corriger le résultat en toute sécurité." },
  ],
  'injection-polynucleotides': [
    { question: "Que sont les polynucléotides et quel est leur effet ?", answer: "Les polynucléotides (PDRN) sont des fragments d'ADN d'origine naturelle qui stimulent la régénération cellulaire, améliorent l'hydratation profonde et renforcent la structure du derme. Ils sont idéaux pour traiter la peau fatiguée, les cernes et le manque d'éclat." },
    { question: "Combien de séances sont nécessaires ?", answer: "Un protocole initial de 3 à 4 séances espacées de 2-3 semaines est recommandé pour obtenir des résultats optimaux. Des séances d'entretien semestrielles permettent de maintenir les bénéfices dans la durée." },
    { question: "Les polynucléotides conviennent-ils à tous les types de peau ?", answer: "Oui, les polynucléotides sont adaptés à tous les types de peau, y compris les peaux sensibles. Ils sont particulièrement recommandés pour les peaux déshydratées, mates, avec des cernes marqués ou présentant des signes de vieillissement précoce." },
    { question: "Y a-t-il des effets secondaires ?", answer: "Les polynucléotides sont très bien tolérés. Des rougeurs légères et un léger gonflement peuvent apparaître dans les 24h suivant l'injection. Ces réactions disparaissent rapidement et il n'y a pas d'éviction sociale." },
  ],
  'injection-exosomes': [
    { question: "Qu'est-ce que la thérapie aux exosomes ?", answer: "Les exosomes sont de minuscules vésicules extracellulaires chargées de facteurs de croissance et de signaux régénérateurs. Injectés dans la peau, ils stimulent la production de collagène, accélèrent la régénération cellulaire et améliorent significativement la texture et la luminosité cutanée." },
    { question: "Quelle est la différence entre exosomes et PRP ?", answer: "Le PRP utilise vos propres plaquettes, tandis que les exosomes sont des vésicules standardisées hautement concentrées en facteurs de croissance. Les exosomes offrent une concentration plus élevée et plus constante de principes actifs régénérateurs, avec des résultats souvent plus prévisibles." },
    { question: "Combien de séances pour voir des résultats ?", answer: "Des résultats visibles sont souvent observés dès la première séance. Un protocole de 2 à 3 séances espacées d'un mois est recommandé pour un effet optimal et durable." },
    { question: "Le traitement est-il adapté à la perte de cheveux ?", answer: "Oui, les exosomes sont également utilisés en tricho-esthétique pour stimuler les follicules pileux et ralentir la chute de cheveux. Le Dr Baron peut vous proposer ce traitement lors de votre consultation si votre profil est adapté." },
  ],
  'injection-sculptra': [
    { question: "Comment fonctionne le Sculptra ?", answer: "Le Sculptra® contient de l'acide poly-L-lactique (PLLA) qui stimule naturellement la production de collagène par vos propres fibroblastes. Contrairement aux fillers classiques, il n'agit pas par comblement immédiat mais par régénération progressive, pour un résultat très naturel." },
    { question: "Combien de séances de Sculptra faut-il ?", answer: "En général, 2 à 3 séances espacées de 4 à 6 semaines sont nécessaires. Les résultats se développent progressivement sur 3 à 6 mois après chaque injection, avec un effet volumateur naturel et non artificiel." },
    { question: "Combien de temps durent les résultats du Sculptra ?", answer: "Les résultats du Sculptra sont parmi les plus durables en médecine esthétique : jusqu'à 24 mois voire plus. La stimulation collagénique continue d'agir longtemps après la résorption du produit." },
    { question: "Y a-t-il des zones à ne pas traiter avec le Sculptra ?", answer: "Le Sculptra n'est pas recommandé pour les lèvres et les zones périorbitaires. Il est idéal pour les joues, les tempes, la mâchoire et le cou. Le Dr Baron vous indiquera les zones les plus adaptées lors de la consultation." },
  ],
  'morpheus-8': [
    { question: "Qu'est-ce que le Morpheus 8 et comment ça marche ?", answer: "Le Morpheus 8 combine micro-needling et radiofréquence fractionnée pour remodeliser le tissu adipeux sous-cutané et stimuler le collagène en profondeur. Les micro-aiguilles délivrent l'énergie RF jusqu'à 8mm de profondeur, pour un lifting et un raffermissement cutané sans chirurgie." },
    { question: "Combien de séances sont recommandées ?", answer: "Pour un résultat optimal, 1 à 3 séances espacées de 4 à 6 semaines sont recommandées. Les résultats continuent de s'améliorer pendant 3 à 6 mois après le traitement, au fur et à mesure que le collagène se régénère." },
    { question: "Le Morpheus 8 est-il douloureux ?", answer: "Une crème anesthésiante est appliquée avant la séance pour garantir votre confort. La tolérance varie selon les zones et les individus, mais le traitement est généralement bien toléré. Des rougeurs et un léger gonflement persistent 24 à 48h après la séance." },
    { question: "Quelles zones peut-on traiter avec le Morpheus 8 ?", answer: "Le Morpheus 8 peut traiter le visage (ovale, joues, cou), le décolleté, les bras, le ventre et les cuisses. Il est particulièrement efficace pour le relâchement cutané, les cicatrices d'acné et le double menton." },
  ],
  'hifu-focus-dual': [
    { question: "Qu'est-ce que le HIFU et comment agit-il sur la peau ?", answer: "Le HIFU (High Intensity Focused Ultrasound) envoie des ultrasons focalisés à différentes profondeurs du tissu cutané (SMAS, derme profond). La chaleur générée provoque une contraction immédiate et une stimulation prolongée du collagène, pour un effet lifting sans chirurgie." },
    { question: "Combien de temps durent les résultats du HIFU ?", answer: "Les résultats du HIFU durent généralement 12 à 18 mois. L'effet lifting se développe progressivement sur 2 à 3 mois après la séance. Une séance annuelle d'entretien est recommandée pour maintenir les bénéfices." },
    { question: "Quelle est la différence entre HIFU Focus Dual et les autres appareils HIFU ?", answer: "Le Focus Dual est une technologie de dernière génération qui combine deux types de cartouches pour traiter différentes profondeurs en une seule séance. Il offre un meilleur ciblage et des résultats plus précis et uniformes que les appareils HIFU de première génération." },
    { question: "Y a-t-il une éviction sociale après le HIFU ?", answer: "Non, c'est l'un des avantages majeurs du HIFU. Vous pouvez reprendre vos activités immédiatement après la séance. Des rougeurs légères peuvent apparaître dans les heures suivant le traitement mais disparaissent rapidement." },
  ],
  'detatouage': [
    { question: "Comment fonctionne le laser pour enlever un tatouage ?", answer: "Le laser Q-Switched délivre des impulsions ultra-brèves à des longueurs d'onde spécifiques qui fragmentent les particules d'encre en micro-particules. Ces fragments sont ensuite éliminés naturellement par le système immunitaire via les macrophages." },
    { question: "Combien de séances faut-il pour effacer un tatouage ?", answer: "Le nombre de séances varie selon la taille, la couleur, l'ancienneté et la profondeur du tatouage. En général, 5 à 10 séances espacées de 6 à 8 semaines sont nécessaires. Les encres noires répondent le mieux, les couleurs vives nécessitent plus de séances." },
    { question: "Est-ce que le détatouage laser est douloureux ?", answer: "La sensation est souvent comparée à des craquements d'élastique sur la peau. Une crème anesthésiante est appliquée avant la séance. La douleur est localisée et de courte durée. Un refroidissement par air froid est également utilisé pour améliorer le confort." },
    { question: "Le tatouage sera-t-il totalement effacé ?", answer: "Dans la plupart des cas, une disparition complète est possible, notamment pour les encres noires. Certaines couleurs (jaune, vert, blanc) sont plus difficiles à éliminer et peuvent nécessiter plus de séances ou laisser une légère trace résiduelle." },
  ],
  'hydrafacial': [
    { question: "Qu'est-ce que l'HydraFacial et en quoi est-il différent d'un soin classique ?", answer: "L'HydraFacial est un soin médical 3-en-1 qui combine nettoyage, exfoliation et hydratation intensive en une seule séance grâce à la technologie brevetée Vortex-Fusion. Contrairement à un soin classique en institut, il extrait les impuretés par aspiration tout en infusant des sérums actifs concentrés, pour des résultats immédiats et visibles." },
    { question: "L'HydraFacial convient-il à tous les types de peau ?", answer: "Oui, l'HydraFacial s'adapte à tous les types de peau : peau grasse, acnéique, sèche, mature ou sensible. Les sérums utilisés sont personnalisés selon votre type de peau et vos problématiques spécifiques." },
    { question: "À quelle fréquence faire un HydraFacial ?", answer: "Pour maintenir une peau éclatante, une séance mensuelle est idéale. Pour des résultats ciblés (acné, rides, taches), une cure de 3 à 6 séances rapprochées (toutes les 2 à 4 semaines) est recommandée, suivie de séances d'entretien mensuelles." },
    { question: "Y a-t-il une éviction sociale après l'HydraFacial ?", answer: "Non, c'est l'un des grands avantages de l'HydraFacial. Votre peau est immédiatement éclatante, sans rougeur ni irritation. Vous pouvez maquiller et reprendre vos activités immédiatement après la séance." },
  ],
  'cryolipolyse': [
    { question: "La cryolipolyse est-elle efficace pour perdre du poids ?", answer: "La cryolipolyse n'est pas un traitement amaigrissant mais une technique de sculpture corporelle. Elle cible les amas graisseux localisés (poignées d'amour, ventre, cuisses) qui résistent au régime et au sport. Elle permet de réduire de 20 à 25% la graisse de la zone traitée." },
    { question: "Combien de séances de cryolipolyse sont nécessaires ?", answer: "En général, 1 à 3 séances par zone suffisent pour obtenir des résultats satisfaisants. Les résultats sont progressifs et visibles dès 3 semaines après la séance, avec un résultat optimal à 2-3 mois." },
    { question: "Est-ce que la cryolipolyse est douloureuse ?", answer: "Le traitement peut être inconfortable au début en raison du froid intense, mais il est généralement bien toléré. Un engourdissement de la zone traitée s'installe rapidement. Après la séance, un massage de la zone est réalisé pour optimiser les résultats." },
    { question: "Les résultats de la cryolipolyse sont-ils permanents ?", answer: "Les cellules graisseuses (adipocytes) détruites par le froid sont éliminées définitivement par l'organisme. Elles ne reviennent pas. Cependant, pour maintenir les résultats dans la durée, il est important d'avoir un mode de vie équilibré, car les cellules restantes peuvent se développer en cas de prise de poids importante." },
  ],
  'cristal-fit': [
    { question: "Qu'est-ce que le Cristal Fit et comment fonctionne-t-il ?", answer: "Le Cristal Fit est un appareil de cryolipolyse de nouvelle génération qui utilise le froid contrôlé pour détruire les adipocytes (cellules graisseuses) de façon sélective. Les cristaux de glace formés à l'intérieur des cellules graisseuses les détruisent sans endommager les tissus environnants." },
    { question: "En quoi le Cristal Fit se distingue-t-il d'autres traitements minceur ?", answer: "Le Cristal Fit est non invasif, sans chirurgie, sans anesthésie et sans éviction sociale. Il est l'un des rares traitements validés cliniquement pour réduire localement la graisse sous-cutanée de manière mesurable et durable, avec une réduction de 20 à 25% par séance." },
    { question: "Quelles zones peuvent être traitées avec le Cristal Fit ?", answer: "Le Cristal Fit peut traiter le ventre, les flancs (poignées d'amour), la culotte de cheval, la face interne et externe des cuisses, les bras, le dos et le double menton. Le Dr Baron détermine les zones prioritaires lors de la consultation." },
    { question: "Quand voit-on les résultats après une séance Cristal Fit ?", answer: "Les premiers résultats sont visibles dès 3 semaines après la séance. Le résultat optimal est atteint entre 8 et 12 semaines, le temps que l'organisme élimine naturellement les cellules graisseuses détruites via le système lymphatique." },
  ],
  'epilation-clarity-2': [
    { question: "Comment fonctionne le laser Clarity 2 pour l'épilation ?", answer: "Le Clarity 2 est un laser double longueur d'onde (Alexandrite 755nm + Nd:YAG 1064nm) qui cible le pigment des poils. La chaleur générée détruit le follicule pileux de façon définitive, empêchant la repousse. Il traite toutes les carnations, des peaux les plus claires aux plus foncées." },
    { question: "Combien de séances sont nécessaires pour une épilation définitive ?", answer: "En général, 6 à 8 séances sont nécessaires pour traiter tous les poils en phase de croissance active (phase anagène). Les séances sont espacées de 4 à 8 semaines selon les zones. Des séances d'entretien annuelles peuvent être utiles pour les poils résiduels hormonaux." },
    { question: "Le laser Clarity 2 est-il adapté aux peaux mates et foncées ?", answer: "Oui, c'est l'un des points forts du Clarity 2. Sa longueur d'onde Nd:YAG 1064nm pénètre profondément tout en épargnant la mélanine de surface, ce qui le rend efficace et sûr sur les peaux mates, métissées et foncées. Le Dr Baron adapte les paramètres à chaque phototype." },
    { question: "Y a-t-il des précautions avant et après la séance laser ?", answer: "Avant : éviter l'exposition solaire, ne pas s'épiler à la cire ou pince dans les 4 semaines précédentes, raser la zone 24-48h avant. Après : éviter le soleil pendant 4 semaines, appliquer une crème solaire SPF50+, pas de bain chaud ni de sport intensif dans les 48h." },
  ],
  'epilation-apilus': [
    { question: "Qu'est-ce que l'épilation définitive par électrolyse Apilus ?", answer: "L'Apilus est un système d'électrolyse de haute précision qui détruit le follicule pileux grâce à un courant électrique ultra-court (27,12 MHz). Contrairement au laser, il est efficace sur tous les types de poils quelle que soit leur couleur (poils blancs, blonds, roux) et toutes les carnations." },
    { question: "Quelle est la différence entre Apilus et épilation laser ?", answer: "Le laser cible le pigment du poil et est donc moins efficace sur les poils clairs ou blancs. L'Apilus par électrolyse agit directement sur le follicule par courant électrique, sans distinction de couleur. Il est particulièrement recommandé pour les poils résistants au laser ou les zones sensibles comme le visage." },
    { question: "L'épilation Apilus est-elle permanente ?", answer: "Oui, l'épilation par électrolyse Apilus est reconnue comme la seule méthode véritablement définitive par les dermatologues. Chaque follicule traité est définitivement détruit. Un certain nombre de séances est nécessaire pour traiter tous les follicules en phase active." },
    { question: "Combien de séances sont nécessaires ?", answer: "Le nombre de séances varie selon la zone, la densité des poils et votre profil hormonal. Pour une petite zone comme les sourcils, 10 à 20 séances peuvent suffire. Pour des zones plus larges ou hormonales (menton, lèvre supérieure), davantage de séances peuvent être nécessaires." },
  ],
  'lumiere-pulsee-lumecca': [
    { question: "Qu'est-ce que la lumière pulsée Lumecca et quels défauts traite-t-elle ?", answer: "La Lumecca est un système de lumière pulsée intense (IPL) de nouvelle génération qui traite les taches pigmentaires (taches de soleil, de vieillesse, éphélides), les rougeurs diffuses, la couperose, les vaisseaux apparents et améliore l'éclat général de la peau. En une séance, elle peut traiter ce que d'autres IPL nécessitent en 3 séances." },
    { question: "Combien de séances Lumecca sont nécessaires ?", answer: "1 à 3 séances espacées de 4 à 6 semaines suffisent pour la plupart des indications. Les taches réagissent rapidement : elles foncent légèrement dans les jours suivant la séance puis disparaissent progressivement en 10-14 jours." },
    { question: "Y a-t-il une éviction sociale après la Lumecca ?", answer: "Minime. Vous pouvez observer un léger rougissement dans les heures suivant la séance et les taches peuvent temporairement foncer avant d'exfolier naturellement. Vous pouvez reprendre vos activités normalement le lendemain. Une protection solaire SPF50+ est indispensable après le traitement." },
    { question: "La Lumecca est-elle adaptée à toutes les peaux ?", answer: "La Lumecca est optimale pour les peaux claires à intermédiaires (phototypes I à III). Pour les peaux plus foncées, le Dr Baron peut recommander d'autres protocoles adaptés. Un bilan cutané est réalisé en consultation avant tout traitement." },
  ],
  'laser-co2-deka': [
    { question: "Qu'est-ce que le laser CO2 fractionné Deka et à quoi sert-il ?", answer: "Le laser CO2 Deka est un laser ablatif fractionné qui vaporise des colonnes de tissu cutané en micro-zones, stimulant une intense régénération du collagène. Il traite les rides profondes, les cicatrices (acné, chirurgie), les taches résistantes, le relâchement cutané et les lésions bénignes." },
    { question: "Combien de séances de laser CO2 sont nécessaires ?", answer: "Pour les indications esthétiques (rides, cicatrices), 1 à 3 séances espacées de 3 à 6 mois sont généralement suffisantes. Le laser CO2 est plus puissant que les lasers non ablatifs, donc moins de séances sont nécessaires pour un résultat équivalent." },
    { question: "Quelle est la période de récupération après le laser CO2 ?", answer: "Le laser CO2 fractionné nécessite une éviction sociale de 5 à 10 jours selon l'intensité du traitement. La peau sera rouge, légèrement gonflée et des croûtelettes apparaissent avant que la nouvelle peau ne soit visible. Des soins spécifiques sont prescrits pour accompagner la cicatrisation." },
    { question: "Le laser CO2 Deka est-il douloureux ?", answer: "Un traitement anesthésiant local (crème ou injection) est appliqué avant la séance pour garantir votre confort. La sensation pendant le traitement est minimisée. Des analgésiques peuvent être recommandés pour les premiers jours de récupération." },
  ],
  'peelings-medicaux': [
    { question: "Quelle est la différence entre un peeling médical et un peeling en institut ?", answer: "Un peeling médical utilise des concentrations bien plus élevées d'acides (TCA, phénol, etc.) et nécessite une prescription médicale. Il agit en profondeur sur le derme et permet de traiter des problématiques plus sévères : rides profondes, cicatrices, taches résistantes, relâchement cutané. Les résultats sont significativement plus importants." },
    { question: "Quels types de peelings médicaux proposez-vous ?", answer: "Le Dr Baron propose différents types de peelings selon votre indication : peeling superficiel (glycolique, salicylique), peeling moyen (TCA) et peeling profond (TCA concentré). Le choix dépend de votre problématique, de votre type de peau et de votre disponibilité pour la récupération." },
    { question: "Y a-t-il une période d'éviction sociale après un peeling médical ?", answer: "Oui, selon la profondeur du peeling. Un peeling superficiel nécessite peu ou pas d'éviction sociale. Un peeling moyen ou profond peut entraîner des rougeurs, un pelage de la peau et une sensibilité pendant 7 à 14 jours. Ces effets sont normaux et font partie du processus de renouvellement cutané." },
    { question: "Combien de séances sont nécessaires pour voir des résultats ?", answer: "Un peeling profond peut donner des résultats très significatifs dès une seule séance. Les peelings superficiels nécessitent généralement 3 à 6 séances mensuelles pour un effet progressif et durable. Le protocole est défini lors de la consultation médicale." },
  ],
  'echographie': [
    { question: "À quoi sert l'échographie esthétique ?", answer: "L'échographie esthétique permet de visualiser les couches cutanées (épiderme, derme, hypoderme) et de mesurer leur épaisseur avec précision. Elle aide le Dr Baron à diagnostiquer objectivement la perte de volume, l'épaisseur de graisse sous-cutanée et à planifier le traitement le plus adapté." },
    { question: "L'échographie esthétique est-elle douloureuse ?", answer: "Non, l'échographie est totalement indolore et non invasive. Elle utilise des ultrasons, sans radiation. La séance dure environ 20 à 30 minutes et vous pouvez reprendre vos activités immédiatement après." },
    { question: "L'échographie esthétique est-elle remboursée ?", answer: "L'échographie esthétique réalisée dans un cadre de médecine esthétique n'est généralement pas prise en charge par l'Assurance Maladie. Cependant, elle représente un investissement précieux pour personnaliser et optimiser votre traitement, en garantissant un diagnostic précis." },
    { question: "Quand est-il recommandé de faire une échographie esthétique ?", answer: "L'échographie est recommandée avant un traitement injectable (pour évaluer les volumes et guider l'injection), en suivi de traitement (pour mesurer l'évolution), ou pour établir un diagnostic objectif en cas de doute clinique. Le Dr Baron vous indiquera si cet examen est pertinent pour votre situation." },
  ],
};

export default function TreatmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const soin = soinsData[slug];

  // Si le traitement n'existe pas, afficher une erreur 404
  if (!soin) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen">
          <div className="container py-20 text-center">
            <h1 className="text-4xl font-outfit font-bold text-neutral-900 mb-4">
              Traitement non trouvé
            </h1>
            <p className="text-neutral-600 mb-8">
              Le traitement que vous recherchez n'existe pas.
            </p>
            <a href="/actes/" className="btn-primary-villa">
              Voir tous les traitements
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Schema JSON-LD pour le traitement médical */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: `${soin.title} - Villa Esthétique Toulouse`,
            description: soin.description,
            url: `https://lavillaesthetique-toulouse.com/actes/${slug}/`,
            mainEntity: {
              '@type': 'MedicalProcedure',
              name: soin.title,
              description: soin.longDescription || soin.description,
              procedureType: 'Aesthetic Medicine',
              followup: soin.seances,
              preparation: 'Consultation médicale préalable obligatoire',
              howPerformed: soin.details.join(' '),
              medicalSpecialty: 'Médecine Esthétique'
            },
            provider: {
              '@type': 'MedicalBusiness',
              name: 'La Villa Esthétique',
              url: 'https://lavillaesthetique-toulouse.com/',
              telephone: '+33562140410',
              email: 'dr.baron.nadine@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '286 Avenue de Lardenne',
                addressLocality: 'Toulouse',
                postalCode: '31100',
                addressCountry: 'FR'
              },
              founder: {
                '@type': 'Person',
                name: 'Dr Nadine Baron',
                jobTitle: 'Médecin Esthétique'
              }
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Accueil',
                  item: 'https://lavillaesthetique-toulouse.com/'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Soins',
                  item: 'https://lavillaesthetique-toulouse.com/actes/'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: soin.title,
                  item: `https://lavillaesthetique-toulouse.com/actes/${slug}/`
                }
              ]
            }
          }),
        }}
      />

      <Navbar />

      <main className="pt-16">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Soins', href: '/actes/' },
            { label: soin.title }
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
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${soin.color} rounded-3xl text-white flex-shrink-0 shadow-xl`}>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {soin.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-outfit font-bold text-neutral-900 mb-4">
                    {soin.title}
                  </h1>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    {soin.description}
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
                  <p className="text-neutral-600">{soin.duree}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Séances</h3>
                  </div>
                  <p className="text-neutral-600">{soin.seances}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-neutral-900">Résultats</h3>
                  </div>
                  <p className="text-neutral-600">{soin.resultats}</p>
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
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Long Description */}
                  {soin.longDescription && (
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
                        {soin.longDescription}
                      </p>
                    </motion.div>
                  )}

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
                      {soin.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                          <span className="text-neutral-700 leading-relaxed">
                            {detail}
                          </span>
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
                      Les tarifs dépendent de la zone à traiter, de votre type de peau et du protocole personnalisé. Un devis détaillé vous sera remis lors de votre consultation.
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
                        <span>Équipements dernière génération</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Suivi médical personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Produits certifiés CE</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqData[slug] && (
          <FAQ items={faqData[slug]} title={`Questions fréquentes sur ${soin.title.toLowerCase()} à Toulouse`} />
        )}

        {/* Related Treatments CTA */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-brand-subtle">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Découvrez nos autres traitements
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Explorez l'ensemble de nos soins de médecine esthétique pour trouver le traitement le plus adapté à vos besoins.
              </p>
              <a
                href="/actes/"
                className="btn-primary-villa inline-flex items-center gap-2"
              >
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
