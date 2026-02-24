import React from "react";
import "./Home.css";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpeg"; // adjust path if needed
import WhyChoose from "./WhyChoose";
import Courses from "./Courses";
import Success from "./Success";
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
          Upgrade your skills with industry-focused training programs designed
          to transform beginners into professionals.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">
            View Courses
            <FaArrowRight className="arrow-icon" />
          </button>

          <button className="btn primary-btn">
            <FaPhoneAlt className="call-icon" />
            Request a Call Back
          </button>
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