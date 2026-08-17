import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{projects.eyebrow}</p>
          <h2 className="section-title">{projects.title}</h2>

          <div className="project-grid">
            {projects.items.map((p, i) => (
              <a className="project-card stagger-item" style={{ "--i": i }} href={p.href} key={p.name}>
                <div className="project-card__head">
                  <h3 className="project-card__name">{p.name}</h3>
                  <span className="project-card__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <span className={`project-card__status project-card__status--${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-card__foot">{p.metric}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
