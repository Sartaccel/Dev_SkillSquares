import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./UiUxSyllabus.css";

const syllabusData = [
  {
    title: "UI / UX Fundamentals",
    topics: [
      "Introduction to UI & UX",
      "Difference Between UI and UX",
      "Design Thinking Process",
      "User-Centered Design",
      "Color Theory & Typography"
    ]
  },
  {
    title: "User Research",
    topics: [
      "User Personas",
      "User Journey Mapping",
      "Empathy Mapping",
      "Competitor Analysis",
      "Information Architecture"
    ]
  },
  {
    title: "Wireframing & Prototyping",
    topics: [
      "Low Fidelity Wireframes",
      "High Fidelity Wireframes",
      "Interactive Prototypes",
      "Design Systems",
      "Responsive Layout Design"
    ]
  },
  {
    title: "Design Tools",
    topics: [
      "Figma Basics to Advanced",
      "Adobe XD",
      "Prototyping in Figma",
      "Components & Auto Layout"
    ]
  },
  {
    title: "UI Design Principles",
    topics: [
      "Visual Hierarchy",
      "Spacing & Alignment",
      "Grid System",
      "Accessibility (WCAG Basics)",
      "Micro Interactions"
    ]
  },
  {
    title: "Usability Testing",
    topics: [
      "A/B Testing",
      "Usability Testing Methods",
      "User Feedback Analysis",
      "Design Iteration"
    ]
  },
  {
    title: "Portfolio & Career Prep",
    topics: [
      "Case Study Creation",
      "UI/UX Portfolio Building",
      "Resume Preparation",
      "Interview Preparation"
    ]
  }
];

const UiUxSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="uiuxsyllabus">
      <div className="uiuxsyllabus-container">
        <h2 className="uiuxsyllabus-title">
          UI / UX Design Full Course Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="uiuxsyllabus-accordion-item">
            <div
              className="uiuxsyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`uiuxsyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="uiuxsyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="uiuxsyllabus-enroll-container">
          <button className="uiuxsyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiUxSyllabus;