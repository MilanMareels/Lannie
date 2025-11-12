import NavBarSection from "./NavBar";

export default function Header() {
  return (
    <>
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

        <div className="relative z-10 min-h-screen flex items-center wix">
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
    </>
  );
}
