export default function Header() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url("hero.webp")`,
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
                  Websites zonder
                  <span className="text-[#259D84] block hero-highlight">gedoe</span>
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
                  Moderne, krachtige websites die uw bedrijf naar het volgende niveau tillen. Van concept tot conversie.
                </p>
                <div className="hero-cta flex flex-col sm:flex-row gap-4">
                  <a href="#oplossingen">
                    <button className="rounded-button whitespace-nowrap bg-[#259D84] text-white px-10 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                      Ontdek onze pakketten
                    </button>
                  </a>
                  <a href="#portfolio">
                    <button className="rounded-button whitespace-nowrap border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer">
                      Bekijk portfolio
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
