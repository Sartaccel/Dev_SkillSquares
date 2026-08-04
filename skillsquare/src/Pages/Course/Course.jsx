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
export default function Course() {
  const courses = [
    {
      id: "01",
      title: "Workplace Readiness & Employability Skills",
      desc: "Develop workplace communication, teamwork, leadership and professional skills.",
      icon: <FaUserTie />,
      color: "#1565C0",
    },
    {
      id: "02",
      title: "Tourism & Travel Operations",
      desc: "Gain practical knowledge in tourism, travel management and customer service.",
      icon: <FaGlobe />,
      color: "#512DA8",
    },
    {
      id: "03",
      title: "Hospitality & Guest Experience",
      desc: "Learn hospitality standards, guest handling and hotel operations.",
      icon: <FaConciergeBell />,
      color: "#EF6C00",
    },
    {
      id: "04",
      title: "Home Care & Assisted Living",
      desc: "Professional caregiving, elderly support and assisted living practices.",
      icon: <FaHandsHelping />,
      color: "#C2185B",
    },
    {
      id: "05",
      title: "Digital Skills For Modern Jobs",
      desc: "Master digital tools, office applications and productivity software.",
      icon: <FaLaptop />,
      color: "#00897B",
    },
    {
      id: "06",
      title: "Sales & Marketing Strategies",
      desc: "Build skills in sales, branding and digital marketing techniques.",
      icon: <FaChartLine />,
      color: "#E53935",
    },
    {
      id: "07",
      title: "Customer Support & CRM",
      desc: "Improve communication and CRM software handling skills.",
      icon: <FaHeadset />,
      color: "#039BE5",
    },
    {
      id: "08",
      title: "Entrepreneurship & Startup",
      desc: "Turn innovative ideas into successful business opportunities.",
      icon: <FaRocket />,
      color: "#8E24AA",
    },
    {
      id: "09",
      title: "Customer Branding",
      desc: "Learn branding strategies to improve customer engagement.",
      icon: <FaBullhorn />,
      color: "#FB8C00",
    },
    {
      id: "10",
      title: "Personal Branding",
      desc: "Build your professional identity and career profile.",
      icon: <FaUserGraduate />,
      color: "#3949AB",
    },
  ];

  return (
    <div className="course-container ">
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
          animationDuration: `${randomDuration}s`
        }}
      />
    );
  })}
</div>
        <div className="section-header text-center mb-5">
          <h2>
            Professional <span>Training Programs</span>
          </h2>
          <p>
            Choose the right course and build your future.
          </p>
        </div>
      
        <div className="course-grid">
            {courses.map((course) => (
        <div
          className="course-box"
          key={course.id}
          style={{ "--clr": course.color }}
        >
          <div className="course-icon">
            {course.icon}
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