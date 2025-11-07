import { useState } from 'react';
import SubNavigation from '../common/SubNavigation';
import GestionScolairePage from './GestionScolairePage';
import SuiviFinancesPage from './SuiviFinancesPage';
import ServicesPage from './ServicesPage';

export default function ScolaritePage() {
  const [activeSection, setActiveSection] = useState('gestion-scolaire');

  const subMenuItems = [
    { title: 'Gestion scolaire', href: 'gestion-scolaire' },
    { title: 'Suivi & Finances', href: 'suivi-finances' },
    { title: 'Services', href: 'services-scolaires' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'gestion-scolaire':
        return <GestionScolairePage />;
      case 'suivi-finances':
        return <SuiviFinancesPage />;
      case 'services-scolaires':
        return <ServicesPage />;
      default:
        return <GestionScolairePage />;
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