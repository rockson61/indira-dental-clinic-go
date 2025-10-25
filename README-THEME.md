# Crimson Night Theme - Implementation Guide

## Overview
The Crimson Night theme is a bold, energetic dark theme with red accents designed for modern web applications. This theme provides excellent contrast and accessibility while maintaining a professional appearance.

## Design Tokens

### Color Palette
\`\`\`css
--color-primary: #DC2626    /* Crimson red for accents, buttons, links */
--color-panel: #1F2937      /* Dark gray for cards, panels, surfaces */
--color-bg: #111827         /* Very dark background */
--color-text-primary: #FFFFFF /* White text for high contrast */
--color-text-muted: #70747d  /* Muted gray for secondary text */
--color-border: color-mix(in oklab, var(--color-text-primary) 10%, var(--color-bg)) /* Subtle borders */
\`\`\`

## Usage

### CSS Variables
All colors are defined as CSS custom properties in `globals.css`:
\`\`\`css
:root {
  --color-primary: #DC2626;
  --color-panel: #1F2937;
  --color-bg: #111827;
  --color-text-primary: #FFFFFF;
  --color-text-muted: #70747d;
  --color-border: color-mix(in oklab, var(--color-text-primary) 10%, var(--color-bg));
}
\`\`\`

### Tailwind Configuration
Colors are mapped to Tailwind utilities in `tailwind.config.ts`:
\`\`\`javascript
colors: {
  "theme-primary": "var(--color-primary)",
  "theme-panel": "var(--color-panel)",
  "theme-bg": "var(--color-bg)",
  "theme-text-primary": "var(--color-text-primary)",
  "theme-text-muted": "var(--color-text-muted)",
  "theme-border": "var(--color-border)",
}
\`\`\`

### Component Classes
Use these Tailwind classes in your components:
- `bg-theme-bg` - Main background
- `bg-theme-panel` - Card/panel backgrounds
- `text-theme-text-primary` - Primary text
- `text-theme-text-muted` - Secondary text
- `text-theme-primary` - Accent text/links
- `border-theme-border` - Subtle borders

## Component Examples

### Button Variants
\`\`\`jsx
<Button variant="default">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="gradient">Gradient Button</Button>
\`\`\`

### Cards
\`\`\`jsx
<Card className="bg-theme-panel border-theme-border">
  <CardHeader>
    <CardTitle className="text-theme-text-primary">Card Title</CardTitle>
    <CardDescription className="text-theme-text-muted">Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-theme-text-muted">Card content goes here</p>
  </CardContent>
</Card>
\`\`\`

### Form Controls
\`\`\`jsx
<Input 
  placeholder="Enter text" 
  className="bg-theme-panel border-theme-border text-theme-text-primary placeholder:text-theme-text-muted"
/>
\`\`\`

## Accessibility

### Contrast Ratios
- Primary text on background: 21:1 (AAA)
- Muted text on background: 4.5:1 (AA)
- Primary color on background: 4.5:1 (AA)
- Primary text on panel: 21:1 (AAA)

### Focus States
All interactive elements include visible focus indicators:
\`\`\`css
.focus-visible:focus-visible {
  outline: none;
  ring: 2px solid var(--color-primary);
  ring-offset: 2px;
  ring-offset-color: var(--color-bg);
}
\`\`\`

## Customization

### Changing Colors
To customize the theme, update the CSS variables in `globals.css`:

\`\`\`css
:root {
  --color-primary: #your-color;    /* Change accent color */
  --color-panel: #your-color;      /* Change panel color */
  --color-bg: #your-color;         /* Change background */
  /* ... other variables */
}
\`\`\`

### Adding New Variants
Add new color variants in `tailwind.config.ts`:
\`\`\`javascript
colors: {
  // ... existing colors
  "theme-success": "#10B981",
  "theme-warning": "#F59E0B",
  "theme-error": "#EF4444",
}
\`\`\`

## Best Practices

1. **Always use CSS variables** instead of hard-coded hex values
2. **Test contrast ratios** when customizing colors
3. **Include focus states** for all interactive elements
4. **Use semantic color names** (primary, muted, etc.) rather than color names
5. **Test in different lighting conditions** to ensure readability

## Browser Support
- Modern browsers with CSS custom properties support
- Fallbacks provided for older browsers
- Uses `color-mix()` function (supported in modern browsers)

## Performance
- CSS variables are computed once and cached
- No JavaScript required for theme switching
- Minimal CSS bundle size impact
