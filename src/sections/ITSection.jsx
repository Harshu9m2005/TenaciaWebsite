import { FaCloud, FaShieldAlt, FaLaptopCode } from "react-icons/fa";
export default function ITSection() {
  return (
    <section id="it" className="section-wrapper bg-white">

      <div className="section-container">

        <h2 className="section-title">IT Services</h2>

        <p className="section-subtitle">
          Technology solutions designed to scale your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

  <div className="card text-center">
    <FaLaptopCode size={40} className="mx-auto mb-4 text-blue-600"/>
    Web Development
  </div>

  <div className="card text-center">
    <FaCloud size={40} className="mx-auto mb-4 text-blue-600"/>
    Cloud Solutions
  </div>

  <div className="card text-center">
    <FaShieldAlt size={40} className="mx-auto mb-4 text-blue-600"/>
    Cyber Security
  </div>

</div>


      </div>

    </section>
  );
}
