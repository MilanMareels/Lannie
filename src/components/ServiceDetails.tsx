import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";
import NavBarSection from "./NavBar";
import "../index.css";
import CheckIcon from "./ui/CheckIcon";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = serviceItems.find((item) => item.name === name)!;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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

    window.addEventListener("scroll", handleScrollAnimations);

    // Initial check
    handleScrollAnimations();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  return (
    <div>
      <SEO
        {...SEOContent.serviceDetails}
        title={`${service.title} - Webdesign Merksem - Lannie`}
        canonicalUrl={`https://www.lannie.be/oplossingen/${service.name}`}
        description={service.SEODescription}
        keywords={service.keywords}
      />

      <NavBarSection />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <img src={service.src} alt={`${service.title} Hero`} className="w-full h-full object-cover object-top opacity-20" />
        </div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
                <span className="text-[#259D84] block">Pakket</span>
              </h1>
              <div className="text-5xl md:text-8xl font-bold text-[#259D84] mb-6">{service.introPrice}</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">{service.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <button className="rounded-button whitespace-nowrap bg-[#259D84] text-white px-10 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                    Pakket aanvragen
                  </button>
                </a>
                <a href="#specificaties">
                  <button className="rounded-button whitespace-nowrap border-2 border-[#259D84] text-[#259D84] hover:bg-[#259D84] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer">
                    Bekijk Specificaties
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inbegrepen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Wat is Inbegrepen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een compleet pakket met alles wat u nodig heeft voor een succesvolle website.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.wInclude.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 scroll-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon />
                      <span className="text-gray-700 ml-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specificaties" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technische Specificaties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Moderne technologieën en best practices voor optimale prestaties en veiligheid.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.specs.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg scroll-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className={`${spec.icon} text-2xl text-[#259D84]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckIcon />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ontwikkelingsproces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een gestructureerd proces van concept tot lancering in 14-20 werkdagen.</p>
          </div>

          {/* Mobile Timeline - Stacked Layout */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg scroll-fade-in">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <i className={`${step.icon} text-[#259D84]`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                      <span className="text-[#259D84] font-semibold text-sm">{step.duration}</span>
                    </div>
                    <div className="w-6 h-6 bg-[#259D84] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                  </div>
                  <p className="text-gray-600 pl-16">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - Original Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

              {service.process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 scroll-fade-in ${step.align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-1/2 ${step.align === "right" ? "pl-12 text-left" : "pr-12 text-right"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className={`flex items-center mb-4 ${step.align === "right" ? "flex-row" : "flex-row-reverse"}`}>
                        <div className={`w-12 h-12 bg-green-100 rounded-full flex items-center justify-center ${step.align === "right" ? "mr-auto ml-4" : "ml-auto mr-4"}`}>
                          <i className={`${step.icon} text-[#259D84]`}></i>
                        </div>
                        <div className={step.align === "right" ? "text-left" : "text-right"}>
                          <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                          <span className="text-[#259D84] font-semibold">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#259D84] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
