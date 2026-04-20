import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { SiShopify, SiEbay, SiWalmart, SiBigcommerce, SiWoocommerce, SiEtsy } from "react-icons/si";

export const metadata: Metadata = {
  title: "Professional ITS – E-Commerce Back-Office Specialists Since 2010",
  description:
    "Catalog operations, marketplace management, and store back-office for e-commerce businesses running 500 to 500,000 SKUs. Execution-heavy. SLA-backed. No lock-in.",
  alternates: {
    canonical: "https://professionalits.com",
  },
  openGraph: {
    title: "Professional ITS – E-Commerce Back-Office Specialists Since 2010",
    description: "Catalog operations, marketplace management, and store back-office for e-commerce businesses running 500 to 500,000 SKUs.",
    url: "https://professionalits.com",
    siteName: "Professional ITS",
    type: "website",
  },
};

const solutions = [
  {
    num: "01",
    title: "Catalog & product data operations",
    body: "High-SKU catalog builds, attribute structuring, bulk uploads, deduplication, and ongoing maintenance.",
    ai: true,
    href: "/solutions/catalog-product-data",
  },
  {
    num: "02",
    title: "Marketplace operations",
    body: "Listing optimisation, Buy Box strategy, suppressed listing management, competitor intelligence — on Amazon, eBay, Walmart.",
    ai: false,
    href: "/solutions/marketplace-operations",
  },
  {
    num: "03",
    title: "Ecommerce backoffice management",
    body: "Customer support, order processing, inventory monitoring, repricing — on an SLA you can hold us to.",
    ai: false,
    href: "/solutions/ecommerce-backoffice",
  },
  {
    num: "04",
    title: "Product data cleanup & optimisation",
    body: "Messy data costs you sales. We audit, deduplicate, enrich, and restructure — at scale.",
    ai: true,
    href: "/solutions/product-data-cleanup",
  },
  {
    num: "05",
    title: "High-SKU catalog scaling",
    body: "For distributors, wholesalers, and multi-brand sellers. Scale your catalog without scaling headcount.",
    ai: false,
    href: "/solutions/high-sku-scaling",
  },
];

const stats = [
  { n: "1500+", l: "E-commerce stores served globally" },
  { n: "98%", l: "Client retention rate, year on year" },
  { n: "4 hr", l: "Average response SLA across all accounts" },
  { n: "15 yrs", l: "In e-commerce operations — exclusively" },
];

const services = [
  { title: "Product data management", sub: "End-to-end" },
  { title: "Bulk product uploads", sub: "Any platform" },
  { title: "Attribute structuring", sub: "Filter-ready" },
  { title: "Image processing", sub: "Compliant sets" },
  { title: "Order & inventory", sub: "SLA-backed" },
];

const AmazonIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="1" y="13" fontSize="9" fontWeight="700" fill="#232F3E" fontFamily="Arial, sans-serif">amazon</text>
    <path d="M3 17c4 2.5 12 2.5 18-1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 14.5c1-1 2.5-.5 2 1" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MagentoIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" fill="#EE672F"/>
    <path d="M12 2v20" stroke="#fff" strokeWidth="1.5"/>
    <path d="M7.5 5L12 7.5 16.5 5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M7.5 5v9l4.5 2.5V9.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 5v9L12 16.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const marqueebrands = [
  { name: "Shopify",     color: "#96BF48", Icon: () => <SiShopify size={24} color="#96BF48" /> },
  { name: "eBay",        color: "#E53238", Icon: () => <SiEbay size={24} color="#E53238" /> },
  { name: "Walmart",     color: "#0071CE", Icon: () => <SiWalmart size={24} color="#0071CE" /> },
  { name: "BigCommerce", color: "#003087", Icon: () => <SiBigcommerce size={24} color="#003087" /> },
  { name: "WooCommerce", color: "#7F54B3", Icon: () => <SiWoocommerce size={24} color="#7F54B3" /> },
  { name: "Magento",     color: "#EE672F", Icon: MagentoIcon },
  { name: "Etsy",        color: "#F1641E", Icon: () => <SiEtsy size={24} color="#F1641E" /> },
  { name: "Amazon",      color: "#FF9900", Icon: AmazonIcon },
];

