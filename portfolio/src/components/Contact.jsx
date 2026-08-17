import { Mail, Phone, Github, Linkedin, Code2, Award, ArrowRight } from "lucide-react";
import { contact, profile } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  hackerrank: Award,
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-card__glow" aria-hidden="true" />
            <p className="section-eyebrow">{contact.eyebrow}</p>
            <h2 className="contact-card__heading">{contact.heading}</h2>
            <p className="contact-card__body">{contact.body}</p>

            <div className="contact-card__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Mail size={16} /> {profile.email}
              </a>
              <a className="btn btn--ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <div className="contact-card__socials">
              {profile.socials.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" className="contact-card__social">
                    {Icon && <Icon size={17} />}
                    {s.label}
                    <ArrowRight size={13} className="contact-card__social-arrow" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
