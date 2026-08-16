import { skills } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="module">
      <div className="main-inner">
        <Reveal>
          <p className="module-label">
            <span className="prompt">$</span>
            <span className="cmd">{skills.command}</span>
          </p>

          <div className="skills-grid">
            {skills.groups.map((group, i) => (
              <div className="skill-dir" key={group.dir}>
                <p className="skill-dir__name">
                  <span className={`skill-dir__dot skill-dir__dot--${i % 5}`} />
                  {group.dir}
                </p>
                <ul className="skill-dir__list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="tree-glyph">├──</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
