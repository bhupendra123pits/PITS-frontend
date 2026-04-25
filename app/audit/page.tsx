import type { Metadata } from "next";
import AuditClient from "./auditclient";

export const metadata: Metadata = {
  title: "Free Catalog Audit – Professional ITS",
  description:
    "We review 50 of your SKUs and deliver a written findings report. No credit card, no sales call, no commitment. Find out what we'd fix.",
  keywords: [
    "free ecommerce catalog audit",
    "product listing audit",
    "Amazon catalog review",
    "Shopify product data audit",
    "ecommerce back-office",
  ],
  openGraph: {
    title: "Free Catalog Audit – Professional ITS",
    description:
      "Free 50-SKU audit. Written report in 48 hours. No credit card. No commitment.",
    url: "https://professionalits.com/audit",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/audit",
  },
};

export default function AuditPage() {
  return <AuditClient />;
}