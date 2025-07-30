# Veldron Landing Site

A modern landing site built with SvelteKit and Tailwind CSS.

## 🚀 Project Setup

This project has been migrated from vanilla Svelte to SvelteKit with static site generation.

### Tech Stack
- **SvelteKit** - Full-stack web framework
- **@sveltejs/adapter-static** - Static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Your site will be available at `http://localhost:5173/`

## 🏗️ Building

Create a production build:

```bash
npm run build
```

The static site will be generated in the `build/` directory.

## 👀 Preview

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── routes/           # SvelteKit routes
│   ├── +layout.svelte   # Global layout
│   ├── +page.svelte     # Homepage
│   └── +page.js         # Page configuration
├── lib/              # Reusable components
├── assets/           # Static assets (CSS, JS, images)
└── app.html          # App template

static/               # Static files served as-is
```

## 🔧 Configuration

- **svelte.config.js** - SvelteKit configuration with static adapter
- **vite.config.js** - Vite build configuration
- **tailwind.config.cjs** - Tailwind CSS configuration
- **postcss.config.cjs** - PostCSS configuration

## 📤 Deployment

Since this uses the static adapter, you can deploy the `build/` directory to any static hosting service like:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## ✨ Features

- **Static Site Generation** - Pre-rendered for optimal performance
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component Architecture** - Modular and reusable Svelte components
- **Modern Development** - Hot module replacement and fast builds
