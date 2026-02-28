import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./SoftwareTestingSyllabus.css";

const syllabusData = [
  {
    title: "Software Testing Fundamentals",
    topics: [
      "Introduction to Software Testing",
      "SDLC & STLC",
      "Testing Principles",
      "Types of Testing",
      "Bug Life Cycle"
    ]
  },
  {
    title: "Manual Testing",
    topics: [
      "Test Case Writing",
      "Test Scenarios",
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity Testing"
    ]
  },
  {
    title: "API & Database Testing",
    topics: [
      "Postman Basics",
      "REST API Testing",
      "Status Codes",
      "SQL for Testers",
      "Data Validation"
    ]
  },
  {
    title: "Automation Testing",
    topics: [
      "Selenium Basics",
      "WebDriver Architecture",
      "Locators & Actions",
      "TestNG Framework",
      "Automation Framework Design"
    ]
  },
  {
    title: "Java for Automation",
    topics: [
      "Core Java Basics",
      "OOP Concepts",
      "Collections",
      "Exception Handling",
      "File Handling"
    ]
  },
  {
    title: "CI/CD & Version Control",
    topics: [
      "Git Basics",
      "Jenkins Integration",
      "Build Automation",
      "Continuous Testing"
    ]
  },
  {
    title: "Career Preparation",
    topics: [
      "Resume Preparation",
      "Mock Interviews",
      "Real-time Project Practice"
    ]
  }
];

const SoftwareTestingSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="testingsyllabus">
      <div className="testingsyllabus-container">
        <h2 className="testingsyllabus-title">
          Software Testing Full Course Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="testingsyllabus-accordion-item">
            <div
              className="testingsyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`testingsyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="testingsyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="testingsyllabus-enroll-container">
          <button className="testingsyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTestingSyllabus;