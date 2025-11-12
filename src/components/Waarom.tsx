const Waarom = () => {
  return (
    <section className="py-24 bg-white wix">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Waarom Lannie?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Wij combineren creativiteit met technische expertise om websites te bouwen die niet alleen mooi zijn, maar ook presteren.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center scroll-fade-in">
            <div className="w-20 h-20 bg-green-100  rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa fa-rocket text-3xl text-[#259D84]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Snelle Levering</h3>
            <p className="text-gray-600 leading-relaxed">Uw website is binnen 14-20 dagen live. Geen lange wachttijden, wel kwaliteit en aandacht voor detail.</p>
          </div>

          <div className="text-center scroll-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa fa-pencil text-3xl text-[#259D84]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professioneel Design</h3>
            <p className="text-gray-600 leading-relaxed">Moderne, responsieve designs die indruk maken op uw bezoekers en uw merk professioneel presenteren.</p>
          </div>

          <div className="text-center scroll-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa fa-commenting text-3xl text-[#259D84]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volledige Service</h3>
            <p className="text-gray-600 leading-relaxed">Van concept tot lancering en daarna. Wij begeleiden u door het hele proces en bieden uitstekende ondersteuning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waarom;
