import type { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  
  title: { absolute: "Professional ITS"},
  description:
    "Talk to someone who knows the platforms. We respond within 4 hours",
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
   twitter: {
    card: "summary_large_image",
    title: "Contact Us – Professional ITS",
    description:
      "Talk to someone who knows the platforms. We respond within 4 hours",
    images: ["https://professionalits.com/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
