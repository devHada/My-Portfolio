# DEV. — Personal Portfolio

> Personal portfolio of **Dev Hada** — React Developer based in Jaipur, India.

🔗 **Live:** [devhada.vercel.app](https://devhada.vercel.app)

---

## Tech Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| React + Vite    | Frontend framework |
| Tailwind CSS v4 | Styling            |
| Framer Motion   | Animations         |
| Swiper.js       | Projects carousel  |
| EmailJS         | Contact form       |
| Vercel          | Deployment         |

## Sections

- **Navbar** — Fixed, scroll effect, Framer Motion entrance
- **Hero** — Bold headline, Gojo aesthetic, CTA buttons
- **Projects** — Client, team & personal projects via Swiper
- **Tech Stack** — Grouped skill cards by category
- **About** — Bio, stats grid, resume download
- **Contact** — Social links + working EmailJS form
- **Footer** — Minimal with Google Maps link

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
