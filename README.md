# Sai Chandra's 3D Portfolio

Personal portfolio built with Next.js, React Three Fiber, Tailwind CSS and Framer Motion. It is exported as a static site and hosted on GitHub Pages at [saichandras.github.io](https://saichandras.github.io/).

## Highlights

- 3D hero scene, rotating 3D social icons and an interactive globe (Three.js via React Three Fiber and drei)
- Work experience timeline, tech stack grid, project showcase with video sliders and testimonials
- Contact form (Formik + Yup) that sends email through EmailJS

## Tech stack

Next.js 14 (static export), React 18, Three.js / React Three Fiber / drei, Tailwind CSS, Framer Motion, Swiper, Formik, Yup, EmailJS, React Toastify.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

### Environment variables

The contact form needs EmailJS credentials. Create `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

These values ship in the client bundle by design, so restrict allowed origins in the EmailJS dashboard.

## Project structure

```
src/
  app/            layout, page, global styles
  components/     page sections (Hero, About, Experience, Tech, Works, ...)
    canvas/       3D scenes (Computers, Earth, Stars, SocialIconCanvas)
  constants/      all site content: experience, projects, skills, links
  hoc/            SectionWrapper (scroll-in animation + anchor ids)
  utils/          motion variants, tag colors
public/
  assets/         images, logos and project demo videos
  desktop_pc, planet, linkedin, github, resume   3D models (glTF)
```

To update content (experience, projects, skills, testimonials, contact email), edit `src/constants/index.js`. The overview text lives in `src/components/About.jsx` and the hero tagline in `src/components/Hero.jsx`.

## Deployment

- Pushes to `master` build the site and publish `./out` to the `gh-pages` branch (`.github/workflows/deploy.yml`).
- Pull requests from this repo get a Surge preview at `pr-<number>-saichandras-portfolio.surge.sh`. It is removed when the PR closes.
- Required repository secrets: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_USER_ID`, `SURGE_LOGIN`, `SURGE_TOKEN`.

## Contact

Sai Chandra - saichandrasriram.dev@gmail.com
