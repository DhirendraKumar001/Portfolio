# dev-portfolio

A static, single-page developer portfolio built with React + Vite. A warm dark charcoal theme with an orange/red gradient accent, top navigation, a bold hero with an avatar and floating skill badges, and clean card-based sections for skills, projects, and experience.

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
