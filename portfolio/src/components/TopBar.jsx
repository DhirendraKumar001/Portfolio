import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const tabsRef = useRef(null);
  const tabRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[active];
      const container = tabsRef.current;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicator({
        left: elRect.left - containerRect.left + container.scrollLeft,
        width: elRect.width,
        ready: true,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <header className="topbar">
      <button className="topbar__menu" aria-label="Toggle navigation" onClick={onMenuClick}>
        ≡
      </button>

      <div className="topbar__tabs" ref={tabsRef}>
        {TABS.map((t) => (
          <a
            key={t.id}
            ref={(el) => (tabRefs.current[t.id] = el)}
            href={`#${t.id}`}
            className={`topbar__tab ${active === t.id ? "topbar__tab--active" : ""}`}
            onClick={(e) => onNavigate(e, t.id)}
          >
            {t.label}
          </a>
        ))}
        <span
          className="topbar__indicator"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            opacity: indicator.ready ? 1 : 0,
          }}
        />
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
