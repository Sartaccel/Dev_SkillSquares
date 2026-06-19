import { useEffect, useRef } from "react";
import "./TeamSection.css";
import { Eye } from "lucide-react";
import san7 from "../../assets/images/p7.jpeg";
import asir from "../../assets/images/image.png";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67h-3.55V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const team = [
  {
    name: "Asir Justifus",
    designation: "President — Global Strategic Advisory",
    image: asir,
    linkedin: "https://www.linkedin.com/in/justifus/",
    bio: "Justifus is a seasoned global professional with extensive exposure to international business environments, workforce development initiatives, and strategic growth advisory. With deep insights into global talent trends and emerging workforce requirements, he provides strategic direction to SkillSquare's vision of building future-ready professionals and creating impactful industry-academia collaborations.",
  },
  {
    name: "Santhosh Kumar",
    designation: "Chief Learning Architect - Training & Operations",
    image: san7,
    linkedin: "https://www.linkedin.com/in/santhosh-kumar-m-52530a12a",
    bio: "Santhosh Kumar is a Human Resources and Learning & Development professional with extensive experience in talent management, leadership development, employee engagement, performance management, culture transformation, and workforce capability building.",
  },
];

function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}

function AnimatedCard({ member }) {
  const ref = useRef(null);

  useScrollReveal(ref);

  return (
    <div ref={ref} className="team-card">
      <div className="team-image-section">
        <img
          src={member.image}
          alt={member.name}
          className="team-image"
        />
      </div>

      <div className="team-content">
        <div className="team-top">
          <div className="team-heading">
            <div className="team-divider"></div>

            <h3 className="team-name">
              {member.name}
            </h3>
          </div>

          <p className="team-designation">
            {member.designation}
          </p>
        </div>

        <div className="team-actions">
  {/* <a
    href={member.linkedin}
    target="_blank"
    rel="noreferrer"
    className="profile-view-btn"
    title="View Profile"
  >
    
  </a> */}<Eye size={18} className="profile-view-btn"/>

  <a
    href={member.linkedin}
    target="_blank"
    rel="noreferrer"
    className="linkedin-btn"
    title="LinkedIn Profile"
  >
    <LinkedinIcon size={18} />
  </a>
</div>

        <div className="team-bio">
          {member.bio}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const headerRef = useRef(null);

  useScrollReveal(headerRef);

  return (
    <section className="team-section">
      <div className="team-container">
        <div ref={headerRef} className="team-header">
          <span className="team-eyebrow">
            Leadership
          </span>

          <h2 className="team-title">
            The Minds Behind <span>SkillSquare</span>
          </h2>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <AnimatedCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}