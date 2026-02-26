import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">

        {/* Wave */}
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c80-20,200-40,383-20
            c150,15,250,50,468.8,76C851.8,100,851.8,100,851.8,100z"
          />
        </svg>

        <div className="footer-content">

          {/* Logo + Description */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Company Logo" />
              <h3>SkillSquare</h3>
            </div>
            <p className="footer-description">
              We provide industry-level training in Web Development,
              Data Analytics, and Software Technologies.
              Learn. Build. Grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#courses">Courses</a></li>
              <li><a href="/#whychoose">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Location */}
          <div className="footer-column">
            <h4>Our Location</h4>
            <p><FaMapMarkerAlt className="footer-icon" /> Chennai, Tamil Nadu</p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+919876543210" className="phone-link">
                +91 98765 43210
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="footer-column">
            <h4>Have Any Query?</h4>
            <p>Feel free to reach out anytime.</p>
            <a href="/contact" className="footer-btn">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Floating Social Blob */}
        <div className="footer-social-wrapper">
          <div className="footer-social-blob">
            <a href="#" className="social-icon"><FaWhatsapp /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
  © {new Date().getFullYear()}{" "}
  <a href="https://www.enterkeysolutions.com" target="_blank" className="footer-company">
    Enterkey Solution
  </a>{" "}
  | All Rights Reserved.
</div>

      </footer>
    </div>
  );
};

export default Footer;