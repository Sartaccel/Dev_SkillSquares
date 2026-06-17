import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Zap,
  Layers,
  GraduationCap,
  Building2,
  Cpu,
  Map,
} from "lucide-react";
import "./InvestorPartnerPage.css";

const differentiators = [
  "Assessment + Training + Placement",
  "Technology-enabled ecosystem",
  "Talent Turbo integration",
  "Outcome-focused approach",
  "Employability intelligence",
  "Scalable college partnership model",
  "Multiple revenue streams",
  "Strong corporate relevance",
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Large Market Opportunity",
    description:
      "India's skilling and placement market is large and still fragmented — no single platform owns assessment, training, and placement together.",
  },
  {
    icon: Zap,
    title: "Talent Turbo Integration",
    description:
      "A built-in engine that matches trained talent to live hiring demand, instead of training first and hoping placement follows.",
  },
  {
    icon: Layers,
    title: "Scalable Model",
    description:
      "Built to expand across colleges and campuses without rebuilding the playbook for every new partnership.",
  },
  {
    icon: GraduationCap,
    title: "College Partnerships",
    description:
      "A repeatable revenue and pipeline model with academic institutions, not a one-off pilot program.",
  },
  {
    icon: Building2,
    title: "Corporate Ecosystem",
    description:
      "Direct lines into hiring teams that need a steady, pre-assessed pipeline of job-ready talent.",
  },
  {
    icon: Cpu,
    title: "Technology Platform",
    description:
      "Assessment, mentoring, and placement data living on one platform, not three disconnected tools.",
  },
  {
    icon: Map,
    title: "Growth Roadmap",
    description:
      "A staged plan from current campuses to multi-state scale, with clear milestones at every step.",
  },
];

export default function InvestorPartnerPage() {
  return (
    <section className="investor-page">
      <div className="investor-page__glow-top" />
      <div className="investor-page__glow-bottom" />

      <div className="investor-page__container">
        {/* Hero */}
        <div className="investor-page__hero">
          
          <h1 className="investor-page__hero-title">Investor &amp; Partner {" "}
            <span className="investor-page__hero-highlight">
               Brief
          </span>
            {/* Most training companies don't have this.
            <br />
            <span className="investor-page__hero-highlight">
              You should.
            </span> */}
          </h1>
          <p className="investor-page__hero-subtitle">
            SkillSquare connects assessment, training, and placement into one
            outcome-focused ecosystem — built to scale across colleges and
            corporates alike.
          </p>
          <a href="#differentiators" className="investor-page__hero-cta">
            See Why SkillSquare Wins
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Why SkillSquare Will Win */}
        <div className="investor-page__section" id="differentiators">
          <div className="investor-page__section-header">
            {/* <span className="investor-page__eyebrow investor-page__eyebrow--alt">
              Why SkillSquare?
            </span> */}
            <h2 className="investor-page__section-title">
              Why SkillSquare Will Win
            </h2>
          </div>

          <div className="investor-page__panel">
            <h3 className="investor-page__panel-title">Our Differentiators</h3>
            <ul className="investor-page__checklist">
              {differentiators.map((item) => (
                <li key={item} className="investor-page__check-item">
                  <CheckCircle2
                    className="investor-page__check-icon"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seven Pillars */}
        <div className="investor-page__section">
          <div className="investor-page__section-header">
            <span className="investor-page__eyebrow investor-page__eyebrow--alt">
              The Foundation
            </span>
            <h2 className="investor-page__section-title">
              Built On Seven Pillars
            </h2>
          </div>

          <div className="investor-page__pillar-grid">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="investor-page__pillar">
                <div className="investor-page__pillar-top">
                  <span className="investor-page__pillar-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="investor-page__pillar-icon-wrap">
                    <Icon
                      className="investor-page__pillar-icon"
                      size={20}
                    />
                  </div>
                </div>
                <h4 className="investor-page__pillar-title">{title}</h4>
                <p className="investor-page__pillar-text">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="investor-page__cta-banner">
          <h3 className="investor-page__cta-title">
            Want the full investor deck?
          </h3>
          <p className="investor-page__cta-text">
            We'll walk you through the model, the numbers, and the roadmap.
          </p>
          <a href="#" className="investor-page__cta-button">
            Request the Deck
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}