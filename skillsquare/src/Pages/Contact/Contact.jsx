import React, { useState } from "react";
import "./Contact.css";
import { FaArrowRight } from "react-icons/fa";
import proposal from "../../assets/images/SkillSquare_Proposal.pdf";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

const [activeForm, setActiveForm] = useState(null);
  

  return (
    <section className="contact-section">
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <div className="contact-wrapper">
        <div className="header">
          <h1>Learn. Grow. Get Hired.</h1>
          {/* <p>
           This positioning will make SkillSquare look like a modern employability and talent-tech company rather than a conventional training institute.
          </p>
          */}
          
        </div>

        {/* <div className="form-container">
          {success && (
            <div className="success-message">
              <strong>Thank you!</strong> Your message has been sent successfully.
            </div>
          )}

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row two-cols">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row two-cols">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="internship">Internship</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us more about your inquiry..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            <div className="privacy-notice">
              <strong>Privacy Notice:</strong> We respect your privacy and will never share your personal information.
            </div>
          </form>
        </div> */}
      </div>
      <div className="secondd">
  {/* <h2>Visionaries' Message</h2> */}

  <p>
    SkillSquare was founded with a simple observation: many students graduate
    with degrees but struggle to meet industry expectations.
      Having spent years working in talent acquisition, employee development,
    leadership coaching, performance management, and workforce planning around
    the globe, we understood exactly where the gap existed.
      SkillSquare was created to bridge the gap between education and employment
    through practical, industry-driven learning experiences.
    We aim at Bridging Education and Employability Through Skills, Intelligence
    & Opportunities.
  </p>

  <blockquote>
    "SkillSquare is built by industry practitioners, not academicians."
  </blockquote>

</div>
<section className="inquiry-section">

      <div className="button-row">
        <button
          className="btn primary-btn"
          onClick={() => setActiveForm("college")}
        >
          For Colleges <FaArrowRight className="arrow-icon" />
        </button>

        <button
          className="btn primary-btn"
          onClick={() => setActiveForm("corporate")}
        >
          For Corporates  <FaArrowRight className="arrow-icon" />
        </button>

        <button
          // className="action-btn"
          className="btn primary-btn"
          onClick={() => setActiveForm("student")}
        >
          For Students  <FaArrowRight className="arrow-icon" />
        </button>
      </div>

      {activeForm && (
  <div
    className="modal-overlay"
    onClick={() => setActiveForm(null)}
  >
    <div
      className="form-container"
      onClick={(e) => e.stopPropagation()}
    >

          <button
            className="close-btn"
            onClick={() => setActiveForm(null)}
          >
            ✕
          </button>

          {activeForm === "college" && (
            <>
              <h2>Book Workshop</h2>

              <form className="form-grid">
                <input type="text" placeholder="College Name" />
                <input type="text" placeholder="Contact Person" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Workshop Requirement"></textarea>

                 <div className="proposal-actions">
  <button type="submit" className="proposal-book-btn">
    Book Session
  </button>

  <a
    href={proposal}
    download="SkillSquare_Proposal.pdf"
    className="proposal-download-btn"
  >
    Download Proposal
  </a>
</div>
              </form>
            </>
          )}

          {activeForm === "corporate" && (
            <>
              <h2>Request Proposal</h2>

              <form className="form-grid">
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Contact Person" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Business Requirement"></textarea>

                 <div className="proposal-actions">
  <button type="submit" className="proposal-book-btn">
    Book Session
  </button>

  <a
    href={proposal}
    download="SkillSquare_Proposal.pdf"
    className="proposal-download-btn"
  >
    Download Proposal
  </a>
</div>
              </form>
            </>
          )}

          {activeForm === "student" && (
            <>
              <h2>Career Counselling</h2>

              <form className="form-grid">
                <input type="text" placeholder="Student Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Degree / Course" />
                <textarea placeholder="Career Goals"></textarea>
                <div className="proposal-actions">
  <button type="submit" className="proposal-book-btn">
    Book Session
  </button>

  <a
    href={proposal}
    download="SkillSquare_Proposal.pdf"
    className="proposal-download-btn"
  >
    Download Proposal
  </a>
</div>
                
              </form>
            </>
          )}

        </div>
        </div>
      )}

    </section>
    </section>
  );
}

export default Contact;