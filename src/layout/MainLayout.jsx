import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>

      <Navbar />

      {/* PAGE CONTENT WILL RENDER HERE */}
      <Outlet />

      <Footer />

    </div>
  );
}
