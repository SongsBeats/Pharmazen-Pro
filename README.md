# 🏥 PharmaZen - Complete Digital Healthcare 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

> A next-generation digital ecosystem for pharmacies, distributors, doctors, and patients—automating operations, reducing losses, and enabling digital healthcare.

![PharmaZen Banner](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=400&fit=crop)

---

## ✨ Features

### 🎨 **Visual & Design**
- ✅ **Dark/Light Theme** - Smooth theme toggle with localStorage persistence
- ✅ **Glassmorphism UI** - Modern glass-effect cards and components
- ✅ **Gradient Accents** - Beautiful gradient text and backgrounds
- ✅ **Micro-animations** - Smooth hover effects and transitions
- ✅ **Responsive Design** - Mobile-first, works on all devices

### 📄 **Pages**
- ✅ **Home** - Hero section with animated stats, features, solutions, testimonials, FAQ
- ✅ **Pricing** - Interactive pricing cards with monthly/annual toggle
- ✅ **About** - Company mission, vision, team, timeline
- ✅ **Contact** - Validated form, map integration, social links
- ✅ **Blog** - Article grid with search and category filtering
- ✅ **Privacy Policy** - Comprehensive privacy information
- ✅ **Terms of Service** - Legal terms and conditions

### 🎯 **Interactive Components**
- ✅ **Product Demo Modal** - Step-by-step product walkthrough
- ✅ **Pricing Calculator** - Interactive sliders for custom pricing
- ✅ **Animated Counters** - Number animations on scroll
- ✅ **Testimonials Carousel** - Customer reviews with ratings
- ✅ **FAQ Accordion** - Categorized questions with smooth expand/collapse
- ✅ **Newsletter Popup** - Exit-intent email capture
- ✅ **Cookie Consent** - GDPR-compliant banner
- ✅ **WhatsApp Chat** - Floating chat widget with quick replies

### 🚀 **User Experience**
- ✅ **Scroll Progress Bar** - Visual reading progress indicator
- ✅ **Scroll to Top** - Smooth scroll button
- ✅ **Form Validation** - React Hook Form + Zod validation
- ✅ **Toast Notifications** - User feedback system
- ✅ **Loading States** - Skeleton loaders and spinners

### 🔍 **SEO & Marketing**
- ✅ **Meta Tags** - Complete Open Graph and Twitter Cards
- ✅ **Structured Data** - Schema.org markup
- ✅ **Sitemap.xml** - Search engine sitemap
- ✅ **Robots.txt** - Crawler instructions
- ✅ **Semantic HTML** - Proper heading hierarchy

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3.1 + TypeScript 5.8.3 |
| **Build Tool** | Vite 5.4.19 |
| **Styling** | Tailwind CSS 3.4.17 |
| **UI Components** | shadcn/ui + Radix UI |
| **Animations** | Framer Motion 12.31.0 |
| **Forms** | React Hook Form + Zod |
| **Routing** | React Router DOM 6.30.1 |
| **State Management** | TanStack Query 5.83.0 |
| **Icons** | Lucide React 0.462.0 |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd pharmaflow-connect-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
pharmaflow-connect-main/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Crawler instructions
├── src/
│   ├── components/
│   │   ├── landing/         # Landing page sections
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── PricingCalculator.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AnimatedCounter.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── NewsletterPopup.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── WhatsAppChat.tsx
│   │   ├── ProductDemo.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── Index.tsx        # Home page
│   │   ├── Pricing.tsx      # Pricing page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── Blog.tsx         # Blog page
│   │   ├── Privacy.tsx      # Privacy policy
│   │   ├── Terms.tsx        # Terms of service
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── ENHANCEMENTS.md          # Detailed enhancement docs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Design System

### Colors
```css
--primary: #1FA69A (Teal/Cyan)
--secondary: #2C3E50 (Slate Navy)
--accent: #10B981 (Emerald)
--background: Light/Dark adaptive
```

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Inter

### Components
- Glass-effect cards with backdrop blur
- Gradient text and buttons
- Smooth animations and transitions
- Consistent spacing and padding

---

## 🚀 Features in Detail

### 1. Theme Toggle
```typescript
// Automatic theme detection
// localStorage persistence
// Smooth transitions
// System preference support
```

### 2. Form Validation
```typescript
// React Hook Form + Zod
// Real-time validation
// Error messages
// Toast notifications
```

### 3. Animations
```typescript
// Scroll-triggered animations
// Framer Motion integration
// Stagger effects
// Smooth transitions
```

### 4. SEO Optimization
```typescript
// Meta tags (title, description, keywords)
// Open Graph tags
// Twitter Cards
// Structured data (Schema.org)
// Sitemap and robots.txt
```

---

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized bundle size
- 🎯 **Lazy Loading** - Code splitting ready
- 📱 **Mobile Optimized** - Responsive design
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔒 **Secure** - HTTPS, CSP headers

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_WHATSAPP_NUMBER=919876543210
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
```

### Customization

#### Colors
Edit `tailwind.config.ts` and `src/index.css`

#### Content
Update content in respective page files

#### Images
Replace placeholder images with your own

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

---

## 📈 Analytics Integration

Add Google Analytics:
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Founder & CEO**: Dr. Rajesh Kumar
- **CTO**: Priya Sharma
- **Head of Product**: Amit Patel
- **VP of Operations**: Sneha Reddy

---

## 📞 Support

- **Email**: support@pharmazen.com
- **Phone**: +91 98765 43210
- **Website**: https://pharmazen.com
- **Address**: 123 Healthcare Plaza, Mumbai, Maharashtra 400001

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Unsplash](https://unsplash.com/) for images

---

## 📝 Changelog

### Version 2.0.0 (2026-02-05)
- ✨ Added 4 new pages (Pricing, About, Contact, Blog)
- ✨ Implemented dark/light theme toggle
- ✨ Added 10+ interactive components
- ✨ Enhanced SEO with meta tags and structured data
- ✨ Added form validation
- ✨ Implemented newsletter popup
- ✨ Added cookie consent banner
- ✨ Integrated WhatsApp chat widget
- ✨ Created testimonials section
- ✨ Added FAQ section
- ✨ Implemented pricing calculator
- ✨ Added product demo modal
- ✨ Enhanced scroll experience
- ✨ Improved responsive design

### Version 1.0.0 (Initial Release)
- 🎉 Initial landing page
- 🎨 Basic design system
- 📱 Responsive layout

---

<div align="center">

**Made with ❤️ by the PharmaZen Team**

[Website](https://pharmazen.com) • [Documentation](https://docs.pharmazen.com) • [Support](mailto:support@pharmazen.com)

</div>
