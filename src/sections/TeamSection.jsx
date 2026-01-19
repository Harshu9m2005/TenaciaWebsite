import { motion } from "framer-motion";
import teamImg from "../assets/team.svg";
import team0 from "../assets/team0.svg";
import team1 from "../assets/team1.svg";

export default function TeamSection() {

  const leftMembers = [
    { name: "Alex Morgan", role: "CEO", img: team1 },
    { name: "Sarah Lee", role: "HR Lead", img: team0 },
  ];

  const rightMembers = [
    { name: "John Carter", role: "Tech Head", img: team1 },
    { name: "Emma Stone", role: "Marketing Lead", img: team0 },
  ];
return (
    <section id="team" className="py-28 bg-gray-50">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Meet the experts driving innovation and delivering exceptional results.
        </p>
      </div>

      {/* TEAM LAYOUT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

        {/* LEFT MEMBERS */}
        <div className="flex flex-col gap-8 items-center">
          {leftMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTRAL TEAM IMAGE */}
        <motion.div
          className="flex-shrink-0 w-80 md:w-96"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teamImg}
            alt="Team Central"
            className="w-full rounded-full shadow-2xl"
          />
        </motion.div>

        {/* RIGHT MEMBERS */}
        <div className="flex flex-col gap-8 items-center">
          {rightMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}