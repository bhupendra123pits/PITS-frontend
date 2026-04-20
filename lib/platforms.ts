export type PlatformService = {
  title: string;
  body: string;
};

export type PlatformStat = {
  n: string;
  l: string;
};

export type WhatWeHandleItem = {
  title: string;
  body: string;
  bullets: string[];
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
  whatWeHandle?: WhatWeHandleItem[];
  whySection?: { title: string; body: string };
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
      "Shopify gives you the storefront. We handle everything behind it — product data, catalog management, customer support, order processing, and the ongoing operational work that keeps your store running smoothly and growing steadily.",
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
      { n: "Shopify", l: "Back-office specialists" },
      { n: "99.1%", l: "Catalog accuracy rate" },
      { n: "15yrs", l: "Operations experience" },
      { n: "Full-stack", l: "Store support" },

    ],
    also: ["Amazon", "eBay", "Etsy", "WooCommerce", "BigCommerce"],
    whatWeHandle: [
      {
        title: "Product catalog & data management",
        body: "Your Shopify catalog is only as good as the data behind it. We build it right, keep it clean, and scale it as your range grows.",
        bullets: [
          "Product upload — title, description, price, variants, tags, and metadata",
          "Collection and tag structuring for on-site navigation and search",
          "Product description writing and SEO optimisation — meta titles, descriptions, and alt text",
          "Variant setup — size, colour, material — with correct pricing and SKU mapping",
          "Inventory level setup and stock tracking configuration",
          "Bulk catalog imports from supplier spreadsheets or existing platform exports",
          "Product deduplication and data cleanup",
          "Metafield setup for custom product attributes",
        ],
      },
      {
        title: "Image management",
        body: "Shopify product images directly affect conversion. We process, resize, and upload images that meet your store's visual standards and load performance requirements.",
        bullets: [
          "Background removal and replacement",
          "Resizing and format conversion to Shopify specification",
          "Alt text writing for SEO and accessibility",
          "Image set management — multiple angles, lifestyle, and detail shots",
        ],
      },
      {
        title: "Customer support",
        body: "We handle your Shopify customer support in your brand voice — keeping response times within SLA and satisfaction scores high.",
        bullets: [
          "Email and chat support — pre-sale enquiries, order status, returns, and complaints",
          "Agreed SLA windows — 4-hour, 12-hour, or 24-hour response times",
          "Returns and refund request management",
          "Shopify Inbox and chat app management",
          "Monthly performance reporting — volume, response time, resolution rate",
        ],
      },
      {
        title: "Operations & maintenance",
        body: "",
        bullets: [
          "Order processing and fulfilment tracking",
          "Inventory monitoring and reorder point alerts",
          "App integration support — reviews, loyalty, upsell, and subscription tools",
          "Store maintenance — broken links, price updates, seasonal content changes",
          "Discount code and sale campaign setup",
        ],
      },
    ],
    whySection: {
      title: "Why a Shopify specialist matters",
      body: "Shopify is deceptively simple to set up and genuinely complex to operate well at scale. Catalog data that's inconsistently structured, images that aren't optimised, and product descriptions that ignore SEO all compound quietly until they're costing you significant revenue. Our team knows Shopify's data model, its SEO requirements, and the operational patterns that keep growing stores running without breaking.",
    },
  },

  bigcommerce: {
    name: "BigCommerce",
    slug: "bigcommerce",
    color: "#34495E",
    tagline: "Catalog management and back-office for BigCommerce stores.",
    heroHeadline: "BigCommerce back-office, ",
    heroEm: "fully managed.",
    description:
      "BigCommerce is built for growing and mid-market brands that need more flexibility than Shopify offers. We handle the catalog operations, data management, and back-office support that keeps your BigCommerce store accurate, performant, and ready to scale.",
    services: [
      { title: "Product catalog management", body: "Bulk uploads, category structuring, attribute setup, and ongoing catalog maintenance for BigCommerce stores." },
      { title: "Attribute & filter structuring", body: "Product attributes, custom fields, and filter options structured for on-site search and buyer navigation." },
      { title: "Bulk imports & data migration", body: "CSV imports, data migration between platforms, and feed transformation for any platform format." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder alerts, and inventory sync across channels." },
      { title: "Customer support", body: "Email and live chat support for your customers — managed on your behalf with agreed SLAs." },
      { title: "Theme & content updates", body: "Product description updates, price changes, promotional content, and catalog edits without involving your dev team." },
    ],
    includes: [
      "BigCommerce bulk CSV imports",
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
      { n: "BigCommerce", l: "Catalog specialists" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "WooCommerce", "Magento", "OpenCart"],
    whatWeHandle: [
      {
        title: "Catalog & product data",
        body: "BigCommerce's data model supports greater complexity than most platforms — multi-currency, complex variants, custom fields, and channel-specific pricing. We manage that complexity so it doesn't slow you down.",
        bullets: [
          "Product upload — name, description, SKU, price, categories, and custom fields",
          "Variant and modifier setup — size, colour, custom options with correct pricing rules",
          "Category tree design and product category mapping",
          "Brand page creation and management",
          "Bulk catalog imports via CSV and BigCommerce data tools",
          "Custom field and product specification setup",
          "SEO field optimisation — page title, meta description, URL, and alt text",
          "Multi-channel listing preparation for Google Shopping, Amazon, and eBay integrations",
        ],
      },
      {
        title: "Image management",
        body: "",
        bullets: [
          "Background removal and image editing to BigCommerce spec",
          "Thumbnail and zoom image preparation",
          "Image alt text writing for SEO and accessibility",
          "Video and 360° asset management support",
        ],
      },
      {
        title: "Operations & support",
        body: "",
        bullets: [
          "Customer support — email and chat, in your brand voice, within agreed SLAs",
          "Order management and fulfilment tracking",
          "Inventory monitoring and stock level management",
          "Returns and refund request handling",
          "Discount, coupon, and promotion setup",
          "Store maintenance — content updates, broken link monitoring, price adjustments",
        ],
      },
    ],
    whySection: {
      title: "Why BigCommerce specialist knowledge matters",
      body: "BigCommerce's flexibility is its strength and its challenge. The platform supports significant customisation — but that means there are many ways to structure catalog data, and the wrong approach creates technical debt that's painful to unpick later. We understand BigCommerce's data model, its channel manager, and how to structure catalogs that work across multiple sales channels without duplication.",
    },
  },

  woocommerce: {
    name: "WooCommerce",
    slug: "woocommerce",
    color: "#7F54B3",
    tagline: "Catalog management and back-office for WooCommerce stores.",
    heroHeadline: "WooCommerce back-office, ",
    heroEm: "fully managed.",
    description:
      "WooCommerce powers a significant share of independent e-commerce stores worldwide — and with that flexibility comes operational complexity. Product data, category structure, attribute management, and customer support all require consistent attention. We provide that, so you don't have to.",
    services: [
      { title: "Product catalog management", body: "Bulk uploads, category structuring, attribute setup, and ongoing catalog maintenance for WooCommerce stores." },
      { title: "Attribute & variation management", body: "Product attributes, variable products, and filter options structured for on-site search and buyer navigation." },
      { title: "Bulk imports & data migration", body: "CSV imports via WooCommerce's native importer, data migration, and feed transformation for any format." },
      { title: "Order & inventory management", body: "Order processing, stock level monitoring, reorder alerts, and inventory sync across channels." },
      { title: "Customer support", body: "Email and live chat support for your customers — managed on your behalf with agreed SLAs." },
      { title: "Content & pricing updates", body: "Product description updates, price changes, promotional content, and catalog edits without involving your dev team." },
    ],
    includes: [
      "WooCommerce bulk CSV product imports",
      "Category and tag structuring",
      "Product attribute and variation setup",
      "Simple, variable, and grouped product creation",
      "Order processing and fulfilment",
      "Stock level monitoring and alerts",
      "Customer support — email and chat",
      "Weekly operational reporting",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      // { n: "99.1%", l: "Data accuracy" },
      { n: "WooCommerce", l: "Catalog specialists" },
      { n: "15yrs", l: "Platform experience" },
      { n: "WordPress-native", l: "Platform Knowledge" },

    ],
    also: ["Shopify", "BigCommerce", "Magento", "OpenCart"],
    whatWeHandle: [
      {
        title: "Product catalog & data",
        body: "WooCommerce's product data structure — simple products, variable products, grouped products, and external products — requires careful management to keep catalogs clean, consistent, and well-structured.",
        bullets: [
          "Simple and variable product creation — titles, descriptions, SKUs, and pricing",
          "Attribute setup and management — global attributes, product-specific attributes, and variation configuration",
          "Product category and tag structure",
          "Bulk product imports via WooCommerce CSV and third-party tools",
          "Product description writing and SEO optimisation — Yoast and RankMath compatible",
          "Custom field and ACF data management",
          "Product deduplication and catalog cleanup",
          "Upsell and cross-sell product linking",
        ],
      },
      {
        title: "Image management",
        body: "",
        bullets: [
          "Featured image and product gallery setup",
          "Background removal and image editing to store visual standards",
          "Image compression and optimisation for page load performance",
          "Alt text writing for SEO and accessibility",
        ],
      },
      {
        title: "Operations & support",
        body: "",
        bullets: [
          "Customer support — email and chat, in your brand voice, within agreed SLAs",
          "Order management and fulfilment tracking via WooCommerce dashboard",
          "Inventory management and stock status maintenance",
          "Returns, refunds, and dispute handling",
          "Coupon and promotional campaign setup",
          "Plugin integration support — reviews, wishlist, subscriptions, and loyalty",
        ],
      },
    ],
    whySection: {
      title: "Why WooCommerce specialist knowledge matters",
      body: "WooCommerce's open architecture means catalog quality varies enormously between stores. We've inherited catalogs with thousands of products where attribute data is inconsistent, categories are duplicated, and variation matrices are structured in ways that make management impossible at scale. We know what good WooCommerce data architecture looks like — and we build and maintain it correctly.",
    },
  },

  magento: {
    name: "Magento",
    slug: "magento",
    color: "#EE672F",
    tagline: "Magento catalog operations and back-office management.",
    heroHeadline: "Magento operations, ",
    heroEm: "handled by specialists.",
    description:
      "Magento is the platform of choice for mid-market and enterprise e-commerce businesses that need serious catalog management capability, complex attribute structures, and multi-store support. Managing it well requires platform expertise and operational discipline. We provide both.",
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
      { n: "Enterprise", l: "Scale experience" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "BigCommerce", "WooCommerce", "OpenCart"],
    whatWeHandle: [
      {
        title: "Catalog & product data management",
        body: "Magento's catalog architecture — attribute sets, configurable products, bundle products, and grouped products — is powerful but complex. We manage it with the precision it requires.",
        bullets: [
          "Simple, configurable, bundle, grouped, and downloadable product creation",
          "Attribute set design and management — creating structured, reusable product templates",
          "Category tree design, hierarchy management, and product category assignment",
          "Bulk product import via Magento data import tools and custom feeds",
          "Product description writing and SEO field optimisation",
          "URL key, meta title, and meta description management",
          "Product image upload and alt text management",
          "Tier pricing and customer group pricing configuration",
          "Cross-sell, upsell, and related product management",
        ],
      },
      {
        title: "Multi-store & multi-website support",
        body: "For businesses running multiple Magento stores or websites, consistent catalog management across store views is a significant operational challenge. We handle it.",
        bullets: [
          "Store view content management — translated or localised product content",
          "Multi-website product assignment and pricing management",
          "Attribute scope management — global, website, and store view",
        ],
      },
      {
        title: "Operations support",
        body: "",
        bullets: [
          "Order management and fulfilment tracking",
          "Customer support — email and chat within agreed SLAs",
          "Inventory management and stock level maintenance",
          "Returns and refund request handling",
          "Promotion and catalog price rule setup",
        ],
      },
    ],
    whySection: {
      title: "Why Magento specialist knowledge matters",
      body: "Magento's power comes with significant operational overhead. Attribute sets built without a clear data model create catalog debt that compounds with every new product added. Category structures that don't match buyer navigation patterns suppress organic search visibility. Our team has worked with Magento catalogs ranging from 1,000 to 500,000 SKUs and knows how to build and maintain data architecture that scales.",
    },
  },

  opencart: {
    name: "OpenCart",
    slug: "opencart",
    color: "#23A1D1",
    tagline: "OpenCart catalog management and store operations.",
    heroHeadline: "OpenCart operations, ",
    heroEm: "fully managed.",
    description:
      "OpenCart is a lightweight, open-source platform used widely by independent retailers and mid-market businesses — particularly across Asia and emerging markets. It's flexible and cost-effective, but managing product data, categories, and attributes at scale requires the same operational discipline as any enterprise platform. We provide it.",
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
      { n: "OpenCart", l: "Catalog specialists" },
      { n: "Multi-market", l: "Platform experience" },

    ],
    also: ["Shopify", "Magento", "WooCommerce", "Volusion"],
    whatWeHandle: [
      {
        title: "Product catalog & data",
        body: "OpenCart's product management system supports a broad range of product types and customisation options. We manage your catalog to a consistent standard that supports search visibility and buyer confidence.",
        bullets: [
          "Product creation — name, description, model, SKU, price, and tax class",
          "Option and variant setup — size, colour, material with price adjustments",
          "Category creation, hierarchy design, and product assignment",
          "Attribute group and attribute setup for specification data",
          "Bulk product import via OpenCart's built-in import tool and extensions",
          "Product description writing and SEO field optimisation",
          "Meta title, meta description, and keyword field management",
          "Manufacturer and brand page setup",
          "Related products and product filter configuration",
        ],
      },
      {
        title: "Image management",
        body: "",
        bullets: [
          "Main product image and additional image gallery upload",
          "Background removal and image editing to store standards",
          "Image compression and optimisation for load performance",
          "Alt text management for SEO",
        ],
      },
      {
        title: "Operations support",
        body: "",
        bullets: [
          "Customer support — email and chat, within agreed SLAs",
          "Order management and fulfilment tracking",
          "Inventory level monitoring and stock management",
          "Returns and refund handling",
          "Coupon and discount setup via OpenCart's promotion tools",
          "Extension and module integration support",
        ],
      },
    ],
    whySection: {
      title: "Why OpenCart specialist knowledge matters",
      body: "OpenCart's open-source nature means every installation is configured slightly differently — extensions, custom modules, and database modifications vary from store to store. Our team has worked across multiple OpenCart configurations and understands how to manage catalog data cleanly regardless of the specific setup. If you're also considering a migration from OpenCart to a more modern platform, we can support that transition as well.",
    },
  },

  volusion: {
    name: "Volusion",
    slug: "volusion",
    color: "#5C3D9E",
    tagline: "Volusion store management and catalog operations.",
    heroHeadline: "Volusion operations, ",
    heroEm: "managed end to end.",
    description:
      "Volusion has been powering independent e-commerce stores since the early 2000s — and many established businesses still run their operations on it. Whether you're committed to Volusion for the foreseeable future and need reliable catalog management, or you're planning a migration to a more modern platform, we support both.",
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
      { n: "Migration  ", l: "Support available" },
      { n: "15yrs", l: "Platform experience" },
    ],
    also: ["Shopify", "Magento", "OpenCart", "BigCommerce"],
    whatWeHandle: [
      {
        title: "Catalog & product data management",
        body: "Keeping a Volusion catalog accurate and well-structured requires consistent attention — particularly for stores with large product ranges where bulk management tools are essential.",
        bullets: [
          "Product creation — name, description, SKU, price, and category assignment",
          "Option and variant setup — size, colour, and other configurable attributes",
          "Category creation and hierarchy management",
          "Bulk product import and export via Volusion's CSV tools",
          "Product description writing and SEO field optimisation",
          "Meta title, meta description, and keyword management",
          "Product image upload and management",
          "Inventory level management and stock tracking",
        ],
      },
      {
        title: "Operations support",
        body: "",
        bullets: [
          "Customer support — email and chat, within agreed SLAs",
          "Order management and fulfilment tracking",
          "Returns and refund request handling",
          "Promotion and discount code setup",
          "Store maintenance and content updates",
        ],
      },
      {
        title: "Platform migration support",
        body: "Many Volusion stores are in the process of — or considering — migrating to more modern platforms like Shopify, BigCommerce, or WooCommerce. We support that transition.",
        bullets: [
          "Full catalog export and data audit before migration",
          "Data mapping from Volusion structure to target platform taxonomy",
          "Product description, image, and attribute transfer management",
          "301 redirect mapping to preserve SEO value",
          "Post-migration catalog QA and error resolution",
          "Ongoing management on the new platform once migration is complete",
        ],
      },
    ],
    whySection: {
      title: "A note on Volusion",
      body: "Volusion is a stable platform for stores that are already running on it — but the platform has not kept pace with the development velocity of Shopify, BigCommerce, and WooCommerce in recent years. If your store is growing and you're finding Volusion's limitations affecting your ability to scale, we're happy to discuss what a migration would involve and what the realistic benefits would be. There's no pressure — but the conversation is worth having.",
    },
  },

};

export const platformSlugs = Object.keys(platforms);