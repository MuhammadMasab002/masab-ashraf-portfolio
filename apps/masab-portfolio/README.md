# @workspace/masab-portfolio

Production-grade personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## 🚀 Overview

`@workspace/masab-portfolio` is the public-facing frontend application showcasing projects, technical experience, capabilities, and engineering philosophy. It utilizes Next.js Static Site Generation (SSG) for high performance and zero layout shifts.

### Key Highlights
- **Framework:** Next.js 15 (App Router) with React 19.
- **Styling:** Tailwind CSS v4 with custom design tokens and theme variables (`app/globals.css`).
- **Typography:** Managed via `next/font/google` (`Manrope`, `Space Grotesk`, `DM Mono`).
- **Theming:** Smooth Dark / Light mode toggle with persistent local storage.
- **Routing:** File-based routing with dynamic segments (`[slug]`) and `generateStaticParams` for pre-rendering.
- **SEO & Social Sharing:** Native Next.js `Metadata` API configured per route.
- **Client Features:**
  - Viewport scroll reveal animations via `IntersectionObserver`.
  - One-click email copying with visual feedback.
  - Interactive project previews and mobile navigation drawer.

---

## 📁 Directory Structure

```
apps/masab-portfolio/
├── app/                              # Next.js App Router routes & layouts
│   ├── layout.tsx                    # Root layout (fonts, providers, header/footer)
│   ├── globals.css                   # Global styles, variables, theme overrides
│   ├── page.tsx                      # Home page (Hero, Work, Process, Skills, Exp)
│   ├── about/page.tsx                # About page (bio, background, email copy)
│   ├── services/page.tsx             # Services offering breakdown
│   ├── blog/page.tsx                 # Writing & notes placeholder
│   ├── projects/[slug]/page.tsx      # Dynamic project case study routes (SSG)
│   ├── experience/[slug]/page.tsx    # Dynamic career experience routes (SSG)
│   ├── skills/[slug]/page.tsx        # Dynamic capability group routes (SSG)
│   └── not-found.tsx                 # Custom 404 page
├── src/
│   ├── components/                   # Modular UI & layout components
│   │   ├── header.tsx                # Top navigation bar & theme toggle
│   │   ├── footer.tsx                # Footer with social links
│   │   ├── reveal.tsx                # Client scroll-reveal component
│   │   ├── project-card.tsx          # Project showcase card & mockup frame
│   │   ├── process-band.tsx          # Engineering process strip
│   │   ├── detail-layout.tsx         # Shared wrapper for detail subpages
│   │   ├── providers.tsx             # Client QueryClient & Tooltip providers
│   │   ├── error-boundary.tsx        # React error boundary component
│   │   └── ui/                       # Radix UI primitives & utility components
│   ├── data/
│   │   └── portfolio.ts              # Data source for projects, skills, history
│   └── lib/
│       └── utils.ts                  # Utility functions (cn, clsx, twMerge)
├── public/                           # Static assets (favicons, robots.txt)
├── next.config.ts                    # Next.js configuration
├── postcss.config.mjs                # PostCSS config for Tailwind CSS v4
├── tsconfig.json                     # TypeScript config with Next.js plugin
└── package.json
```

---

## 🛠 Available Scripts

Run these commands from the monorepo root or inside this directory:

| Command | Action |
| :--- | :--- |
| `pnpm --filter @workspace/masab-portfolio run dev` | Starts local Next.js dev server on port `5173` |
| `pnpm --filter @workspace/masab-portfolio run build` | Compiles production build and prerenders SSG pages |
| `pnpm --filter @workspace/masab-portfolio run start` | Runs the production build on port `5173` |
| `pnpm --filter @workspace/masab-portfolio run typecheck` | Typechecks with `tsc` without emitting code |

---

## 🌐 Dynamic Routes & Static Site Generation (SSG)

The portfolio uses `generateStaticParams()` to pre-render dynamic paths at build time:

- `/projects/[slug]` (`mymentor`, `mocco-mart`)
- `/experience/[slug]` (`techbon`, `nodesol-corp`, `mind-expanders`)
- `/skills/[slug]` (`frontend`, `backend`, `data`, `product`)

To add a new project or role, update `src/data/portfolio.ts`. Next.js automatically generates the pages and metadata during `pnpm build`.
