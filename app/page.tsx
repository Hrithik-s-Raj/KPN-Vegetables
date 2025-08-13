'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ml'>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add Google Analytics
    if (typeof window !== 'undefined') {
      // Google Analytics would be added here
      console.log('Google Analytics initialized');
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-green rounded-full flex items-center justify-center animate-pulse">
            <div className="text-white text-2xl">🥬</div>
          </div>
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-green rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
          <p className="text-gray-600 mt-4 animate-pulse">Loading fresh vegetables...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-medium-green text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <Header language={language} setLanguage={setLanguage} />
      
      <main id="main" role="main">
        <Hero language={language} />
        <About language={language} />
        <Products language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
}