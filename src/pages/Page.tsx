import AboutUsSection from "../components/AboutUsSection";
import ContactButton from "../components/ContactButton";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServiceSection from "../components/ServiceSection";

export default function Page() {
  return (
    <main>
      <Header />
      <ContactButton />
      <ServiceSection />
      <AboutUsSection />
      <ContactForm />
      <ScrollToTopButton />
    </main>
  );
}
