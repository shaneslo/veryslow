# Implementation Guide: Minimalist Monochrome Design System

## ✅ Setup Complete

This project has been initialized with the **Minimalist Monochrome** design system fully integrated. Below is a summary of what's been set up and how to use it.

---

## Project Structure

```
veryslow-1/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and structure
│   │   └── page.tsx            # Home page (example landing)
│   ├── components/
│   │   ├── Button.tsx          # Primary/secondary/ghost buttons
│   │   ├── Card.tsx            # Card with hover inversion
│   │   ├── Container.tsx       # Max-width container
│   │   ├── Section.tsx         # Section with padding and textures
│   │   ├── Typography.tsx      # Heading, Text, Code components
│   │   └── index.ts            # Component exports
│   └── globals.css             # Global styles, texture patterns, utilities
├── .instructions.md            # Detailed design system rules
├── .agent.md                   # Agent definition for the UI builder
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js config
├── tsconfig.json               # TypeScript config
└── postcss.config.mjs          # PostCSS config
```

---

## Key Features

### 🎨 Design Tokens (Tailwind Configured)

```javascript
// Colors: Pure monochrome only
colors: {
  background: '#FFFFFF',
  foreground: '#000000',
  muted: '#F5F5F5',
  mutedForeground: '#525252',
  borderLight: '#E5E5E5'
}

// Fonts: All serif
fontFamily: {
  display: 'Playfair Display (serif)',
  serif: 'Source Serif 4 (serif)',
  mono: 'JetBrains Mono (monospace)'
}

// Type Scale: Dramatic sizes
fontSize: {
  xs: '12px', sm: '14px', base: '16px', lg: '18px',
  4xl: '40px', 5xl: '56px', 6xl: '72px', 7xl: '96px',
  8xl: '128px', 9xl: '160px'  // ← Oversized headlines
}

// Corners: ALWAYS zero
borderRadius: { DEFAULT: '0px' }
```

### ✨ Global Styles

- **Serif fonts** imported from Google Fonts
- **Texture patterns** as CSS utilities (horizontal lines, grids, diagonal, noise, inverted patterns)
- **Utility classes** for typography, borders, cards, buttons
- **Focus states** for accessibility (3px outline on buttons, border thickness on inputs)
- **Skip link** for keyboard navigation

### 🧩 Component Library

All components enforce design system rules:

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Button` | Primary, secondary, ghost variants | Instant hover inversion, 100ms max |
| `Card` | Container with optional inversion | 1px/2px borders, hover state |
| `Container` | Max-width wrapper | max-w-6xl, responsive padding |
| `Section` | Layout section with textures | Optional patterns, dividers |
| `Heading` | Semantic h1-h6 | Serif display fonts, tight tracking |
| `Text` | Body, lead, label, caption text | Serif body, monospace labels |
| `Code` | Inline or block code | Monospace, muted background |

### 🌊 Texture Patterns

Six subtle patterns available (barely perceptible at 0.01-0.03 opacity):

- `pattern-horizontal-lines` - Horizontal lines (hero sections)
- `pattern-grid` - Grid (editorial sections)
- `pattern-diagonal-lines` - Diagonal lines (timeline/process)
- `pattern-noise` - Noise (paper-like quality)
- `pattern-vertical-lines-inverted` - Vertical lines on dark (stats sections)
- `pattern-radial-inverted` - Radial gradient on dark (CTAs)

---

## Getting Started

### 1. Install Dependencies

```bash
yarn install  # or npm install
```

### 2. Run Development Server

```bash
yarn dev  # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the example landing page.

### 3. Start Building

All components are ready to import:

```typescript
import { 
  Button, 
  Card, 
  Container, 
  Section, 
  Heading, 
  Text 
} from '@/components';

export function MyPage() {
  return (
    <Section pattern="horizontal-lines" divider="bottom">
      <Container>
        <Heading level={1}>My Headline</Heading>
        <Text variant="body">Body text in serif...</Text>
        <Button variant="primary">Action</Button>
      </Container>
    </Section>
  );
}
```

---

## Design System Rules (Enforced)

✅ **ALWAYS**:
- Use serif fonts (Playfair Display for headlines, Source Serif 4 for body)
- Keep corners sharp (border-radius: 0)
- Use only black/white/gray palette
- Add at least one texture pattern per section
- Use thick rules (4px+) to separate major sections
- Keep interactions instant (max 100ms transitions)
- Implement focus states (3px outline with offset)

❌ **NEVER**:
- Use accent colors (no blue, red, green)
- Add gradients
- Apply drop shadows
- Use rounded corners
- Violate monochrome discipline

---

## Next Steps

### Build a New Page

Use `@minimalist-monochrome` in a prompt to trigger the specialized agent:

```
Build a features page with:
- 8xl serif hero headline
- Three feature cards that invert on hover
- Thick rule dividers between sections
- Grid texture pattern on feature cards
```

The agent will:
1. Ask clarifying questions (if needed)
2. Propose typography hierarchy and layout
3. Code production-ready components
4. Verify design compliance

### Create Components

All new components should follow the pattern:
- Accept color/variant props, not arbitrary styles
- Implement hover states (100ms max)
- Include focus states (`focus-visible:outline`)
- Use Tailwind utilities (no CSS-in-JS)
- Export from `src/components/index.ts`

### Add Pages

Next.js App Router structure:
```
src/app/
├── page.tsx               # Home (/)
├── about/page.tsx         # /about
├── features/page.tsx      # /features
└── blog/[slug]/page.tsx   # /blog/:slug
```

---

## Testing the Agent

The `.agent.md` file defines a specialized "Minimalist Monochrome UI Builder" agent. Try these prompts:

1. **"Build a pricing page with 3 tiers, one elevated and inverted"**
   - Expected: Sharp corners, thick rules, inverted tier, serif typography, texture patterns

2. **"Create a blog post preview component with an image that scales on hover"**
   - Expected: 1px border (default) → 4px border (hover), image scales 105%, grayscale removed (300ms)

3. **"Review this component for design system compliance"**
   - Expected: Checklist verification, compliance assessment, suggestions

---

## Resources

- **[.instructions.md](.instructions.md)** - Complete design system reference
- **[.agent.md](.agent.md)** - Agent definition and workflow
- **[globals.css](src/globals.css)** - All texture patterns and utilities
- **[tailwind.config.ts](tailwind.config.ts)** - Design tokens

---

## Troubleshooting

**"My borders are rounded"**
→ Check `tailwind.config.ts`: `borderRadius: { DEFAULT: '0px' }` globally overrides all defaults

**"I don't see texture patterns"**
→ Patterns use very low opacity (0.01-0.03) intentionally. They're subtle. Use dev tools to inspect.

**"Buttons aren't inverting on hover"**
→ Ensure you're using `<Button />` component or the `btn-primary/btn-secondary` classes from globals.css

**"Fonts aren't loading"**
→ Check `globals.css` import from Google Fonts loads successfully (no CORS issues)

---

## Summary

You now have:
✅ Tailwind CSS configured with monochrome design tokens
✅ Serif font stack (Playfair Display, Source Serif 4, JetBrains Mono)
✅ 6 reusable components (Button, Card, Container, Section, Typography)
✅ Texture patterns (6 variations)
✅ Global utilities (focus states, borders, spacers)
✅ Specialized agent for building with the design system
✅ Example landing page showcasing all patterns

**Next:** Build new pages or components using the `@minimalist-monochrome` agent, or manually using the component library.
