import React from "react";
import { FaClock, FaArrowRight } from "react-icons/fa";
import "./Courses.css";
import java from "../../assets/images/java.png";
import python from "../../assets/images/python.png";
import cyber from "../../assets/images/cyber.jpg";
import design from "../../assets/images/design.png";
import react from "../../assets/images/react.png";
import cloud from "../../assets/images/cloud.png";
import Digital from "../../assets/images/Digital.jpg";
import testing from "../../assets/images/testing.png";
const courses = [
  {
    title: "Java Full Stack",
    desc: "Master frontend, backend and database development using Java technologies.",
    duration: "6 Months",
    image: java,
  },
  {
    title: "Python Full Stack",
    desc: "Learn Django, React and modern Python tools for web development.",
    duration: "5 Months",
    image: python,
  },
  {
    title: "MERN Stack",
    desc: "Build dynamic applications using MongoDB, Express, React and Node.",
    duration: "4 Months",
    image: react,
  },
  
  {
    title: "Cyber Security",
    desc: "Learn ethical hacking, network security, and threat protection techniques.",
    duration: "4 Months",
    image: cyber,
  },
  {
    title: "UI / UX Design",
    desc: "Design user-friendly and engaging digital experiences using modern tools.",
    duration: "3 Months",
    image: design,
  },
  {
    title: "Digital Marketing",
    desc: "Master SEO, social media marketing, paid ads and branding strategies.",
    duration: "3 Months",
    image: Digital,
  },
  {
    title: "DevOps",
    desc: "Learn CI/CD, Docker, Kubernetes and cloud deployment practices.",
    duration: "4 Months",
    image: cloud,
  },
  {
    title: "Software Testing",
    desc: "Master manual and automation testing with real-time projects.",
    duration: "3 Months",
    image: testing,
  }
];

function Courses() {
  return (
    <section className="courses-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            Our <span>Popular Courses</span>
          </h2>
          <p className="section-sub">
            Industry-driven programs designed to accelerate your career.
          </p>
        </div>

        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="course-card">

                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>

                <h5>{course.title}</h5>
                <p>{course.desc}</p>

                <div className="course-footer">
                  <span className="duration">
                    <FaClock /> {course.duration}
                  </span>

                  <button className="learn-btn">
                    Learn More <FaArrowRight />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;