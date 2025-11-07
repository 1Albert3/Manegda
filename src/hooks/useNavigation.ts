import { useState } from 'react';

export type PageType = 'home' | 'about' | 'scolarite' | 'pedagogie' | 'contact';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: PageType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  return {
    currentPage,
    navigateTo,
    isTransitioning
  };
}