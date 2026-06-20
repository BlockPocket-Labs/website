import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-muted/60 bg-charcoal/90 backdrop-blur-md">
      <div className="relative flex h-14 w-full items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/logo.png"
            alt="BlockPocket Labs"
            width={36}
            height={36}
            className="shrink-0 transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="truncate font-display text-sm font-semibold tracking-tight text-cream sm:text-base">
            BlockPocket Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-muted transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:contact@blockpocketlabs.com"
            className="rounded-sm bg-orange px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-orange-hover"
          >
            Get in touch
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
