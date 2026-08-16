import { contact, profile } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="module module--contact">
      <div className="main-inner">
        <Reveal>
          <p className="module-label">
            <span className="prompt">$</span>
            <span className="cmd">{contact.command}</span>
          </p>

          <div className="contact-panel">
            <div>
              <h2 className="eyebrow-title">{contact.heading}</h2>
              <p className="contact-panel__body">{contact.body}</p>
              <div className="contact-panel__actions">
                <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn--ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flags">
              {profile.socials.map((s) => (
                <a className="flag" href={s.href} key={s.flag} target="_blank" rel="noreferrer">
                  <span className="flag__key">{s.flag}</span>
                  <span className="flag__val">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
