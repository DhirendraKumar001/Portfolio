import { profile } from "../data/portfolioData.js";
import "./Sidebar.css";

const TREE = [
  { id: "about", label: "about.md", icon: "◆" },
  { id: "skills", label: "skills.json", icon: "◇" },
  { id: "projects", label: "projects/", icon: "▸", isDir: true },
  { id: "experience", label: "experience.git", icon: "◆" },
  { id: "contact", label: "contact.js", icon: "◆" },
];

export default function Sidebar({ active, onNavigate, open, onClose }) {
  return (
    <>
      {open && <div className="sidebar__scrim" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <div className="sidebar__profile">
          <div className="sidebar__avatar" aria-hidden="true">
            {initials(profile.name)}
          </div>
          <p className="sidebar__name">{profile.name}</p>
          <p className="sidebar__title">{profile.title}</p>
          <p className="sidebar__status">
            <span className="status-dot" />
            {profile.status}
          </p>
        </div>

        <div className="sidebar__section-label">EXPLORER</div>
        <div className="sidebar__folder">
          <span className="sidebar__folder-name">▾ portfolio</span>
          <nav className="sidebar__tree">
            {TREE.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sidebar__item ${active === item.id ? "sidebar__item--active" : ""}`}
                onClick={(e) => {
                  onNavigate(e, item.id);
                }}
              >
                <span className="sidebar__glyph">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar__spacer" />

        <div className="sidebar__section-label">LINKS</div>
        <div className="sidebar__links">
          {profile.socials.map((s) => (
            <a className="sidebar__link" href={s.href} key={s.flag} target="_blank" rel="noreferrer">
              <span className="sidebar__link-key">{s.flag}</span>
              {s.label}
            </a>
          ))}
        </div>

        <a className="sidebar__resume" href={profile.resumeUrl}>
          ⭳ resume.pdf
        </a>
      </aside>
    </>
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
