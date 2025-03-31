import { Service } from "../../types/service";
import CheckIcon from "./CheckIcon";

interface IncludesProps {
  service: Service;
}

export default function Includes({ service }: IncludesProps) {
  return (
    <div className="flex flex-col gap-4 wix">
      <p className="group-hover:text-white font-semibold">Inbegrepen</p>
      {service.includes.map((item) => (
        <div className="flex gap-1 items-center">
          <CheckIcon />
          <p className="text-gray-400 text-sm text-wrap">{item}</p>
        </div>
      ))}
    </div>
  );
}
