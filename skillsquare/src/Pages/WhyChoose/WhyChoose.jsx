import React, { useEffect, useState,useRef } from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaBriefcase,
  FaLaptopHouse,
  FaProjectDiagram,
  FaBuilding 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChoose.css";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Career Guidance",
    desc: "Helping students discover the right career path."
  },
  {
    icon: <FaBookOpen />,
    title: "Employability Assessment",
    desc: "ACT – Aptitude, Communication & Technical Assessment."
  },
  {
    icon: <FaBriefcase />,
    title: "Skill Development",
    desc: "Future-ready technical and professional skills."
  },
  {
    icon: <FaLaptopHouse />,
    title: "Mentorship",
    desc: "Industry mentors guiding career growth."
  },
   {
    icon: <FaProjectDiagram />,
    title: "Placement Services",
    desc: "Connecting talent with opportunities."
  },
  {
  icon: <FaBuilding />,
  title: "Talent Turbo (Coming Soon to India – a first of its kind)",
  desc: "AI-powered job and career ecosystem."
},
 
];

function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
        } else {
          setCount(0); // Reset when leaving view
          hasAnimated.current = false;
        }
      },
      { threshold: 0.6 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounter = () => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);
  };

  return (
    <div className="col-md-3 text-center counter-box" ref={counterRef}>
      <h2 className="fw-bold ">{count}+</h2>
      <p>{label}</p>
    </div>
  );
}
const steps = [
  {
    // step: "Step 1",
    title: "Assess",
    desc: "ACT Assessment",
    position: "top",
  },
  {
    // step: "Step 2",
    title: "Identify",
    desc: "Skill Gap Analysis",
    position: "bottom",
  },
  {
    // step: "Step 3",
    title: "Learn",
    desc: "SkillSquare Programs",
    position: "top",
  },
  {
    // step: "Step 4",
    title: "Mentor",
    desc: "Expert Guidance",
    position: "bottom",
  },
  {
    // step: "Step 5",
    title: "Prepare",
    desc: "Interview Readiness",
    position: "top",
  },
  {
    // step: "Step 6",
    title: "Place",
    desc: "Talent Turbo",
    position: "bottom",
  },
];


function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="why-section" id="whychoose">
      {/* Background Squares */}
     <div className="squares">
  {[...Array(100)].map((_, i) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 20;
    const randomDuration = 15 + Math.random() * 20;

    return (
      <span
        key={i}
        style={{
          left: `${randomX}%`,
          top: `${randomY}%`,
          animationDelay: `-${randomDelay}s`,
          animationDuration: `${randomDuration}s`
        }}
      />
    );
  })}
</div>

      <div className="container position-relative">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">
            Why Choose <span>SkillSquare</span>
          </h2>
          <p className="section-sub">
            Empowering careers through quality training and innovation.
          </p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-card">
                <div className="icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
            <section className="journey-section">
      <div className="journey-header">
        <span>STUDENT SUCCESS ROADMAP</span>
        <h2>The Student Journey</h2>
        <p>
          From assessment to placement, a structured journey that transforms
          students into industry-ready professionals.
        </p>
      </div>

      <div className="journey-wrapper">

        <svg
          className="journey-line"
          viewBox="0 0 1200 350"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="journeyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1b9b8e" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#1b9b8e" />
            </linearGradient>
          </defs>

          <path
            d="
            M100 120
            C180 120, 220 260, 300 260
            S420 120, 500 120
            S620 260, 700 260
            S820 120, 900 120
            S1020 260, 1100 260
          "
          />
        </svg>

        {steps.map((item, index) => (
          <div
            key={index}
            className={`step-card ${item.position}`}
          >
            {/* <div className="dot"></div> */}

            <div className="step-number">
              {item.step}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

        {/* Counters */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <Counter end={500} label="Students Trained" />
          <Counter end={10} label="Courses Offered" />
          <Counter end={120} label="Hiring Partners" />
          <Counter end={98} label="Placement Success %" />
        </div> */}
      </div>
    </section>
  );
}

export default WhyChoose;