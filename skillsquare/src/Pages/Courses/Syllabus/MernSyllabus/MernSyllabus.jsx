import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./MernSyllabus.css";

const syllabusData = [
  {
    title: "MongoDB",
    topics: [
      "NoSQL Basics",
      "CRUD Operations",
      "Schema Design",
      "Indexes",
      "Aggregation Framework"
    ]
  },
  {
    title: "Express.js",
    topics: [
      "Express Server Setup",
      "Routing",
      "Middleware",
      "Error Handling",
      "REST API Development"
    ]
  },
  {
    title: "React.js",
    topics: [
      "Components",
      "Props & State",
      "Hooks",
      "Routing",
      "API Integration",
      "Context API"
    ]
  },
  {
    title: "Node.js",
    topics: [
      "Node Architecture",
      "Event Loop",
      "File System",
      "NPM",
      "Building APIs"
    ]
  },
  {
    title: "Authentication & Security",
    topics: [
      "JWT Authentication",
      "Role Based Access",
      "Password Encryption",
      "API Security"
    ]
  },
  {
    title: "Deployment",
    topics: [
      "Environment Variables",
      "Docker Basics",
      "Cloud Deployment (AWS / Render)",
      "CI/CD Basics"
    ]
  }
];

const MernSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mernsyllabus">
      <div className="mernsyllabus-container">
        <h2 className="mernsyllabus-title">
          MERN Stack Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="mernsyllabus-accordion-item">
            <div
              className="mernsyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`mernsyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="mernsyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="mernsyllabus-enroll-container">
          <button className="mernsyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MernSyllabus;