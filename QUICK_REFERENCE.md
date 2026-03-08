# ⚡ Quick Reference: Minimalist Monochrome

**Print this or save to your phone for quick lookup while building.**

---

## Color Palette (MEMORIZE THIS)

```
#FFFFFF  - White (backgrounds, primary)
#000000  - Black (text, borders, accents)
#F5F5F5  - Off-white (subtle backgrounds, muted bg)
#525252  - Dark gray (secondary text only)
#E5E5E5  - Light gray (subtle borders)
```

**Rule**: NO other colors. Ever.

---

## Typography Stack

```css
/* Headlines */
font-family: 'Playfair Display', Georgia, serif;
font-size: 8rem to 10rem; /* 8xl-9xl */
letter-spacing: -0.025em; /* tracking-tighter */
line-height: 1; /* leading-none */

/* Body */
font-family: 'Source Serif 4', Georgia, serif;
font-size: 1.125rem; /* 18px */
line-height: 1.625; /* leading-relaxed */
letter-spacing: 0; /* tracking-normal */

/* Labels */
font-family: 'JetBrains Mono', monospace;
font-size: 0.875rem; /* 14px */
letter-spacing: 0.1em; /* tracking-widest */
text-transform: uppercase;
```

---

## Border Radius

```
border-radius: 0px  ← EVERYTHING, NO EXCEPTIONS
```

---

## Borders & Lines

```
1px solid #E5E5E5   - Subtle (hairline)
1px solid #000000   - Standard
2px solid #000000   - Emphasis (medium)
4px solid #000000   - Heavy rules, dividers
8px solid #000000   - Ultra impact
```

---

## Buttons

```tsx
// Primary
<button className="bg-black text-white px-8 py-4 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-3">

// Secondary
<button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white">

// Ghost (link-style)
<button className="border-none hover:border-b-2 hover:border-black">
```

---

## Cards

```tsx
// Standard (hover inverts)
<div className="bg-white border-2 border-black p-8 hover:bg-black hover:text-white">

// Inverted (static)
<div className="bg-black text-white p-8">
```

---

## Sections

```tsx
<Section pattern="horizontal-lines" divider="bottom">
  {/* Optional patterns: horizontal-lines, grid, diagonal-lines, vertical-lines-inverted */}
  {/* Optional dividers: top, bottom, both, none */}
</Section>
```

---

## Hover Effects

```
Cards:     Full color inversion (100ms)
Buttons:   Color inversion (instant or 100ms)
Links:     Underline appears (instant)
Images:    Scale 105% + grayscale removed (300ms)
```

---

## Focus States (REQUIRED)

```tsx
// Buttons
focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3

// Inputs
focus:border-b-4 focus:outline-none

// Links
focus-visible:outline focus-visible:outline-3
```

---

## Spacing

```
Section padding:    py-24 md:py-32 lg:py-40
Container width:    max-w-6xl (72rem)
Container padding:  px-6 md:px-8 lg:px-12
Gap between cards:  gap-8 md:gap-12
```

---

## Type Scale (Quick Reference)

```
xs:   12px   - Fine print
sm:   14px   - Labels
base: 16px   - Body minimum
lg:   18px   - Body preferred
xl:   20px   - Lead paragraphs
2xl:  24px   - Section intro
3xl:  32px   - Subheadings
4xl:  40px   - Section title
5xl:  56px   - Page title
6xl:  72px   - Hero subheading
7xl:  96px   - Hero headline
8xl:  128px  - Display headline ← START HERE for heroes
9xl:  160px  - Oversized statement ← MAXIMUM DRAMA
```

---

## Component Imports

```tsx
import {
  Button,      // Primary/secondary/ghost buttons
  Card,        // Standard card, hover inverts
  Container,   // max-w-6xl wrapper
  Section,     // Layout section with textures
  Heading,     // h1-h6 semantic typography
  Text,        // Body/lead/label/caption text
  Code,        // Inline/block code
} from '@/components';
```

---

## Utility Classes (from globals.css)

