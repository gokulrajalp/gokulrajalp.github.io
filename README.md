# Gokulraja L P - Portfolio Website

A premium, animation-heavy Angular 18 portfolio website showcasing the work and services of Gokulraja L P, Indian Entrepreneur & Founder of Gentrobyte AI Labs.

## 🚀 Features

- **Ultra-Premium Design**: Futuristic, clean, and visually world-class UI
- **Heavy Animations**: GSAP-powered animations, scroll-triggered effects, and micro-interactions
- **3D Parallax Effects**: Smooth parallax animations and gradient blob backgrounds
- **Glassmorphism UI**: Modern glass effects with soft gradients
- **Dark Theme**: Neon accents (Turquoise, Purple, Electric Blue)
- **Fully Responsive**: Optimized for desktop and mobile devices
- **Lazy Loading**: Performance-optimized with lazy-loaded routes
- **Preloader Animation**: Smooth loading experience
- **Animated Cursor**: Custom cursor with smooth tracking
- **Smooth Scrolling**: Enhanced scroll experience

## 📋 Pages

1. **Home**: Hero section with animated name reveal, parallax effects, and service previews
2. **About**: Profile, journey timeline, and vision section
3. **Services**: AI Agent Development, Software Development, Digital Marketing Support
4. **Projects**: Portfolio grid with modal details
5. **Contact**: Animated contact form with email service integration

## 🛠️ Tech Stack

- **Angular 18**: Latest Angular framework
- **TypeScript**: Type-safe development
- **GSAP**: Advanced animations and scroll triggers
- **TailwindCSS**: Utility-first CSS framework
- **SCSS**: Enhanced styling capabilities
- **RxJS**: Reactive programming

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

## 🏗️ Build

**Development build:**
```bash
npm run build
```

**Production build:**
```bash
npm run build --configuration production
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── animated-cursor/    # Custom animated cursor
│   │   ├── footer/             # Footer component
│   │   ├── navigation/         # Navigation bar
│   │   └── preloader/          # Loading screen
│   ├── data/
│   │   └── portfolio.data.ts   # Mock data (projects, services, milestones)
│   ├── pages/
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── home/               # Home page
│   │   ├── projects/           # Projects page
│   │   └── services/            # Services page
│   ├── services/
│   │   ├── animation.service.ts   # GSAP animation utilities
│   │   ├── email.service.ts       # Email service
│   │   └── theme.service.ts       # Theme management
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/                     # Static assets
├── index.html
├── main.ts
└── styles.scss                 # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `src/app/data/portfolio.data.ts` to update:
- Projects
- Services
- Milestones
- Social media links

### Modify Colors

Update the color scheme in:
- `tailwind.config.js` - Tailwind color definitions
- `src/styles.scss` - Global color variables

### Add/Remove Pages

1. Create new component in `src/app/pages/`
2. Add route in `src/app/app.routes.ts`
3. Update navigation in `src/app/components/navigation/`

## 📧 Email Service Integration

The contact form uses a mock email service. To integrate with a real service:

1. Update `src/app/services/email.service.ts`
2. Choose a service provider (SendGrid, EmailJS, AWS SES, etc.)
3. Add API keys to environment variables
4. Update the `sendEmail()` method

## 🌐 Social Media Links

Update social media links in `src/app/data/portfolio.data.ts`:

```typescript
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/gokulrajalp',
  instagram: 'https://www.instagram.com/gokulrajalp',
  github: 'https://github.com/gokulrajalp',
  twitter: 'https://twitter.com/gokulrajalp'
};
```

## 🎭 Animation Features

- **GSAP ScrollTrigger**: Scroll-triggered animations
- **Parallax Effects**: Multi-layer parallax backgrounds
- **Text Reveals**: Wipe and fade animations
- **Counter Animations**: Number counting effects
- **Stagger Animations**: Sequential element animations
- **Hover Effects**: Interactive card and button animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build --configuration production
```

### Deploy to Netlify/Vercel
1. Build the project
2. Deploy the `dist/gokulraja-portfolio` folder
3. Configure routing for SPA (redirect all routes to index.html)

### Deploy to GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href=/repository-name/
npx angular-cli-ghpages --dir=dist/gokulraja-portfolio
```

## 📝 License

This project is private and proprietary.

## 👤 Author

**Gokulraja L P**
- Founder of Gentrobyte AI Labs
- Indian Entrepreneur
- LinkedIn: [gokulrajalp](https://www.linkedin.com/in/gokulrajalp)
- GitHub: [gokulrajalp](https://github.com/gokulrajalp)

## 🙏 Acknowledgments

- GSAP for powerful animation library
- TailwindCSS for utility-first styling
- Angular team for the amazing framework

---

**Built with ❤️ by Gokulraja L P**

# gokulrajalp - Portfolio Website
