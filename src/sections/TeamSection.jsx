import { motion } from "framer-motion";

import team1 from "../assets/team1.svg";
import team0 from "../assets/team0.svg";

import teamBg from "../assets/team.jpg";

export default function TeamSection() {

  const team = [
  { name: "Engineering Leadership", role: "Architects & Senior Developers", img: team1 },
  { name: "Product Strategy", role: "Business Analysts & Product Specialists", img: team0 },
  { name: "Technology Experts", role: "Cloud, DevOps & Security Professionals", img: team1 },
  { name: "Quality Assurance", role: "Testing & Compliance Specialists", img: team1 },
  { name: "Support & Operations", role: "Managed Services & IT Operations", img: team0 },
];


  return (
    <section
      id="team"
      className="relative bg-cover mb-20 bg-center h-screen flex items-center justify-center mt-40"
      style={{ backgroundImage: `url(${teamBg})` }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl w-full px-6 py-12 overflow-y-auto">

        {/* FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-transparent backdrop-blur rounded-3xl shadow-2xl p-12 max-h-[90vh] overflow-y-auto"
        >

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center mb-14 text-white">
  Our Expertise & Leadership
</h2>


          {/* TOP ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {team.slice(0, 3).map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 border-4 border-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white">{member.name}</h3>
                <p className="text-slate-200 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {team.slice(3).map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 border-4 border-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white">{member.name}</h3>
                <p className="text-slate-200 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  );
}
