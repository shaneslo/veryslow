/**
 * Home page - Showcase landing page
 * 
 * This demonstrates core Minimalist Monochrome patterns:
 * - Oversized serif typography (8xl-9xl headlines)
 * - Thick rules and borders for visual structure
 * - Color inversion (black cards on white)
 * - Texture patterns (horizontal lines, grids)
 * - Sharp geometry (0 border-radius everywhere)
 * - Instant hover states (100ms transitions)
 */

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-24 md:py-48 px-6 md:px-8 lg:px-12 relative">
        <div className="absolute inset-0 opacity-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                #000 1px,
                #000 2px
              )`,
              backgroundSize: '100% 4px',
              opacity: 0.015,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Decorative rule above */}
          <div className="mb-8 md:mb-12 h-2 w-24 bg-black" />

          {/* Oversized headline */}
          <h1 className="font-display text-9xl md:text-[10rem] tracking-tighter leading-none text-black mb-12">
            Veryslow
          </h1>

          {/* Thick rule separator */}
          <div className="h-1 w-full bg-black mb-12 md:mb-16" />

          {/* Subheading */}
          <p className="font-serif text-2xl md:text-3xl leading-relaxed max-w-2xl text-black mb-16">
            Building agentic AI applications with discipline, precision, and editorial elegance.
          </p>

          {/* CTA Button */}
          <button className="bg-black text-white px-8 py-4 font-mono uppercase tracking-widest text-sm border-none transition-colors duration-100 hover:bg-white hover:text-black hover:border-2 hover:border-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3 cursor-pointer">
            Explore Platform →
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-black" />

      {/* Features Section */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-white relative">
        <div className="absolute inset-0 opacity-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#00000008 1px, transparent 1px),
                linear-gradient(90deg, #00000008 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.015,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-display text-7xl md:text-8xl tracking-tighter leading-tight mb-16 md:mb-24">
            Core Features
          </h2>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Agentic Intelligence',
                description: 'Autonomous agents with reasoning, memory, and orchestration capabilities.'
              },
              {
                title: 'Design System',
                description: 'Minimalist Monochrome—editorial elegance through serif typography and precision.'
              },
              {
                title: 'Enterprise Grade',
                description: 'Built for scalability, reliability, and production-ready deployment.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 border-2 border-black transition-colors duration-100 hover:bg-black hover:text-white cursor-pointer"
              >
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight mb-4">
                  {feature.title}
                </h3>
                <p className="font-serif text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-black" />

      {/* Stats Section (Inverted) */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-black text-white relative">
        <div className="absolute inset-0 opacity-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 1px,
                #fff 1px,
                #fff 2px
              )`,
              backgroundSize: '4px 100%',
              opacity: 0.03,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { stat: '50+', label: 'Enterprise Clients' },
              { stat: '1M+', label: 'Conversations Daily' },
              { stat: '99.9%', label: 'Uptime SLA' }
            ].map((item, idx) => (
              <div key={idx}>
                <p className="font-display text-6xl md:text-7xl tracking-tighter leading-none mb-4">
                  {item.stat}
                </p>
                <p className="font-mono text-sm tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-black" />

      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 md:px-8 lg:px-12 bg-white text-black border-t border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-display text-2xl md:text-3xl tracking-tight mb-4">Veryslow</h4>
              <p className="font-serif text-base leading-relaxed text-muted-foreground">
                Agentic AI platform built with discipline and precision.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Documentation'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h5 className="font-display text-lg tracking-tight mb-4">
                  {section.title}
                </h5>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="font-serif text-base hover:border-b hover:border-black transition-all duration-100">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer divider */}
          <div className="h-px bg-border-light mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-sm tracking-widest text-muted-foreground">
              © 2026 Veryslow. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-black transition-colors duration-100"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
