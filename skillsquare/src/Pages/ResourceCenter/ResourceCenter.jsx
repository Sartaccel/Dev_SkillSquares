import { useState } from "react";
import {
  MessageCircle,
  FileText,
  Brain,
  Target,
  Users,
  Rocket,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import "./ResourceCenter.css";

const topics = [
  {
    icon: MessageCircle,
    title: "Interview Tips",
    description:
      "Practical scripts and frameworks to walk into any interview ready, not rehearsed.",
    tips: [
      "Research the company's recent projects before you walk in.",
      "Prepare three specific stories using the STAR method.",
      "Ask one thoughtful question about the team's current challenges.",
    ],
  },
  {
    icon: FileText,
    title: "Resume Building",
    description:
      "Turn scattered experience into a resume recruiters actually finish reading.",
    tips: [
      "Lead every bullet with the result, not the task.",
      "Keep it to one page unless you have 10+ years of experience.",
      "Match the top third to keywords from the job description.",
    ],
  },
  {
    icon: Brain,
    title: "AI Careers",
    description:
      "Roles, skills, and roadmaps for breaking into AI without a PhD.",
    tips: [
      "Build one end-to-end project you can explain in detail.",
      "Learn the math behind the models, not just the libraries.",
      "Follow practitioners who share real work, not just hype.",
    ],
  },
  {
    icon: Target,
    title: "Placement Preparation",
    description:
      "Aptitude, group discussions, and HR rounds — broken down stage by stage.",
    tips: [
      "Time yourself on aptitude tests — speed matters as much as accuracy.",
      "Practice group discussions out loud, not just in your head.",
      "Prepare two strong answers for \"tell me about yourself.\"",
    ],
  },
  {
    icon: Users,
    title: "Leadership Skills",
    description:
      "Lead teams, run meetings, and make decisions people actually trust.",
    tips: [
      "End every meeting with a clear owner and a clear deadline.",
      "Give feedback within 48 hours, while it's still relevant.",
      "Ask what's blocking your team before assuming why.",
    ],
  },
  {
    icon: Rocket,
    title: "Future Skills",
    description:
      "The skills the market is starting to pay for, before everyone else learns them.",
    tips: [
      "Spend an hour a week on something outside your job description.",
      "Learn to work alongside AI tools, not just learn about them.",
      "Track which skills repeat across job postings you admire.",
    ],
  },
];

export default function ResourceCenter() {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (title) => {
    setOpenCards((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section className="resource-center">
      <div className="resource-center__glow-top" />
      <div className="resource-center__glow-bottom" />

      <div className="resource-center__container">
        <div className="resource-center__header">
          <span className="resource-center__eyebrow">Resource Center</span>
          <h2 className="resource-center__title">
            Guides That{" "}
            <span className="resource-center__title-highlight">
              Get You Hired
            </span>
          </h2>
          <p className="resource-center__subtitle">
            Everything you need to go from job search to offer letter,
            written by people who've done it.
          </p>
        </div>

        <div className="resource-center__grid">
          {topics.map(({ icon: Icon, title, description, tips }) => {
            const isOpen = !!openCards[title];
            const panelId = `tips-${title.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <div key={title} className="resource-center__card-wrap">
                <div className="resource-center__badge">
                  <Icon
                    className="resource-center__icon"
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="resource-center__card">
                  <h3 className="resource-center__card-title">{title}</h3>
                  <p className="resource-center__card-text">{description}</p>

                  {isOpen && (
                    <ul
                      id={panelId}
                      className="resource-center__tips"
                    >
                      {tips.map((tip) => (
                        <li key={tip} className="resource-center__tip">
                          <CheckCircle2
                            className="resource-center__tip-icon"
                            size={16}
                          />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    type="button"
                    className="resource-center__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleCard(title)}
                  >
                    {isOpen ? "Hide Tips" : "Show Tips"}
                    <ChevronDown
                      className={`resource-center__chevron ${
                        isOpen ? "resource-center__chevron--open" : ""
                      }`}
                      size={16}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}