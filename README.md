# Aditya Singh — Portfolio (React)

A React + Vite rebuild of the original GitHub Pages portfolio, with Framer Motion
animations, a dark premium theme, scroll-reveal sections, an animated hero background,
a working mini Pomodoro timer inside the FocusApp project card, and a responsive
mobile nav.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy `dist/` to Vercel, Netlify, or GitHub Pages.

## Structure

```
src/
  components/   -> Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer
  data/         -> portfolio.js (all content - edit here to update text/links)
  App.jsx
  index.css     -> theme variables + global styles
```

## Notes

- Contact form opens the user's email client via mailto: (no backend). Wire it to
  a service like Formspree/EmailJS if you want it to send silently.
- Colors, spacing, and radius are theme variables at the top of index.css.
