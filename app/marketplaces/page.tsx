import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplaces – Professional ITS",
  description:
    "Dedicated marketplace specialists for Amazon, eBay, Walmart, Etsy, BestBuy, Newegg, Houzz, Rakuten, and Poshmark. Listing creation, Buy Box strategy, and account management.",
  keywords: [
    "marketplace management",
    "Amazon listing optimization",
    "eBay store management",
    "Walmart marketplace",
    "Etsy SEO",
  ],
  openGraph: {
    title: "Marketplaces – Professional ITS",
    description:
      "Dedicated specialists for every major marketplace. Listings, Buy Box, account health — handled.",
    url: "https://professionalits.com/marketplaces",
    siteName: "Professional ITS",
    type: "website",
  },
  alternates: {
    canonical: "https://professionalits.com/marketplaces",
  },
};

const marketplaces = [
  {
    name: "Amazon",
    color: "#FF9900",
    href: "/marketplaces/amazon",
    sub: "Listings, Buy Box, A+ Content",
    tagline: "The most complex marketplace. Handled by Seller Central specialists who work in it every day.",
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
    href: "/marketplaces/ebay",
    sub: "Listings, Promoted Ads, store",
    tagline: "Cassini-optimised listings and store management to maximise visibility and conversion.",
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
    href: "/marketplaces/walmart",
    sub: "Listings, Buy Box, fulfilment",
    tagline: "Full Seller Center management — from onboarding to ongoing Buy Box and content score optimisation.",
    services: [
      "Seller Center setup and onboarding",
      "Listing creation and attribute mapping",
      "Buy Box strategy for Walmart marketplace",
      "Content score optimisation",
      "Order and fulfilment management",
      "Performance dashboard monitoring",
    ],
  },
  {
    name: "Etsy",
    color: "#F1641E",
    href: "/marketplaces/etsy",
    sub: "Listings, SEO, shop setup",
    tagline: "SEO-driven listings and shop management tailored to Etsy's unique search algorithm.",
    services: [
      "Listing creation with Etsy SEO — titles, tags, and descriptions",
      "Keyword research for Etsy search algorithm",
      "Shop section and category organisation",
      "Product photography editing to Etsy image standards",
      "Pricing research and competitor analysis",
      "Shipping profile setup and management",
    ],
  },
  {
    name: "BestBuy",
    color: "#003B64",
    href: "/marketplaces/bestbuy",
    sub: "Onboarding, listings, compliance",
    tagline: "Strict compliance and technical listing standards met — from vendor portal setup to ongoing account management.",
    services: [
      "Seller onboarding and Marketplace setup via vendor portal",
      "Product listing creation and attribute mapping to BestBuy taxonomy",
      "Content quality compliance — meeting BestBuy's strict data standards",
      "Product description writing for tech and electronics",
      "Image specification compliance and upload management",
      "Order management and fulfilment tracking",
    ],
  },
  {
    name: "Newegg",
    color: "#E2231A",
    href: "/marketplaces/newegg",
    sub: "Listings, repricing, tech specs",
    tagline: "Technical product listing specialists for electronics, components, and tech accessories.",
    services: [
      "Seller account setup and storefront configuration",
      "Listing creation for electronics and tech accessories",
      "Attribute mapping to Newegg's category-specific item specifics",
      "Product description writing for specification-heavy products",
      "Promotional pricing and Newegg Flash deal management",
      "Competitor price monitoring and repricing",
    ],
  },
  {
    name: "Houzz",
    color: "#74B443",
    href: "/marketplaces/houzz",
    sub: "Listings, storefront, décor",
    tagline: "Home décor and furniture listing specialists — visual standards, Houzz taxonomy, and buyer-focused copy.",
    services: [
      "Seller account setup and Houzz Pro storefront configuration",
      "Product listing creation for home décor, furniture, and renovation",
      "Attribute and specification mapping to Houzz taxonomy",
      "Product description writing for design-conscious buyers",
      "Image editing and compliance with Houzz visual standards",
      "Customer enquiry handling and review management",
    ],
  },
  {
    name: "Rakuten",
    color: "#BF0000",
    href: "/marketplaces/rakuten",
    sub: "Listings, MQS, promotions",
    tagline: "Merchant Quality Score management and promotional campaign setup for Rakuten's brand-forward audience.",
    services: [
      "Seller account setup and storefront customisation",
      "Product listing creation and optimisation for Rakuten search",
      "Merchant Quality Score (MQS) monitoring and improvement",
      "Rakuten Super Points promotional campaign setup",
      "Image processing and storefront visual setup",
      "Customer support and order management",
    ],
  },
  {
    name: "Poshmark",
    color: "#CF1E55",
    href: "/marketplaces/poshmark",
    sub: "Closet, listings, engagement",
    tagline: "Algorithm-optimised closet management, listing creation, and community engagement.",
    services: [
      "Closet setup and brand profile optimisation",
      "Listing creation with Poshmark SEO — titles, descriptions, hashtags",
      "Algorithm optimisation — sharing cadence and listing refresh",
      "Pricing strategy and fee-structure-aware negotiation",
      "Bundle discount structuring and Offers to Likers management",
      "Community engagement and buyer communication",
    ],
  },
];

