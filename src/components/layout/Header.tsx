import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, LogIn, GraduationCap, ChevronDown, Search } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onNavigate: (page: string) => void;
  onSearchClick: () => void;
}

export default function Header({ onLoginClick, onNavigate, onSearchClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      // Header sticky effect
      if (currentScrollTop > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Header hide/show on scroll
      if (lastScrollTop < currentScrollTop && currentScrollTop > 200) {
        setIsScrollUp(true);
      } else if (lastScrollTop > currentScrollTop && currentScrollTop > 200) {
        setIsScrollUp(false);
      }
      
      setLastScrollTop(currentScrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      title: 'Accueil',
      href: '#home'
    },
    {
      title: 'À propos',
      href: '#about'
    },
    {
      title: 'Scolarité',
      href: '#scolarite'
    },
    {
      title: 'Pédagogie',
      href: '#pedagogie'
    },
    {
      title: 'Contact',
      href: '#contact'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    } ${
      isScrollUp ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="hidden md:block bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+22600000000" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={16} />
              <span>+226 XX XX XX XX</span>
            </a>
            <a href="mailto:contact@wendmanegda.bf" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={16} />
              <span>contact@wendmanegda.bf</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-200 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              <Instagram size={18} />
            </a>
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-white text-blue-900 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition"
            >
              <LogIn size={16} />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center py-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                <GraduationCap size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Collège Wend-Manegda</h1>
                <p className="text-xs text-gray-600">Excellence éducative</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center ml-12">
              <div className="flex items-center gap-1">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate(item.href.replace('#', ''))}
                    className="text-gray-700 hover:text-blue-900 font-bold transition px-8 py-4 whitespace-nowrap rounded-xl hover:bg-blue-50 hover:shadow-sm"
                  >
                    <span className="text-lg">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <button
                onClick={onSearchClick}
                className="p-4 text-blue-900 hover:text-blue-700 transition rounded-full hover:bg-blue-50"
              >
                <Search size={28} />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-blue-900 hover:text-blue-700 transition p-3"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>



      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(item.href.replace('#', ''));
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-3 text-gray-700 hover:text-blue-900 font-medium transition border-b border-gray-100 last:border-b-0"
              >
                {item.title}
              </button>
            ))}
            
            <button
              onClick={() => {
                onLoginClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition mt-4"
            >
              <LogIn size={20} />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
