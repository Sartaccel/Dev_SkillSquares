import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import Testimonial from "./Pages/Testimonial/Testimonial";
import ApplyNow from "./Pages/ApplyNow/ApplyNow";

import ServicePopup from "./Components/ServicePopup/ServicePopup";
import ACTAssessment from "./Pages/ACTAssessment/ACTAssessment";

import RegisterPage from "./Pages/ACTAssessments/pages/RegisterPage";
import TestPage from "./Pages/ACTAssessments/pages/TestPage";
import ResultPage from "./Pages/ACTAssessments/pages/ResultPage";
import Course from "./Pages/Course/Course";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ServicePopup
        svcShowForm={showPopup}
        setSvcShowForm={setShowPopup}
      />

      <ScrollToTop />

      <Navbar setSvcShowForm={setShowPopup} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/take-act" element={<ACTAssessment />} />
        <Route path="/Course" element={<Course />} />

        <Route path="/ACTAssessments" element={<RegisterPage />} />
        <Route path="/ACTAssessments/test" element={<TestPage />} />
        <Route path="/ACTAssessments/result" element={<ResultPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;