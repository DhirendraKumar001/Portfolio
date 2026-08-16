import { projects } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="module">
      <div className="main-inner">
        <Reveal>
          <p className="module-label">
            <span className="prompt">$</span>
            <span className="cmd">{projects.command}</span>
          </p>

          <div className="project-grid">
            {projects.items.map((p) => (
              <a className="project-card" href={p.href} key={p.name}>
                <div className="project-card__head">
                  <span className="project-card__name">{p.name}/</span>
                  <span className={`badge badge--${p.status}`}>{p.status}</span>
                </div>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-card__foot">
                  <span>★ {p.metric}</span>
                  <span className="project-card__link">view →</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
