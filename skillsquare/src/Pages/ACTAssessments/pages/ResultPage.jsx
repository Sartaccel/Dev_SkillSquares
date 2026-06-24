import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SECTIONS, KEYS, Session } from "../questions";
import "../Questions.css";

export default function ResultPage() {
  const navigate = useNavigate();

  const quiz     = Session.load("quiz");
  const answers  = Session.load("answers");
  const student  = Session.load("student");
  const timeLeft = Session.load("timeLeft") ?? 0;

  const [reviewOpen, setReviewOpen] = useState(false);
  const [filter,     setFilter]     = useState("all");
  const ringRef = useRef(null);
  const barsRef = useRef([]);

  // Redirect if no result data
  useEffect(() => {
  if (!quiz || !answers || !student) {
    navigate("/ACTAssessments", { replace: true });
  }
}, [quiz, answers, student, navigate]); // eslint-disable-line react-hooks/exhaustive-deps

  

  // ── Score calculation ──────────────────────────────────────────────────────
  const elapsed = 3600 - timeLeft;
  let total = 0;
  const secStats = {};
  SECTIONS.forEach((s) => {
    secStats[s.id] = { correct: 0, total: 0, name: s.name, color: s.color, cats: {} };
  });

  quiz.forEach((q, i) => {
    const ss = secStats[q.sectionId];
    ss.total++;
    if (!ss.cats[q.category]) ss.cats[q.category] = { c: 0, t: 0 };
    ss.cats[q.category].t++;
    if (answers[i] === q.answer) {
      total++;
      ss.correct++;
      ss.cats[q.category].c++;
    }
  });

  const pct       = Math.round((total / quiz.length) * 100);
  const ringColor = pct >= 75 ? "#159B5C" : pct >= 50 ? "#E8821E" : pct >= 35 ? "#2F5BEA" : "#D8462F";
  const circ      = 2 * Math.PI * 82;

  let head, verdict;
  if      (pct >= 75) { head = "Excellent work!"; verdict = "You're in strong shape for placements. Keep this momentum up across all three sections."; }
  else if (pct >= 50) { head = "Solid effort.";   verdict = "A good foundation. Focus your prep on the weaker section below to push into the top band."; }
  else if (pct >= 35) { head = "Good start.";     verdict = "You've got the basics. Targeted practice on your lowest section will move the needle fast."; }
  else                { head = "Room to grow.";   verdict = "Every expert started here. Use the breakdown below to build a focused study plan, one section at a time."; }

  // Animate ring and bars after render
  useEffect(() => {
    const t = setTimeout(() => {
      if (ringRef.current)
        ringRef.current.style.strokeDashoffset = String(circ * (1 - pct / 100));
      barsRef.current.forEach((el) => { if (el) el.style.width = el.dataset.w + "%"; });
    }, 150);
    return () => clearTimeout(t);
  }, [reviewOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDownload = () => {
    const lines = [
      "ACT ASSESSMENT — SKILL SQUARE", "Learn. Grow. Get Hired.", "=".repeat(42),
      "Candidate : " + student.fullName,
      "College   : " + student.college,
      "Studies   : " + student.studies,
      "Department: " + student.department,
      "Date      : " + new Date().toLocaleString(),
      "Time taken: " + Math.floor(elapsed / 60) + "m " + String(elapsed % 60).padStart(2, "0") + "s",
      "-".repeat(42),
      "TOTAL SCORE: " + total + " / 50  (" + pct + "%)",
      "-".repeat(42),
    ];
    SECTIONS.forEach((s) => {
      const st = secStats[s.id];
      lines.push(st.name + " : " + st.correct + "/" + st.total);
      Object.entries(st.cats).forEach(([n, v]) => lines.push("   - " + n + ": " + v.c + "/" + v.t));
    });
    lines.push("=".repeat(42));
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const a    = document.createElement("a");
    a.href     = URL.createObjectURL(blob);
    a.download = "ACT_Result_" + student.fullName.replace(/\s+/g, "_") + ".txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleRetake = () => {
    Session.clear();
    document.documentElement.style.setProperty("--accent",     "#2F5BEA");
    document.documentElement.style.setProperty("--accentsoft", "#ECF0FE");
    document.documentElement.style.setProperty("--secaccent",  "#2F5BEA");
    navigate("/ACTAssessments");
  };

  const filteredIdxs = quiz.map((_, i) => i).filter((i) => {
    if (filter === "wrong")   return answers[i] !== quiz[i].answer;
    if (filter === "skipped") return answers[i] === null;
    return true;
  });
if (!quiz || !answers || !student) {
  return null;
}
  barsRef.current = [];

  return (
    <div>
      {/* ── Score hero ── */}
      <div className="act-reshero">
        <div className="act-wrap">
          <div className="act-scorering">
            <svg width="188" height="188" viewBox="0 0 188 188">
              <circle cx="94" cy="94" r="82" fill="none" stroke="#EFEBE3" strokeWidth="14" />
              <circle
                ref={ringRef}
                cx="94" cy="94" r="82"
                fill="none"
                stroke={ringColor}
                strokeWidth="14"
                strokeLinecap="round"
                style={{ strokeDasharray: circ, strokeDashoffset: circ, transition: "stroke-dashoffset .8s ease" }}
              />
            </svg>
            <div className="act-scorectr">
              <div className="big">{total}<span>/50</span></div>
              <div className="pct">{pct}%</div>
            </div>
          </div>

          <div className="act-resinfo">
            <div className="reyebrow">ACT Assessment · Skill Square</div>
            <h1>{head}</h1>
            <p className="verdict">{verdict}</p>
            <div className="act-resmeta">
              {[
                ["Candidate",  student.fullName],
                ["College",    student.college],
                ["Studies",    student.studies],
                ["Department", student.department],
                ["Time taken", Math.floor(elapsed / 60) + "m " + String(elapsed % 60).padStart(2, "0") + "s"],
              ].map(([k, v]) => (
                <div key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section breakdown ── */}
      <div className="act-breakdown act-wrap">
        <h2>Section breakdown</h2>
        <div className="act-secbars">
          {SECTIONS.map((s) => {
            const st = secStats[s.id];
            const p  = Math.round((st.correct / st.total) * 100);
            return (
              <div className="act-secbar" key={s.id}>
                <div className="sbtop">
                  <span className="sbsq"    style={{ background: s.color }} />
                  <span className="sbname">{st.name}</span>
                  <span className="sbcats">{p}% correct</span>
                  <span className="sbscore">{st.correct}/{st.total}</span>
                </div>
                <div className="act-bar">
                  <i
                    ref={(el) => { if (el) barsRef.current.push(el); }}
                    style={{ width: "0%", background: s.color }}
                    data-w={p}
                  />
                </div>
                <div className="act-catrow">
                  {Object.entries(st.cats).map(([name, v]) => (
                    <span className="act-catpill" key={name}>{name} <b>{v.c}/{v.t}</b></span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Action buttons ── */}
        <div className="act-resactions">
          <button className="act-ra dark" onClick={() => setReviewOpen((o) => !o)}>
            {reviewOpen ? "Hide review" : "Review answers"}
          </button>
          <button className="act-ra" onClick={handleDownload}>Download result</button>
          <button className="act-ra" onClick={() => window.print()}>Print</button>
          <button className="act-ra" onClick={handleRetake}>Take another test</button>
        </div>

        {/* ── Answer review ── */}
        {reviewOpen && (
          <div className="act-review">
            <h2>Answer review</h2>
            <div className="act-rfilter">
              {[["all","All"], ["wrong","Incorrect only"], ["skipped","Skipped only"]].map(([f, label]) => (
                <button key={f} data-f={f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}>
                  {label}
                </button>
              ))}
            </div>

            {filteredIdxs.length === 0 ? (
              <div className="act-ritem" style={{ textAlign: "center", color: "var(--muted)" }}>
                Nothing to show here — nice!
              </div>
            ) : (
              filteredIdxs.map((idx) => {
                const q       = quiz[idx];
                const correct = answers[idx] === q.answer;
                const skipped = answers[idx] === null;
                const tag     = skipped ? " · skipped" : correct ? "" : " · incorrect";
                return (
                  <div className="act-ritem" key={idx}>
                    <p className="rq">
                      <span style={{ fontFamily: "var(--mono)", color: "var(--muted)", fontWeight: 600, marginRight: 8 }}>
                        {idx + 1}.
                      </span>
                      {q.q}
                      <span style={{ fontSize: ".8rem", fontWeight: 500, color: skipped ? "var(--muted)" : correct ? "" : "var(--bad)" }}>
                        {tag}
                      </span>
                    </p>
                    <div className="act-roptions">
                      {q.options.map((o, i) => {
                        let cls = "act-ro", ic = "";
                        if (i === q.answer)        { cls += " correct"; ic = "✓"; }
                        else if (i === answers[idx]) { cls += " wrong";   ic = "✗"; }
                        return (
                          <div className={cls} key={i}>
                            <span className="ic">{ic || KEYS[i]}</span><span>{o}</span>
                          </div>
                        );
                      })}
                    </div>
                    {q.expl && <div className="act-rexpl"><b>Why:</b> {q.expl}</div>}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      <div className="act-footer"><b>Skill Square</b> — Learn. Grow. Get Hired.</div>
    </div>
  );
}