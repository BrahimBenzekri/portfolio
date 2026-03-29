# Portfolio UI Build Prompt — Antigravity Agent

## Your Task
You are building the UI for Brahim Benzekri's personal developer portfolio.
The scaffold is already set up — data layer, pages, components, and file structure are all done.
Your job is to make it look EXCEPTIONAL. Not generic. Not template-like. Something someone remembers.

---

## Step 1 — Read Everything First
Before writing a single line of CSS or JSX, read ALL of these files:
- `GEMINI.md` — project brief, goals, tech stack, hard rules
- `DESIGN.md` — color palette, typography, spacing, animation rules
- `PROJECTS.md` — project content and detail page structure
- `CONTENT.md` — all personal info, skills, testimonials

---

## Step 2 — Browse All Reference Portfolios
Open and carefully study each of these. Look at both the live site AND the GitHub repo.
Extract specific techniques, patterns, and details — don't just glance at them.

### References (open all of these):

**1. Brittany Chiang**
- Live: https://brittanychiang.com
- Repo: https://github.com/bchiang7/v4
- What to steal: Fixed sidebar layout on desktop, active section highlighting in nav,
  how she handles the "experience" timeline, subtle green accent on dark navy background,
  how project cards reveal on hover

**2. Adeola Adeoti**
- Live: https://www.adeolaadeoti.site/
- Repo: https://github.com/adeolaadeoti/adeolaadeoti-v2
- What to steal: Bold all-caps typography sections, the way project images are displayed
  at large scale with overlapping text, the energy and confidence of the layout,
  the "don't be a stranger" footer CTA, how he uses negative space aggressively

**3. Seyi (Oluwadare Oluwaseyi)**
- Live: https://www.seyi.dev/
- Repo: https://github.com/oluwadareseyi/folio-v2
- What to steal: Horizontal scrolling project showcase, the editorial-style project numbering (01, 02, 03),
  uppercase spaced-out typography, the marquee/ticker footer CTA,
  how project categories are displayed as small labels above titles

**4. Hamish Williams**
- Live: https://hamishw.com/
- Repo: https://github.com/HamishMW/portfolio
- What to steal: The page transition animations between routes, how 3D elements and
  subtle motion are used without being distracting, the clean "Details" about section,
  how project numbers are used as visual anchors, scroll-triggered reveals

**5. iamschulz**
- Live: https://iamschulz.com/
- Repo: https://github.com/iamschulz/iamschulz-hugo
- What to steal: Brutalist typographic confidence, raw but intentional layout,
  how simple components become interesting through scale and spacing alone,
  the no-nonsense about section

**6. Aziz Stark**
- Live: https://azizstark.com/
- Repo: https://github.com/AzizStark/AzizStark/tree/portfolio-v2
- What to steal: How he presents a developer from a non-Western background professionally,
  the confidence in the hero section, how he structures the project showcase cleanly

---

## Step 3 — Design Direction to Execute

After studying the references, build the UI with these specific decisions:

### Overall Feel
Dark, alive, confident. Not corporate. Not generic SaaS. Feels like a developer
who has taste and ships things. Think: editorial magazine meets technical portfolio.

### Color System (use exactly these values)
```css
--bg-primary:    #0d1117   /* Deep navy-dark */
--bg-secondary:  #161d27   /* Cards — blue-tinted dark */
--bg-tertiary:   #1e2733   /* Hover states, inputs */
--text-primary:  #e8edf3   /* Soft white */
--text-secondary:#8fa3b8   /* Blue-tinted gray */
--text-muted:    #4a6070   /* Subtle */
--accent:        #2dd4bf   /* Light teal — the signature color */
--accent-hover:  #14b8a6   /* Teal on hover */
--accent-subtle: rgba(45, 212, 191, 0.10)  /* Teal at 10% for tag backgrounds */
--border:        #1e3040   /* Deep teal-blue border */
--border-hover:  #2a4a60   /* Visible on hover */
--glow:          0 0 24px rgba(45, 212, 191, 0.08)  /* Subtle teal glow for cards */
```

