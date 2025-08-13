'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle, Leaf, Heart, Star, ArrowUp } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ml';
}

const Footer = ({ language }: FooterProps) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const translations = {
    en: {
      business: {
        name: "KPN Vegetables",
        tagline: "Fresh • Quality • Trust",
        description: "Kozhikode's most trusted vegetable supplier since 2010. Serving fresh, quality vegetables to homes and businesses across the city."
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#home" },
          { name: "About Us", href: "#about" },
          { name: "Products", href: "#products" },
          { name: "Services", href: "#services" },
          { name: "Contact", href: "#contact" }
        ]
      },
      services: {
        title: "Our Services",
        items: [
          "Wholesale Supply",
          "Home Delivery",
          "Bulk Orders",
          "Subscription Plans",
          "Quality Assurance"
        ]
      },
      contact: {
        title: "Get in Touch",
        address: "Beach Road, Near Railway Station, Kozhikode, Kerala 673001",
        phone: "+91 94952 34567",
        email: "orders@greenvalleyvegetables.com",
        hours: "Mon-Sat: 6AM-8PM, Sun: 7AM-7PM"
      },
      social: {
        title: "Follow Us",
        whatsapp: "WhatsApp",
        facebook: "Facebook", 
        instagram: "Instagram",
        twitter: "Twitter"
      },
      newsletter: {
        title: "Daily Price Updates",
        description: "Get daily vegetable prices delivered to your WhatsApp",
        cta: "Subscribe for Prices"
      },
      bottom: {
        copyright: "© 2025 KPN Vegetables. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        madewith: "Made with",
        location: "in Kozhikode"
      }
    },
    ml: {
      business: {
        name: "ഗ്രീൻ വാലി വെജിറ്റബിൾസ്",
        tagline: "പുതിയത് • ഗുണനിലവാരം • വിശ്വാസം",
        description: "2010 മുതൽ കോഴിക്കോട്ടിലെ ഏറ്റവും വിശ്വസനീയമായ പച്ചക്കറി വിതരണക്കാരൻ. നഗരത്തിലുടനീളമുള്ള വീടുകൾക്കും ബിസിനസ്സുകൾക്കും പുതിയതും ഗുണമേന്മയുള്ളതുമായ പച്ചക്കറികൾ നൽകുന്നു."
      },
      quickLinks: {
        title: "പെട്ടെന്നുള്ള ലിങ്കുകൾ",
        links: [
          { name: "ഹോം", href: "#home" },
          { name: "ഞങ്ങളെക്കുറിച്ച്", href: "#about" },
          { name: "ഉൽപ്പന്നങ്ങൾ", href: "#products" },
          { name: "സേവനങ്ങൾ", href: "#services" },
          { name: "ബന്ധപ്പെടുക", href: "#contact" }
        ]
      },
      services: {
        title: "ഞങ്ങളുടെ സേവനങ്ങൾ",
        items: [
          "മൊത്ത വ്യാപാര വിതരണം",
          "വീട്ടിലെത്തിക്കൽ",
          "ബൾക്ക് ഓർഡറുകൾ",
          "സബ്‌സ്‌ക്രിപ്‌ഷൻ പ്ലാനുകൾ",
          "ഗുണനിലവാര ഉറപ്പ്"
        ]
      },
      contact: {
        title: "ബന്ധപ്പെടുക",
        address: "ബീച്ച് റോഡ്, റെയിൽവേ സ്റ്റേഷന് സമീപം, കോഴിക്കോട്, കേരളം 673001",
        phone: "+91 94952 34567",
        email: "orders@greenvalleyvegetables.com",
        hours: "തിങ്കൾ-ശനി: 6AM-8PM, ഞായർ: 7AM-7PM"
      },
      social: {
        title: "ഞങ്ങളെ പിന്തുടരുക",
        whatsapp: "വാട്സ്ആപ്പ്",
        facebook: "ഫേസ്ബുക്ക്",
        instagram: "ഇൻസ്റ്റാഗ്രാം",
        twitter: "ട്വിറ്റർ"
      },
      newsletter: {
        title: "ദൈനംദിന വില അപ്‌ഡേറ്റുകൾ",
        description: "നിങ്ങളുടെ വാട്സ്ആപ്പിലേക്ക് ദിവസേനയുള്ള പച്ചക്കറി വിലകൾ നേടുക",
        cta: "വിലകൾക്കായി സബ്‌സ്‌ക്രൈബ് ചെയ്യുക"
      },
      bottom: {
        copyright: "© 2025 ഗ്രീൻ വാലി വെജിറ്റബിൾസ്. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്.",
        privacy: "സ്വകാര്യതാ നയം",
        terms: "സേവന നിബന്ധനകൾ",
        madewith: "നിർമ്മിച്ചത്",
        location: "കോഴിക്കോട്ടിൽ"
      }
    }
  };

  const t = translations[language];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to subscribe to daily vegetable price updates.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  const handleNewsletterSubscribe = () => {
    const message = encodeURIComponent('Hello! Please add me to the daily vegetable price updates list.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  // Show scroll to top button when user scrolls down
  useState(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <footer className="bg-gradient-to-b from-primary-green to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Business Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-medium-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.business.name}</h3>
                <p className="text-light-green text-sm">{t.business.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t.business.description}
            </p>

            {/* Awards/Certifications */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm">Organic Approved</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Community Choice</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">{t.social.title}</h4>
              <div className="flex space-x-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={t.social.whatsapp}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={t.social.facebook}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={t.social.instagram}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={t.social.twitter}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.quickLinks.title}</h4>
            <nav className="space-y-3">
              {t.quickLinks.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Services */}
            <h4 className="text-lg font-bold mt-8 mb-4">{t.services.title}</h4>
            <div className="space-y-2">
              {t.services.items.map((service, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-light-green rounded-full" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.contact.title}</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-light-green flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">{t.contact.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-light-green" />
                <a 
                  href={`tel:${t.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-light-green" />
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm break-all"
                >
                  {t.contact.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-light-green" />
                <p className="text-gray-300 text-sm">{t.contact.hours}</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass-card p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-gray-900">{t.newsletter.title}</h5>
              <p className="text-gray-700 text-sm mb-4">{t.newsletter.description}</p>
              <button
                onClick={handleNewsletterSubscribe}
                className="w-full bg-gradient-green text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
              >
                {t.newsletter.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                {t.bottom.copyright}
              </p>
              <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-start">
                {t.bottom.madewith} <Heart className="w-4 h-4 text-red-400 mx-1" /> {t.bottom.location}
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                {t.bottom.privacy}
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                {t.bottom.terms}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-medium-green hover:bg-primary-green text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;