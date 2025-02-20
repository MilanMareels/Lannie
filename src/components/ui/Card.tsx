import { Service } from "../../types/service";
import CheckIcon from "./CheckIcon";
import Includes from "./Includes";

interface CardProps {
  service: Service;
}

export default function Card({ service }: CardProps) {
  return (
    <div className="service-card rounded-lg relative h-[500px] w-[400px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
      <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="#000000"
        fill="none"
        viewBox="0 0 24 24"
        className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
        <line y2="21" x2="16" y1="21" x1="8"></line>
        <line y2="21" x2="12" y1="17" x1="12"></line>
      </svg>

      <p className="font-bold text-2xl group-hover:text-white text-black/80">{service.title}</p>

      <p className="text-gray-400 text-sm">{service.intro}</p>

      <Includes service={service} />

      <p className="absolute bottom-3 right-3 text-2xl font-bold text-gray-300 group-hover:text-gray-500">{service.introPrice}</p>
    </div>
  );
}
