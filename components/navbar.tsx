'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, ArrowRight, Sparkles, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from './brand-provider';
import { OptimizedImage } from './OptimizedImage';

const soinsItems = [
  { href: '/actes/', label: 'Tous les soins', isAll: true },
  // Injections
  { href: '/actes/injection-acide-hyaluronique/', label: 'Acide Hyaluronique', category: 'Injections' },
  { href: '/actes/injection-levres/', label: 'Injection Lèvres', category: 'Injections' },
  { href: '/actes/injection-radiesse/', label: 'Radiesse', category: 'Injections' },
  { href: '/actes/injection-polynucleotides/', label: 'Polynucléotides', category: 'Injections' },
  { href: '/actes/injection-exosomes/', label: 'Exosomes', category: 'Injections' },
  { href: '/actes/injection-sculptra/', label: 'Sculptra', category: 'Injections' },
  // Laser & Lumière
  { href: '/actes/epilation-clarity-2/', label: 'Épilation Laser Clarity 2', category: 'Laser & Lumière' },
  { href: '/actes/epilation-apilus/', label: 'Épilation Électrique APILUS', category: 'Laser & Lumière' },
  { href: '/actes/lumiere-pulsee-lumecca/', label: 'Lumière Pulsée LUMECCA', category: 'Laser & Lumière' },
  { href: '/actes/laser-co2-deka/', label: 'Laser CO2 Fractionné', category: 'Laser & Lumière' },
  { href: '/actes/detatouage/', label: 'Détatouage Laser', category: 'Laser & Lumière' },
  // Appareils & Technologies
  { href: '/actes/morpheus-8/', label: 'Morpheus 8', category: 'Appareils' },
  { href: '/actes/hifu-focus-dual/', label: 'HIFU Focus Dual', category: 'Appareils' },
  { href: '/actes/hydrafacial/', label: 'HydraFacial', category: 'Appareils' },
  { href: '/actes/cryolipolyse/', label: 'Cryolipolyse', category: 'Appareils' },
  { href: '/actes/cristal-fit/', label: 'Cristal Fit', category: 'Appareils' },
  // Soins & Peelings
  { href: '/actes/peelings-medicaux/', label: 'Peelings Médicaux', category: 'Soins & Peelings' },
  { href: '/actes/echographie/', label: 'Échographie Esthétique', category: 'Soins & Peelings' },
];

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/actes/', label: 'Soins', hasDropdown: true },
  { href: '/docteur-laser/', label: 'Laser pas cher', isNew: true },
  { href: '/la-villa-esthetique/', label: 'La Villa' },
  { href: '/blog/', label: 'Blog' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/on-parle-de-nous/', label: 'On parle de nous' },
  { href: '/contact/', label: 'Contact' },
];