### Typography Rules
- Use Geist Sans (already configured)
- Hero name: massive, bold, commanding — at least `text-6xl md:text-8xl`
- Section labels above headings: `text-xs font-mono uppercase tracking-[0.2em] text-accent`
- Body text: comfortable line-height (`leading-relaxed`), never cramped

### Specific UI Decisions to Make

**Hero Section:**
- Name should be HUGE — full width if possible
- Inspired by seyi.dev's editorial confidence and Adeola's bold opening
- Add a subtle animated cursor or blinking line next to the title
- The teal accent should appear here — either as an underline, a dot, or a highlighted word
- Social links visible but not dominant

**Navigation:**
- Take inspiration from Brittany Chiang's fixed nav with active section indicator
- On desktop: fixed left sidebar OR top fixed bar with animated active underline
- Logo: "BB" monogram in teal
- Include smooth scroll behavior

**Project Cards:**
- Inspired by Seyi's numbered editorial style (01, 02, 03)
- On hover: teal border glow (`box-shadow: var(--glow)`) + slight lift
- Project category shown above title in small caps (e.g. "Hackathon · Flutter")
- Stack tags in mono font, teal-tinted

**Project Detail Page:**
- Inspired by Hamish Williams' clean case study format
- Challenge/Solution section should feel like a real case study, not a list
- Large section numbers as decorative elements

**Hackathon Strip:**
- Make it feel like an award shelf — proud, not shy
- Trophy icons in teal, strong contrast against the section background

**Contact CTA:**
- Inspired by Adeola's "Sold Yet?" and Seyi's scrolling marquee
- Make it punchy and human, not corporate
- Consider an animated scrolling text ticker: "LET'S WORK · GET IN TOUCH · OPEN TO OPPORTUNITIES ·"

**Footer:**
- Minimal but alive — teal accent on social icons hover
- Year auto-updates

### Animation Rules
- Use Framer Motion `whileInView` with `once: true` for all scroll reveals
- Page transitions: fade + slight upward movement (0.4s ease)
- Card hover: `y: -4` + teal glow appears
- Hero entrance: staggered children, 0.12s between each element
- NO heavy 3D, NO particle effects, NO excessive motion
- Respect `prefers-reduced-motion`

---

## Step 4 — What NOT to Do

- Do NOT use purple gradients — that's generic AI slop
- Do NOT use white backgrounds anywhere
- Do NOT use Inter or Roboto — Geist only
- Do NOT hardcode any content in components — all data comes from `src/data/index.ts`
- Do NOT use `<form>` HTML tags — use controlled components
- Do NOT make it look like every other Next.js portfolio template
- Do NOT add loading spinners — use skeleton states or instant renders
- Do NOT over-animate — if something moves more than once unprompted, it's too much

---

## Step 5 — Build Order

1. Update `tailwind.config.ts` with the new color palette above
2. Update `src/app/globals.css` with CSS variables
3. Polish `Navbar` — active states, mobile drawer, smooth scroll
4. Polish `HeroSection` — make it massive and memorable
5. Polish `SkillsSection` — clean grouped cards
6. Polish `FeaturedProjects` — numbered editorial cards with hover glow
7. Polish `HackathonStrip` — award shelf feel
8. Polish `ContactCTA` — scrolling ticker or punchy CTA
9. Polish `ProjectDetail` — case study format
10. Polish `ContactForm` — clean inputs with teal focus states
11. Polish `AboutFull` — editorial bio layout
12. Final pass: spacing, typography hierarchy, mobile responsiveness

---

## Definition of Done

The portfolio is done when:
- [ ] Opening it feels like landing on a senior developer's portfolio, not a student template
- [ ] The teal accent is visible but not overdone — shows up in the right places only
- [ ] Every section has a scroll-entrance animation
- [ ] It looks perfect on mobile (375px) and desktop (1440px)
- [ ] No content is hardcoded in components
- [ ] The hero section makes someone stop scrolling immediately
- [ ] Project detail pages feel like real case studies
- [ ] The overall vibe is: dark, alive, minimal, confident