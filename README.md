# Stiven Ntoktorov — Developer Portfolio

**Live Site:** [stevedok22.github.io/Project-CV-Code-0.2](https://stevedok22.github.io/Project-CV-Code-0.2/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=flat&logo=github)

---

## Overview

A responsive, dark-theme personal portfolio built with vanilla HTML, CSS, and JavaScript. Designed to present a FinTech-focused development profile with clean navigation, animated sections, and direct access to CV and project work.

The site covers six pages: Home, About, Skills, Projects, Experience, and Contact.

---

## Features

- Animated hero section with floating tech badges and parallax glow
- Full-page loading screen with progress animation
- Responsive navigation with mobile hamburger menu
- Project cards with live demo and GitHub links
- Skills grid with category grouping (ML, FinTech, DevOps, Languages)
- Timeline-based experience section
- Contact form with mailto fallback
- CV download button linking to the latest PDF

---

## Pages

| Page | Description |
|---|---|
| Home | Hero section, stats, tech stack preview, featured projects |
| About | Background story, journey timeline, personal values |
| Skills | Full tech stack by category, trading expertise, languages |
| Projects | Filterable project grid with live demos |
| Experience | Work history, education, certifications, references |
| Contact | Contact form, social links, CV download |

---

## Tech Stack

- HTML5 — semantic structure
- CSS3 — custom properties, Grid, Flexbox, keyframe animations
- JavaScript ES6+ — Intersection Observer, scroll events, counter animations
- Lucide Icons — iconography (inline SVG for brand icons)
- Devicon CDN — technology logos
- Google Fonts — Outfit, Space Grotesk, JetBrains Mono

---

## Project Structure

```
Project-CV-Code-0.2/
├── index.html
├── css/
│   ├── style.css          # Global styles, variables, navigation
│   ├── home.css           # Hero, stats, tech preview, projects grid
│   ├── pages.css          # Shared inner page styles
│   └── loader.css         # Loading screen animation
├── pages/
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   ├── experience.html
│   └── contact.html
└── assets/
    ├── images/
    │   ├── profile-formal0.jpg
    │   ├── profile-photo.jpg
    │   ├── bg-network.jpg
    │   └── projects/
    ├── videos/
    │   └── bb2.mp4
    └── cv/
        └── STIVEN-CV-FinTech-2026.pdf
```

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/SteveDok22/Project-CV-Code-0.2.git
cd Project-CV-Code-0.2

# Serve locally
python -m http.server 8000
# or
npx live-server
```

Open `http://localhost:8000` in your browser.

---

## Deployment

Deployed via GitHub Pages from the `main` branch. Any push to `main` triggers an automatic redeploy.

To deploy your own fork:
1. Fork the repository
2. Go to Settings > Pages
3. Set source to `main` branch, root `/`
4. Site will be live at `https://your-username.github.io/Project-CV-Code-0.2/`

---

## Featured Projects Shown

- **Credit Card Fraud Detection** — XGBoost, SHAP, Keras, Streamlit, Heroku
- **TradeSim Pro** — Django, React, PostgreSQL, Binance API, Heroku
- **PacifiqueTrade Indicator 2.0** — Python, Pine Script, Telegram API
- **FinTrack Dashboard** — JavaScript, Chart.js, GitHub Pages
- **MoneyMind Survey Analyzer** — Python, pandas, Google Sheets API
- **HYPE Specialty Coffee** — HTML5, CSS3, SVG Animations

---

## Browser Support

Tested and confirmed on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, and iOS Safari.

---

## Credits

- Design and development: Stiven Ntoktorov
- Icons: [Lucide](https://lucide.dev) and [Devicon](https://devicon.dev)
- Fonts: [Google Fonts](https://fonts.google.com)
- Training: [Code Institute](https://codeinstitute.net) — Full-Stack Software Development Diploma, AI Cores Specialization

---

## Contact

**Stiven Ntoktorov**
Zürich, Switzerland
[s.doktorov123@gmail.com](mailto:s.doktorov123@gmail.com)
[linkedin.com/in/stiven-ntoktorov-304aa5296](https://www.linkedin.com/in/stiven-ntoktorov-304aa5296/)
[github.com/SteveDok22](https://github.com/SteveDok22)