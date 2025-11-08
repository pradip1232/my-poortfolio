# Next.js Portfolio

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a custom animated cursor, smooth page transitions, and beautiful UI components.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🎭 Smooth animations with Framer Motion
- 🖱️ Custom animated cursor (desktop only)
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js Image
- ♿ Accessible markup and keyboard navigation
- 🧪 Unit tests with Jest and React Testing Library

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dummy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── CustomCursor.tsx  # Custom cursor component
│   ├── PageTransition.tsx # Page transition wrapper
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project card component
│   └── Navigation.tsx    # Navigation component
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── __tests__/            # Test files
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Customization

### Update Project Information

Edit the projects array in `app/projects/page.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    // ... other fields
  },
]
```

### Modify Skills

Update the `skillCategories` array in `app/skills/page.tsx`.

### Change Colors

Edit the CSS variables in `app/globals.css` under the `:root` selector.

### Disable Custom Cursor

Set `enabled={false}` on the `CustomCursor` component in `app/layout.tsx`.

## Testing

Run tests with:

```bash
npm test
```

Tests are located in the `__tests__` directory and use Jest and React Testing Library.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.

2. Import your repository on [Vercel](https://vercel.com).

3. Vercel will automatically detect Next.js and configure the build settings.

4. Click "Deploy" and your site will be live!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

### Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance

- Images are optimized with Next.js Image component
- Animations use `requestAnimationFrame` for smooth performance
- Code is split automatically by Next.js
- CSS is purged in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

