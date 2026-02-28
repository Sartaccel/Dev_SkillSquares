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
    title: "Experienced Trainers",
    desc: "Learn from industry experts with real-world experience and proven teaching excellence."
  },
  {
    icon: <FaBookOpen />,
    title: "Industry-Oriented Curriculum",
    desc: "Our syllabus is aligned with current market demands and industry standards."
  },
  {
    icon: <FaBriefcase />,
    title: "Placement Assistance",
    desc: "Dedicated placement support with mock interviews and resume building."
  },
  {
    icon: <FaLaptopHouse />,
    title: "Flexible Learning Modes",
    desc: "Choose classroom, online, or hybrid learning modes based on your comfort."
  },
   {
    icon: <FaProjectDiagram />,
    title: "Real-Time Projects",
    desc: "Hands-on live projects to build strong practical knowledge."
  },
  {
  icon: <FaBuilding />,
  title: "Internship Opportunities",
  desc: "Gain real-world exposure through internship programs with partner companies."
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

        {/* Counters */}
        <div className="row mt-5" data-aos="fade-up">
          <Counter end={500} label="Students Trained" />
          <Counter end={10} label="Courses Offered" />
          <Counter end={120} label="Hiring Partners" />
          <Counter end={98} label="Placement Success %" />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;