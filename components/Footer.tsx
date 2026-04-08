import Link from "next/link";

const solutionLinks = [
  { label: "Catalog & data operations", href: "/solutions/catalog-product-data" },
  { label: "Marketplace operations", href: "/solutions/marketplace-operations" },
  { label: "Ecommerce backoffice", href: "/solutions/eCommerce-backoffice" },
  { label: "Data cleanup", href: "/solutions/product-data-cleanup" },
  { label: "High-SKU scaling", href: "/solutions/high-sku-scaling" },
];

const serviceLinks = [
  { label: "Product data management", href: "/services" },
  { label: "Bulk uploads", href: "/services" },
  { label: "Attribute structuring", href: "/services" },
  { label: "Image processing", href: "/services" },
  { label: "Order support", href: "/services" },
];

const platformLinks = [
  { label: "Amazon", href: "/platforms/amazon" },
  { label: "eBay", href: "/platforms/ebay" },
  { label: "Shopify", href: "/platforms/shopify" },
  { label: "Etsy", href: "/platforms/etsy" },
  { label: "BigCommerce & WooCommerce", href: "/platforms/bigcommerce-woocommerce" },
  { label: "Walmart & others", href: "/platforms/walmart" },
];

const companyLinks = [
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free catalog audit", href: "/audit" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/professional-it-sols-pvt.-ltd.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/it_sols2026",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/professionalits/",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/professional_it_solution",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#F5F0E8", borderTop: "0.5px solid #D5C9B0", padding: "40px 32px 24px" }}>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-brand-col {
            grid-column: 1;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
        .footer-link {
          font-size: 12px;
          color: #888780;
          margin-bottom: 6px;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
        .footer-link:hover { color: #2D6A4F; }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 0.5px solid #D5C9B0;
          color: #888780;
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
        }
        .social-icon:hover {
          border-color: #2D6A4F;
          color: #2D6A4F;
        }
      `}</style>

      <div className="footer-grid">

        {/* Brand column */}
        <div className="footer-brand-col">
          <div style={{ marginBottom: "12px" }}>
            <img src="/PITS Logo 2026.png" alt="Professional ITS Logo" style={{ height: "55px" }} />
          </div>
          <div style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6, maxWidth: "320px" }}>
            E-commerce back-office specialists since 2010. We handle catalog
            operations, marketplace management, and store back-office —
            exclusively for online sellers.
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Solutions
          </div>
          {solutionLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Services
          </div>
          {serviceLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Platforms */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Platforms
          </div>
          {platformLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Company
          </div>
          {companyLinks.map((l) =>
            l.href ? (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ) : (
              <span key={l.label} className="footer-link">{l.label}</span>
            )
          )}
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-icon">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "0.5px solid #D5C9B0", paddingTop: "20px" }}>
        <div className="footer-bottom">
          <div style={{ fontSize: "11px", color: "#B4B2A9" }}>
            © 2026 Professional ITS · professionalits.com
          </div>
          <div style={{ fontSize: "11px", color: "#B4B2A9" }}>
            US: +1 (732) 924-9050 · India: +91 98110 18501
          </div>
        </div>
      </div>

    </footer>
  );
}