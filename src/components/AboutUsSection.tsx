export default function AboutUsSection() {
  return (
    <section
      className="flex flex-wrap justify-center items-center gap-20 p-10 text-white"
      id="about"
    >
      <section className="max-w-full sm:w-full md:w-[500px]">
        <h1 className="font-semibold text-3xl">Over mij</h1>
        <p className="w-full mt-4">
          Mijn naam is Milan Mareels, ik ben 23 jaar oud en gepassioneerd door
          het ontwikkelen van weboplossingen. Ik richt mij specifiek op kleine
          zelfstandigen, omdat ik geloof in de kracht van kleinschalige
          ondernemers en hun unieke visie. Met een persoonlijke aanpak help ik
          jouw bedrijf online te groeien door, gebruiksvriendelijke en
          efficiënte websites te bouwen. Mijn doel is om jou te ontzorgen en je
          te voorzien van een weboplossing die past bij jouw behoeften en je
          onderneming laat stralen. Laten we samen werken aan een sterke online
          aanwezigheid die écht voor je werkt!
        </p>
      </section>
      <section>
        <img
          className="rounded-2xl max-w-full sm:w-full md:w-auto"
          src="/Logo-lannie.png"
          alt="Logo Lannie"
        />
      </section>
    </section>
  );
}
