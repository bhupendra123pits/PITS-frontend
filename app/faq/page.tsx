import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Professional ITS — catalog size, SLAs, supported platforms and marketplaces, contracts, and getting started.",
  alternates: {
    canonical: "https://professionalits.com/faq",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Frequently Asked Questions | Professional ITS",
    description:
      "Common questions about Professional ITS — catalog size, SLAs, supported platforms and marketplaces, contracts, and getting started.",
    url: "https://professionalits.com/faq",
    siteName: "Professional ITS",
    type: "website",
    images: [
      {
        url: "https://professionalits.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional ITS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Professional ITS",
    description:
      "Common questions about Professional ITS — catalog size, SLAs, supported platforms and marketplaces, contracts, and getting started.",
    images: ["https://professionalits.com/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the minimum catalog size you work with?",
    a: "We work with e-commerce businesses running 500 to 500,000 SKUs. If your catalog is smaller, we recommend starting with a free audit to assess fit.",
  },
  {
    q: "What is your response SLA?",
    a: "Our average response SLA is 4 hours across all accounts, maintained consistently regardless of engagement size.",
  },
  {
    q: "Which platforms and marketplaces do you support?",
    a: "We support Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion as platforms. For marketplaces: Amazon, eBay, Walmart, Etsy, BestBuy, Newegg, Houzz, Rakuten, and Poshmark.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "No. Professional ITS operates without long-term contracts or lock-in. Engagements can scale up or down based on actual workload.",
  },
  {
    q: "How do I get started?",
    a: "Start with a free catalog audit. We review 50 of your SKUs, check data completeness and listing quality, and deliver a written findings report within 48 hours. No credit card required.",
  },
];

export default function FaqPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
        lineHeight: 1.5,
      }}
    >
      <style>{`
        .faq-details { border-top: 0.5px solid #D5C9B0; }
        .faq-details:last-child { border-bottom: 0.5px solid #D5C9B0; }
        .faq-summary {
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 22px 0;
          font-size: 15px;
          font-weight: 500;
          color: #1C1C1C;
          font-family: var(--font-sans);
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-summary::after {
          content: "+";
          color: #2D6A4F;
          font-size: 22px;
          font-weight: 400;
          line-height: 1;
          flex-shrink: 0;
        }
        .faq-details[open] .faq-summary::after { content: "−"; }
        .faq-body { padding-bottom: 20px; }
        .faq-body p {
          font-size: 14px;
          color: #555550;
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 880px) {
          .faq-hero-h1 { font-size: 32px !important; }
        }
      `}</style>

      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            url: "https://professionalits.com/faq",
            name: "Frequently Asked Questions | Professional ITS",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <header
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "#2D6A4F" }}>FAQ</span>
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "12px",
            marginTop: "10px",
          }}
        >
          FAQ
        </div>
        <h1
          className="faq-hero-h1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#1C1C1C",
          }}
        >
          Frequently asked questions.
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          Common questions about working with Professional ITS. Don&apos;t see
          your question here?{" "}
          <Link
            href="/contact"
            style={{ color: "#2D6A4F", fontWeight: 600, textDecoration: "none" }}
          >
            Get in touch
          </Link>
          .
        </p>
      </header>

      {/* FAQ Accordion */}
      <section style={{ padding: "56px 32px", background: "#FDFAF5" }}>
        <div>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-summary">{faq.q}</summary>
              <div className="faq-body">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTAs */}
      <section style={{ background: "#FDFAF5", padding: "0 32px 56px" }}>
        <div style={{ display: "grid", gap: "16px" }}>
          {/* Primary */}
          <div
            style={{
              background: "#2D6A4F",
              borderRadius: "8px",
              padding: "32px",
              color: "#fff",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "0 0 10px 0",
              }}
            >
              Ready to see what we&apos;d fix?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 20px",
                fontSize: "13px",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Start with a free catalog audit. We review 50 of your SKUs, check
              data completeness and listing quality, and deliver a written
              findings report within 48 hours. No credit card required.
            </p>
            <Link
              href="/audit"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#2D6A4F",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Get free catalog audit →
            </Link>
          </div>

          {/* Secondary */}
          <div
            style={{
              background: "#F5F0E8",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "0 0 10px 0",
              }}
            >
              Have a specific question?
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.7,
                margin: "0 0 20px",
              }}
            >
              Tell us about your store and what you&apos;re trying to solve.
              We&apos;ll come back with a scoped quote within 4 business hours.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#2D6A4F",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Get a custom quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
