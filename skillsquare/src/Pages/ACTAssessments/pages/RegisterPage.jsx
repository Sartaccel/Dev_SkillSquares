import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deptsFor, buildQuiz, Session } from "../questions";
import "../Questions.css";
import api from "../../../api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    college: "",
    studies: "",
    department: "",
  });
  const [errors, setErrors] = useState({});

  const depts = form.studies ? deptsFor(form.studies) : [];

  const handleStudiesChange = (e) => {
    setForm((f) => ({ ...f, studies: e.target.value, department: "" }));
    setErrors((err) => ({ ...err, studies: false, department: false }));
  };

  const handleStart = async () => {
    const errs = {};
    if (!form.fullName.trim())    errs.fullName     = true;
    if (!form.email.trim())       errs.email        = true;
    if (!form.mobileNumber.trim()) errs.mobileNumber = true;
    if (!form.college.trim())     errs.college      = true;
    if (!form.studies)            errs.studies      = true;
    if (!form.department)         errs.department   = true;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    try {
      await api.post("/candidates", {
        fullName:     form.fullName,
        email:        form.email,
        mobileNumber: form.mobileNumber,
        college:      form.college,
        studies:      form.studies,
        department:   form.department,
      });

      const techKey = form.studies + "|" + form.department;
      const { quiz, secRanges } = buildQuiz(techKey);
      Session.save("student",   form);
      Session.save("quiz",      quiz);
      Session.save("secRanges", secRanges);
      Session.save("startTime", Date.now());

      navigate("/ACTAssessments/test");
    } catch (error) {
      console.error(error);
      alert("Failed to save candidate details");
    }
  };

  return (
    <div className="act-welcome">
      <div className="act-hero act-wrap">
        <div>
          <span className="act-eyebrow">
            <span className="act-dot" />&nbsp;Employability Assessment
          </span>
          <div className="act-lockup">ACT<span className="now"> now!</span></div>
          <h1>The Aptitude, Communication &amp; Technical assessment.</h1>
          <p className="lead">
            50 questions. 60 minutes. Three sections built to mirror what recruiters
            actually screen for. Sit it once, see exactly where you stand.
          </p>
          <div className="act-triad">
            <span><i className="sq-apt" />Aptitude</span>
            <span><i className="sq-comm" />Communication</span>
            <span><i className="sq-tech" />Technical</span>
          </div>
        </div>

        <div className="act-reg">
          <h2>Register to begin</h2>
          <p className="sub">Your technical section is set by your department / branch.</p>

          <div className={`act-field${errors.fullName ? " err" : ""}`}>
            <label>Full name</label>
            <input
              type="text"
              placeholder="e.g. Priya Ramesh"
              value={form.fullName}
              onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            />
            <div className="hint">Please enter your name.</div>
          </div>

          <div className={`act-field${errors.email ? " err" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="e.g. skillsquare@gmail.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
            <div className="hint">Please enter your email.</div>
          </div>

          <div className={`act-field${errors.mobileNumber ? " err" : ""}`}>
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="e.g. 98765 43210"
              value={form.mobileNumber}
              onChange={(e) => setForm((f) => ({ ...f, mobileNumber: e.target.value }))}
            />
            <div className="hint">Please enter your mobile number.</div>
          </div>

          <div className={`act-field${errors.college ? " err" : ""}`}>
            <label>College</label>
            <input
              type="text"
              placeholder="e.g. Govt. Polytechnic, Nagercoil"
              value={form.college}
              onChange={(e) => setForm((f) => ({ ...f, college: e.target.value }))}
            />
            <div className="hint">Please enter your college.</div>
          </div>

          <div className={`act-field${errors.studies ? " err" : ""}`}>
            <label>Studies</label>
            <select value={form.studies} onChange={handleStudiesChange}>
              <option value="" disabled>Select your level of study</option>
              <option value="Polytechnic">Polytechnic (Diploma)</option>
              <option value="Arts &amp; Science">Arts &amp; Science</option>
              <option value="Engineering">Engineering</option>
            </select>
            <div className="hint">Please select your level of study.</div>
          </div>

          <div className={`act-field${errors.department ? " err" : ""}`}>
            <label>Department / Branch</label>
            <select
              value={form.department}
              disabled={!form.studies}
              onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
            >
              <option value="" disabled>
                {form.studies ? "Select your department" : "Select studies first"}
              </option>
              {depts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <div className="hint">Please select your department.</div>
          </div>

          <button className="act-startbtn" onClick={handleStart}>
            Start the assessment <span className="arr">→</span>
          </button>
        </div>
      </div>

      <div className="act-specs">
        <div className="act-wrap">
          {[
            { color: "#2F5BEA", title: "Section 1 — Aptitude",     q: "20 questions", desc: "Quantitative Aptitude & Logical Reasoning." },
            { color: "#159B5C", title: "Section 2 — Communication", q: "20 questions", desc: "Verbal Ability & English Communication." },
            { color: "#E8821E", title: "Section 3 — Technical",     q: "10 questions", desc: "Branch-specific questions, allotted by your department." },
          ].map((s) => (
            <div className="act-spec" key={s.title}>
              <span className="scol" style={{ background: s.color }} />
              <div>
                <h3>{s.title}</h3>
                <p className="qn">{s.q}</p>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}