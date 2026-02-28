import React, { useState } from "react";
import "./JavaSyllabus.css";
import { FiChevronDown } from "react-icons/fi";
const syllabusData = [
  {
    title: "Core Java",
    topics: [
      "JVM, JDK, JRE",
      "Data Types & Variables",
      "Control Statements",
      "Arrays & Strings",
      "Exception Handling",
      "Multithreading Basics"
    ]
  },
  {
    title: "OOP",
    topics: [
      "Class & Object",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
      "Interfaces"
    ]
  },
  {
    title: "Collections + Java 8",
    topics: [
      "List, Set, Map",
      "ArrayList & HashMap",
      "Streams API",
      "Lambda Expressions",
      "Optional",
      "Method References"
    ]
  },
  {
    title: "SQL",
    topics: [
      "DDL, DML, DCL",
      "Joins",
      "Subqueries",
      "Indexes",
      "Normalization",
      "Stored Procedures"
    ]
  },
  {
    title: "JDBC",
    topics: [
      "Database Connectivity",
      "Statement & PreparedStatement",
      "ResultSet",
      "Transactions",
      "Batch Processing"
    ]
  },
  {
    title: "Spring Core",
    topics: [
      "IoC Container",
      "Dependency Injection",
      "Bean Lifecycle",
      "Spring Annotations"
    ]
  },
  {
    title: "Spring Boot",
    topics: [
      "Spring Boot Architecture",
      "Controllers & Services",
      "Exception Handling",
      "Application Properties",
      "Profiles"
    ]
  },
  {
    title: "JPA",
    topics: [
      "Hibernate",
      "Entity Mapping",
      "JPQL",
      "Relationships",
      "Pagination & Sorting"
    ]
  },
  {
    title: "REST API",
    topics: [
      "HTTP Methods",
      "Status Codes",
      "JSON",
      "MVC Architecture",
      "CORS"
    ]
  },
  {
    title: "React Integration",
    topics: [
      "Axios API Calls",
      "React Hooks",
      "Routing",
      "State Management",
      "Form Handling"
    ]
  },
  {
    title: "Security",
    topics: [
      "Spring Security",
      "Authentication",
      "Authorization",
      "JWT",
      "Role-Based Access"
    ]
  },
  {
    title: "Deployment",
    topics: [
      "Maven Build",
      "Tomcat",
      "Docker Basics",
      "AWS Deployment",
      "CI/CD Basics"
    ]
  }
];

const JavaSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 return (
  <div className="javasyllabus">
    <div className="javasyllabus-container">
      <h2 className="javasyllabus-title">
        Java Full Stack Syllabus
      </h2>

      {syllabusData.map((item, index) => (
        <div key={index} className="javasyllabus-accordion-item">
          <div
            className="javasyllabus-accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>
              {activeIndex === index ? <FiChevronDown className="rotate-180" /> : <FiChevronDown />}
            </span>
          </div>

          {activeIndex === index && (
            <div className="javasyllabus-accordion-content">
              <ul>
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <div className="javasyllabus-enroll-container">
        <button className="javasyllabus-enroll-btn">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);
};

export default JavaSyllabus;