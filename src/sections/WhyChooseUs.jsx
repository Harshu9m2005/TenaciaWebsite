import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
  {
    title: "Research & Innovation",
    desc: "We continuously embrace new ideas and emerging technologies to stay at the forefront of innovation and deliver future-ready solutions."
  },
  {
    title: "Security & Reliability",
    desc: "Our solutions are built with a strong emphasis on data confidentiality, security best practices, and proven engineering methodologies."
  },
  {
    title: "Integrity & Transparency",
    desc: "We believe in open communication, ethical practices, and accountability in every engagement with our clients and partners."
  },
  {
    title: "Customer-Centric Mindset",
    desc: "Our customer-first approach drives us to deliver meaningful value and build long-term relationships based on trust and mutual respect."
  }
];


  return (
    <section id="wcu" className="py-24  scroll-mt-24  bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
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
