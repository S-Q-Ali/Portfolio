# Syed Qasim Ali — Portfolio

A modern, production-quality personal portfolio built with Next.js 15, Tailwind CSS 4, and TypeScript. Features build-time GitHub data fetching and AI-powered resume generation via Groq.

## Features

- **Live GitHub integration** — Projects auto-filtered and ranked by stars, forks, and recency
- **AI Resume Generator** — ATS-friendly resumes tailored to any role using Groq's free Llama 3.3 70B model
- **System Design Showcase** — Architecture patterns and designs
- **Digital Resume** — Downloadable PDF resume
- **Responsive & Accessible** — WCAG 2.1 AA compliant, keyboard navigable
- **Security headers** — CSP, HSTS, X-Frame-Options, and more
- **Rate limiting** — API endpoints protected against abuse

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript (strict mode)
- **Data:** GitHub REST API (build-time)
- **AI:** Groq API (Llama 3.3 70B)
- **PDF:** pdf-lib
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 22.x
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your free Groq API key at [console.groq.com](https://console.groq.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
app/
├── layout.tsx              # Root layout (Navbar + Footer)
├── page.tsx                # Home page
├── globals.css             # Tailwind + design tokens
├── loading.tsx             # Loading state
├── error.tsx               # Error boundary
├── projects/               # All projects with filters
├── resume/                 # Digital resume + PDF download
├── system-design/          # System design showcase
├── generate/               # AI resume generator
└── api/
    └── generate-resume/    # Groq API integration
components/
├── Navbar/                 # Sticky header with mobile menu
├── Hero/                   # Avatar, bio, GitHub stats
├── Projects/               # Project grid, card, filters
├── Skills/                 # Skills section
├── Strengths/              # Strengths & growth areas
└── Footer/                 # Social links
lib/
├── github/                 # GitHub API types, fetch, filter
├── groq.ts                 # Groq API client
├── resume-data.ts          # User's education, experience, skills
├── resume-pdf.ts           # PDF generation utility
└── constants.ts            # Social links, nav links
public/
└── resume.pdf              # Downloadable resume
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and add a new site from Git
3. Select your repository
4. Build settings auto-detected:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variable:
   - Key: `GROQ_API_KEY`
   - Value: your Groq API key
6. Enable the `@netlify/plugin-nextjs` build plugin
7. Deploy!

Every push to `main` triggers an automatic deployment.

### Vercel

```bash
npm i -g vercel
vercel
```

Add `GROQ_API_KEY` in the Vercel dashboard under Environment Variables.

## Configuration

### GitHub Username

Edit `lib/constants.ts` to change the GitHub username:

```ts
export const GITHUB_USERNAME = "s-q-ali";
```

### Resume Data

Edit `lib/resume-data.ts` to update your education, experience, certifications, and skills.

### Social Links

Edit `lib/constants.ts` to update social media links:

```ts
export const SOCIAL_LINKS = {
  github: "https://github.com/s-q-ali",
  linkedin: "https://linkedin.com/in/s-qasim-ali",
  instagram: "https://www.instagram.com/syedqasim963",
  email: "mailto:syedqasim963@gmail.com",
};
```

## API

### POST /api/generate-resume

Generates an ATS-friendly PDF resume tailored to a specific role.

**Request:**

```json
{
  "desiredRole": "Senior Frontend Developer"
}
```

**Response:** PDF file download

**Rate limit:** 10 requests per hour per IP

## License

MIT