const trustItems = [
  { n: "Amazon", l: "Seller Central specialists" },
  { n: "Shopify", l: "Full back-office support" },
  { n: "eBay", l: "Cassini-optimised listings" },
];

export default function HomePage() {
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

      {/* Add this to your global CSS or a <style> tag */}
      <style>{`
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 48px;
    align-items: center;
    background-size: 91%;
    background-position: left center;
    background-repeat: no-repeat;
    background-color: #FDFAF5;
    padding: 64px 32px 56px;
    border-bottom: 0.5px solid #D5C9B0;
  }

  @media (max-width: 768px) {
    .hero-section {
      grid-template-columns: 1fr;
      gap: 32px;
      padding: 40px 20px 40px;
    }
  }

  .hero-stats-card {
    background: #F5F0E8;
    border-radius: 8px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    .hero-stats-card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }
    .hero-stats-label {
      grid-column: 1 / -1;
    }
    .hero-stat-item {
      padding: 14px 12px !important;
      border-bottom: 0.5px solid #D5C9B0 !important;
    }
    .hero-stat-item:nth-last-child(-n+2) {
      border-bottom: none !important;
    }
  }

  .hero-cta-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .trust-bar {
    background: #2D6A4F;
    padding: 14px 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    .trust-bar {
      grid-template-columns: repeat(3, 1fr);
      padding: 14px 12px;
    }
    .trust-bar-item {
      text-align: center !important;
    }
  }
`}</style>

      <section className="hero-section">
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: "#2D6A4F",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            E-COMMERCE BACK-OFFICE SPECIALISTS · SINCE 2010
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 500,
              lineHeight: 1.15,
              color: "#1C1C1C",
              marginBottom: "16px",
            }}
          >
            Your e-commerce back-office —{" "}
            <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>handled</em>{" "}
            by operators who know the platforms.
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#555550",
              lineHeight: 1.7,
              marginBottom: "28px",
              maxWidth: "460px",
            }}
          >
            Catalog operations, marketplace management, and store back-office
            for e-commerce businesses running 500 to 500,000 SKUs.
            Execution-heavy. SLA-backed. No lock-in.
          </p>
          <Link
            href="/solutions"
            className="hero-cta-row"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#2D6A4F",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Get free catalog audit
            </div>
            <div
              style={{
                border: "0.5px solid #B4B2A9",
                color: "#555550",
                padding: "12px 24px",
                borderRadius: "4px",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              See what we do
            </div>
          </Link>
        </div>

        <div className="hero-stats-card">
          <div
            className="hero-stats-label"
            style={{
              fontSize: "11px",
              color: "#888780",
              marginBottom: "14px",
              letterSpacing: "0.5px",
            }}
          >
            BUILT ON TRUST
          </div>
          {stats.map((s, i) => (
            <div
              key={i}
              className="hero-stat-item"
              style={{
                padding: "14px 0",
                borderBottom:
                  i < stats.length - 1 ? "0.5px solid #D5C9B0" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#2D6A4F",
                }}
              >
                {s.n}
              </div>
              <div
                style={{ fontSize: "12px", color: "#888780", marginTop: "2px" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        {trustItems.map((t) => (
          <div key={t.n} className="trust-bar-item" style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              {t.n}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "2px",
              }}
            >
              {t.l}
            </div>
          </div>
        ))}
      </div>

      {/* ── SOLUTIONS ── */}
      <style>{`
  .solutions-section {
    padding: 56px 32px;
    background: #FDFAF5;
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  @media (max-width: 1024px) {
    .solutions-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .solutions-section {
      padding: 40px 20px;
    }
    .solutions-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>

      <section className="solutions-section">
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          SOLUTIONS
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          The operational gap most e-commerce businesses don&apos;t talk about.
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#555550",
            lineHeight: 1.65,
            marginBottom: "32px",
            maxWidth: "560px",
          }}
        >
          Your products are good. Your marketing works. But the catalog, the
          listings, the support, the data — that&apos;s where capacity quietly
          disappears. We fill that gap.
        </p>

        <div className="solutions-grid">
          {solutions.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              style={{
                background: "#FDFAF5",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "20px",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  color: "#D5C9B0",
                  fontWeight: 500,
                  marginBottom: "12px",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "8px",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#555550",
                  lineHeight: 1.6,
                  marginBottom: "14px",
                }}
              >
                {s.body}
              </div>
              <div style={{ marginBottom: "10px" }}>
                {s.ai && (
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "10px",
                      color: "#2D6A4F",
                      background: "#E8F5EE",
                      padding: "3px 8px",
                      borderRadius: "3px",
                    }}
                  >
                    AI-assisted
                  </div>
                )}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#2D6A4F",
                  fontWeight: 500,
                }}
              >
                Learn more →
              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <Link
            href="/audit"
            style={{
              background: "#E8F5EE",
              border: "0.5px solid #9FE1CB",
              borderRadius: "8px",
              padding: "20px",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#085041",
                fontWeight: 500,
                marginBottom: "10px",
                letterSpacing: "0.5px",
              }}
            >
              NOT SURE WHERE TO START?
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#085041",
                marginBottom: "8px",
              }}
            >
              Free catalog audit
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#0F6E56",
                lineHeight: 1.6,
                marginBottom: "14px",
              }}
            >
              We review 50 of your SKUs — data completeness, listing quality,
              attribute accuracy — and deliver a written findings report.
            </div>
            <div
              style={{
                background: "#2D6A4F",
                color: "#fff",
                padding: "9px 16px",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: 500,
                display: "inline-block",
              }}
            >
              Claim free audit
            </div>
          </Link>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <style>{`
  .services-section {
    padding: 56px 32px;
    background: #F5F0E8;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .services-section {
      padding: 40px 20px;
    }
    .services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`}</style>

      <section className="services-section">
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          SERVICES
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          Every execution service we provide.
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#555550",
            lineHeight: 1.65,
            marginBottom: "32px",
          }}
        >
          For buyers who know exactly what they need.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#FDFAF5",
                border: "0.5px solid #D5C9B0",
                borderRadius: "6px",
                padding: "14px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#E8F5EE",
                  borderRadius: "4px",
                  margin: "0 auto 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#2D6A4F",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "4px",
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: "11px", color: "#888780" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BRANDS MARQUEE ── */}
      <div
        style={{
          padding: "40px 0",
          borderTop: "0.5px solid #D5C9B0",
          borderBottom: "0.5px solid #D5C9B0",
          background: "#FDFAF5",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "13px",
            letterSpacing: "1.5px",
            color: "#888780",
            fontWeight: 500,
            marginBottom: "28px",
          }}
        >
          Every channel that matters
        </div>

        <style>{`
          .marquee-inner { display: flex; animation: marquee 28s linear infinite; white-space: nowrap; }
          .marquee-inner:hover { animation-play-state: paused; }
           @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
         `}</style>

        <div
          style={{ display: "flex", overflow: "hidden", position: "relative" }}
        >
          {/* fade edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to right, #FDFAF5, transparent)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to left, #FDFAF5, transparent)",
              zIndex: 2,
            }}
          />

          <div className="marquee-inner">
            {[...marqueebrands, ...marqueebrands].map((brand, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0 36px",
                  borderRight: "0.5px solid #D5C9B0",
                  height: "56px",
                  flexShrink: 0,
                }}
              >
                <brand.Icon />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#555550",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AUDIT BANNER ── */}
      <div
        style={{
          background: "#1C1C1C",
          padding: "40px 32px",
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
            }}
          >
            Start with a free catalog audit — no commitment.
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "6px",
            }}
          >
            We review 50 SKUs, deliver a written report, and show you exactly
            what we&apos;d fix. No credit card required.
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
            cursor: "pointer",
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
