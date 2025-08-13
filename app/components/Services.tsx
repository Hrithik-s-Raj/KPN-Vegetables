'use client';

import { useState, useEffect, useRef } from 'react';
import { Truck, Users, Clock, Shield, Phone, MapPin, Star, CheckCircle } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'ml';
}

const Services = ({ language }: ServicesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive vegetable supply solutions for all your needs",
      services: [
        {
          icon: Users,
          title: "Wholesale Supply",
          description: "Bulk vegetable supply for restaurants, hotels, and catering businesses",
          features: [
            "Minimum order quantity: 50kg",
            "Special wholesale pricing",
            "Daily fresh stock guarantee",
            "Dedicated account manager",
            "Flexible payment terms"
          ],
          highlight: "Best prices for bulk orders"
        },
        {
          icon: Truck,
          title: "Retail & Home Delivery",
          description: "Fresh vegetables delivered to your doorstep daily",
          features: [
            "Same-day delivery in Kozhikode",
            "Free delivery on orders above ₹500",
            "Morning 6AM - 10AM delivery slots",
            "Evening 4PM - 8PM delivery slots",
            "Contactless delivery available"
          ],
          highlight: "Free delivery on orders ₹500+"
        },
        {
          icon: Clock,
          title: "Subscription Service",
          description: "Regular vegetable delivery based on your weekly/monthly needs",
          features: [
            "Customizable vegetable baskets",
            "Weekly or monthly subscriptions",
            "20% discount on subscription orders",
            "Pause or modify anytime",
            "Priority customer support"
          ],
          highlight: "20% savings with subscription"
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "100% quality guarantee with expert selection and handling",
          features: [
            "Hand-picked by quality experts",
            "Freshness guarantee within 24 hours",
            "Temperature-controlled storage",
            "Organic certification available",
            "100% satisfaction guarantee"
          ],
          highlight: "100% freshness guaranteed"
        }
      ],
      deliveryZones: {
        title: "Delivery Areas in Kozhikode",
        zones: [
          "Kozhikode City Center",
          "Mananchira & Beach Road",
          "Palayam & Civil Station",
          "Mavoor Road & Arayidathupalam",
          "Medical College & Mini Bypass",
          "Bilathikkulam & Panniyankara",
          "Westhill & Vengeri",
          "Thondayad & Elathur"
        ]
      },
      pricing: {
        title: "Transparent Pricing",
        note: "All prices are updated daily based on market rates. No hidden charges.",
        features: [
          "Daily updated market rates",
          "No delivery charges on orders ₹500+",
          "Bulk discount starting from 50kg",
          "Seasonal offers and discounts",
          "GST included in all prices"
        ]
      },
      contact: {
        title: "Contact Our Service Team",
        phone: "+91 94952 34567",
        whatsapp: "WhatsApp Us",
        hours: "6:00 AM - 8:00 PM (Mon-Sat), 7:00 AM - 7:00 PM (Sun)"
      }
    },
    ml: {
      title: "ഞങ്ങളുടെ സേവനങ്ങൾ",
      subtitle: "നിങ്ങളുടെ എല്ലാ ആവശ്യങ്ങൾക്കുമുള്ള സമഗ്രമായ പച്ചക്കറി വിതരണ പരിഹാരങ്ങൾ",
      services: [
        {
          icon: Users,
          title: "മൊത്ത വ്യാപാര വിതരണം",
          description: "റെസ്റ്റോറന്റുകൾ, ഹോട്ടലുകൾ, കാറ്ററിംഗ് ബിസിനസ്സുകൾക്കുള്ള ബൾക്ക് പച്ചക്കറി വിതരണം",
          features: [
            "മിനിമം ഓർഡർ അളവ്: 50 കിലോ",
            "പ്രത്യേക മൊത്ത വിൽപന വില",
            "ദിവസേന പുതിയ സ്റ്റോക്ക് ഗ്യാരണ്ടി",
            "അർപ്പിത അക്കൗണ്ട് മാനേജർ",
            "വഴക്കമുള്ള പേയ്മെന്റ് നിബന്ധനകൾ"
          ],
          highlight: "ബൾക്ക് ഓർഡറുകൾക്ക് മികച്ച വില"
        },
        {
          icon: Truck,
          title: "ചില്ലറയും വീട്ടിലെത്തിക്കലും",
          description: "ദിവസേന നിങ്ങളുടെ വീട്ടുവാതിൽക്കൽ പുതിയ പച്ചക്കറികൾ",
          features: [
            "കോഴിക്കോട്ടിൽ അതേ ദിവസം ഡെലിവറി",
            "₹500-ന് മുകളിലുള്ള ഓർഡറുകൾക്ക് സൗജന്യ ഡെലിവറി",
            "രാവിലെ 6AM - 10AM ഡെലിവറി സ്ലോട്ടുകൾ",
            "വൈകുന്നേരം 4PM - 8PM ഡെലിവറി സ്ലോട്ടുകൾ",
            "കോണ്ടാക്ട്‌ലെസ് ഡെലിവറി ലഭ്യം"
          ],
          highlight: "₹500+ ഓർഡറുകൾക്ക് സൗജന്യ ഡെലിവറി"
        },
        {
          icon: Clock,
          title: "സബ്‌സ്‌ക്രിപ്‌ഷൻ സേവനം",
          description: "നിങ്ങളുടെ പ്രതിവാര/മാസിക ആവശ്യങ്ങൾ അടിസ്ഥാനമാക്കി പതിവ് പച്ചക്കറി ഡെലിവറി",
          features: [
            "കസ്റ്റമൈസ് ചെയ്യാവുന്ന പച്ചക്കറി കൊട്ടകൾ",
            "പ്രതിവാര അല്ലെങ്കിൽ പ്രതിമാസ സബ്‌സ്‌ക്രിപ്‌ഷനുകൾ",
            "സബ്‌സ്‌ക്രിപ്‌ഷൻ ഓർഡറുകളിൽ 20% കിഴിവ്",
            "എപ്പോൾ വേണമെങ്കിലും തൽക്കാലം നിർത്തുകയോ മാറ്റുകയോ ചെയ്യുക",
            "പ്രമുഖ കസ്റ്റമർ സപ്പോർട്ട്"
          ],
          highlight: "സബ്‌സ്‌ക്രിപ്‌ഷനിൽ 20% ലാഭം"
        },
        {
          icon: Shield,
          title: "ഗുണനിലവാര ഉറപ്പ്",
          description: "വിദഗ്ധ തിരഞ്ഞെടുക്കലും കൈകാര്യവും ചെയ്യുന്ന 100% ഗുണനിലവാര ഗ്യാരണ്ടി",
          features: [
            "ഗുണനിലവാര വിദഗ്ധർ കൈകൊണ്ട് തിരഞ്ഞെടുത്തത്",
            "24 മണിക്കൂറിനുള്ളിൽ പുതുമ ഗ്യാരണ്ടി",
            "താപനില നിയന്ത്രിത സംഭരണം",
            "ഓർഗാനിക് സർട്ടിഫിക്കേഷൻ ലഭ്യം",
            "100% സംതൃപ്തി ഗ്യാരണ്ടി"
          ],
          highlight: "100% പുതുമ ഗ്യാരണ്ടീഡ്"
        }
      ],
      deliveryZones: {
        title: "കോഴിക്കോട്ടിലെ ഡെലിവറി പ്രദേശങ്ങൾ",
        zones: [
          "കോഴിക്കോട് സിറ്റി സെന്റർ",
          "മനഞ്ചിറയും ബീച്ച് റോഡും",
          "പാലയത്തും സിവിൽ സ്റ്റേഷനും",
          "മാവൂർ റോഡും അരയിടത്തുപാലവും",
          "മെഡിക്കൽ കോളേജും മിനി ബൈപ്പാസും",
          "ബിലാത്തിക്കുളവും പന്നിയൻകരയും",
          "വെസ്റ്റ്ഹില്ലും വെങ്ങേരിയും",
          "തൊണ്ടയാടും ഇളത്തൂരും"
        ]
      },
      pricing: {
        title: "സുതാര്യമായ വിലനിർണ്ണയം",
        note: "എല്ലാ വിലകളും മാർക്കറ്റ് നിരക്കുകളുടെ അടിസ്ഥാനത്തിൽ ദിവസേന അപ്‌ഡേറ്റ് ചെയ്യുന്നു. മറഞ്ഞിരിക്കുന്ന ചാർജുകളില്ല.",
        features: [
          "ദിവസേന അപ്‌ഡേറ്റ് ചെയ്യുന്ന മാർക്കറ്റ് നിരക്കുകൾ",
          "₹500+ ഓർഡറുകളിൽ ഡെലിവറി ചാർജുകളില്ല",
          "50 കിലോയിൽ നിന്ന് ബൾക്ക് ഡിസ്‌കൗണ്ട്",
          "സീസണൽ ഓഫറുകളും കിഴിവുകളും",
          "എല്ലാ വിലകളിലും GST ഉൾപ്പെടുത്തിയിട്ടുണ്ട്"
        ]
      },
      contact: {
        title: "ഞങ്ങളുടെ സർവീസ് ടീമിനെ ബന്ധപ്പെടുക",
        phone: "+91 94952 34567",
        whatsapp: "വാട്സ്ആപ്പ് ചെയ്യുക",
        hours: "6:00 AM - 8:00 PM (തിങ്കൾ-ശനി), 7:00 AM - 7:00 PM (ഞായർ)"
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-medium-green rounded-full animate-float" />
        <div className="absolute top-60 right-20 w-32 h-32 bg-light-green rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-primary-green rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-green p-4 rounded-full flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Highlight */}
                <div className="bg-gradient-light p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-medium-green" />
                    <span className="font-semibold text-primary-green">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-medium-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Zones & Pricing */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Delivery Zones */}
          <div className={`glass-green p-8 rounded-2xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
              <MapPin className="w-7 h-7 mr-3 text-medium-green" />
              {t.deliveryZones.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.deliveryZones.zones.map((zone, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-2 h-2 bg-medium-green rounded-full" />
                  <span className="text-gray-700 font-medium text-sm">{zone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className={`glass-card p-8 rounded-2xl ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold text-primary-green mb-6">
              {t.pricing.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {t.pricing.note}
            </p>
            <div className="space-y-4">
              {t.pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-medium-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="glass-green p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-green mb-4">
              {t.contact.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-medium-green mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">Phone</div>
                <a 
                  href={`tel:${t.contact.phone}`}
                  className="text-medium-green hover:text-primary-green font-medium"
                >
                  {t.contact.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 text-medium-green mx-auto mb-3 text-2xl">📱</div>
                <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                <button
                  onClick={handleWhatsApp}
                  className="text-medium-green hover:text-primary-green font-medium"
                >
                  {t.contact.whatsapp}
                </button>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-medium-green mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">Hours</div>
                <div className="text-sm text-gray-700">{t.contact.hours}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919495234567" className="btn-primary">
                Call Now: +91 94952 34567
              </a>
              <button onClick={handleWhatsApp} className="btn-secondary">
                Start WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;