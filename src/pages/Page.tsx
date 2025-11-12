import { useCookies } from "react-cookie";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import CookieConsent from "../components/cookie/CookieConsent";
import Acordion from "../components/ui/Acordion";
import SEO from "../components/SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";
import { useEffect } from "react";
import Waarom from "../components/Waarom";
import Portfolio from "../components/Portfolio";
import NavBarSection from "../components/NavBar";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll(".scroll-fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimations);

    // Initial check
    handleScrollAnimations();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  return (
    <main>
      <SEO {...SEOContent.home} />
      <NavBarSection />
      <Header />
      <ServiceSection />
      <Waarom />
      <Portfolio />
      <ContactForm />
      <Acordion />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
