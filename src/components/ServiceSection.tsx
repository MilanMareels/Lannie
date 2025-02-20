import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import { Service } from "../types/service";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col" id="services">
      <section className="flex justify-center items-center flex-col gap-5 mt-20">
        <h1 className="text-black text-3xl font-semibold">Onze Oplossingen</h1>
      </section>
      <section
        style={{
          backgroundImage: `url('/basic-foto-4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
        }}
        className="relative rounded-none md:rounded-xl mt-6 max-w-[1500px] w-full flex items-end justify-center"
      >
        <section className="flex gap-5 p-5 flex-wrap justify-center">
          {serviceItems.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <Card service={service as unknown as Service} />
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
