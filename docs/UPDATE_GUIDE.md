# Portfolio Update Guide

Welcome to the documentation for modifying and updating your developer portfolio. This application is designed to be effortlessly maintainable. Almost all content changes can be made without touching a single React component file!

## 1. The Single Source of Truth (`src/data/index.ts`)
All of your portfolio's data lives in one file: `src/data/index.ts`.
Any edits you make to strings, arrays, or objects in this file will automatically populate across all pages and sections of the website.

---

## 2. Updating Personal Information
To change your name, titles, bio, email, or social links, open `src/data/index.ts` and locate the `meta` object at the top.

```typescript
export const meta = {
  name: "Brahim Benzekri",
  title: "Flutter Developer",
  subtitle: "...", // Short bio 
  email: "b_benzekri@estin.dz",
  // Update your social links or texts here
}
```

---

## 3. Adding or Updating Projects
Your portfolio automatically builds the project grid, featured projects on the home page, and individual project detail pages from the `projects` array in `src/data/index.ts`.

### How to add a new project:
1. Prepare a thumbnail image (e.g., `new-project.png`) and save it in the `public/images/projects/` directory.
2. Open `src/data/index.ts` and scroll to the `projects` array.
3. Add a new object following the `Project` structure. Example:

```typescript
{
  slug: "project-name-url", // This will be the URL: /projects/project-name-url
  title: "My Awesome Project",
  badge: "Personal Project", // E.g., Hackathon name, or null if none
  status: "Done", // Must be "Done" or "In Development"
  featured: true, // true = shows on Home page grid (top 3 recommended)
  shortDesc: "A brief one sentence description.",
  fullDesc: "A longer description for the project detail page.",
  stack: ["Flutter", "Dart", "Supabase"],
  github: "https://github.com/...", // Or null
  demo: "https://...", // Or null
  thumbnail: "/images/projects/new-project.png", // Must match the file you saved
  features: ["Feature 1", "Feature 2"],
  role: "Lead Mobile Developer",
  challenges: [
    {
      challenge: "What was hard?",
      solution: "How did you solve it?"
    }
  ],
  images: [
    // Additional screenshots (optional)
    "/images/projects/new-project-1.png", 
  ]
}
```

Once saved, the portfolio will seamlessly create the grid card and auto-generate the detail page!

---

## 4. Managing Skills
To add a new skill to the "Skills" section, locate the `skills` array in `src/data/index.ts` and append a new line:

```typescript
{ name: "PostgreSQL", category: "Database", level: "Intermediate" }
```
The icon will automatically be resolved based on the software `name` (using the Simple Icons API or identical library mapping). If no matching logo is found, a generic code icon will appear.

---

## 5. Adding Hackathons & Testimonials
As you participate in more events or receive praise from colleagues, simply append objects to the arrays at the bottom of `src/data/index.ts`:

- **Hackathons**: Populate the `hackathons` array. Remember it dynamically maps to the badge strip if styled to show.
- **Testimonials**: Populate the `testimonials` array. **Crucial step:** Remember to change `export const showTestimonials = false` to `true` to unhide the Testimonials section carousel on the Home page once you have actual quotes.

---

## 6. Updating your CV
To update your downloadable CV link:
1. Generate your new PDF.
2. Ensure it is named exactly `Brahim_Benzekri_CV.pdf`.
3. Save it and replace the older version in the `public/cv/` folder.

If you ever change the file name, make sure to update the `cvUrl` parameter within the `meta` object in `src/data/index.ts` to point to the new exact path (e.g., `/cv/New_Name.pdf`).

---

## 7. Changing Design Elements (Colors & Fonts)
If you wish to refresh the visual identity of the portfolio later on:
- **Colors**: Open `src/app/globals.css` and locate the `:root` variables (`--bg-primary`, `--accent`, etc.). Updating the hex codes here will change the aesthetic sitewide.
- **Fonts**: The font configuration is managed in `src/app/layout.tsx` (currently setup using `Hanken Grotesk` from `next/font/google`). `tailwind.config.ts` extends these variables.

---

## 8. Deployment
When you have made your customized changes:
1. Stage your changes: `git add .`
2. Commit them: `git commit -m "Update portfolio project content"`
3. Push to your repository main branch: `git push origin main`
4. Vercel will automatically trigger a new build and deploy your live site!
