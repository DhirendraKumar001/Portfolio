import { useEffect, useState } from "react";
import "./TopBar.css";

const TABS = [
  { id: "about", label: "about.md" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects/" },
  { id: "experience", label: "experience.git" },
  { id: "contact", label: "contact.js" },
];

export default function TopBar({ active, onNavigate, onMenuClick }) {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="topbar">
      <button className="topbar__menu" aria-label="Toggle navigation" onClick={onMenuClick}>
        ≡
      </button>

      <div className="topbar__tabs">
        {TABS.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`topbar__tab ${active === t.id ? "topbar__tab--active" : ""}`}
            onClick={(e) => onNavigate(e, t.id)}
          >
            {t.label}
          </a>
        ))}
      </div>

      <div className="topbar__clock">{time} IST</div>
    </header>
  );
}

function getTime() {
  return new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
}
