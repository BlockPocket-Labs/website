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
      "Designed for newcomers and traditional users who want blockchain utility without the jargon.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff5e1 1px, transparent 1px),
              linear-gradient(to bottom, #fff5e1 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="mb-5 inline-block border border-charcoal-muted px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-cream-muted sm:mb-6 sm:text-xs">
                Block by block
              </p>

              <div className="mx-auto mb-8 w-36 sm:mb-10 sm:w-44 lg:hidden">
                <Image
                  src="/logo.png"
                  alt="BlockPocket Labs logo"
                  width={176}
                  height={176}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <h1 className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
                Making crypto
                <br />
                <span className="text-orange">accessible</span> to anyone
              </h1>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-cream-muted sm:mt-6 sm:text-base sm:leading-relaxed lg:text-lg">
                BlockPocket Labs builds simplified crypto products with AI
                built in to ease everyday use, helping new and traditional
                users get real value from blockchain technology.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="mailto:contact@blockpocket.co"
                  className="inline-flex items-center justify-center rounded-sm bg-orange px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-orange-hover sm:w-auto"
                >
                  Contact us
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-sm border border-charcoal-muted px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-cream-muted hover:text-cream sm:w-auto"
                >
                  About the lab
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <Image
                src="/logo.png"
                alt="BlockPocket Labs logo"
                width={280}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-charcoal-muted/40 bg-charcoal-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-bold tracking-tight text-cream sm:text-2xl lg:text-3xl">
              What we&apos;re building toward
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-muted sm:mt-4 sm:text-base">
              Blockchain has enormous potential, but most products are still
              built for insiders. We&apos;re closing that gap with tools that
              respect your time and intelligence.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-charcoal-muted/40 sm:mt-16 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group bg-charcoal-light p-6 transition-colors hover:bg-charcoal sm:p-8"
              >
                <h3 className="font-display text-lg font-semibold text-cream">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
