# Sahil Patel — Portfolio

Personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Theme:** next-themes (dark mode default)
- **Deploy:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

| Route | Page |
|---|---|
| `/` | Hero (animated terminal) |
| `/about` | Bio, skills, education, certifications |
| `/projects` | 5 projects with expandable detail |
| `/experience` | Timeline — Vision Verse & IPR |
| `/resume` | Embedded PDF + download link |

## Updating Content

All content lives in **`src/data/portfolio.ts`**. Edit that file to:
- Add/remove projects
- Update experience bullets
- Change skills

## Deploy to Vercel

1. Push this repo to GitHub (see instructions below)
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Leave all settings as default — Vercel auto-detects Next.js
4. Click **Deploy**

## Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/sahilpatel9910/portfolio.git
git push -u origin main
```
