import { CustomFlowbiteTheme, Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["footer"] = {};

  return (
    <Footer container className="rounded-none bg-black" theme={customTheme}>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <h1 className="archi text-white">
              {companyName.toLocaleLowerCase()}
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Over mij" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/#about" className="text-white">
                  {companyName}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Volg Ons" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/milan-mareels-58b472265/"
                  target="blank"
                  className="text-white"
                >
                  Linkedin
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/lanniewebdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="blank"
                  className="text-white"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy" className="text-white">
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <Footer.Copyright
            href="#"
            by={companyName}
            year={new Date().getFullYear()}
            className="text-white"
          />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon
              href="https://www.linkedin.com/in/milan-mareels-58b472265/"
              target="blank"
              icon={BsLinkedin}
              className="text-white"
            />
            <Footer.Icon
              href="https://www.instagram.com/lanniewebdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank"
              icon={BsInstagram}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
