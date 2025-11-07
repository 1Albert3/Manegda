import { useState } from 'react';
import SubNavigation from '../common/SubNavigation';
import ContactPage from './ContactPage';
import RessourcesPage from './RessourcesPage';

export default function ContactPageWithSub() {
  const [activeSection, setActiveSection] = useState('contact');

  const subMenuItems = [
    { title: 'Coordonnées', href: 'contact' },
    { title: 'Ressources', href: 'ressources' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'contact':
        return <ContactPage />;
      case 'ressources':
        return <RessourcesPage />;
      default:
        return <ContactPage />;
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