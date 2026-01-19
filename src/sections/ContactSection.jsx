import contactImg from "../assets/contact.svg";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">

    {/* TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6 text-white md:text-left text-center">
        Contact Us
      </h2>
      <p className="text-slate-300 mb-8 max-w-md md:text-left text-center">
        Ready to grow your business? Let’s connect and build smarter solutions together.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg w-fit">
        Contact Now
      </button>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src={contactImg}
        alt="Contact Illustration"
        className="w-[380px]"
      />
    </div>

  </div>
</section>

  );
}