```tsx
// Text utilities
<p className="text-body">Serif, 18px, relaxed</p>
<p className="text-label">Monospace, small, tracking-widest</p>

// Border utilities
<div className="border-thin">1px black border</div>
<div className="border-medium">2px black border</div>
<div className="border-thick">4px black border</div>

// Button utilities
<button className="btn-primary">Black bg, white text</button>
<button className="btn-secondary">Outlined</button>
<button className="btn-ghost">Link-style</button>

// Card utilities
<div className="card">White, 1px border, hover inverts</div>
<div className="card-inverted">Black, no border</div>

// Texture patterns
<div className="pattern-horizontal-lines">Hero sections</div>
<div className="pattern-grid">Editorial sections</div>
<div className="pattern-diagonal-lines">Process/timeline</div>
<div className="pattern-vertical-lines-inverted">Dark sections</div>

// Sizing
<h1 className="text-display-lg">9xl headline</h1>
<h2 className="text-display-md">8xl headline</h2>

// Spacing
<section className="section-spacing">py-24+ padding</section>
<div className="section-divider">4px black rule</div>

// Containers
<div className="container-max">max-w-6xl, responsive padding</div>

// Touch targets (accessibility)
<button className="touch-target">min 44×44px</button>
```

---

## Common Mistakes to Avoid

❌ **Using accent colors**: "Let's add a blue button"
→ ✅ Use inversion instead: `hover:bg-black hover:text-white`

❌ **Adding rounded corners**: `rounded-lg`, `rounded-2xl`
→ ✅ Config enforces `border-radius: 0` globally

❌ **Using shadows**: `shadow-md`, `drop-shadow`
→ ✅ Use border weight or inversion for depth

❌ **Sans-serif headlines**: Using Inter or -apple-system
→ ✅ Always: Playfair Display for display text

❌ **Soft, friendly design**: Rounded corners + pastels
→ ✅ Sharp, authoritative: sharp corners + black/white

❌ **Slow animations**: `ease-in-out`, `duration-300`
→ ✅ Instant or max 100ms: `duration-100` or `transition-none`

---

## Agent Trigger Phrases

Use `@minimalist-monochrome` with:

- "Build a landing page..."
- "Design a hero section..."
- "Create a features page..."
- "Build a pricing table..."
- "Design a testimonials section..."
- "Review this design for compliance..."
- "Add textures and depth..."
- "Implement [feature] in Minimalist Monochrome..."

---

## Quick Test

Paste this in `src/app/page.tsx` and run `yarn dev`:

```tsx
import { Section, Container, Heading, Text, Button, Card } from '@/components';

export default function TestPage() {
  return (
    <Section pattern="horizontal-lines" divider="bottom">
      <Container>
        <Heading level={1}>Test Page</Heading>
        <Text variant="body" className="mb-8">
          This demonstrates the Minimalist Monochrome design system.
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card bordered>
            <Heading level={3} className="mb-4">Feature One</Heading>
            <Text variant="body">Test hovering over this card.</Text>
          </Card>
          <Card bordered>
            <Heading level={3} className="mb-4">Feature Two</Heading>
            <Text variant="body">It should invert on hover instantly.</Text>
          </Card>
        </div>
        
        <Button variant="primary">Click Me →</Button>
      </Container>
    </Section>
  );
}
```

**Expected**:
- 9xl serif headline
- Serif body text
- Two cards with 1px borders
- Cards invert (black bg, white text) on hover
- Button: black bg, white text, instant inversion on hover
- Texture: barely visible horizontal lines across section

---

## Resources

| Document | Link |
|----------|------|
| Design System | `.instructions.md` |
| Agent Definition | `.agent.md` |
| Implementation Guide | `IMPLEMENTATION_GUIDE.md` |
| Visual Examples | `VISUAL_REFERENCE.md` |
| Setup Complete | `SETUP_COMPLETE.md` |
| Tailwind Config | `tailwind.config.ts` |
| Global Styles | `src/globals.css` |

---

## Compliance Checklist

Before sending code for review:

- [ ] Zero accent colors (only #000000, #FFFFFF, #F5F5F5, #525252, #E5E5E5)
- [ ] All border-radius: 0
- [ ] No drop shadows
- [ ] Serif fonts for headlines
- [ ] Headlines 7xl or larger on primary pages
- [ ] Thick rules (4px+) separate sections
- [ ] At least one texture pattern per section
- [ ] Hover: instant or max 100ms
- [ ] Focus states: 3px outline, 3px offset
- [ ] Touch targets: min 44×44px
- [ ] Mobile headlines scale appropriately

---

## Start Here

```bash
cd /Users/shaneslo/Documents/_AI_Projects/veryslow-1
yarn install
yarn dev
# Visit http://localhost:3000
```

**Next**: Update `src/app/page.tsx` or create new pages in `src/app/`

---

*Minimalist Monochrome Design System*  
*Quick Reference v1.0 — March 8, 2026*
