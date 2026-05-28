import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for BlockPocket Labs website and services.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <p className="text-xs font-medium uppercase tracking-widest text-cream-muted">
        Legal
      </p>

      <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-cream sm:text-4xl">
        Terms & Conditions
      </h1>

      <p className="mt-4 text-sm text-cream-muted">
        Last updated: January 1, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-cream-muted">
        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            1. Agreement to Terms
          </h2>
          <p className="mt-3">
            By accessing or using the BlockPocket Labs website at
            blockpocketlabs.com and any related services (collectively, the
            &ldquo;Services&rdquo;), you agree to be bound by these Terms and
            Conditions. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            2. About BlockPocket Labs
          </h2>
          <p className="mt-3">
            BlockPocket Labs (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a product studio that builds simplified
            crypto products and tooling. Our Services may include websites,
            applications, and related digital products as they become
            available.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            3. Use of Services
          </h2>
          <p className="mt-3">
            You agree to use our Services only for lawful purposes and in
            accordance with these Terms. You may not use our Services in any
            way that violates applicable laws, infringes on the rights of
            others, or attempts to interfere with the proper functioning of
            our systems.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            4. No Financial Advice
          </h2>
          <p className="mt-3">
            Nothing on our website or within our Services constitutes financial,
            investment, legal, or tax advice. Cryptocurrency and blockchain
            technologies involve significant risk. You are solely responsible
            for your own decisions and should consult qualified professionals
            before making financial decisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            5. Intellectual Property
          </h2>
          <p className="mt-3">
            All content, branding, logos, and materials on our website are
            owned by BlockPocket Labs or our licensors and are protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            6. Third-Party Services
          </h2>
          <p className="mt-3">
            Our Services may link to or integrate with third-party platforms,
            wallets, or blockchain networks. We are not responsible for the
            content, policies, or practices of any third party. Your use of
            third-party services is at your own risk and subject to their
            respective terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            7. Disclaimer of Warranties
          </h2>
          <p className="mt-3">
            Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis without warranties of any kind, whether
            express or implied. We do not guarantee that our Services will be
            uninterrupted, error-free, or secure at all times.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            8. Limitation of Liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, BlockPocket Labs shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of our Services, including
            but not limited to loss of funds, data, or profits.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            9. Changes to These Terms
          </h2>
          <p className="mt-3">
            We may update these Terms from time to time. We will post the
            revised version on this page with an updated date. Continued use
            of our Services after changes constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-cream">
            10. Contact
          </h2>
          <p className="mt-3">
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:contact@blockpocket.co"
              className="text-cream underline underline-offset-2 transition-colors hover:text-orange"
            >
              contact@blockpocket.co
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-cream-muted underline underline-offset-2 transition-colors hover:text-cream"
        >
          ← Back to home
        </Link>
      </div>
    </article>
  );
}
