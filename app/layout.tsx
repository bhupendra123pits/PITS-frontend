import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional ITS – E-Commerce Back-Office Specialists Since 2009",
  description:
    "Catalog operations, marketplace management, and store back-office for e-commerce businesses running 500 to 500,000 SKUs. Execution-heavy. SLA-backed. No lock-in.",
  keywords: [
    "ecommerce back-office",
    "catalog management",
    "Amazon seller central",
    "eBay listing optimization",
    "Shopify product management",
    "bulk product uploads",
  ],
  openGraph: {
    title: "Professional ITS – E-Commerce Back-Office Specialists",
    description:
      "Catalog operations, marketplace management, and store back-office for e-commerce businesses.",
    url: "https://professionalits.com",
    siteName: "Professional ITS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
