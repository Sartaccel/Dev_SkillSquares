import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaBug,
  FaCloud,
  FaChartBar,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaChevronRight
  
} from "react-icons/fa";
import "./Navbar.css";

/* OFFLINE COURSES */
const offlineCourses = {
  "Software Development": {
    icon: <FaLaptopCode />,
    courses: [
      { title: "Java Full Stack", icon: <FaJava /> },
      { title: "Python Full Stack", icon: <FaPython /> },
      { title: "MERN Full Stack", icon: <FaReact /> },
      { title: "MEAN Full Stack", icon: <FaNodeJs /> },
    ],
  },
  "Software Testing": {
    icon: <FaBug />,
    courses: [
      { title: "Manual Testing", icon: <FaBug /> },
      { title: "Automation Testing", icon: <FaBug /> },
    ],
  },
  Devops: {
    icon: <FaCloud />,
    courses: [{ title: "DevOps Master Course", icon: <FaCloud /> }],
  },
  "Data Science": {
    icon: <FaChartBar />,
    courses: [{ title: "Data Science Master", icon: <FaChartBar /> }],
  },
};

/* ONLINE COURSES */
const onlineCourses = {
  Programming: {
    icon: <FaLaptopCode />,
    courses: [
      { title: "React Online", icon: <FaReact /> },
      { title: "Python Online", icon: <FaPython /> },
    ],
  },
  "Cloud & DevOps": {
    icon: <FaCloud />,
    courses: [{ title: "AWS Online", icon: <FaCloud /> }],
  },
};
const closeNavbar = () => {
  const navbar = document.getElementById("navbarContent");
  if (navbar && navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};
function Navbar() {

  // ONE MENU STATE
const [activeMenu, setActiveMenu] = useState(null);
const [activeCategory, setActiveCategory] = useState(null);

// Detect screen size
const isMobile = window.matchMedia("(max-width: 991px)").matches;

// Mobile Click Toggle
const toggleMenu = (menuType) => {
  if (activeMenu === menuType) {
    setActiveMenu(null);
    setActiveCategory(null);
  } else {
    setActiveMenu(menuType);
    setActiveCategory(null);
  }
};

// Desktop Hover Open
const handleMouseEnter = (menuType) => {
  if (!isMobile) {
    setActiveMenu(menuType);
  }
};

// Desktop Hover Close
const handleMouseLeave = () => {
  if (!isMobile) {
    setActiveMenu(null);
    setActiveCategory(null);
  }
};

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top" onMouseLeave={handleMouseLeave}>
  <div className="container">

    {/* LOGO */}
    <Link className="navbar-brand" to="/">Logo</Link>

    {/* MOBILE TOGGLE BUTTON */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* COLLAPSIBLE MENU */}
    <div className="collapse navbar-collapse" id="navbarContent">

      <ul className="navbar-nav mx-auto">

        {/* ALL COURSES */}
       <li
  className="nav-item mega-parent"
  onMouseEnter={() => handleMouseEnter("offline")}
>
  <span
    className="nav-link"
    onClick={() => isMobile && toggleMenu("offline")}
  >
    All Courses
  </span>

  {activeMenu === "offline" && (
    <MegaMenu
      data={offlineCourses}
      active={activeCategory}
      setActive={setActiveCategory}
    />
  )}
</li>

        {/* ONLINE COURSES */}
        <li
          className="nav-item mega-parent"
          onMouseEnter={() => handleMouseEnter("online")}
        >
          <span className="nav-link" onClick={() => isMobile && toggleMenu("online")}>Online Courses</span>

          {activeMenu === "online" && (
            <MegaMenu
              data={onlineCourses}
              active={activeCategory}
              setActive={setActiveCategory}
            />
          )}
        </li>

        <li className="nav-item" onMouseEnter={handleMouseLeave}>
  <Link className="nav-link" to="/testimonial" onClick={closeNavbar}>
     Testimonial
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/careers" onClick={closeNavbar}>
     Career
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/contact" onClick={closeNavbar}>
     Contact Us
  </Link>
</li>

      </ul>

      <div className="ms-lg-3">
  <Link to="/enroll" className="btn enroll-btn" onClick={closeNavbar}>
    Enroll Now
  </Link>
</div>

    </div>
  </div>
</nav>
  );
}

/* MEGA MENU */
function MegaMenu({ data, active, setActive }) {
  return (
    <div className="mega-menu">
      <div className="row mega-wrapper">

        <div className="col-lg-3 col-md-4 category-menu">
          {Object.keys(data).map((category, index) => (
            <div
              key={index}
              className={`category-item ${active === category ? "active" : ""}`}
              onMouseEnter={() => setActive(category)}
            >
              <span className="cat-icon">{data[category].icon}</span>
              <span className="cat-text">{category}</span>
              <FaChevronRight className="cat-arrow" />
            </div>
          ))}
        </div>

        <div className="col-lg-9 col-md-8 courses-grid">

  {active && data[active] ? (
    <div className="row">
      {data[active].courses.map((course, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
          <div className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h6>{course.title}</h6>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="empty-state">
      <p>Hover a category to view courses</p>
    </div>
  )}

</div>

      </div>
    </div>
  );
}

export default Navbar;