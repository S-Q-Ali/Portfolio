# Implementation Plan: Portfolio Website

## Overview
Build a Next.js 15 + Tailwind CSS 4 portfolio website for Syed Qasim Ali with build-time GitHub data fetching, modern dark theme, and production-quality UI.

## Architecture Decisions

### 1. Data Fetching Strategy
- **Build-time static generation** using `generateStaticParams` + `fetch` in Server Components
- GitHub API: `https://api.github.com/users/s-q-ali/repos?per_page=100&sort=updated`
- Rate limit: 60 requests/hour (unauthenticated) — build-time fetch avoids runtime limits
- Data validated at boundary using zod-like type guards

### 2. Component Architecture
- Server Components by default (data fetching)
- Client Components only for interactivity (filters, mobile menu)
- Separation: Container (data) vs Presentation (UI)
- Colocated component folders

### 3. Design System
- Dark theme matching GitHub profile aesthetic (`#0a0a0a` base)
- Green accent (`#22c55e`) — terminal/hacker vibe, avoids AI-purple cliché
- Inter font for body, JetBrains Mono for code/numbers
- No gradients, no glassmorphism, no rounded-2xl everywhere
- Subtle borders (`#262626`), minimal shadows

### 4. File Structure (Next.js App Router)
```
app/
  layout.tsx          — Root layout with Navbar + Footer
  page.tsx            — Home (hero, stats, projects, skills)
  globals.css         — Tailwind + custom properties
  projects/page.tsx   — Project grid with filters
  resume/page.tsx     — Digital resume + download
  system-design/      — System design showcase
components/           — Colocated UI components
lib/github/           — GitHub API types + fetch + filter
lib/constants.ts      — Social links, personal info
```

### 5. GitHub API Integration
- Contract-first: Define TypeScript types matching GitHub API response
- Validate at boundary: Type guard functions for runtime safety
- Filter: Exclude forks, sort by stars + forks + recency
- Cache: Build-time fetch with `next: { revalidate: 3600 }`

### 6. Accessibility
- Semantic HTML (nav, main, section, article)
- Keyboard navigation support
- ARIA labels for interactive elements
- Loading states (skeletons), empty states, error states
- Contrast ratio ≥ 4.5:1 for text

## Dependency Graph
```
lib/constants.ts (no deps)
    ↓
lib/github/types.ts (no deps)
    ↓
lib/github/fetch.ts → lib/github/filter.ts
    ↓
app/layout.tsx → components/Navbar, components/Footer
    ↓
app/page.tsx → components/Hero, components/Projects, components/Skills, components/Strengths
    ↓
app/projects/page.tsx → components/Projects (full grid)
app/resume/page.tsx → components/Resume
app/system-design/page.tsx → components/SystemDesign
```

## Task List

### Phase 1: Foundation
- [ ] Task 1: Next.js project setup + Tailwind 4 config + design tokens
- [ ] Task 2: GitHub API types + fetch + validation
- [ ] Task 3: Navbar + Footer components

### Checkpoint: Foundation
- [ ] Dev server runs without errors
- [ ] Tailwind classes apply correctly
- [ ] Navbar/Footer render on all pages

### Phase 2: Core UI
- [ ] Task 4: Hero section with GitHub stats
- [ ] Task 5: Project grid + card + filters
- [ ] Task 6: Skills section
- [ ] Task 7: Strengths & growth areas section

### Checkpoint: Core UI
- [ ] Home page renders all sections
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Loading states work

### Phase 3: Pages
- [ ] Task 8: Projects page (full grid + language filter)
- [ ] Task 9: Resume page + PDF download
- [ ] Task 10: System design page

### Checkpoint: Pages
- [ ] All pages render without errors
- [ ] Navigation works between pages
- [ ] PDF download works

### Phase 4: Polish
- [ ] Task 11: Accessibility audit (keyboard nav, ARIA, contrast)
- [ ] Task 12: Build verification + responsive testing

### Checkpoint: Complete
- [ ] `npm run build` passes
- [ ] All acceptance criteria met
- [ ] Ready for review

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| GitHub API rate limit | Build fails | Use build-time fetch, cache response |
| Resume PDF missing | Download broken | Use placeholder, clear TODO |
| Tailwind 4 config differences | Styling broken | Use official Next.js + Tailwind template |
| Font loading performance | Slow FCP | Use next/font for automatic optimization |

## Open Questions
- User needs to provide resume PDF
- Confirm GitHub username: `s-q-ali`
- Any specific projects to feature/exclude?
