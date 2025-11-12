import { portfolio } from "../data/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 wix">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ons Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bekijk enkele van onze recent gerealiseerde projecten. Elk project is uniek en op maat gemaakt voor onze klanten.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Items */}
          {portfolio.map((item, index) => (
            <a href={item.link} target="blank">
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-fade-in">
                <div className="relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-72 object-cover object-top transition-transform duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#259D84] font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
