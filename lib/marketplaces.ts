export type MarketplaceService = {
  title: string;
  body: string;
};

export type MarketplaceStat = {
  n: string;
  l: string;
};

export type WhatWeHandleItem = {
  title: string;
  body: string;
  bullets: string[];
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
  whatWeHandle?: WhatWeHandleItem[];
  whySection?: { title: string; body: string };
};

export const marketplaces: Record<string, Marketplace> = {
  amazon: {
    name: "Amazon",
    slug: "amazon",
    color: "#FF9900",
    heroHeadline: "Amazon marketplace operations, ",
    heroEm: "run by specialists.",
    description:
      "The world's most competitive marketplace demands more than a good product. Ranking in search, winning the Buy Box, and keeping your account healthy requires disciplined, daily execution. We provide the specialist team to deliver that — every day.",
    services: [
      {
        title: "Listing creation & optimisation",
        body: "Keyword-rich titles, bullet points, descriptions, and backend search terms — structured for Seller Central compliance and A9 visibility.",
      },
      {
        title: "A+ Content & EBC",
        body: "Enhanced Brand Content and A+ Content creation. Brand story, comparison charts, and lifestyle imagery layout.",
      },
      {
        title: "Buy Box strategy",
        body: "Buy Box monitoring, repricing rule setup, and competitor analysis to protect and win the Buy Box.",
      },
      {
        title: "Suppressed & stranded listing recovery",
        body: "We identify, diagnose, and fix suppressed, stranded, and inactive listings — across any category.",
      },
      {
        title: "FBA shipment management",
        body: "Shipment plan creation, label generation, inventory reconciliation, and lost inventory claims.",
      },
      {
        title: "Account health monitoring",
        body: "Daily account health checks, policy violation responses, and performance metric management.",
      },
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
      // { n: "500+", l: "Amazon stores managed" },
      { n: "15yrs", l: "Seller Central experience" },
      { n: "A9", l: "Algorithm specialists" },
    ],
    also: ["eBay", "Walmart", "Etsy", "BestBuy"],
    whatWeHandle: [
      {
        title: "Listing creation & optimisation",
        body: "Every listing we write is built for both the A9 ranking algorithm and the buyer reading it. We research real buyer search behaviour, analyse competitor listings, and write titles, bullets, and descriptions that rank and convert.",
        bullets: [
          "Keyword-rich titles aligned to real buyer search intent — not guesswork",
          "Benefit-led bullet points that answer buying objections before they form",
          "Product descriptions written for conversion, not just compliance",
          "Backend search term optimisation — all 250 bytes used correctly",
          "A+ Content and Enhanced Brand Content creation",
          "Parent-child variation setup and management",
        ],
      },
      {
        title: "Buy Box strategy",
        body: "The Buy Box drives the overwhelming majority of Amazon sales. Getting there — and staying there — requires the right combination of price, fulfilment method, seller metrics, and inventory levels. We monitor and manage all of these.",
        bullets: [
          "Buy Box eligibility monitoring and improvement",
          "Competitor pricing benchmarking and repricing strategy",
          "Seller metric management — ODR, late dispatch, cancellation rates",
          "FBA vs FBM analysis and recommendation",
        ],
      },
      {
        title: "Amazon operations",
        body: "The operational work that keeps your account healthy and your listings live — handled by a team that works inside Seller Central every day.",
        bullets: [
          "Flat file and bulk upload management",
          "Suppressed and stranded listing identification and resolution",
          "FBA shipment planning and reconciliation",
          "Account health monitoring and case management",
          "Brand Registry setup and violation management",
          "Sponsored Products campaign setup and reporting support",
          "Negative feedback and review management",
          "Competitor analysis and keyword gap reporting",
        ],
      },
      {
        title: "AI-assisted content",
        body: "For high-volume catalogs where manual listing creation isn't practical, we use AI writing tools to generate first-draft content — then apply specialist review, fact-checking, and brand-voice editing before any output goes near your live account.",
        bullets: [],
      },
    ],
    whySection: {
      title: "Why Amazon specialist knowledge matters",
      body: "Amazon's A9 algorithm, Seller Central policies, and account health rules change constantly. A team that works across multiple platforms and calls themselves Amazon specialists often isn't — they're generalists who occasionally work on Amazon. Our team works in Seller Central every single day. When policies change, we already know. When your account flags, we catch it before it becomes a suspension.",
    },
  },

  ebay: {
    name: "eBay",
    slug: "ebay",
    color: "#E53238",
    heroHeadline: "eBay marketplace operations, ",
    heroEm: "optimised for Cassini.",
    description:
      "eBay rewards sellers who keep their listings fresh, their prices sharp, and their customers satisfied. We do the work behind that consistency — Cassini-optimised listings, sharp pricing, clean store structure, and support that keeps your feedback scores high.",
    services: [
      {
        title: "Listing creation & optimisation",
        body: "Cassini-optimised titles, item specifics, descriptions, and category selection — structured for maximum search visibility.",
      },
      {
        title: "Item Specifics structuring",
        body: "Complete and accurate Item Specifics mapped to eBay's category requirements — critical for Cassini ranking and filter visibility.",
      },
      {
        title: "Store design & management",
        body: "eBay store setup, category organisation, promotional banners, and ongoing store maintenance.",
      },
      {
        title: "Promoted Listings management",
        body: "Promoted Listings Standard and Advanced setup, bid management, and campaign performance monitoring.",
      },
      {
        title: "Seller performance monitoring",
        body: "Defect rate tracking, late shipment monitoring, and case resolution to protect your Top Rated Seller status.",
      },
      {
        title: "Bulk listing & revisions",
        body: "High-volume listing creation and bulk revisions using File Exchange and Seller Hub.",
      },
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
      // { n: "500+", l: "eBay stores managed" },
      { n: "15yrs", l: "eBay operations experience" },
      { n: "Cassini", l: "Algorithm specialists" },
    ],
    also: ["Amazon", "Walmart", "Etsy", "Newegg"],
    whatWeHandle: [
      {
        title: "Listing creation & optimisation",
        body: "eBay's Cassini search engine rewards listings that are complete, specific, and match buyer search queries precisely. We write listings that satisfy Cassini's ranking criteria while remaining readable and compelling to the buyer.",
        bullets: [
          "Title optimisation for Cassini — 80-character titles with primary keywords front-loaded",
          "Item Specifics completion — every relevant field filled to maximise search visibility",
          "Description writing for both desktop and mobile display",
          "Category selection and subcategory mapping for accurate placement",
          "Condition descriptions and defect disclosure handled correctly",
          "Listing format selection — auction vs fixed price — based on product and strategy",
        ],
      },
      {
        title: "Store structure & management",
        body: "A well-structured eBay Store drives repeat purchases, improves search visibility, and builds buyer confidence. We design and maintain yours.",
        bullets: [
          "eBay Store category design and hierarchy management",
          "Store header and branding setup",
          "Promoted Listings campaign setup and performance management",
          "Markdown Manager and promotional pricing management",
          "Best Offer and automated offer rule configuration",
        ],
      },
      {
        title: "Operations & performance",
        body: "Seller performance metrics — and keeping them healthy — is what separates stable, visible sellers from those who lose their Top Rated status overnight.",
        bullets: [
          "Seller performance dashboard monitoring",
          "Late dispatch prevention and order processing management",
          "Returns handling and buyer dispute resolution",
          "Negative feedback removal request management",
          "Competitor price monitoring and repricing",
          "Bulk listing tools and flat file management",
          "Customer query handling and message management",
        ],
      },
    ],
    whySection: {
      title: "Why eBay specialist knowledge matters",
      body: "Cassini is not Google, and it's not A9. It rewards different signals — completeness of Item Specifics, listing freshness, seller performance metrics, and competitive pricing within a category. Getting this right requires platform-specific knowledge that generalist BPOs simply don't have. We've been optimising for Cassini since before most agencies knew what it was.",
    },
  },

  walmart: {
    name: "Walmart",
    slug: "walmart",
    color: "#0071CE",
    heroHeadline: "Walmart marketplace operations, ",
    heroEm: "content score optimised.",
    description:
      "Walmart Marketplace is one of the fastest-growing e-commerce platforms in the US — and one of the most demanding when it comes to content quality standards. Meeting Walmart's data requirements, maintaining a competitive Content Score, and winning the Buy Box requires consistent, specialist execution.",
    services: [
      {
        title: "Walmart Seller Center setup",
        body: "Account setup, onboarding, item setup, and category configuration for new Walmart marketplace sellers.",
      },
      {
        title: "Listing creation & optimisation",
        body: "Walmart-compliant titles, descriptions, attributes, and content score optimisation for maximum visibility.",
      },
      {
        title: "Content score optimisation",
        body: "We systematically improve your Walmart content scores — images, descriptions, attributes, and rich media.",
      },
      {
        title: "Order & fulfilment management",
        body: "Order processing, fulfilment coordination, tracking updates, and Walmart fulfilment compliance.",
      },
      {
        title: "Performance monitoring",
        body: "Seller scorecard monitoring, policy compliance, and performance metric management to protect your account.",
      },
      {
        title: "Bulk listing management",
        body: "High-volume item setup via Walmart's bulk upload templates and spec sheet completion.",
      },
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
      { n: "Seller Center ", l: "Specialists review" },
      // { n: "Content Score ", l: "Optimisation" },

    ],
    also: ["Amazon", "eBay", "BestBuy", "Newegg"],
    whatWeHandle: [
      {
        title: "Seller setup & onboarding",
        body: "Getting started on Walmart Marketplace correctly saves significant time and frustration later. We handle the setup process end to end.",
        bullets: [
          "Seller Center account setup and configuration",
          "Tax and payment information setup",
          "Shipping template and fulfilment method configuration",
          "Category approval support for restricted categories",
        ],
      },
      {
        title: "Listing creation & content score optimisation",
        body: "Walmart's Content Score system ranks your listings on completeness and quality — directly affecting search visibility. We build listings that score well from day one.",
        bullets: [
          "Product listing creation with titles, descriptions, and key features",
          "Attribute mapping to Walmart's category-specific taxonomy",
          "Content Score monitoring and improvement across your catalog",
          "Rich media content — enhanced product descriptions and image sets",
          "Variant and parent-child relationship setup",
          "Bulk upload management via Seller Center and flat files",
        ],
      },
      {
        title: "Buy Box & performance",
        body: "Walmart's Buy Box algorithm weighs price, fulfilment speed, and seller performance. We monitor and manage all three.",
        bullets: [
          "Buy Box strategy and competitive pricing analysis",
          "Order and fulfilment management",
          "Performance dashboard monitoring — on-time delivery, cancellation rate, return rate",
          "Walmart Fulfillment Services (WFS) support",
          "Walmart Connect advertising setup and management support",
        ],
      },
    ],
    whySection: {
      title: "Why Walmart specialist knowledge matters",
      body: "Walmart's content standards are stricter than Amazon's in several categories — incorrect data gets listings suppressed automatically, and appealing suppressions through Seller Center is slow and frustrating without knowing the right process. Our team works in Seller Center regularly and understands where listings fail and how to fix them fast.",
    },
  },

  etsy: {
    name: "Etsy",
    slug: "etsy",
    color: "#F56400",
    heroHeadline: "Etsy marketplace operations, ",
    heroEm: "done right.",
    description:
      "Etsy is a discovery-driven marketplace where great presentation, precise keywords, and consistent shop management determine whether buyers find you — or your competitor. We handle the operational work behind a high-performing Etsy shop so you can focus on making.",
    services: [
      {
        title: "Listing creation & optimisation",
        body: "SEO-optimised titles, tags, descriptions, and attributes — structured around how Etsy's search algorithm surfaces results.",
      },
      {
        title: "Tag & attribute structuring",
        body: "All 13 tags used strategically. Attributes, materials, and occasion fields completed for maximum filter visibility.",
      },
      {
        title: "Shop management",
        body: "Shop sections, announcement copy, policies, and About page — maintained and updated as your shop evolves.",
      },
      {
        title: "Order processing",
        body: "Order acknowledgements, fulfilment coordination, tracking updates, and customer communication.",
      },
      {
        title: "Customer support",
        body: "Buyer messages, review responses, and dispute handling — in your brand voice, on an agreed SLA.",
      },
      {
        title: "Image processing",
        body: "Etsy-compliant image sets — main image, lifestyle shots, and detail images resized and formatted to platform specs.",
      },
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
      { n: "Etsy SEO", l: "Algorithm specialists" },
      // { n: "99.1%", l: "Listing accuracy" },
      { n: "15yrs", l: "Marketplace experience" },
      { n: "Shop", l: "Full Management" },

    ],
    also: ["Amazon", "eBay", "Poshmark", "Houzz"],
    whatWeHandle: [
      {
        title: "Listing creation & SEO optimisation",
        body: "Etsy's search algorithm rewards listings with precise titles, complete tags, and descriptions that match how buyers actually search. We research your niche, identify the terms buyers use, and build every listing to rank.",
        bullets: [
          "Title optimisation — front-loading primary keywords in Etsy's 140-character title field",
          "Tag research and selection — all 13 tags used, matched to real buyer search queries",
          "Description writing — informative, brand-consistent, and keyword-aware",
          "Attribute completion — material, colour, occasion, style, and all relevant fields",
          "Shipping profile setup and management",
          "Pricing research using sold listing data and competitor analysis",
        ],
      },
      {
        title: "Shop structure & management",
        body: "A well-organised Etsy shop builds trust and repeat custom. We manage the structure and ongoing maintenance so your shop stays in good shape.",
        bullets: [
          "Shop section creation and category organisation",
          "Shop policies setup — returns, exchanges, shipping, and custom orders",
          "About section and maker story copywriting",
          "Shop banner and branding asset setup",
          "Seasonal listing updates and promotional campaigns",
          "Sale events and Etsy Ads basic management",
        ],
      },
      {
        title: "Customer communication",
        body: "Etsy buyers expect prompt, personal responses. We handle your message queue in your brand voice — keeping response times down and review scores up.",
        bullets: [
          "Buyer message handling and enquiry responses",
          "Review follow-up and feedback management",
          "Custom order enquiry management",
          "Dispute and return request handling",
        ],
      },
    ],
    whySection: {
      title: "Why Etsy specialist knowledge matters",
      body: "Etsy is unlike any other marketplace — it combines search engine optimisation with social signals, community engagement, and buyer psychology that's unique to its platform. Sellers who treat it like Amazon or eBay consistently underperform. Our team understands the Etsy algorithm, the importance of tags over descriptions, and how recency and engagement affect ranking in ways that aren't obvious from the outside.",
    },
  },

  bestbuy: {
    name: "BestBuy",
    slug: "bestbuy",
    color: "#003087",
    heroHeadline: "BestBuy marketplace listings, ",
    heroEm: "spec-perfect and compliant.",
    description:
      "BestBuy Marketplace reaches millions of tech-savvy buyers who research purchases carefully before committing. Meeting BestBuy's strict content standards, maintaining accurate specifications, and presenting products professionally are what separate visible, converting listings from suppressed ones.",
    services: [
      {
        title: "Product listing creation",
        body: "BestBuy-compliant product titles, descriptions, and feature bullets structured to meet marketplace content standards.",
      },
      {
        title: "Technical spec structuring",
        body: "Complete technical specifications mapped to BestBuy's attribute schema — every field filled, every unit formatted correctly.",
      },
      {
        title: "Image compliance",
        body: "Product images resized, formatted, and reviewed against BestBuy's image guidelines — main shots, angles, and detail views.",
      },
      {
        title: "Category & attribute mapping",
        body: "Products correctly categorised within BestBuy's taxonomy with all required and optional attributes populated.",
      },
      {
        title: "Content quality management",
        body: "Ongoing content audits, data accuracy checks, and updates as BestBuy's content requirements evolve.",
      },
      {
        title: "New product onboarding",
        body: "End-to-end new product setup — from data collection and spec sheet creation to final submission and go-live.",
      },
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
      { n: "BestBuy ", l: "Vendor portal specialists" },
      { n: "500+", l: "Brands supported" },
      // { n: "15yrs", l: "Operations experience" },
      { n: "Tech", l: "Category expertise" },

    ],
    also: ["Amazon", "Walmart", "Newegg", "eBay"],
    whatWeHandle: [
      {
        title: "Seller onboarding & setup",
        body: "BestBuy's vendor onboarding process is more structured than most marketplaces. We manage it cleanly so you're live without delays.",
        bullets: [
          "Seller account setup via BestBuy's vendor portal",
          "Product category approval support",
          "Tax and payment configuration",
          "Shipping and fulfilment template setup",
          "Initial catalog submission and compliance checks",
        ],
      },
      {
        title: "Listing creation & content compliance",
        body: "BestBuy applies strict content quality standards — particularly for technical products. Listings that don't meet specification requirements get suppressed automatically. We build listings that pass first time.",
        bullets: [
          "Product title creation following BestBuy's category-specific format rules",
          "Feature bullet writing — clear, specification-accurate, and benefit-led",
          "Long description writing for tech and electronics categories",
          "Attribute mapping to BestBuy's taxonomy — model numbers, specs, compatibility",
          "Image specification compliance — dimensions, format, background standards",
          "Variant and bundle listing setup",
        ],
      },
      {
        title: "Ongoing operations",
        body: "Keeping your BestBuy listings live, competitive, and performing requires regular attention.",
        bullets: [
          "Pricing strategy and competitor monitoring",
          "Content compliance monitoring and error resolution",
          "Order management and fulfilment tracking",
          "Customer question handling",
          "Performance reporting and account health monitoring",
        ],
      },
    ],
    whySection: {
      title: "Why BestBuy specialist knowledge matters",
      body: "BestBuy's buyers are research-led — they compare specifications across brands before purchasing, and they trust BestBuy's platform to give them accurate information. A listing with missing specs, incorrect attributes, or non-compliant images loses the sale to a competitor who got the details right. We know BestBuy's data requirements by category and build listings that hold up to buyer scrutiny.",
    },
  },

  newegg: {
    name: "Newegg",
    slug: "newegg",
    color: "#FF6600",
    heroHeadline: "Newegg marketplace listings, ",
    heroEm: "built for tech buyers.",
    description:
      "Newegg's buyers are among the most technically literate shoppers online — they read spec sheets, compare components, and won't buy from a listing that's vague or incomplete. We write Newegg listings that hold up to expert scrutiny and rank well for the specific technical queries your buyers use.",
    services: [
      {
        title: "Tech product listing creation",
        body: "Newegg-optimised titles, descriptions, and feature bullets written for technically informed buyers.",
      },
      {
        title: "Spec sheet structuring",
        body: "Complete technical specifications mapped to Newegg's attribute schema — processor details, memory, dimensions, compatibility, and all category-specific fields.",
      },
      {
        title: "Category & sub-category mapping",
        body: "Products placed in the correct Newegg category with all required and recommended attributes populated for search visibility.",
      },
      {
        title: "Image preparation",
        body: "Product images formatted and reviewed against Newegg's image requirements — primary shots, lifestyle, and detail views.",
      },
      {
        title: "Seller account management",
        body: "Newegg Seller Portal management, promotional setup, and seller performance monitoring.",
      },
      {
        title: "Bulk catalog management",
        body: "High-volume listing creation and updates via Newegg's data feed and bulk upload tools.",
      },
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
      { n: "Newegg", l: "Tech category specialists" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Tech catalog experience" },
    ],
    also: ["Amazon", "BestBuy", "Walmart", "eBay"],
    whatWeHandle: [
      {
        title: "Seller setup & storefront",
        body: "Getting your Newegg storefront configured correctly from the start avoids the listing errors that cost new sellers time and visibility.",
        bullets: [
          "Seller account setup and storefront configuration",
          "Newegg Marketplace and SBN (Shipped by Newegg) setup",
          "Category configuration and approval support",
          "Shipping template and return policy setup",
        ],
      },
      {
        title: "Listing creation & specification management",
        body: "Newegg listings live and die by their technical accuracy. We research specs, cross-reference manufacturer data, and build listings that give tech buyers everything they need to make a confident decision.",
        bullets: [
          "Product title creation following Newegg's category title rules",
          "Technical specification tables — accurate, complete, and manufacturer-verified",
          "Bullet point writing for components, peripherals, and consumer electronics",
          "Long description writing for specification-heavy products",
          "Item specifics and attribute mapping to Newegg's category taxonomy",
          "Compatibility information — system requirements, interface standards, fits/works with",
          "Bundle and combo listing creation",
          "Image processing and compliance with Newegg image standards",
        ],
      },
      {
        title: "Pricing & promotions",
        body: "Newegg buyers are price-sensitive and respond strongly to promotions. We manage your pricing strategy and promotional tools.",
        bullets: [
          "Competitor price monitoring and repricing",
          "Newegg Flash deal submission and management",
          "Promotional pricing and volume discount setup",
          "EggXpert review programme participation management",
        ],
      },
    ],
    whySection: {
      title: "Why Newegg specialist knowledge matters",
      body: "A laptop listing on Newegg that's missing RAM upgrade slots, maximum supported storage, or operating system compatibility will be passed over by informed buyers — even if the price is right. Our team understands what Newegg buyers look for by category and writes listings that answer the questions tech buyers ask before everyone else does.",
    },
  },

  houzz: {
    name: "Houzz",
    slug: "houzz",
    color: "#7AC143",
    heroHeadline: "Houzz marketplace listings, ",
    heroEm: "styled for home buyers.",
    description:
      "Houzz attracts a highly engaged audience of homeowners, interior designers, and renovation professionals — buyers who are planning purchases carefully and spending significantly. Presenting your products beautifully and accurately on Houzz is what turns browsers into buyers.",
    services: [
      {
        title: "Product listing creation",
        body: "Houzz-compliant titles, descriptions, and feature highlights written for home décor and furniture buyers.",
      },
      {
        title: "Room-scene & lifestyle imagery",
        body: "Image sets prepared to Houzz's standards — product shots, room-scene integration, and dimension reference images.",
      },
      {
        title: "Attribute & dimension structuring",
        body: "All product dimensions, materials, finishes, and style attributes completed accurately for Houzz's filter and search system.",
      },
      {
        title: "Category & style mapping",
        body: "Products correctly categorised within Houzz's home décor taxonomy with style and room tags applied.",
      },
      {
        title: "Seller account management",
        body: "Houzz Pro account management, promotional setup, and performance monitoring.",
      },
      {
        title: "Bulk catalog management",
        body: "High-volume listing creation and updates for large furniture and home décor catalogs.",
      },
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
      { n: "Design-Led", l: "Listing approach" },
      { n: "500+", l: "Brands supported" },
      { n: "15yrs", l: "Home décor catalog experience" },
    ],
    also: ["Etsy", "Amazon", "Poshmark", "eBay"],
    whatWeHandle: [
      {
        title: "Seller setup & storefront",
        body: "Houzz's Pro seller environment has its own setup requirements and storefront customisation options. We configure yours to present well to design-conscious buyers.",
        bullets: [
          "Houzz Pro storefront setup and configuration",
          "Business profile and brand story setup",
          "Shipping and return policy configuration",
          "Product category setup and approval",
        ],
      },
      {
        title: "Listing creation & visual presentation",
        body: "Houzz buyers make decisions based on how products look in context — lifestyle images, room settings, and material/finish details matter more here than on any other marketplace. We write listings and prepare assets that meet that standard.",
        bullets: [
          "Product title creation following Houzz category conventions",
          "Description writing for design-conscious buyers — material, finish, dimension, style",
          "Attribute and specification mapping to Houzz taxonomy — style, colour, material, dimensions",
          "Room type and design style tagging for discovery",
          "Image editing and compliance with Houzz visual standards",
          "Lifestyle and room-setting image brief preparation",
          "Ideabook integration support — making your products pinnable and discoverable",
        ],
      },
      {
        title: "Ongoing management",
        body: "Keeping your Houzz shop active, accurate, and responsive to enquiries sustains visibility and buyer trust.",
        bullets: [
          "Pricing strategy and competitive analysis within home furnishings categories",
          "Product information updates — seasonal collections, discontinued items, new launches",
          "Customer enquiry handling and specification questions",
          "Review and recommendation management",
          "Order and fulfilment tracking",
        ],
      },
    ],
    whySection: {
      title: "Why Houzz specialist knowledge matters",
      body: "Houzz buyers are among the most deliberate shoppers in e-commerce. They save products to Ideabooks, return weeks later, and make considered purchases. A listing that's missing dimensions, material specifications, or room context images loses the sale to a competitor who provided them. We understand what Houzz buyers need to see before they buy and build listings that deliver it.",
    },
  },

  rakuten: {
    name: "Rakuten",
    slug: "rakuten",
    color: "#BF0000",
    heroHeadline: "Rakuten marketplace listings, ",
    heroEm: "localised and compliant.",
    description:
      "Rakuten is unique among marketplaces — it gives sellers genuine storefront customisation, a loyalty-driven buyer base, and a platform that actively supports merchant success. Getting the most from Rakuten means understanding its distinct ecosystem, Merchant Quality Score, and the role of Super Points in driving repeat purchases.",
    services: [
      {
        title: "Product listing creation",
        body: "Rakuten-compliant product titles, descriptions, and attributes structured to meet marketplace content requirements.",
      },
      {
        title: "Content localisation",
        body: "Product content adapted for Rakuten's audience — tone, terminology, and formatting aligned to marketplace expectations.",
      },
      {
        title: "Attribute & category mapping",
        body: "Products correctly categorised within Rakuten's taxonomy with all required attributes populated for search and filter visibility.",
      },
      {
        title: "Image compliance",
        body: "Product images reviewed and formatted to Rakuten's image specifications — main shots, additional angles, and lifestyle images.",
      },
      {
        title: "Seller account management",
        body: "Rakuten seller account management, promotional setup, and performance monitoring.",
      },
      {
        title: "Bulk catalog management",
        body: "High-volume listing creation and updates via Rakuten's data feed and catalog management tools.",
      },
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
      // { n: "Brand-forward", l: "Storefront approach" },

    ],
    also: ["Amazon", "eBay", "Walmart", "Etsy"],
    whatWeHandle: [
      {
        title: "Seller setup & storefront customisation",
        body: "Unlike most marketplaces, Rakuten lets sellers build a genuinely branded storefront. We set yours up to make the most of that opportunity.",
        bullets: [
          "Seller account setup and storefront configuration",
          "Storefront design and branding — banner, logo, brand story",
          "Shop category and navigation structure",
          "Shipping and return policy setup",
          "Rakuten Super Points configuration and promotional setup",
        ],
      },
      {
        title: "Listing creation & optimisation",
        body: "Rakuten's buyer base is loyal and brand-aware. Listings that communicate quality, brand identity, and complete product information perform best.",
        bullets: [
          "Product listing creation — titles, descriptions, and key feature copy",
          "Keyword research for Rakuten's internal search algorithm",
          "Attribute mapping and specification completion",
          "Product description writing for Rakuten's brand-forward buyer base",
          "Image processing and storefront visual asset setup",
          "Variant and bundle listing management",
        ],
      },
      {
        title: "Performance & promotions",
        body: "Rakuten's Merchant Quality Score directly affects your search ranking and visibility. We monitor and improve it actively.",
        bullets: [
          "Merchant Quality Score (MQS) monitoring and improvement plan",
          "Rakuten Coupons setup and promotional campaign management",
          "Super Points campaign strategy and execution",
          "Competitor pricing research and repricing",
          "Customer support — message handling, returns, dispute management",
          "Order management and fulfilment tracking",
        ],
      },
    ],
    whySection: {
      title: "Why Rakuten specialist knowledge matters",
      body: "Rakuten operates very differently from Amazon and eBay. Its MQS scoring system, Super Points mechanic, and brand-first culture reward sellers who understand the platform's philosophy. Sellers who import their Amazon approach directly to Rakuten consistently underperform. Our team understands how Rakuten's loyalty ecosystem works and how to use it to drive repeat purchases and higher average order values.",
    },
  },

  poshmark: {
    name: "Poshmark",
    slug: "poshmark",
    color: "#C9235B",
    heroHeadline: "Poshmark marketplace listings, ",
    heroEm: "styled to sell.",
    description:
      "Poshmark is a social marketplace with 80 million users and an algorithm that rewards engagement, sharing cadence, and listing quality in equal measure. Growing a high-performing Poshmark closet requires consistent daily activity, optimised listings, and an understanding of the platform's community-driven mechanics — all of which we handle for you.",
    services: [
      {
        title: "Listing creation & optimisation",
        body: "Poshmark-optimised titles, descriptions, and brand/category tags — structured to surface in search and attract the right buyers.",
      },
      {
        title: "Closet management",
        body: "Ongoing closet organisation, re-listing, sharing strategy, and follower engagement to keep your listings visible.",
      },
      {
        title: "Photography guidance",
        body: "Image requirements and styling guidelines so your product photos meet Poshmark's standards and drive conversions.",
      },
      {
        title: "Attribute & sizing structuring",
        body: "Brand, size, colour, condition, and category fields completed accurately for maximum filter and search visibility.",
      },
      {
        title: "Offer & pricing management",
        body: "Offer to Likers setup, bundle discount configuration, and price drop management.",
      },
      {
        title: "Bulk listing management",
        body: "High-volume listing creation and updates for large fashion and apparel catalogs.",
      },
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
      // { n: "Social-first", l: "Algorithm expertise" },

    ],
    also: ["Etsy", "eBay", "Amazon", "Houzz"],
    whatWeHandle: [
      {
        title: "Closet setup & brand profile",
        body: "A well-presented Poshmark closet builds buyer confidence and encourages follows — which directly feeds the algorithm. We set yours up to make a strong first impression.",
        bullets: [
          "Closet profile setup — bio, profile photo, branding consistency",
          "Closet policies — returns, bundling, and negotiation stance",
          "About section copywriting in your brand voice",
          "Existing listing audit and quality assessment",
        ],
      },
      {
        title: "Listing creation & SEO optimisation",
        body: "Poshmark's search algorithm uses title keywords and description content to match listings to buyer searches. We research what your buyers look for and build every listing to rank.",
        bullets: [
          "Listing title creation — brand, item name, colour, size, and relevant keywords in 80 characters",
          "Description writing — detailed, keyword-rich, and conversational for Poshmark's social feel",
          "Category and subcategory selection for accurate search placement",
          "Size, colour, condition, and attribute completion",
          "Hashtag strategy — relevant tags that extend listing reach",
          "Product photography editing to Poshmark's visual standards",
        ],
      },
      {
        title: "Algorithm management & growth",
        body: "Poshmark's algorithm is activity-driven — sharing cadence, engagement with other users, and listing freshness all directly affect visibility. We manage this ongoing activity so your closet stays visible.",
        bullets: [
          "Daily sharing schedule — your listings shared to followers and party feeds",
          "Offers to Likers — automated and manual offer management",
          "Bundle discount structuring and promotion",
          "Poshmark Posh Party participation and strategy",
          "Follow and engagement activity to grow your follower base",
          "Listing refresh and relisting strategy for stagnant items",
        ],
      },
      {
        title: "Customer communication",
        body: "",
        bullets: [
          "Buyer message handling — enquiries, sizing questions, bundle requests",
          "Offer negotiation management within your pricing parameters",
          "Returns and dispute handling",
        ],
      },
    ],
    whySection: {
      title: "Why Poshmark specialist knowledge matters",
      body: "Poshmark is unlike any other marketplace we manage. Its social mechanics — sharing, parties, offers, and follower feeds — mean that listing quality alone is not enough. A listing that isn't being shared regularly disappears from visibility regardless of how well it's written. Managing Poshmark effectively requires consistent daily activity that most sellers simply don't have time to sustain. We do — on your behalf, every day.",
    },
  },
};

export const marketplaceSlugs = Object.keys(marketplaces);
