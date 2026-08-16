import { profile } from "../data/portfolioData.js";
import "./StatusBar.css";

export default function StatusBar() {
  return (
    <footer className="statusbar">
      <div className="statusbar__group">
        <span className="statusbar__item statusbar__item--branch">⎇ main</span>
        <span className="statusbar__item">✓ 0 problems</span>
      </div>
      <div className="statusbar__group statusbar__group--right">
        <span className="statusbar__item">{profile.location}</span>
        <span className="statusbar__item">UTF-8</span>
        <span className="statusbar__item">React + Vite</span>
        <span className="statusbar__item statusbar__item--live">● live</span>
      </div>
    </footer>
  );
}
