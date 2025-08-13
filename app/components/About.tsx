'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, Award, Truck, Clock, Leaf, Heart, Shield, Star } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ml';
}

const About = ({ language }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, customers: 0, varieties: 0, rating: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: "About KPN Vegetables",
      subtitle: "Your trusted partner for fresh, quality vegetables since 2010",
      story: "Founded by the Nair family in 2010, KPN Vegetables has been serving the Kozhikode community with the freshest produce directly from local Kerala farms. What started as a small family business has grown into the most trusted vegetable supplier in the region.",
      mission: "Our mission is to provide the freshest, highest quality vegetables at fair prices while supporting local farmers and promoting healthy eating in our community.",
      values: [
        {
          icon: Leaf,
          title: "Fresh & Organic",
          description: "Daily fresh vegetables from certified organic farms"
        },
        {
          icon: Heart,
          title: "Community First",
          description: "Supporting local farmers and serving our neighbors"
        },
        {
          icon: Shield,
          title: "Quality Assured",
          description: "Rigorous quality checks for every batch of vegetables"
        },
        {
          icon: Star,
          title: "Customer Satisfaction",
          description: "5-star service with a 99% customer satisfaction rate"
        }
      ],
      features: [
        "Direct sourcing from 50+ local farms",
        "Daily quality inspection by certified experts",
        "Temperature-controlled storage facilities",
        "Same-day delivery within Kozhikode city",
        "Wholesale and retail pricing options",
        "24/7 customer support in English and Malayalam"
      ],
      stats: {
        years: "15",
        customers: "5000",
        varieties: "50",
        rating: "4.9"
      },
      statsLabels: {
        years: "Years of Experience",
        customers: "Happy Customers",
        varieties: "Vegetable Varieties",
        rating: "Average Rating"
      }
    },
    ml: {
      title: "ഗ്രീൻ വാലി വെജിറ്റബിൾസിനെക്കുറിച്ച്",
      subtitle: "2010 മുതൽ പുതിയതും ഗുണമേന്മയുള്ളതുമായ പച്ചക്കറികളുടെ വിശ്വസ്ത പങ്കാളി",
      story: "2010-ൽ നായർ കുടുംബം സ്ഥാപിച്ച ഗ്രീൻ വാലി വെജിറ്റബിൾസ്, കേരളത്തിലെ പ്രാദേശിക കൃഷിയിടങ്ങളിൽ നിന്ന് നേരിട്ട് കോഴിക്കോട് സമൂഹത്തെ പുതിയ ഉൽപ്പന്നങ്ങൾ നൽകുന്നു. ഒരു ചെറിയ കുടുംബ ബിസിനസ്സായി തുടങ്ങിയത് പ്രദേശത്തെ ഏറ്റവും വിശ്വസനീയമായ പച്ചക്കറി വിതരണക്കാരനായി വളർന്നു.",
      mission: "പ്രാദേശിക കർഷകരെ പിന്തുണയ്‌ക്കുകയും ഞങ്ങളുടെ സമൂഹത്തിൽ ആരോഗ്യകരമായ ഭക്ഷണം പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യുന്നതിനൊപ്പം ന്യായമായ വിലയിൽ ഏറ്റവും പുതിയതും ഉയർന്ന നിലവാരമുള്ളതുമായ പച്ചക്കറികൾ നൽകുകയാണ് ഞങ്ങളുടെ ദൗത്യം.",
      values: [
        {
          icon: Leaf,
          title: "പുതിയതും ഓർഗാനിക്കും",
          description: "സാക്ഷ്യപ്പെടുത്തിയ ഓർഗാനിക് ഫാമുകളിൽ നിന്ന് ദിവസേന പുതിയ പച്ചക്കറികൾ"
        },
        {
          icon: Heart,
          title: "കമ്മ്യൂണിറ്റി ആദ്യം",
          description: "പ്രാദേശിക കർഷകരെ പിന്തുണയ്ക്കുകയും ഞങ്ങളുടെ അയൽക്കാർക്ക് സേവനം നൽകുകയും"
        },
        {
          icon: Shield,
          title: "ഗുണമേന്മ ഉറപ്പ്",
          description: "പച്ചക്കറികളുടെ ഓരോ ബാച്ചിനും കർശനമായ ഗുണനിലവാര പരിശോധന"
        },
        {
          icon: Star,
          title: "ഉപഭോക്തൃ സംതൃപ്തി",
          description: "99% കസ്റ്റമർ സാറ്റിസ്ഫാക്ഷൻ റേറ്റിനൊപ്പം 5-സ്റ്റാർ സേവനം"
        }
      ],
      features: [
        "50+ പ്രാദേശിക ഫാമുകളിൽ നിന്നുള്ള നേരിട്ടുള്ള സോഴ്‌സിംഗ്",
        "സാക്ഷ്യപ്പെടുത്തിയ വിദഗ്ധരുടെ ദൈനംദിന ഗുണനിലവാര പരിശോധന",
        "താപനില നിയന്ത്രിത സംഭരണ സൗകര്യങ്ങൾ",
        "കോഴിക്കോട് നഗരത്തിനുള്ളിൽ അതേ ദിവസം ഡെലിവറി",
        "മൊത്ത വിൽപന, ചില്ലറ വിൽപന വിലയിടൽ ഓപ്ഷനുകൾ",
        "ഇംഗ്ലീഷിലും മലയാളത്തിലും 24/7 കസ്റ്റമർ സപ്പോർട്ട്"
      ],
      stats: {
        years: "15",
        customers: "5000",
        varieties: "50",
        rating: "4.9"
      },
      statsLabels: {
        years: "വർഷത്തെ അനുഭവം",
        customers: "സന്തുഷ്ട ഉപഭോക്താക്കൾ",
        varieties: "പച്ചക്കറി ഇനങ്ങൾ",
        rating: "ശരാശരി റേറ്റിംഗ്"
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          const duration = 2000;
          const steps = 60;
          const increment = duration / steps;
          
          const targets = {
            years: parseInt(t.stats.years),
            customers: parseInt(t.stats.customers),
            varieties: parseInt(t.stats.varieties),
            rating: parseFloat(t.stats.rating)
          };

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCounters({
              years: Math.floor(targets.years * progress),
              customers: Math.floor(targets.customers * progress),
              varieties: Math.floor(targets.varieties * progress),
              rating: parseFloat((targets.rating * progress).toFixed(1))
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters(targets);
            }
          }, increment);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [t.stats]);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-medium-green rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-light-green rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-green rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Story & Mission */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-primary-green mb-4 flex items-center">
                <Users className="w-7 h-7 mr-3 text-medium-green" />
                Our Story
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.story}
              </p>
              <div className="bg-gradient-light p-4 rounded-lg">
                <p className="text-gray-800 font-medium leading-relaxed">
                  {t.mission}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(counters).map(([key, value], index) => (
                <div key={key} className="glass-green p-6 rounded-xl text-center hover-lift">
                  <div className="text-3xl font-bold text-medium-green mb-2">
                    {key === 'rating' ? `${value}★` : `${value}+`}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {t.statsLabels[key as keyof typeof t.statsLabels]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary-green mb-8 text-center lg:text-left">
              Our Core Values
            </h3>
            {t.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover-lift transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-green p-3 rounded-full flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-primary-green text-center mb-12">
            Why Choose KPN Vegetables?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl">
                    {index === 0 && '🚜'}
                    {index === 1 && '🔍'}
                    {index === 2 && '❄️'}
                    {index === 3 && '🚚'}
                    {index === 4 && '💰'}
                    {index === 5 && '📞'}
                  </div>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-green p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <Award className="w-12 h-12 text-medium-green" />
              <h3 className="text-2xl font-bold text-primary-green">
                Recognized Excellence
              </h3>
              <Award className="w-12 h-12 text-medium-green" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-medium-green mb-2">2023</div>
                <p className="text-gray-700">Best Vegetable Supplier - Kozhikode Business Awards</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-medium-green mb-2">2022</div>
                <p className="text-gray-700">Organic Excellence Certificate - Kerala Agricultural Board</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-medium-green mb-2">2021</div>
                <p className="text-gray-700">Customer Choice Award - Malabar Chamber of Commerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;