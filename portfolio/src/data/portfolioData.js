// ─────────────────────────────────────────────────────────
// Edit this file to personalize the whole site. Nothing else
// needs to change unless you want to restyle things.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Aditya Sharma",
  handle: "adityasharma",
  title: "Software Engineer (Fresher)",
  tagline:
    "B.Tech CSE grad who likes turning DSA sheets into shipped products. Looking for my first SDE role.",
  location: "Pune, India",
  status: "open to SDE-1 roles",
  email: "aditya.sharma.dev@gmail.com",
  phone: "+91 98765 43210",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/", flag: "--github" },
    { label: "LinkedIn", href: "https://linkedin.com/", flag: "--linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/", flag: "--leetcode" },
    { label: "HackerRank", href: "https://hackerrank.com/", flag: "--hackerrank" },
  ],
};

export const about = {
  command: "cat about.md",
  paragraphs: [
    "I'm a final-year-turned-graduate Computer Science engineer from Pune, India, with a strong grounding in data structures, algorithms, and building full-stack web apps end to end. I've solved 400+ problems across LeetCode and GeeksforGeeks and shipped three production-shaped projects during college.",
    "I spent 3 months as an SDE Intern building internal tools at a Series A startup, where I learned what 'production-ready' actually means: tests, code review, and not touching the database on a Friday. I'm now looking for a full-time SDE-1 role where I can keep learning fast and own real features.",
  ],
};

export const skills = {
  command: "ls skills/ --tree",
  groups: [
    {
      dir: "languages/",
      items: ["Java", "Python", "C++", "JavaScript", "SQL"],
    },
    {
      dir: "web-dev/",
      items: ["React", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    },
    {
      dir: "databases/",
      items: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      dir: "cs-fundamentals/",
      items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      dir: "tools/",
      items: ["Git & GitHub", "Postman", "Docker (basics)", "VS Code", "Linux"],
    },
    {
      dir: "certifications/",
      items: [
        "AWS Cloud Practitioner",
        "Meta Front-End Developer — Coursera",
        "DSA Self Paced — GeeksforGeeks",
      ],
    },
  ],
};

export const projects = {
  command: "ls projects/ --sort=recent",
  items: [
    {
      name: "campus-connect",
      description:
        "A MERN-stack platform for college clubs to post events and manage RSVPs. Used by 500+ students across 2 fests during college.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      metric: "500+ users",
      href: "#",
      status: "active",
    },
    {
      name: "dsa-visualizer",
      description:
        "An interactive web app that animates sorting algorithms and graph traversals step by step, built to help juniors prep for placements.",
      tech: ["JavaScript", "HTML/CSS"],
      metric: "120 stars",
      href: "#",
      status: "active",
    },
    {
      name: "expense-tracker-api",
      description:
        "A REST API for a personal finance tracker with JWT auth, budgeting rules, and CSV export — built to practice clean backend architecture.",
      tech: ["Java", "Spring Boot", "MySQL"],
      metric: "college project",
      href: "#",
      status: "archived",
    },
    {
      name: "smart-attendance",
      description:
        "Face-recognition based attendance system built at a 24-hour hackathon. Placed in the top 5 out of 60 teams.",
      tech: ["Python", "OpenCV", "Flask"],
      metric: "Top 5 / 60 teams",
      href: "#",
      status: "active",
    },
  ],
};

export const experience = {
  command: "git log --author=adityasharma --oneline",
  entries: [
    {
      hash: "f4a2c81",
      role: "SDE Intern",
      org: "Nimbus Labs, Pune",
      period: "Jan 2026 — Mar 2026",
      summary:
        "Built and shipped an internal admin dashboard used by 3 teams, cutting manual report generation time from 2 hours to 5 minutes.",
    },
    {
      hash: "9d17e0b",
      role: "B.Tech, Computer Science & Engineering",
      org: "Savitribai Phule Pune University",
      period: "2022 — 2026",
      summary: "CGPA: 8.6/10. Core coursework in DSA, DBMS, OS, and Computer Networks.",
    },
    {
      hash: "2c88f3a",
      role: "Open Source Contributor",
      org: "GirlScript Summer of Code",
      period: "Jun 2025 — Aug 2025",
      summary:
        "Merged 6 PRs fixing bugs and adding features to a community learning platform used by 10k+ students.",
    },
    {
      hash: "5e0a19d",
      role: "Winner, Smart India Hackathon (College Round)",
      org: "SPPU Regional Chapter",
      period: "Sep 2025",
      summary:
        "Led a 4-member team to build a civic-issue reporting app, selected to represent the college at the state round.",
    },
  ],
};

export const contact = {
  command: "contact --send",
  heading: "Let's build something",
  body: "Actively interviewing for SDE-1 / graduate engineer roles across India — open to relocating for the right team. Email is the fastest way to reach me.",
};
