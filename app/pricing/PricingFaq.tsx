"use client";

import { useState } from "react";

type Block =
  | { type: "para"; text: string }
  | { type: "bullets"; items: string[] };

const faqs: { q: string; a: Block[] }[] = [
  {
    q: "What's the difference between a retainer and a virtual assistant?",
    a: [
      {
        type: "para",
        text: "Both give you ongoing capacity, but the management style is different:",
      },
      {
        type: "bullets",
        items: [
          "A monthly retainer is a managed engagement. We direct the work, deliver weekly reports, and you have a dedicated account contact. Best when you want operational outcomes without managing the day-to-day.",
          "A virtual assistant is a dedicated specialist. You direct the work; the VA executes against your priorities. Best when you have your own playbook and want a teammate, not a service.",
        ],
      },
      {
        type: "para",
        text: "At equivalent volume (e.g., 80 hrs/month), the retainer and full-time VA cost roughly the same per hour. The choice is about how much management you want to take on yourself.",
      },
    ],
  },
  {
    q: "Why is the Scale Retainer cheaper per hour than smaller retainers?",
    a: [
      {
        type: "para",
        text: "Volume discount, plus commitment. The Scale tier (160 hrs/month + dedicated account manager) is our deepest engagement, so it earns the lowest per-hour rate ($7.50/hour). Smaller tiers price higher because they have less commitment behind them. This is standard B2B services pricing — commit more, save more per hour.",
      },
    ],
  },
  {
    q: "Can I switch between pricing models?",
    a: [
      {
        type: "para",
        text: "Yes. We frequently move clients across products as their needs change:",
      },
      {
        type: "bullets",
        items: [
          "A per-SKU project that grows often becomes a monthly retainer.",
          "A part-time VA whose work expands often becomes full-time, or moves into a managed retainer.",
          "A retainer client running a one-off bulk migration may add per-SKU work alongside the regular engagement.",
        ],
      },
      {
        type: "para",
        text: "There's no penalty for changing. We re-scope the engagement at the start of the next billing cycle.",
      },
    ],
  },
  {
    q: "Is there a minimum contract length?",
    a: [
      {
        type: "para",
        text: "No. Every engagement is month-to-month with 30-day cancellation. Per-SKU work is invoiced monthly with no minimum at all. We don't believe in lock-in contracts — if we're not earning the renewal, we shouldn't get it.",
      },
    ],
  },
  {
    q: "What's the 7-day VA replacement guarantee?",
    a: [
      {
        type: "para",
        text: "If the VA we assign isn't the right fit for your work in the first 7 days, we'll replace them at no additional cost. New onboarding starts immediately. The guarantee window is 7 calendar days from the VA's first working day on your account.",
      },
    ],
  },
  {
    q: "Are taxes included in the listed prices?",
    a: [
      {
        type: "para",
        text: "All listed prices are exclusive of taxes. Your invoice reflects the tax treatment of your billing jurisdiction:",
      },
      {
        type: "bullets",
        items: [
          "US clients: typically no additional tax — services are exported from India and generally fall outside US sales tax scope.",
          "EU/UK clients: typically no VAT charged — for B2B engagements, reverse-charge rules apply and VAT is accounted for on your end.",
          "Indian clients: billed with GST as applicable.",
          "Other jurisdictions: confirmed at engagement start.",
        ],
      },
      {
        type: "para",
        text: "If you have specific tax compliance requirements, tell us upfront and we'll confirm the treatment in writing before the first invoice.",
      },
    ],
  },
  {
    q: "Do you support currencies other than USD?",
    a: [
      {
        type: "para",
        text: "We default to USD invoicing, but quotes in GBP, EUR, and AUD are available on request. The conversion rate is set at the start of each engagement and held for the duration — you won't pay more if exchange rates move against you mid-contract.",
      },
    ],
  },
  {
    q: "What if I need a custom scope that doesn't match these tiers?",
    a: [
      {
        type: "para",
        text: "Most engagements over 200 hours/month or with specialized requirements (multi-language catalog work, senior platform specialists, dedicated team setups) are quoted custom. Tell us what you need via the contact form and we'll come back with a scoped proposal within 4 business hours.",
      },
    ],
  },
];

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "36px 32px",
        background: "#F5F0E8",
        borderTop: "0.5px solid #D5C9B0",
      }}
    >
      <div style={{ maxWidth: "760px" }}>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Pricing FAQ
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: "0.5px solid #D5C9B0",
                  ...(i === faqs.length - 1
                    ? { borderBottom: "0.5px solid #D5C9B0" }
                    : {}),
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#1C1C1C",
                      lineHeight: 1.4,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#2D6A4F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div style={{ paddingBottom: "12px" }}>
                    {faq.a.map((block, j) =>
                      block.type === "para" ? (
                        <p
                          key={j}
                          style={{
                            fontSize: "13px",
                            color: "#555550",
                            lineHeight: 1.65,
                            margin: "0 0 8px",
                          }}
                        >
                          {block.text}
                        </p>
                      ) : (
                        <ul
                          key={j}
                          style={{
                            margin: "0 0 8px",
                            paddingLeft: "0",
                            listStyle: "none",
                          }}
                        >
                          {block.items.map((item, k) => (
                            <li
                              key={k}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "8px",
                                fontSize: "13px",
                                color: "#555550",
                                lineHeight: 1.6,
                                marginBottom: "4px",
                              }}
                            >
                              <span
                                style={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  background: "#2D6A4F",
                                  flexShrink: 0,
                                  marginTop: "7px",
                                }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
