# DEV. — Personal Portfolio

> Personal portfolio of **Dev Hada** — React Developer based in Jaipur, India.
> Built from scratch with React, Tailwind CSS v4, and Framer Motion.

🔗 **Live:** [devhada.vercel.app](https://devhada.vercel.app)

---

## About

I'm a final-year BCA student who builds and ships real products — not just tutorial projects.
This portfolio was designed and developed entirely by me, featuring live client work, a hackathon team project, and personal builds.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React + Vite | Frontend framework & build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Page & scroll animations |
| Swiper.js | Projects carousel |
| EmailJS | Contact form email delivery |
| Vercel | Deployment & hosting |

---

## Features

- Custom animated cursor with hover state detection
- Framer Motion scroll-triggered animations on every section
- Fully working contact form powered by EmailJS
- Swiper.js project carousel with responsive breakpoints
- Resume download from About section
- Mobile responsive across all sections
- Touch device cursor detection — custom cursor hidden on mobile

---

## Sections

- **Navbar** — Fixed top bar with scroll blur effect and Framer Motion entrance
- **Hero** — Bold headline, Gojo aesthetic, animated CTA buttons
- **Projects** — Client, team & personal projects with category badges
- **Tech Stack** — Grouped skill cards by category
- **About** — Bio, stats grid and resume download
- **Contact** — Social links and working contact form
- **Footer** — Minimal with live Google Maps link

---

## Challenges & Solutions

**1. Custom cursor bleeding onto touch devices**
The cursor component was rendering on mobile even though touch users don't have a mouse. Fixed by detecting `pointer: coarse` via `window.matchMedia` and returning null from the component on touch devices.

**2. EmailJS template variable mismatch**
Form was submitting but emails weren't populating correctly. The JS object keys `from_name` and `from_email` didn't match the template variables `{{name}}` and `{{email}}`. Fixed by aligning both to use the same variable names.

**3. Swiper.js breakpoints not responding**
Slides were stuck at 3 on all screen sizes. Fixed by moving `spaceBetween` inside each breakpoint config object instead of defining it at the top level.

---

## Run Locally
```bash
git clone https://github.com/devHada/My-Portfolio
cd My-Portfolio
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Add the same variables in Vercel dashboard under **Settings → Environment Variables** before deploying.

---

Built with ❤️ by Dev Hada. Shinzou wo Sasageyo 🗡️

---

## Preview

![Portfolio Preview](./public/preview.png)
