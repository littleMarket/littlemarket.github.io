# Little Market LLC Website

A modern, responsive website for Little Market LLC - a Connecticut-registered limited liability company focused on digital platforms and consumer applications.

## Features

### 🎨 Modern Design
- **Beautiful UI**: Clean, modern design with glassmorphism effects
- **Responsive Layout**: Mobile-first approach with CSS Grid and Flexbox
- **Typography**: Custom typography scale using `clamp()` for fluid sizing
- **Color System**: Comprehensive color palette with CSS custom properties
- **Dark Mode**: Automatic dark mode support based on user preference

### 🚀 Performance
- **Optimized CSS**: Efficient CSS with minimal redundancy
- **Fast Loading**: Optimized assets and preloading of critical resources
- **Smooth Animations**: GPU-accelerated animations with `will-change`
- **Accessibility**: WCAG compliant with proper focus management

### 📱 Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Flexible Grid**: Auto-fitting grid layouts for all screen sizes  
- **Fluid Typography**: Scales smoothly across all device sizes
- **Touch-Friendly**: Optimized for touch interactions

### ✨ Interactive Features
- **Scroll Effects**: Parallax hero background and scroll-triggered animations
- **Smooth Navigation**: Auto-hiding header with smooth transitions
- **Card Animations**: Hover effects with glow and transform animations
- **Email Integration**: Direct mailto functionality with visual feedback

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader**: Proper ARIA attributes and semantic HTML
- **Skip Links**: Skip to main content functionality
- **Reduced Motion**: Respects user's motion preferences

## File Structure

```
littlemarket.github.io/
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive CSS with responsive design
├── script.js           # Interactive JavaScript features
└── README.md          # This documentation
```

## Browser Support

- ✅ Chrome/Chromium 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

## Development

Simply open `index.html` in your browser or serve with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## Features Breakdown

### CSS Highlights
- **CSS Custom Properties**: Extensive use of CSS variables for theming
- **Modern Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Keyframe animations with proper easing curves
- **Typography Scale**: Fluid typography using `clamp()`
- **Glassmorphism**: Modern glass-like effects with `backdrop-filter`

### JavaScript Features
- **Intersection Observer**: Efficient scroll-triggered animations
- **Performance Optimized**: Throttled scroll events with `requestAnimationFrame`
- **Accessibility First**: Keyboard navigation and screen reader support
- **Error Handling**: Graceful degradation for older browsers
- **Easter Egg**: Hidden Konami code feature 🎮

## Customization

### Colors
Edit CSS custom properties in `:root` to change the color scheme:

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
}
```

### Typography
Adjust the typography scale by modifying the font-size variables:

```css
:root {
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
}
```

### Spacing
The spacing system uses a consistent scale:

```css
:root {
  --space-4: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  --space-8: clamp(2rem, 1.6rem + 2vw, 3rem);
}
```

## License

© Little Market LLC. All rights reserved.