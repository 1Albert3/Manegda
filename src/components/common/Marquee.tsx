import { useState, useEffect } from 'react';

export default function Marquee() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{ 
        marginTop: '140px', 
        backgroundColor: 'white', 
        padding: '5px 0',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div 
        style={{ 
          height: '35px', 
          margin: '0 25px', 
          fontSize: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          overflow: 'hidden' 
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="marquee-layer"
          style={{
            whiteSpace: 'nowrap',
            animation: `layerMarquee 25s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          <a 
            href="https://www.lyceesaintemarie.net/ressources.php" 
            target="_blank" 
            style={{ 
              color: '#1e3a8a', 
              textDecoration: 'none', 
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            Informations importantes !!! Inscription et réinscription 2025-2026 : la fiche de renseignements ; les dossiers à fournir en 6e et en 2nde ; les étapes à suivre ; les listes des fournitures ; la fiche d'inscription au transport ; la fiche d'inscription à la cantine ; les coûts et modalités de payement du transport et de la cantine sont disponibles. Pour y accéder cliquer sur le lien qui défile.
          </a>
        </div>
      </div>
    </div>
  );
}