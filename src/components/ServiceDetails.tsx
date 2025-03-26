import { Carousel, CustomFlowbiteTheme, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = serviceItems.find((item) => item.name === name)!;

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
    <div>
      <SEO
        {...SEOContent.serviceDetails}
        title={`${service.title} - Webdesign Merksem - Lannie`}
        canonicalUrl={`https://www.lannie.be/oplossingen/${service.name}`}
        description={service.SEODescription}
        keywords={service.keywords}
      />
      <div className="flex flex-col w-full md:w-[60%] m-auto">
        <HR />
        <div className="w-full pb-4 sm:pb-0 pl-4 wix">
          <h1 className="text-2xl font-bold text-black">{service.title}</h1>
          <p className="mt-2 mr-4 text-black">{service.description}</p>
        </div>
        <HR />
        <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000} theme={customTheme}>
            {service.src.map((src, index) => (
              <img loading="lazy" key={index} src={src} alt="webdesign in Merksem" />
            ))}
          </Carousel>
        </section>
        <HR />
        <section className="flex flex-col sm:flex-row w-full pl-4">
          <div className="w-full pt-4 sm:pt-0 wix">
            <h1 className="text-xl font-bold text-black">Prijs</h1>
            <p className="mt-2 mr-4 text-black">{service.price}</p>
          </div>
        </section>
        <HR />
        <ContactForm />
      </div>
    </div>
  );
}
