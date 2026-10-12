import React, { useEffect, useRef } from "react";
import "./ACTAssessment.css";
import { MdOutlineBarChart, MdOutlineSearch, MdOutlineTipsAndUpdates, MdOutlineSchool, MdOutlineAssessment } from "react-icons/md";

const ACTAssessment = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const bubbles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * canvas.height,
      r: Math.random() * 40 + 15,
      speed: Math.random() * 0.4 + 0.2,
      opacity: Math.random() * 0.12 + 0.04,
      drift: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(27, 155, 142, ${b.opacity + 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = `rgba(27, 155, 142, ${b.opacity})`;
        ctx.fill();
        b.y -= b.speed;
        b.x += b.drift;
        if (b.y + b.r < 0) {
          b.y = canvas.height + b.r;
          b.x = Math.random() * canvas.width;
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="act-root">

      {/* HERO */}
      <section className="act-hero">
        <canvas ref={canvasRef} className="act-bubble-canvas" />

        <div className="act-hero-left">
          <div className="act-badge">Employability Assessment</div>
          <h1 className="act-headline">
            <span className="dark">ACT </span>
            <span className="teal">now!</span>
          </h1>
          <h2 className="act-tagline">
            The Aptitude,<br />
            Communication &<br />
            Technical Assessment.
          </h2>
          <p className="act-desc">
            ACT evaluates Aptitude, Communication, and Technical skills —
            helping students understand their employability readiness before
            facing any recruiter. 50 questions. 60 minutes. One clear score.
          </p>
          <div className="act-tags">
            <span className="act-tag"><span className="dot dot-blue"></span> Aptitude</span>
            <span className="act-tag"><span className="dot dot-teal"></span> Communication</span>
            <span className="act-tag"><span className="dot dot-amber"></span> Technical</span>
          </div>
        </div>

        {/* REGISTER FORM CARD */}
        <div className="act-form-card">
          <h3>Register to begin</h3>
          <p className="form-sub">Your technical section is set by your department / branch.</p>

          <div className="form-group">
            <label>Full name</label>
            <input type="text" placeholder="e.g. Priya Ramesh" />
          </div>
          <div className="form-group">
            <label>College</label>
            <input type="text" placeholder="e.g. Arunachala College of Engg." />
          </div>
          <div className="form-group">
            <label>Studies</label>
            <select defaultValue="">
              <option value="" disabled>Select your level of study</option>
              <option value="be">B.E / B.Tech</option>
              <option value="diploma">Diploma</option>
              <option value="me">M.E / M.Tech</option>
            </select>
          </div>
          <div className="form-group">
            <label>Department / Branch</label>
            <select defaultValue="">
              <option value="" disabled>Select studies first</option>
              <option value="cse">CSE</option>
              <option value="ece">ECE</option>
              <option value="mech">Mechanical</option>
            </select>
          </div>

          <button className="act-start-btn">Start the assessment →</button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="act-benefits">
        <p className="section-label">
          <span className="label-half label-dark">What you'll </span>
          <span className="label-half label-green">get</span>
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><MdOutlineBarChart /></div>
            <h4>Employability Score</h4>
            <p>Know exactly where you stand with a clear, numeric employability score.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><MdOutlineSearch /></div>
            <h4>Skill Gap Analysis</h4>
            <p>Identify which skills are holding you back from landing your dream role.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><MdOutlineTipsAndUpdates /></div>
            <h4>Career Recommendations</h4>
            <p>Get a personalised career path based on your strengths and gaps.</p>
          </div>
        </div>
      </section>

      {/* WHY ACT MATTERS */}
      <section className="act-why">
        <div className="why-header">
          <p className="section-label-light">Why ACT Matters</p>
          <h2 className="why-title">Know where you stand.<br />Before anyone else does.</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon"><MdOutlineSchool /></div>
            <div className="why-tag">For Students</div>
            <p>Understand your skill level and employability readiness before you face your first recruiter. See exactly where you stand.</p>
          </div>
          <div className="why-card why-card-accent">
            <div className="why-icon"><MdOutlineAssessment /></div>
            <div className="why-tag">Sample Report Preview</div>
            <p>Your report shows your employability score, a full skill gap breakdown, and personalised career suggestions — instantly.</p>
          </div>
        </div>
      </section>

      {/* SECTIONS STRIP */}
      <section className="act-strip">
        <div className="strip-item strip-blue">
          <h4>Section 1 — Aptitude</h4>
          <div className="q-count">20 questions</div>
          <p>Quantitative Aptitude &amp; Logical Reasoning.</p>
        </div>
        <div className="strip-item strip-teal">
          <h4>Section 2 — Communication</h4>
          <div className="q-count">20 questions</div>
          <p>Verbal Ability &amp; English Communication.</p>
        </div>
        <div className="strip-item strip-amber">
          <h4>Section 3 — Technical</h4>
          <div className="q-count">10 questions</div>
          <p>Branch-specific questions allotted by your department.</p>
        </div>
      </section>

    </div>
  );
};

export default ACTAssessment;
