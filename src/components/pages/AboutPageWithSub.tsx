import { useState } from 'react';
import SubNavigation from '../common/SubNavigation';
import AboutPage from './AboutPage';
import PartenariatsPage from './PartenariatsPage';
import ActualitesPage from './ActualitesPage';

export default function AboutPageWithSub() {
  const [activeSection, setActiveSection] = useState('presentation');

  const subMenuItems = [
    { title: 'Présentation', href: 'presentation' },
    { title: 'Actualités', href: 'actualites' },
    { title: 'Partenariats', href: 'partenariats' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'presentation':
        return <AboutPage />;
      case 'actualites':
        return <ActualitesPage />;
      case 'partenariats':
        return <PartenariatsPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="pt-32">
      <SubNavigation 
        items={subMenuItems}
        activeItem={activeSection}
        onNavigate={setActiveSection}
      />
      {renderContent()}
    </div>
  );
}