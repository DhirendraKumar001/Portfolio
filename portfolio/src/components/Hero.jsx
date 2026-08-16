import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData.js";
import CodeRain from "./CodeRain.jsx";
import "./Hero.css";

const COMMAND = "whoami --verbose";
const TYPE_SPEED = 55;

const promptUser = `${profile.handle}@dev`;

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 250);
      }
    }, TYPE_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <CodeRain className="hero__rain" />
      <div className="main-inner hero__inner">
        <div className="terminal">
          <div className="terminal__glow" aria-hidden="true" />
          <div className="terminal__bar">
            <span className="dot dot--red" />
            <span className="dot dot--amber" />
            <span className="dot dot--green" />
            <span className="terminal__title">{promptUser} — zsh</span>
            <span className="terminal__clock">{time} IST</span>
          </div>

          <div className="terminal__body">
            <p className="line">
              <span className="prompt">{promptUser}</span>
              <span className="path"> ~ </span>
              <span className="dollar">$</span> {typed}
              {!showOutput && <span className="cursor" />}
            </p>

            {showOutput && (
              <div className="output">
                <h1 className="output__name" data-text={profile.name}>
                  {profile.name}
                </h1>
                <p className="output__title">{profile.title}</p>
                <p className="output__tagline">{profile.tagline}</p>

                <div className="output__meta">
                  <span className="meta-item">
                    <span className="meta-key">location</span>
                    <span className="meta-val">{profile.location}</span>
                  </span>
                  <span className="meta-item">
                    <span className="meta-key">status</span>
                    <span className="meta-val meta-val--status">
                      <span className="status-dot" />
                      {profile.status}
                    </span>
                  </span>
                </div>

                <div className="output__cta">
                  <a className="btn btn--primary" href="#projects">
                    view projects
                  </a>
                  <a className="btn btn--ghost" href={profile.resumeUrl}>
                    resume.pdf
                  </a>
                </div>

                <p className="line line--closing">
                  <span className="prompt">{promptUser}</span>
                  <span className="path"> ~ </span>
                  <span className="dollar">$</span> <span className="cursor" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function getTime() {
  return new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
}
