import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { routerEnum } from "../routes/routesEnum";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <Footer.Brand className="archi" href="/" src="/Logo-lannie.png" alt="Logo Lannie" name={companyName.toLocaleLowerCase()} />
          </div>
          <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Over ons" />
              <Footer.LinkGroup col>
                <Footer.Link href="#about">Lannie</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Volg Ons" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href={`/${routerEnum.PRIVACY}`}>Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <Footer.Copyright href="#" by={companyName} year={new Date().getFullYear()} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon href="https://www.linkedin.com/in/milan-mareels-58b472265/" target="blank" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
