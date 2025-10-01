# Peter Rosenberg Official Website

A modern, animated portfolio website for Peter Rosenberg - Radio host, Podcast creator, and Cultural Icon.

## Features

- 🎨 **Stunning Animations** - Framer Motion powered interactions
- 🎭 **Unique Design** - Custom glitch effects, VHS aesthetics, and NYC-inspired visuals
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Lightning Fast** - Built with Next.js 14 and optimized for performance
- 🎵 **Audio Visualizations** - Interactive waveform animations
- 🖼️ **Dynamic Gallery** - Masonry layout with lightbox
- 🔗 **Social Integration** - Direct links to all platforms

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rosenberg/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Hero.tsx         # Hero section with skyline
│   ├── About.tsx        # About section
│   ├── Shows.tsx        # Interactive show cards
│   ├── Interviews.tsx   # Guest showcase with spotlight
│   ├── Gallery.tsx      # Action shots gallery
│   └── Contact.tsx      # Contact and social links
├── public/
│   └── images/          # All image assets
└── [config files]
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `hot97-red`: Hot 97 branding
- `espn-yellow`: ESPN branding
- `wwe-purple`: WWE branding
- `electric-blue`: Accent color

### Content

- **Show Links:** Edit `components/Shows.tsx`
- **Social Links:** Edit `components/Contact.tsx`
- **Bio Text:** Edit `components/About.tsx`
- **Images:** Replace files in `public/images/`

## Deployment

Deploy instantly with Vercel:

```bash
npm install -g vercel
vercel
```

---

Built with 🔥 for Peter Rosenberg
