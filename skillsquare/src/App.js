import { useEffect } from "react";
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
import EnrollmentForm from "./Pages/EnrollmentForm/EnrollmentForm";
import ServicePopup from "./Components/ServicePopup/ServicePopup";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ServicePopup />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<EnrollmentForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;