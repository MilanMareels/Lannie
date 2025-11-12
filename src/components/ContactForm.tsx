import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [accept, setAccept] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageCount, setMessageCount] = useState(0);

  const subject: string = "Nieuw bericht van de klant";
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  const contactFormKey: string = import.meta.env.VITE_CONTACT_FORM_KEY!;

  const onSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

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
        confirmButtonColor: "#259D84",
      });
      event.target.reset();
      setLoading(false);
      setMessageCount(0);
    } else {
      setResult(data.message);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageCount(e.target.value.length);
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-fade-in wix">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-fade-in animate-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Neem Contact Op</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar om uw digitale aanwezigheid naar het volgende niveau te tillen? Laat ons weten wat u nodig heeft en we nemen snel contact met u op.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 scroll-fade-in animate-in">
            <form onSubmit={onSubmit} className="space-y-8">
              <input type="hidden" name="subject" value={subject} />
              <input type="hidden" name="from_name" value={companyName} />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Voornaam *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="name"
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm"
                    placeholder="Uw voornaam"
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Achternaam *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm"
                    placeholder="Uw achternaam"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] ransition-all duration-200 text-sm"
                  placeholder="uw.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-3">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm"
                  placeholder="+32 6 12345678"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-3">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm"
                  placeholder="Uw bedrijfsnaam"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-semibold text-gray-900 mb-3">
                  Interessant pakket
                </label>
                <select
                  id="package"
                  name="package"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm"
                >
                  <option value="">Selecteer een pakket</option>
                  <option value="basic">Basic Pakket - €199</option>
                  <option value="advanced">Advanced Pakket - €299</option>
                  <option value="custom">Op maat gemaakt</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  onChange={handleMessageChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#259D84] focus:ring-2 focus:ring-[#259D84] transition-all duration-200 text-sm resize-none"
                  placeholder="Vertel ons over uw project, wensen en doelen..."
                ></textarea>
                <div className="text-right mt-2">
                  <span id="message-counter" className="text-sm text-gray-500">
                    {messageCount}/500
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  required
                  className="mr-3 w-5 h-5 text-[#259D84] bg-white border-gray-300 rounded focus:ring-[#259D84] focus:ring-2"
                  onClick={() => setAccept((prev) => !prev)}
                />
                <label htmlFor="acceptTerms" className="text-gray-700 text-sm">
                  Ik ga akkoord met de{" "}
                  <a href="/privacy" className="text-[#259D84] underline">
                    voorwaarden
                  </a>{" "}
                  en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
                </label>
              </div>

              <div className="text-center">
                {loading ? (
                  <div className="flex flex-row gap-2 items-center justify-center w-full bg-[#259D84] rounded-xl p-6">
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="rounded-button whitespace-nowrap bg-[#259D84] text-white px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer w-full"
                  >
                    <i className="fa fa-paper-plane mr-2"></i>
                    Verstuur bericht
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
