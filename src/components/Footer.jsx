export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-20">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} ConsultingCo. All rights reserved.
      </div>
    </footer>
  );
}
