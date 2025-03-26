import { useCookies } from "react-cookie";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import CookieConsent from "../components/cookie/CookieConsent";
import Acordion from "../components/ui/Acordion";
import SEO from "../components/SEO/SEO";
import ReactGA from "react-ga4";
import { SEOContent } from "../data/SEO/SEO";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Page() {
  const GI_ID: string = import.meta.env.VITE_GOOGLE_ANA!;
  const [cookies] = useCookies(["cookieContent"]);
  const location = useLocation();

  useEffect(() => {
    if (cookies.cookieContent) {
      ReactGA.initialize(GI_ID);
      ReactGA.send({ hitType: "pageview", page: `/${location.pathname}` });
    }
  }, [cookies.cookieContent, location]);

  return (
    <main>
      <SEO {...SEOContent.home} />
      <Header />
      <ServiceSection />
      <ContactForm />
      <Acordion />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
