import { about } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>

          <div className="about__grid">
            <div className="about__body">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about__highlights">
              {about.highlights.map((h, i) => (
                <div className="about__highlight stagger-item" style={{ "--i": i }} key={h.label}>
                  <span className="about__highlight-label">{h.label}</span>
                  <span className="about__highlight-value">{h.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
