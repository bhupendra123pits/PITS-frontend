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
      { n: "100+", l: "Shopify stores served" },
      { n: "4hr", l: "Support response SLA" },
      { n: "99.1%", l: "Catalog accuracy rate" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "eBay", "Etsy", "WooCommerce", "BigCommerce"],
  },

  amazon: {
    name: "Amazon",
    slug: "amazon",
    color: "#FF9900",
    tagline: "Seller Central specialists. Every day, all day.",
    heroHeadline: "Amazon operations, ",
    heroEm: "run by specialists.",
    description:
      "Listing creation, Buy Box strategy, suppressed listing recovery, FBA management, and account health monitoring — handled by a team that works inside Seller Central every single day.",
    services: [
      { title: "Listing creation & optimisation", body: "Keyword-rich titles, bullet points, descriptions, and backend search terms — structured for Seller Central compliance and A9 visibility." },
      { title: "A+ Content & EBC", body: "Enhanced Brand Content and A+ Content creation. Brand story, comparison charts, lifestyle imagery layout." },
      { title: "Buy Box strategy", body: "Buy Box monitoring, repricing rule setup, and competitor analysis to protect and win the Buy Box." },
      { title: "Suppressed & stranded listing recovery", body: "We identify, diagnose, and fix suppressed, stranded, and inactive listings — across any category." },
      { title: "FBA shipment management", body: "Shipment plan creation, label generation, inventory reconciliation, and lost inventory claims." },
      { title: "Account health monitoring", body: "Daily account health checks, policy violation responses, and performance metric management." },
    ],
    includes: [
      "Flat file and Seller Central direct uploads",
      "Amazon Browse Node and category mapping",
      "Variation and parent-child relationship setup",
      "ASIN creation and product matching",
      "Suppressed listing diagnosis and fix",
      "FBA shipment creation and reconciliation",
      "Buy Box monitoring and repricing",
      "Account health and performance management",
    ],
    stats: [
      { n: "3x", l: "Avg. visibility lift" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "100+", l: "Amazon stores managed" },
      { n: "15yrs", l: "Seller Central experience" },
    ],
    also: ["Shopify", "eBay", "Walmart", "Etsy"],
  },

  ebay: {
    name: "eBay",
    slug: "ebay",
    color: "#E53238",
    tagline: "Cassini-optimised listings and full store management.",
    heroHeadline: "eBay store operations, ",
    heroEm: "optimised for Cassini.",
    description:
      "Listing creation, Item Specifics structuring, store design, Promoted Listings management, and seller performance monitoring — by a team that understands how the Cassini algorithm ranks results.",
    services: [
      { title: "Listing creation & optimisation", body: "Cassini-optimised titles, item specifics, descriptions, and category selection — structured for maximum search visibility." },
      { title: "Item Specifics structuring", body: "Complete and accurate Item Specifics mapped to eBay's category requirements — critical for Cassini ranking and filter visibility." },
      { title: "Store design & management", body: "eBay store setup, category organisation, promotional banners, and ongoing store maintenance." },
      { title: "Promoted Listings management", body: "Promoted Listings Standard and Advanced setup, bid management, and campaign performance monitoring." },
      { title: "Seller performance monitoring", body: "Defect rate tracking, late shipment monitoring, and case resolution to protect your Top Rated Seller status." },
      { title: "Bulk listing & revisions", body: "High-volume listing creation and bulk revisions using File Exchange and Seller Hub." },
    ],
    includes: [
      "Cassini-optimised title and description writing",
      "Complete Item Specifics for all categories",
      "eBay File Exchange bulk uploads",
      "Store category and navigation setup",
      "Promoted Listings campaign management",
      "Best Offer and auction configuration",
      "Returns and case management",
      "Seller performance metric monitoring",
    ],
    stats: [
      { n: "Top", l: "Rated Seller support" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "100+", l: "eBay stores managed" },
      { n: "15yrs", l: "eBay operations experience" },
    ],
    also: ["Amazon", "Shopify", "Etsy", "Walmart"],
  },

  etsy: {
    name: "Etsy",
    slug: "etsy",
    color: "#F56400",
    tagline: "Etsy listing management and shop operations.",
    heroHeadline: "Etsy shop operations, ",
    heroEm: "done right.",
    description:
      "Listing optimisation, tag and attribute structuring, shop management, and order handling — by a team that understands Etsy's search algorithm and what buyers in creative marketplaces respond to.",
    services: [
      { title: "Listing creation & optimisation", body: "SEO-optimised titles, tags, descriptions, and attributes — structured around how Etsy's search algorithm surfaces results." },
      { title: "Tag & attribute structuring", body: "All 13 tags used strategically. Attributes, materials, and occasion fields completed for maximum filter visibility." },
      { title: "Shop management", body: "Shop sections, announcement copy, policies, and About page — maintained and updated as your shop evolves." },
      { title: "Order processing", body: "Order acknowledgements, fulfilment coordination, tracking updates, and customer communication." },
      { title: "Customer support", body: "Buyer messages, review responses, and dispute handling — in your brand voice, on an agreed SLA." },
      { title: "Image processing", body: "Etsy-compliant image sets — main image, lifestyle shots, and detail images resized and formatted to platform specs." },
    ],
    includes: [
      "SEO-optimised listing titles and descriptions",
      "All 13 tags used per listing",
      "Attribute and material field completion",
      "Shop section and navigation setup",
      "Order processing and tracking updates",
      "Buyer message and review management",
      "Returns and refund handling",
      "Image resizing and formatting",
    ],
    stats: [
      { n: "100+", l: "Stores managed" },
      { n: "4hr", l: "Support response SLA" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "15yrs", l: "Marketplace experience" },
    ],
    also: ["Shopify", "Amazon", "eBay", "WooCommerce"],
  },

  "bigcommerce-woocommerce": {
    name: "BigCommerce & WooCommerce",
    slug: "bigcommerce-woocommerce",
    color: "#34495E",
    tagline: "Catalog management and back-office for self-hosted stores.",
    heroHeadline: "BigCommerce & WooCommerce, ",
    heroEm: "fully managed.",
    description:
      "Product catalog management, bulk uploads, attribute structuring, and back-office operations for BigCommerce and WooCommerce stores — including Magento. We handle the operational complexity of self-hosted platforms.",
    services: [
      { title: "Product catalog management", body: "Bulk uploads, category structuring, attribute setup, and ongoing catalog maintenance for BigCommerce and WooCommerce." },
      { title: "Attribute & filter structuring", body: "Product attributes, custom fields, and filter options structured for on-site search and buyer navigation." },
      { title: "Bulk imports & data migration", body: "CSV imports, data migration between platforms, and feed transformation for any platform format." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder alerts, and inventory sync across channels." },
      { title: "Customer support", body: "Email and live chat support for your customers — managed on your behalf with agreed SLAs." },
      { title: "Magento support", body: "We also support Magento 2 catalog operations, bulk imports, and back-office management." },
    ],
    includes: [
      "BigCommerce and WooCommerce bulk CSV imports",
      "Category tree and navigation structuring",
      "Product attribute and custom field setup",
      "Variant and option configuration",
      "Order processing and fulfilment",
      "Stock level monitoring and alerts",
      "Magento 2 catalog management",
      "Multi-channel inventory sync",
    ],
    stats: [
      { n: "100+", l: "Stores managed" },
      { n: "99.1%", l: "Data accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "Amazon", "eBay", "Walmart"],
  },

  walmart: {
    name: "Walmart & Others",
    slug: "walmart",
    color: "#0071CE",
    tagline: "Walmart Seller Center and emerging marketplace management.",
    heroHeadline: "Walmart and beyond — ",
    heroEm: "every marketplace covered.",
    description:
      "Walmart Seller Center setup, listing management, content score optimisation, and order handling. We also support OnBuy, Fruugo, Mirakl-based marketplaces, and other emerging platforms.",
    services: [
      { title: "Walmart Seller Center setup", body: "Account setup, onboarding, item setup, and category configuration for new Walmart marketplace sellers." },
      { title: "Listing creation & optimisation", body: "Walmart-compliant titles, descriptions, attributes, and content score optimisation for maximum visibility." },
      { title: "Content score optimisation", body: "We systematically improve your Walmart content scores — images, descriptions, attributes, and rich media." },
      { title: "Order & fulfilment management", body: "Order processing, fulfilment coordination, tracking updates, and Walmart fulfilment compliance." },
      { title: "Performance monitoring", body: "Seller scorecard monitoring, policy compliance, and performance metric management to protect your account." },
      { title: "Other marketplaces", body: "We also support OnBuy, Fruugo, Mirakl-based marketplaces, and other platforms on request." },
    ],
    includes: [
      "Walmart Seller Center account setup",
      "Item setup and bulk listing creation",
      "Content score audit and improvement",
      "Attribute and spec sheet completion",
      "Order processing and tracking",
      "Seller scorecard monitoring",
      "OnBuy and Fruugo listing management",
      "Mirakl marketplace operations",
    ],
    stats: [
      { n: "100+", l: "Stores managed" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "6+", l: "Marketplaces supported" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "eBay", "Shopify", "Etsy"],
  },
};

export const platformSlugs = Object.keys(platforms);
