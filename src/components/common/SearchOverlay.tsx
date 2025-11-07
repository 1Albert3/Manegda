import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export default function SearchOverlay({ isOpen, onClose, onNavigate }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const searchResults = [
    { title: 'Inscriptions 2025-2026', page: 'inscriptions' },
    { title: 'Vie Scolaire', page: 'vie-scolaire' },
    { title: 'E-Learning', page: 'e-learning' },
    { title: 'Contact', page: 'contact' }
  ].filter(item => 
    searchQuery && item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      onNavigate(searchResults[0].page);
      onClose();
    }
  };

  const handleResultClick = (page: string) => {
    onNavigate(page);
    onClose();
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`absolute inset-0 bg-blue-900 transition-opacity duration-500 ${
          isOpen ? 'opacity-95' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 transition-opacity duration-700 delay-100 ${
          isOpen ? 'opacity-80' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-900 delay-200 ${
          isOpen ? 'opacity-20' : 'opacity-0'
        }`}
      />

      <div
        className={`relative z-10 w-full max-w-3xl px-4 transition-all duration-500 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher..."
            className="w-full px-6 py-6 text-2xl bg-white bg-opacity-10 border-2 border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50 backdrop-blur-sm"
            autoFocus
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all"
            aria-label="Rechercher"
          >
            <Search className="w-6 h-6 text-white" />
          </button>
        </form>

        <p className="text-center text-white text-sm mt-4 opacity-70">
          Appuyez sur Échap pour fermer
        </p>
      </div>

      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all group"
        aria-label="Fermer"
      >
        <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
