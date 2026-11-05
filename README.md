# Priyanka Das Dewan — Portfolio (v3)

Soft, modern card-style portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide React**.
Light mode by default with a dark mode toggle. Violet & pink theme with pastel accents.

## Run it locally

Requires **Node.js 20.9+** (https://nodejs.org).

```bash
npm install        # first time only
npm run dev        # open http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Opening the dev server from another device or a network address (e.g. `http://10.17.20.157:3000`)?
Add that address to `allowedDevOrigins` in `next.config.ts`, then restart `npm run dev`.

## Edit the content

All text lives in **`src/data/cv.ts`**: profile, links, experience, projects, skills, education, certifications.

- Hero photo: `public/hero-portrait.jpg` (replace with a sharp, square-ish portrait, 800px+; keep the name)
- Small avatar: `public/profile.jpg`
- CV download: `public/Priyanka_Das_Dewan_CV.pdf`
- Logo: `public/logo.svg`, favicon `src/app/icon.svg`, React version `src/components/Logo.tsx`

## Theme

Colours are CSS variables at the top of `src/app/globals.css`: `:root` = light, `.dark` = dark.
Change `--accent`, `--accent-2`, `--btn-from`, `--btn-to` to re-colour the whole site, and `--p-violet`, `--p-pink`, `--p-peach`, `--p-mint`, `--p-sky` for the pastel fills.

## Structure

```
src/
  app/
    layout.tsx        fonts, SEO metadata, theme script (no flash)
    page.tsx          section order
    globals.css       theme tokens, soft cards, animations
    icon.svg          favicon
  components/
    Navbar.tsx        floating rounded navbar, active section, scroll progress, mobile menu
    ThemeToggle.tsx   dark / light switch (remembered)
    Hero.tsx          intro, typewriter roles, photo with glow ring + orbiting tech
    Typewriter.tsx
    Stats.tsx         animated count-up highlights
    About.tsx         bento grid: intro, quick info, what I do
    Experience.tsx    filterable role list + detail panel, resource-person sessions
    Projects.tsx      project cards with UI previews
    Skills.tsx        filterable skill grid + "where I've used it" panel
    Playground.tsx    live HTML/CSS mini lesson (LiveLesson.tsx)
    Credentials.tsx   education, filterable certifications, publication, memberships
    Contact.tsx       contact cards, mail form, footer
    SectionHeader.tsx, Logo.tsx, BrandIcons.tsx, Providers.tsx
  data/cv.ts          all content
```

## Deploy

Push to GitHub and import the repo at https://vercel.com (no configuration needed).
