import { Button } from "flowbite-react";

export default function ContactButton() {
  return (
    <div className="m-5 mb-10 flex items-center justify-center">
      <Button
        href="#contact"
        className="mt-10 w-[150px] rounded-none border-2 border-white bg-transparent text-white focus:ring-0"
      >
        Contacteer ons
      </Button>
    </div>
  );
}
