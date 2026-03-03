'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Clock, User, Search, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/supabase';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogClientFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function BlogClientFilters({ posts, categories }: BlogClientFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Article mis en avant (featured)
  const featuredPost = posts.find(post => post.featured);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous les articles' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Article mis en avant ───────────────────────────────────────────── */}
      {featuredPost && (
        <section className="py-10 bg-white">
          <div className="container">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-sm font-semibold text-brand uppercase tracking-widest">
                À la une
              </span>
            </div>

            <Link href={`/blog/${featuredPost.slug}/`} className="group block">
              <article className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[480px] md:min-h-[560px]">

                {/* Image de fond */}
                {featuredPost.image_url ? (
                  <img
                    src={featuredPost.image_url}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-neutral-800 to-laser/20" />
                )}

                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/50 to-transparent" />

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-7 md:p-10 lg:p-12 min-h-[480px] md:min-h-[560px]">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      À la une
                    </span>
                    <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.read_time} min de lecture
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className="font-outfit font-bold text-white text-2xl md:text-4xl lg:text-[2.6rem] leading-tight mb-4 max-w-3xl group-hover:text-brand-subtle transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  {/* Extrait */}
                  <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6 max-w-2xl line-clamp-2 md:line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Pied : auteur + date + CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between">
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-brand/80 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          NB
                        </div>
                        <span className="font-medium text-white/80">{featuredPost.author}</span>
                      </span>
                      <span className="hidden sm:block text-white/30">·</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(new Date(featuredPost.published_at), 'd MMMM yyyy', { locale: fr })}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold text-sm px-5 py-3 rounded-full group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-lg w-fit">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Search Bar */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="max-w-md mx-auto relative" role="search">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <label htmlFor="blog-search" className="sr-only">
              Rechercher dans les articles de médecine esthétique
            </label>
            <input
              id="blog-search"
              type="text"
              placeholder="Rechercher un article médical..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              aria-describedby="search-help"
            />
            <div id="search-help" className="sr-only">
              Recherchez par mot-clé : épilation laser, injections, acné, anti-âge, etc.
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                  ? 'bg-brand text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-600 mb-4">
                {searchTerm ?
                  `Aucun article trouvé pour "${searchTerm}"` :
                  'Aucun article disponible pour le moment.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn-secondary"
                >
                  Voir tous les articles
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <article key={post.id} className="card group hover:shadow-xl transition-all duration-500">
                    {post.image_url && (
                      <div className="aspect-[16/10] bg-gradient-to-br from-brand-subtle/20 to-laser-subtle/20 rounded-xl overflow-hidden mb-6">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.read_time} min</span>
                        </div>
                      </div>

                      <h2 className="font-outfit font-bold text-xl text-neutral-900 group-hover:text-brand transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-neutral-600 line-clamp-3 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <User className="w-3.5 h-3.5" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {format(new Date(post.published_at), 'd MMM yyyy', { locale: fr })}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}/`}
                        className="flex items-center gap-2 text-sm text-brand font-medium group-hover:gap-3 transition-all"
                      >
                        Lire la suite
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${currentPage === 1
                      ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                      : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 hover:border-brand/30 hover:text-brand'
                      }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Précédent
                  </button>

                  <span className="text-sm text-neutral-500 font-medium">
                    Page {currentPage} sur {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${currentPage === totalPages
                      ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                      : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 hover:border-brand/30 hover:text-brand'
                      }`}
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}