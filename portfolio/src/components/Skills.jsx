import { skills } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section section--tight skills-section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{skills.eyebrow}</p>
          <h2 className="section-title">{skills.title}</h2>

          <div className="skills-grid">
            {skills.groups.map((group, i) => (
              <div className="skill-card stagger-item" style={{ "--i": i }} key={group.category}>
                <div className="skill-card__dot" />
                <h3 className="skill-card__title">{group.category}</h3>
                <div className="skill-card__tags">
                  {group.items.map((item) => (
                    <span className="skill-card__tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
