# Demoulder Portfolio

Personal portfolio website for Demoulder — Marketing Director & Creative Strategist.

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/YOUR_USERNAME/demoulder-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~2 minutes

No environment variables needed — this is a fully static site.

## Customization
- Update contact email in `components/Contact.tsx`
- Edit portfolio case studies, testimonials, and services in `lib/data.ts`
- Swap your name/bio in `components/Hero.tsx` and `components/About.tsx`
