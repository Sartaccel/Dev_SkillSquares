import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./DevopsSyllabus.css";

const syllabusData = [
  {
    title: "DevOps Fundamentals",
    topics: [
      "Introduction to DevOps",
      "DevOps Lifecycle",
      "Agile & Scrum Basics",
      "CI/CD Concepts",
      "Version Control Overview"
    ]
  },
  {
    title: "Linux & Shell Scripting",
    topics: [
      "Linux Basics",
      "File System & Permissions",
      "Shell Scripting",
      "Process Management",
      "Package Management"
    ]
  },
  {
    title: "Git & GitHub",
    topics: [
      "Git Installation & Setup",
      "Branching & Merging",
      "Pull Requests",
      "Git Workflows",
      "GitHub Actions Basics"
    ]
  },
  {
    title: "Continuous Integration & Deployment",
    topics: [
      "Jenkins Setup",
      "Build Pipelines",
      "CI/CD Automation",
      "Artifact Management"
    ]
  },
  {
    title: "Docker & Containers",
    topics: [
      "Docker Installation",
      "Docker Images & Containers",
      "Dockerfile",
      "Docker Compose",
      "Container Networking"
    ]
  },
  {
    title: "Kubernetes",
    topics: [
      "Kubernetes Architecture",
      "Pods & Services",
      "Deployments",
      "ConfigMaps & Secrets",
      "Scaling Applications"
    ]
  },
  {
    title: "Cloud & Deployment",
    topics: [
      "AWS Basics",
      "EC2 & S3",
      "Load Balancing",
      "Monitoring & Logging",
      "Production Deployment"
    ]
  }
];

const DevopsSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="devopssyllabus">
      <div className="devopssyllabus-container">
        <h2 className="devopssyllabus-title">
          DevOps Full Course Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="devopssyllabus-accordion-item">
            <div
              className="devopssyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`devopssyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="devopssyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="devopssyllabus-enroll-container">
          <button className="devopssyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevopsSyllabus;