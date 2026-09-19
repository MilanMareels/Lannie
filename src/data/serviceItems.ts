import { Service } from "../types/service";

export const serviceItems: Service[] = [
  {
    id: 1,
    src: "/service-hero.webp",
    title: "Basic Solution",
    name: "basic-solution",
    intro: "Een basic website met alle essentiële elementen voor online zichtbaarheid, inclusief een modern design.",
    description: "Het Basic Solution pakket biedt je een professionele one-page website, perfect voor een sterke en efficiënte online aanwezigheid.",
    introPrice: "Vanaf €249",
    includes: [
      "One Pager (Enkel een Home-Pagina)",
      "Mobielvriendelijk",
      "Op basis van een template",
      "Basis Privacy- & Cookiebeleid",
      "Online webhosting",
      "Basis-SEO",
    ],
    specs: [
      {
        icon: "fa fa-code",
        title: "Frontend Technologieën",
        items: ["React 18+", "TypeScript", "TailwindCSS"],
      },
      {
        icon: "fa fa-dashboard",
        title: "Performance",
        items: ["< 3s laadtijd", "70+ Lighthouse score", "Image optimalisatie", "Code splitting", "CDN integratie"],
      },
      {
        icon: "fa fa-shield",
        title: "Veiligheid",
        items: ["SSL certificaat", "HTTPS versleuteling", "GDPR compliant", "Spam bescherming"],
      },
      {
        icon: "fa fa-line-chart",
        title: "SEO & Analytics",
        items: ["Search Console", "Structured data", "Sitemap generatie", "Meta optimalisatie"],
      },
      {
        icon: "fa fa-mobile",
        title: "Compatibiliteit",
        items: ["Alle moderne browsers", "Mobile responsive", "Tablet optimalisatie"],
      },
    ],
    process: [
      {
        phase: "Intake & Planning",
        duration: "1-2 dagen",
        description: "Uitgebreide briefing, doelen bepalen en project planning opstellen",
        icon: "fa fa-calendar",
        align: "left",
      },
      {
        phase: "Design & Wireframes",
        duration: "3-5 dagen",
        description: "Wireframes, mockups en visueel ontwerp van de pagina",
        icon: "fa fa-pencil",
        align: "right",
      },
      {
        phase: "Ontwikkeling",
        duration: "7-10 dagen",
        description: "Frontend en backend ontwikkeling",
        icon: "fa fa-code",
        align: "left",
      },
      {
        phase: "Testing & Optimalisatie",
        duration: "2-3 dagen",
        description: "Uitgebreid testen, performance optimalisatie en SEO setup",
        icon: "fa fa-cogs",
        align: "right",
      },
      {
        phase: "Lanceren",
        duration: "1-2 dagen",
        description: "Website live zetten",
        icon: "fa fa-rocket",
        align: "left",
      },
    ],
    wInclude: [
      {
        title: "Website Development",
        features: ["1 Pagina", "Responsief design", "Performance optimalisatie"],
      },
      {
        title: "SEO & Analytics",
        features: ["Basis-SEO", "Search Console integratie", "Meta tags optimalisatie", "Sitemap generatie", "Schema markup"],
      },
      {
        title: "Training & Support",
        features: ["14 dagen gratis support", "Email ondersteuning"],
      },
      {
        title: "Hosting & Security",
        features: ["1 jaar hosting", "SSL certificaat"],
      },
      {
        title: "Extra Services",
        features: ["Logo integratie", "Social media koppeling", "Contact formulieren", "GDPR compliance"],
      },
    ],
    SEODescription: "Standaard one-page website voor Merksem. Toont diensten, over ons en contact - alles in één overzichtelijke layout.",
    keywords: "one-page website Merksem, basic webdesign pakket, goedkope website Merksem, starter website laten maken",
  },
  {
    id: 2,
    src: "/service-hero.webp",
    title: "Advanced Solution",
    name: "advanced-solution",
    intro: "Een geavanceerde website met alle essentiële elementen voor online zichtbaarheid, inclusief meerdere pagina's.",
    description:
      "Het Advanced Solution pakket biedt dezelfde solide basis als het Basic Solution pakket, maar biedt extra functies voor een uitgebreidere en gedetailleerdere online presentatie.",
    introPrice: "Vanaf €399",
    includes: [
      "Multi Pager (Tot 8 pagina's)",
      "Mobielvriendelijk",
      "Op basis van een template",
      "Basis Privacy- & Cookiebeleid",
      "Online webhosting",
      "Uitgebreide-SEO",
    ],
    specs: [
      {
        icon: "fa fa-code",
        title: "Frontend Technologieën",
        items: ["React 18+", "TypeScript", "TailwindCSS"],
      },
      {
        icon: "fa fa-dashboard",
        title: "Performance",
        items: ["< 3s laadtijd", "70+ Lighthouse score", "Image optimalisatie", "Code splitting", "CDN integratie"],
      },
      {
        icon: "fa fa-shield",
        title: "Veiligheid",
        items: ["SSL certificaat", "HTTPS versleuteling", "GDPR compliant", "Spam bescherming"],
      },
      {
        icon: "fa fa-line-chart",
        title: "SEO & Analytics",
        items: ["Search Console", "Structured data", "Sitemap generatie", "Meta optimalisatie"],
      },
      {
        icon: "fa fa-mobile",
        title: "Compatibiliteit",
        items: ["Alle moderne browsers", "Mobile responsive", "Tablet optimalisatie"],
      },
    ],
    process: [
      {
        phase: "Intake & Planning",
        duration: "1-2 dagen",
        description: "Uitgebreide briefing, doelen bepalen en project planning opstellen",
        icon: "fa fa-calendar",
        align: "left",
      },
      {
        phase: "Design & Wireframes",
        duration: "3-5 dagen",
        description: "Wireframes, mockups en visueel ontwerp van alle pagina",
        icon: "fa fa-pencil",
        align: "right",
      },
      {
        phase: "Ontwikkeling",
        duration: "7-10 dagen",
        description: "Frontend en backend ontwikkeling",
        icon: "fa fa-code",
        align: "left",
      },
      {
        phase: "Testing & Optimalisatie",
        duration: "2-3 dagen",
        description: "Uitgebreid testen, performance optimalisatie en SEO setup",
        icon: "fa fa-cogs",
        align: "right",
      },
      {
        phase: "Lanceren",
        duration: "1-2 dagen",
        description: "Website live zetten",
        icon: "fa fa-rocket",
        align: "left",
      },
    ],
    wInclude: [
      {
        title: "Website Development",
        features: ["Tot 8 pagina's", "Responsief design", "Performance optimalisatie"],
      },
      {
        title: "SEO & Analytics",
        features: ["Uitgebreide-SEO", "Search Console integratie", "Meta tags optimalisatie", "Sitemap generatie", "Schema markup"],
      },
      {
        title: "Support",
        features: ["14 dagen gratis support", "Email ondersteuning"],
      },
      {
        title: "Hosting & Security",
        features: ["1 jaar hosting", "SSL certificaat"],
      },
      {
        title: "Extra Services",
        features: ["Logo integratie", "Foto integratie", "Social media koppeling", "Contact formulieren", "GDPR compliance"],
      },
    ],
    SEODescription:
      "Uitgebreide website met diepgaande dienstensecties, meerdere foto's en professionele content. Perfect voor ondernemers die meer willen tonen!",
    keywords: "uitgebreide website, professionele dienstensecties, premium website Merksem, business website op maat",
  },
  {
    id: 3,
    src: "/service-hero.webp",
    title: "Website Renewal",
    name: "website-renewal",
    intro: "Blaas uw verouderde website nieuw leven in met een fris, modern design en sterk verbeterde prestaties.",
    description:
      "Voldoet uw huidige website niet meer aan de eisen van vandaag? Wij transformeren uw oude site naar een modern, snel en converterend platform. Of u nu een bestaande WordPress of Wix site heeft die een make-over nodig heeft, of u de sprong wilt maken naar een volledig op maat gemaakte (gecodeerde) website; wij regelen het. We bekijken samen wat u al heeft (domein, hosting, logo) en bouwen verder op maat van uw wensen.",
    introPrice: "Prijs op aanvraag",
    includes: [
      "Volledig of gedeeltelijk redesign",
      "WordPress, Wix of Custom Code",
      "Migratie van bestaande content",
      "Behoud van bestaande SEO-waarde",
      "Analyse van huidige hosting & domein",
      "Modern & Mobielvriendelijk",
    ],
    specs: [
      {
        icon: "fa fa-code",
        title: "Technologieën",
        items: ["Custom Code (React/TS)", "WordPress", "Wix"],
      },
      {
        icon: "fa fa-dashboard",
        title: "Performance Upgrade",
        items: ["Snellere laadtijden", "Core Web Vitals optimalisatie", "Verwijderen overbodige code/plugins", "Nieuwe image optimalisatie"],
      },
      {
        icon: "fa fa-shield",
        title: "Veiligheid & Updates",
        items: ["Security audit oude site", "SSL certificaat vernieuwing", "CMS updates & hardening", "Moderne GDPR compliance"],
      },
      {
        icon: "fa fa-line-chart",
        title: "SEO Retentie & Boost",
        items: ["301 Redirects (Geen 404 errors!)", "Behoud zoekmachine posities", "Nieuwe keyword integratie", "Verbeterde websitestructuur"],
      },
      {
        icon: "fa fa-mobile",
        title: "Compatibiliteit",
        items: ["Mobile-first herontwerp", "Oplossen van oude weergavefouten", "Optimalisatie voor moderne schermen"],
      },
    ],
    process: [
      {
        phase: "Audit & Inventarisatie",
        duration: "1-3 dagen",
        description: "Analyse van uw huidige website, domein, hosting, SEO-posities en uw nieuwe wensen (bestaand design of nieuw ontwerp?).",
        icon: "fa fa-search",
        align: "left",
      },
      {
        phase: "Redesign & Strategie",
        duration: "3-5 dagen",
        description: "Uitwerken van een nieuwe, moderne look die past bij uw huidige merkidentiteit en doelgroep.",
        icon: "fa fa-paint-brush",
        align: "right",
      },
      {
        phase: "Herontwikkeling & Migratie",
        duration: "1-3 weken",
        description:
          "Herbouwen van de website in het gekozen platform (of custom code) en veilig overzetten van al uw bestaande teksten en afbeeldingen.",
        icon: "fa fa-code",
        align: "left",
      },
      {
        phase: "SEO Checks & Testing",
        duration: "2-4 dagen",
        description:
          "Instellen van alle nodige redirects (zodat u geen Google-verkeer verliest) en grondig testen van alle vernieuwde functionaliteiten.",
        icon: "fa fa-check-square-o",
        align: "right",
      },
      {
        phase: "Oplevering & Lancering",
        duration: "1-2 dagen",
        description: "Omschakeling van de oude naar de nieuwe website zonder offline te gaan.",
        icon: "fa fa-refresh",
        align: "left",
      },
    ],
    wInclude: [
      {
        title: "Herontwikkeling",
        features: ["Platform naar keuze", "Behoud of update van design", "Responsive optimalisatie", "Content migratie"],
      },
      {
        title: "SEO Bescherming",
        features: ["Redirect plan", "Behoud domein autoriteit", "Sitemap update", "Metadata optimalisatie"],
      },
      {
        title: "Infrastructuur",
        features: ["Domeinnaam overdracht (optioneel)"],
      },
      {
        title: "Extra Functionaliteiten",
        features: ["Nieuwe contactformulieren", "Integratie nieuwe diensten", "Koppeling met social media"],
      },
      {
        title: "Support",
        features: ["Opleiding in nieuw systeem (indien CMS)", "14 dagen nazorg en monitoring", "Korte communicatielijnen"],
      },
    ],
    SEODescription:
      "Laat uw verouderde website vernieuwen of restylen. Van WordPress en Wix tot maatwerk code. Wij zorgen voor een modern design, betere SEO en een vlotte migratie.",
    keywords: "website vernieuwen, website redesign Merksem, oude website updaten, website herbouwen, WordPress vernieuwen, website migratie",
  },
];
