import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
  metadataBase: new URL('https://professionalits.com'),
  title: {
    default: 'Ecommerce Back-Office Specialists Since 2009 | Professional ITS',
    template: '%s | Professional ITS',
  },
  description:
    "Ecommerce back-office specialists since 2009. Catalog management, marketplace operations, and store back-office for online sellers running 500 to 500,000 SKUs. SLA-backed. No lock-in.",
    robots: { index: true, follow: true },
    alternates: { canonical: '/' },
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
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional ITS – E-Commerce Back-Office Specialists",
    description:
      "Catalog operations, marketplace management, and store back-office for e-commerce businesses.",
    images: ["https://professionalits.com/og-image.png"],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
 

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
