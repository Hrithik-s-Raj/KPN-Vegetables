'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, ShoppingCart, Star, Leaf, Truck, Phone } from 'lucide-react';

interface Vegetable {
  id: string;
  name: string;
  malayalamName: string;
  image: string;
  pricePerKg: number;
  unit: string;
  inStock: boolean;
  lastUpdated: string;
  category: string;
  description: string;
}

interface ProductsProps {
  language: 'en' | 'ml';
}

const Products = ({ language }: ProductsProps) => {
  const [vegetables, setVegetables] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isVisible, setIsVisible] = useState(false);

  const translations = {
    en: {
      title: "Fresh Vegetables Catalog",
      subtitle: "Premium quality vegetables at competitive prices",
      search: "Search vegetables...",
      filter: "Filter by category",
      sort: "Sort by",
      categories: {
        all: "All Categories",
        fruits: "Fruit Vegetables",
        roots: "Root Vegetables",
        greens: "Leafy Greens",
        bulbs: "Bulbs",
        pods: "Pods",
        gourds: "Gourds",
        spices: "Spices",
        herbs: "Herbs",
        tubers: "Tubers"
      },
      sortOptions: {
        name: "Name",
        price: "Price",
        category: "Category"
      },
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      perKg: "per kg",
      perBunch: "per bunch",
      perPiece: "per piece",
      order: "Order Now",
      viewAll: "View All Products",
      lastUpdated: "Price updated",
      organic: "Organic",
      fresh: "Fresh Daily"
    },
    ml: {
      title: "പുതിയ പച്ചക്കറി കാറ്റലോഗ്",
      subtitle: "മത്സര വിലയിൽ മികച്ച ഗുണനിലവാരമുള്ള പച്ചക്കറികൾ",
      search: "പച്ചക്കറികൾ തിരയുക...",
      filter: "വിഭാഗം അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക",
      sort: "അടുക്കുക",
      categories: {
        all: "എല്ലാ വിഭാഗങ്ങളും",
        fruits: "ഫ്രൂട്ട് വെജിറ്റബിൾസ്",
        roots: "വേര് പച്ചക്കറികൾ",
        greens: "ഇലക്കറികൾ",
        bulbs: "ബൾബ് വെജിറ്റബിൾസ്",
        pods: "കായ്കൾ",
        gourds: "മത്തങ്ങകൾ",
        spices: "സുഗന്ധവ്യഞ്ജനങ്ങൾ",
        herbs: "ഔഷധസസ്യങ്ങൾ",
        tubers: "കിഴങ്ങുകൾ"
      },
      sortOptions: {
        name: "പേര്",
        price: "വില",
        category: "വിഭാഗം"
      },
      inStock: "സ്റ്റോക്കിൽ ഉണ്ട്",
      outOfStock: "സ്റ്റോക്കിൽ ഇല്ല",
      perKg: "കിലോയ്ക്ക്",
      perBunch: "കെട്ടിന്",
      perPiece: "എണ്ണത്തിന്",
      order: "ഇപ്പോൾ ഓർഡർ ചെയ്യുക",
      viewAll: "എല്ലാ ഉൽപ്പന്നങ്ങളും കാണുക",
      lastUpdated: "വില അപ്ഡേറ്റ് ചെയ്തത്",
      organic: "ഓർഗാനിക്",
      fresh: "ദിവസേന പുതിയത്"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        setLoading(true);
        // Simulating API call - in real app, this would be an actual API endpoint
        const response = await import('../data/vegetables.json');
        setVegetables(response.vegetables);
      } catch (error) {
        console.error('Failed to fetch vegetables:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVegetables();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredAndSortedVegetables = useMemo(() => {
    let filtered = vegetables.filter((vegetable:any) => {
      const matchesSearch = vegetable.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vegetable.malayalamName.includes(searchTerm) ||
                          vegetable.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || vegetable.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a:any, b:any) => {
      switch (sortBy) {
        case 'price':
          return a.pricePerKg - b.pricePerKg;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [vegetables, searchTerm, selectedCategory, sortBy]);

  const categories = useMemo(() => {
    // const uniqueCategories = [...new Set(vegetables.map(v => v.category))];
    const uniqueCategories = vegetables
  .map(v => v.category)
  .reduce((acc: string[], category) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []);
    return uniqueCategories.sort();
  }, [vegetables]);

  const handleWhatsAppOrder = (vegetable: Vegetable) => {
    const message = encodeURIComponent(
      `Hello! I would like to order ${vegetable.name} (${vegetable.malayalamName}) at ₹${vegetable.pricePerKg}/${vegetable.unit}. Please confirm availability.`
    );
    window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-64 h-8 mx-auto skeleton rounded mb-4"></div>
            <div className="w-96 h-6 mx-auto skeleton rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="w-full h-48 skeleton rounded-lg mb-4"></div>
                <div className="w-3/4 h-6 skeleton rounded mb-2"></div>
                <div className="w-1/2 h-4 skeleton rounded mb-4"></div>
                <div className="w-full h-10 skeleton rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-medium-green rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="all">{t.categories.all}</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {t.categories[category as keyof typeof t.categories] || category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative min-w-[150px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medium-green focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="name">{t.sortOptions.name}</option>
                  <option value="price">{t.sortOptions.price}</option>
                  <option value="category">{t.sortOptions.category}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-600">
            {filteredAndSortedVegetables.length === vegetables.length 
              ? `Showing all ${vegetables.length} vegetables`
              : `Showing ${filteredAndSortedVegetables.length} of ${vegetables.length} vegetables`
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredAndSortedVegetables.map((vegetable, index) => (
            <div
              key={vegetable.id}
              className={`glass-card rounded-xl overflow-hidden hover-lift transition-all duration-300 group ${
                isVisible ? 'animate-grow' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vegetable.image}
                  alt={vegetable.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                  vegetable.inStock 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {vegetable.inStock ? t.inStock : t.outOfStock}
                </div>

                {/* Quick Action */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleWhatsAppOrder(vegetable)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    disabled={!vegetable.inStock}
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                  </button>
                </div>

                {/* Features */}
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-green-600 flex items-center space-x-1">
                    <Leaf className="w-3 h-3" />
                    <span>{t.organic}</span>
                  </span>
                  <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-blue-600 flex items-center space-x-1">
                    <Truck className="w-3 h-3" />
                    <span>{t.fresh}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {language === 'en' ? vegetable.name : vegetable.malayalamName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {language === 'en' ? vegetable.malayalamName : vegetable.name}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {vegetable.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-medium-green">
                      ₹{vegetable.pricePerKg}
                    </span>
                    <span className="text-sm text-gray-600">
                      {vegetable.unit === 'kg' ? t.perKg : 
                       vegetable.unit === 'bunch' ? t.perBunch : t.perPiece}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {t.lastUpdated} {formatDate(vegetable.lastUpdated)}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.8 (120+ reviews)</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleWhatsAppOrder(vegetable)}
                  disabled={!vegetable.inStock}
                  className={`w-full py-3 px-4 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    vegetable.inStock
                      ? 'bg-gradient-green text-white hover:shadow-lg hover:scale-105 active:scale-95'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t.order}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedVegetables.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No vegetables found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-green p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-green mb-4">
              Need help choosing the right vegetables?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you select the freshest vegetables for your needs. 
              Contact us for bulk orders, special requirements, or seasonal recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919495234567" className="btn-primary">
                Call Expert: +91 94952 34567
              </a>
              <button 
                onClick={() => {
                  const message = encodeURIComponent('Hello! I need help choosing vegetables for my requirements.');
                  window.open(`https://wa.me/919495234567?text=${message}`, '_blank');
                }}
                className="btn-secondary"
              >
                WhatsApp Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;