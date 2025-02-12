import { useCookies } from "react-cookie";
import AboutUsSection from "../components/AboutUsSection";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServiceSection from "../components/ServiceSection";
import CookieConsent from "../components/cookie/CookieConsent";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);
  return (
    <main>
      <Header />
      <ServiceSection />
      <ContactForm />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
