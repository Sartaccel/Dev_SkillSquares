import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./PythonSyllabus.css";

const syllabusData = [
  {
    title: "Core Python",
    topics: [
      "Python Introduction",
      "Variables & Data Types",
      "Operators",
      "Control Statements",
      "Functions",
      "Modules & Packages"
    ]
  },
  {
    title: "OOP in Python",
    topics: [
      "Classes & Objects",
      "Constructors",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction"
    ]
  },
  {
    title: "Advanced Python",
    topics: [
      "File Handling",
      "Exception Handling",
      "Decorators",
      "Generators",
      "Virtual Environment"
    ]
  },
  {
    title: "Database (SQL)",
    topics: [
      "MySQL Basics",
      "CRUD Operations",
      "Joins",
      "Normalization",
      "Transactions"
    ]
  },
  {
    title: "Django Framework",
    topics: [
      "Django Architecture",
      "Models",
      "Views",
      "Templates",
      "Forms",
      "Admin Panel"
    ]
  },
  {
    title: "REST API",
    topics: [
      "Django REST Framework",
      "Serializers",
      "ViewSets",
      "Authentication",
      "JWT"
    ]
  },
  {
    title: "Frontend Integration",
    topics: [
      "React Integration",
      "API Calls (Axios)",
      "Routing",
      "State Management"
    ]
  },
  {
    title: "Deployment",
    topics: [
      "Gunicorn",
      "Nginx",
      "Docker",
      "AWS Deployment",
      "CI/CD Basics"
    ]
  }
];

const PythonSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pythonsyllabus">
      <div className="pythonsyllabus-container">
        <h2 className="pythonsyllabus-title">
          Python Full Stack Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="pythonsyllabus-accordion-item">
            <div
              className="pythonsyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`pythonsyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="pythonsyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="pythonsyllabus-enroll-container">
          <button className="pythonsyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PythonSyllabus;