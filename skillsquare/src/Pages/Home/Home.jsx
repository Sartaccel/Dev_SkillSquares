import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpeg"; // adjust path if needed
import WhyChoose from "../WhyChoose/WhyChoose";
import Courses from "../Courses/Courses";
import Success from "../Success/Success";
function Home() {
  return (
    <>
    <section className="hero-section">
      
      {/* Background Image */}
      <img src={heroImage} alt="SkillSquare Training" className="hero-bg" />

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="container hero-content">
        <h1 className="hero-title">
          Welcome to <span>SkillSquare</span>
        </h1>

        <p className="hero-tagline">
          Empowering Minds. Building Careers.
        </p>

        <p className="hero-description">
          Upgrade your skills with industry-focused training programs designed to turn beginners into professionals.
        </p>

        <div className="hero-buttons">

 <Link
  to="/courses"
  className="btn primary-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  View Courses
  <FaArrowRight className="arrow-icon" />
</Link>

  <Link to="/contact" className="btn primary-btn" onClick={() => window.scrollTo(0, 0)}>
    <FaPhoneAlt className="call-icon" />
    Request a Call Back
  </Link>

</div>
      </div>
    </section>
    <WhyChoose/>
    <Courses/>
    <Success/>
    </>
  );  
}

export default Home;