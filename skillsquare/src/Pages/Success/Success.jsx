import React from "react";
import Slider from "react-slick";
import "./Success.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import abiImage from "../../assets/images/Abi.jpeg";
import Asmi from "../../assets/images/As Sm.jpeg";
import Subin from "../../assets/images/Subi S.jpeg";
import Lijona from "../../assets/images/Lijona SS.jpeg";
import Haree from "../../assets/images/Hareeshwar.jpeg"
import Santho from "../../assets/images/p1.jpeg"
import Saran from "../../assets/images/p2.jpeg"
import San from "../../assets/images/p3.jpeg"
import pri from "../../assets/images/p4.jpeg"
import cros from "../../assets/images/p5.jpeg"
import TeamSection from "../TeamSection/TeamSection";
// import ResourceCenter from "../ResourceCenter/ResourceCenter";
// import InvestorPartnerPage from "../InvestorPartnerPage/InvestorPartnerPage";
const testimonials = [
  {
    name: "Abi Sugesh S",
    review:
      "I completed my Full Stack Development training at Talent Turbo Training Academy, and it was a valuable learning experience. The course was well-structured, covering both frontend and backend concepts clearly and practically.",
    image: abiImage,
  },
  {
    name: "Asmi SM",
    review:
      "I’m grateful to Talent Turbo Training Academy for their excellent training and continuous support. I gained strong backend skills in SQL, Java, and Spring Boot through practical learning.",
    image: Asmi,
  },
  {
    name: "Subin Sundar",
    review:
      "I completed my Full Stack Development training at Talent Turbo Training Academy, and it was a great learning experience. The trainers were supportive, and hands-on projects helped me build strong skills.",
    image: Subin,
  },
  {
    name: "Lajona Rajan",
    review:
      "I am grateful to SART Accelerator for guiding me to join the Java Full Stack Developer course. Working on real-time projects boosted my confidence to become a successful developer.",
    image: Lijona,
  },
  {
    name: "Hareeshwar",
    review:
      "I attended Santhosh Sir's placement training session, and it was an excellent learning experience. His clear explanations, practical examples, and personalized feedback helped me improve my communication skills and confidence significantly.",
    image: Haree ,
  },
  {
    name: "Annamalai S",
    review:
      "Mr. Santhosh's simple and effective teaching methodology made learning easy and significantly improved my communication skills. His training and continuous guidance played a key role in helping me secure my placement at HCL Technologies.",
    image: Santho,
  },
  {
    name: "Saran",
    review:
      "The training sessions were highly engaging, interactive, and insightful. The practical knowledge and guidance provided helped us apply key concepts effectively during our interviews.",
    image: Saran,
  },
  {
    name: "Shyam",
    review:
      "The training sessions were highly engaging and insightful, providing practical knowledge that helped us perform confidently during our interviews. The guidance, encouragement, and continuous support significantly improved my communication skills and overall confidence.",
    image: San,
  },
  {
    name: "Dr Chidambara Vadivu V",
    review:
      "Mr. Santosh conducted engaging and insightful sessions that provided practical strategies for stress management, work-life balance, and effective communication. His interactive approach and ability to connect with participants created a positive learning experience and left a lasting impact on our teachers.",
    image: pri,
  },
  {
    name: "Correspondent Gurukulam High School",
    review:
      "Mr. Santosh is an exceptional trainer whose Spoken English sessions greatly enhanced my communication skills. His Stress Buster sessions were equally refreshing and motivating, making learning both effective and enjoyable.",
    image: cros,
  },
];

// Split array into groups of 3
const chunkArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

function Success() {
  const groupedTestimonials = chunkArray(testimonials, 3);

 function NextArrow(props) {
  const { onClick } = props;

  return (
    <button className="custom-next" onClick={onClick}>
      ❯
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;

  return (
    <button className="custom-prev" onClick={onClick}>
      ❮
    </button>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

  return (
    <section className="success-section" id="success">
      <div className="container">
        {/* Heading */}
        <div className="section-header text-center mb-5">
          <h2>
            Students <span>Success Stories</span>
          </h2>
          <p>
            Hear from our learners who transformed their careers with Skill
            Squares.
          </p>
        </div>

        <Slider {...settings}>
          {groupedTestimonials.map((group, slideIndex) => (
            <div key={slideIndex}>
              <div className="row g-4">
                {group.map((item, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="testimonial-card">
                      <div className="testimonial-left">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="testimonial-right">
                        <h4>{item.name}</h4>
                        <p>{item.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <ResourceCenter/>
      <InvestorPartnerPage/> */}
      <TeamSection/>
    </section>
  );
}

export default Success;