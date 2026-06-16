import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";

import {
  FaUserTie,
  FaPlane,
  FaConciergeBell,
  FaHandsHelping,
  FaLaptop,
  FaChartLine,
  FaHeadset,
  FaLightbulb,
  FaBullhorn,
  FaUserGraduate,
} from "react-icons/fa";

/* Courses Data */
const courses = [
  {
    title: "Workplace Readiness & Employability Skills",
    desc: "Develop essential workplace behavior, communication, and job readiness skills.",
    icon: <FaUserTie />,
  },
  {
    title: "Tourism & Travel Operations Management",
    desc: "Learn travel planning, ticketing, and tourism service management.",
    icon: <FaPlane />,
  },
  {
    title: "Hospitality & Guest Experience Excellence",
    desc: "Master customer service and hospitality standards for global industries.",
    icon: <FaConciergeBell />,
  },
  {
    title: "Home Care & Assisted Living Services",
    desc: "Gain skills in caregiving, patient assistance, and healthcare support.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Digital Skills for Modern Jobs",
    desc: "Learn digital tools, productivity software, and online work skills.",
    icon: <FaLaptop />,
  },
  {
    title: "Sales & Marketing Strategies",
    desc: "Understand marketing techniques, branding, and sales strategies.",
    icon: <FaChartLine />,
  },
  {
    title: "Customer Support & CRM Training",
    desc: "Handle customer queries and manage CRM tools effectively.",
    icon: <FaHeadset />,
  },
  {
    title: "Entrepreneurship & Startup Skills",
    desc: "Build business ideas and learn startup fundamentals.",
    icon: <FaLightbulb />,
  },
  {
    title: "Customer Branding & Career Development",
    desc: "Enhance personal branding and career growth strategies.",
    icon: <FaBullhorn />,
  },
  {
    title: "Personal Branding & Career Development",
    desc: "Improve professional presence, resume, and interview skills.",
    icon: <FaUserGraduate />,
  },
];

function Careers() {
  return (
    <section className="career-section">
      <div className="container">

        <div className="course-section">
          <h2 className="text-center">Our Course Offerings</h2>
          <p className="text-center mb-5">Duration: 35–40 Hours</p>

          <div className="row g-4">
            {courses.map((course, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div className="course-card">

                  <div className="course-icon">{course.icon}</div>

                  <div className="course-content">
                    <h5>{course.title}</h5>
                    <p>{course.desc}</p>

                    {/* ✅ Apply Button */}
                    <Link to="/apply">
                      <button className="apply-btn">Apply Now</button>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Careers;