const CheckIcon = () => (
  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "9px", height: "9px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function MarketplacesPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#2D6A4F" }}> / Marketplaces</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Every marketplace you sell on,{" "}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>covered.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "560px", marginBottom: "28px" }}>
          Dedicated specialists per marketplace — not generalists. We know the algorithms, the compliance rules, and the levers that actually move results on each platform.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="/audit" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
            Get free catalog audit
          </Link>
          <Link href="/solutions/marketplace-operations" style={{ border: "0.5px solid #B4B2A9", color: "#555550", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", textDecoration: "none" }}>
            Marketplace operations
          </Link>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#2D6A4F", padding: "20px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[
          { n: "9", l: "Marketplaces covered" },
          { n: "3x", l: "Avg. visibility lift" },
          { n: "500+", l: "Stores managed" },
          { n: "17 yrs", l: "Marketplace experience" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── MARKETPLACE CARDS ── */}
      <style>{`
        .mkt-page { padding: 56px 32px; }
        .mkt-card { background: #fff; border: 0.5px solid #D5C9B0; border-radius: 8px; padding: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 16px; text-decoration: none; color: inherit; transition: border-color 0.15s; }
        .mkt-card:hover { border-color: #2D6A4F; }
        .mkt-card:hover .mkt-learn { color: #1a4a35; }
        .mkt-bullets { display: flex; flex-direction: column; gap: 8px; }
        @media (max-width: 768px) {
          .mkt-page { padding: 40px 16px; }
          .mkt-card { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 640px) {
          .mkt-stats { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      <section className="mkt-page">
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>ALL MARKETPLACES</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          Nine platforms. Dedicated specialists.
        </h2>

        {marketplaces.map((m) => (
          <Link key={m.name} href={m.href} className="mkt-card">
            {/* Left */}
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: m.color, marginBottom: "4px", fontFamily: "var(--font-sans)" }}>
                {m.name}
              </div>
              <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>{m.sub}</div>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, marginBottom: "20px" }}>
                {m.tagline}
              </p>
              <span className="mkt-learn" style={{ fontSize: "12px", color: "#2D6A4F", fontWeight: 500, transition: "color 0.15s" }}>
                Go to {m.name} marketplace →
              </span>
            </div>

            {/* Right — bullets */}
            <div className="mkt-bullets">
              {m.services.map((s) => (
                <div key={s} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckIcon />
                  <span style={{ fontSize: "12px", color: "#555550", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {/* ── CTA ── */}
      <style>{`
        .audit-banner { background: #1C1C1C; padding: 40px 32px; display: flex; justify-content: flex-start; align-items: center; }
        .audit-banner-btn { margin-left: 80px; flex-shrink: 0; }
        @media (max-width: 600px) {
          .audit-banner { flex-direction: column; align-items: flex-start; padding: 32px 20px; }
          .audit-banner-btn { margin-left: 0; margin-top: 20px; }
        }
      `}</style>
      <div className="audit-banner">
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Let specialists handle your marketplace operations.
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "420px", lineHeight: 1.7 }}>
            Start with a free catalog audit. We&apos;ll review your listings and show you exactly where you&apos;re losing visibility.
          </div>
        </div>
        <Link href="/audit" className="audit-banner-btn" style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
