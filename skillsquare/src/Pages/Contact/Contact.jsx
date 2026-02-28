import React, { useState } from "react";
import "./Contact.css";

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

  return (
    <section className="contact-section">
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <div className="contact-wrapper">
        <div className="header">
          <h1>Let's Connect</h1>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="form-container">
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
        </div>
      </div>
    </section>
  );
}

export default Contact;