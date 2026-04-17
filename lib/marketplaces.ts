export type MarketplaceService = {
  title: string;
  body: string;
};

export type MarketplaceStat = {
  n: string;
  l: string;
};

export type Marketplace = {
  name: string;
  slug: string;
  heroHeadline: string;
  heroEm: string;
  description: string;
  color: string;
  services: MarketplaceService[];
  includes: string[];
  stats: MarketplaceStat[];
  also: string[];
};

export const marketplaces: Record<string, Marketplace> = {
  amazon: {
    name: "Amazon",
    slug: "amazon",
    color: "#FF9900",
    heroHeadline: "Amazon marketplace operations, ",
    heroEm: "run by specialists.",
    description:
      "Listing creation, Buy Box strategy, suppressed listing recovery, FBA management, and account health monitoring — handled by a team that works inside Seller Central every single day.",
    services: [
      { title: "Listing creation & optimisation", body: "Keyword-rich titles, bullet points, descriptions, and backend search terms — structured for Seller Central compliance and A9 visibility." },
      { title: "A+ Content & EBC", body: "Enhanced Brand Content and A+ Content creation. Brand story, comparison charts, and lifestyle imagery layout." },
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
      { n: "500+", l: "Amazon stores managed" },
      { n: "15yrs", l: "Seller Central experience" },
    ],
    also: ["eBay", "Walmart", "Etsy", "BestBuy"],
  },

  ebay: {
    name: "eBay",
    slug: "ebay",
    color: "#E53238",
    heroHeadline: "eBay marketplace operations, ",
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
      { n: "500+", l: "eBay stores managed" },
      { n: "15yrs", l: "eBay operations experience" },
    ],
    also: ["Amazon", "Walmart", "Etsy", "Newegg"],
  },

  walmart: {
    name: "Walmart",
    slug: "walmart",
    color: "#0071CE",
    heroHeadline: "Walmart marketplace operations, ",
    heroEm: "content score optimised.",
    description:
      "Walmart Seller Center setup, listing management, content score optimisation, and order handling — by a team that understands Walmart's ranking factors and compliance requirements.",
    services: [
      { title: "Walmart Seller Center setup", body: "Account setup, onboarding, item setup, and category configuration for new Walmart marketplace sellers." },
      { title: "Listing creation & optimisation", body: "Walmart-compliant titles, descriptions, attributes, and content score optimisation for maximum visibility." },
      { title: "Content score optimisation", body: "We systematically improve your Walmart content scores — images, descriptions, attributes, and rich media." },
      { title: "Order & fulfilment management", body: "Order processing, fulfilment coordination, tracking updates, and Walmart fulfilment compliance." },
      { title: "Performance monitoring", body: "Seller scorecard monitoring, policy compliance, and performance metric management to protect your account." },
      { title: "Bulk listing management", body: "High-volume item setup via Walmart's bulk upload templates and spec sheet completion." },
    ],
    includes: [
      "Walmart Seller Center account setup",
      "Item setup and bulk listing creation",
      "Content score audit and improvement",
      "Attribute and spec sheet completion",
      "Order processing and tracking",
      "Seller scorecard monitoring",
      "Rich media and image compliance",
      "Returns and dispute management",
    ],
    stats: [
      { n: "500+", l: "Stores managed" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "Content", l: "Score specialists" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "eBay", "BestBuy", "Newegg"],
  },

  etsy: {
    name: "Etsy",
    slug: "etsy",
    color: "#F56400",
    heroHeadline: "Etsy marketplace operations, ",
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
      { n: "500+", l: "Shops managed" },
      { n: "4hr", l: "Support response SLA" },
      { n: "99.1%", l: "Listing accuracy" },
      { n: "15yrs", l: "Marketplace experience" },
    ],
    also: ["Amazon", "eBay", "Poshmark", "Houzz"],
  },

  bestbuy: {
    name: "BestBuy",
    slug: "bestbuy",
    color: "#003087",
    heroHeadline: "BestBuy marketplace listings, ",
    heroEm: "spec-perfect and compliant.",
    description:
      "Product listing creation, technical specification structuring, image compliance, and content management for the BestBuy marketplace — by a team that knows what BestBuy's category managers require.",
    services: [
      { title: "Product listing creation", body: "BestBuy-compliant product titles, descriptions, and feature bullets structured to meet marketplace content standards." },
      { title: "Technical spec structuring", body: "Complete technical specifications mapped to BestBuy's attribute schema — every field filled, every unit formatted correctly." },
      { title: "Image compliance", body: "Product images resized, formatted, and reviewed against BestBuy's image guidelines — main shots, angles, and detail views." },
      { title: "Category & attribute mapping", body: "Products correctly categorised within BestBuy's taxonomy with all required and optional attributes populated." },
      { title: "Content quality management", body: "Ongoing content audits, data accuracy checks, and updates as BestBuy's content requirements evolve." },
      { title: "New product onboarding", body: "End-to-end new product setup — from data collection and spec sheet creation to final submission and go-live." },
    ],
    includes: [
      "BestBuy product content creation",
      "Technical specification sheets",
      "Image set preparation and compliance",
      "Category taxonomy mapping",
      "Attribute and filter field completion",
      "Content accuracy audits",
      "New product onboarding workflows",
      "Ongoing catalog maintenance",
    ],
    stats: [
      { n: "99.1%", l: "Content accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "Walmart", "Newegg", "eBay"],
  },

  newegg: {
    name: "Newegg",
    slug: "newegg",
    color: "#FF6600",
    heroHeadline: "Newegg marketplace listings, ",
    heroEm: "built for tech buyers.",
    description:
      "Technical product listings, spec sheet structuring, and catalog management for the Newegg marketplace — by a team that understands what tech-savvy buyers look for and what Newegg's data requirements demand.",
    services: [
      { title: "Tech product listing creation", body: "Newegg-optimised titles, descriptions, and feature bullets written for technically informed buyers." },
      { title: "Spec sheet structuring", body: "Complete technical specifications mapped to Newegg's attribute schema — processor details, memory, dimensions, compatibility, and all category-specific fields." },
      { title: "Category & sub-category mapping", body: "Products placed in the correct Newegg category with all required and recommended attributes populated for search visibility." },
      { title: "Image preparation", body: "Product images formatted and reviewed against Newegg's image requirements — primary shots, lifestyle, and detail views." },
      { title: "Seller account management", body: "Newegg Seller Portal management, promotional setup, and seller performance monitoring." },
      { title: "Bulk catalog management", body: "High-volume listing creation and updates via Newegg's data feed and bulk upload tools." },
    ],
    includes: [
      "Newegg product content creation",
      "Technical spec sheet completion",
      "Category and sub-category mapping",
      "Image set preparation",
      "Promotional and sale configuration",
      "Seller performance monitoring",
      "Bulk feed management",
      "Ongoing catalog accuracy maintenance",
    ],
    stats: [
      { n: "99.1%", l: "Spec accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Tech catalog experience" },
    ],
    also: ["Amazon", "BestBuy", "Walmart", "eBay"],
  },

  houzz: {
    name: "Houzz",
    slug: "houzz",
    color: "#7AC143",
    heroHeadline: "Houzz marketplace listings, ",
    heroEm: "styled for home buyers.",
    description:
      "Product listing creation, room-scene image management, and catalog operations for the Houzz marketplace — by a team that understands what home décor and furniture buyers expect and what Houzz's data standards require.",
    services: [
      { title: "Product listing creation", body: "Houzz-compliant titles, descriptions, and feature highlights written for home décor and furniture buyers." },
      { title: "Room-scene & lifestyle imagery", body: "Image sets prepared to Houzz's standards — product shots, room-scene integration, and dimension reference images." },
      { title: "Attribute & dimension structuring", body: "All product dimensions, materials, finishes, and style attributes completed accurately for Houzz's filter and search system." },
      { title: "Category & style mapping", body: "Products correctly categorised within Houzz's home décor taxonomy with style and room tags applied." },
      { title: "Seller account management", body: "Houzz Pro account management, promotional setup, and performance monitoring." },
      { title: "Bulk catalog management", body: "High-volume listing creation and updates for large furniture and home décor catalogs." },
    ],
    includes: [
      "Houzz product content creation",
      "Room-scene image preparation",
      "Dimension and material attribute completion",
      "Style and category tagging",
      "Houzz Pro account management",
      "Promotional configuration",
      "Bulk feed management",
      "Ongoing catalog maintenance",
    ],
    stats: [
      { n: "99.1%", l: "Content accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Home décor catalog experience" },
    ],
    also: ["Etsy", "Amazon", "Poshmark", "eBay"],
  },

  rakuten: {
    name: "Rakuten",
    slug: "rakuten",
    color: "#BF0000",
    heroHeadline: "Rakuten marketplace listings, ",
    heroEm: "localised and compliant.",
    description:
      "Product listing creation, localisation support, and catalog operations for the Rakuten marketplace — by a team experienced in meeting Rakuten's content standards and reaching its loyal buyer base.",
    services: [
      { title: "Product listing creation", body: "Rakuten-compliant product titles, descriptions, and attributes structured to meet marketplace content requirements." },
      { title: "Content localisation", body: "Product content adapted for Rakuten's audience — tone, terminology, and formatting aligned to marketplace expectations." },
      { title: "Attribute & category mapping", body: "Products correctly categorised within Rakuten's taxonomy with all required attributes populated for search and filter visibility." },
      { title: "Image compliance", body: "Product images reviewed and formatted to Rakuten's image specifications — main shots, additional angles, and lifestyle images." },
      { title: "Seller account management", body: "Rakuten seller account management, promotional setup, and performance monitoring." },
      { title: "Bulk catalog management", body: "High-volume listing creation and updates via Rakuten's data feed and catalog management tools." },
    ],
    includes: [
      "Rakuten product content creation",
      "Content localisation and formatting",
      "Category and attribute mapping",
      "Image set preparation",
      "Seller account management",
      "Promotional configuration",
      "Bulk feed management",
      "Ongoing catalog maintenance",
    ],
    stats: [
      { n: "99.1%", l: "Content accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Operations experience" },
    ],
    also: ["Amazon", "eBay", "Walmart", "Etsy"],
  },

  poshmark: {
    name: "Poshmark",
    slug: "poshmark",
    color: "#C9235B",
    heroHeadline: "Poshmark marketplace listings, ",
    heroEm: "styled to sell.",
    description:
      "Product listing creation, photography guidance, closet management, and community engagement for the Poshmark marketplace — by a team that understands what fashion and apparel buyers respond to.",
    services: [
      { title: "Listing creation & optimisation", body: "Poshmark-optimised titles, descriptions, and brand/category tags — structured to surface in search and attract the right buyers." },
      { title: "Closet management", body: "Ongoing closet organisation, re-listing, sharing strategy, and follower engagement to keep your listings visible." },
      { title: "Photography guidance", body: "Image requirements and styling guidelines so your product photos meet Poshmark's standards and drive conversions." },
      { title: "Attribute & sizing structuring", body: "Brand, size, colour, condition, and category fields completed accurately for maximum filter and search visibility." },
      { title: "Offer & pricing management", body: "Offer to Likers setup, bundle discount configuration, and price drop management." },
      { title: "Bulk listing management", body: "High-volume listing creation and updates for large fashion and apparel catalogs." },
    ],
    includes: [
      "Poshmark listing titles and descriptions",
      "Brand, size, and condition tagging",
      "Closet organisation and management",
      "Re-listing and sharing strategy",
      "Offer to Likers configuration",
      "Bundle discount setup",
      "Bulk listing management",
      "Ongoing catalog maintenance",
    ],
    stats: [
      { n: "99.1%", l: "Listing accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "500+", l: "Closets managed" },
      { n: "15yrs", l: "Fashion catalog experience" },
    ],
    also: ["Etsy", "eBay", "Amazon", "Houzz"],
  },
};

export const marketplaceSlugs = Object.keys(marketplaces);
