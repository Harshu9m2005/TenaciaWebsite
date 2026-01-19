import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="font-bold text-xl">
          ConsultingCo
        </h1>

        <div className="space-x-6">

          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#it" className="hover:text-blue-600">IT</a>
          <a href="#hr" className="hover:text-blue-600">HR</a>
          <a href="#team" className="hover:text-blue-600">Team</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

        </div>

      </div>

    </nav>
  );
}
