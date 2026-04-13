"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const solutionLinks = [
  {
    title: "Catalog & product data",
    sub: "Uploads, enrichment, deduplication",
    href: "/solutions/catalog-product-data",
  },
  {
    title: "Marketplace operations",
    sub: "Amazon, eBay, Walmart",
    href: "/solutions/marketplace-operations",
  },
  {
    title: "Ecommerce backoffice",
    sub: "Support, orders, inventory",
    href: "/solutions/eCommerce-backoffice",
  },
  {
    title: "Product data cleanup",
    sub: "Audit, clean, restructure",
    href: "/solutions/product-data-cleanup",
  },
  {
    title: "High-SKU catalog scaling",
    sub: "Distributors & wholesalers",
    href: "/solutions/high-sku-scaling",
  },
];

const serviceLinks = [
  {
    title: "Product data management",
    sub: "End-to-end data pipeline",
    href: "/services/product-data-management",
  },
  {
    title: "Bulk product uploads",
    sub: "Any platform, any volume",
    href: "/services/bulk-product-uploads",
  },
  {
    title: "Attribute & filter structuring",
    sub: "Platform compliance & discoverability",
    href: "/services/attribute-filter-structuring",
  },
  {
    title: "Image processing & enrichment",
    sub: "Background removal, resizing, infographics",
    href: "/services/image-processing-enrichment",
  },
  {
    title: "Order & inventory support",
    sub: "SLA-backed operations",
    href: "/services/order-inventory-support",
  },
];

const platformLinks = [
  {
    title: "Amazon",
    sub: "Seller Central, FBA, A+",
    href: "/platforms/amazon",
  },
  { title: "eBay", sub: "Cassini, store management", href: "/platforms/ebay" },
  {
    title: "Shopify",
    sub: "Catalog, orders, support",
    href: "/platforms/shopify",
  },
  { title: "Etsy", sub: "Catalog, orders, support", href: "/platforms/etsy" },
  {
    title: "BigCommerce / WooCommerce / Magento",
    sub: null,
    href: "/platforms/bigcommerce-woocommerce",
  },
  { title: "Walmart & others", sub: null, href: "/platforms/walmart" },
];

