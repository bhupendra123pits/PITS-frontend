import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Data Cleanup & Optimisation – Professional ITS",
  description:
    "Messy data costs you sales. We audit, deduplicate, enrich, and restructure your product data — whether it's 200 SKUs or 200,000. Flat files, feeds, and direct platform uploads.",
  keywords: [
    "product data cleanup",
    "catalog deduplication",
    "ecommerce data audit",
    "product data enrichment",
    "SKU cleanup",
  ],
  openGraph: {
    title: "Product Data Cleanup & Optimisation – Professional ITS",
    description:
      "We audit, deduplicate, enrich, and restructure your product data at any scale.",
    url: "https://professionalits.com/solutions/product-data-cleanup",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/solutions/product-data-cleanup",
  },
};

const problems = [
  {
    title: "Duplicate SKUs",
    body: "Same product listed multiple times with different IDs, titles, or attributes — confusing buyers and splitting your sales.",
  },
  {
    title: "Missing attributes",
    body: "Blank fields, missing specs, empty filter values — products that can't be found in search.",
  },
  {
    title: "Wrong categories",
    body: "Products in the wrong Browse Node or category tree — invisible to buyers browsing by category.",
  },
  {
    title: "Inconsistent formatting",
    body: "Mixed units, inconsistent capitalisation, non-standard values — breaking filters and bulk exports.",
  },
];

const process = [
  {
    n: "01",
    title: "Full audit",
    body: "We score your catalog across completeness, accuracy, and formatting — every SKU gets a pass/fail on each dimension.",
  },
  {
    n: "02",
    title: "Deduplication",
    body: "Duplicate detection using title, ASIN, EAN, and attribute matching. Merge or remove — your choice.",
  },
  {
    n: "03",
    title: "Enrichment",
    body: "Missing attributes filled using AI-assisted extraction from datasheets, PDFs, and manufacturer pages.",
  },
  {
    n: "04",
    title: "Restructure",
    body: "Categories corrected, attributes standardised, formatting normalised — platform-ready output.",
  },
  {
    n: "05",
    title: "QA & report",
    body: "Post-cleanup accuracy check. Written findings report delivered with before/after scoring.",
  },
];

const CheckIcon = () => (
  <div
    style={{
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      background: "#E8F5EE",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2px",
    }}
  >
    <svg
      viewBox="0 0 10 10"
      style={{ width: "10px", height: "10px" }}
      fill="none"
    >
      <path
        d="M2 5L4.5 7.5L8 3"
        stroke="#2D6A4F"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function ProductDataCleanupPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      {/* ── HERO ── */}
      <div
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div
          style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}
        >
          <Link
            href="/solutions"
            style={{ color: "#888780", textDecoration: "none" }}
          >
            Solutions
          </Link>
          <span style={{ color: "#2D6A4F" }}> / Product Data Cleanup</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#E8F5EE",
            color: "#085041",
            fontSize: "10px",
            padding: "4px 10px",
            borderRadius: "3px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#2D6A4F",
            }}
          />
          AI-assisted
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#1C1C1C",
            marginBottom: "14px",
          }}
        >
          Messy data is costing you{" "}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>sales.</em>
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.75,
            maxWidth: "580px",
            marginBottom: "28px",
          }}
        >
          We audit, deduplicate, enrich, and restructure your product data —
          whether it&apos;s 200 SKUs or 200,000. We work with feeds, flat files,
          and direct platform uploads.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            href="/audit"
            style={{
              background: "#2D6A4F",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get free catalog audit
          </Link>
          <Link
            href="/pricing"
            style={{
              border: "0.5px solid #B4B2A9",
              color: "#555550",
              padding: "12px 24px",
              borderRadius: "4px",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            View pricing
          </Link>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div
        style={{
          background: "#2D6A4F",
          padding: "20px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {[
          { n: "72hr", l: "1,000 SKU cleanup" },
          { n: "99.1%", l: "Post-clean accuracy" },
          { n: "200K+", l: "SKUs cleaned to date" },
          { n: "AI", l: "Assisted enrichment" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "2px",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* ── THE PROBLEM ── */}
      <section
        style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          THE PROBLEM
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          What bad data looks like in practice.
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "36px",
          }}
        >
          Most sellers don&apos;t realise how much bad data is hurting their
          visibility and conversion. These are the four most common issues we
          find.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "16px",
          }}
        >
          {problems.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#FDF8F0",
                border: "0.5px solid #EDE5D5",
                borderRadius: "8px",
                padding: "20px",
                borderLeft: "3px solid #D5C9B0",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "8px",
                }}
              >
                {p.title}
              </div>
              <div
                style={{ fontSize: "13px", color: "#555550", lineHeight: 1.6 }}
              >
                {p.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section
        className="process-section"
        style={{ background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <style>{`
    .process-section {
      padding: 56px 32px;
    }
    .process-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
    }
    .process-arrow {
      display: block;
    }
    @media (max-width: 1024px) {
      .process-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 640px) {
      .process-section {
        padding: 40px 16px;
      }
      .process-heading {
        font-size: 22px !important;
        margin-bottom: 28px !important;
      }
      .process-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      .process-arrow {
        display: none;
      }
    }
  `}</style>

        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          OUR PROCESS
        </div>
        <h2
          className="process-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "36px",
          }}
        >
          Audit → Clean → Restructure → Deliver.
        </h2>

        <div className="process-grid">
          {process.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "32px",
                  color: "#D5C9B0",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "6px",
                }}
              >
                {s.title}
              </div>
              <div
                style={{ fontSize: "12px", color: "#555550", lineHeight: 1.6 }}
              >
                {s.body}
              </div>
              {i < process.length - 1 && (
                <div
                  className="process-arrow"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "-6px",
                    fontSize: "16px",
                    color: "#D5C9B0",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section
        style={{ padding: "40px 32px", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          WHAT&apos;S INCLUDED
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "10px",
          }}
        >
          {[
            "Full catalog data audit and completeness scoring",
            "Duplicate detection and merging",
            "Missing attribute identification and enrichment",
            "Category and subcategory correction",
            "Title and description standardisation",
            "Post-cleanup QA and accuracy report",
            "Works with flat files, CSVs, and direct platform exports",
            "Delivery as upload-ready file or direct platform upload",
          ].map((item) => (
            <div
              key={item}
              style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <CheckIcon />
              <span
                style={{ fontSize: "13px", color: "#555550", lineHeight: 1.5 }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div
        style={{
          background: "#1C1C1C",
          padding: "48px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              color: "#fff",
              fontWeight: 500,
              marginBottom: "8px",
            }}
          >
            See exactly what&apos;s wrong with your data.
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "440px",
              lineHeight: 1.7,
            }}
          >
            Free 50-SKU audit. Written findings report in 48 hours. We&apos;ll
            show you exactly what we&apos;d fix first.
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
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
