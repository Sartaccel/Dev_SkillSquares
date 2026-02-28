import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import Testimonial from "./Pages/Testimonial/Testimonial";
import ApplyNow from "./Pages/ApplyNow/ApplyNow";
import Courses from "./Pages/Courses/Courses";
import JavaSyllabus from "./Pages/Courses/Syllabus/JavaSyllabus/JavaSyllabus";
import PythonSyllabus from "./Pages/Courses/Syllabus/PythonSyllabus/PythonSyllabus";
import MernSyllabus from "./Pages/Courses/Syllabus/MernSyllabus/MernSyllabus";
import CyberSyllabus from "./Pages/Courses/Syllabus/CyberSyllabus/CyberSyllabus";
import UiUxSyllabus from "./Pages/Courses/Syllabus/UiUxSyllabus/UiUxSyllabus";
import DigitalMarketingSyllabus from "./Pages/Courses/Syllabus/DigitalMarketingSyllabus/DigitalMarketingSyllabus";
import DevopsSyllabus from "./Pages/Courses/Syllabus/DevopsSyllabus/DevopsSyllabus";
import SoftwareTestingSyllabus from "./Pages/Courses/Syllabus/SoftwareTestingSyllabus/SoftwareTestingSyllabus";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>

      <ScrollToTop />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/testimonial" element={<Testimonial />} />

        <Route path="/apply" element={<ApplyNow />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/java-full-stack" element={<JavaSyllabus/>} />
        <Route path="/python-full-stack" element={<PythonSyllabus />} />
        <Route path="/mern-full-stack" element={<MernSyllabus />} />
        <Route path="cyber-security" element={<CyberSyllabus />} />
        <Route path="/ui-ux-design" element={<UiUxSyllabus />} />
        <Route path="/digital-marketing" element={<DigitalMarketingSyllabus />} />
        <Route path="/devops" element={<DevopsSyllabus />} />
        <Route path="/software-testing" element={<SoftwareTestingSyllabus />} />


      </Routes>

      {/* ✅ MOVE FOOTER HERE */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;