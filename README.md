# 🌐 Moh Faisal — Portfolio

A modern, responsive developer portfolio built with **React + Vite**, featuring glassmorphism cards, smooth animations, a dynamic profile picture system, and a clean dark aesthetic.

**Live →** [your-vercel-url.vercel.app](https://faisal-portfolio-two.vercel.app/)

---

## ✨ Features

- **Glassmorphism UI** — dark gradient cards with glowing top-edge lines and hover lift effects across all sections
- **Profile picture** — click to flip card and view full-screen; falls back to stylised "MF" initials avatar
- **Skill icons** — 3-column grid with Y-axis spin animation on hover
- **About & Timeline** — education / work experience in a clean card layout
- **Get In Touch** — clickable cards for email (`mailto:`), phone (`tel:`), LinkedIn, and GitHub
- **Fully responsive** — mobile-first layout, tested down to 375 px

---

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Vanilla CSS (custom properties, animations) |
| Icons | react-icons |
| Deployment | Vercel |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/maihoonfaisal/faisal-portfolio.git
cd faisal-portfolio

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## 📦 Build & Deploy

```bash
npm run build     # outputs to dist/
```

#### Vercel (recommended)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

The included `vercel.json` handles SPA routing automatically.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css        ← profile picture, flip card, photo viewer
│   ├── About.jsx / .css       ← bio + timeline
│   ├── Skills.jsx / .css      ← icon chip grid
│   ├── Contact.jsx / .css     ← clickable contact cards
│   └── Footer.jsx / .css
├── index.css                  ← global tokens, glass-card, buttons
└── main.jsx
```

---

## 📬 Contact

| | |
|---|---|
| Email | [mohd.anas115000@gmail.com](mailto:mohd.anas115000@gmail.com) |
| LinkedIn | [moh-faisal-977731324](https://www.linkedin.com/in/moh-faisal-977731324) |
| GitHub | [maihoonfaisal](https://github.com/maihoonfaisal) |
