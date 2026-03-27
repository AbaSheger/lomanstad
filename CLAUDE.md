# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

No test suite is configured.

## Code Style

Use comments sparingly. Only comment complex code.

## Stack

- **React 19** with JSX (no TypeScript)
- **Vite 8** — configured in `vite.config.js` with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `src/index.css`; uses the Vite plugin, not a `tailwind.config.js` file
- **No router** — single-page, all navigation is smooth-scroll via `element.scrollIntoView()`

## Architecture

The entire application lives in **`src/App.jsx`** — one file containing all components, data, and logic. There are no separate component files or state management libraries.

### Component hierarchy

```
App
├── Navbar          — fixed top bar; scroll-spy highlights active service via scroll listener
├── main
│   ├── Hero        — full-viewport section with hemstadningImg as background
│   ├── Intro       — stats strip + trust point cards
│   ├── Services    — renders ServiceCard for each entry in the `services` array
│   │   └── ServiceCard  — accordion expand/collapse for service details
│   ├── CtaBanner   — mid-page call-to-action strip
│   ├── WhyUs       — 4-point value proposition grid
│   └── Contact     — side-by-side contact info + quote request form
│       └── PrivacyModal — GDPR modal, rendered conditionally
├── Footer
├── FloatingButtons — scroll-to-top (desktop) + floating call button (mobile)
└── CookieBanner    — dismissible bar; accepted state lives in App and is passed down
```

### Key data and state

- **`services` array** (top of file) — single source of truth for all six services (id, title, image, badge, short description, detail sections). Adding a new service here automatically adds it to the nav, service grid, contact form dropdown, and footer links.
- **Cookie state** is lifted to `App` and passed as props to both `CookieBanner` and `FloatingButtons` so the floating button adjusts its bottom offset when the banner is visible.
- **`focusRing` / `focusRingDark`** — two shared Tailwind class strings defined at the module level for consistent focus styles across all interactive elements.

### Assets

All images are in `src/assets/` and imported at the top of `App.jsx`. There is an unused `hero.png` asset in that folder. Service images are `hemstadning.jpeg`, `flyttstadning.jpeg`, `storstadning.jpeg`, `kontorsstadning.jpeg`, `trappstadning.jpeg`, `fonsterputsning.jpeg`. The logo is `logo.jpeg`.

### Styling conventions

- All styling is Tailwind utility classes inline on JSX elements — no CSS modules, no styled-components.
- `App.css` contains legacy Vite template styles that are unused by the actual app.
- Arbitrary Tailwind values use bracket notation: `bg-[#1a7abf]` (primary brand blue), `bg-[#1568a3]` (darker hover state).
- Responsive breakpoints follow Tailwind defaults (`sm:`, `lg:`); the nav switches from hamburger to desktop links at `lg`.
