import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = () => {
    setMenuOpen(false); // close mobile menu only
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="nav-logo">
          <a href="/" onClick={handleNavigate}>
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="/" onClick={handleNavigate}>
              Home
            </a>
          </li>

          <li>
            <a href="/about" onClick={handleNavigate}>
              About
            </a>
          </li>

        

          <li>
            <a href="/testimonial" onClick={handleNavigate}>
              Testimonial
            </a>
          </li>

          {/* <li>
            <a href="/careers" onClick={handleNavigate}>
              Our Course
            </a>
          </li> */}
          <li>
            <a href="/Course" onClick={handleNavigate}>
              Our Course
            </a>
          </li>

          <li>
            <a href="/contact" onClick={handleNavigate}>
              Contact Us
            </a>
          </li>

          {/* Mobile Button */}
          <li className="mobile-btn">
            {/* <a href="/ACTAssessments" className="enroll-btn" onClick={handleNavigate}>Enroll Now</a> */}
            <a href="/contact" className="enroll-btn" onClick={handleNavigate}>Enroll Now</a>
            {/* <button
        className="enroll-btn"
        onClick={() => setSvcShowForm(true)}
    >
        Enroll Now
    </button> */}
          </li>

        </ul>

        {/* Desktop Button */}
        {/* <div className="nav-btn">
          <a href="/ACTAssessments" className="enroll-btn">ACT NOW</a>
        </div> */}
        <div className="nav-btn">
    <a href="/contact" className="enroll-btn">
  Enroll Now
</a>
</div>

        {/* Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;