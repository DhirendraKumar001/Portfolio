import { Github, Linkedin, Code2, Award, Download, ArrowRight, Atom, Server, Coffee } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import "./Hero.css";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  hackerrank: Award,
};

const BADGE_ICONS = {
  React: Atom,
  "Node.js": Server,
  Java: Coffee,
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">
            {profile.greeting} <span className="hero__wave">👋</span>
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role gradient-text">{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__socials">
            {profile.socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="hero__social"
                >
                  {Icon && <Icon size={17} strokeWidth={2} />}
                </a>
              );
            })}
          </div>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">
              Hire Me <ArrowRight size={16} />
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl}>
              Download CV <Download size={16} />
            </a>
          </div>

          <div className="hero__stats">
            {profile.stats.map((s, i) => (
              <div className="hero__stat" key={s.label}>
                {i > 0 && <span className="hero__stat-divider" />}
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__avatar">
            <span className="hero__avatar-initials">{initials(profile.name)}</span>
          </div>
          <span className="hero__status-chip">
            <span className="hero__status-dot" />
            {profile.status}
          </span>
          {profile.badges.map((label, i) => {
            const Icon = BADGE_ICONS[label];
            return (
              <span key={label} className={`hero__float hero__float--${i}`}>
                {Icon && <Icon size={15} strokeWidth={2} />}
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
