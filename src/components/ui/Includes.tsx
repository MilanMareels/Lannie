import { Service } from "../../types/service";
import CheckIcon from "./CheckIcon";

interface IncludesProps {
  service: Service;
}

export default function Includes({ service }: IncludesProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="group-hover:text-white font-semibold">Inbegrepen</p>
      <div className="flex gap-1 items-center">
        <CheckIcon />
        <p className="text-gray-400 text-sm text-wrap">{service.includes.website}</p>
      </div>
      <div className="flex gap-1 items-center">
        <CheckIcon />
        <p className="text-gray-400 text-sm text-wrap">{service.includes.hosting}</p>
      </div>
      <div className="flex gap-1 items-center">
        <CheckIcon />
        <p className="text-gray-400 text-sm text-wrap">{service.includes.ontwerp}</p>
      </div>
      <div className="flex gap-1 items-center">
        <CheckIcon />
        <p className="text-gray-400 text-sm text-wrap">{service.includes.mobile}</p>
      </div>
      <div className="flex gap-1 items-center">
        <CheckIcon />
        <p className="text-gray-400 text-sm text-wrap">{service.includes.gdpr}</p>
      </div>
    </div>
  );
}
