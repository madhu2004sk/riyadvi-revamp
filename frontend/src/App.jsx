import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import Contact from "./pages/Contact";
import HealthCheckup from "./pages/HealthCheckup";

export default function App() {
  return (
    <>

      <SmoothScroll />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/portfolio/:slug"
          element={<CaseStudy />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/careers/:slug"
          element={<JobDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/health-checkup"
          element={<HealthCheckup />}
        />

      </Routes>

      <Footer />
    </>
  );
}