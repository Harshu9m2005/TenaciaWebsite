import { motion } from "framer-motion";
import { Cpu, Layers, Code2, Rocket } from "lucide-react";

export default function ITSection() {

  const steps = [
    {
      title: "Requirement Analysis",
      desc: "We understand your business goals and technical requirements to design scalable solutions.",
      icon: <Cpu size={28} />
    },
    {
      title: "System Architecture",
      desc: "We create secure and high-performance system architectures tailored to your startup needs.",
      icon: <Layers size={28} />
    },
    {
      title: "Development & Integration",
      desc: "Agile development with seamless API and platform integrations.",
      icon: <Code2 size={28} />
    },
    {
      title: "Testing & Deployment",
      desc: "Rigorous testing and optimized deployment to ensure reliability and speed.",
      icon: <Rocket size={28} />
    }
  ];

  return (
    <section id="it" className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ Animate only once
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            IT Services
          </h2>
          <p className="text-slate-600 text-lg">
            Technology solutions designed to scale your startup faster
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="space-y-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // ✅ Animate only once
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-start gap-8
                ${index % 2 !== 0 && "md:flex-row-reverse"}`}
            >

              {/* NUMBER */}
              <div className="text-5xl font-bold text-blue-600 min-w-[80px]">
                0{index + 1}
              </div>

              {/* CARD */}
              <div className="bg-slate-100 p-8 rounded-2xl shadow-lg flex-1">
                <div className="flex items-center gap-4 mb-4 text-blue-600">
                  {step.icon}
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