// All searchable pages
const allPages = [
  { title: "Home", sub: "Professional ITS homepage", href: "/" },
  { title: "Results", sub: "Client results & case studies", href: "/results" },
  { title: "Pricing", sub: "Plans and pricing", href: "/pricing" },
  {
    title: "Free Catalog Audit",
    sub: "Get a free audit of your catalog",
    href: "/audit",
  },
  { title: "Contact", sub: "Get in touch with us", href: "/contact" },
  ...solutionLinks.map((l) => ({ ...l, category: "Solution" })),
  ...serviceLinks.map((l) => ({ ...l, category: "Service" })),
  ...platformLinks.map((l) => ({
    ...l,
    sub: l.sub ?? "",
    category: "Platform",
  })),
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = (id: string) => setOpen(open === id ? null : id);
  const close = () => setOpen(null);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };
  const toggleMobile = (id: string) =>
    setMobileExpanded(mobileExpanded === id ? null : id);

  const filteredResults =
    searchQuery.trim().length > 0
      ? allPages.filter(
          (p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.sub && p.sub.toLowerCase().includes(searchQuery.toLowerCase())),
        )
      : [];

  // Close search on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchSelect = (href: string) => {
    router.push(href);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filteredResults.length > 0) {
      handleSearchSelect(filteredResults[0].href);
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-cta-desktop { display: block; }
        .nav-hamburger { display: none; }
        .nav-search-desktop { display: flex; }
        @media (max-width: 900px) {
          .nav-desktop-links { display: none; }
          .nav-cta-desktop { display: none; }
          .nav-hamburger { display: flex; }
          .nav-search-desktop { display: none; }
        }
      `}</style>

      <nav
        style={{
          background: "#FDFAF5",
          borderBottom: "0.5px solid #D5C9B0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            close();
            closeMobile();
          }}
          style={{ textDecoration: "none", flexShrink: 0 }}
        >
          <img
            src="/PITS Logo Raw.png"
            alt="Professional ITS Logo"
            style={{
              height: "52px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="nav-desktop-links"
          style={{ alignItems: "center", gap: 0 }}
        >
          {/* Solutions dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("solutions")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname.startsWith("/solutions")
                  ? "#2D6A4F"
                  : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: pathname.startsWith("/solutions")
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              }}
            >
              Solutions
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "solutions" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "480px",
                  zIndex: 10,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0 24px",
                }}
              >
                <div
                  style={{
                    gridColumn: "1/-1",
                    marginBottom: "12px",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                  }}
                >
                  Solutions
                </div>
                <div>
                  {solutionLinks.slice(0, 3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      style={{
                        display: "block",
                        padding: "8px 0",
                        borderBottom: "0.5px solid #EDE5D5",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
                <div>
                  {solutionLinks.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      style={{
                        display: "block",
                        padding: "8px 0",
                        borderBottom: "0.5px solid #EDE5D5",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("services")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname === "/services" ? "#2D6A4F" : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom:
                  pathname === "/services"
                    ? "2px solid #2D6A4F"
                    : "2px solid transparent",
              }}
            >
              Services
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "services" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "320px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  Execution services
                </div>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={close}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "0.5px solid #EDE5D5",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1C1C1C",
                        marginBottom: "2px",
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#888780" }}>
                      {s.sub}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Platforms dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("platforms")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname.startsWith("/platforms")
                  ? "#2D6A4F"
                  : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: pathname.startsWith("/platforms")
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              }}
            >
              Platforms
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "platforms" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "280px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  Platforms we support
                </div>
                {platformLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={close}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "0.5px solid #EDE5D5",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1C1C1C",
                        marginBottom: "2px",
                      }}
                    >
                      {p.title}
                    </div>
                    {p.sub && (
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {p.sub}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/results"
            onClick={close}
            style={{
              padding: "0 14px",
              fontSize: "15px",
              color: pathname === "/results" ? "#2D6A4F" : "#555550",
              height: "56px",
              display: "flex",
              alignItems: "center",
              borderBottom:
                pathname === "/results"
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              textDecoration: "none",
            }}
          >
            Results
          </Link>
          <Link
            href="/pricing"
            onClick={close}
            style={{
              padding: "0 14px",
              fontSize: "15px",
              color: pathname === "/pricing" ? "#2D6A4F" : "#555550",
              height: "56px",
              display: "flex",
              alignItems: "center",
              borderBottom:
                pathname === "/pricing"
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              textDecoration: "none",
            }}
          >
            Pricing
          </Link>
        </div>

        {/* Right side — Search + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Search */}
          <div
            className="nav-search-desktop"
            ref={searchRef}
            style={{ position: "relative", alignItems: "center" }}
          >
            {!searchOpen ? (
              // Search icon button
              <button
                onClick={() => {
                  setSearchOpen(true);
                  close();
                }}
                style={{
                  background: "none",
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "4px",
                  padding: "7px 10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "#888780",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            ) : (
              // Search input
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "0.5px solid #2D6A4F",
                    borderRadius: "4px",
                    background: "#fff",
                    padding: "0 10px",
                    gap: "8px",
                    width: "240px",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888780"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: "13px",
                      color: "#1C1C1C",
                      background: "transparent",
                      padding: "8px 0",
                      width: "100%",
                      fontFamily: "inherit",
                    }}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#888780",
                        padding: 0,
                        display: "flex",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Dropdown results */}
                {filteredResults.length > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 6px)",
                      left: 0,
                      right: 0,
                      background: "#FDFAF5",
                      border: "0.5px solid #D5C9B0",
                      borderRadius: "4px",
                      zIndex: 100,
                      maxHeight: "320px",
                      overflowY: "auto",
                    }}
                  >
                    {filteredResults.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleSearchSelect(item.href)}
                        style={{
                          padding: "10px 14px",
                          borderBottom:
                            i < filteredResults.length - 1
                              ? "0.5px solid #EDE5D5"
                              : "none",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#F5F0E8")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "#1C1C1C",
                            }}
                          >
                            {item.title}
                          </span>
                          {"category" in item && item.category && (
                            <span
                              style={{
                                fontSize: "10px",
                                color: "#2D6A4F",
                                background: "#E8F5EE",
                                padding: "2px 6px",
                                borderRadius: "3px",
                              }}
                            >
                              {item.category}
                            </span>
                          )}
                        </div>
                        {item.sub && (
                          <span style={{ fontSize: "11px", color: "#888780" }}>
                            {item.sub}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* No results */}
                {searchQuery.trim().length > 0 &&
                  filteredResults.length === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        right: 0,
                        background: "#FDFAF5",
                        border: "0.5px solid #D5C9B0",
                        borderRadius: "4px",
                        zIndex: 100,
                        padding: "14px",
                        fontSize: "12px",
                        color: "#888780",
                        textAlign: "center",
                      }}
                    >
                      No results for &quot;{searchQuery}&quot;
                    </div>
                  )}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/audit"
            className="nav-cta-desktop"
            style={{
              background: "#2D6A4F",
              textDecoration: "none",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Get free catalog audit
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpen(null);
          }}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "transform 0.2s",
              transform: mobileOpen
                ? "rotate(45deg) translateY(6.5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "opacity 0.2s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "transform 0.2s",
              transform: mobileOpen
                ? "rotate(-45deg) translateY(-6.5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#FDFAF5",
            zIndex: 49,
            overflowY: "auto",
            borderTop: "0.5px solid #D5C9B0",
          }}
        >
          <div style={{ padding: "8px 24px 40px" }}>
            {/* Mobile Search */}
            <div
              style={{ padding: "12px 0", borderBottom: "0.5px solid #EDE5D5" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "4px",
                  background: "#fff",
                  padding: "0 10px",
                  gap: "8px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#888780"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "13px",
                    color: "#1C1C1C",
                    background: "transparent",
                    padding: "10px 0",
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              {filteredResults.length > 0 && (
                <div
                  style={{
                    marginTop: "6px",
                    border: "0.5px solid #D5C9B0",
                    borderRadius: "4px",
                    background: "#fff",
                  }}
                >
                  {filteredResults.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        handleSearchSelect(item.href);
                        closeMobile();
                      }}
                      style={{
                        padding: "10px 14px",
                        borderBottom:
                          i < filteredResults.length - 1
                            ? "0.5px solid #EDE5D5"
                            : "none",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#1C1C1C",
                          }}
                        >
                          {item.title}
                        </span>
                        {"category" in item && item.category && (
                          <span
                            style={{
                              fontSize: "10px",
                              color: "#2D6A4F",
                              background: "#E8F5EE",
                              padding: "2px 6px",
                              borderRadius: "3px",
                            }}
                          >
                            {item.category}
                          </span>
                        )}
                      </div>
                      {item.sub && (
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#888780",
                            marginTop: "2px",
                          }}
                        >
                          {item.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("solutions")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname.startsWith("/solutions")
                    ? "#2D6A4F"
                    : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Solutions
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "solutions"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "solutions" && (
                <div style={{ paddingBottom: "12px" }}>
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("services")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname === "/services" ? "#2D6A4F" : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Services
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "services" ? "rotate(180deg)" : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "services" && (
                <div style={{ paddingBottom: "12px" }}>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {s.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {s.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platforms accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("platforms")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname.startsWith("/platforms")
                    ? "#2D6A4F"
                    : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Platforms
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "platforms"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "platforms" && (
                <div style={{ paddingBottom: "12px" }}>
                  {platformLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {p.title}
                      </div>
                      {p.sub && (
                        <div style={{ fontSize: "11px", color: "#888780" }}>
                          {p.sub}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/results"
              onClick={closeMobile}
              style={{
                display: "block",
                padding: "16px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === "/results" ? "#2D6A4F" : "#1C1C1C",
                borderBottom: "0.5px solid #EDE5D5",
                textDecoration: "none",
              }}
            >
              Results
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobile}
              style={{
                display: "block",
                padding: "16px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === "/pricing" ? "#2D6A4F" : "#1C1C1C",
                borderBottom: "0.5px solid #EDE5D5",
                textDecoration: "none",
              }}
            >
              Pricing
            </Link>

            <Link
              href="/audit"
              onClick={closeMobile}
              style={{
                display: "block",
                marginTop: "24px",
                background: "#2D6A4F",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Get free catalog audit
            </Link>
          </div>
        </div>
      )}

      {open && (
        <div
          onClick={close}
          style={{ position: "fixed", inset: 0, zIndex: 40 }}
        />
      )}
    </>
  );
}
