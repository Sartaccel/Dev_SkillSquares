import React, { useState, useEffect } from "react";
import "./EnrollmentForm.css";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    passedYear: "",
    course: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Enrollment Submitted Successfully!");
  };

  return (
    <div className="enrollment-container">
      <div className="enrollment-card">
        <h2 className="form-title">Registration Form</h2>

        <form onSubmit={handleSubmit} className="enrollment-form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Passed Out Year</label>
              <input
                type="number"
                name="passedYear"
                placeholder="Year"
                min="2000"
                max="2026"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
  <label>Highest Qualification</label>
  <input
    type="text"
    name="qualification"
    placeholder="Enter your qualification (e.g., BSc, MCA)"
    required
    onChange={handleChange}
  />
</div>

            <div className="form-group">
              <label>Course</label>
              <select name="course" required onChange={handleChange}>
                <option value="">Select Course</option>
                <option>Java Full Stack</option>
                <option>Python Full Stack</option>
                <option>MERN Stack</option>
                <option>DevOps</option>
                <option>UI/UX</option>
                <option>Software Testing</option>
                <option>Cyber Security</option>
                <option>Digital Marketing</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              rows="2"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;