# BC Café — Editorial Culinary Experience

A premium, custom front-end website for **BC Café** (Anna Nagar, Chennai), built from scratch in Next.js using a high-contrast print-magazine aesthetic. It completely avoids standard AI generation landing page templates in favor of intentional asymmetry, generous white space, and editorial column lines.

---

## 🎨 Design System

- **Sophisticated 3-Color Palette**:
  - **Base Background**: Warm Cream (`#F4F0E6`)
  - **Primary Text**: Deep Charcoal (`#121212`)
  - **Muted Earth Accent**: Earth Bronze (`#8D7B68`)
- **Typography Pairing**:
  - **Headers**: High-contrast, tight-tracked **Playfair Display** serif (e.g., *Brew Better. Fuel Your Day.*).
  - **Body / Labels**: Clean, legible, geometric **Inter** sans-serif.
- **Brutalist Outlines**:
  - Cards, buttons, and elements feature flat layouts, sharp `rounded-none` corners, thin solid border dividers, and zero glowing drop shadows.
  - Hover states feature snappy translate offsets and solid inversions.
  - Asymmetric columns with staggered layout heights (`lg:mt-8` / `lg:mt-16` shifts) break the boring symmetry of common grids.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19, App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

---

## 📦 Features

1. **Editorial Asymmetric Hero**: Large-scale Playfair typography, scroll-triggered text-reveal animations, and framed visual callouts.
2. **Asymmetric Menu Listing**: Staggered cards containing detailed price indexes, vegetable tags, ratings, and checkout actions.
3. **Interactive Menu Grid**: Live search queries, quick tags (Veg Only, Spicy, Popular), and sort indicators (low-high price, rating).
4. **Zustand Cart Drawer**: Smooth slide-out cart sheets listing items, incrementing/decrementing quantities, computing taxes, and cross-selling dessert add-ons.
5. **Multi-Step Checkout**: Simulated ordering flow (Info -> Dine-In/Pickup -> Sandbox Payment Processor).
6. **Order Success & Tracking**: Custom Order ID generators and a live tracking timeline (Received -> Preparing -> Ready) that updates on a 5-second interval.
7. **Coupon Promos**: Promos listing with copy-to-clipboard badges and feedback banners.

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aashishstack/bc-cafe-web.git
   cd bc-cafe-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.

4. **Compile production build**:
   ```bash
   npm run build
   ```

---

## 🚀 GitHub Pages Deployment

The site is configured for static HTML exports. To compile and deploy:

1. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This will automatically build the Next.js static files and deploy them directly to your repository's `gh-pages` branch.
