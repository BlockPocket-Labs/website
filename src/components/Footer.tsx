import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal-muted/50 bg-charcoal pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                aria-hidden
              />
              <span className="font-display text-sm font-semibold text-cream">
                BlockPocket Labs
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-muted">
              Simplified crypto products and tooling for new and traditional
              users.
            </p>
            <p className="mt-3 text-xs text-cream-muted/60">Chennai, India</p>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream-muted/70">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream-muted/70">
              Contact
            </p>
            <ul className="mt-4 flex items-center gap-3">
              <li>
                <a
                  href="mailto:contact@blockpocket.co"
                  aria-label="Email contact@blockpocket.co"
                  className="inline-flex h-8 w-8 items-center justify-center text-cream-muted transition-colors hover:text-orange"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/blockpocketlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BlockPocket Labs on X"
                  className="inline-flex h-8 w-8 items-center justify-center text-base text-cream-muted transition-colors hover:text-cream"
                >
                  𝕏
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal-muted/30 pt-6 sm:mt-12">
          <p className="text-xs text-cream-muted/50">
            © 2026 BlockPocket Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
