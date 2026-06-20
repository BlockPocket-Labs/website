import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Simplified onboarding",
    description:
      "We strip away complexity so new users can start using blockchain without a steep learning curve.",
  },
  {
    title: "Products that work",
    description:
      "Purpose-built devices and products for everyday crypto, not bloated dashboards built for traders only.",
  },
  {
    title: "AI-assisted clarity",
    description:
      "Smart guidance that explains what matters, when it matters, in language anyone can follow.",
  },
  {
    title: "Built for real people",
    description:
      "Designed for newcomers and traditional users who want blockchain utility without complexity.",
  },
];

const products = [
  {
    name: "BlockPocket Device",
    description: "Hardware wallet reimagined for simplicity",
  },
  {
    name: "BlockPocket App",
    description: "Mobile-first crypto management",
  },
  {
    name: "AI Assistant",
    description: "Smart guidance built into every product",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero pointer-events-none absolute inset-0" />
        <div className="gradient-glow pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pb-40 lg:pt-32">
          <div className="flex flex-col items-center text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-orange/20 bg-orange/5 px-4 py-2 sm:mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange sm:text-sm">
                Block by block
              </span>
            </div>

            {/* Logo */}
            <div className="mb-8 w-24 sm:mb-12 sm:w-32 md:w-40">
              <Image
                src="/logo.png"
                alt="BlockPocket Labs logo"
                width={160}
                height={160}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl">
              Making crypto
              <br />
              <span className="bg-gradient-to-r from-orange to-orange/60 bg-clip-text text-transparent">
                accessible
              </span>
              <br />
              to anyone
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream-muted sm:mt-10 sm:text-lg lg:text-xl">
              BlockPocket Labs builds simplified crypto products with AI built in to ease everyday use, helping new and traditional users get real value from blockchain technology.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
              <a
                href="mailto:contact@blockpocketlabs.com"
                className="btn-primary inline-flex items-center justify-center sm:px-8 sm:py-4"
              >
                Contact us
              </a>
              <Link
                href="#vision"
                className="btn-ghost inline-flex items-center justify-center sm:px-8 sm:py-4"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-spacing border-t border-charcoal-muted/20">
        <div className="mx-auto max-w-7xl">
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
                Our vision
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream-muted sm:text-lg">
                Blockchain technology has enormous potential to reshape how we manage money and assets. But right now, most crypto products are built for insiders—traders, developers, and crypto evangelists. This leaves everyone else behind.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream-muted sm:text-lg">
                We&apos;re changing that. We believe crypto should work for normal people doing normal things. That&apos;s why we build products that are simple, purposeful, and respectful of your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-spacing border-t border-charcoal-muted/20 bg-charcoal-light/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            What we&apos;re building
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-muted sm:text-lg">
            Purpose-built for the everyday person. Devices and software that respect your intelligence.
          </p>

          <div className="mt-12 grid-12">
            {products.map((product) => (
              <div
                key={product.name}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              >
                <div className="glass glass-hover group relative overflow-hidden rounded-xl p-8 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 h-12 w-12 rounded-lg bg-orange/10 group-hover:bg-orange/20" />
                    <h3 className="font-display text-xl font-semibold text-cream">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section id="why" className="section-spacing border-t border-charcoal-muted/20">
        <div className="mx-auto max-w-7xl">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
                Why we exist
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <p className="text-base leading-relaxed text-cream-muted sm:text-lg">
                The crypto industry has built an enormous wall of jargon and complexity around technology that should empower people. We exist to tear that wall down.
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream-muted sm:text-lg">
                We believe that real adoption comes from products that make sense to regular people—not from marketing hype or technical complexity. Every product we build is designed with one principle in mind: clarity first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Future Section */}
      <section id="future" className="section-spacing border-t border-charcoal-muted/20 bg-charcoal-light/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Building the future of crypto
          </h2>

          <div className="mt-12 grid-12">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="glass glass-hover group relative overflow-hidden rounded-xl p-8 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-cream">
                    Human-Centered Design
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    Every feature is tested with real users, prioritizing clarity and intuition over technical depth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="glass glass-hover group relative overflow-hidden rounded-xl p-8 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-cream">
                    AI-Assisted Guidance
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    Smart assistance that explains what matters, when it matters, in language anyone can understand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="glass glass-hover group relative overflow-hidden rounded-xl p-8 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-cream">
                    Security Without Compromise
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    Enterprise-grade security that feels invisible to the user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="section-spacing border-t border-charcoal-muted/20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Our approach
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-muted sm:text-lg">
            How we build products that actually work for real people.
          </p>

          <div className="mt-12 grid-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
              >
                <div className="glass group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:bg-orange/5">
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing border-t border-charcoal-muted/20 bg-charcoal-light/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Let&apos;s build together
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream-muted sm:text-lg">
            We&apos;re looking for partners, investors, and talent who believe in making crypto accessible. Reach out if you want to join us on this mission.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <a
              href="mailto:contact@blockpocketlabs.com"
              className="btn-primary inline-flex items-center justify-center sm:px-8 sm:py-4"
            >
              Get in touch
            </a>
            <a
              href="https://x.com/BlockPocketLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center sm:px-8 sm:py-4"
            >
              Follow us on X
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
