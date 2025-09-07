import { PopupButton } from "react-calendly";

export default function CalendyButton() {
  return (
    <PopupButton
      url="https://calendly.com/lanniewebdesign/30min"
      className="mt-5 w-[150px] rounded text-white bg-[#259D84] wix p-1"
      rootElement={document.getElementById("root")}
      text="Maak een gratis afspraak!"
    />
  );
}
