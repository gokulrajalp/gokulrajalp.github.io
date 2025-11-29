# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Navigate to project directory**
   ```bash
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
   The app will open at `http://localhost:4200`

## 📝 Important Notes

### GSAP ScrollTrigger
This project uses GSAP ScrollTrigger plugin. If you encounter any issues:
- ScrollTrigger is included with GSAP but may require a license for commercial use
- For development, it should work without issues
- For production, consider purchasing a GSAP Club membership or use alternative scroll libraries

### Email Service
The contact form currently uses a mock email service. To enable real email sending:
1. Choose an email service provider (EmailJS, SendGrid, etc.)
2. Update `src/app/services/email.service.ts`
3. Add API keys to environment variables

### Images
Project images are currently using Unsplash placeholders. Replace them with your actual project images:
- Update image URLs in `src/app/data/portfolio.data.ts`
- Or add images to `src/assets/images/` and reference them

## 🎨 Customization

### Update Personal Info
Edit `src/app/data/portfolio.data.ts`:
- Projects array
- Services array
- Milestones array
- Social links

### Change Colors
- Edit `tailwind.config.js` for Tailwind colors
- Edit `src/styles.scss` for global styles

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use different port
ng serve --port 4201
```

### GSAP Errors
- Ensure GSAP is properly installed: `npm install gsap`
- Check browser console for specific error messages

## 📦 Build for Production

```bash
npm run build --configuration production
```

Output will be in `dist/gokulraja-portfolio/`

## 🌐 Deploy

### Netlify
1. Build the project
2. Drag and drop `dist/gokulraja-portfolio` folder
3. Configure redirects: `/* /index.html 200`

### Vercel
1. Connect GitHub repository
2. Vercel will auto-detect Angular
3. Deploy automatically

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href=/repository-name/
npx angular-cli-ghpages --dir=dist/gokulraja-portfolio
```

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Configure email service
- [ ] Test all pages and links
- [ ] Optimize images
- [ ] Test on mobile devices
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Configure SEO meta tags

---

**Need Help?** Check the main README.md for detailed documentation.

