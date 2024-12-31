import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const subject: string = "Nieuw bericht van de klant";
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  const contactFormKey: string = import.meta.env.VITE_CONTACT_FORM_KEY!;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(result);

    const formData = new FormData(event.target);

    formData.append("access_key", contactFormKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Succes!",
        text: "E-mail succesvol verzonden!",
        icon: "success",
        confirmButtonColor: "black",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-10 bg-gray-100" id="contact">
      <form onSubmit={onSubmit} className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Neem contact op</h2>
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value={companyName} />
        <div>
          <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
            Naam
          </label>
          <input type="text" name="name" className="w-full p-3 border-l-0 border-r-0 border-t-0 focus:outline-none focus:ring-0 focus:border-black" placeholder="U naam" required />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input type="email" name="email" id="user_email" className="w-full p-3 border-l-0 border-r-0 border-t-0 focus:outline-none focus:ring-0 focus:border-black" placeholder="U email" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Bericht
          </label>
          <textarea name="message" className="w-full p-3 border-l-0 border-r-0 border-t-0 focus:outline-none focus:ring-0 focus:border-black" rows={4} placeholder="U bericht" required></textarea>
        </div>

        <div className="text-center">
          <input type="submit" value="Send Message" className="w-full bg-transparent border-2 rounded-none border-black text-black p-3 cursor-pointer" />
        </div>
      </form>
    </div>
  );
}
