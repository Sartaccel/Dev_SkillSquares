import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./CyberSyllabus.css";

const syllabusData = [
  {
    title: "Cyber Security Fundamentals",
    topics: [
      "Introduction to Cyber Security",
      "Types of Cyber Attacks",
      "CIA Triad (Confidentiality, Integrity, Availability)",
      "Security Policies & Standards"
    ]
  },
  {
    title: "Networking Basics",
    topics: [
      "OSI & TCP/IP Model",
      "IP Addressing",
      "DNS & DHCP",
      "Firewalls",
      "VPN"
    ]
  },
  {
    title: "Ethical Hacking",
    topics: [
      "Footprinting & Reconnaissance",
      "Scanning & Enumeration",
      "Vulnerability Assessment",
      "Penetration Testing"
    ]
  },
  {
    title: "Web Application Security",
    topics: [
      "OWASP Top 10",
      "SQL Injection",
      "XSS",
      "CSRF",
      "Authentication Attacks"
    ]
  },
  {
    title: "System Security",
    topics: [
      "Linux Security",
      "Windows Security",
      "Access Control",
      "Malware Analysis Basics"
    ]
  },
  {
    title: "Tools & Practical",
    topics: [
      "Kali Linux",
      "Wireshark",
      "Metasploit",
      "Burp Suite",
      "Nmap"
    ]
  },
  {
    title: "Deployment & Career Prep",
    topics: [
      "Cyber Laws & Compliance",
      "Security Certifications Overview",
      "Resume & Interview Preparation"
    ]
  }
];

const CyberSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cybersyllabus">
      <div className="cybersyllabus-container">
        <h2 className="cybersyllabus-title">
          Cyber Security Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="cybersyllabus-accordion-item">
            <div
              className="cybersyllabus-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`cybersyllabus-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="cybersyllabus-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="cybersyllabus-enroll-container">
          <button className="cybersyllabus-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberSyllabus;