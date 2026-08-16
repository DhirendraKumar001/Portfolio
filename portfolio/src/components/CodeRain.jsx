import { useEffect, useRef } from "react";

const GLYPHS = "01{}<>/;=+-*&|!?()[]#$%_".split("");

export default function CodeRain({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, columns, drops, fontSize;
    let raf;

    function setup() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      fontSize = 14;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -40);
    }

    setup();

    const colors = ["rgba(232, 163, 61, 0.75)", "rgba(95, 179, 172, 0.65)"];

    function draw() {
      ctx.fillStyle = "rgba(15, 20, 25, 0.14)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = colors[i % 2];
        ctx.fillText(glyph, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.55;
      }
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`code-rain ${className}`} aria-hidden="true" />;
}
