import Link from "next/link";

const faqs: {
  q: string;
  a: { type: "para"; text: string } | { type: "bullets"; items: string[] } | { type: "paraWithLink"; text: string; linkText: string; linkHref: string };
}[] = [
  {
    q: "What's the difference between a retainer and a virtual assistant?",
    a: {
      type: "bullets",
      items: [
        "A monthly retainer is a managed engagement. We direct the work, deliver weekly reports, and you have a dedicated account contact. Best when you want operational outcomes without managing the day-to-day.",
        "A virtual assistant is a dedicated specialist. You direct the work; the VA executes against your priorities. Best when you have your own playbook and want a teammate, not a service.",
        "At equivalent volume (e.g., 80 hrs/month), the retainer and full-time VA cost roughly the same per hour. The choice is about how much management you want to take on yourself.",
      ],
    },
  },
  {
    q: "Why is the Scale Retainer cheaper per hour than smaller retainers?",
    a: {
      type: "para",
      text: "Volume discount, plus commitment. The Scale tier (160 hrs/month + dedicated account manager) is our deepest engagement, so it earns the lowest per-hour rate ($7.50/hour). Smaller tiers price higher because they have less commitment behind them. This is standard B2B services pricing — commit more, save more per hour.",
    },
  },
  {
    q: "Can I switch between pricing models?",
    a: {
      type: "bullets",
      items: [
        "A per-SKU project that grows often becomes a monthly retainer.",
        "A part-time VA whose work expands often becomes full-time, or moves into a managed retainer.",
        "A retainer client running a one-off bulk migration may add per-SKU work alongside the regular engagement.",
        "There's no penalty for changing. We re-scope the engagement at the start of the next billing cycle.",
      ],
    },
  },
  {
    q: "Is there a minimum contract length?",
    a: {
      type: "para",
      text: "No. Every engagement is month-to-month with 30-day cancellation. Per-SKU work is invoiced monthly with no minimum at all. We don't believe in lock-in contracts — if we're not earning the renewal, we shouldn't get it.",
    },
  },
  {
    q: "What's the 7-day VA replacement guarantee?",
    a: {
      type: "para",
      text: "If the VA we assign isn't the right fit for your work in the first 7 days, we'll replace them at no additional cost. New onboarding starts immediately. The guarantee window is 7 calendar days from the VA's first working day on your account.",
    },
  },
  {
    q: "Are taxes included in the listed prices?",
    a: {
      type: "bullets",
      items: [
        "US clients: typically no additional tax — services are exported from India and generally fall outside US sales tax scope.",
        "EU/UK clients: typically no VAT charged — for B2B engagements, reverse-charge rules apply and VAT is accounted for on your end.",
        "Indian clients: billed with GST as applicable.",
        "Other jurisdictions: confirmed at engagement start.",
      ],
    },
  },
  {
    q: "Do you support currencies other than USD?",
    a: {
      type: "para",
      text: "We default to USD invoicing, but quotes in GBP, EUR, and AUD are available on request. The conversion rate is set at the start of each engagement and held for the duration — you won't pay more if exchange rates move against you mid-contract.",
    },
  },
  {
    q: "What if I need a custom scope that doesn't match these tiers?",
    a: {
      type: "paraWithLink",
      text: "Most engagements over 200 hours/month or with specialized requirements (multi-language catalog work, senior platform specialists, dedicated team setups) are quoted custom. Tell us what you need via the contact form and we'll come back with a scoped proposal within 4 business hours.",
      linkText: "contact form",
      linkHref: "/contact",
    },
  },
];

export default function PricingFaq() {
  return (
    <section style={{ padding: "56px 32px", background: "#FDFAF5" }}>
      <style>{`
        .faq-details { border-top: 0.5px solid #D5C9B0; }
        .faq-details:last-child { border-bottom: 0.5px solid #D5C9B0; }
        .faq-summary {
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 22px 0;
          font-size: 15px;
          font-weight: 500;
          color: #1C1C1C;
          font-family: var(--font-sans);
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-summary::after {
          content: "+";
          color: #2D6A4F;
          font-size: 22px;
          font-weight: 400;
          line-height: 1;
          flex-shrink: 0;
        }
        .faq-details[open] .faq-summary::after { content: "−"; }
        .faq-body { padding-bottom: 20px; }
        .faq-body p {
          font-size: 14px;
          color: #555550;
          line-height: 1.7;
          margin: 0 0 8px;
        }
        .faq-body ul {
          margin: 0 0 8px;
          padding-left: 0;
          list-style: none;
        }
        .faq-body li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #555550;
          line-height: 1.65;
          margin-bottom: 6px;
        }
        .faq-bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #2D6A4F;
          flex-shrink: 0;
          margin-top: 8px;
        }
      `}</style>

      <div
        style={{
          fontSize: "11px",
          letterSpacing: "1.5px",
          color: "#2D6A4F",
          fontWeight: 500,
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        FAQ
      </div>

      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "40px",
          fontWeight: 500,
          color: "#1C1C1C",
          margin: "0 0 40px",
          lineHeight: 1.15,
        }}
      >
        Pricing FAQ
      </h2>

      <div>
        {faqs.map((faq, i) => (
          <details key={i} className="faq-details">
            <summary className="faq-summary">{faq.q}</summary>
            <div className="faq-body">
              {faq.a.type === "para" && <p>{faq.a.text}</p>}
              {faq.a.type === "paraWithLink" && (
                <p>
                  {faq.a.text.split(faq.a.linkText)[0]}
                  <Link
                    href={faq.a.linkHref}
                    style={{ color: "#2D6A4F", fontWeight: 600, textDecoration: "none" }}
                  >
                    {faq.a.linkText}
                  </Link>
                  {faq.a.text.split(faq.a.linkText)[1]}
                </p>
              )}
              {faq.a.type === "bullets" && (
                <ul>
                  {faq.a.items.map((item, k) => (
                    <li key={k}>
                      <span className="faq-bullet" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
