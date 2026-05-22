import type { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  
  title: "Contact Us",
  description:
    "Talk to someone who knows the platforms. We respond within 4 hours on business days.",
  openGraph: {
    title: "Contact Us | Professional ITS",
    description: "Talk to someone who knows the platforms. We respond within 4 hours on business days..",
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
    title: "Contact Us | Professional ITS",
    description:
      "Talk to someone who knows the platforms. We respond within 4 hours on business days.",
    images: ["https://professionalits.com/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://professionalits.com/contact",
  "name": "Contact Us | Professional ITS",
  "description": "Talk to someone who knows the platforms. We respond within 4 hours on business days.",
  "mainEntity": {
    "@id": "https://professionalits.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://professionalits.com/og-image.png"
  },
  "potentialAction": {
    "@type": "ContactAction",
    "target": [
      {
        "@type": "EntryPoint",
        "urlTemplate": "mailto:info@professionalits.com",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
