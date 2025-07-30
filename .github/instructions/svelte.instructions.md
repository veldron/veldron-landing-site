# Veldron Landing Site - Development Instructions

## 🚀 Project Overview

This is a **SvelteKit-based landing site** for Veldron's AI agent consultancy services, featuring modern design with Tailwind CSS and static site generation for optimal performance.

### Tech Stack
- **SvelteKit 4.0** - Full-stack web framework with static adapter
- **Tailwind CSS 3.1** - Utility-first CSS framework with custom theme
- **Vite 5.4** - Build tool and development server
- **Bun** - Package manager and runtime (preferred over npm/yarn)
- **PostCSS & Autoprefixer** - CSS processing
- **Google Fonts** - Inter & Poppins for modern typography

## 📦 Setup & Installation

### Prerequisites
- **Bun** (package manager)
- **Node.js** 18+ (for compatibility)

### Initial Setup
```bash
# Clone and install dependencies
bun install

# Start development server
bun run dev
# Site available at http://localhost:5173

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🏗️ Project Structure

```
src/
├── routes/                 # SvelteKit routing
│   ├── +layout.svelte     # Global layout with navigation
│   ├── +layout.js         # Layout configuration
│   ├── +page.svelte       # Homepage with component imports
│   └── +page.js           # Page configuration
├── lib/                   # Reusable components (19 components)
│   ├── Hero_section.svelte         # Main landing section
│   ├── Features_section.svelte     # AI agent features grid
│   ├── AI_usecases_section.svelte  # SMB case studies
│   ├── AI_stats_section.svelte     # ROI metrics
│   ├── Pricing_section.svelte      # Service tiers
│   ├── Contact_form.svelte         # Lead capture form
│   ├── Footer_section.svelte       # Site footer
│   └── image_components/           # Visual elements
├── assets/                # Static assets
│   ├── css/index.css     # Global styles & Tailwind imports
│   ├── fonts/            # Custom font files (legacy)
│   ├── images/           # Component images
│   └── data/             # JSON data files
└── app.html              # HTML template

static/                   # Public assets served as-is
docs/                    # Built static site (GitHub Pages)
```

## 🎨 Design System

### Typography
- **Primary Font**: Inter (body text, forms, buttons)
- **Display Font**: Poppins (headings, hero text)
- **Font Import**: Via CSS `@import` in `src/assets/css/index.css`

### Color Palette
```javascript
colors: {
  'primary': {
    light: "#6F3FFF",
    DEFAULT: "#5821FF", 
    dark: "#340FA5"
  },
  'secondary': {
    light: "#62F8D3",
    DEFAULT: "#0FCD9D",
    dark: "#04906D"
  }
}
```

### Component Styling
- **Utility Classes**: `.card-shadow`, `.card-hover`, `.hero-gradient`
- **Modern Effects**: Gradients, shadows, smooth transitions
- **Responsive**: Mobile-first design with Tailwind breakpoints

## 🧩 Component Architecture

### Core Landing Page Components (in order)
1. **Hero_section** - Value proposition with CTA
2. **Main_features_section** - Overview with animations  
3. **Features_section** - 6 AI agent types grid
4. **AI_usecases_section** - 3 SMB success stories
5. **AI_stats_section** - ROI metrics (dark theme)
6. **Clients_section** - Logo carousel
7. **Contact_form** - Lead capture with validation
8. **Footer_section** - Links and contact info

### Component Guidelines
- **Single Purpose**: Each component handles one section
- **Props**: Minimal, prefer composition over configuration
- **Styling**: Tailwind classes, no scoped styles
- **Imports**: Use `$lib/` alias for clean imports

## 📝 Coding Standards

### 1. Code Formatting
```svelte
<!-- Use consistent 2-space indentation -->
<script>
  import Component from '$lib/Component.svelte';
</script>

<!-- Single quotes for strings unless interpolation needed -->
<div class="text-primary">
  <span>{`Dynamic content: ${variable}`}</span>
</div>
```

### 2. Component Structure
```svelte
<!-- Script block first -->
<script>
  // Imports
  // Component logic
  // Event handlers
</script>

<!-- Optional: svelte:head for SEO -->
<svelte:head>
  <title>Page Title</title>
  <meta name="description" content="..." />
</svelte:head>

<!-- Template with proper nesting -->
<section class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2">
    <!-- Content -->
  </div>
</section>
```

### 3. Import Standards
```svelte
<script>
  // Use $lib alias for internal components
  import Hero from '$lib/Hero_section.svelte';
  import Features from '$lib/Features_section.svelte';
  
  // Ensure all components are properly imported and used
  // Remove unused imports
</script>
```

### 4. Package Manager
- **Use Bun exclusively** - NOT npm or yarn
- Commands: `bun install`, `bun run dev`, `bun run build`
- Lock file: `bun.lock` (committed to repo)

## 🌐 SEO & Performance

### Meta Tags & Structured Data
- **Focus**: "AI agents for small business"
- **Target**: SMB owners, entrepreneurs
- **Schema.org**: Organization and Service markup
- **Open Graph**: Social media previews

### Static Site Generation
- **Adapter**: `@sveltejs/adapter-static`
- **Output**: `docs/` folder for GitHub Pages
- **Prerendering**: All routes pre-rendered at build time
- **Performance**: ~95+ Lighthouse scores

## 🚀 Deployment

### GitHub Pages Setup
1. **Build Command**: `bun run build`
2. **Output Directory**: `docs/` 
3. **Custom Domain**: Configured in `svelte.config.js`
4. **Auto Deploy**: Push to `github-pages` branch

### Build Process
```bash
# Production build
bun run build

# Files generated in docs/ directory
# Ready for static hosting (GitHub Pages, Netlify, Vercel)
```

## 🔧 Configuration Files

### Key Configurations
- **`svelte.config.js`** - SvelteKit + static adapter config
- **`vite.config.js`** - Vite build configuration  
- **`tailwind.config.cjs`** - Custom theme & fonts
- **`postcss.config.cjs`** - CSS processing
- **`package.json`** - Scripts and dependencies

### Environment Considerations
- **Development**: Hot reload with Vite HMR
- **Production**: Static files, optimized assets
- **Fonts**: Google Fonts for web performance

## 🐛 Common Issues & Solutions

### Font Loading
- **Issue**: FOUC (Flash of Unstyled Content)
- **Solution**: Fonts loaded via CSS `@import` in main stylesheet

### Component Errors  
- **Issue**: Import path errors
- **Solution**: Use `$lib/` alias consistently

### Build Failures
- **Issue**: Bun compatibility  
- **Solution**: Ensure using Bun for all operations, not npm

### Static Assets
- **Issue**: Image paths in production
- **Solution**: Use `/assets/` prefix for static files

## 📚 Development Workflow

1. **Start Development**: `bun run dev`
2. **Create Component**: Add to `src/lib/`
3. **Import Component**: Use in `+page.svelte` 
4. **Style Component**: Apply Tailwind classes
5. **Test Changes**: Hot reload automatically updates
6. **Build & Deploy**: `bun run build` → commit `docs/` folder

## 🎯 Business Context

This landing site targets **small-to-medium business owners** looking to implement AI automation. The content emphasizes:

- **24/7 AI Agent Availability**
- **Cost Reduction** (40% savings highlighted)  
- **Productivity Gains** (3x improvement claims)
- **Easy Implementation** (no technical expertise required)
- **SMB-Specific Use Cases** (restaurants, real estate, services)

All development should maintain this business focus while ensuring technical excellence and modern web standards.