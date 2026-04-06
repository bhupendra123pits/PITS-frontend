"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const platforms = [
  "Amazon", "eBay", "Shopify", "Walmart",
  "WooCommerce", "BigCommerce", "Magento", "Etsy",
];

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

const stats = [
  { n: "500+", l: "Stores audited" },
  { n: "48hr", l: "Delivery time" },
  { n: "98%", l: "Retention rate" },
  { n: "$0", l: "Fully free" },
];

export default function AuditPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    storeUrl: "",
    skuCount: "",
    primaryPlatform: "",
    challenge: "",
    orderVolume: "",
    hearAbout: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePlatform = (p: string) =>
    setSelected((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  const handleSubmit = async () => {
    const payload = {
      ...form,
      otherPlatforms: selected.join(", "),
    };

    // ✅ Console log all fields
    console.log("Form Data:", payload);

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("API Response:", data);

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
        <Navbar />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 32px", textAlign: "center" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#E8F5EE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px" }} fill="none">
              <path d="M5 12L10 17L19 7" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 500, color: "#1C1C1C", marginBottom: "12px" }}>
            Audit request received.
          </h1>
          <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "440px", marginBottom: "32px" }}>
            We&apos;ll review your submission and confirm within 4 hours. Your written audit report will be delivered within 48 hours.
          </p>
          <div style={{ display: "flex", gap: "24px", marginBottom: "40px" }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 500, color: "#2D6A4F" }}>{s.n}</div>
                <div style={{ fontSize: "11px", color: "#888780", marginTop: "2px" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "20px 28px", maxWidth: "400px", textAlign: "left" }}>
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
      <Navbar />

      {/* HERO */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          Home <span style={{ color: "#2D6A4F" }}>/ Free Catalog Audit</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "40px" }}>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "12px" }}>
              FREE · NO COMMITMENT · DELIVERED IN 48 HRS
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
              Get your free catalog{" "}
              <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>audit.</em>
            </h1>
            <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.7, maxWidth: "520px", marginBottom: "20px" }}>
              We review 50 of your SKUs — data completeness, listing quality, attribute accuracy — and deliver a written findings report. No credit card. No commitment.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Free — no credit card", "48hr turnaround", "Written findings report", "500+ stores audited"].map((t) => (
                <div key={t} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "20px", padding: "5px 14px", fontSize: "11px", color: "#555550", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2D6A4F", flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#2D6A4F" }}>{s.n}</div>
                <div style={{ fontSize: "11px", color: "#888780", marginTop: "3px", whiteSpace: "nowrap" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 0 }}>

        {/* FORM */}
        <div style={{ padding: "40px 40px 56px", borderRight: "0.5px solid #D5C9B0" }}>
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>Tell us about your store</h2>
            <p style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6 }}>Takes about 3 minutes. The more detail you share, the more useful your audit report will be.</p>
          </div>

          {/* CONTACT */}
          <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>CONTACT DETAILS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            <div>
              <label style={labelStyle}>Phone number</label>
              <input style={inputStyle} name="phone" type="tel" placeholder="+1 555 000 0000"
                value={form.phone} onChange={handleChange} />
            </div>
            <div>
              <label style={labelStyle}>Company / store name <span style={{ color: "#2D6A4F" }}>*</span></label>
              <input style={inputStyle} name="company" type="text" placeholder="Your Store Ltd"
                value={form.company} onChange={handleChange} />
            </div>
          </div>

          {/* STORE */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "24px", marginBottom: "14px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>STORE DETAILS</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={labelStyle}>Store URL</label>
              <input style={inputStyle} name="storeUrl" type="text" placeholder="www.yourstore.com"
                value={form.storeUrl} onChange={handleChange} />
            </div>
            <div>
              <label style={labelStyle}>Approx. catalog size <span style={{ color: "#2D6A4F" }}>*</span></label>
              <select style={{ ...inputStyle, appearance: "none" as const }} name="skuCount"
                value={form.skuCount} onChange={handleChange}>
                <option value="">Select range</option>
                <option>Under 500 SKUs</option>
                <option>500 – 2,000 SKUs</option>
                <option>2,000 – 10,000 SKUs</option>
                <option>10,000 – 50,000 SKUs</option>
                <option>50,000+ SKUs</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Primary selling platform <span style={{ color: "#2D6A4F" }}>*</span></label>
            <select style={{ ...inputStyle, appearance: "none" as const }} name="primaryPlatform"
              value={form.primaryPlatform} onChange={handleChange}>
              <option value="">Select platform</option>
              {platforms.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Other platforms you sell on</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
              {platforms.map((p) => (
                <div key={p} onClick={() => togglePlatform(p)}
                  style={{ border: selected.includes(p) ? "1px solid #2D6A4F" : "0.5px solid #D5C9B0", borderRadius: "4px", padding: "8px 10px", fontSize: "12px", color: selected.includes(p) ? "#2D6A4F" : "#555550", background: selected.includes(p) ? "#E8F5EE" : "#FDFAF5", textAlign: "center" as const, cursor: "pointer", fontWeight: selected.includes(p) ? 500 : 400, transition: "all 0.15s" }}>
                  {p}
                </div>
              ))}
            </div>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "36px" }}>
            <div>
              <label style={labelStyle}>Monthly order volume (approx.)</label>
              <select style={{ ...inputStyle, appearance: "none" as const }} name="orderVolume"
                value={form.orderVolume} onChange={handleChange}>
                <option value="">Select range</option>
                <option>Under 100 orders</option>
                <option>100 – 500 orders</option>
                <option>500 – 2,000 orders</option>
                <option>2,000+ orders</option>
              </select>
            </div>
            <div>
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
        <div style={{ padding: "32px 24px", background: "#FDFAF5" }}>
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
            {stats.map((s) => (
              <div key={s.l} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "6px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, color: "#2D6A4F" }}>{s.n}</div>
                <div style={{ fontSize: "10px", color: "#888780", marginTop: "3px", lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#E8F5EE", border: "0.5px solid #9FE1CB", borderRadius: "6px", padding: "14px" }}>
            <div style={{ fontSize: "11px", color: "#085041", lineHeight: 1.6 }}>
              <span style={{ fontWeight: 500 }}>No lock-in, ever.</span> The audit is genuinely free. We&apos;ll show you what we found and what we&apos;d fix — whether you work with us or not.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}