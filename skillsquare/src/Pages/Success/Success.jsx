import React from "react";
import "./Success.css";

const testimonials = [
  {
    name: "Anna Tyuneva",
    review:
      "The course is great! Teachers talks very interesting and accessible. Thank you very much!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mykola Dunayev",
    review:
      "The course is clear enough. Well explained and a lot of practice. I recommend to everyone!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nastya Kozarchuk",
    review:
      "The training was very accessible. Everything is clear and well structured.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Success() {
  return (
    <section className="success-section" id="success">
      <div className="container">
         {/* Heading */}
    <div className="section-header text-center" data-aos="fade-up">
      <h2>
        Students <span>Success Stories</span>
      </h2>
      <p>
        Hear from our learners who transformed their careers with Skill Squares.
      </p>
    </div>

        <div className="row text-center">

          {testimonials.map((item, index) => (
            <div
              className={`col-lg-4 testimonial-wrapper ${
                index !== 2 ? "with-border" : ""
              }`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="testimonial-card">

                <div className="image-wrapper">
  <div className="blob"></div>
  <div className="soft-dot"></div>
  <img src={item.image} alt={item.name} />
</div>

                <h4>{item.name}</h4>
                <p>{item.review}</p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Success;