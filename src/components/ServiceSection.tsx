import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const customTheme: CustomFlowbiteTheme["card"] = {
    root: {
      base: "flex border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 hover:scale-105 ease-in-out duration-500 grayscale",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "h-[200px]",
        on: "h-96 w-full object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  };

  return (
    <section className="flex justify-center items-center flex-col bg-gray-100" id="services">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Oplossingen</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>
            Hieronder vind je de oplossingen die ik aanbied. Ik help je graag bij het realiseren van een professionele en gebruiksvriendelijke website. Of je nu een
            eenvoudige website nodig hebt of op zoek bent naar een meer uitgebreide oplossing met extra functionaliteiten, ik bied de juiste ondersteuning om jouw online aanwezigheid te versterken.
            Neem gerust contact op voor meer informatie of om te bespreken welk pakket het beste bij jouw behoeften past!
          </p>
        </div>
      </div>
      <section className="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-10 p-10 m-auto cursor-pointer">
        {serviceItems.map((i) => (
          <Link key={i.id} to={`/services/${i.id}`}>
            <Card theme={customTheme} className="w-full max-w-xs" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={i.src[0]}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{i.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 truncate">{i.description}</p>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
}
