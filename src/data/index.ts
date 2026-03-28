// ============================================================
// DATA LAYER — All portfolio content lives here.
// To add a project: add an object to the `projects` array.
// To update personal info: edit `meta`.
// Never hardcode content in components.
// ============================================================

// ── TYPES ────────────────────────────────────────────────────

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

export type Skill = {
  name: string
  category: "Language" | "Framework" | "State Management" | "Backend" | "Tool" | "Other" | "OS"
  level: "Advanced" | "Intermediate" | "Beginner"
  icon?: string
}

export type Testimonial = {
  name: string
  role: string
  avatar: string
  text: string
}

export type Hackathon = {
  name: string
  project: string
  description: string
  year: string
  slug: string
}

export type Education = {
  degree: string
  school: string
  location: string
  year: string
  graduation: string
  coursework: string[]
}

// ── META ─────────────────────────────────────────────────────

export const meta = {
  name: "Brahim Benzekri",
  title: "Flutter Developer",
  subtitle:
    "CS Student @ ESTIN · 2x Hackathon Participant · Building mobile apps that solve real problems",
  email: "b_benzekri@estin.dz",
  phone: "+213 66 85 87 623",
  location: "Béjaia, Algeria",
  github: "https://github.com/BrahimBenzekri",
  linkedin: "https://www.linkedin.com/in/brahim-benzekri-07b1b527b/", // ← update this
  cvUrl: "/cv/Brahim_Benzekri_CV.pdf",
  avatar: "/images/avatar.jpg",
}

// ── PROJECTS ─────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "pocketai",
    title: "PocketAI",
    badge: "Finovia 2025 Hackathon",
    status: "Done",
    featured: true,
    shortDesc: "Smart AI expense tracker with receipt scanning and voice commands",
    fullDesc:
      "PocketAI is a smart finance management app built for the Finovia 2025 Hackathon. It helps users track expenses through an AI chatbot, scan receipts automatically using OCR, and interact hands-free via voice commands — all wrapped in a clean, intuitive Flutter UI.",
    stack: ["Flutter", "Dart", "Dio", "fl_chart", "OCR", "Voice APIs"],
    github: "https://github.com/BrahimBenzekri/pocketai",
    demo: null,
    thumbnail: "/images/projects/pocketai.png",
    features: [
      "AI chatbot for querying financial data and getting spending advice",
      "Receipt scanning via camera + OCR to auto-extract transaction details",
      "Interactive spending charts and dashboard with fl_chart",
      "Voice commands for hands-free interaction",
      "Secure authentication flow with protected routes",
    ],
    role:
      "Full mobile development — architecture, UI design, API integration, and all feature implementation. Delivered solo within the 48-hour hackathon window.",
    challenges: [
      {
        challenge:
          "Integrating OCR, voice recording, and network calls into one cohesive async flow without the app feeling sluggish.",
        solution:
          "Used Dart's async/await with careful state isolation per feature — each module (camera, audio, network) had its own controller, preventing state leakage and keeping the UI reactive.",
      },
      {
        challenge:
          "Building a polished, demo-ready product in under 48 hours with no prior hackathon experience at this scale.",
        solution:
          "Prioritized core features first (auth, dashboard, receipt scan) and treated voice/AI as enhancements. This ensured a working demo even if the extras weren't fully polished.",
      },
    ],
    images: [],
  },
  {
    slug: "hewesbiya",
    title: "Hewesbiya",
    badge: "Djezzy InnovTech Hackathon",
    status: "Done",
    featured: true,
    shortDesc: "Smart cultural guide app for exploring Algeria's heritage",
    fullDesc:
      "Hewesbiya is a location-aware cultural tourism app built for the Djezzy InnovTech Hackathon. It helps users discover Algeria's landmarks through real-time GPS-based recommendations and smart audio guides — all with a smooth, animated Flutter UI.",
    stack: ["Flutter", "Dart", "Provider", "Dio", "Geolocator", "Flutter Animate"],
    github: "https://github.com/BrahimBenzekri/hewesbiya",
    demo: null,
    thumbnail: "/images/projects/hewesbiya.png",
    features: [
      "Location-based landmark recommendations using Geolocator",
      "Smart audio guides with historical facts and stories about each place",
      "Smooth UI animations with Flutter Animate",
      "Clean feature-based architecture (core/features folder separation)",
      "Real-time distance and direction to nearby cultural sites",
    ],
    role:
      "Full mobile development — GPS integration, UI, animations, and architecture. Built as part of a team during the Djezzy InnovTech Hackathon.",
    challenges: [
      {
        challenge:
          "GPS accuracy varied significantly on test devices, causing recommendation logic to fire incorrectly.",
        solution:
          "Added a minimum accuracy threshold check before triggering location-dependent logic, with a graceful fallback to last known location.",
      },
      {
        challenge: "Delivering smooth, polished animations under hackathon time pressure.",
        solution:
          "Used Flutter Animate's declarative API which made adding entrance and transition effects very fast — no manual AnimationController setup needed.",
      },
    ],
    images: [],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    badge: "In Development",
    status: "In Development",
    featured: true,
    shortDesc: "Full-stack e-commerce mobile app with admin panel and Supabase backend",
    fullDesc:
      "A complete e-commerce solution consisting of a customer-facing Flutter mobile app and a separate admin panel for product and order management — all powered by a Supabase backend with real-time capabilities.",
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    github: null,
    demo: null,
    thumbnail: "/images/projects/ecommerce.png",
    features: [
      "Customer app: authentication, product listings, product detail pages",
      "Admin panel: product management, inventory control",
      "Supabase backend: auth, real-time database, file storage for product images",
      "Cart and orders module (in progress)",
      "Role-based access — customer vs admin views from a single codebase",
    ],
    role:
      "Solo full-stack developer — designing the database schema, building both the customer app and admin panel, and wiring up the entire Supabase backend.",
    challenges: [
      {
        challenge:
          "Designing a single Supabase schema that cleanly serves both the customer-facing app and the admin panel without duplication.",
        solution:
          "Used Supabase Row Level Security (RLS) policies to serve different data views to different roles from the same tables — no separate schemas needed.",
      },
      {
        challenge: "Managing product image uploads efficiently without bloating storage costs.",
        solution:
          "Implemented client-side image compression before upload using Flutter's image package, keeping file sizes under 200KB while maintaining quality.",
      },
    ],
    images: [],
  },
  {
    slug: "skillzone",
    title: "SkillZone",
    badge: null,
    status: "Done",
    featured: false,
    shortDesc: "Modern e-learning platform built with Flutter and GetX",
    fullDesc:
      "SkillZone is a mobile e-learning app with course browsing, a clean responsive UI, and GetX-powered state management. It earned 5 GitHub stars making it the top-performing project in the portfolio.",
    stack: ["Flutter", "Dart", "GetX"],
    github: "https://github.com/BrahimBenzekri/SkillZone",
    demo: null,
    thumbnail: "/images/projects/skillzone.png",
    features: [
      "Course browsing and learning interface",
      "Responsive UI across different screen sizes",
      "GetX state management with clean separation of concerns",
      "5 GitHub stars",
    ],
    role: "Solo developer — full design and implementation.",
    challenges: [
      {
        challenge:
          "Structuring scalable GetX state management across multiple course and user flows.",
        solution:
          "Adopted a strict controller-per-feature pattern with GetX bindings, keeping each screen's logic fully isolated and testable.",
      },
    ],
    images: [],
  },
  {
    slug: "prayer-times",
    title: "Prayer Times App",
    badge: null,
    status: "Done",
    featured: false,
    shortDesc: "Real-time prayer schedule app with offline support",
    fullDesc:
      "A clean Flutter app that fetches real-time prayer schedules using the Aladhan API, with offline support and a minimal, distraction-free interface.",
    stack: ["Flutter", "Dart", "Aladhan API"],
    github: "https://github.com/BrahimBenzekri/prayer_times_app",
    demo: null,
    thumbnail: "/images/projects/prayer-times.png",
    features: [
      "Real-time prayer times fetched from Aladhan API",
      "Offline support with local caching",
      "Location-based schedule calculation",
      "Clean minimal interface with no distractions",
    ],
    role: "Solo developer — full design and implementation.",
    challenges: [
      {
        challenge:
          "Implementing reliable offline caching that syncs seamlessly when the device comes back online.",
        solution:
          "Used SharedPreferences to cache the last successful API response with a timestamp, showing cached data when offline and refreshing automatically when connectivity is restored.",
      },
    ],
    images: [],
  },
]

