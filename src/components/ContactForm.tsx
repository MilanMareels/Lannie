import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [accept, setAccept] = useState<boolean>(false);

  const subject: string = "Nieuw bericht van de klant";
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  const contactFormKey: string = import.meta.env.VITE_CONTACT_FORM_KEY!;

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", contactFormKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success && accept) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Succes!",
        text: "E-mail succesvol verzonden!",
        icon: "success",
        confirmButtonColor: "black",
      });
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-100 rounded-md max-w-[1500px] m-auto mt-20 mb-20 p-5 flex-wrap gap-5 md:gap-0"
      id="contact"
    >
      <div className="w-[100%] md:w-[50%]">
        <h1 className="text-5xl w-[80%]">Klaar om online te gaan? Neem contact met ons op voor jouw nieuwe website, portfolio of meer!</h1>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <form onSubmit={onSubmit} className="w-full max-w-5xl bg-[#259D84] p-8 shadow-lg space-y-6 rounded">
          <input type="hidden" name="subject" value={subject} />
          <input type="hidden" name="from_name" value={companyName} />
          <div>
            <label htmlFor="user_name" className="block text-white font-semibold mb-2">
              Naam
            </label>
            <input type="text" name="name" className="w-full p-3 rounded" placeholder="U naam" required />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-white font-semibold mb-2">
              Email
            </label>
            <input type="email" name="email" id="user_email" className="w-full p-3 rounded" placeholder="U email" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Bericht
            </label>
            <textarea name="message" className="w-full p-3 rounded" rows={4} placeholder="U bericht" required></textarea>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              required
              className="mr-2 rounded w-[20px] h-[20px]"
              onClick={() => setAccept((prev) => !prev)}
            />
            <label htmlFor="acceptTerms" className="text-white">
              Ik ga akkoord met de{" "}
              <a href="/privacy" className="underline text-[#084B65]">
                voorwaarden
              </a>{" "}
              en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
            </label>
          </div>

          <div className="text-center">
            <input type="submit" value="Bericht verzenden" className="w-full bg-[#084B65] rounded text-white p-3 cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}
