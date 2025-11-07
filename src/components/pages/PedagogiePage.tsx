import { useState } from 'react';
import SubNavigation from '../common/SubNavigation';
import PlateformeNumeriquePage from './PlateformeNumeriquePage';
import OrganisationPage from './OrganisationPage';
import OrientationPage from './OrientationPage';

export default function PedagogiePage() {
  const [activeSection, setActiveSection] = useState('plateforme-numerique');

  const subMenuItems = [
    { title: 'Plateforme numérique', href: 'plateforme-numerique' },
    { title: 'Organisation', href: 'organisation' },
    { title: 'Orientation', href: 'orientation' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'plateforme-numerique':
        return <PlateformeNumeriquePage />;
      case 'organisation':
        return <OrganisationPage />;
      case 'orientation':
        return <OrientationPage />;
      default:
        return <PlateformeNumeriquePage />;
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