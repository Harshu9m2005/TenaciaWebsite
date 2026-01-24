export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center">

      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 w-full">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}
