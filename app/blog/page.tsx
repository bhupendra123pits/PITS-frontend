import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — E-Commerce Operations Insights | Professional ITS",
  description:
    "Practical guides and insights on catalog management, marketplace operations, and e-commerce back-office — from the team at Professional ITS.",
  alternates: {
    canonical: "https://professionalits.com/blog",
  },
  openGraph: {
    title: "Blog — E-Commerce Operations Insights | Professional ITS",
    description:
      "Practical guides and insights on catalog management, marketplace operations, and e-commerce back-office — from the team at Professional ITS.",
    url: "https://professionalits.com/blog",
    siteName: "Professional ITS",
    type: "website",
    images: [
      {
        url: "https://professionalits.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional ITS Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — E-Commerce Operations Insights | Professional ITS",
    description:
      "Practical guides and insights on catalog management, marketplace operations, and e-commerce back-office — from the team at Professional ITS.",
    images: ["https://professionalits.com/og-image.png"],
  },
};

const posts = [
  {
    tag: "Catalog Operations",
    title: "Why Product Attribute Completeness Affects Amazon Search Rank More Than You Think",
    excerpt:
      "Incomplete attributes silently suppress listings. We break down which fields Amazon's A9 algorithm weights most — and what a typical audit finds missing.",
    date: "April 22, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Marketplace Management",
    title: "The Hidden Cost of Manual Order Processing at Scale",
    excerpt:
      "When order volume crosses 500 per day, manual processing stops being slow and starts being a revenue risk. Here's how to identify the tipping point in your operation.",
    date: "April 10, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Product Data",
    title: "Bulk Upload Errors: The Six That Cause 80% of Listing Failures",
    excerpt:
      "After processing millions of SKUs across Shopify, BigCommerce, and Amazon, these six data errors show up more than all others combined.",
    date: "March 28, 2026",
    readTime: "7 min read",
  },
  {
    tag: "Catalog Operations",
    title: "How to Audit 10,000 SKUs Without Losing Your Mind",
    excerpt:
      "A structured approach to large-scale catalog audits — what to sample, what to measure, and how to prioritize cleanup without starting from scratch.",
    date: "March 14, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Marketplace Management",
    title: "Walmart Marketplace vs. Amazon: What the Back-Office Differences Actually Mean",
    excerpt:
      "The two platforms look similar on the surface. Operationally, they're built on very different logic — feed formats, case workflows, pricing rules, and suppression behavior all diverge.",
    date: "February 27, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Image Processing",
    title: "E-Commerce Image Requirements: Platform-by-Platform Guide for 2026",
    excerpt:
      "Amazon, Walmart, Shopify, eBay — each platform has different specs. This guide covers the technical requirements and the common mistakes that get listings pulled.",
    date: "February 12, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Operations",
    title: "Scaling from 5,000 to 50,000 SKUs: What Actually Breaks First",
    excerpt:
      "Most catalog operations that work at 5K SKUs have hidden failure points. We document the five operational bottlenecks that surface predictably as catalogs grow 10x.",
    date: "January 30, 2026",
    readTime: "9 min read",
  },
  {
    tag: "Product Data",
    title: "Why Your Category Tree Structure Determines Your Search Visibility",
    excerpt:
      "Taxonomy choices made at catalog setup persist for years — and bad ones quietly suppress discoverability. How to audit and correct category assignments at scale.",
    date: "January 16, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Marketplace Management",
    title: "eBay Listing Suppression: Causes, Patterns, and How to Recover at Volume",
    excerpt:
      "eBay's policy-driven suppression system is more aggressive than most sellers expect. We cover the top suppression triggers and the workflow to clear them systematically.",
    date: "January 5, 2026",
    readTime: "7 min read",
  },
];

const tagColors: Record<string, string> = {
  "Catalog Operations": "#2D6A4F",
  "Marketplace Management": "#1C5A8F",
  "Product Data": "#7A4F1C",
  "Image Processing": "#5A1C4F",
  "Operations": "#4F3A1C",
};

export default function BlogPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            url: "https://professionalits.com/blog",
            name: "Professional ITS Blog",
            description:
              "Practical guides on catalog management, marketplace operations, and e-commerce back-office.",
            publisher: {
              "@type": "Organization",
              name: "Professional ITS",
              url: "https://professionalits.com",
            },
          }),
        }}
      />

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .blog-card {
          background: #fff;
          border: 0.5px solid #D5C9B0;
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s, box-shadow 0.15s;
          cursor: pointer;
        }
        .blog-card:hover {
          border-color: #2D6A4F;
          box-shadow: 0 2px 12px rgba(45, 106, 79, 0.08);
        }
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-hero {
            padding: 40px 20px !important;
          }
          .blog-section {
            padding: 40px 20px !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section
        className="blog-hero"
        style={{
          padding: "56px 32px",
          borderBottom: "0.5px solid #D5C9B0",
          background: "#FDFAF5",
        }}
      >
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "#2D6A4F" }}>Blog</span>
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
          PROFESSIONAL ITS BLOG
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#1C1C1C",
            marginBottom: "16px",
            maxWidth: "640px",
          }}
        >
          Operational insights for e-commerce back-office teams.
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#555550",
            lineHeight: 1.75,
            maxWidth: "560px",
          }}
        >
          Practical guides on catalog operations, marketplace management, and product data — written by the team that handles it at scale.
        </p>
      </section>

      {/* Posts grid */}
      <section
        className="blog-section"
        style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.title} className="blog-card">
              <div
                style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.8px",
                  color: tagColors[post.tag] ?? "#2D6A4F",
                  background: `${tagColors[post.tag] ?? "#2D6A4F"}14`,
                  padding: "3px 8px",
                  borderRadius: "3px",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                }}
              >
                {post.tag}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  lineHeight: 1.4,
                  marginBottom: "12px",
                  flex: 1,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  color: "#555550",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "#B4B2A9",
                  borderTop: "0.5px solid #EDE8DE",
                  paddingTop: "14px",
                  marginTop: "auto",
                }}
              >
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <div
        style={{
          background: "#1C1C1C",
          padding: "40px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 3vw, 22px)",
              color: "#fff",
              fontWeight: 500,
              marginBottom: "8px",
            }}
          >
            See how we handle catalog operations for your store.
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              maxWidth: "460px",
            }}
          >
            Start with a free catalog audit — we review 50 of your SKUs and deliver a written findings report. No credit card, no commitment.
          </div>
        </div>
        <Link
          href="/audit"
          style={{
            background: "#2D6A4F",
            color: "#fff",
            padding: "13px 28px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
