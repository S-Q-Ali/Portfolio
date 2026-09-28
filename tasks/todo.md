# Task List: Portfolio Website

## Phase 1: Foundation
- [ ] Task 1: Next.js project setup + Tailwind 4 config + design tokens
  - Acceptance: `npm run dev` starts without errors, Tailwind classes apply
  - Verify: `npm run build` succeeds
  - Files: package.json, next.config.ts, tsconfig.json, tailwind.config.ts, app/globals.css
  - Dependencies: None

- [ ] Task 2: GitHub API types + fetch + validation
  - Acceptance: Types defined, fetch function validates response, filter excludes forks
  - Verify: Build passes, filtered projects returned
  - Files: lib/github/types.ts, lib/github/fetch.ts, lib/github/filter.ts
  - Dependencies: Task 1

- [ ] Task 3: Navbar + Footer components
  - Acceptance: Navbar shows nav links, Footer shows social links, responsive mobile menu
  - Verify: Render on all pages, keyboard navigable
  - Files: components/Navbar/Navbar.tsx, components/Footer/Footer.tsx
  - Dependencies: Task 1

### Checkpoint: Foundation
- [ ] Dev server runs without errors
- [ ] Tailwind classes apply correctly
- [ ] Navbar/Footer render on all pages

## Phase 2: Core UI
- [ ] Task 4: Hero section with GitHub stats
  - Acceptance: Shows name, title, location, GitHub stats (repos, stars, followers)
  - Verify: Responsive, loading skeleton works
  - Files: components/Hero/Hero.tsx, components/Hero/HeroSkeleton.tsx
  - Dependencies: Task 2, Task 3

- [ ] Task 5: Project grid + card + filters
  - Acceptance: Grid shows 6 best projects, card shows name/desc/stars/language
  - Verify: Hover states work, empty state handled
  - Files: components/Projects/ProjectGrid.tsx, ProjectCard.tsx, ProjectFilters.tsx
  - Dependencies: Task 2

- [ ] Task 6: Skills section
  - Acceptance: Shows skills grouped by category (frontend, backend, tools)
  - Verify: Responsive grid, proper typography
  - Files: components/Skills/SkillsSection.tsx
  - Dependencies: Task 1

- [ ] Task 7: Strengths & growth areas section
  - Acceptance: Shows strengths and growth areas in two columns
  - Verify: Readable, responsive
  - Files: components/Strengths/StrengthsSection.tsx
  - Dependencies: Task 1

### Checkpoint: Core UI
- [ ] Home page renders all sections
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Loading states work

## Phase 3: Pages
- [ ] Task 8: Projects page (full grid + language filter)
  - Acceptance: Shows all repos, language filter works, sort by stars/date
  - Verify: Filter updates grid, empty state for no matches
  - Files: app/projects/page.tsx
  - Dependencies: Task 5

- [ ] Task 9: Resume page + PDF download
  - Acceptance: Resume displayed, download button works
  - Verify: PDF downloads correctly, page is printable
  - Files: app/resume/page.tsx, components/Resume/ResumeSection.tsx, ResumeDownload.tsx
  - Dependencies: Task 1

- [ ] Task 10: System design page
  - Acceptance: Shows 2-3 system design examples with diagrams
  - Verify: Responsive, readable
  - Files: app/system-design/page.tsx, components/SystemDesign/SystemDesignSection.tsx
  - Dependencies: Task 1

### Checkpoint: Pages
- [ ] All pages render without errors
- [ ] Navigation works between pages
- [ ] PDF download works

## Phase 4: Polish
- [ ] Task 11: Accessibility audit
  - Acceptance: Keyboard nav works, ARIA labels present, contrast ≥ 4.5:1
  - Verify: Tab through all interactive elements, screen reader friendly
  - Files: All components
  - Dependencies: Tasks 4-10

- [ ] Task 12: Build verification + responsive testing
  - Acceptance: `npm run build` passes, no TS errors, responsive at all breakpoints
  - Verify: Run build, test at 320px, 768px, 1024px, 1440px
  - Files: All
  - Dependencies: All previous

### Checkpoint: Complete
- [ ] `npm run build` passes
- [ ] All acceptance criteria met
- [ ] Ready for review
