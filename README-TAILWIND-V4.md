# Tailwind CSS v4 Migration Guide

## Overview
This project has been upgraded to Tailwind CSS v4, featuring the new `@theme` directive and improved CSS variable integration.

## Key Changes

### 1. Import Syntax
**Old (v3):**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

**New (v4):**
\`\`\`css
@import "tailwindcss";
\`\`\`

### 2. Theme Configuration
All design tokens are now defined in `@theme` blocks in `globals.css` rather than in `tailwind.config.ts`.

### 3. CSS Variables
Tailwind v4 has better native CSS variable support. Variables are defined with standard CSS syntax:

\`\`\`css
@theme {
  --color-primary: #dc2626;
  --color-background: #111827;
  /* etc */
}
\`\`\`

### 4. Semantic Design Tokens

#### Color Tokens
- `--color-background` - Main background color
- `--color-foreground` - Main text color
- `--color-card` - Card/panel background
- `--color-primary` - Primary brand color (crimson)
- `--color-secondary` - Secondary UI elements
- `--color-muted` - Muted backgrounds and text
- `--color-accent` - Accent elements
- `--color-destructive` - Error/danger states
- `--color-border` - Border colors
- `--color-input` - Form input backgrounds
- `--color-ring` - Focus ring color

#### Additional Tokens
- `--radius-*` - Border radius scale
- `--shadow-*` - Box shadow variants
- `--spacing-*` - Spacing scale
- `--font-size-*` - Typography scale
- `--transition-*` - Transition durations

### 5. Using Semantic Tokens

**In CSS:**
\`\`\`css
.my-component {
  background-color: var(--color-card);
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
}
\`\`\`

**In Tailwind Classes:**
\`\`\`jsx
<div className="bg-card text-foreground border-border">
  Content
</div>
\`\`\`

### 6. Crimson Night Theme Colors

The theme includes a full crimson color scale:
- `crimson-50` through `crimson-900`
- Primary color: `crimson-600` (#dc2626)

**Usage:**
\`\`\`jsx
<button className="bg-primary text-primary-foreground hover:bg-crimson-700">
  Click me
</button>
\`\`\`

### 7. Dark/Light Mode

Toggle between themes using the `.light` class:

\`\`\`css
/* Dark theme (default) */
@theme {
  --color-background: #111827;
  --color-foreground: #ffffff;
}

/* Light theme */
.light {
  --color-background: #ffffff;
  --color-foreground: #111827;
}
\`\`\`

### 8. Custom Utilities

Predefined utility classes for common patterns:

#### Typography
- `.heading-primary` - Large headings
- `.heading-secondary` - Medium headings
- `.heading-tertiary` - Small headings
- `.text-body` - Body text
- `.gradient-text` - Gradient text effect

#### Layouts
- `.container-custom` - Responsive container
- `.section-padding` - Consistent section spacing
- `.gradient-bg` - Gradient background

#### Cards
- `.card-glass` - Glass morphism card
- `.service-card` - Service card styling
- `.testimonial-card` - Testimonial card styling

#### Buttons
- `.btn-gradient` - Gradient button
- `.btn-outline` - Outline button
- `.btn-ghost` - Ghost button

#### Icons
- `.icon-container` - Icon wrapper (sm)
- `.icon-container-lg` - Icon wrapper (md)
- `.icon-container-xl` - Icon wrapper (lg)

### 9. Animations

Pre-configured animations:
- `animate-float` - Floating effect
- `animate-pulse-gentle` - Gentle pulse
- `animate-slide-up` - Slide up entrance
- `animate-fade-in` - Fade in entrance
- `animate-bounce-gentle` - Gentle bounce
- `.glow-on-hover` - Glow effect on hover

### 10. Accessibility Features

- Focus rings using `--color-ring`
- Reduced motion support
- High contrast mode support
- Screen reader utilities (`.sr-only`)
- Skip links (`.skip-link`)

## Best Practices

1. **Always use semantic tokens** instead of hardcoded colors
2. **Use utility classes** from `globals.css` for consistency
3. **Test in both dark and light modes**
4. **Ensure proper contrast ratios** for accessibility
5. **Use the provided animation classes** for consistent motion

## Example Component

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ExampleComponent() {
  return (
    <section className="section-padding bg-gradient-bg">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">
          Example <span className="gradient-text">Component</span>
        </h2>
        
        <Card className="card-glass">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body mb-4">
              This component uses semantic design tokens
            </p>
            <Button variant="gradient" className="glow-on-hover">
              Click Me
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
\`\`\`

## Migration Checklist

- [x] Updated package.json to Tailwind v4
- [x] Migrated @tailwind directives to @import
- [x] Defined all design tokens in @theme
- [x] Created semantic color tokens
- [x] Updated tailwind.config.ts
- [x] Ensured dark/light mode support
- [x] Added accessibility features
- [x] Created utility classes
- [x] Documented usage patterns

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/)