// Composant Burger Menu Animé - Style iOS/Android moderne
function BurgerMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-11 h-11 flex items-center justify-center rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 touch-manipulation"
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
      style={{ minHeight: '44px', minWidth: '44px' }} // Touch target minimum
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center relative">
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-neutral-800 rounded-full origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [soinsOpen, setSoinsOpen] = useState(false);
  const [mobileSoinsOpen, setMobileSoinsOpen] = useState(false);
  const soinsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { brand } = useBrand();

  const brandName = brand === 'villa' ? 'La villa Esthetique' : 'Laser pas cher';
  const ctaClass = brand === 'villa' ? 'btn-primary-villa' : 'btn-primary-laser';

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      // Empêcher le scroll sur le body et le html
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restaurer le scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Fermer le menu avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSoinsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Fermer le dropdown soins en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (soinsRef.current && !soinsRef.current.contains(e.target as Node)) {
        setSoinsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200/30 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Responsive */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg text-neutral-900 hover:scale-105 transition-all duration-300"
            >
              <OptimizedImage
                src="https://fbslsxzirjpyzgqbdkfe.supabase.co/storage/v1/object/public/Images/Logo%20du%20cab/Favicon/favicon-32.png"
                alt="Logo La Villa Esthétique"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                priority
              />
              <span className="hidden xs:block sm:whitespace-nowrap text-sm sm:text-base">
                {brandName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative" ref={item.hasDropdown ? soinsRef : undefined}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setSoinsOpen((v) => !v)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname.startsWith('/actes')
                          ? 'text-neutral-900 bg-neutral-100/50'
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/30'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${soinsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${item.isNew
                          ? 'bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-900 font-semibold border border-neutral-300 hover:from-neutral-200 hover:to-neutral-300 hover:border-neutral-400 hover:scale-105 shadow-sm hover:shadow-md'
                          : pathname === item.href
                            ? 'text-neutral-900 bg-neutral-100/50'
                            : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/30'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.isNew && (
                    <div className="absolute -top-4 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
                      NEW
                    </div>
                  )}

                  {/* Dropdown Soins Desktop */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {soinsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden z-50"
                        >
                          {/* Lien "Tous les soins" */}
                          <div className="px-5 pt-4 pb-3 border-b border-neutral-100">
                            <Link
                              href="/actes/"
                              onClick={() => setSoinsOpen(false)}
                              className="flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-brand transition-colors"
                            >
                              <Sparkles className="w-4 h-4 text-brand" />
                              Tous les soins
                              <ArrowRight className="w-3.5 h-3.5 ml-auto text-brand" />
                            </Link>
                          </div>

                          {/* Grille par catégorie */}
                          <div className="grid grid-cols-4 gap-0 p-4">
                            {(['Injections', 'Laser & Lumière', 'Appareils', 'Soins & Peelings'] as const).map((cat) => (
                              <div key={cat} className="px-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 px-1">{cat}</p>
                                <ul className="space-y-0.5">
                                  {soinsItems
                                    .filter((s) => s.category === cat)
                                    .map((soin) => (
                                      <li key={soin.href}>
                                        <Link
                                          href={soin.href}
                                          onClick={() => setSoinsOpen(false)}
                                          className={`block px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                                            pathname === soin.href
                                              ? 'bg-brand/10 text-brand'
                                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                                          }`}
                                        >
                                          {soin.label}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href="https://www.doctolib.fr/medecine-morphologique-et-anti-age/toulouse/nadine-baron"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} text-sm`}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'navbar_doctolib',
                      value: 1
                    });
                  }
                }}
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Burger */}
            <div className="flex items-center lg:hidden">
              <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 24px)' }}
          >
            <ul className="px-6 pt-4 pb-10">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-neutral-100 last:border-0">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileSoinsOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-4 text-left"
                      >
                        <span className={`text-lg font-medium ${pathname.startsWith('/actes') ? 'text-neutral-900' : 'text-neutral-500'}`}>
                          {item.label}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${mobileSoinsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileSoinsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 space-y-0">
                              {/* Tous les soins */}
                              <Link
                                href="/actes/"
                                onClick={() => { setIsOpen(false); setMobileSoinsOpen(false); }}
                                className="flex items-center justify-between py-2.5 text-sm font-semibold text-neutral-900 border-b border-neutral-100 mb-2"
                              >
                                Tous les soins
                                <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                              </Link>

                              {(['Injections', 'Laser & Lumière', 'Appareils', 'Soins & Peelings'] as const).map((cat) => (
                                <div key={cat} className="pt-3">
                                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">{cat}</p>
                                  {soinsItems.filter((s) => s.category === cat).map((soin) => (
                                    <Link
                                      key={soin.href}
                                      href={soin.href}
                                      onClick={() => { setIsOpen(false); setMobileSoinsOpen(false); }}
                                      className={`block py-2 text-sm ${pathname === soin.href ? 'text-neutral-900 font-medium' : 'text-neutral-500'}`}
                                    >
                                      {soin.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4"
                    >
                      <span className={`text-lg font-medium ${
                        item.isNew
                          ? 'text-neutral-900'
                          : pathname === item.href
                            ? 'text-neutral-900'
                            : 'text-neutral-500'
                      }`}>
                        {item.label}
                      </span>
                      {item.isNew && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand border border-brand/30 rounded-full px-2 py-0.5">
                          Nouveau
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Footer contact */}
            <div className="px-6 pt-2 border-t border-neutral-100">
              <a
                href="tel:+33562140410"
                className="block py-4 text-sm text-neutral-400"
                onClick={() => setIsOpen(false)}
              >
                05 62 14 04 10
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}