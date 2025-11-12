import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";
import CheckIcon from "./ui/CheckIcon";

export default function ServiceSection() {
  return (
    <section id="oplossingen" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Onze Diensten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kies het pakket dat perfect bij uw behoeften past. Van eenvoudige presentaties tot complexe webapplicaties.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {serviceItems.map((service) => (
            <Link key={service.id} to={`/oplossingen/${service.name}`}>
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative scroll-fade-in">
                {service.id == 2 ? (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Populair</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <div className="text-5xl font-bold text-purple-600 mb-2">{service.introPrice}</div>
                  <p className="text-gray-600">Voor professionals</p>
                </div>
                <ul className="space-y-4 mb-10">
                  {service.includes.map((item) => (
                    <li className="flex items-center">
                      <CheckIcon />
                      <span className="text-gray-700 ml-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="rounded-button whitespace-nowrap w-full bg-purple-600 hover:bg-purple-700 text-white py-4 font-semibold transition-colors duration-200 cursor-pointer">
                  Meer info
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
