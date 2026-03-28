---
trigger: always_on
---

# Content — Personal Info, Skills & Testimonials

This file contains all non-project content for the portfolio.
Everything here maps directly to fields in `src/data/index.ts`.

---

## 👤 Personal Info

```typescript
export const meta = {
  name: "Brahim Benzekri",
  title: "Flutter Developer",
  subtitle: "CS Student @ ESTIN · 2x Hackathon Participant · Building mobile apps that solve real problems",
  email: "b_benzekri@estin.dz",
  phone: "+213 66 85 87 623",
  location: "Béjaia, Algeria",
  github: "https://github.com/BrahimBenzekri",
  linkedin: "https://www.linkedin.com/in/brahim-benzekri-609486232",
  cvUrl: "/cv/Brahim_Benzekri_CV.pdf", // place CV file in /public/cv/
  avatar: "/images/avatar.jpg", // photo in /public/images/

```

---

## 🛠️ Skills

Group them by category. Each skill has a name and an icon (use Lucide or Devicons).

```typescript
export const skills = [
  // Languages
  { name: "Dart", category: "Language", level: "Advanced" },
  { name: "Python", category: "Language", level: "Intermediate" },
  { name: "C", category: "Language", level: "Intermediate" },

  // Frameworks & Libraries
  { name: "Flutter", category: "Framework", level: "Intermediate" },
  { name: "GetX", category: "State Management", level: "Intermediate" },
  { name: "Riverpod", category: "State Management", level: "Intermediate" },
  { name: "Provider", category: "State Management", level: "Intermediate" },

  // Backend & Tools
  { name: "Supabase", category: "Backend", level: "Intermediate" },
  { name: "Git", category: "Tool", level: "Advanced" },
  { name: "REST APIs", category: "Tool", level: "Intermediate" },

  // Other
  { name: "UI/UX Design", category: "Other", level: "Intermediate" },
  { name: "Cybersecurity", category: "Other", level: "Beginner" },
  { name: "Arch Linux", category: "OS", level: "Intermediate" },
]
```

### Skills Section Display
- Show as an icon grid grouped by category
- Each skill = icon + name label underneath
- For icons use Simple Icons (https://simpleicons.org) for tech logos
- Fallback to a generic code icon for anything without a logo

---

## 🎓 Education

```typescript
export const education = {
  degree: "B.Sc. in Computer Science",
  school: "ESTIN",
  location: "Béjaia, Algeria",
  year: "2nd Year",
  graduation: "Expected 2027",
  coursework: ["Programming", "Data Structures", "Mobile Development"],
}
```

---

## 🏆 Hackathons

```typescript
export const hackathons = [
  {
    name: "Finovia 2025",
    project: "PocketAI",
    description: "Smart AI expense tracker with receipt scanning and voice commands",
    year: "2025",
    slug: "pocketai",
  },
  {
    name: "Djezzy InnovTech",
    project: "Hewesbiya",
    description: "Smart cultural guide app for exploring Algeria's heritage",
    year: "2024",
    slug: "hewesbiya",
  },
]
```

---

## 💬 Testimonials

*Placeholder testimonials — replace with real ones before launch.*

```typescript
export const testimonials = [
  {
    name: "Teammate Name",
    role: "CS Student, ESTIN",
    avatar: "/images/testimonials/person1.jpg",
    text: "Working with Brahim on Hewesbiya during the Djezzy hackathon was impressive. He took ownership of the entire Flutter side and delivered a polished, animated UI in under 48 hours.",
  },
  {
    name: "Teammate Name",
    role: "CS Student, ESTIN",
    avatar: "/images/testimonials/person2.jpg",
    text: "Brahim built out the PocketAI mobile app from scratch during Finovia 2025. His ability to integrate complex features like OCR and voice under time pressure was something else.",
  },
]
```

### Testimonials Display
- Carousel / slider on mobile
- Side-by-side cards on desktop (max 2 visible at once)
- Each card: avatar, name, role, quote text
- Subtle border, dark card background
- If no real testimonials yet, hide the section with a flag:

```typescript
export const showTestimonials = false // flip to true when you have real ones
```

---

## 🌍 Languages

```typescript
export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
]
```

---

## 📬 Contact Section

### Contact Form Fields
- Name (required)
- Email (required)
- Subject (optional)
- Message (required)
- Submit button: "Send Message"

### After Submit
- Show inline success message: "Message sent! I'll get back to you soon."
- Show inline error if Resend fails: "Something went wrong. Try emailing me directly."
- Never redirect or reload the page

### Social Links (shown below the form)
- GitHub: https://github.com/BrahimBenzekri
- LinkedIn: https://linkedin.com/in/YOUR_HANDLE ← update this
- Email: b_benzekri@estin.dz

---

## 📥 CV Download

- Place the CV PDF at: `public/cv/Brahim_Benzekri_CV.pdf`
- The "Download CV" button should use a direct `<a href="/cv/Brahim_Benzekri_CV.pdf" download>` tag
- Show this button in: Navbar (desktop), Hero section, About page