import { Link } from "react-router-dom";

export default function ContactPage() {
  return (

    <section className="min-h-screen bg-slate-800 flex flex-col justify-center pt-24">

      {/* HERO NAV BAR (ONLY HOME BUTTON) */}
      <div className="fixed top-0 left-0 w-full bg-white shadow z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold">
            ConsultingCo
          </h1>

          {/* HOME BUTTON */}
          <Link
  to="/#home"
  className="text-black hover:text-blue-600 transition-colors duration-300"
>
  Home
</Link>


        </div>

      </div>

      {/* FORM CARD */}
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 w-full">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <form
  action="https://formsubmit.co/kavikasiraman@gmail.com"
  method="POST"
  className="space-y-5"
>

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    className="w-full border rounded-lg px-4 py-3"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full border rounded-lg px-4 py-3"
  />

  <textarea
    name="message"
    placeholder="How can we help you?"
    rows="4"
    required
    className="w-full border rounded-lg px-4 py-3"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
  >
    Send Message
  </button>

</form>


      </div>

    </section>
  );
}
