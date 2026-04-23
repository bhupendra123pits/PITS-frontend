"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const whatYouGet = [
  "50-SKU data completeness review — missing fields, blank attributes, truncated titles",
  "Listing quality score — titles, bullets, descriptions, image count",
  "Attribute & filter accuracy check against platform taxonomy",
  "Written findings report with prioritised recommendations",
  "15-minute optional walkthrough call — no sales pitch, just findings",
];

const steps = [
  { n: "1", title: "Submit this form", body: "Takes 3 minutes. Share your store details and biggest challenge." },
  { n: "2", title: "We confirm within 4 hrs", body: "Our team reviews your submission and confirms the audit scope." },
  { n: "3", title: "Audit delivered in 48 hrs", body: "Written report with findings, scores, and what we'd fix first." },
  { n: "4", title: "Optional walkthrough call", body: "15 minutes with the auditor to walk through every finding." },
];

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    storeUrl: "",
    primaryPlatform: "",
    challenge: "",
    hearAbout: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "0.5px solid #D5C9B0",
    borderRadius: "4px",
    fontSize: "13px",
    color: "#1C1C1C",
    background: "#FFFFFF",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block" as const,
    fontSize: "11px",
    fontWeight: 500,
    color: "#555550",
    marginBottom: "6px",
    letterSpacing: "0.3px",
  };

  if (submitted) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", minHeight: "100vh" }}>
        <style>{`
          .submitted-inner { padding: 80px 32px; }
          @media (max-width: 768px) {
            .submitted-inner { padding: 48px 20px; }
            .submitted-h1 { font-size: 22px !important; }
            .submitted-next { padding: 16px !important; }
          }
        `}</style>
        <Navbar />
        <div className="submitted-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#E8F5EE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px" }} fill="none">
              <path d="M5 12L10 17L19 7" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="submitted-h1" style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 500, color: "#1C1C1C", marginBottom: "12px" }}>
            Audit request received.
          </h1>
          <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "440px", marginBottom: "32px" }}>
            We&apos;ll review your submission and confirm within 4 hours. Your written audit report will be delivered within 48 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ firstName: "", lastName: "", email: "", company: "", storeUrl: "", primaryPlatform: "", challenge: "", hearAbout: "" });
            }}
            style={{ marginBottom: "24px", background: "transparent", border: "1px solid #2D6A4F", color: "#2D6A4F", borderRadius: "4px", padding: "10px 22px", fontSize: "13px", fontWeight: 500, cursor: "pointer", letterSpacing: "0.2px" }}
          >
            ← Submit another audit request
          </button>
          <div className="submitted-next" style={{ background: "#F5F0E8", borderRadius: "8px", padding: "20px 28px", maxWidth: "400px", width: "100%", textAlign: "left" }}>
            <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, letterSpacing: "0.5px", marginBottom: "8px" }}>WHAT HAPPENS NEXT</div>
            {steps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#2D6A4F", color: "#fff", fontSize: "10px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{s.n}</div>
                <div style={{ fontSize: "12px", color: "#555550", lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 500, color: "#1C1C1C" }}>{s.title} — </span>{s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <style>{`
        .audit-hero { padding: 48px 32px 40px; }
        .audit-hero-grid { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; }
        .audit-h1 { font-size: 34px; }
        .audit-main { display: grid; grid-template-columns: 1fr 340px; }
        .audit-form { padding: 40px 40px 56px; border-right: 0.5px solid #D5C9B0; }
        .form-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .audit-sidebar { padding: 32px 24px; background: #FDFAF5; }

        @media (max-width: 768px) {
          .audit-hero { padding: 28px 20px 24px; }
          .audit-hero-grid { grid-template-columns: 1fr; gap: 0; }
          .audit-h1 { font-size: 26px !important; }
          .audit-main { grid-template-columns: 1fr; }
          .audit-form { padding: 28px 20px 40px; border-right: none; border-bottom: 0.5px solid #D5C9B0; }
          .form-two-col { grid-template-columns: 1fr; }
          .audit-sidebar { padding: 28px 20px; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <div className="audit-hero" style={{ background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}>
        <Link href={'/'} style={{ fontSize: "11px", color: "#888780", marginBottom: "14px", textDecoration:"none" }}>
          Home <span style={{ color: "#2D6A4F" }}>/ Free Catalog Audit</span>
        </Link>
        <div className="audit-hero-grid">
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "12px", marginTop:"10px"}}>
              FREE · NO COMMITMENT · DELIVERED IN 48 HRS
            </div>
            <h1 className="audit-h1" style={{ fontFamily: "var(--font-serif)", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
              Get your free catalog{" "}
              <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>audit.</em>
            </h1>
            <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.7, maxWidth: "520px", marginBottom: "20px" }}>
              We review 50 of your SKUs — data completeness, listing quality, attribute accuracy — and deliver a written findings report. No credit card. No commitment.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["No Credit card required", "48hr turnaround", "Written findings report", "500+ stores audited"].map((t) => (
                <div key={t} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "20px", padding: "5px 14px", fontSize: "11px", color: "#555550", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2D6A4F", flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="audit-main">

        {/* FORM */}
        <div className="audit-form">
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>Tell us about your store</h2>
            <p style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6 }}>Takes about 3 minutes. The more detail you share, the more useful your audit report will be.</p>
          </div>

          {/* CONTACT */}
          <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>CONTACT DETAILS</div>
          <div className="form-two-col" style={{ marginBottom: "14px" }}>
            <div>
              <label style={labelStyle}>First name <span style={{ color: "#2D6A4F" }}>*</span></label>
              <input style={inputStyle} name="firstName" type="text" placeholder="Jane"
                value={form.firstName} onChange={handleChange} />
            </div>
            <div>
              <label style={labelStyle}>Last name <span style={{ color: "#2D6A4F" }}>*</span></label>
              <input style={inputStyle} name="lastName" type="text" placeholder="Smith"
                value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Business email <span style={{ color: "#2D6A4F" }}>*</span></label>
            <input style={inputStyle} name="email" type="email" placeholder="jane@yourstore.com"
              value={form.email} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Company / store name <span style={{ color: "#2D6A4F" }}>*</span></label>
            <input style={inputStyle} name="company" type="text" placeholder="Your Store Ltd"
              value={form.company} onChange={handleChange} />
          </div>

          {/* STORE */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "24px", marginBottom: "14px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>STORE DETAILS</div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Store URL</label>
            <input style={inputStyle} name="storeUrl" type="text" placeholder="www.yourstore.com"
              value={form.storeUrl} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Primary selling channel <span style={{ color: "#2D6A4F" }}>*</span></label>
            <select style={{ ...inputStyle, appearance: "none" as const }} name="primaryPlatform"
              value={form.primaryPlatform} onChange={handleChange}>
              <option value="">Select channel</option>
              <optgroup label="Marketplaces">
                <option value="Amazon">Amazon</option>
                <option value="eBay">eBay</option>
                <option value="Walmart">Walmart</option>
                <option value="Etsy">Etsy</option>
                <option value="BestBuy">BestBuy</option>
                <option value="Newegg">Newegg</option>
                <option value="Houzz">Houzz</option>
                <option value="Rakuten">Rakuten</option>
                <option value="Poshmark">Poshmark</option>
              </optgroup>
              <optgroup label="Platforms">
                <option value="Shopify">Shopify</option>
                <option value="BigCommerce">BigCommerce</option>
                <option value="WooCommerce">WooCommerce</option>
                <option value="Magento">Magento</option>
                <option value="OpenCart">OpenCart</option>
                <option value="Volusion">Volusion</option>
              </optgroup>
              <optgroup label="Other">
                <option value="Other">Other (please describe in challenge field)</option>
              </optgroup>
            </select>
          </div>

          {/* CHALLENGE */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "24px", marginBottom: "14px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>YOUR SITUATION</div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Biggest catalog challenge right now</label>
            <textarea style={{ ...inputStyle, height: "88px", resize: "none" as const }}
              name="challenge" placeholder="e.g. Inaccurate attributes, duplicate listings..."
              value={form.challenge} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "36px" }}>
            <label style={labelStyle}>How did you hear about us?</label>
            <select style={{ ...inputStyle, appearance: "none" as const }} name="hearAbout"
              value={form.hearAbout} onChange={handleChange}>
              <option value="">Select one</option>
              <option>Google search</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Industry forum</option>
              <option>Other</option>
            </select>
          </div>

          {/* SUBMIT */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "28px" }}>
            {error && (
              <div style={{ background: "#FEF2F2", border: "0.5px solid #FECACA", borderRadius: "4px", padding: "10px 14px", fontSize: "12px", color: "#DC2626", marginBottom: "16px" }}>
                {error}
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{ width: "100%", background: loading ? "#88B8A0" : "#2D6A4F", color: "#fff", border: "none", padding: "14px 24px", borderRadius: "4px", fontSize: "14px", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer", letterSpacing: "0.2px", transition: "background 0.15s" }}
            >
              {loading ? "Submitting..." : "Request my free audit →"}
            </button>
            <div style={{ textAlign: "center", fontSize: "11px", color: "#888780", marginTop: "10px" }}>
              No credit card required · We respond within 4 hours · Your data is never shared
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="audit-sidebar">
          <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "14px", letterSpacing: "0.3px" }}>WHAT YOU&apos;LL RECEIVE</div>
            {whatYouGet.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: i < whatYouGet.length - 1 ? "12px" : 0 }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                  <svg viewBox="0 0 10 10" style={{ width: "10px", height: "10px" }} fill="none">
                    <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "12px", color: "#555550", lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "14px", letterSpacing: "0.3px" }}>HOW IT WORKS</div>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: i < steps.length - 1 ? "14px" : 0 }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#2D6A4F", color: "#fff", fontSize: "10px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#1C1C1C", marginBottom: "2px" }}>{s.title}</div>
                  <div style={{ fontSize: "11px", color: "#888780", lineHeight: 1.55 }}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#E8F5EE", border: "0.5px solid #9FE1CB", borderRadius: "6px", padding: "14px", marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", color: "#085041", lineHeight: 1.6 }}>
              <span style={{ fontWeight: 500 }}>No lock-in, ever.</span> The audit is genuinely free. We&apos;ll show you what we found and what we&apos;d fix — whether you work with us or not.
            </div>
          </div>

          <a
            href="https://wa.me/919811018501?text=Hi%2C%20I%27d%20like%20a%20free%20catalog%20audit"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "10px", background: "#25D366", borderRadius: "6px", padding: "12px 16px", textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0 }} fill="#ffffff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>Chat on WhatsApp</div>
              <div style={{ fontSize: "11px", color: "#d4f5e0" }}>Quick questions? We reply fast.</div>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
