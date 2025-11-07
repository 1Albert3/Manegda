import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Calendar } from 'lucide-react';
import { BlogArticle } from '../../data/blogData';

interface BlogSectionProps {
  articles: BlogArticle[];
}

export default function BlogSection({ articles }: BlogSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articlesPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + articlesPerPage >= articles.length ? 0 : prev + articlesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, articles.length - articlesPerPage) : prev - articlesPerPage
    );
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + articlesPerPage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
              Actualités
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Les dernières nouvelles du Lycée
            </h2>
          </div>
          <a
            href="/actualites"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Toutes les actualités
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article) => (
              <div
                key={article.id}
                className="overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>Lue {article.views} fois</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <a
                    href={`/actualites/${article.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Plus de détails
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {articles.length > articlesPerPage && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 bg-white shadow-md hover:shadow-lg rounded-full transition-all"
                aria-label="Articles précédents"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * articlesPerPage)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        Math.floor(currentIndex / articlesPerPage) === index
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Page ${index + 1}`}
                    />
                  )
                )}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 bg-white shadow-md hover:shadow-lg rounded-full transition-all"
                aria-label="Articles suivants"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Plus d'actualités
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
