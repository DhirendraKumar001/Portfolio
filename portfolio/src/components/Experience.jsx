import { experience } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="module">
      <div className="main-inner">
        <Reveal>
          <p className="module-label">
            <span className="prompt">$</span>
            <span className="cmd">{experience.command}</span>
          </p>

          <div className="log">
            {experience.entries.map((e) => (
              <div className="log-entry" key={e.hash}>
                <div className="log-entry__rail">
                  <span className="log-entry__hash">{e.hash}</span>
                  <span className="log-entry__line" />
                </div>
                <div className="log-entry__body">
                  <div className="log-entry__head">
                    <h3>{e.role}</h3>
                    <span className="log-entry__period">{e.period}</span>
                  </div>
                  <p className="log-entry__org">{e.org}</p>
                  <p className="log-entry__summary">{e.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
