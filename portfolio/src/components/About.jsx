import { about } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="module">
      <div className="main-inner">
        <Reveal>
          <p className="module-label">
            <span className="prompt">$</span>
            <span className="cmd">{about.command}</span>
          </p>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
