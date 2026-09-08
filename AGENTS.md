# Project Guide

## Overview

This project is a single-page cinematic portfolio for virtual assistant Dann Rhey Temorcina. It uses TanStack Start with React 19 and deploys to Netlify. The primary design goal is premium, professional motion without sacrificing accessibility or performance.

## Architecture

- `src/routes/index.tsx` renders the portfolio experience at `/`.
- `src/components/PortfolioExperience.tsx` contains the section composition and interactive behavior: filters, modals, theme switching, scroll progress, cursor response, and contact submission.
- `src/data/portfolioData.js` is the only content and experience configuration source. Do not hardcode portfolio copy in components.
- `src/styles.css` contains the full design system, responsive layouts, reveal states, motion levels, theme variables, and reduced-motion rules.
- `public/contact.html` is the static Netlify Forms registration document used by the client-rendered contact form.
- `public/images/`, `public/videos/`, and `public/files/` contain replaceable portfolio media.

## Content conventions

- Keep all client-editable text, links, images, videos, projects, categories, and settings in `src/data/portfolioData.js`.
- Store public media paths as root-relative URLs or paths relative to `public/`.
- Keep a blank project `video` value to use the image-based presentation fallback.
- Preserve the `sample` flags until placeholder projects or testimonials are replaced with real client work.

## Component conventions

- Prefer small helper components inside `PortfolioExperience.tsx` when behavior is specific to this one-page experience.
- Use semantic HTML, descriptive labels, keyboard-closeable dialogs, and visible focus behavior.
- Animate only `transform`, `opacity`, and filter effects. Avoid layout-triggering animation properties.
- Add new continuous motion only when it remains subtle and is disabled by `prefers-reduced-motion`.
- Keep mobile parallax, hero video, and custom cursor effects disabled.

## Styling conventions

- Use the CSS custom properties defined at the top of `src/styles.css` for color, spacing, and theme changes.
- Maintain the restrained charcoal, ivory, and warm amber palette.
- Keep typography editorial: Playfair Display for expressive headings, Manrope for body copy, and DM Mono for labels.
- Avoid generic neon, excessive rounded cards, bouncing elements, or motion on every component.

## Netlify behavior

- The contact form posts URL-encoded data to `/contact.html` so Netlify's form handler receives SSR/client-rendered submissions.
- When contact fields change, mirror their names in `public/contact.html`.
- Netlify Forms has been enabled for this site using the required activation script.

## Validation

The automated Netlify pipeline installs dependencies and validates the build. Review edited source directly during agent runs; do not run local build, TypeScript, test, or development-server commands unless later project instructions explicitly allow them.

