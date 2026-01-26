import { motion } from "framer-motion";
import contactImg from "../assets/contact.jpg";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-900/95 to-black scroll-mt-24 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-left"
        >

          <span className="text-blue-500 uppercase tracking-widest text-sm mb-3">
            Let’s Talk Business
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Start Your Growth Journey With Us
          </h2>

          <p className="text-slate-300 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
            Ready to scale smarter? Our consulting experts are here to help you build stronger systems, faster teams, and scalable technology solutions.
          </p>

          {/* CTA BUTTON */}
          <Link
            to="/contact-us"
            className="relative group bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 px-10 py-4 rounded-xl text-white font-semibold tracking-wide inline-flex items-center gap-2 w-fit mx-auto md:mx-0"
          >

            Contact Now

            {/* Arrow */}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>

          </Link>

        </motion.div>

        {/* IMAGE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >

          <motion.img
            src={contactImg}
            alt="Contact Illustration"
            className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] rounded-2xl shadow-2xl"
            whileHover={{ y: -14 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          />

        </motion.div>

      </div>

    </section>
  );
}
