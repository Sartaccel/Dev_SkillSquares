import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpeg";
import WhyChoose from "../WhyChoose/WhyChoose";
import Success from "../Success/Success";
import About from "../About/About";

function Home() {
  return (
    <>
    <section className="hero-section">
      
      {/* Background Image */}
      <img src={heroImage} alt="SkillSquare Training" className="hero-bg" />

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="container hero-content">
        <p className="hero-title">
         Transforming Students into <span>Industry-Ready Professionals</span>
        </p>

        {/* <p className="hero-tagline">
          Empowering Minds. Building Careers.
        </p> */}

        <p className="hero-description">
          SkillSquare empowers students, colleges, and organizations through employability assessments, career guidance, future skills training, mentorship, and placement opportunities.
        </p>

        <div className="hero-buttons">

 <Link
  to="/courses"
  className="btn primary-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  Schedule a Consultation
  <FaArrowRight className="arrow-icon" />
</Link>
<Link
  to="/courses"
  className="btn primary-btn"
  onClick={() => window.scrollTo(0, 0)}
>
 Start Your Assessment
  <FaArrowRight className="arrow-icon" />
</Link>

  <Link to="/contact" className="btn primary-btn" onClick={() => window.scrollTo(0, 0)}>
    <FaPhoneAlt className="call-icon" />
    Explore Partnership Opportunities
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