# Dann Rhey Temorcina — Motion Portfolio

A cinematic, responsive virtual assistant portfolio built with React, TanStack Start, Tailwind CSS, and Netlify. The site presents Dann Rhey's services, projects, tools, skills, work samples, process, testimonials, and contact details as one continuous interactive story.

## Key features

- Choreographed full-screen hero with optional background video
- Scroll progress, section reveals, restrained parallax, and responsive motion
- Animated project case-study presentations with optional project videos
- Filterable tools and work-sample galleries
- Full-screen work-sample previews
- Dark and light themes with saved visitor preference
- Netlify Forms contact handling with success and error states
- Reduced-motion, mobile, keyboard, and performance considerations
- Centralized editable content in `src/data/portfolioData.js`

## Editing portfolio content

All personal details and visible portfolio content live in `src/data/portfolioData.js`. Edit that file to update:

- Personal information, profile image, resume, and social links
- Hero text, calls to action, background video, and video fallback
- Services, projects, project videos, and project links
- Tool categories, skill categories, and work samples
- Process steps, reasons to hire, testimonials, and contact copy
- Default theme and motion intensity settings

Media paths point to files inside `public/`. For example, `/videos/project-1.mp4` maps to `public/videos/project-1.mp4`.

## Video management

1. Add an MP4 file to `public/videos/`.
2. Set a project's `video` field in `src/data/portfolioData.js`, such as `video: "/videos/project-1.mp4"`.
3. For the hero, set `settings.enableVideo` and `hero.enableVideo` to `true`, then update `hero.backgroundVideo`.

Projects without a video automatically use their image with motion effects. Hero video is automatically hidden on smaller screens and for visitors who prefer reduced motion.

## Motion controls

Use the `settings` object in `src/data/portfolioData.js`:

```js
settings: {
  defaultTheme: "dark",
  animations: true,
  animationIntensity: "medium", // "low", "medium", or "high"
  enableParallax: true,
  enableVideo: false
}
```

## Local development

Install dependencies and start the Netlify development environment:

```bash
pnpm install
netlify dev --port 8889
```

Open `http://localhost:8889`. Netlify Dev is recommended because it emulates the contact form behavior used in production.

## Main technologies

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Tailwind CSS 4 with a custom cinematic design system
- Lucide icons
- Netlify Forms

