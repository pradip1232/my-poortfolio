# 🎨 Styles Directory

Comprehensive CSS architecture with variables, mixins, and component styles for the entire project.

## 📁 Structure

```
styles/
├── variables.css    # CSS custom properties (colors, spacing, typography)
├── mixins.css       # Reusable CSS mixins and utility classes
├── components.css   # Component-specific styles
├── globals.css      # Global styles and resets
├── index.css        # Import all styles (convenience file)
└── README.md        # This documentation
```

## 🎯 Usage

### Import All Styles
```css
@import '../styles/index.css';
```

### Import Individual Modules
```css
@import '../styles/variables.css';
@import '../styles/mixins.css';
@import '../styles/components.css';
```

### Use in Components
```tsx
// In your component files
import '../styles/components.css';

// Or use Tailwind classes with CSS variables
<div className="bg-[var(--color-primary)]">
```

## 🎨 CSS Variables

### Colors
```css
/* Primary Colors */
--color-primary: #667eea;
--color-primary-light: #818cf8;
--color-primary-dark: #4f46e5;

/* Semantic Colors */
--color-success: #10b981;
--color-error: #ef4444;
--color-warning: #f59e0b;
--color-info: #3b82f6;

/* Theme Colors */
--background: var(--color-white);
--foreground: var(--color-gray-900);
--muted: var(--color-gray-50);
```

### Typography
```css
/* Font Families */
--font-sans: 'Inter', sans-serif;
--font-mono: 'Fira Code', monospace;
--font-heading: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

### Spacing
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-4: 1rem;     /* 16px */
--space-8: 2rem;     /* 32px */
```

## 🧩 Mixins & Utilities

### Layout Mixins
```css
.flex-center     /* display: flex; align-items: center; justify-content: center; */
.flex-between    /* display: flex; align-items: center; justify-content: space-between; */
.grid-center     /* display: grid; place-items: center; */
```

### Typography Mixins
```css
.heading-1       /* Large heading styles */
.heading-2       /* Medium heading styles */
.body-large      /* Large body text */
.text-gradient   /* Gradient text effect */
```

### Button Mixins
```css
.btn-base        /* Base button styles */
.btn-primary     /* Primary button */
.btn-secondary   /* Secondary button */
.btn-outline     /* Outline button */
.btn-gradient    /* Gradient button */
```

### Card Mixins
```css
.card-base       /* Base card styles */
.card-hover      /* Hover effects */
.card-gradient   /* Gradient background */
```

### Animation Mixins
```css
.fade-in         /* Fade in animation */
.slide-up        /* Slide up animation */
.scale-in        /* Scale in animation */
.bounce-in       /* Bounce in animation */
```

## 🎭 Component Classes

### Navigation
```css
.nav-container   /* Fixed navigation bar */
.nav-logo        /* Logo styles */
.nav-menu        /* Navigation menu */
.nav-link        /* Navigation links */
```

### Hero Section
```css
.hero-container  /* Hero section layout */
.hero-title      /* Hero title styles */
.hero-subtitle   /* Hero subtitle */
.hero-cta        /* Call-to-action buttons */
```

### Project Cards
```css
.project-card    /* Project card container */
.project-image   /* Project image */
.project-title   /* Project title */
.project-tech-tag /* Technology tags */
```

### Contact Form
```css
.contact-form    /* Form container */
.form-group      /* Form field group */
.form-input      /* Input field styles */
.form-button     /* Submit button */
```

## 🌙 Dark Mode

Dark mode is automatically handled through CSS variables:

```css
[data-theme="dark"] {
  --background: var(--color-gray-900);
  --foreground: var(--color-gray-50);
  /* ... other dark theme variables */
}
```

## 📱 Responsive Design

All components include responsive styles:

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }
}
```

## 🎨 Customization

### Adding New Colors
1. Add to `variables.css`:
```css
--color-brand: #your-color;
--color-brand-light: #lighter-shade;
--color-brand-dark: #darker-shade;
```

### Creating New Mixins
1. Add to `mixins.css`:
```css
.your-mixin {
  /* Your styles */
}
```

### Adding Component Styles
1. Add to `components.css`:
```css
.your-component {
  /* Component styles */
}
```

## 🔧 Integration with Tailwind

CSS variables work seamlessly with Tailwind:

```tsx
// Use CSS variables in Tailwind classes
<div className="bg-[var(--color-primary)] text-[var(--color-white)]">
  Content
</div>

// Or use the predefined classes
<div className="btn-primary">
  Button
</div>
```

## ✨ Benefits

- **Consistent Design**: Centralized design tokens
- **Easy Theming**: CSS variables for light/dark modes
- **Reusable Components**: Pre-built component styles
- **Performance**: Optimized CSS with minimal duplication
- **Maintainable**: Organized structure for easy updates
- **Flexible**: Works with Tailwind CSS and custom styles

## 🚀 Best Practices

1. **Use CSS Variables**: Always use variables for colors, spacing, etc.
2. **Follow BEM**: Use Block-Element-Modifier naming for components
3. **Mobile First**: Write responsive styles mobile-first
4. **Semantic Classes**: Use meaningful class names
5. **Consistent Spacing**: Use the spacing scale variables
6. **Performance**: Minimize CSS specificity conflicts

## 📖 Examples

### Using Variables
```css
.my-component {
  background: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  color: var(--color-white);
}
```

### Using Mixins
```css
.my-button {
  @apply btn-base btn-primary;
  /* Additional custom styles */
}
```

### Responsive Design
```css
.my-grid {
  @apply responsive-grid;
  gap: var(--space-6);
}
```

This styles system provides a solid foundation for consistent, maintainable, and scalable CSS architecture throughout your project!