# Noor Studio | Luxury Indian Wedding Photography Platform

Welcome to the premium, production-ready codebase for **Noor Studio** — India's premier luxury wedding & editorial photography studio website. 

Built with **TypeScript**, **React**, **Vite**, **Tailwind CSS (v4)**, and **Framer Motion**, this platform delivers an ultra-smooth, high-end experience tailored specifically for the Indian wedding photography market — from Udaipur palaces to Kerala backwaters.

---       

## 🌟 What's Included
npm npm run b
### 📸 Client-Facing Pages
- **Home** — Cinematic hero carousel, photographer intro (Arjun Kapoor, Mumbai), animated stats (500+ weddings), featured showcase, testimonials, awards, Instagram feed, booking CTA
- **Portfolio** — Masonry gallery with Indian wedding categories (Weddings, Haldi & Mehndi, Sangeet & Baraat, Couples & Portraits, Fashion, Cinematic Films, Events) + fullscreen lightbox
- **About** — Arjun's journey, interactive timeline, skills, equipment showcase (Sony A1, Canon R5, Hasselblad, DJI Inspire 3), 4-member team profiles, behind-the-scenes gallery
- **Services & Pricing** — 6 service cards, 3 pricing packages in INR (₹3,50,000 – ₹18,00,000), detailed FAQs covering Indian wedding scenarios
- **Booking** — 5-step multi-step form with Indian event types (Haldi, Sangeet, Baraat, Pheras, Reception), INR budget ranges, guest counter, and booking summary
- **Contact** — Mumbai studio address (Bandra West), IST hours, Indian phone/email, simulated Mumbai map, WhatsApp quick-chat button

### 🔐 Admin Dashboard
- Secure login (`admin` / `password123`)
- **Bookings Manager** — Approve, Reschedule, Cancel, or Delete client bookings
- **Portfolio Asset Manager** — Upload new images via URL, delete existing ones
- **Testimonials Curation** — Add/remove client reviews  

### ✨ Premium UX Features
- Custom dual-ring tracking cursor (amber gold)
- Scroll progress indicator
- Glassmorphic navbar with blur effect
- Smooth page transitions via Framer Motion
- Dark luxury design with Indian warm-amber gold accents
- Fully responsive (mobile, tablet, desktop)
- Persistent localStorage database

---

## 📦 Installation

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to view the site.

```bash
npm run build
```

Builds the production bundle in `dist/`.

---

## 💰 Pricing (INR)

| Package | Price | Coverage |
|---------|-------|----------|
| The Essential Shaadi | ₹3,50,000 | Single day, 1 photographer |
| The Royal Heritage | ₹8,50,000 | 3-day full wedding, 3 photographers + drone |
| The Grand Destiny | ₹18,00,000 | 5-day full crew, international travel included |

---

## 🇮🇳 Indian Destinations Featured

- **Rajasthan**: Taj Lake Palace Udaipur, Mehrangarh Fort Jodhpur, Samode Haveli Jaipur, Neemrana Fort, Jaisalmer Sand Dunes
- **Kerala**: Alleppey Backwaters
- **Goa**: W Goa Vagator Beach
- **Mumbai**: Bandra West Studio, Taj Mahal Palace, Four Seasons
- **Hyderabad**: Taj Falaknuma Palace

---

## 📸 Image Management

### Add Portfolio Images
1. Go to `/admin` → Login → Portfolio Asset Manager
2. Enter image URL, title, category, location, date
3. Click "Publish to Live Portfolio"
4. Image appears instantly in Portfolio page with correct category filter

### Recommended Sizes
- **Wedding Photos**: 1200×1600px (3:4 portrait)
- **Hero/Banner**: 1920×1080px (16:9 landscape)
- **Avatars**: 150×150px (1:1 square)

### Sources for Demo Images
Currently using Unsplash high-quality images. Replace with your own Cloudinary, AWS S3, or hosted URLs.

---

## 🔧 Admin Login

- **URL**: Click the Lock icon in navbar or "Admin Gateway" in footer
- **Username**: `admin`
- **Password**: `password123`

---

## 📱 WhatsApp Integration

Quick-chat buttons link to: `https://wa.me/919820043210`

Replace with your actual studio WhatsApp number.

---

## 🌐 Deployment

### Vercel / Netlify
1. Push to GitHub
2. Connect repository to Vercel/Netlify
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Custom Server
```bash
npm run build
# Serve the dist/ folder with any static server
npx serve dist
```

---

## 🗺️ Tech Stack

- **React 19** with TypeScript
- **Vite 7** for blazing-fast builds
- **Tailwind CSS 4** for styling
- **Framer Motion** for cinematic animations
- **Lucide Icons** for beautiful iconography
- **localStorage** as mock database

---

## 📞 Contact Studio (Demo)

- **Address**: 42 Carter Road, Bandra West, Mumbai 400050
- **Phone**: +91 98200 43210
- **Email**: hello@noorstudio.in
- **Instagram**: @noorstudioindia

---

**Made with ❤️ for Indian love stories.**
