import "./Course.css";
import {
  FaUserTie,
  FaGlobe,
  FaConciergeBell,
  FaHandsHelping,
  FaLaptop,
  FaChartLine,
  FaHeadset,
  FaRocket,
  FaBullhorn,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Course() {
  const [courses, setCourses] = useState([]);

  const icons = {
    userTie: <FaUserTie />,
    globe: <FaGlobe />,
    conciergeBell: <FaConciergeBell />,
    handsHelping: <FaHandsHelping />,
    laptop: <FaLaptop />,
    chartLine: <FaChartLine />,
    headset: <FaHeadset />,
    rocket: <FaRocket />,
    bullhorn: <FaBullhorn />,
    userGraduate: <FaUserGraduate />,
  };

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error loading courses:", error);
      });
  }, []);

  return (
    <div className="course-container">
      <div className="squares">
        {[...Array(100)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 20;
          const randomDuration = 15 + Math.random() * 20;

          return (
            <span
              key={i}
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                animationDelay: `-${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="section-header text-center mb-5">
        <h2>
          Professional <span>Training Programs</span>
        </h2>
        <p>Choose the right course and build your future.</p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <div
            className="course-box"
            key={course.id}
            style={{ "--clr": course.color }}
          >
            <div className="course-icon">
              {icons[course.icon]}
            </div>

            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.desc}</p>

              <Link to="/contact" className="course-link">
                Enroll Now →
              </Link>
            </div>

            <div className="course-number">
              <span>{course.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}