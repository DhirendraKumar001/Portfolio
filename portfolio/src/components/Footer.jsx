import { profile } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  function backToTop(e) {
    e.preventDefault();
    document.querySelector(".app-main")?.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="main-inner footer__inner">
        <span>
          © {year} {profile.name} — built with React + Vite
        </span>
        <a href="#top" onClick={backToTop}>
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
