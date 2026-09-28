# Spec: Personal Portfolio Website

## Objective
Build a modern, production-quality personal portfolio website for Syed Qasim Ali that:
- Showcases best GitHub projects (auto-filtered from GitHub API)
- Displays skills, strengths, and growth areas
- Includes a digital resume with download button
- Features system design showcase
- Links social profiles (GitHub, LinkedIn, Instagram, Email)
- Reflects the user's GitHub profile README aesthetic (dark theme, gaming-inspired but professional)

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Data:** GitHub REST API (build-time fetch)
- **Font:** Inter (body) + JetBrains Mono (code)

## Commands
```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
```

## Project Structure
```
Portfolio/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + design tokens
│   ├── projects/
│   │   └── page.tsx            # All projects with filters
│   ├── resume/
│   │   └── page.tsx            # Digital resume + download
│   └── system-design/
│       └── page.tsx            # System design showcase
├── components/
│   ├── Navbar/
│   │   └── Navbar.tsx
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── HeroSkeleton.tsx
│   ├── Projects/
│   │   ├── ProjectGrid.tsx     # Container (data fetching)
│   │   ├── ProjectCard.tsx     # Presentation
│   │   └── ProjectFilters.tsx
│   ├── Skills/
│   │   └── SkillsSection.tsx
│   ├── Strengths/
│   │   └── StrengthsSection.tsx
│   ├── Resume/
│   │   ├── ResumeSection.tsx
│   │   └── ResumeDownload.tsx
│   ├── SystemDesign/
│   │   └── SystemDesignSection.tsx
│   └── Footer/
│       └── Footer.tsx
├── lib/
│   ├── github/
│   │   ├── types.ts            # GitHub API contract types
│   │   ├── fetch.ts            # Build-time fetch + validation
│   │   └── filter.ts           # Project filtering logic
│   └── constants.ts            # Social links, personal info
├── public/
│   └── resume.pdf              # Downloadable resume
├── SPEC-portfolio.md           # This spec
├── tasks/
│   ├── plan.md                 # Implementation plan
│   └── todo.md                 # Task checklist
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Code Style
- TypeScript strict mode
- Functional components with hooks
- Colocated components (component + styles + tests together)
- Semantic HTML (nav, main, section, article)
- Consistent naming: PascalCase for components, camelCase for functions

## Design Tokens
- Background: `#0a0a0a` (near-black)
- Surface: `#141414` (dark gray)
- Border: `#262626` (subtle gray)
- Text primary: `#fafafa`
- Text secondary: `#a3a3a3`
- Accent: `#22c55e` (green — terminal/hacker aesthetic)
- Font: Inter (body), JetBrains Mono (code/numbers)
- Border radius: `rounded-md` (subtle, not rounded-2xl)
- Spacing: 4px base scale

## Testing Strategy
- Build verification: `npm run build` must pass
- Responsive: Test at 320px, 768px, 1024px, 1440px
- Accessibility: Keyboard nav, ARIA labels, contrast ratios
- Loading states: Skeleton screens for async content
- Empty states: No projects, no data fallbacks

## Boundaries
- **Always do:** Run build before committing, follow design system, use semantic HTML
- **Ask first:** Adding new dependencies, changing color scheme, modifying data flow
- **Never do:** Commit secrets, use purple gradients, use rounded-2xl everywhere, skip loading states

## Success Criteria
- [ ] Build passes without errors
- [ ] Home page shows hero, GitHub stats, best 6 projects, skills, strengths
- [ ] Projects page shows all repos with language filter
- [ ] Resume page displays resume + working PDF download
- [ ] System design page shows architecture diagrams
- [ ] Responsive at all breakpoints
- [ ] Keyboard navigable
- [ ] Dark theme matching GitHub profile aesthetic

## Assumptions
1. GitHub username is `s-q-ali` (from profile README)
2. No backend needed — build-time static generation
3. Resume PDF will be provided by user (placeholder for now)
4. No authentication required
5. English content throughout
