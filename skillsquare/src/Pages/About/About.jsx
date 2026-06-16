import React, { useEffect } from "react";
import "./About.css";
import {
  FaBullseye,
  FaEye,
  FaLaptopCode,
  FaUniversity,
  FaBriefcase,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";

const differentiators = [
  {
    icon: <FaChartLine />,
    title: "Assessment + Training + Placement",
    desc: "End-to-end employability solution under one roof.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology-Enabled Ecosystem",
    desc: "Powered by Talent Turbo integration for smarter outcomes.",
  },
  {
    icon: <FaBullseye />,
    title: "Outcome-Focused Approach",
    desc: "Every program is designed for real placement results.",
  },
  {
    icon: <FaUniversity />,
    title: "Scalable College Partnerships",
    desc: "Proven model to transform campus employability at scale.",
  },
  {
    icon: <FaBriefcase />,
    title: "Strong Corporate Relevance",
    desc: "Programs aligned with what recruiters actually want.",
  },
  {
    icon: <FaBookOpen />,
    title: "Employability Intelligence",
    desc: "Data-driven insights to bridge skill gaps effectively.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-page">
     {/* Hero */}
<div className="about-hero">
  <h1 className="about-hero-quote">
    <span>SkillSquare</span> is built by industry practitioners, not academicians.
  </h1>
</div>

      {/* Mission & Vision */}
      <div className="about-section">
        <div className="about-cards-2">
          <div className="about-card" data-aos="zoom-in-up">
            <div className="about-icon-circle">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>To bridge the gap between education and employability.</p>
          </div>

          <div
            className="about-card"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="about-icon-circle">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>To create India's most trusted employability ecosystem.</p>
          </div>
        </div>
      </div>

      {/* Why SkillSquare */}
      <div className="about-section">
        <h2 className="about-section-title">
          Why <span>SkillSquare</span>?
        </h2>

        <p className="about-section-sub">
          What makes us different from the rest.
        </p>

        <div className="about-cards-3">
          {differentiators.map((item, i) => (
            <div
              className="about-card"
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 80}
            >
              <div className="about-icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACT Intro */}
      <div className="about-act-section" data-aos="fade-up">
        <div className="about-act-content">
          <h2>
            What is <span>ACT Assessment</span>?
          </h2>

          <p>
            ACT stands for <strong>Aptitude · Communication · Technical</strong>.
            It helps students understand their employability readiness — where
            they stand, what recruiters expect, and which skills they lack.
          </p>

          <ul className="about-act-list">
            <li>Employability Score</li>
            <li>Skill Gap Report</li>
            <li>Career Recommendations</li>
            <li>Placement Readiness Index</li>
          </ul>

          <Link
            to="/act"
            className="about-btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Transform Employability?</h2>

        <p>
          Whether you're a student, college, or organization — we're here to
          help.
        </p>

        <div className="about-cta-btns">
          <Link
            to="/contact"
            className="about-btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Book a Free Workshop
          </Link>

          <Link
            to="/contact"
            className="about-btn-outline"
            onClick={() => window.scrollTo(0, 0)}
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
