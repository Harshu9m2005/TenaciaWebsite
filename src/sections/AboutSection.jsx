import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/scrollAnimation";

export default function AboutVisionSection() {
  return (
    <section id="about" className="bg-white overflow-hidden mt-20 scroll-mt-24">

      {/* IMAGE + ABOUT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-10">

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>

        {/* ABOUT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-5 md:pl-12 mt-6 md:mt-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About Us
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            We are a growing startup focused on building smart IT and HR solutions that help
            businesses operate faster, better, and smarter. Our team combines industry expertise
            with innovative thinking to provide actionable solutions tailored to your unique needs.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            From small startups to scaling enterprises, we work closely with our clients to
            understand their goals, challenges, and opportunities. Our approach balances
            technology, strategy, and human insights to drive measurable results.
          </p>
        </motion.div>

      </div>

      {/* VISION + MISSION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-20"
      >

        {/* VISION */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Vision
          </h2>
          <p className="text-slate-700 leading-relaxed">
            To become a trusted consulting partner for startups and growing businesses
            by delivering smart, scalable, and future-ready solutions. We aim to simplify
            complex business challenges and turn them into growth opportunities.
          </p>
        </div>

        {/* MISSION */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Mission
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Our mission is to empower businesses with technology and strategic consulting
            that improves efficiency, drives growth, and builds long-term success.
          </p>
        </div>

      </motion.div>

    </section>
  );
}
