import { Accordion } from "flowbite-react";

export default function Acordion() {
  return (
    <div className="max-w-[1500px] w-full m-auto mb-20 pl-4 pr-4">
      <h1 className="text-2xl font-semibold mb-4">Veelgestelde vragen</h1>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Wat is een domeinnaam?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Een domeinnaam is het internetadres van de website, bv. www.lannie.be</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Wat is online webhosting?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Online webhosting is een dienst die het mogelijk maakt om websites op het internet toegankelijk te maken.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Wat betekent mobielvriendelijk?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Mobielvriendelijk betekent dat een website of applicatie goed werkt op mobiele apparaten, zoals smartphones en tablets. Dit houdt in dat
              de lay-out, tekst, afbeeldingen en functies automatisch worden aangepast aan het kleinere scherm en de touchbediening van mobiele
              apparaten. Het doel is dat gebruikers een goede ervaring hebben, ongeacht het apparaat dat ze gebruiken om de site te bezoeken.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Wat is Privacy- & Coockiebeleid?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Het privacy- en cookiebeleid is een document dat websites en apps gebruiken om uit te leggen hoe ze omgaan met de gegevens van hun
              gebruikers. Het beleid is bedoeld om transparantie te bieden en gebruikers te informeren over welke persoonlijke gegevens worden
              verzameld, hoe deze gegevens worden gebruikt, gedeeld en opgeslagen, en welke rechten gebruikers hebben met betrekking tot hun gegevens.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
