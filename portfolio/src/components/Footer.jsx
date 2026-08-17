import { profile } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  function backToTop(e) {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {profile.name} — built with React + Vite
        </span>
        <a href="#home" onClick={backToTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
