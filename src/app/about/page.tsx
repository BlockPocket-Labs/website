import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BlockPocket Labs — our mission to make crypto accessible through simplified products and tooling.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <p className="text-xs font-medium uppercase tracking-widest text-cream-muted">
        About Us
      </p>

      <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-cream sm:text-4xl">
        A lab for simpler crypto
      </h1>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-cream-muted">
        <p>
          BlockPocket Labs is a product studio focused on making blockchain
          technology usable for everyone — not just the people who already
          live inside it.
        </p>

        <p>
          We believe crypto&apos;s promise has been held back by unnecessary
          complexity. Wallets, bridges, gas fees, seed phrases — the barrier
          to entry is real, and most tooling is built assuming you already
          know the language. We&apos;re changing that.
        </p>

        <p>
          Our work spans simplified crypto products and developer tooling,
          with AI-assisted interfaces that guide users through decisions
          instead of leaving them to figure it out alone. Whether someone is
          sending their first transaction or a traditional business exploring
          on-chain payments, our goal is the same: remove friction without
          removing control.
        </p>

        <p>
          Based in Chennai, India, we&apos;re a small team with a clear
          thesis — build things that work, explain them clearly, and treat
          every user like they deserve a product that respects their time.
        </p>
      </div>

      <div className="mt-12 border-t border-charcoal-muted/40 pt-8">
        <h2 className="font-display text-lg font-semibold text-cream">
          What drives us
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream-muted">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
            Accessibility over exclusivity — crypto should be open to anyone
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard" />
            Clarity over cleverness — if it needs a tutorial, we haven&apos;t
            finished designing it
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            Utility over hype — products that solve real problems, not
            novelty for its own sake
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
            Security by default — simplicity never comes at the cost of
            safety
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <Link
          href="mailto:contact@blockpocket.co"
          className="inline-flex items-center rounded-sm bg-orange px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-orange-hover"
        >
          Contact us
        </Link>
      </div>
    </article>
  );
}
