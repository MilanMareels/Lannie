import { CustomFlowbiteTheme, Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["footer"] = {};

  return (
    <Footer container className="rounded-none bg-white" theme={customTheme}>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <h1 className="orbitron text-black mb-5 md:mb-0">{companyName}</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6 wix">
            <div>
              <Footer.Title title="Info" className="text-black wix" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" className="text-black wix">
                  1019.515.530
                </Footer.Link>
                <Footer.Link href="tel:0489503661" className="text-black wix">
                  TEL: 0489503661
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Volg Ons" className="text-black wix" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank" className="text-black wix">
                  Linkedin
                </Footer.Link>
                <Footer.Link href="https://www.instagram.com/lanniewebdesign/" target="blank" className="text-black wix">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black wix" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy" className="text-black wix">
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <Footer.Copyright href="#" by={`${companyName}. Ontworpen en ontwikkeld door Lannie`} year={new Date().getFullYear()} className="text-black wix" />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank" icon={BsLinkedin} className="text-black" />
            <Footer.Icon href="https://www.instagram.com/lanniewebdesign/" target="blank" icon={BsInstagram} className="text-black" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
