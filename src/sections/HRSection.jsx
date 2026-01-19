import { FaUserTie, FaChalkboardTeacher, FaBalanceScale } from "react-icons/fa";

export default function HRSection() {
  return (
    <section id="hr" className="section-wrapper bg-slate-50">

      <div className="section-container">

        <h2 className="section-title">HR Services</h2>

        <p className="section-subtitle">
          Building strong teams and productive workplaces.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
    <FaUserTie className="text-blue-600 text-4xl mx-auto mb-4" />
    <h3 className="font-semibold text-lg mb-2">Talent Acquisition</h3>
    <p className="text-slate-600 text-sm">
      Hiring the right people for your organization.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
    <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto mb-4" />
    <h3 className="font-semibold text-lg mb-2">Employee Training</h3>
    <p className="text-slate-600 text-sm">
      Skill development and leadership training programs.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
    <FaBalanceScale className="text-blue-600 text-4xl mx-auto mb-4" />
    <h3 className="font-semibold text-lg mb-2">HR Compliance</h3>
    <p className="text-slate-600 text-sm">
      Legal compliance and workforce policies.
    </p>
  </div>

</div>


      </div>

    </section>
  );
}
