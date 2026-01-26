import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Startup Focused",
      desc: "We understand early-stage challenges and build solutions designed for fast growth."
    },
    {
      title: "Affordable Consulting",
      desc: "Premium consulting quality without enterprise-level pricing."
    },
    {
      title: "Modern Technology",
      desc: "We use latest tools and frameworks to deliver scalable solutions."
    },
    {
      title: "Dedicated Support",
      desc: "Direct communication and continuous support throughout your journey."
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
