import { motion } from "framer-motion";
import { Users, ClipboardCheck, Briefcase, TrendingUp } from "lucide-react";

export default function HRSection() {

  const steps = [
  {
    title: "Dedicated Teams",
    desc: "Full-time, scalable development and IT teams that integrate seamlessly with your organization, enabling long-term collaboration and growth.",
    icon: <Users size={28} />
  },
  {
    title: "POD Team Model",
    desc: "Cross-functional POD teams including business analysts, senior and junior developers, and testers, designed for efficient and agile delivery.",
    icon: <ClipboardCheck size={28} />
  },
  {
    title: "Managed Services",
    desc: "Comprehensive IT service management covering cloud, databases, applications, monitoring, and support using ITIL-aligned processes.",
    icon: <Briefcase size={28} />
  },
  {
    title: "Flexible Engagement Models",
    desc: "Time & Material and Fixed Price models that provide transparency, scalability, and clear delivery expectations.",
    icon: <TrendingUp size={28} />
  }
];


  return (
    <section id="hr" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
  Talent & Managed Services
</h2>
<p className="text-slate-600 text-lg">
  Flexible engagement models and expert teams aligned with your business goals
</p>

        </motion.div>

        {/* TIMELINE */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  // ✅ Animate only once
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
