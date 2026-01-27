import AboutSection from "../sections/AboutSection";
import ITSection from "../sections/ITSection";
import HRSection from "../sections/HRSection";
import TeamSection from "../sections/TeamSection";
import ContactSection from "../sections/ContactSection";
import heroImg from "../assets/hero1.jpg";
import hero2Img from "../assets/hero2.jpg";
import hero3Img from "../assets/hero3.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhyChooseUs from "../sections/WhyChooseUs";
import ProcessSection from "../sections/ProcessSection";


export default function Home() {

  const slides = [
  {
    title: "Tenacia Solutions",
    desc: "Reinventing Mind Sets through innovative, secure, and scalable software engineering solutions.",
    img: heroImg
  },
  {
    title: "Future-Ready Technology Solutions",
    desc: "We help businesses stay competitive with agile development, advanced engineering, and proven methodologies.",
    img: hero2Img
  },
  {
    title: "Your Trusted Software Engineering Partner",
    desc: "Delivering reliable, high-quality, and future-proof solutions tailored to business needs.",
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

     <section
  id="home"
  className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
>


  {/* SLIDER */}
  {/* HERO SLIDER */}
<div className="relative min-h-screen">

  {slides.map((slide, index) => (

    <motion.div
      key={index}
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: current === index ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${slide.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={current === index ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={current === index ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto"
        >
          {slide.desc}
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-lg"
        >
          Explore Our Offerings
        </motion.a>

      </div>

    </motion.div>

  ))}

</div>


{/* DOTS */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300
      ${current === index ? "bg-blue-500 scale-125" : "bg-slate-400"}`}
    ></button>
  ))}

</div>
</section>


      {/* SCROLL CONTENT */}
      <AboutSection />
      <WhyChooseUs />
      <ITSection />
      <HRSection />
      <ProcessSection />
      <TeamSection />
      <ContactSection />

    </motion.div>
  );
}
