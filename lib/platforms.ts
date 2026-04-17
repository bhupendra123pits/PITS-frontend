export type PlatformService = {
  title: string;
  body: string;
};

export type PlatformStat = {
  n: string;
  l: string;
};

export type Platform = {
  name: string;
  slug: string;
  tagline: string;
  heroHeadline: string;
  heroEm: string;
  description: string;
  color: string;
  services: PlatformService[];
  includes: string[];
  stats: PlatformStat[];
  also: string[];
};

export const platforms: Record<string, Platform> = {
  shopify: {
    name: "Shopify",
    slug: "shopify",
    color: "#96BF48",
    tagline: "Full back-office support for Shopify stores.",
    heroHeadline: "Shopify back-office, ",
    heroEm: "handled end to end.",
    description:
      "From catalog builds and bulk uploads to order processing and customer support — we manage the full operational layer of your Shopify store so you can focus on growth.",
    services: [
      { title: "Product catalog management", body: "Bulk product uploads, variant setup, collection structuring, metafield population, and ongoing catalog maintenance." },
      { title: "Order processing & fulfilment", body: "Order routing, fulfilment coordination, tracking updates, and exception handling — every order tracked end to end." },
      { title: "Customer support", body: "Email and chat support managed on your behalf. Branded responses, your tone, your policy — on an agreed SLA." },
      { title: "Inventory monitoring", body: "Stock level alerts, reorder point management, and low-stock notifications before you run out." },
      { title: "Image processing", body: "Background removal, resizing, format conversion, and compliance with Shopify image requirements." },
      { title: "Theme & listing updates", body: "Product description updates, price changes, promotional banners, and content edits — handled without touching your dev team." },
    ],
    includes: [
      "Bulk CSV uploads and product imports",
      "Metafield and custom attribute setup",
      "Shopify collection and tag structuring",
      "Variant and option management",
      "Order fulfilment and tracking",
      "Returns and refund processing",
      "Customer support — email and chat",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Shopify stores served" },
      { n: "4hr", l: "Support response SLA" },
      { n: "99.1%", l: "Catalog accuracy rate" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "eBay", "Etsy", "WooCommerce", "BigCommerce"],
  },

 

  "bigcommerce-woocommerce": {
    name: "BigCommerce & WooCommerce",
    slug: "bigcommerce-woocommerce",
    color: "#34495E",
    tagline: "Catalog management and back-office for self-hosted stores.",
    heroHeadline: "BigCommerce & WooCommerce, ",
    heroEm: "fully managed.",
    description:
      "Product catalog management, bulk uploads, attribute structuring, and back-office operations for BigCommerce and WooCommerce stores. We handle the operational complexity of self-hosted platforms.",
    services: [
      { title: "Product catalog management", body: "Bulk uploads, category structuring, attribute setup, and ongoing catalog maintenance for BigCommerce and WooCommerce." },
      { title: "Attribute & filter structuring", body: "Product attributes, custom fields, and filter options structured for on-site search and buyer navigation." },
      { title: "Bulk imports & data migration", body: "CSV imports, data migration between platforms, and feed transformation for any platform format." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder alerts, and inventory sync across channels." },
      { title: "Customer support", body: "Email and live chat support for your customers — managed on your behalf with agreed SLAs." },
      { title: "Theme & content updates", body: "Product description updates, price changes, promotional content, and catalog edits without involving your dev team." },
    ],
    includes: [
      "BigCommerce and WooCommerce bulk CSV imports",
      "Category tree and navigation structuring",
      "Product attribute and custom field setup",
      "Variant and option configuration",
      "Order processing and fulfilment",
      "Stock level monitoring and alerts",
      "Multi-channel inventory sync",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      { n: "99.1%", l: "Data accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "Magento", "OpenCart", "Volusion"],
  },

  magento: {
    name: "Magento",
    slug: "magento",
    color: "#EE672F",
    tagline: "Magento catalog operations and back-office management.",
    heroHeadline: "Magento operations, ",
    heroEm: "handled by specialists.",
    description:
      "Product catalog management, bulk imports, attribute structuring, and back-office operations for Magento 2 stores. We handle the day-to-day operational complexity so your team can focus on development and growth.",
    services: [
      { title: "Product catalog management", body: "Bulk product imports, category structuring, attribute set configuration, and ongoing catalog maintenance for Magento 2 stores." },
      { title: "Attribute & attribute set management", body: "Attribute sets, custom attributes, and layered navigation options configured for accurate filtering and on-site search." },
      { title: "Bulk imports & data migration", body: "CSV and XML imports, product data migration, and feed transformation — structured to Magento's import format requirements." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder point management, and inventory sync across sales channels." },
      { title: "Customer support", body: "Email and live chat support handled on your behalf — in your brand voice, on an agreed SLA." },
      { title: "Content & pricing updates", body: "Product description updates, price changes, promotional rules, and catalog content edits managed without developer involvement." },
    ],
    includes: [
      "Magento 2 bulk CSV and XML imports",
      "Attribute set creation and configuration",
      "Category tree and navigation structuring",
      "Configurable and simple product setup",
      "Order processing and fulfilment coordination",
      "Stock level monitoring and reorder alerts",
      "Customer support — email and chat",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      { n: "99.1%", l: "Data accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "BigCommerce", "WooCommerce", "OpenCart"],
  },

  opencart: {
    name: "OpenCart",
    slug: "opencart",
    color: "#23A1D1",
    tagline: "OpenCart catalog management and store operations.",
    heroHeadline: "OpenCart operations, ",
    heroEm: "fully managed.",
    description:
      "Product catalog management, bulk uploads, category structuring, and back-office operations for OpenCart stores. We keep your store accurate, organised, and running smoothly — without pulling in your development team.",
    services: [
      { title: "Product catalog management", body: "Bulk product uploads, category structuring, option and attribute setup, and ongoing catalog maintenance for OpenCart stores." },
      { title: "Option & attribute configuration", body: "Product options, attributes, and filter groups configured for accurate on-site search and buyer navigation." },
      { title: "Bulk imports & data management", body: "CSV imports, product data updates, and feed preparation — structured to OpenCart's import requirements." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder alerts, and inventory management across your store." },
      { title: "Customer support", body: "Email and live chat support managed on your behalf — branded responses on an agreed SLA." },
      { title: "Content & pricing updates", body: "Product description updates, price changes, and catalog edits handled without requiring developer time." },
    ],
    includes: [
      "OpenCart bulk CSV product imports",
      "Category and subcategory structuring",
      "Product option and attribute setup",
      "Manufacturer and filter group configuration",
      "Order processing and fulfilment coordination",
      "Stock level monitoring and alerts",
      "Customer support — email and chat",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      { n: "99.1%", l: "Data accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "Magento", "WooCommerce", "Volusion"],
  },

  volusion: {
    name: "Volusion",
    slug: "volusion",
    color: "#5C3D9E",
    tagline: "Volusion store management and catalog operations.",
    heroHeadline: "Volusion operations, ",
    heroEm: "managed end to end.",
    description:
      "Product catalog management, bulk imports, category structuring, and back-office operations for Volusion stores. We handle the day-to-day operational layer so you can focus on growing your business.",
    services: [
      { title: "Product catalog management", body: "Bulk product uploads, category structuring, option setup, and ongoing catalog maintenance for Volusion stores." },
      { title: "Product options & variants", body: "Option sets, child products, and variant configuration — set up accurately for buyer navigation and correct order processing." },
      { title: "Bulk imports & data management", body: "CSV imports, product data updates, and inventory file management structured to Volusion's import format." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder point management, and inventory accuracy across your store." },
      { title: "Customer support", body: "Email and live chat support handled on your behalf — in your brand voice, on an agreed SLA." },
      { title: "Content & pricing updates", body: "Product description updates, price changes, promotional content, and catalog edits managed without developer involvement." },
    ],
    includes: [
      "Volusion bulk CSV product imports",
      "Category and subcategory setup",
      "Product option and child product configuration",
      "SEO field population — titles, meta descriptions",
      "Order processing and fulfilment coordination",
      "Stock level monitoring and reorder alerts",
      "Customer support — email and chat",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      { n: "99.1%", l: "Data accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "Magento", "OpenCart", "BigCommerce"],
  },

};

export const platformSlugs = Object.keys(platforms);