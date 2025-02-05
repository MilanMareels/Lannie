import { CustomFlowbiteTheme, Navbar } from "flowbite-react";

export default function NavBarSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100 text-white hover:bg-black hover:text-white hover:tracking-wide duration-500 dark:text-gray-400 md:border-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "hover:cursor-not-allowed text-white",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm hover:text-black text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  };

  return (
    <Navbar
      fluid
      rounded
      theme={customTheme}
      className="rounded-none bg-black p-4"
    >
      <Navbar.Brand href="/">
        <span className="text-xl font-semibold text-white archi">
          {companyName.toLocaleLowerCase()}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Startpagina
        </Navbar.Link>
        <Navbar.Link href="/#services" className="text-lg">
          Oplossingen
        </Navbar.Link>
        <Navbar.Link href="/#about" className="text-lg">
          Over mij
        </Navbar.Link>
        <Navbar.Link href="/#contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
