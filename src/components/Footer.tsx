import { CustomFlowbiteTheme, Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["footer"] = {};

  return (
    <>
      <section className="py-24 bg-gray-900 wix">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">Laat ons uw visie omzetten in een prachtige, functionele website. Neem vandaag nog contact op voor een vrijblijvend gesprek.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Start nu
            </button>
            <button className="rounded-button whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer">
              Neem contact op
            </button>
          </div>
        </div>
      </section>

      <Footer container className="rounded-none bg-gray-900" theme={customTheme}>
        <div className="w-full">
          <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
            <div className="text-center">
              <h1 className="orbitron text-white mb-5 md:mb-0">{companyName}</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6 wix">
              <div>
                <Footer.Title title="Info" className="text-white wix" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/" className="text-white wix">
                    1019.515.530
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Volg Ons" className="text-white wix" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank" className="text-white wix">
                    Linkedin
                  </Footer.Link>
                  <Footer.Link href="https://www.instagram.com/lanniewebdesign/" target="blank" className="text-white wix">
                    Instagram
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-white wix" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/privacy" className="text-white wix">
                    Privacy Policy
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
            <Footer.Copyright href="#" by={`${companyName}. Ontworpen en ontwikkeld door Lannie`} year={new Date().getFullYear()} className="text-white wix" />
            <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
              <Footer.Icon href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank" icon={BsLinkedin} className="text-white" />
              <Footer.Icon href="https://www.instagram.com/lanniewebdesign/" target="blank" icon={BsInstagram} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
