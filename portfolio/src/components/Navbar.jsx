import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData.js";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleClick(e, href) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleClick(e, "#home")}>
          <span className="gradient-text">{initials(profile.name)}</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "navbar__link--active" : ""}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary navbar__cta" href="#contact" onClick={(e) => handleClick(e, "#contact")}>
          Hire Me
        </a>

        <button className="navbar__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary" href="#contact" onClick={(e) => handleClick(e, "#contact")}>
            Hire Me
          </a>
        </nav>
      )}
    </header>
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
