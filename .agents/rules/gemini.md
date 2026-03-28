---
trigger: always_on
---

# Brahim Benzekri — Portfolio Project Brief

This is the master context file for building my personal developer portfolio.
Read this fully before writing any code.

---

## 👤 About Me

- **Name:** Brahim Benzekri
- **Title:** Flutter Developer & CS Student
- **School:** ESTIN, Béjaia, Algeria (2nd Year, Expected graduation: 2027)
- **Email:** b_benzekri@estin.dz
- **GitHub:** https://github.com/BrahimBenzekri
- **Location:** Béjaia, Algeria

**One-liner:** Second-year CS student at ESTIN specializing in Flutter mobile development. I've shipped apps across two national hackathons and maintain personal projects exploring AI integration and full-stack mobile architecture.

---

## 🎯 Portfolio Goals

1. Land internships and part-time jobs
2. Showcase projects in a compelling way
3. Build a recognizable personal brand as a Flutter developer

---

## 🎨 Design Direction

- **Mode:** Dark mode only (no light mode toggle needed)
- **Aesthetic:** Minimal, sleek, modern — lots of whitespace, clean typography
- **Animations:** Subtle Framer Motion scroll-entrance animations only. Nothing flashy or distracting.
- **Feel:** Professional but personal. Not corporate. Should feel like a developer made it for themselves.
- **Font:** Geist or Inter
- **Accent color:** A single clean blue (e.g. #3B82F6 or similar) — used sparingly for highlights, CTAs, and tags only

---

## 🛠️ Tech Stack (Non-negotiable)

- **Framework:** Next.js 14 — App Router ONLY. Never use Pages Router patterns.
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Contact Form:** Resend (free tier)
- **Deployment:** Vercel
- **Language:** TypeScript

---

## 🗂️ File Structure

All content (projects, skills, testimonials, personal info) must live in a single `src/data/index.ts` file.
No content should be hardcoded inside components.
Adding a new project = editing `data/index.ts` only. Nothing else.

```
src/
├── app/
│   ├── page.tsx                  (Home)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx  (Individual project detail)
│   └── contact/page.tsx
├── components/
│   ├── ui/                       (Reusable: Button, Badge, Card...)
│   ├── sections/                 (Hero, About, Skills, Projects, Testimonials, Contact CTA)
│   └── layout/                   (Navbar, Footer)
├── data/
│   └── index.ts                  (ALL content lives here)
└── lib/
    └── utils.ts
```

---

## 📄 Pages

### `/` Home — sections in this order:
1. Hero
2. About snippet (3-4 lines + photo placeholder)
3. Skills (icon grid)
4. Featured Projects (top 3 only)
5. Hackathon Badge Strip
6. Testimonials (carousel)
7. Contact CTA

### `/projects`
Full projects grid — all projects, filterable by status (Done / In Development)

### `/projects/[slug]`
Individual project detail page — see PROJECTS.md for full spec

### `/about`
Full about page — bio, education, skills, hackathon history, CV download button

### `/contact`
Contact form (name, email, message) powered by Resend + social links

---

## 🔗 Design References

Use these for layout structure and aesthetic inspiration. Do NOT copy them — adapt to my content and style.

| Site | Live | Repo |
|------|------|------|
| Brittany Chiang | https://brittanychiang.com | https://github.com/bchiang7/v4 |
| Lee Robinson | https://leerob.io | https://github.com/leerob/leerob.io |

Browse both the live sites AND the repos to understand their component structure, animation patterns, and Tailwind usage.

---

## ⚠️ Hard Rules

- Always use Next.js 14 **App Router** — even if reference repos use older patterns
- Never hardcode content in components — always pull from `data/index.ts`
- Never use `<form>` HTML tags — use controlled components with `onClick` handlers
- All pages must be fully responsive (mobile-first)
- Use `next/image` for all images
- Use `next/link` for all internal navigation
- Keep the codebase clean and consistent — one component per file