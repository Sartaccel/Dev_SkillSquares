import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SECTIONS, KEYS, fmtTime, Session } from "../questions";
import "../Questions.css";

function BrandMark() {
  return <span className="act-mark"><i/><i/><i/><i/></span>;
}

export default function TestPage() {
  const navigate = useNavigate();

  const quiz      = Session.load("quiz");
  const secRanges = Session.load("secRanges");
  const student   = Session.load("student");

  const [current,  setCurrent]  = useState(0);
  const [answers,  setAnswers]  = useState(() => new Array((quiz || []).length).fill(null));
  const [timeLeft, setTimeLeft] = useState(() => {
    const start = Session.load("startTime");
    if (!start) return 3600;
    const elapsed = Math.floor((Date.now() - start) / 1000);
    return Math.max(0, 3600 - elapsed);
  });
  const timerRef = useRef(null);

  // Redirect to register if no session data
 useEffect(() => {
  if (!quiz || !student) navigate("/ACTAssessments", { replace: true });
}, [quiz, student, navigate]);

const q = quiz?.[current];
const sr = q ? secRanges[q.sectionId] : null;
const activeSec = q?.sectionId;

  // Update CSS accent vars whenever section changes
  useEffect(() => {
    document.documentElement.style.setProperty("--accent",     sr.color);
    document.documentElement.style.setProperty("--accentsoft", sr.soft);
    document.documentElement.style.setProperty("--secaccent",  sr.color);
  }, [activeSec, sr]);

  // Countdown timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          finishTest(answers, 0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const i = +e.key - 1;
        if (i < q.options.length)
          setAnswers((a) => { const n = [...a]; n[current] = n[current] === i ? null : i; return n; });
      } else if (e.key === "ArrowRight") {
        setCurrent((c) => Math.min(c + 1, quiz.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrent((c) => Math.max(c - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, q, quiz.length]);

  const finishTest = useCallback((ans, tLeft) => {
    clearInterval(timerRef.current);
    Session.save("answers",  ans);
    Session.save("timeLeft", tLeft !== undefined ? tLeft : timeLeft);
    navigate("/ACTAssessments/result");
  }, [timeLeft, navigate]);

  const handleSubmit = useCallback(() => {
    const done = answers.filter((a) => a !== null).length;
    const left = quiz.length - done;
    const msg  = left > 0
      ? `You have ${left} unanswered question${left > 1 ? "s" : ""}. Submit anyway?`
      : "Submit your test now?";
    if (window.confirm(msg)) finishTest(answers, timeLeft);
  }, [answers, timeLeft, finishTest, quiz.length]);

  const jumpToFirstUnanswered = (secId) => {
    const r = secRanges[secId];
    for (let i = r.start; i < r.end; i++) {
      if (answers[i] === null) { setCurrent(i); return; }
    }
    setCurrent(r.start);
  };
  if (!quiz || !student || !q || !sr) {
  return null;
}
  const done     = answers.filter((a) => a !== null).length;
  const localNum = current - sr.start + 1;
  const isLast   = current === quiz.length - 1;
  const activeSR = secRanges[activeSec];

  return (
    <div className="toptokker">
      {/* ── Header ── */}
      <div className="act-examhead">
        <div className="act-wrap">
          <div className="act-brandrow">
            <BrandMark />
            <span className="act-brandname" style={{ fontSize: "1rem" }}>ACT</span>
          </div>
          <div className="act-who">
            <b>{student.fullName}</b> · <span>{student.department} · {student.studies}</span>
          </div>
          <div className="act-tabs">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                className={`act-tab${activeSec === sec.id ? " active" : ""}`}
                data-sec={sec.id}
                onClick={() => jumpToFirstUnanswered(sec.id)}
              >
                <i />
                <span className="tlabel">{sec.name}</span>
                <span className="tnum">{secRanges[sec.id].end - secRanges[sec.id].start}</span>
              </button>
            ))}
          </div>
          <div className={`act-timer${timeLeft <= 60 ? " danger" : timeLeft <= 300 ? " warn" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5M9 2h6" />
            </svg>
            <span>{fmtTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="act-exambody">
        <div>
          <div className="act-qcard">
            <div className="act-qmeta">
              <span className="act-qnum">Q{localNum} <span>/ {sr.end - sr.start}</span></span>
              <span className={`act-chip ${sr.chip}`}>{q.category}</span>
            </div>
            <p className="act-qtext">{q.q}</p>
            <div className="act-opts">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`act-opt${answers[current] === i ? " sel" : ""}`}
                  onClick={() =>
                    setAnswers((a) => { const n = [...a]; n[current] = n[current] === i ? null : i; return n; })
                  }
                >
                  <span className="key">{KEYS[i]}</span><span>{opt}</span>
                </button>
              ))}
            </div>
            <div className="act-qnav">
              <button
                className="act-navbtn"
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
              >
                ← Previous
              </button>
              <button
                className="act-clearbtn"
                onClick={() => setAnswers((a) => { const n = [...a]; n[current] = null; return n; })}
              >
                Clear response
              </button>
              <button
                className="act-navbtn primary"
                onClick={() => (isLast ? handleSubmit() : setCurrent((c) => c + 1))}
              >
                {isLast ? "Finish →" : "Next →"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Side panel ── */}
        <aside className="act-panel">
          <h4>{activeSR.name}</h4>
          <p className="psub">Tap any number to jump.</p>
          <div className="act-progresswrap">
            <div className="act-plabel">
              <span>Answered</span><b>{done}/50</b>
            </div>
            <div className="act-pbar">
              <i style={{ width: `${(done / quiz.length) * 100}%` }} />
            </div>
          </div>
          <div className="act-grid">
            {Array.from({ length: activeSR.end - activeSR.start }, (_, k) => {
              const idx = activeSR.start + k;
              return (
                <button
                  key={idx}
                  className={`act-gbox${answers[idx] !== null ? " answered" : ""}${idx === current ? " current" : ""}`}
                  onClick={() => setCurrent(idx)}
                >
                  {k + 1}
                </button>
              );
            })}
          </div>
          <div className="act-legend">
            <div><span className="act-sw ans" /><span>Answered</span></div>
            <div><span className="act-sw cur" /><span>Current</span></div>
            <div><span className="act-sw" /><span>Not answered</span></div>
          </div>
          <button className="act-submitall" onClick={handleSubmit}>Submit test</button>
        </aside>
      </div>
    </div>
  );
}