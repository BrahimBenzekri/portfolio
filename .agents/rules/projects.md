---
trigger: always_on
---

# Projects — Content & Detail Page Spec

This file defines all projects and the structure of individual project detail pages.

---

## 📦 All Projects

### 1. PocketAI
- **Slug:** `pocketai`
- **Badge:** Finovia 2025 Hackathon
- **Status:** Done
- **Featured:** Yes
- **Short Description:** Smart AI expense tracker with receipt scanning and voice commands
- **Stack:** Flutter, Dart, Dio, fl_chart, OCR, Voice APIs
- **GitHub:** https://github.com/BrahimBenzekri/pocketai
- **Demo:** N/A
- **Thumbnail:** /images/projects/pocketai.png *(to be added by user)*

**Full Description:**
PocketAI is a smart finance management app built for the Finovia 2025 Hackathon. It helps users track expenses through an AI chatbot, scan receipts automatically using OCR, and interact hands-free via voice commands.

**Key Features:**
- AI chatbot for querying financial data and getting advice
- Receipt scanning via camera + OCR to auto-extract transaction details
- Interactive spending charts and dashboard (fl_chart)
- Voice commands for hands-free interaction
- Secure authentication flow

**My Role:** Full mobile development — architecture, UI, API integration, and feature implementation within the hackathon timeframe.

**Challenges:**
- Integrating OCR and voice recording in a single cohesive flow within a 48-hour window
- Managing async state across camera, audio, and network operations cleanly

---

### 2. Hewesbiya
- **Slug:** `hewesbiya`
- **Badge:** Djezzy InnovTech Hackathon
- **Status:** Done
- **Featured:** Yes
- **Short Description:** Smart cultural guide app for exploring Algeria's heritage
- **Stack:** Flutter, Dart, Provider, Dio, Geolocator, Flutter Animate
- **GitHub:** https://github.com/BrahimBenzekri/hewesbiya
- **Demo:** N/A
- **Thumbnail:** /images/projects/hewesbiya.png *(to be added by user)*

**Full Description:**
Hewesbiya is a location-aware cultural tourism app built for the Djezzy InnovTech Hackathon. It helps users discover Algeria's landmarks with real-time GPS-based recommendations and smart audio guides.

**Key Features:**
- Location-based landmark recommendations using Geolocator
- Smart audio guides with facts and stories about places
- Smooth UI animations with Flutter Animate
- Clean feature-based architecture (core/features separation)

**My Role:** Full mobile development — architecture, location services, UI, and animations.

**Challenges:**
- Handling GPS accuracy and fallback logic gracefully
- Building a smooth animated UI under hackathon time pressure

---

### 3. E-Commerce Platform
- **Slug:** `ecommerce-platform`
- **Badge:** In Development
- **Status:** In Development
- **Featured:** Yes
- **Short Description:** Full-stack e-commerce mobile app with admin panel and Supabase backend
- **Stack:** Flutter, Dart, Supabase (Auth, DB, Storage)
- **GitHub:** N/A *(private)*
- **Demo:** N/A
- **Thumbnail:** /images/projects/ecommerce.png *(to be added by user)*

**Full Description:**
A complete e-commerce solution consisting of a customer-facing Flutter mobile app and a separate admin panel for product and order management — all powered by a Supabase backend.

**Key Features:**
- Customer app: authentication, product listings, product detail pages
- Admin panel: product management, order tracking
- Supabase backend: auth, real-time database, file storage
- Cart and orders module in progress

**My Role:** Solo full-stack developer — mobile app, admin panel, and backend architecture.

**Challenges:**
- Designing a clean database schema that serves both the customer app and admin panel
- Managing Supabase real-time subscriptions efficiently across multiple screens

---

### 4. SkillZone
- **Slug:** `skillzone`
- **Badge:** null
- **Status:** Done
- **Featured:** false
- **Short Description:** Modern e-learning platform built with Flutter and GetX
- **Stack:** Flutter, Dart, GetX
- **GitHub:** https://github.com/BrahimBenzekri/SkillZone
- **Demo:** N/A
- **Thumbnail:** /images/projects/skillzone.png *(to be added by user)*

**Full Description:**
SkillZone is a mobile e-learning app with course browsing, a clean responsive UI, and GetX-powered state management.

**Key Features:**
- Course browsing and learning interface
- Responsive UI across screen sizes
- GetX state management architecture
- 5 GitHub stars

**My Role:** Solo developer.

**Challenges:**
- Structuring scalable GetX state management for multiple course flows

---

### 5. Prayer Times App
- **Slug:** `prayer-times`
- **Badge:** null
- **Status:** Done
- **Featured:** false
- **Short Description:** Real-time prayer schedule app with offline support
- **Stack:** Flutter, Dart, Aladhan API
- **GitHub:** https://github.com/BrahimBenzekri/prayer_times_app
- **Demo:** N/A
- **Thumbnail:** /images/projects/prayer-times.png *(to be added by user)*

**Full Description:**
A clean Flutter app that fetches real-time prayer schedules using the Aladhan API, with offline support and a minimal UI.

**Key Features:**
- Real-time prayer times via Aladhan API
- Offline support with local caching
- Clean minimal interface

**My Role:** Solo developer.

**Challenges:**
- Implementing reliable offline caching that syncs seamlessly when back online

---

## 🖼️ Individual Project Detail Page Spec `/projects/[slug]`

Every project gets its own page with these sections in order:

### 1. Hero
- Project title
- Short description
- Badge (Hackathon name OR "In Development") — colored pill
- GitHub button + Live Demo button (hide if N/A)

### 2. Overview
- Full description paragraph
- Tech stack tags (pill badges, each a different subtle color per category)

### 3. Key Features
- Clean icon list (use Lucide icons) — one line per feature

### 4. My Role
- Short paragraph about what I specifically built

### 5. Challenges & Solutions
- 2 items minimum — each has a "Challenge" and "How I solved it"
- This section should feel like a mini case study
- Style it as two-column cards on desktop, stacked on mobile

### 6. Screenshots / Mockups
- Image grid — 2 columns desktop, 1 column mobile
- Use placeholder images if real ones not provided yet
- Use `next/image` with proper aspect ratios

### 7. Navigation Footer
- "← Previous Project" and "Next Project →" links
- Takes user to the adjacent project slug

---

## 🗃️ data/index.ts Project Type

```typescript
export type Project = {
  slug: string
  title: string
  badge: string | null
  status: "Done" | "In Development"
  featured: boolean
  shortDesc: string
  fullDesc: string
  stack: string[]
  github: string | null
  demo: string | null
  thumbnail: string
  features: string[]
  role: string
  challenges: {
    challenge: string
    solution: string
  }[]
  images: string[]
}
```