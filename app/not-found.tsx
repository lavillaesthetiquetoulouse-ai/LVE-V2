'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 flex items-center justify-center pt-20 pb-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl font-bold text-neutral-200 mb-8">404</h1>

              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-neutral-900 mb-6">
                Page introuvable
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                Explorez nos soins esthétiques ou retournez à l'accueil pour continuer votre visite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" passHref>
                  <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full px-8">
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>

                <Link href="/actes/" passHref>
                  <Button variant="outline" size="lg" className="rounded-full px-8 border-neutral-300 hover:bg-neutral-50 text-neutral-900">
                    <Search className="w-4 h-4 mr-2" />
                    Découvrir nos soins
                  </Button>
                </Link>

                <Link href="/blog/" passHref>
                  <Button variant="outline" size="lg" className="rounded-full px-8 border-neutral-300 hover:bg-neutral-50 text-neutral-900">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Lire nos articles
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
