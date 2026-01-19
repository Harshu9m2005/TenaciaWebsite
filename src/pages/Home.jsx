import AboutSection from "../sections/AboutSection";
import ITSection from "../sections/ITSection";
import HRSection from "../sections/HRSection";
import TeamSection from "../sections/TeamSection";
import ContactSection from "../sections/ContactSection";
import heroImg from "../assets/hero.svg";
import hero2Img from "../assets/hero2.svg";
import hero3Img from "../assets/hero4.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  const slides = [
    {
      title: "Driving Business Growth Through Smart Consulting",
      desc: "We deliver IT and HR solutions that empower companies to scale faster, operate smarter, and compete globally.",
      img: heroImg
    },
    {
      title: "Transform Your Digital Future",
      desc: "Modern technology strategies built for performance, security, and scalability.",
      img: hero2Img
    },
    {
      title: "Trusted Consulting Partner",
      desc: "Helping organizations succeed with innovation and expertise.",
      img: hero3Img
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

     <section className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">

  {/* SLIDER */}
  <div
    className="flex min-h-screen transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >

    {slides.map((slide, index) => (
      <motion.div
        key={index}
        className="min-w-full flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: current === index ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={current === index ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {slide.title}
            </h1>

            <p className="text-slate-300 text-lg mb-8">
              {slide.desc}
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="hidden md:block"
            initial={{ x: 40, opacity: 0 }}
            animate={current === index ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src={slide.img} alt="Hero" />
          </motion.div>

        </div>

      </motion.div>
    ))}

  </div>

  {/* DOT NAVIGATION */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">

    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300
        ${current === index ? "bg-blue-500 scale-125" : "bg-slate-500"}`}
      ></button>
    ))}

  </div>

</section>


      {/* SCROLL CONTENT */}
      <AboutSection />
      <ITSection />
      <HRSection />
      <TeamSection />
      <ContactSection />

    </motion.div>
  );
}
