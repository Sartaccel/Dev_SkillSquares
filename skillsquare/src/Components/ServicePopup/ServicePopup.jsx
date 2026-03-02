import React, { useEffect, useState } from "react";
import "./ServicePopup.css";
import { FaTimes } from "react-icons/fa";

const ServicePopup = () => {
  const [svcShowForm, setSvcShowForm] = useState(false);
  const [svcSubmitted, setSvcSubmitted] = useState(false);

  const [svcFormData, setSvcFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  // ✅ Show FORM only on page refresh
  useEffect(() => {
    const navigationType =
      performance.getEntriesByType("navigation")[0]?.type;

    if (navigationType === "reload") {
      setSvcShowForm(true);
    }
  }, []);

  const handleSvcChange = (e) => {
    setSvcFormData({ ...svcFormData, [e.target.name]: e.target.value });
  };

  const handleSvcSubmit = (e) => {
    e.preventDefault();
    setSvcSubmitted(true);

    setTimeout(() => {
      setSvcShowForm(false);
      setSvcSubmitted(false);
      setSvcFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
      });
    }, 2500);
  };

  return (
    <>
      {svcShowForm && (
        <div className="svc-overlay">
          <div className="svc-form-box svc-slide">
            <button
              className="svc-close-btn"
              onClick={() => setSvcShowForm(false)}
            >
              <FaTimes />
            </button>

            {!svcSubmitted ? (
              <>
                <h2>Enquire Now</h2>

                <form onSubmit={handleSvcSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={svcFormData.name}
                    onChange={handleSvcChange}
                    className="svc-input"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={svcFormData.email}
                    onChange={handleSvcChange}
                    className="svc-input"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={svcFormData.phone}
                    onChange={handleSvcChange}
                    className="svc-input"
                  />

                  <select
                    name="interest"
                    required
                    value={svcFormData.interest}
                    onChange={handleSvcChange}
                    className="svc-input"
                  >
                    <option value="">Area of Interest</option>
                    <option>Java Full Stack</option>
                    <option>Python Full Stack</option>
                    <option>MERN Stack</option>
                    <option>UI/UX</option>
                    <option>Digital Marketing</option>
                  </select>

                  <button type="submit" className="svc-submit-btn">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="svc-success">
                <h3 className="svc-success-title">
                  Your message has been sent successfully!
                </h3>

                <p className="svc-success-text">
                  Our team will contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePopup;