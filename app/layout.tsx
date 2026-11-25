import type { Metadata, Viewport } from "next";
import { Outfit, Poiret_One } from "next/font/google";
import "./globals.css";

/*
 * Stand-in fonts until the licensed brand fonts are available:
 * - Poiret One  -> SC Portugal (primary, display, used sparingly and large)
 * - Outfit      -> Fonseca (secondary, headings) and body text
 * To switch: load the brand fonts with next/font/local and point the
 * variables below at them.
 */
const display = Poiret_One({
  variable: "--font-stand-in-display",
  weight: "400",
  subsets: ["latin"],
});

const heading = Outfit({
  variable: "--font-stand-in-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorriso · Portuguese Espresso, Porto",
  description:
    "Sorriso is a Portuguese coffee house in Porto. Espresso, pastries and a smile in every cup.",
};

export const viewport: Viewport = {
  themeColor: "#071233",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${heading.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
