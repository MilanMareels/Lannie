import React from "react";
import { Helmet } from "react-helmet";
import { JsonLd } from "react-schemaorg";
import { ContactPoint, LocalBusiness, Service } from "schema-dts";

const SEO = () => {
  return (
    <>
      {/* SEO - Meta Tags */}
      <Helmet>
        <meta name="description" content="Op zoek naar webdesign in Merksem? Wij maken professionele en betaalbare websites. Contacteer ons vandaag!" />
        <meta name="keywords" content="webdesign, Merksem, website laten maken, website, website in Merksem, webdesign in merksem, webdesign merksem" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content="Lannie" />
        <meta property="og:description" content="Op zoek naar webdesign in Merksem? Wij maken professionele en betaalbare websites. Contacteer ons vandaag!" />
        <meta property="og:image" content="/Logo-lannie.png" />
        <meta property="og:url" content="https://www.lannie.be" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lannie" />
        <meta name="twitter:description" content="Op zoek naar webdesign in Merksem? Wij maken professionele en betaalbare websites. Contacteer ons vandaag!" />
        <meta name="twitter:image" content="/Logo-lannie.png" />
      </Helmet>

      {/* Structured Data - Bedrijfsinformatie */}
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lannie",
          description: "Professioneel webdesign en websiteontwikkeling in Merksem.",
          telephone: "+32 489 50 36 61",
          email: "lanniewebdesign@gmail.com",
          url: "https://www.lannie.be",
          areaServed: {
            "@type": "Place",
            name: "Merksem, Antwerpen",
          },
        }}
      />

      {/* Structured Data - Diensten */}
      <JsonLd<Service>
        item={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Webdesign & Websiteontwikkeling",
          description: "Wij bouwen snelle, gebruiksvriendelijke en professionele websites.",
          provider: {
            "@type": "LocalBusiness",
            name: "Lannie",
          },
          serviceType: "Website Development",
          areaServed: "Merksem, Antwerpen",
        }}
      />

      {/* Structured Data - Contactgegevens */}
      <JsonLd<ContactPoint>
        item={{
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          name: "Lannie",
          contactType: "sales",
          description: "Neem contact op voor een gratis offerte of een vrijblijvend informatief gesprek over webdesign en websiteontwikkeling.",
          telephone: "+32 489 50 36 61",
          email: "lanniewebdesign@gmail.com",
          areaServed: "Merksem, Antwerpen",
          availableLanguage: ["Dutch", "English"],
        }}
      />
    </>
  );
};

export default SEO;
