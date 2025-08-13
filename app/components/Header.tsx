'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ml';
  setLanguage: (lang: 'en' | 'ml') => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      services: 'Services',
      contact: 'Contact',
      call: 'Call Now',
      whatsapp: 'WhatsApp',
      businessName: 'KPN Vegetables'
    },
    ml: {
      home: 'ഹോം',
      about: 'ഞങ്ങളെക്കുറിച്ച്',
      products: 'ഉൽപ്പന്നങ്ങൾ',
      services: 'സേവനങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      call: 'വിളിക്കുക',
      whatsapp: 'വാട്സ്ആപ്പ്',
      businessName: 'ഗ്രീൻ വാലി വെജിറ്റബിൾസ്'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'products', href: '#products' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know about your vegetable prices.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-green text-white text-sm py-2 no-print">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 6AM-8PM, Sun: 7AM-7PM</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Beach Road, Kozhikode</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ml' : 'en')}
                className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors duration-200"
              >
                {language === 'en' ? 'മലയാളം' : 'English'}
              </button>
              <a
                href="tel:+919495234567"
                className="flex items-center space-x-1 hover:text-light-green transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+91 94952 34567</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 no-print ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-green rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-primary-green">
                  {t.businessName}
                </h1>
                <p className="text-xs text-gray-600 hidden md:block">Fresh • Quality • Trust</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-medium-green font-medium transition-colors duration-200 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[item.key as keyof typeof t]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medium-green transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <span className="text-sm">📱</span>
                <span className="text-sm">{t.whatsapp}</span>
              </button>
              <a
                href="tel:+919495234567"
                className="btn-primary text-sm flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.call}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-gray-700 hover:text-medium-green font-medium py-2 transition-colors duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t[item.key as keyof typeof t]}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>{t.whatsapp}</span>
              </button>
              <a
                href="tel:+919495234567"
                className="w-full btn-primary flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>{t.call}</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;