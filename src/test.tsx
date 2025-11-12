import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CheckIcon from "./components/ui/CheckIcon";

const AdvancedPackagePage = () => {
  const [activeTab, setActiveTab] = useState("functies");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll animations
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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tabs = [
    { id: "functies", label: "Functies", icon: "fas fa-list" },
    { id: "specificaties", label: "Specificaties", icon: "fas fa-cogs" },
    { id: "voorbeelden", label: "Voorbeelden", icon: "fas fa-images" },
    { id: "proces", label: "Proces", icon: "fas fa-route" },
    { id: "inbegrepen", label: "Inbegrepen", icon: "fas fa-check-circle" },
    { id: "faq", label: "FAQ", icon: "fas fa-question-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Lannie</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">
                <i className="fas fa-arrow-left mr-2"></i>Terug naar overzicht
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=sophisticated%20modern%20workspace%20with%20multiple%20devices%20showing%20advanced%20website%20designs%20professional%20purple%20and%20blue%20gradient%20lighting%20clean%20minimalist%20setup%20luxury%20tech%20environment%20with%20coding%20elements&width=1440&height=1024&seq=advanced-hero-001&orientation=landscape"
            alt="Advanced Package Hero"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-8">
                <i className="fas fa-star mr-2"></i>Populairste keuze
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced
                <span className="text-purple-600 block">Pakket</span>
              </h1>
              <div className="text-6xl md:text-8xl font-bold text-purple-600 mb-6">€299</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                De perfecte keuze voor professionals die hun online aanwezigheid willen versterken met geavanceerde functies en uitgebreide mogelijkheden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-button whitespace-nowrap bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  Pakket aanvragen
                </button>
                <button
                  onClick={() => scrollToSection("functies")}
                  className="rounded-button whitespace-nowrap border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer"
                >
                  Bekijk functies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className="sticky top-16 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors duration-200 border-b-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id ? "text-purple-600 border-purple-600" : "text-gray-600 border-transparent hover:text-purple-600"
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="functies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Uitgebreide Functies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Het Advanced Pakket biedt alle tools die u nodig heeft voor een professionele online aanwezigheid.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Design & Development",
                features: [
                  "Multi-page website (tot 8 pagina's)",
                  "Responsief design voor alle apparaten",
                  "Geavanceerde animaties en interacties",
                  "Custom grafische elementen",
                  "Professionele fotografie integratie",
                ],
              },
              {
                title: "SEO & Marketing",
                features: ["Uitgebreide SEO optimalisatie", "Google Analytics integratie", "Social media koppeling", "Newsletter signup formulier", "Meta tags en schema markup"],
              },
              {
                title: "Content Management",
                features: ["Gebruiksvriendelijk CMS", "Blog functionaliteit", "Portfolio/galerij beheer", "Contact formulier met spam bescherming", "Media bibliotheek"],
              },
              {
                title: "Support & Onderhoud",
                features: ["90 dagen gratis support", "2 training sessies (2 uur totaal)", "Technische documentatie", "Performance monitoring", "Security updates"],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 scroll-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-purple-600 mr-3 mt-1 text-sm"></i>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specificaties" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technische Specificaties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Moderne technologieën en best practices voor optimale prestaties en veiligheid.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-code",
                title: "Frontend Technologieën",
                items: ["React 18+", "TypeScript", "TailwindCSS", "Next.js Framework", "Progressive Web App"],
              },
              {
                icon: "fas fa-tachometer-alt",
                title: "Performance",
                items: ["< 2s laadtijd", "95+ Lighthouse score", "Image optimalisatie", "Code splitting", "CDN integratie"],
              },
              {
                icon: "fas fa-shield-alt",
                title: "Veiligheid",
                items: ["SSL certificaat", "HTTPS versleuteling", "GDPR compliant", "Spam bescherming", "Regular backups"],
              },
              {
                icon: "fas fa-server",
                title: "Hosting & Infrastructure",
                items: ["Cloud hosting", "99.9% uptime", "Automatische backups", "Global CDN", "Monitoring 24/7"],
              },
              {
                icon: "fas fa-chart-line",
                title: "SEO & Analytics",
                items: ["Google Analytics 4", "Search Console", "Structured data", "Sitemap generatie", "Meta optimalisatie"],
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Compatibiliteit",
                items: ["Alle moderne browsers", "Mobile responsive", "Tablet optimalisatie", "Cross-platform", "Accessibility (WCAG)"],
              },
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg scroll-fade-in">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className={`${spec.icon} text-2xl text-purple-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <i className="fas fa-check text-green-500 mr-3 text-sm"></i>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="voorbeelden" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Website Voorbeelden</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bekijk enkele voorbeelden van websites gebouwd met het Advanced Pakket.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://readdy.ai/api/search-image?query=modern%20technology%20company%20website%20design%20displayed%20on%20laptop%20screen%20featuring%20clean%20corporate%20layout%20with%20blue%20gradient%20backgrounds%20and%20tech%20imagery%20on%20white%20background&width=400&height=280&seq=example-001&orientation=landscape",
                category: "Technology",
                title: "TechStart Solutions",
                description: "Complete corporate website met portfolio en team pagina's",
                tags: ["Multi-page design", "Team portfolio", "Contact integratie"],
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=serene%20wellness%20spa%20website%20interface%20shown%20on%20tablet%20device%20with%20calming%20green%20colors%20nature%20imagery%20and%20appointment%20booking%20system%20on%20clean%20white%20background&width=400&height=280&seq=example-002&orientation=landscape",
                category: "Health & Wellness",
                title: "Wellness Center Zen",
                description: "Rustgevende website met online afspraak systeem",
                tags: ["Booking systeem", "Service overzicht", "Testimonials"],
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=creative%20design%20studio%20portfolio%20website%20displayed%20on%20desktop%20monitor%20featuring%20vibrant%20colors%20artistic%20layouts%20and%20project%20galleries%20on%20white%20background&width=400&height=280&seq=example-003&orientation=landscape",
                category: "Design & Creative",
                title: "Creative Studio Flux",
                description: "Creatieve portfolio website met interactieve galerij",
                tags: ["Portfolio galerij", "Project case studies", "Contact formulier"],
              },
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-fade-in">
                <div className="relative overflow-hidden">
                  <img src={example.image} alt={example.title} className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-semibold">{example.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{example.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ontwikkelingsproces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een gestructureerd proces van concept tot lancering in 14-21 werkdagen.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>

            {[
              {
                phase: "Intake & Planning",
                duration: "1-2 dagen",
                description: "Uitgebreide briefing, doelen bepalen en project planning opstellen",
                icon: "fas fa-clipboard-list",
                align: "left",
              },
              {
                phase: "Design & Wireframes",
                duration: "3-5 dagen",
                description: "Wireframes, mockups en visueel ontwerp van alle pagina's",
                icon: "fas fa-pencil-ruler",
                align: "right",
              },
              {
                phase: "Ontwikkeling",
                duration: "7-10 dagen",
                description: "Frontend en backend ontwikkeling, CMS integratie",
                icon: "fas fa-code",
                align: "left",
              },
              {
                phase: "Testing & Optimalisatie",
                duration: "2-3 dagen",
                description: "Uitgebreid testen, performance optimalisatie en SEO setup",
                icon: "fas fa-cogs",
                align: "right",
              },
              {
                phase: "Launch & Training",
                duration: "1-2 dagen",
                description: "Website live zetten, training sessies en documentatie",
                icon: "fas fa-rocket",
                align: "left",
              },
            ].map((step, index) => (
              <div key={index} className={`relative flex items-center mb-12 scroll-fade-in ${step.align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-1/2 ${step.align === "right" ? "pl-12 text-left" : "pr-12 text-right"}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className={`flex items-center mb-4 ${step.align === "right" ? "flex-row" : "flex-row-reverse"}`}>
                      <div className={`w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center ${step.align === "right" ? "mr-auto ml-4" : "ml-auto mr-4"}`}>
                        <i className={`${step.icon} text-purple-600`}></i>
                      </div>
                      <div className={step.align === "right" ? "text-left" : "text-right"}>
                        <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                        <span className="text-purple-600 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="inbegrepen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Wat is Inbegrepen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een compleet pakket met alles wat u nodig heeft voor een succesvolle website.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Development",
                features: ["Tot 8 pagina's", "3 design iteraties", "Responsief design", "Custom animaties", "Performance optimalisatie"],
              },
              {
                title: "Content Management",
                features: ["Gebruiksvriendelijk CMS", "Blog functionaliteit", "Media bibliotheek", "SEO tools", "Backup systeem"],
              },
              {
                title: "SEO & Analytics",
                features: ["Google Analytics setup", "Search Console integratie", "Meta tags optimalisatie", "Sitemap generatie", "Schema markup"],
              },
              {
                title: "Training & Support",
                features: ["2 training sessies", "90 dagen gratis support", "Technische documentatie", "Video tutorials", "Email ondersteuning"],
              },
              {
                title: "Hosting & Security",
                features: ["1 jaar gratis hosting", "SSL certificaat", "Daily backups", "Security monitoring", "Performance monitoring"],
              },
              {
                title: "Extra Services",
                features: ["Logo integratie", "Social media koppeling", "Contact formulieren", "Newsletter integratie", "GDPR compliance"],
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 scroll-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
            <p className="text-xl text-gray-600">Antwoorden op de meest voorkomende vragen over het Advanced Pakket.</p>
          </div>
          <div className="space-y-4">
            {[
              "Hoe lang duurt het ontwikkelingsproces?",
              "Kan ik wijzigingen aanbrengen tijdens het proces?",
              "Welke technologieën worden gebruikt?",
              "Is hosting inbegrepen?",
              "Krijg ik training voor het CMS?",
              "Wat gebeurt er na de 90 dagen support?",
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg scroll-fade-in">
                <button className="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
                  <CheckIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedPackagePage;
