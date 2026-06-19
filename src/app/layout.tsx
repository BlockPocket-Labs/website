import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blockpocketlabs.com"),
  title: {
    default: "BlockPocket Labs",
    template: "%s · BlockPocket Labs",
  },
  description:
    "Building simplified crypto products and tooling to make blockchain accessible for everyone.",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BlockPocket Labs",
    description: "Making crypto accessible to anyone.",
    url: "https://blockpocketlabs.com",
    siteName: "BlockPocket Labs",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "BlockPocket Labs" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111215",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen overflow-x-hidden flex flex-col"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
