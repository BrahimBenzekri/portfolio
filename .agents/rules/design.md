---
trigger: always_on
---

# Design System & Component Guidelines

Read this before building any UI component.

---

## 🎨 Color Palette

```css
/* Background layers — lifted from pure black, has depth now */
--bg-primary:    #0d1117   /* Deep navy-dark, not pure black */
--bg-secondary:  #161d27   /* Cards — slightly blue-tinted dark */
--bg-tertiary:   #1e2733   /* Hover states, inputs — visible contrast */

/* Text — warmer and more readable */
--text-primary:  #e8edf3   /* Soft white, not harsh */
--text-secondary:#8fa3b8   /* Blue-tinted gray — fits the teal vibe */
--text-muted:    #4a6070   /* Visible but subtle */

/* Accent — light teal, your vibe */
--accent:        #2dd4bf   /* Teal 400 — alive and fresh */
--accent-hover:  #14b8a6   /* Teal 500 — slightly deeper on hover */
--accent-subtle: #2dd4bf18 /* Teal at 10% opacity — for tag backgrounds */

/* Borders — tinted slightly teal so they breathe */
--border:        #1e3040   /* Deep teal-blue border */
--border-hover:  #2a4a60   /* Visible on hover */

/* Bonus — glow effect for cards/CTAs */
--glow:          0 0 24px rgba(45, 212, 191, 0.08)
```

In Tailwind, map these as custom colors in `tailwind.config.ts`.

---

## ✍️ Typography

- **Font:** Geist Sans (primary) — import from `next/font/google` or `geist` package
- **Mono font:** Geist Mono — for code snippets and tech stack tags only

### Type Scale
| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Hero name | text-5xl / text-7xl | 700 | text-primary |
| Section title | text-3xl | 700 | text-primary |
| Card title | text-xl | 600 | text-primary |
| Body | text-base | 400 | text-secondary |
| Small / label | text-sm | 400 | text-muted |
| Badge / tag | text-xs | 500 | accent |

---

## 📐 Spacing & Layout

- **Max content width:** `max-w-5xl` centered with `mx-auto`
- **Section padding:** `py-24 px-6` on desktop, `py-16 px-4` on mobile
- **Card gap:** `gap-6` in grids
- **Section gap:** `space-y-32` between home page sections

---

## 🧩 Core Components

### Button
Two variants:
```
Primary: bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent-hover transition
Ghost:   border border-border text-text-secondary px-6 py-2.5 rounded-lg hover:border-border-hover hover:text-primary transition
```

### Badge / Tag
```
Pill: bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full
```
Use for: tech stack, hackathon labels, status indicators

### Project Card (for /projects grid)
- Dark card: `bg-secondary border border-border rounded-xl p-6`
- Hover: subtle `border-border-hover` + slight `translateY(-2px)` with Framer Motion
- Contains: thumbnail, title, short desc, stack tags, status badge, GitHub link icon

### Section Header
```
<h2> with text-3xl font-bold text-primary
Followed by a short subtitle in text-secondary
Left-aligned on all screens
```

---

## 🎞️ Animation Guidelines

Use Framer Motion. Keep it subtle — the goal is smooth, not flashy.

### Scroll entrance (use on every section)
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}
```

### Stagger children (for card grids, skill icons, feature lists)
```typescript
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

### Card hover
```typescript
whileHover={{ y: -4, transition: { duration: 0.2 } }}
```

### Rules:
- Never animate on every re-render — use `whileInView` with `once: true`
- No heavy 3D transforms, parallax, or particle effects
- Keep `duration` between 0.3–0.6s max
- Respect `prefers-reduced-motion` — wrap animations in a check

---

## 📱 Responsive Breakpoints

Follow Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Key responsive behaviors:
- Navbar: hamburger menu on mobile (`md:hidden`)
- Project grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Hero: text-5xl on mobile → text-7xl on desktop
- Challenge cards: stacked on mobile → 2-col on desktop
- Skills grid: `grid-cols-3 sm:grid-cols-4 md:grid-cols-6`

---

## 🧭 Navbar

- Fixed top, `backdrop-blur-md bg-bg-primary/80`
- Logo: "BB" monogram left-aligned in accent color
- Links: Home, Projects, About, Contact
- Active link: accent color underline
- Mobile: slide-in drawer from top with Framer Motion
- Include a "Download CV" ghost button on the right (desktop only)

---

## 🦶 Footer

Minimal — single line:
```
© 2025 Brahim Benzekri  •  Built with Next.js & Tailwind  •  [GitHub icon] [LinkedIn icon]
```
Center-aligned, `text-muted`, `py-8`

---

## 🏆 Hackathon Badge Strip

A full-width section between Featured Projects and Testimonials:

```
Background: bg-accent/5 border-y border-accent/20
Content: centered, two badges side by side
  🏆 Djezzy InnovTech Hackathon — Hewesbiya
  🏆 Finovia 2025 Hackathon — PocketAI
```

On mobile: stack vertically.