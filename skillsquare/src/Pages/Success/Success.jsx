import React from "react";
import "./Success.css";
import abiImage from "../../assets/images/Abi.jpeg";
import Asmi from "../../assets/images/As Sm.jpeg";
import Subin from "../../assets/images/Subi S.jpeg";
import Lijona from "../../assets/images/Lijona SS.jpeg";

const testimonials = [
  {
    name: "Abi Sugesh S",
    review:
      "I completed my Full Stack Development training at Talent Turbo Training Academy, and it was a valuable learning experience.The course was well-structured, covering both frontend and backend concepts clearly and practically.The trainers were supportive and explained topics in an easy-to-understand manner.",
    image: abiImage,
  },
  {
    name: "Asmi SM",
    review:
      "I’m grateful to Talent Turbo Training Academy for their excellent training and continuous support.I gained strong backend skills in SQL, Java, and Spring Boot through practical, real-time learning.The trainers and HR team guided me throughout, improving my technical knowledge and interview confidence.With their support, I was successfully placed at Sart Accelerator, building a strong foundation for my career.",
    image: Asmi,
  },
  {
    name: "Subin Sundar",
    review:
      "I completed my Full Stack Development training at Talent Turbo Training Academy, and it was a great learning experience.The course was well-structured, covering frontend and backend technologies in a clear and practical way.The trainers were supportive, and hands-on projects helped me build strong skills in Java, Spring Boot, and React.This training improved my problem-solving ability, and I highly recommend it to anyone pursuing a software development career.",
    image: Subin,
  },
   {
    name: " Lajona Rajan",
    review:
      "I am Lajona Rajan, and I’m grateful to SART Accelerator for guiding me to join the Java Full Stack Developer course.I started with no knowledge of Java but learned Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and ReactJS in a short time.The instructor was friendly and explained concepts clearly, making learning easy and effective.Working on real-time projects boosted my confidence to become a successful developer.Despite coming from an English Literature background, this program gave me a strong foundation in application development.",
    image: Lijona,
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
              className={`col-lg-3 testimonial-wrapper ${
                index !== 2 ? "with-border" : ""
              }`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 250}
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