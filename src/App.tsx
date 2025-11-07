import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import SearchOverlay from './components/common/SearchOverlay';
import Marquee from './components/common/Marquee';
import HomePage from './components/pages/HomePage';
import InscriptionsPage from './components/pages/InscriptionsPage';
import ContactPage from './components/pages/ContactPage';
import AboutPageWithSub from './components/pages/AboutPageWithSub';
import ScolaritePage from './components/pages/ScolaritePage';
import PedagogiePage from './components/pages/PedagogiePage';
import ContactPageWithSub from './components/pages/ContactPageWithSub';
import PageTransition from './components/common/PageTransition';
import { useNavigation, PageType } from './hooks/useNavigation';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { currentPage, navigateTo, isTransitioning } = useNavigation();

  const handleNavigation = (page: string) => {
    const pageMap: Record<string, PageType> = {
      'home': 'home',
      'accueil': 'home',
      'about': 'about',
      'scolarite': 'scolarite',
      'pedagogie': 'pedagogie',
      'contact': 'contact'
    };
    navigateTo(pageMap[page] || 'home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPageWithSub />;
      case 'scolarite':
        return <ScolaritePage />;
      case 'pedagogie':
        return <PedagogiePage />;
      case 'contact':
        return <ContactPageWithSub />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Preloader />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={handleNavigation} />

      <div className="min-h-screen bg-white">
        <Header onLoginClick={() => {}} onNavigate={handleNavigation} onSearchClick={() => setIsSearchOpen(true)} />
        <Marquee />

        <main>
          <PageTransition isVisible={!isTransitioning}>
            {renderCurrentPage()}
          </PageTransition>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
