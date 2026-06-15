import React, { useState } from "react";
import "./ApplyNow.css";

function ApplyNow() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    education: "",
    skills: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.course ||
      !formData.education ||
      !formData.skills
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Course Application Submitted Successfully!");
  };

  return (
    <div className="apply-wrapper">
      <div className="apply-card">
        <h2 className="apply-title">Course Application Form</h2>
        <p className="apply-subtitle">
          Fill the form below to enroll in your preferred course.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="apply-row">
            <div className="apply-group">
              <label>First Name *</label>
              <input type="text" name="firstName" onChange={handleChange} required />
            </div>

            <div className="apply-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" onChange={handleChange} required />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="apply-row">
            <div className="apply-group">
              <label>Email *</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>

            <div className="apply-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </div>
          </div>

          {/* Course Selection */}
          <div className="apply-group">
            <label>Select Course *</label>
            <select name="course" onChange={handleChange} required>
              <option value="">Choose Course</option>
              <option>Workplace Readiness & Employability Skills</option>
              <option>Tourism & Travel Operations Management</option>
              <option>Hospitality & Guest Experience Excellence</option>
              <option>Home Care & Assisted Living Services</option>
              <option>Digital Skills for Modern Jobs</option>
              <option>Sales & Marketing Strategies</option>
              <option>Customer Support & CRM Training</option>
              <option>Entrepreneurship & Startup Skills</option>
              <option>Customer Branding & Career Development</option>
              <option>Personal Branding & Career Development</option>
            </select>
          </div>

          {/* Education */}
          <div className="apply-group">
            <label>Educational Qualification *</label>
            <input
              type="text"
              name="education"
              placeholder="Example: B.Sc, B.A, B.Tech"
              onChange={handleChange}
              required
            />
          </div>

          {/* Skills */}
          {/* <div className="apply-group">
            <label>Skills / Interests *</label>
            <input
              type="text"
              name="skills"
              placeholder="Example: Communication, Basic Computer Skills"
              onChange={handleChange}
              required
            />
          </div> */}

          {/* Resume (Optional) */}
          {/* <div className="apply-upload">
            <label>Upload Resume (Optional)</label>
            <input
              type="file"
              name="resume"
              className="apply-file"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
            />
          </div> */}

          <div className="apply-submit">
            <button type="submit" className="applynow-btn">
              Apply Now
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ApplyNow;