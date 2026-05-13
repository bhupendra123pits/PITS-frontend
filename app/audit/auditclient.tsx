"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const whatYouGet = [
  "50-SKU data completeness review — missing fields, blank attributes, truncated titles",
  "Listing quality score — titles, bullets, descriptions, image count",
  "Attribute & filter accuracy check against platform taxonomy",
  "Written findings report with prioritised recommendations",
  "15-minute optional walkthrough call — no sales pitch, just findings",
];

const steps = [
  {
    n: "1",
    title: "We confirm within 4 hrs",
    body: "Our team reviews your submission and confirms the audit scope.",
  },
  {
    n: "2",
    title: "Audit delivered in 48 hrs",
    body: "Written report with findings, scores, and what we'd fix first.",
  },
  {
    n: "3",
    title: "Optional walkthrough call",
    body: "15 minutes with the auditor to walk through every finding.",
  },
];

const formSteps = [
  {
    n: "1",
    title: "Submit this form",
    body: "Takes about 2 minutes. Share your store details and biggest challenge.",
  },
  ...steps.map((s, i) => ({ ...s, n: String(i + 2) })),
];

const emptyForm = {
  name: "",
  email: "",
  storeUrl: "",
  primaryPlatform: "",
  primaryPlatformOther: "",
  challenge: "",
  hearAbout: "",
};

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formStartedRef = useRef(false);

  useEffect(() => {
    trackEvent("audit_form_view");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("audit_form_start");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async () => {
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) errors.email = "Please enter your email address.";
    if (!form.storeUrl.trim()) errors.storeUrl = "Please enter your store URL.";
    if (!form.primaryPlatform) errors.primaryPlatform = "Please select a selling channel.";
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaVerified) {
      setError("Please complete the CAPTCHA verification.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const payload = { ...form };
      if (payload.primaryPlatform === "Other" && payload.primaryPlatformOther.trim()) {
        payload.primaryPlatform = payload.primaryPlatformOther.trim();
      }
      delete (payload as { primaryPlatformOther?: string }).primaryPlatformOther;
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        trackEvent("audit_form_submit");
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
      <div
        style={{
          fontFamily: "var(--font-sans)",
          background: "#FDFAF5",
          minHeight: "100vh",
        }}
      >
        <style>{`
          .submitted-inner { padding: 80px 32px; }
          @media (max-width: 768px) {
            .submitted-inner { padding: 48px 20px; }
            .submitted-h1 { font-size: 22px !important; }
            .submitted-next { padding: 16px !important; }
          }
        `}</style>
        <Navbar />
        <div
          className="submitted-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#E8F5EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: "24px", height: "24px" }}
              fill="none"
            >
              <path
                d="M5 12L10 17L19 7"
                stroke="#2D6A4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            className="submitted-h1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "28px",
              fontWeight: 500,
              color: "#1C1C1C",
              marginBottom: "12px",
            }}
          >
            Audit request received.
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#555550",
              lineHeight: 1.7,
              maxWidth: "440px",
              marginBottom: "24px",
            }}
          >
            We&apos;ll review your submission and confirm within 4 hours. Your
            written audit report will be delivered within 48 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(emptyForm);
              setCaptchaVerified(false);
              recaptchaRef.current?.reset();
            }}
            style={{
              marginBottom: "24px",
              background: "transparent",
              border: "1px solid #2D6A4F",
              color: "#2D6A4F",
              borderRadius: "4px",
              padding: "10px 22px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "0.2px",
            }}
          >
            ← Submit another audit request
          </button>
          <div
            className="submitted-next"
            style={{
              background: "#F5F0E8",
              borderRadius: "8px",
              padding: "20px 28px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#2D6A4F",
                fontWeight: 500,
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              WHAT HAPPENS NEXT
            </div>
            {steps.map((s) => (
              <div
                key={s.n}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#2D6A4F",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#555550",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontWeight: 500, color: "#1C1C1C" }}>
                    {s.title} —{" "}
                  </span>
                  {s.body}
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
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <style>{`
        .audit-hero { padding: 48px 32px 40px; }
        .audit-hero-grid { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; }
        .audit-h1 { font-size: 34px; }
        .audit-main { display: grid; grid-template-columns: 1fr 340px; }
        .audit-form { padding: 40px 40px 56px; border-right: 0.5px solid #D5C9B0; }
        .audit-sidebar { padding: 32px 24px; background: #FDFAF5; }
        .roi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        @media (max-width: 880px) {
          .roi-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .audit-hero { padding: 28px 20px 24px; }
          .audit-hero-grid { grid-template-columns: 1fr; gap: 0; }
          .audit-h1 { font-size: 26px !important; }
          .audit-main { grid-template-columns: 1fr; }
          .audit-form { padding: 28px 20px 40px; border-right: none; border-bottom: 0.5px solid #D5C9B0; }
          .audit-sidebar { padding: 28px 20px; }
          .audit-submit-row { flex-direction: column; align-items: stretch !important; }
          .audit-submit-row button { width: 100%; }
        }
      `}</style>

      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free Ecommerce Catalog Audit",
            url: "https://professionalits.com/audit",
            provider: { "@id": "https://professionalits.com/#organization" },
            description:
              "We review 50 of your SKUs — data completeness, listing quality, attribute accuracy — and deliver a written findings report within 48 hours.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              name: "Free Catalog Audit",
              description:
                "Review of 50 SKUs with written findings report. No credit card required.",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* HERO */}
      <div
        className="audit-hero"
        style={{ background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "#2D6A4F" }}>Free Catalog Audit</span>
        </div>
        <div className="audit-hero-grid">
          <div>
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
              FREE · NO COMMITMENT · DELIVERED IN 48 HRS
            </div>
            <h1
              className="audit-h1"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                lineHeight: 1.15,
                color: "#1C1C1C",
                marginBottom: "12px",
              }}
            >
              Get your free catalog{" "}
              <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>audit.</em>
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.7,
                maxWidth: "520px",
                marginBottom: "20px",
              }}
            >
              We review 50 of your SKUs — data completeness, listing quality,
              attribute accuracy — and deliver a written findings report. No
              credit card. No commitment.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "No credit card required",
                "We respond within 4 hours",
                "Your data is never shared",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    background: "#FFFFFF",
                    border: "0.5px solid #D5C9B0",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    fontSize: "12px",
                    fontWeight: "Bold",
                    color: "#555550",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#2D6A4F",
                      flexShrink: 0,
                    }}
                  />
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
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "6px",
              }}
            >
              Tell us about your store
            </h2>
            <p style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6 }}>
              The more detail you share, the more useful your audit report will
              be.
            </p>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>
              Name <span style={{ color: "#2D6A4F" }}>*</span>
            </label>
            <input
              style={inputStyle}
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>
              Email address <span style={{ color: "#2D6A4F" }}>*</span>
            </label>
            <input
              style={inputStyle}
              name="email"
              type="email"
              placeholder="you@yourstore.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>
              Store URL <span style={{ color: "#2D6A4F" }}>*</span>
            </label>
            <input
              style={{
                ...inputStyle,
                border: fieldErrors.storeUrl
                  ? "0.5px solid #DC2626"
                  : "0.5px solid #D5C9B0",
              }}
              name="storeUrl"
              type="text"
              placeholder="www.yourstore.com"
              value={form.storeUrl}
              onChange={handleChange}
            />
            {fieldErrors.storeUrl && (
              <div
                style={{
                  fontSize: "11px",
                  color: "#DC2626",
                  marginTop: "4px",
                }}
              >
                {fieldErrors.storeUrl}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>
              Primary selling channel{" "}
              <span style={{ color: "#2D6A4F" }}>*</span>
            </label>
            <select
              style={{ ...inputStyle, appearance: "none" as const }}
              name="primaryPlatform"
              value={form.primaryPlatform}
              onChange={handleChange}
            >
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
                <option value="Other">Other</option>
              </optgroup>
            </select>
            {form.primaryPlatform === "Other" && (
              <input
                style={{ ...inputStyle, marginTop: "8px" }}
                name="primaryPlatformOther"
                type="text"
                placeholder="Please describe your selling channel"
                value={form.primaryPlatformOther}
                onChange={handleChange}
                autoFocus
              />
            )}
          </div>

          <div style={{ marginBottom: "36px" }}>
            <label style={labelStyle}>
              Biggest catalog challenge right now
            </label>
            <textarea
              style={{ ...inputStyle, height: "88px", resize: "none" as const }}
              name="challenge"
              placeholder="e.g. Inaccurate attributes, duplicate listings..."
              value={form.challenge}
              onChange={handleChange}
            />
          </div>

          {/* SUBMIT */}
          <div>
            {error && (
              <div
                style={{
                  background: "#FEF2F2",
                  border: "0.5px solid #FECACA",
                  borderRadius: "4px",
                  padding: "10px 14px",
                  fontSize: "12px",
                  color: "#DC2626",
                  marginBottom: "16px",
                }}
              >
                {error}
              </div>
            )}
            <div
              className="audit-submit-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaVerified(!!token)}
                  onExpired={() => setCaptchaVerified(false)}
                />
              )}
              <button
                onClick={handleSubmit}
                disabled={loading || (!!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaVerified)}
                style={{
                  flex: 1,
                  background: loading || (!!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaVerified) ? "#88B8A0" : "#2D6A4F",
                  color: "#fff",
                  border: "none",
                  padding: "30px 24px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: loading || (!!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaVerified) ? "not-allowed" : "pointer",
                  letterSpacing: "0.2px",
                  transition: "background 0.15s",
                }}
              >
                {loading ? "Submitting..." : "Request my free audit →"}
              </button>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "11px",
                color: "#888780",
                marginTop: "10px",
              }}
            >
            
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="audit-sidebar">
          <div
            style={{
              background: "#FFFFFF",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "14px",
                letterSpacing: "0.3px",
              }}
            >
              WHAT YOU&apos;LL RECEIVE
            </div>
            {whatYouGet.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  marginBottom: i < whatYouGet.length - 1 ? "12px" : 0,
                }}
              >
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
                    marginTop: "1px",
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
                <span
                  style={{
                    fontSize: "12px",
                    color: "#555550",
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#F5F0E8",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "14px",
                letterSpacing: "0.3px",
              }}
            >
              HOW IT WORKS
            </div>
            {formSteps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  marginBottom: i < formSteps.length - 1 ? "14px" : 0,
                }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#2D6A4F",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#1C1C1C",
                      marginBottom: "2px",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888780",
                      lineHeight: 1.55,
                    }}
                  >
                    {s.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#E8F5EE",
              border: "0.5px solid #9FE1CB",
              borderRadius: "6px",
              padding: "14px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{ fontSize: "11px", color: "#085041", lineHeight: 1.6 }}
            >
              <span style={{ fontWeight: 500 }}>No lock-in, ever.</span> The
              audit is genuinely free. We&apos;ll show you what we found and
              what we&apos;d fix — whether you work with us or not.
            </div>
          </div>

          <a
       
            href="https://wa.me/919811018501?text=I%20have%20a%20question%20about%20the%20free%20audit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("audit_whatsapp_click")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#25D366",
              borderRadius: "6px",
              padding: "12px 16px",
              textDecoration: "none",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: "20px", height: "20px", flexShrink: 0 }}
              fill="#ffffff"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <div>
              <div
                style={{ fontSize: "12px", fontWeight: 600, color: "#ffffff" }}
              >
                Chat on WhatsApp
              </div>
              <div style={{ fontSize: "11px", color: "#d4f5e0" }}>
                Quick questions? We reply fast.
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Trust Stats */}
      <section style={{ padding: "32px", background: "#FDFAF5", borderTop: "0.5px solid #D5C9B0" }}>
        <div className="roi-grid">
          {[
            {
              number: "1,500+",
              title: "Stores served globally",
              body: "Across 15+ platforms and marketplaces — small catalogs to 500,000-SKU enterprises.",
            },
            {
              number: "98%",
              title: "Client retention",
              body: "Year-on-year. The work renews because the operations team earns it.",
            },
            {
              number: "4 hr",
              title: "Response SLA",
              body: "Across every account, every size — measured and reported weekly.",
            },
            {
              number: "17 yrs",
              title: "In e-commerce ops",
              body: "Exclusively. We've never pivoted, never become a generalist agency.",
            },
          ].map((stat) => (
            <div
              key={stat.title}
              style={{
                background: "#F5F0E8",
                border: "0.5px solid #D5C9B0",
                borderRadius: "6px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  color: "#2D6A4F",
                  fontWeight: 500,
                }}
              >
                {stat.number}
              </div>
              <strong style={{ display: "block", fontSize: "13px", marginBottom: "4px", marginTop: "4px" }}>
                {stat.title}
              </strong>
              <p style={{ fontSize: "12px", color: "#555550", lineHeight: 1.6, margin: 0 }}>
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
