import React, { useState } from "react";
import "./Contact.css";
import { FaArrowRight } from "react-icons/fa";
import proposal from "../../assets/images/SkillSquare_Proposal.pdf";
import emailjs from "@emailjs/browser";

function Contact() {
  const [activeForm, setActiveForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [studentData, setStudentData] = useState({
    studentName: "",
    email: "",
    phone: "",
    degreeCourse: "",
    careerGoals: "",
  });

  const resetAll = () => {
    setSuccess(false);
    setError("");
    setLoading(false);
  };

  const closeModal = () => {
    setActiveForm(null);
    resetAll();
  };

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  const handleStudentChange = (e) =>
    setStudentData({ ...studentData, [e.target.name]: e.target.value });

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        "service_ib1e8ng",
        "template_cc0sud9",
        {
          studentName: studentData.studentName,
          email: studentData.email,
          phone: studentData.phone,
          degreeCourse: studentData.degreeCourse,
          careerGoals: studentData.careerGoals,
        },
        "0GwVRlinyAWLyGCA3"
      );

      setStudentData({
        studentName: "",
        email: "",
        phone: "",
        degreeCourse: "",
        careerGoals: "",
      });

      handleSuccess();
    } catch (err) {
      console.error(err);
      console.log("EmailJS Error:", err);
  console.log("Status:", err.status);
  console.log("Text:", err.text);
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        </div>
      </div>

      <div className="secondd">
        <p>
          SkillSquare was founded with a simple observation: many students graduate
          with degrees but struggle to meet industry expectations. Having spent years
          working in talent acquisition, employee development, leadership coaching,
          performance management, and workforce planning around the globe, we understood
          exactly where the gap existed. SkillSquare was created to bridge the gap
          between education and employment through practical, industry-driven learning
          experiences. We aim at Bridging Education and Employability Through Skills,
          Intelligence & Opportunities.
        </p>
        <blockquote>
          "SkillSquare is built by industry practitioners, not academicians."
        </blockquote>
      </div>

      <section className="inquiry-section">
        <div className="button-row">
          <button
            className="btn primary-btn"
            onClick={() => {
              resetAll();
              setActiveForm("student");
            }}
          >
            For Students <FaArrowRight className="arrow-icon" />
          </button>
        </div>

        {activeForm && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="form-container" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                &#10005;
              </button>

              {success && (
                <div className="success-message">
                  Submitted successfully! We'll get back to you soon.
                </div>
              )}

              {error && <div className="error-message">{error}</div>}

              {activeForm === "student" && !success && (
                <>
                  <h2>Career Counselling</h2>
                  <form className="form-grid" onSubmit={handleStudentSubmit}>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="Student Name"
                      value={studentData.studentName}
                      onChange={handleStudentChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={studentData.email}
                      onChange={handleStudentChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={studentData.phone}
                      onChange={handleStudentChange}
                      required
                    />
                    <select
                      name="degreeCourse"
                      value={studentData.degreeCourse}
                      onChange={handleStudentChange}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="Workplace Readiness & Employability Skills">
                        Workplace Readiness & Employability Skills
                      </option>
                      <option value="Tourism & Travel Operations">
                        Tourism & Travel Operations
                      </option>
                      <option value="Hospitality & Guest Experience">
                        Hospitality & Guest Experience
                      </option>
                      <option value="Home Care & Assisted Living">
                        Home Care & Assisted Living
                      </option>
                      <option value="Digital Skills For Modern Jobs">
                        Digital Skills For Modern Jobs
                      </option>
                      <option value="Sales & Marketing Strategies">
                        Sales & Marketing Strategies
                      </option>
                      <option value="Customer Support & CRM">
                        Customer Support & CRM
                      </option>
                      <option value="Entrepreneurship & Startup">
                        Entrepreneurship & Startup
                      </option>
                      <option value="Customer Branding">Customer Branding</option>
                      <option value="Personal Branding">Personal Branding</option>
                    </select>
                    <textarea
                      name="careerGoals"
                      placeholder="Career Goals"
                      value={studentData.careerGoals}
                      onChange={handleStudentChange}
                      required
                    />
                    <div className="proposal-actions">
                      <button type="submit" className="proposal-book-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Book Session"}
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