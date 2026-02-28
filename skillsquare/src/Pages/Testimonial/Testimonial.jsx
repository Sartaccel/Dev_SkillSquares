import React from "react";
import "./Testimonial.css";

const reviews = [
  {
    emoji: "😀",
    name: "Alex R.",
    role: "Entrepreneur",
    text: "This platform is a game-changer for my business. Highly recommend!"
  },
  {
    emoji: "🚀",
    name: "Sarah W.",
    role: "Freelance Designer",
    text: "It integrates seamlessly with my workflow. Fast and reliable."
  },
  {
    emoji: "🤩",
    name: "Michael B.",
    role: "Startup Founder",
    text: "It gave me a competitive edge and accelerated my growth."
  },
  {
    emoji: "😊",
    name: "Jessica L.",
    role: "Marketer",
    text: "User-friendly and results speak for themselves."
  }
];

const ReviewColumn = ({ reverse }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`testimonial-container ${reverse ? "reverse" : ""}`}>
        <div className={`testimonial-scroll ${reverse ? "scroll-b2t" : "scroll-t2b"}`}>
          {[...reviews, ...reviews].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <span className="emoji">{item.emoji}</span>
                <div>
                  <p className="name">{item.name}</p>
                  <p className="role">{item.role}</p>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="testimonial-heading">
            What Our Customers Say
          </h1>
          <p className="testimonial-sub">
            Hear from thousands of happy users who trust our service.
          </p>
        </div>

        <div className="row g-4 g-md-5">
          <ReviewColumn />
          <ReviewColumn reverse />
          <ReviewColumn />
        </div>

      </div>
    </section>
  );
}

export default Testimonial;