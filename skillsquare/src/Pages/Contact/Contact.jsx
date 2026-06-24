import React, { useState } from "react";
import "./Contact.css";
import { FaArrowRight } from "react-icons/fa";
import proposal from "../../assets/images/SkillSquare_Proposal.pdf";
import api from "../../api"; // your axios instance

function Contact() {
  const [activeForm, setActiveForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [collegeData, setCollegeData] = useState({
    collegeName: "", contactPerson: "", email: "", phone: "", workshopRequirement: "",
  });

  const [corporateData, setCorporateData] = useState({
    companyName: "", contactPerson: "", email: "", phone: "", businessRequirement: "",
  });

  const [studentData, setStudentData] = useState({
    studentName: "", email: "", phone: "", degreeCourse: "", careerGoals: "",
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

  // ── College ──────────────────────────────────────────────
  const handleCollegeChange = (e) =>
    setCollegeData({ ...collegeData, [e.target.name]: e.target.value });

  const handleCollegeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/enquiry/college", collegeData);
      setCollegeData({ collegeName: "", contactPerson: "", email: "", phone: "", workshopRequirement: "" });
      handleSuccess();
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Corporate ────────────────────────────────────────────
  const handleCorporateChange = (e) =>
    setCorporateData({ ...corporateData, [e.target.name]: e.target.value });

  const handleCorporateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/enquiry/corporate", corporateData);
      setCorporateData({ companyName: "", contactPerson: "", email: "", phone: "", businessRequirement: "" });
      handleSuccess();
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Student ──────────────────────────────────────────────
  const handleStudentChange = (e) =>
    setStudentData({ ...studentData, [e.target.name]: e.target.value });

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/enquiry/student", studentData);
      setStudentData({ studentName: "", email: "", phone: "", degreeCourse: "", careerGoals: "" });
      handleSuccess();
    } catch (err) {
      setError("Submission failed. Please try again.");
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
          <button className="btn primary-btn" onClick={() => { resetAll(); setActiveForm("college"); }}>
            For Colleges <FaArrowRight className="arrow-icon" />
          </button>
          <button className="btn primary-btn" onClick={() => { resetAll(); setActiveForm("corporate"); }}>
            For Corporates <FaArrowRight className="arrow-icon" />
          </button>
          <button className="btn primary-btn" onClick={() => { resetAll(); setActiveForm("student"); }}>
            For Students <FaArrowRight className="arrow-icon" />
          </button>
        </div>

        {activeForm && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="form-container" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>✕</button>

              {/* ── Success banner ── */}
              {success && (
                <div className="success-message">
                  ✅ Submitted successfully! We'll get back to you soon.
                </div>
              )}

              {/* ── Error banner ── */}
              {error && (
                <div className="error-message">{error}</div>
              )}

              {/* ── College form ── */}
              {activeForm === "college" && !success && (
                <>
                  <h2>Book Workshop</h2>
                  <form className="form-grid" onSubmit={handleCollegeSubmit}>
                    <input
                      type="text" name="collegeName" placeholder="College Name"
                      value={collegeData.collegeName} onChange={handleCollegeChange} required
                    />
                    <input
                      type="text" name="contactPerson" placeholder="Contact Person"
                      value={collegeData.contactPerson} onChange={handleCollegeChange} required
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={collegeData.email} onChange={handleCollegeChange} required
                    />
                    <input
                      type="tel" name="phone" placeholder="Phone Number"
                      value={collegeData.phone} onChange={handleCollegeChange} required
                    />
                    <textarea
                      name="workshopRequirement" placeholder="Workshop Requirement"
                      value={collegeData.workshopRequirement} onChange={handleCollegeChange} required
                    />
                    <div className="proposal-actions">
                      <button type="submit" className="proposal-book-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Book Session"}
                      </button>
                      <a href={proposal} download="SkillSquare_Proposal.pdf" className="proposal-download-btn">
                        Download Proposal
                      </a>
                    </div>
                  </form>
                </>
              )}

              {/* ── Corporate form ── */}
              {activeForm === "corporate" && !success && (
                <>
                  <h2>Request Proposal</h2>
                  <form className="form-grid" onSubmit={handleCorporateSubmit}>
                    <input
                      type="text" name="companyName" placeholder="Company Name"
                      value={corporateData.companyName} onChange={handleCorporateChange} required
                    />
                    <input
                      type="text" name="contactPerson" placeholder="Contact Person"
                      value={corporateData.contactPerson} onChange={handleCorporateChange} required
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={corporateData.email} onChange={handleCorporateChange} required
                    />
                    <input
                      type="tel" name="phone" placeholder="Phone Number"
                      value={corporateData.phone} onChange={handleCorporateChange} required
                    />
                    <textarea
                      name="businessRequirement" placeholder="Business Requirement"
                      value={corporateData.businessRequirement} onChange={handleCorporateChange} required
                    />
                    <div className="proposal-actions">
                      <button type="submit" className="proposal-book-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Book Session"}
                      </button>
                      <a href={proposal} download="SkillSquare_Proposal.pdf" className="proposal-download-btn">
                        Download Proposal
                      </a>
                    </div>
                  </form>
                </>
              )}

              {/* ── Student form ── */}
              {activeForm === "student" && !success && (
                <>
                  <h2>Career Counselling</h2>
                  <form className="form-grid" onSubmit={handleStudentSubmit}>
                    <input
                      type="text" name="studentName" placeholder="Student Name"
                      value={studentData.studentName} onChange={handleStudentChange} required
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={studentData.email} onChange={handleStudentChange} required
                    />
                    <input
                      type="tel" name="phone" placeholder="Phone Number"
                      value={studentData.phone} onChange={handleStudentChange} required
                    />
                    <input
                      type="text" name="degreeCourse" placeholder="Degree / Course"
                      value={studentData.degreeCourse} onChange={handleStudentChange} required
                    />
                    <textarea
                      name="careerGoals" placeholder="Career Goals"
                      value={studentData.careerGoals} onChange={handleStudentChange} required
                    />
                    <div className="proposal-actions">
                      <button type="submit" className="proposal-book-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Book Session"}
                      </button>
                      <a href={proposal} download="SkillSquare_Proposal.pdf" className="proposal-download-btn">
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