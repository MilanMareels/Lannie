import React, { useEffect, useState } from "react";

const LannieWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll(".scroll-fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollAnimations);

    // Initial check
    handleScrollAnimations();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Lannie</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">Home</button>
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">Diensten</button>
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">Portfolio</button>
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">Over ons</button>
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url("https://readdy.ai/api/search-image?query=sophisticated%20modern%20office%20workspace%20with%20sleek%20laptop%20displaying%20website%20code%20elegant%20lighting%20professional%20atmosphere%20clean%20white%20desk%20minimal%20setup%20luxury%20tech%20environment&width=1440&height=1024&seq=hero-bg-002&orientation=landscape")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-shape-1"></div>
          <div className="hero-shape-2"></div>
          <div className="hero-shape-3"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="hero-content">
                <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Websites die
                  <span className="text-blue-600 block hero-highlight">vooroplopen</span>
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
                  Moderne, krachtige websites die uw bedrijf naar het volgende niveau tillen. Van concept tot conversie.
                </p>
                <div className="hero-cta flex flex-col sm:flex-row gap-4">
                  <button className="rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                    Ontdek onze pakketten
                  </button>
                  <button className="rounded-button whitespace-nowrap border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer">
                    Bekijk portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <div className="w-6 h-12 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 scroll-dot"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Scroll</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Onze Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kies het pakket dat perfect bij uw behoeften past. Van eenvoudige presentaties tot complexe webapplicaties.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Basic Pakket</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">€199</div>
                <p className="text-gray-600">Perfect voor starters</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">One-page website</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Responsief design</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Basis SEO optimalisatie</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Contactformulier</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Snelle laadtijden</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">30 dagen ondersteuning</span>
                </li>
              </ul>
              <button className="rounded-button whitespace-nowrap w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition-colors duration-200 cursor-pointer">Meer info</button>
            </div>

            {/* Advanced Package */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Populair</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Pakket</h3>
                <div className="text-5xl font-bold text-purple-600 mb-2">€299</div>
                <p className="text-gray-600">Voor professionals</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Multi-page website</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Geavanceerde animaties</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Uitgebreide SEO optimalisatie</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Portfolio integratie</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Content management systeem</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">90 dagen ondersteuning</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Analytics integratie</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-4"></i>
                  <span className="text-gray-700">Social media koppeling</span>
                </li>
              </ul>
              <button className="rounded-button whitespace-nowrap w-full bg-purple-600 hover:bg-purple-700 text-white py-4 font-semibold transition-colors duration-200 cursor-pointer">
                Meer info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lannie Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Waarom Lannie?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Wij combineren creativiteit met technische expertise om websites te bouwen die niet alleen mooi zijn, maar ook presteren.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center scroll-fade-in">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Snelle Levering</h3>
              <p className="text-gray-600 leading-relaxed">Uw website is binnen 7-14 dagen live. Geen lange wachttijden, wel kwaliteit en aandacht voor detail.</p>
            </div>

            <div className="text-center scroll-fade-in">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-palette text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professioneel Design</h3>
              <p className="text-gray-600 leading-relaxed">Moderne, responsieve designs die indruk maken op uw bezoekers en uw merk professioneel presenteren.</p>
            </div>

            <div className="text-center scroll-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-headset text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volledige Service</h3>
              <p className="text-gray-600 leading-relaxed">Van concept tot lancering en daarna. Wij begeleiden u door het hele proces en bieden uitstekende ondersteuning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ons Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bekijk enkele van onze recent gerealiseerde projecten. Elk project is uniek en op maat gemaakt voor onze klanten.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            {[
              {
                img: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20mockup%20on%20laptop%20screen%20showing%20modern%20clean%20design%20with%20food%20photography%20and%20reservation%20system%20on%20white%20background&width=400&height=300&seq=portfolio-001&orientation=landscape",
                category: "Horeca",
                title: "Restaurant De Smaak",
              },
              {
                img: "https://readdy.ai/api/search-image?query=professional%20law%20firm%20website%20design%20displayed%20on%20desktop%20monitor%20featuring%20clean%20corporate%20layout%20with%20blue%20accents%20and%20legal%20content%20on%20white%20background&width=400&height=300&seq=portfolio-002&orientation=landscape",
                category: "Juridisch",
                title: "Advocatenkantoor Jansen",
              },
              {
                img: "https://readdy.ai/api/search-image?query=modern%20fitness%20gym%20website%20interface%20shown%20on%20tablet%20device%20with%20vibrant%20colors%20workout%20images%20and%20membership%20plans%20on%20clean%20white%20background&width=400&height=300&seq=portfolio-003&orientation=landscape",
                category: "Sport & Fitness",
                title: "Fitness Studio Max",
              },
              {
                img: "https://readdy.ai/api/search-image?query=beautiful%20flower%20shop%20e-commerce%20website%20displayed%20on%20smartphone%20showing%20colorful%20floral%20arrangements%20and%20online%20ordering%20system%20on%20white%20background&width=400&height=300&seq=portfolio-004&orientation=landscape",
                category: "Retail",
                title: "Bloemenwinkel Rosa",
              },
              {
                img: "https://readdy.ai/api/search-image?query=minimalist%20architecture%20firm%20website%20design%20on%20laptop%20screen%20featuring%20modern%20building%20photography%20and%20portfolio%20gallery%20on%20clean%20white%20background&width=400&height=300&seq=portfolio-005&orientation=landscape",
                category: "Architectuur",
                title: "Architectenbureau Vorm",
              },
              {
                img: "https://readdy.ai/api/search-image?query=corporate%20consulting%20website%20interface%20displayed%20on%20desktop%20computer%20with%20professional%20blue%20color%20scheme%20and%20business%20content%20on%20white%20background&width=400&height=300&seq=portfolio-006&orientation=landscape",
                category: "Business",
                title: "Consultancy Partners",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-fade-in">
                <div className="relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">Laat ons uw visie omzetten in een prachtige, functionele website. Neem vandaag nog contact op voor een vrijblijvend gesprek.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Start nu
            </button>
            <button className="rounded-button whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer">
              Neem contact op
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Lannie</h3>
              <p className="text-gray-400">Professionele websites die indruk maken</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@lannie.nl</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-2"></i>
                <span>+31 6 12345678</span>
              </div>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"></i>
                <i className="fab fa-twitter text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"></i>
                <i className="fab fa-instagram text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Lannie. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LannieWebsite;
