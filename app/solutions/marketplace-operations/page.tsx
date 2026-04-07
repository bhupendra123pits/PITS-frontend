import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace Operations – Professional ITS",
  description:
    "Amazon, eBay, Walmart, and more. Listing creation, optimisation, Buy Box strategy, suppressed listing management, and competitor intelligence — handled by specialists.",
  keywords: [
    "marketplace operations",
    "Amazon listing optimization",
    "eBay store management",
    "Buy Box strategy",
    "Walmart seller",
  ],
  openGraph: {
    title: "Marketplace Operations – Professional ITS",
    description:
      "Listing optimisation, Buy Box strategy, and competitor intelligence across Amazon, eBay, and Walmart.",
    url: "https://professionalits.com/solutions/marketplace-operations",
    siteName: "Professional ITS",
    type: "website",
  },
};

const platforms = [
  {
    name: "Amazon",
    color: "#FF9900",
    services: [
      "Listing creation — titles, bullets, descriptions, backend keywords",
      "A+ Content and Enhanced Brand Content",
      "Buy Box monitoring and repricing strategy",
      "Suppressed and stranded listing recovery",
      "FBA shipment planning and reconciliation",
      "Account health monitoring",
    ],
  },
  {
    name: "eBay",
    color: "#E53238",
    services: [
      "Cassini-optimised listing creation",
      "Item Specifics and category structuring",
      "Store design and category management",
      "Promoted Listings setup and management",
      "Seller performance monitoring",
      "Best Offer and auction management",
    ],
  },
  {
    name: "Walmart",
    color: "#0071CE",
    services: [
      "Seller Center setup and onboarding",
      "Listing creation and attribute mapping",
      "Buy Box strategy for Walmart marketplace",
      "Content score optimisation",
      "Order and fulfilment management",
      "Performance dashboard monitoring",
    ],
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

export default function MarketplaceOperationsPage() {
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
          <span style={{ color: "#2D6A4F" }}> / Marketplace Operations</span>
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
          Better listings. More visibility.{" "}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>
            Stronger Buy Box.
          </em>
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
          Amazon, eBay, Walmart, and more. Listing creation, optimisation, Buy
          Box strategy, suppressed listing management, and competitor
          intelligence — handled by specialists who work in Seller Central every
          day.
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
          { n: "3x", l: "Avg. visibility lift" },
          { n: "100+", l: "Stores managed" },
          { n: "15yrs", l: "Marketplace experience" },
          { n: "3", l: "Major platforms" },
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

      {/* ── PER PLATFORM ── */}
      <section
        className="platforms-section"
        style={{ borderBottom: "0.5px solid #D5C9B0" }}
      >
        <style>{`
    .platforms-section {
      padding: 56px 32px;
    }
    .platforms-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    @media (max-width: 1024px) {
      .platforms-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 640px) {
      .platforms-section {
        padding: 40px 16px;
      }
      .platforms-grid {
        grid-template-columns: 1fr;
      }
      .platforms-heading {
        font-size: 22px !important;
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
          BY PLATFORM
        </div>
        <h2
          className="platforms-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          Specialists on every platform.
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
          Each marketplace has its own algorithm, rules, and best practices. We
          don&apos;t generalise — we have dedicated specialists per platform.
        </p>

        <div className="platforms-grid">
          {platforms.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#FFFFFF",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: p.color,
                  marginBottom: "16px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {p.name}
              </div>
              {p.services.map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <CheckIcon />
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#555550",
                      lineHeight: 1.5,
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── ALSO SUPPORT ── */}
      <section
        style={{
          padding: "40px 32px",
          background: "#F5F0E8",
          borderBottom: "0.5px solid #D5C9B0",
        }}
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
          ALSO SUPPORTED
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            "Shopify",
            "Etsy",
            "BigCommerce",
            "WooCommerce",
            "OnBuy",
            "Fruugo",
            "Mirakl-based marketplaces",
          ].map((p) => (
            <div
              key={p}
              style={{
                border: "0.5px solid #D5C9B0",
                borderRadius: "3px",
                padding: "7px 16px",
                fontSize: "13px",
                color: "#555550",
                background: "#FDFAF5",
              }}
            >
              {p}
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
            Let specialists handle your marketplace operations.
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "440px",
              lineHeight: 1.7,
            }}
          >
            Start with a free catalog audit. We&apos;ll review your listings and
            show you exactly where you&apos;re losing visibility.
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
