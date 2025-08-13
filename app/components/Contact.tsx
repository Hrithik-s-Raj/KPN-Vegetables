'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Star } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ml';
}

const Contact = ({ language }: ContactProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: "Get In Touch",
      subtitle: "Contact us for fresh vegetables, bulk orders, or any queries",
      form: {
        title: "Send us a Message",
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        preferredTime: "Preferred Contact Time",
        timeOptions: {
          morning: "Morning (6AM - 12PM)",
          afternoon: "Afternoon (12PM - 4PM)",
          evening: "Evening (4PM - 8PM)"
        },
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message sent successfully! We'll contact you within 2 hours."
      },
      contact: {
        title: "Contact Information",
        address: "Beach Road, Near Railway Station, Kozhikode, Kerala 673001",
        phone: "+91 94952 34567",
        whatsapp: "+91 94952 34567",
        email: "orders@greenvalleyvegetables.com",
        hours: {
          title: "Business Hours",
          weekdays: "Monday - Saturday: 6:00 AM - 8:00 PM",
          sunday: "Sunday: 7:00 AM - 7:00 PM"
        }
      },
      quickActions: {
        title: "Quick Actions",
        call: "Call Now",
        whatsapp: "WhatsApp",
        directions: "Get Directions",
        priceList: "Today's Price List"
      },
      map: {
        title: "Visit Our Store",
        description: "Located in the heart of Kozhikode, easily accessible by all transport modes"
      },
      testimonials: {
        title: "What Our Customers Say",
        reviews: [
          {
            name: "Priya Nair",
            location: "Mavoor Road",
            rating: 5,
            text: "Excellent quality vegetables! Fresh delivery every morning. Best prices in Kozhikode."
          },
          {
            name: "Rajesh Kumar",
            location: "Palayam",
            rating: 5,
            text: "Amazing service for my restaurant. Always on time with bulk orders. Highly recommend!"
          },
          {
            name: "Suma Devi",
            location: "Medical College",
            rating: 5,
            text: "Home delivery is so convenient. Quality is always consistent. Great customer service!"
          }
        ]
      }
    },
    ml: {
      title: "ബന്ധപ്പെടുക",
      subtitle: "പുതിയ പച്ചക്കറികൾ, ബൾക്ക് ഓർഡറുകൾ, അല്ലെങ്കിൽ എന്തെങ്കിലും ചോദ്യങ്ങൾക്കായി ഞങ്ങളെ ബന്ധപ്പെടുക",
      form: {
        title: "ഞങ്ങൾക്ക് ഒരു സന്ദേശം അയയ്ക്കുക",
        name: "പേര്",
        phone: "ഫോൺ നമ്പർ",
        email: "ഇമെയിൽ വിലാസം",
        subject: "വിഷയം",
        message: "നിങ്ങളുടെ സന്ദേശം",
        preferredTime: "ബന്ധപ്പെടാൻ അനുകൂലമായ സമയം",
        timeOptions: {
          morning: "രാവിലെ (6AM - 12PM)",
          afternoon: "ഉച്ചയ്ക്ക് (12PM - 4PM)",
          evening: "വൈകുന്നേരം (4PM - 8PM)"
        },
        submit: "സന്ദേശം അയയ്ക്കുക",
        submitting: "അയയ്ക്കുന്നു...",
        success: "സന്ദേശം വിജയകരമായി അയച്ചു! ഞങ്ങൾ 2 മണിക്കൂറിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും."
      },
      contact: {
        title: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        address: "ബീച്ച് റോഡ്, റെയിൽവേ സ്റ്റേഷന് സമീപം, കോഴിക്കോട്, കേരളം 673001",
        phone: "+91 94952 34567",
        whatsapp: "+91 94952 34567",
        email: "orders@greenvalleyvegetables.com",
        hours: {
          title: "ബിസിനസ്സ് സമയം",
          weekdays: "തിങ്കൾ - ശനി: 6:00 AM - 8:00 PM",
          sunday: "ഞായർ: 7:00 AM - 7:00 PM"
        }
      },
      quickActions: {
        title: "പെട്ടെന്നുള്ള ആക്ഷനുകൾ",
        call: "ഇപ്പോൾ വിളിക്കുക",
        whatsapp: "വാട്സ്ആപ്പ്",
        directions: "വഴികൾ കണ്ടെത്തുക",
        priceList: "ഇന്നത്തെ വില പട്ടിക"
      },
      map: {
        title: "ഞങ്ങളുടെ സ്റ്റോർ സന്ദർശിക്കുക",
        description: "കോഴിക്കോട്ടിന്റെ ഹൃദയഭാഗത്ത് സ്ഥിതി ചെയ്യുന്നു, എല്ലാ ഗതാഗത മാർഗങ്ങളിലും എളുപ്പത്തിൽ എത്തിച്ചേരാം"
      },
      testimonials: {
        title: "ഞങ്ങളുടെ ഉപഭോക്താക്കൾ പറയുന്നത്",
        reviews: [
          {
            name: "പ്രിയ നായർ",
            location: "മാവൂർ റോഡ്",
            rating: 5,
            text: "മികച്ച നിലവാരമുള്ള പച്ചക്കറികൾ! എല്ലാ ദിവസവും രാവിലെ പുതിയ ഡെലിവറി. കോഴിക്കോട്ടിലെ മികച്ച വില."
          },
          {
            name: "രാജേഷ് കുമാർ",
            location: "പാലയം",
            rating: 5,
            text: "എന്റെ റെസ്റ്റോറന്റിന് വേണ്ടി അതിശയകരമായ സേവനം. ബൾക്ക് ഓർഡറുകൾ എപ്പോഴും സമയത്ത്. വളരെ ശുപാർശ ചെയ്യുന്നു!"
          },
          {
            name: "സുമ ദേവി",
            location: "മെഡിക്കൽ കോളേജ്",
            rating: 5,
            text: "ഹോം ഡെലിവറി വളരെ സൗകര്യപ്രദമാണ്. ഗുണനിലവാരം എപ്പോഴും സ്ഥിരമാണ്. മികച്ച കസ്റ്റമർ സേവനം!"
          }
        ]
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Send WhatsApp message with form data
    const message = encodeURIComponent(
      `New Contact Form Submission:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nPreferred Time: ${formData.preferredTime}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know about your vegetable prices and availability.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  const handleDirections = () => {
    // Open Google Maps with directions to the store
    window.open('https://maps.google.com/maps?q=Green+Valley+Vegetables+Beach+Road+Kozhikode+Kerala', '_blank');
  };

  const handlePriceList = () => {
    const message = encodeURIComponent('Hello! Please share today\'s vegetable price list.');
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-medium-green rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`
            }}
          />
        ))}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-medium-green" />
                {t.form.title}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">Thank you!</h4>
                  <p className="text-gray-600">{t.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.subject} *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.preferredTime}
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">{t.form.timeOptions.morning}</option>
                        <option value="afternoon">{t.form.timeOptions.afternoon}</option>
                        <option value="evening">{t.form.timeOptions.evening}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t.form.submit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Contact Details */}
            <div className="glass-green p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                {t.contact.title}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-medium-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700 leading-relaxed">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-medium-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone & WhatsApp</h4>
                    <a 
                      href={`tel:${t.contact.phone}`}
                      className="text-medium-green hover:text-primary-green font-medium block"
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-medium-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href={`mailto:${t.contact.email}`}
                      className="text-medium-green hover:text-primary-green font-medium"
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-medium-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.contact.hours.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.contact.hours.weekdays}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.contact.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                {t.quickActions.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+919495234567"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{t.quickActions.call}</span>
                </a>
                
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{t.quickActions.whatsapp}</span>
                </button>
                
                <button
                  onClick={handleDirections}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{t.quickActions.directions}</span>
                </button>
                
                <button
                  onClick={handlePriceList}
                  className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <span className="w-6 h-6 mx-auto mb-2 text-xl">💰</span>
                  <span className="text-sm font-medium">{t.quickActions.priceList}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-green mb-4 text-center">
              {t.map.title}
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              {t.map.description}
            </p>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2547842048!2d75.77842331422783!3d11.258753992113544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659c4b74c0b1f%3A0xa8b9f5b8cfa9e7e9!2sBeach%20Rd%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1642765498721!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KPN Vegetables Location"
              />
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-primary-green text-center mb-12">
            {t.testimonials.title}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.reviews.map((review, index) => (
              <div key={index} className="glass-green p-6 rounded-xl text-center hover-lift">
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;