import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1
          className={`text-xl font-bold cursor-pointer
          ${scrolled ? "text-black" : "text-white"}`}
        >
          Tenacia Solutions
        </h1>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex gap-8 font-medium
          ${scrolled ? "text-black" : "text-white"}`}
        >

          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#wcu" className="hover:text-blue-500">Why Choose Us</a>
<a href="#it" className="hover:text-blue-500">Services</a>
<a href="#hr" className="hover:text-blue-500">Engagement Models</a>
<a href="#hww" className="hover:text-blue-500">Delivery Approach</a>
          <a href="#team" className="hover:text-blue-500">Team</a>
          
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          

        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden text-2xl
          ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

  <div
    className="md:hidden absolute right-4 top-16
    bg-white text-black w-52 rounded-xl shadow-xl
    px-4 py-5 flex flex-col gap-4"
  >

    <a href="#home" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      HOME
    </a>

    <a href="#about" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      ABOUT
    </a>

    <a href="#wcu" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      WHY CHOOSE US
    </a>

    <a href="#it" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      IT
    </a>

    <a href="#hr" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      HR
    </a>

    <a href="#hww" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      HOW WE WORK
    </a>

    <a href="#team" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      TEAM
    </a>

    <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-blue-500">
      CONTACT
    </a>

  </div>

)}


    </nav>
  );
}
