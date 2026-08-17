import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { experience } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Experience.css";

const ICONS = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
};

export default function Experience() {
  return (
    <section id="experience" className="section section--tight experience-section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{experience.eyebrow}</p>
          <h2 className="section-title">{experience.title}</h2>

          <div className="timeline">
            {experience.entries.map((e, i) => {
              const Icon = ICONS[e.type] || Briefcase;
              return (
                <div className="timeline-entry stagger-item" style={{ "--i": i }} key={e.role}>
                  <div className="timeline-entry__rail">
                    <span className="timeline-entry__icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="timeline-entry__line" />
                  </div>
                  <div className="timeline-entry__card">
                    <div className="timeline-entry__head">
                      <h3>{e.role}</h3>
                      <span className="timeline-entry__period">{e.period}</span>
                    </div>
                    <p className="timeline-entry__org">{e.org}</p>
                    <p className="timeline-entry__summary">{e.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
