# dev-portfolio

A static, single-page developer portfolio built with React + Vite. Styled like a terminal/dashboard — a typed `whoami` hero, a skills "directory tree," projects as repo cards, and experience as a `git log`.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Customize

Everything you need to personalize lives in one file:

```
src/data/portfolioData.js
```

Edit your name, title, bio, skills, projects, work history, and contact links there — no need to touch the components. Colors and type live in `src/index.css` under `:root` if you want to restyle.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Structure

```
src/
  data/portfolioData.js   ← edit your content here
  components/              ← Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
  index.css                 ← design tokens (colors, fonts, spacing)
```
