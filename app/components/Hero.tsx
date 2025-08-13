'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Star, Truck, Clock, Phone } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ml';
}

const Hero = ({ language }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const translations = {
    en: {
      title: "Fresh Vegetables Daily",
      subtitle: "From Kerala's finest farms to your table",
      description: "Premium quality fresh vegetables at wholesale and retail prices. Serving Kozhikode with the freshest produce since 2010.",
      cta1: "View Products",
      cta2: "Contact Us",
      stats: {
        experience: "15+ Years Experience",
        customers: "5000+ Happy Customers",
        varieties: "50+ Vegetable Varieties",
        delivery: "Same Day Delivery"
      },
      features: [
        "Farm Fresh Daily",
        "Best Prices Guaranteed",
        "Quality Assured",
        "Home Delivery Available"
      ]
    },
    ml: {
      title: "പുതിയ പച്ചക്കറികൾ ദിവസേന",
      subtitle: "കേരളത്തിലെ മികച്ച കൃഷിയിടങ്ങളിൽ നിന്ന് നിങ്ങളുടെ മേശയിലേക്ക്",
      description: "മൊത്ത വ്യാപാരത്തിലും ചില്ലറ വിൽപനയിലും മികച്ച പച്ചക്കറികൾ. 2010 മുതൽ കോഴിക്കോട് പുതിയ ഉൽപ്പന്നങ്ങൾ നൽകുന്നു.",
      cta1: "ഉൽപ്പന്നങ്ങൾ കാണുക",
      cta2: "ബന്ധപ്പെടുക",
      stats: {
        experience: "15+ വർഷത്തെ അനുഭവം",
        customers: "5000+ സന്തുഷ്ട ഉപഭോക്താക്കൾ",
        varieties: "50+ പച്ചക്കറി ഇനങ്ങൾ",
        delivery: "അതേ ദിവസം ഡെലിവറി"
      },
      features: [
        "ദിവസേന പുതിയത്",
        "മികച്ച വില ഉറപ്പ്",
        "ഗുണമേന്മ ഉറപ്പ്",
        "വീട്ടിലെത്തിക്കൽ ലഭ്യം"
      ]
    }
  };

  const t = translations[language];

  const slides = [
    {
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Fresh Tomatoes",
      malayalam: "പുതിയ തക്കാളി"
    },
    {
      image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Green Vegetables",
      malayalam: "പച്ച പച്ചക്കറികൾ"
    },
    {
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Root Vegetables",
      malayalam: "വേര് പച്ചക്കറികൾ"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const floatingIcons = [
    { icon: '🥕', delay: '0s', x: '10%', y: '20%' },
    { icon: '🥬', delay: '1s', x: '85%', y: '15%' },
    { icon: '🍅', delay: '2s', x: '15%', y: '70%' },
    { icon: '🥒', delay: '0.5s', x: '80%', y: '60%' },
    { icon: '🌶️', delay: '1.5s', x: '20%', y: '40%' },
    { icon: '🥔', delay: '2.5s', x: '75%', y: '35%' }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know about your vegetable prices.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute text-4xl md:text-5xl animate-float opacity-20"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
              animationDuration: `${6 + index * 0.5}s`
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-responsive-xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                <span className="text-medium-green">{t.title.split(' ')[0]}</span>{' '}
                <span className="text-primary-green">{t.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-responsive-md text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t.subtitle}
              </p>
              
              <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {t.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {t.features.map((feature, index) => (
                <div key={index} className="glass-card p-4 rounded-lg text-center hover-lift">
                  <div className="text-2xl mb-2">
                    {index === 0 && '🌱'}
                    {index === 1 && '💰'}
                    {index === 2 && '✅'}
                    {index === 3 && '🚚'}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="#products"
                className="btn-primary inline-flex items-center space-x-2 justify-center"
              >
                <span>{t.cta1}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="btn-secondary inline-flex items-center space-x-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>{t.cta2}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              {Object.values(t.stats).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-medium-green mb-1">
                    {index === 0 && '15+'}
                    {index === 1 && '5000+'}
                    {index === 2 && '50+'}
                    {index === 3 && '1'}
                  </div>
                  <p className="text-sm text-gray-600">{stat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="flex-1 lg:pl-12 mt-12 lg:mt-0 w-full">
            <div className="relative max-w-lg mx-auto">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Content on Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? slides[currentSlide].title : slides[currentSlide].malayalam}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm">Premium Quality</span>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-medium-green scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-light-green/20 rounded-full animate-pulse-green" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-medium-green/10 rounded-full animate-bounce-gentle" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-r from-light-green/10 to-medium-green/10" style={{
        clipPath: 'polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)'
      }} />
    </section>
  );
};

export default Hero;