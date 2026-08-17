// ─────────────────────────────────────────────────────────
// Edit this file to personalize the whole site. Nothing else
// needs to change unless you want to restyle things.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Dhirendra Kumar",
  role: "Java Full Stack Developer | Software Engineer",
  greeting: "Hi, I am",
  tagline:
    "A B.Tech CSE grad who likes turning DSA sheets into shipped products. Looking for my first full-time SDE role.",
  location: "Haryana, India",
  status: "Open to work",
  email: "dhiraendra542005@gmail.com",
  phone: "+91 6200061173",
  resumeUrl: "https://drive.google.com/file/d/1jL3Aj23eXEtgymmG19PPhOQ2abfMQyM9/view?usp=drive_link",
  stats: [
    { value: "4+", label: "Projects built" },
    { value: "100+", label: "Problems solved" },
    { value: "1mo", label: "Internship" },
  ],
  badges: ["React", "Spring Boot", "Java"],
  socials: [
    { label: "GitHub", href: "https://github.com/DhirendraKumar001", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhirendra-kumar-832880288", icon: "linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/u/PC152dunA6/", icon: "leetcode" },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/dhiraendra542005", icon: "hackerrank" },
  ],
};

export const about = {
  eyebrow: "About Me",
  title: "A little about my journey",
  paragraphs: [
  "I’m Dhirendra Kumar, from East Champaran, Bihar. I recently completed my Bachelor of Technology in Computer Science and Engineering from Maharishi Markandeshwar University, Mullana, Ambala, Haryana, with an overall CGPA of 6.8.",
  "During my academic journey, I developed a solid foundation in programming, problem-solving, software development, and core computer science concepts. Studying away from my hometown also helped me become more adaptable, independent, and confident while connecting with people from diverse backgrounds.",
  "I am now eager to begin my professional journey in the technology field, where I can apply my technical knowledge, enhance my practical skills, contribute to meaningful projects, and continue growing as a software professional."
  ],
  highlights: [
    { label: "Education", value: "B.Tech, Computer Science — MMU, 2026" },
    { label: "CGPA", value: "6.8 / 10" },
    { label: "Based in", value: "Haryana, India" },
    { label: "Looking for", value: "SDE-1 / Graduate Engineer roles | Java Full Stack roles" },
  ],
};

export const skills = {
  eyebrow: "What I Know",
  title: "Skills & tools",
  groups: [
    {
      category: "Languages",
      items: ["Java", "Python Basics", "JavaScript", "SQL"],
    },
    {
      category: "Web Development",
      items: ["React", "SpringMVC", "SpringDataJPA", "SpringSecurity", "SpringBoot", "REST APIs", "Tailwind CSS"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "CS Fundamentals",
      items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "Postman", "Docker (basics)", "VS Code", "Linux"],
    },
    {
      category: "Certifications",
      items: [
        "ClaudeCode 101, Claude Cowork - Antrophic",
        "Java Full Stack Developer — Xplore Academy",
        "SpringBoot - Scaler Topics",
      ],
    },
  ],
};

export const projects = {
  eyebrow: "My Work",
  title: "Featured projects",
  items: [
    {
      name: "The Indian Tradition - Ecommerce Website",
      description:
      "he Indian Tradition is an authentic e-commerce destination bringing India’s rich cultural heritage, timeless craftsmanship, and regional artistry straight to your doorstep. We bridge the gap between skilled traditional artisans and conscious shoppers worldwide who appreciate quality, heritage, and sustainable craftsmanship.",
      tech: ["React", "SpringBoot", "MySql",],
      href: "https://github.com/DhirendraKumar001/The_Indian_Tradition-.git",
      status: "Live",
    },
    {
      name: "Vakeel - Legal Case Management System ",
      description:
      "Vakeel is a comprehensive, cloud-based Legal Case Management System designed specifically for advocacy practices, law firms, independent attorneys, and corporate legal departments. Built to streamline complex legal workflows, Vakeel automates case tracking, client management, cause list updates, and legal documentation into one intuitive platform.",
      tech: ["React", "SpringBoot", "MySql"],
      href: "https://github.com/DhirendraKumar001/Vakeel.git",
      status: "Live",
    },
    {
      name: "CyberBank - Online Banking System",
      description:
      "CyberBank is a modern, enterprise-grade Online Banking System engineered to deliver secure, seamless, and omnichannel financial services for retail and corporate banking clients. Built on a modular, microservices-driven architecture, CyberBank empowers financial institutions to offer real-time account management, fast payment processing, and tailored digital banking experiences.",
      tech: ["Java", "Spring Boot", "MySQL"],
      href: "https://github.com/DhirendraKumar001/CyberBank.git",
      status: "Live",
    },
  ],
};

export const experience = {
  eyebrow: "Journey",
  title: "Experience & education",
  entries: [
    {
      role: "Java Developer Intern",
      org: "TechnoHacks Edutech",
      period: "June 2024 — July 2024",
      summary:"Worked on a Java  project for a ATM UI interface, implementing features like transection processing, and user authentication.",
      type: "work",
    },
    {
      role: "B.Tech, Computer Science & Engineering",
      org: "Maharishi Markandeshwar University, Ambala, Haryana, India",
      period: "2022 — 2026",
      summary: "CGPA: 6.8/10. Core coursework in DSA, DBMS, OS, and Computer Networks.",
      type: "education",
    },
    {
      role: "Participant of MMU Hackathon (College Round)",
      org: "Maharishi Markandeshwar University, Ambala, Haryana, India",
      period: "Sep 2025",
      summary:
        "Led a 4-member team to build a Tourism app(Tourist can share their cab rides, hotel rooms if they want. )", 
      type: "achievement",
    },
  ],
};

export const contact = {
  eyebrow: "Get In Touch",
  heading: "Let's build something together",
  body: "Actively interviewing for SDE-1 / graduate engineer roles across India — open to relocating for the right team. Email is the fastest way to reach me.",
};
