import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PAGES WITH NAVBAR */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

        </Route>

        {/* CONTACT PAGE (NO MAIN NAVBAR) */}
        <Route path="/contact-us" element={<ContactPage />} />

      </Routes>

    </BrowserRouter>
  );
}
