import React, { useState } from "react";
import "./ApplyNow.css";

function ApplyNow() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
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

    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all required fields.");
        return;
      }
    }

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="apply-wrapper">
      <div className="apply-card">
        <h2 className="apply-title">Job Application Form</h2>
        <p className="apply-subtitle">
          Please Fill Out the Form Below to Submit Your Job Application!
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
              <label>E-mail *</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>

            <div className="apply-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </div>
          </div>

          {/* Position & Experience */}
          <div className="apply-row">
            <div className="apply-group">
              <label>Applied Position *</label>
              <input type="text" name="position" onChange={handleChange} required />
            </div>

            <div className="apply-group">
              <label>Experience *</label>
              <select name="experience" onChange={handleChange} required>
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 Years">0 - 1 Years</option>
                <option value="1-3 Years">1 - 3 Years</option>
                <option value="3-5 Years">3 - 5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div className="apply-group">
            <label>Skills *</label>
            <input
              type="text"
              name="skills"
              placeholder="Example: React, Node.js, Python"
              onChange={handleChange}
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="apply-upload">
            <label>Upload Resume *</label>
            <input
              type="file"
              name="resume"
              className="apply-file"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <div className="apply-submit">
            <button type="submit" className="applynow-btn">
              Apply
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ApplyNow;