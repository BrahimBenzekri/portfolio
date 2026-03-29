---
trigger: always_on
---

# Agent Build Instructions — Start Here

Read ALL .md files before writing a single line of code:
1. GEMINI.md — project brief, goals, tech stack, hard rules
2. DESIGN.md — colors, typography, components, animations
3. PROJECTS.md — all project data and detail page spec
4. CONTENT.md — personal info, skills, testimonials

---

## 🚀 Build Order

Follow this exact sequence. Complete each step fully before moving to the next.

### Step 1 — Project Setup

Configure `tailwind.config.ts` with the custom color palette from DESIGN.md.
Configure `src/app/layout.tsx` with Geist font and dark background.

### Step 2 — Data Layer
Create `src/data/index.ts` with ALL content from CONTENT.md and PROJECTS.md.
This must be done before any component touches real data.
Export types: `Project`, `Skill`, `Testimonial`, `Hackathon`.

### Step 3 — Layout Components
Build in this order:
1. `Navbar` — with mobile drawer
2. `Footer`
3. Root layout wrapping all pages

### Step 4 — Home Page Sections
Build each section as its own component in `src/components/sections/`:
1. `HeroSection`
2. `AboutSnippet`
3. `SkillsSection`
4. `FeaturedProjects`
5. `HackathonStrip`
6. `TestimonialsSection` (conditionally rendered based on `showTestimonials` flag)
7. `ContactCTA`

Assemble them in `src/app/page.tsx`.

### Step 5 — Projects Pages
1. `/projects/page.tsx` — full grid with Done/In Development filter
2. `/projects/[slug]/page.tsx` — dynamic detail page using slug from data

### Step 6 — Remaining Pages
1. `/about/page.tsx`
2. `/contact/page.tsx` with Resend form

### Step 7 — Polish
- Add Framer Motion scroll animations to all sections
- Test responsiveness at sm / md / lg breakpoints
- Add `next/image` to all images with proper width/height
- Add metadata to all pages (`generateMetadata` in App Router)
- Add `loading.tsx` and `not-found.tsx`

---

## ✅ Definition of Done Per Component

A component is done when:
- [ ] Pulls all content from `data/index.ts` — zero hardcoded strings
- [ ] Fully responsive (mobile-first)
- [ ] Has scroll-entrance Framer Motion animation (`whileInView`, `once: true`)
- [ ] Uses only colors from the design system (no arbitrary hex values)
- [ ] TypeScript — no `any` types

---

## 🔁 How to Add Future Projects (after launch)

1. Open `src/data/index.ts`
2. Add a new object to the `projects` array following the `Project` type
3. Add a thumbnail image to `public/images/projects/`
4. Done — the projects page and detail page generate automatically

No component changes needed. Ever.

---

## 🌐 Design Reference Browsing

Before building any section, browse these for layout and aesthetic inspiration:
- https://brittanychiang.com + https://github.com/bchiang7/v4
- https://www.adeolaadeoti.site/ + https://github.com/adeolaadeoti/adeolaadeoti-v2
- https://iamschulz.com/ + https://github.com/iamschulz/iamschulz-hugo
- https://www.seyi.dev/ + https://github.com/oluwadareseyi/folio-v2
- https://azizstark.com/ + https://github.com/AzizStark/AzizStark/tree/portfolio-v2
- https://hamishw.com/ + https://github.com/HamishMW/portfolio

Focus on:
- How they structure section spacing and whitespace
- How they handle project cards and detail pages
- Their Framer Motion animation patterns
- Their Tailwind class naming conventions

Do NOT copy their design. Adapt the structural patterns to the design system in DESIGN.md.

---

## ⚠️ Common Mistakes to Avoid

- Using Pages Router (`pages/` directory) — App Router only
- Hardcoding any text, color, or URL in a component
- Using `<form>` HTML tags — use controlled components
- Using `any` in TypeScript
- Skipping `next/image` for images
- Adding animations that don't respect `prefers-reduced-motion`
- Building without first reading all .md files