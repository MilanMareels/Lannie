import NavBarSection from "./NavBar";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <NavBarSection />
      <section className="max-w-[1200px] w-full mx-auto px-4 text-white text-left mt-32">
        <h1 className="text-6xl md:text-8xl">Ben jij al online?</h1>
        <p className="text-lg mt-4">Zo niet, dan is het tijd voor een professionele website!</p>
        <ContactButton />
      </section>
    </header>
  );
}
