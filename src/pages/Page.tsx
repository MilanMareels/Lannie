import { useCookies } from "react-cookie";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import CookieConsent from "../components/cookie/CookieConsent";
import Acordion from "../components/ui/Acordion";
import SEO from "../components/SEO/SEO";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);
  return (
    <main>
      <SEO />
      <Header />
      <ServiceSection />
      <ContactForm />
      <Acordion />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
