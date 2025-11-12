import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";
import Card from "./ui/Card";

export default function ServiceSection() {
  return (
    <section id="oplossingen" className="py-24 bg-gray-50 wix">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Onze Diensten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kies het pakket dat perfect bij uw behoeften past. Van eenvoudige presentaties tot complexe webapplicaties.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {serviceItems.map((service) => (
            <Link key={service.id} to={`/oplossingen/${service.name}`}>
              <Card service={service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
