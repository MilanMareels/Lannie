import { Service } from "../../types/service";
import CheckIcon from "./CheckIcon";

interface CardProps {
  service: Service;
}

export default function Card({ service }: CardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative scroll-fade-in">
      {service.id == 2 ? (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#259D84] text-white px-6 py-2 rounded-full text-sm font-semibold">Populair</span>
        </div>
      ) : (
        ""
      )}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <div className="text-5xl font-bold text-[#259D84] mb-2">{service.introPrice}</div>
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
      <button className="rounded-button whitespace-nowrap w-full bg-[#259D84] text-white py-4 font-semibold transition-colors duration-200 cursor-pointer">Meer info</button>
    </div>
  );
}
