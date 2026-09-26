import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={<Placeholder title="Services" />}
        />
        <Route
          path="/services/:slug"
          element={<Placeholder title="Service Details" />}
        />
        <Route
          path="/portfolio"
          element={<Placeholder title="Portfolio" />}
        />
        <Route
          path="/portfolio/:slug"
          element={<Placeholder title="Case Study" />}
        />
        <Route
          path="/about"
          element={<Placeholder title="About Riyadvi" />}
        />
        <Route
          path="/blog"
          element={<Placeholder title="Blog" />}
        />
        <Route
          path="/blog/:slug"
          element={<Placeholder title="Blog Details" />}
        />
        <Route
          path="/careers"
          element={<Placeholder title="Careers" />}
        />
        <Route
          path="/careers/:slug"
          element={<Placeholder title="Job Details" />}
        />
        <Route
          path="/contact"
          element={<Placeholder title="Contact" />}
        />
        <Route
          path="/health-checkup"
          element={<Placeholder title="Business Health Checkup" />}
        />
      </Routes>
      <Footer />
    </>
  );
}