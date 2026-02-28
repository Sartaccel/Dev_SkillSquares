import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./DigitalMarketingSyllabus.css";

const syllabusData = [
  {
    title: "Digital Marketing Fundamentals",
    topics: [
      "Introduction to Digital Marketing",
      "Marketing Funnel",
      "Inbound vs Outbound Marketing",
      "Branding Basics",
      "Buyer Persona"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    topics: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Google Search Console"
    ]
  },
  {
    title: "Social Media Marketing (SMM)",
    topics: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Strategy",
      "Social Media Analytics"
    ]
  },
  {
    title: "Google Ads & Paid Marketing",
    topics: [
      "Google Ads Setup",
      "Search Campaigns",
      "Display Ads",
      "YouTube Ads",
      "Conversion Tracking"
    ]
  },
  {
    title: "Content Marketing",
    topics: [
      "Content Planning",
      "Blog Writing",
      "Copywriting Basics",
      "Email Marketing",
      "Lead Generation"
    ]
  },
  {
    title: "Analytics & Tools",
    topics: [
      "Google Analytics",
      "Google Tag Manager",
      "SEO Tools (Ahrefs, SEMrush)",
      "Performance Tracking"
    ]
  },
  {
    title: "Freelancing & Career Preparation",
    topics: [
      "Portfolio Building",
      "Client Acquisition",
      "Resume Preparation",
      "Interview Preparation"
    ]
  }
];

const DigitalMarketingSyllabus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="digitalmarketing-syllabus">
      <div className="digitalmarketing-container">
        <h2 className="digitalmarketing-title">
          Digital Marketing Full Course Syllabus
        </h2>

        {syllabusData.map((item, index) => (
          <div key={index} className="digitalmarketing-accordion-item">
            <div
              className="digitalmarketing-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`digitalmarketing-arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <FiChevronDown />
              </span>
            </div>

            {activeIndex === index && (
              <div className="digitalmarketing-accordion-content">
                <ul>
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="digitalmarketing-enroll-container">
          <button className="digitalmarketing-enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingSyllabus;