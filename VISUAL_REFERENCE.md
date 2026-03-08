# Minimalist Monochrome: Visual Reference & Component Showcase

This document shows real code examples of how to build pages and components with the design system.

---

## Pattern 1: Hero Section (Oversized Typography)

```typescript
import { Container, Section, Heading, Text, Button } from '@/components';

export function HeroSection() {
  return (
    <Section pattern="horizontal-lines" divider="bottom">
      <Container>
        {/* Decorative small rule */}
        <div className="mb-12 w-16 h-2 bg-black" />
        
        {/* Massive headline (8xl-9xl) */}
        <Heading level={1}>Revolutionary Platform</Heading>
        
        {/* Thick separating rule */}
        <div className="my-12 h-1 w-full bg-black" />
        
        {/* Supporting text */}
        <Text variant="lead" className="max-w-2xl">
          Build agentic AI applications with unprecedented speed and precision.
        </Text>
        
        {/* CTA Button */}
        <div className="mt-12 flex gap-4">
          <Button variant="primary">Get Started →</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- H1 rendered at 9xl (10rem / 160px) on desktop
- Serif font (Playfair Display)
- Tight tracking (-0.025em)
- 1px horizontal line texture (0.015 opacity, barely visible)
- Thick (4px) black rule separates headline from supporting text
- Buttons: black bg + white text, instant invert on hover

---

## Pattern 2: Feature Cards (Hover Inversion)

```typescript
import { Container, Section, Heading, Card, Text } from '@/components';

export function FeaturesGrid() {
  const features = [
    {
      title: 'Autonomous',
      description: 'Agents reason and act independently with persistent memory.'
    },
    {
      title: 'Scalable',
      description: 'Built for enterprise workloads with 99.9% uptime SLA.'
    },
    {
      title: 'Editorial',
      description: 'Designed with precision typography and visual hierarchy.'
    },
  ];

  return (
    <Section pattern="grid" divider="bottom">
      <Container>
        <Heading level={2} className="mb-16">Core Capabilities</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} bordered onClick={() => console.log(feature.title)}>
              <Heading level={3} className="mb-4">
                {feature.title}
              </Heading>
              <Text variant="body">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- Grid: 1 column (mobile) → 3 columns (desktop)
- Cards: 2px black border, 8px padding, white background
- On hover: 100ms instant transition, background inverts to black, text inverts to white
- Sharp corners (border-radius: 0 everywhere)
- Grid texture (1px lines at 40px spacing, 0.015 opacity)

---

## Pattern 3: Inverted Section (Stats, CTA)

```typescript
import { Container, Section, Heading, Text } from '@/components';

export function StatsSection() {
  const stats = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '$2B', label: 'Conversations Processed' },
    { number: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <Section 
      pattern="vertical-lines-inverted" 
      divider="both"
      className="bg-black text-white"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-8xl tracking-tighter leading-none mb-4">
                {stat.number}
              </p>
              <Text variant="label" className="text-white">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- Section: black background (#000000), white text (#FFFFFF)
- Pattern: vertical white lines on black (0.03 opacity, 4px wide)
- Top and bottom dividers: 4px thick black rules
- Typography: Playfair Display serif, 8xl for numbers, monospace for labels
- No hover states (not interactive)

---

## Pattern 4: Testimonials (Editorial Pull Quotes)

```typescript
import { Container, Section, Text } from '@/components';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'The most elegant AI platform we've evaluated.',
      author: 'Sarah Chen',
      title: 'CTO, Enterprise Corp'
    },
    {
      quote: 'Discipline in design. Precision in execution.',
      author: 'Marcus Weber',
      title: 'VP Product, Scale Labs'
    },
  ];

  return (
    <Section divider="bottom">
      <Container>
        <div className="space-y-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="group border-b-2 border-border-light pb-8">
              {/* Large italic quote mark */}
              <p className="font-display text-6xl leading-none text-muted-foreground transition-opacity duration-100 group-hover:opacity-20 mb-6">
                "
              </p>
              
              {/* Quote text */}
              <p className="font-serif text-2xl italic leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              
              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-display text-lg font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- Large serif quote mark (6xl)
- Quote text: italic serif, 2xl, generous line height
- Bottom border separates testimonials
- Hover: quote mark opacity fades (100ms), creates subtle interactive feel
- Attribution: monospace in muted gray

---

## Pattern 5: Pricing Table (Elevated Tier)

```typescript
import { Container, Section, Heading, Card, Button, Text } from '@/components';

export function PricingSection() {
  const tiers = [
    {
      name: 'starter',
      title: 'Starter',
      price: '$99',
      description: 'For individuals and small teams',
      features: ['Up to 10k API calls', 'Email support', '1 agent'],
      highlighted: false,
    },
    {
      name: 'professional',
      title: 'Professional',
      price: '$499',
      description: 'For growing teams',
      features: ['Up to 1M API calls', 'Priority support', '10 agents'],
      highlighted: true,
    },
    {
      name: 'enterprise',
      title: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Unlimited API calls', '24/7 support', 'Unlimited agents'],
      highlighted: false,
    },
  ];

  return (
    <Section pattern="grid" divider="bottom">
      <Container>
        <Heading level={2} className="mb-16">Simple Pricing</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={tier.highlighted ? 'md:scale-105 md:origin-center' : ''}>
              <Card inverted={tier.highlighted} bordered>
                <p className="font-mono text-sm tracking-widest uppercase mb-4">
                  {tier.title}
                </p>
                
                <p className={`font-display text-5xl tracking-tight leading-tight mb-2 ${tier.highlighted ? 'text-white' : ''}`}>
                  {tier.price}
                </p>
                
                <Text variant="body" className="mb-8">
                  {tier.description}
                </Text>
                
                <ul className="space-y-2 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="font-serif text-base">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={tier.highlighted ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- Three pricing cards with 1px borders
- Professional tier: inverted (black bg, white text, no border), scaled 105% on desktop, positioned centered
- All cards: sharp corners (0 border-radius)
- Button: inverts variant based on highlight (secondary for inverted tier)
- Grid texture pattern applied to section (0.015 opacity)

---

## Pattern 6: Blog Post Grid

```typescript
import { Container, Section, Heading, Card, Text } from '@/components';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <Section pattern="grid" divider="bottom">
      <Container>
        <Heading level={2} className="mb-16">Latest Articles</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`}>
              <Card bordered className="h-full flex flex-col">
                {/* Date and author */}
                <Text variant="label" className="mb-4">
                  {post.date} · {post.author}
                </Text>
                
                {/* Title */}
                <Heading level={3} className="mb-4">
                  {post.title}
                </Heading>
                
                {/* Excerpt */}
                <Text variant="body" className="flex-grow mb-6">
                  {post.excerpt}
                </Text>
                
                {/* Read more link */}
                <p className="font-mono text-sm tracking-widest uppercase border-b border-transparent hover:border-black transition-all duration-100">
                  Read Article →
                </p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

**CSS Output**:
- Grid: 1 column (mobile) → 2 columns (desktop), gap 12 (3rem)
- Cards: 1px borders, hover inversion (100ms)
- Date/author: monospace, small, tracking-widest
- Title: serif, 4xl (Heading level 3)
- "Read Article" link: bottom border appears on hover (instant)

---

## Pattern 7: Navigation (Header)

```typescript
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-black py-6 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <p className="font-display text-2xl tracking-tight font-semibold">
            Veryslow
          </p>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-12">
          {[
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Docs', href: '/docs' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-base border-b border-transparent hover:border-black transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <button className="hidden md:inline-block bg-black text-white px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors duration-100 hover:bg-white hover:text-black hover:border-2 hover:border-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3">
          Sign In
        </button>
      </div>
    </header>
  );
}
```

**CSS Output**:
- Header: white background, 1px bottom border
- Logo: serif display, 2xl, positioned left
- Links: serif, hover underline (border-b) appears instantly
- Button: black bg/white text, inverts on hover (100ms)
- Focus states: 3px outline on all interactive elements

---

## Utility Class Shortcuts

Instead of writing verbose Tailwind, use global classes from `globals.css`:

```typescript
// Instead of:
<div className="bg-black text-white px-8 py-4 font-mono uppercase tracking-widest text-sm border-none transition-colors duration-100 focus-visible:outline focus-visible:outline-3...">

// Use:
<button className="btn-primary">Click me</button>

// Or for cards:
<div className="card">Content</div>  // White, bordered, inverts on hover
<div className="card-inverted">Content</div>  // Black, no border

// Or for text:
<p className="text-body">Body text with serif</p>
<p className="text-label">Label in monospace</p>

// Or for sizing:
<h1 className="text-display-lg">Large display headline</h1>
<h2 className="text-display-md">Medium display headline</h2>

// Or for borders:
<div className="border-thick">4px thick black border</div>
<div className="border-ultra">8px ultra thick border</div>
```

---

## Responsive Behavior

All patterns automatically scale on mobile:

```typescript
// Desktop: 9xl headline (160px)
// Tablet: 8xl (128px)
// Mobile: 6xl (72px) - never below 4xl

<h1 className="text-9xl md:text-8xl sm:text-6xl">Headline</h1>

// Grids
// Desktop: 3 columns
// Tablet: 2 columns
// Mobile: 1 column

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## Focus States (Accessibility)

All interactive elements implement proper focus:

```typescript
// Buttons
<button className="focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3">

// Inputs
<input className="focus:border-b-4 focus:outline-none" />

// Links
<a className="focus-visible:outline focus-visible:outline-offset-3">

// Cards (click-handlers)
<div role="button" tabIndex={0} onKeyDown={handleKey}>
```

---

## Summary: Common Patterns

| Use Case | Component | Key Props |
|----------|-----------|-----------|
| Page hero | `<Section pattern="horizontal-lines">` + `<Heading level={1}>` | Oversized text, thick rules |
| Feature grid | `<Card>` in grid | Hover inversion (100ms), 1px border |
| Stats section | `<Section>` + `className="bg-black text-white"` | Inverted color, vertical lines texture |
| Blog post list | `<Card>` in 2-col grid | Serif title, monospace date, hover link |
| Navigation | Custom header | Serif logo, link underlines on hover |
| Testimonial | Large serif quote + small attribution | Italic text, quote mark fades on hover |
| Pricing | `<Card inverted={featured}>` | Elevated tier (scale, invert) |

---

## What Success Looks Like

When you see:
- ✅ Oversized serif headlines (8xl+)
- ✅ Black & white only (no colors)
- ✅ Sharp corners everywhere (no curves)
- ✅ Thick black rules between sections (4px+)
- ✅ Hoverable elements invert instantly (100ms max)
- ✅ Subtle textures barely visible (very low opacity)
- ✅ Focus outlines on interactive elements (3px, 3px offset)
- ✅ Serif body text, monospace for labels

...you're implementing Minimalist Monochrome correctly.

---

## Next: Build Your Page

Ready to build? Use the `@minimalist-monochrome` agent or these components directly:

```bash
yarn dev
# Visit http://localhost:3000
# Edit src/app/page.tsx to customize the example

# Then create new pages:
# src/app/features/page.tsx
# src/app/pricing/page.tsx
# src/app/blog/page.tsx
```

Each page should follow the pattern structure shown above. Happy building!
