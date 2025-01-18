import { Carousel, CustomFlowbiteTheme, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = serviceItems.find((item) => item.id === parseInt(id!))!;

  const customTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] m-auto">
        <HR />
        <div className="w-full pb-4 sm:pb-0 pl-4">
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="mt-2 mr-4">{service.description}</p>
        </div>
        <HR />
        <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000} theme={customTheme}>
            {service.src.map((src, index) => (
              <img key={index} src={src} alt={`Service image ${index + 1}`} />
            ))}
          </Carousel>
        </section>
        <HR />
        <section className="flex flex-col sm:flex-row w-full pl-4">
          <div className="w-full pt-4 sm:pt-0">
            <h1 className="text-xl font-bold">Prijs</h1>
            <p className="mt-2 mr-4">
              De prijs voor het {service.title} pakket start vanaf &euro;{service.price}. Houd er rekening mee dat de prijs kan variëren afhankelijk van extra wensen, zoals aanpassingen in ontwerp,
              kleuren of andere specifieke verzoeken. Neem contact met ons op voor een offerte op maat, afhankelijk van je specifieke wensen en aanpassingen.
            </p>
          </div>
        </section>
        <HR />
        <ContactForm />
      </div>
    </>
  );
}
