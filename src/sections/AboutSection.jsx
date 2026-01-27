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
  Tenacia Solutions is a software engineering firm focused on creating innovative
  applications and technology-driven products. In today’s rapidly evolving digital
  landscape, businesses require agile and reliable solutions to maintain their
  competitive edge, and we deliver exactly that.
</p>

<p className="text-slate-600 text-lg leading-relaxed">
  Our strong technological foundation, combined with a team of skilled professionals,
  enables us to deliver secure, scalable, and future-ready solutions. We emphasize
  data confidentiality, proven methodologies, and open communication while developing
  a deep understanding of industry-specific requirements.
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
  We envision a future where our solutions contribute to sustainable development,
  technological leadership, and positive global impact. By continuously innovating
  and expanding our global presence, we strive to set new standards in quality,
  customer satisfaction, and industry transformation.
</p>

        </div>

        {/* MISSION */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Mission
          </h2>
          <p className="text-slate-700 leading-relaxed">
  Our mission is to leverage advanced technologies to develop innovative solutions
  that empower businesses and individuals. We are committed to excellence, quality,
  and delivering meaningful value by aligning engineering expertise with our
  clients’ long-term business objectives.
</p>

        </div>

      </motion.div>

    </section>
  );
}
