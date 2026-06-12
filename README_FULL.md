# ShopDropz - Modern Automotive Service Platform

> **Digital Vehicle Drop-Off. Real-Time Service Visibility. Better Customer Experiences.**

A modern, production-ready Next.js web application showcasing the ShopDropz automotive service management platform. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and fully responsive design with dark mode support.

## 📋 Features

- ✨ **Hero Section** - Eye-catching introduction with animated mockups
- 📊 **Problem/Solution Section** - Clear pain point and benefit visualization
- 🔄 **5-Step Workflow** - Interactive process timeline
- 💼 **Customer Benefits** - Key advantages for end-users
- 🏢 **Business Benefits** - ROI and operational advantages
- 📱 **Platform Features** - Comprehensive feature listing
- 🎯 **Target Customers** - Market segments with icons
- 📈 **Comparison Table** - Traditional vs. ShopDropz methods
- ⭐ **Why ShopDropz** - Value propositions
- 🚀 **Call-to-Action** - Contact and conversion section
- 🔗 **Footer** - Navigation and social links

### Technical Highlights

- ✅ **Next.js 15 (App Router)** - Latest stable framework with server and client components
- ✅ **TypeScript** - Full type safety across the application
- ✅ **Tailwind CSS v4** - Utility-first styling with modern features
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **Dark Mode** - Automatic system preference detection and manual toggle
- ✅ **SEO Optimized** - Metadata, Open Graph, Twitter cards, structured data
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Accessibility** - WCAG compliant, keyboard navigation, focus states
- ✅ **Performance** - Image optimization, static generation, code splitting
- ✅ **Production Ready** - Linting, type checking, optimized build

## 🏗️ Project Structure

```
d:\ShopDropz/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Homepage with all sections
│   ├── globals.css             # Global styles and animations
│   └── favicon.ico
├── components/
│   ├── ui/                     # Reusable UI primitives
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── WorkflowSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TargetCustomersSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   └── CTASection.tsx
│   └── providers/
│       └── ThemeProvider.tsx    # Dark mode provider
├── lib/
│   ├── types.ts                # TypeScript type definitions
│   └── content.ts              # All structured content data
├── public/                     # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.js         # Tailwind CSS config
├── next.config.ts             # Next.js config
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build & Deployment

### Development

```bash
# Start dev server with hot reload
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Export Static Site

```bash
# Build generates optimized static pages in .next/
npm run build
# Output: Static HTML pages ready for hosting
```

## 🎨 Customization

### Content Changes

Edit content in [lib/content.ts](lib/content.ts):

```typescript
export const heroContent: HeroContent = {
  title: 'Your custom title',
  subtitle: 'Your custom subtitle',
  description: 'Your custom description',
  cta: {
    primary: 'Button Text',
    secondary: 'Button Text',
  },
};
```

### Theme Customization

Modify colors and styling in [tailwind.config.js](tailwind.config.js):

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#2563eb',   // Primary blue
        secondary: '#a3e635', // Lime accent
      },
    },
  },
},
```

### Component Styling

Edit component styles directly in Tailwind classes:

```tsx
// Example: Button component
className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500"
```

## 🌙 Dark Mode

Dark mode is automatically enabled based on system preferences. Users can manually toggle via the theme provider.

The theme is persisted in `localStorage` and applied on page load.

## ♿ Accessibility

- **Semantic HTML** - Proper heading hierarchy, semantic elements
- **ARIA Labels** - Descriptive labels for interactive elements
- **Keyboard Navigation** - All interactive elements keyboard accessible
- **Focus Management** - Clear focus indicators
- **Color Contrast** - WCAG AA compliant contrast ratios

## 📊 Performance

### Metrics

- **First Load JS**: ~347 kB (shared across all routes)
- **Route Size**: ~245 kB (main page)
- **Static Generation**: Prerendered as static content

### Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind (purged unused styles)
- Code splitting via dynamic imports
- Static site generation (SSG) for fast loading

## 🔍 SEO

### Features

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing cards
- **Twitter Cards** - Twitter-specific sharing
- **Canonical URLs** - Prevent duplicate content
- **Structured Data** - JSON-LD ready

### Meta Configuration

Edit in [app/layout.tsx](app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: [...],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    // ...
  },
};
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Create optimized build
npm start            # Start production server

# Quality
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Check TypeScript types
```

## 📱 Responsive Breakpoints

Tailwind CSS responsive breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎬 Animations

Framer Motion animations include:

- **Fade In/Up** - Staggered section reveals
- **Scale** - Icon hover effects
- **Rotate** - Loading and decorative animations
- **Slide** - Timeline step indicators
- **Hover Effects** - Interactive element feedback

## 🔐 Security

- No sensitive data in client-side code
- HTTPS ready for production
- CSP headers recommended for production
- Regular dependency updates via npm

## 📝 License

© 2026 ShopDropz. All Rights Reserved.

## 📞 Support

For questions or support:
- Contact: Steve Danzig
- Phone: +1 866-507-3767
- Website: https://shopdropz.com

## 🤝 Contributing

This is a demo/showcase application. For modifications:

1. Edit content in `lib/content.ts`
2. Modify components in `components/`
3. Update styles in `tailwind.config.js`
4. Run `npm run build` to verify changes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lucide React Icons](https://lucide.dev/)

---

**Built with ❤️ using modern web technologies**
