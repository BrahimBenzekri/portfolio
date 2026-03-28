# Brahim Benzekri — Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding a New Project

1. Open `src/data/index.ts`
2. Add a new object to the `projects` array following the `Project` type
3. Add a thumbnail to `public/images/projects/your-image.png`
4. Done — the site updates automatically

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Resend API key:

```bash
cp .env.example .env.local
```

Get a free Resend API key at [resend.com](https://resend.com).

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). Add `RESEND_API_KEY` in Vercel environment variables.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Contact Form:** Resend
- **Deployment:** Vercel
