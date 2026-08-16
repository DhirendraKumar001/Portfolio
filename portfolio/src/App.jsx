import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import StatusBar from "./components/StatusBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export default function App() {
  const mainRef = useRef(null);
  const [active, setActive] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { root, rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleNavigate(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (mainRef.current && window.innerWidth > 980) {
      const top = el.offsetTop - 24;
      mainRef.current.scrollTo({ top, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setSidebarOpen(false);
  }

  return (
    <div className="app-shell">
      <Sidebar
        active={active}
        onNavigate={handleNavigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <TopBar active={active} onNavigate={handleNavigate} onMenuClick={() => setSidebarOpen((o) => !o)} />

      <main className="app-main" ref={mainRef} id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>

      <StatusBar />
    </div>
  );
}
