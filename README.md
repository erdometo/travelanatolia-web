# 🌌 TravelAnatolia Web Client

> Almost magical, AI-driven identity tourism. Step back in time as a Roman Scholar, an Ottoman Spice Merchant, or a Hittite Sculptor to experience Turkey's deepest secrets.

**TravelAnatolia** is a state-of-the-art web portal designed to offer immersive, narrative-driven historical journeys across Turkey. By aligning modern travel coordinates with ancient Anatolian souls, travelers step into personalized historical chronicles, complete with day-by-day interactive diaries.

🌐 **Production Site:** [travelanatolia.com](https://travelanatolia.com)  
⚡ **Default Host:** [travelanatolia-prod.web.app](https://travelanatolia-prod.web.app)

---

## ✨ Features

- **🎭 Interactive Identity Showcase**: Live-preview historical personas (Byzantine Scholars, Ottoman Calligraphers, and Silk Road Merchants) and observe how their focus, route narratives, and sensory quotes reshape travel pathways.
- **🔮 Portal Synthesizer**: Immersive configurator where users select their historical avatar, target location, and contemplation pace. Experience a multi-stage animated loading chronicle ("Consulting Byzantine codices...", "Aligning cosmic routes...") resulting in rich, first-person travel logs.
- **🗺️ Curated Historical Walks**: Stunning grids of curated paths (e.g. Subterranean Monastic Quests in Cappadocia, Stoic Walks in Ephesus, Seljuk star studies in Konya) filterable by era.
- **🔑 Firebase Portal Access**: Secure authentication using Email/Password profiles and Google OAuth, integrated with the `travelanatolia-prod` console.
- **🌠 Silicon Valley Aesthetics**: Sleek dark-mode interface utilizing glassmorphism (`backdrop-filter`), floating ambient background glow mesh drift, and interactive glowing card borders.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Static HTML Export)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS custom variables
- **Animations:** Custom CSS animations and smooth transitions
- **Backend/Auth:** [Firebase client SDK](https://firebase.google.com/) (Authentication & Firestore configs)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Directory Layout

```
travelanatolia-web/
├── src/
│   ├── app/
│   │   ├── explore/         # Curated tours page
│   │   ├── sign-in/         # Portal sign-in & Google OAuth
│   │   ├── try-it/          # Immersive Chronology Portal Synthesizer
│   │   ├── globals.css      # Custom dark-theme glassmorphic tokens
│   │   ├── layout.tsx       # Floating island layout with ambient glow meshes
│   │   └── page.tsx         # Magical landing homepage with switcher
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx   # Premium interactive button variants
│   │   └── navbar.tsx       # Responsive glassmorphic floating navigation
│   └── lib/
│       └── firebase.ts      # Firebase Auth/Firestore SDK integration
├── public/                  # Global assets
├── firebase.json            # Target hosting configurations (static export)
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisite Installations
Ensure you have [Node.js](https://nodejs.org/) installed. Install project dependencies:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the local environment.

### 3. Production Build & Static Export
To generate the highly optimized, production-ready static assets (output to `out/` directory):
```bash
npm run build
```

---

## ☁️ Deployment

This client is statically hosted via **Firebase Hosting**.

### Direct CLI Deploy
To compile the static pages and push directly to `travelanatolia-prod` Firebase Hosting:
```bash
# Verify build
npm run build

# Deploy to Firebase
firebase deploy
```

### Domain Redirection Setup (SEO Best Practice)
To bind `travelanatolia.com` and redirect `www.travelanatolia.com` to the root:
1. Under **Firebase Console -> Hosting**, add `travelanatolia.com` as a custom domain.
2. In Cloudflare, point DNS records to the provided origin IP addresses.
3. Add `www.travelanatolia.com` inside Firebase Console and select **Redirect to travelanatolia.com**.
4. Configure Cloudflare SSL/TLS to **Full** or **Full (strict)** to resolve redirection loops.
