
import aboutImg from "../assets/about.svg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-slate-50">

      <motion.div
  className="section-container"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

<div className="grid md:grid-cols-2 gap-14 items-center">

{/* IMAGE */}
  <div>
    <img src={aboutImg} alt="About illustration" />
  </div>

  {/* TEXT */}
  <div>
    <h2 className="section-title text-left">
      About Us
    </h2>

    <p className="text-slate-600 mb-8">
      ConsultingCo helps organizations solve complex challenges using
      technology-driven and people-focused strategies.
    </p>

    <div className="grid grid-cols-2 gap-6">

      <div className="card">
        <h3 className="font-semibold mb-2">Our Vision</h3>
        Global trusted consulting partner.
      </div>

      <div className="card">
        <h3 className="font-semibold mb-2">Our Mission</h3>
        Empower businesses through innovation.
      </div>

    </div>

  </div>

  

</div>


      </motion.div>


    </section>
  );
}
