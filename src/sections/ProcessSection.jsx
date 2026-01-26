import { motion } from "framer-motion";

export default function ProcessSection() {

  const steps = [
    { step: "01", title: "Discover", desc: "We understand your business goals and challenges." },
    { step: "02", title: "Plan", desc: "We design customized strategies and solutions." },
    { step: "03", title: "Build", desc: "Our team executes with precision and quality." },
    { step: "04", title: "Deliver", desc: "We launch and optimize for best performance." },
  ];

  return (
    <section id="hww"className="py-24 scroll-mt-24 bg-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-14 text-center"
        >
          How We Work
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl p-6 text-center"
            >
              <div className="text-blue-500 text-4xl font-bold mb-4">
                {item.step}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