// ── SKILLS ───────────────────────────────────────────────────

export const skills: Skill[] = [
  { name: "Dart", category: "Language", level: "Advanced" },
  { name: "Python", category: "Language", level: "Intermediate" },
  { name: "C", category: "Language", level: "Intermediate" },
  { name: "Flutter", category: "Framework", level: "Intermediate" },
  { name: "GetX", category: "State Management", level: "Intermediate" },
  { name: "Riverpod", category: "State Management", level: "Intermediate" },
  { name: "Provider", category: "State Management", level: "Intermediate" },
  { name: "Supabase", category: "Backend", level: "Intermediate" },
  { name: "Git", category: "Tool", level: "Advanced" },
  { name: "REST APIs", category: "Tool", level: "Intermediate" },
  { name: "UI/UX Design", category: "Other", level: "Intermediate" },
  { name: "Cybersecurity", category: "Other", level: "Beginner" },
  { name: "Arch Linux", category: "OS", level: "Intermediate" },
]

// ── EDUCATION ────────────────────────────────────────────────

export const education: Education = {
  degree: "B.Sc. in Computer Science",
  school: "ESTIN",
  location: "Béjaia, Algeria",
  year: "2nd Year",
  graduation: "Expected 2027",
  coursework: ["Programming", "Data Structures", "Mobile Development"],
}

// ── HACKATHONS ───────────────────────────────────────────────

export const hackathons: Hackathon[] = [
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

// ── TESTIMONIALS ─────────────────────────────────────────────

// Set to true once you have real testimonials from teammates/professors
export const showTestimonials = false

export const testimonials: Testimonial[] = [
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

// ── LANGUAGES ────────────────────────────────────────────────

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
]

// ── HELPERS ──────────────────────────────────────────────────

export const getFeaturedProjects = () => projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug) ?? null

export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
