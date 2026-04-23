import type { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  title: "Contact Us – Professional ITS",
  description:
    "Get in touch with Professional ITS. Talk to an e-commerce back-office specialist. We respond within 4 hours on business days.",
  keywords: [
    "contact professional ITS",
    "ecommerce back-office contact",
    "catalog management enquiry",
  ],
  openGraph: {
    title: "Contact Us – Professional ITS",
    description: "Talk to someone who knows the platforms. We respond within 4 hours.",
    url: "https://professionalits.com/contact",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
