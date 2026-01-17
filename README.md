# 🚀 Portfolio Website - Pradip Mourya

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and comprehensive project showcase.

## 🌟 Features

- **Modern Design**: Clean, professional UI with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Working contact form with EmailJS integration
- **Analytics Dashboard**: Real-time visitor analytics and statistics
- **Project Showcase**: Dynamic project gallery with filtering capabilities
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

### Backend & Services
- **EmailJS** - Contact form email service
- **Vercel/Netlify** - Deployment platforms

### Development Tools
- **ESLint** - Code linting
- **Jest** - Testing framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── analytics/         # Analytics dashboard
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page with EmailJS
│   ├── projects/          # Projects showcase
│   ├── skills/            # Skills page
│   ├── assets/            # Static assets (images)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── analytics/        # Analytics components
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   ├── ProjectCard.tsx   # Project display card
│   └── ...
├── data/                 # Static data files
│   ├── projects.json     # Project data (backup)
│   └── visitors.json     # Analytics data
├── lib/                  # Utility functions and data
│   └── projectsData.ts   # Project data management
├── __tests__/            # Test files
└── public/               # Public assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pradip1232/my-poortfolio.git
   cd my-poortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # EmailJS Configuration (Optional)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Create Email Service**
   - Add a new email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Create a new template with these variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Note the Template ID

4. **Get Public Key**
   - Go to Account → General
   - Copy your Public Key

5. **Update Configuration**
   - Edit `app/contact/page.tsx`
   - Update the `EMAILJS_CONFIG` object with your credentials:
   ```typescript
   const EMAILJS_CONFIG = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key',
   }
   ```

### Email Template Example
```html
Subject: New Contact: {{subject}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{email}}
```

## 📊 Analytics Dashboard

The analytics dashboard tracks visitor data and displays:
- Total visitors count
- Country-wise visitor statistics
- Real-time visitor tracking
- Interactive charts and metrics

Data is stored in JSON files in the `data/` directory.

## 🎨 Customization

### Adding New Projects

1. **Open `lib/projectsData.ts`**
2. **Add new project to the `projectsData.projects` array:**
   ```typescript
   {
     "id": 9,
     "title": "Your Project Name",
     "description": "Project description",
     "image": "https://example.com/image.jpg",
     "imageAlt": "Project alt text",
     "technologies": [
       { "name": "React" },
       { "name": "Node.js" }
     ],
     "githubUrl": "https://github.com/username/project",
     "liveUrl": "https://project-demo.com",
     "featured": true
   }
   ```

### Updating Personal Information

1. **Contact Details**: Edit `app/contact/page.tsx`
2. **About Section**: Edit `app/about/page.tsx`
3. **Hero Section**: Edit `components/Hero.tsx`
4. **Navigation**: Edit `components/Navigation.tsx`

### Theme Customization

1. **Colors**: Edit `tailwind.config.ts`
2. **Fonts**: Update `app/layout.tsx`
3. **Global Styles**: Edit `app/globals.css`

## 🧪 Testing

Run the test suite:
```bash
npm run test
# or
yarn test
```

Run tests in watch mode:
```bash
npm run test:watch
# or
yarn test:watch
```

## 🏗️ Building for Production

1. **Build the project**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Add environment variables in Netlify dashboard

### Manual Deployment
1. Run `npm run build`
2. Upload the `out` folder to your hosting provider

## 📱 Pages Overview

- **Home (`/`)**: Hero section, featured projects, skills preview
- **About (`/about`)**: Personal information, experience, education
- **Projects (`/projects`)**: Complete project portfolio with filtering
- **Skills (`/skills`)**: Technical skills and expertise
- **Contact (`/contact`)**: Contact form and social links
- **Analytics (`/analytics`)**: Visitor statistics and metrics
- **Blog (`/blog`)**: Blog posts and articles (optional)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pradip Mourya**
- Email: 755201pradip@gmail.com
- Phone: +91 8057196070, 9258682549
- Location: Gurugram, Sector 45, India
- LinkedIn: [pradipmourya-61a387218](https://www.linkedin.com/in/pradipmourya-61a387218/)
- GitHub: [pradip1232](https://github.com/pradip1232)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Lucide](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Stock photos

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Blog functionality with CMS integration
- [ ] Advanced analytics with charts
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Advanced project filtering and search
- [ ] Integration with GitHub API for dynamic project data

---

**⭐ If you found this project helpful, please give it a star!**