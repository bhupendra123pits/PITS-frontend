export type ServiceItem = {
  title: string;
  body: string;
};

export type ServiceStat = {
  n: string;
  l: string;
};

export type Service = {
  name: string;
  slug: string;
  tagline: string;
  heroHeadline: string;
  heroEm: string;
  description: string;
  whyItMatters: string;
  items: ServiceItem[];
  includes: string[];
  stats: ServiceStat[];
  platforms: string[];
  relatedServices: string[];
};

export const services: Record<string, Service> = {
  "product-data-management": {
    name: "Product Data Management",
    slug: "product-data-management",
    tagline: "End-to-end management of your product information.",
    heroHeadline: "Product data management, ",
    heroEm: "end to end.",
    description:
      "End-to-end management of your product information — from ingesting supplier data to maintaining live platform records. Includes field mapping, data transformation, and quality assurance at every stage.",
    whyItMatters:
      "Inconsistent, incomplete, or poorly structured product data silently costs you sales. Poor data breaks search filters, confuses buyers, and creates operational bottlenecks that compound over time. We manage the full data lifecycle so your catalog stays clean, accurate, and live.",
    items: [
      { title: "Supplier data ingestion", body: "We accept product data in any format — CSV, XLSX, XML, EDI, PDF datasheets — and transform it into platform-ready records." },
      { title: "Field mapping", body: "Your supplier fields mapped to platform taxonomy. Every attribute, every category, every variant relationship — correctly structured." },
      { title: "Data transformation", body: "Unit conversion, value standardisation, formatting normalisation — raw supplier data transformed into consistent, compliant records." },
      { title: "Quality assurance", body: "Every record checked against platform requirements before upload. Error rates tracked and reported weekly." },
      { title: "Live record maintenance", body: "Ongoing updates to live platform records — price changes, stock updates, description edits, new variants." },
      { title: "Reporting & audits", body: "Regular data health reports showing completeness scores, error rates, and recommendations." },
    ],
    includes: [
      "Supplier data ingestion in any format",
      "Field mapping to platform taxonomy",
      "Data transformation and normalisation",
      "Pre-upload quality assurance",
      "Live platform record maintenance",
      "Weekly data health reporting",
      "Error detection and correction",
      "Ongoing catalog governance",
    ],
    stats: [
      { n: "99.1%", l: "Data accuracy rate" },
      { n: "500K+", l: "Records managed" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "15yrs", l: "Operations experience" },
    ],
    platforms: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "OpenCart", "Volusion"],
    relatedServices: ["bulk-product-uploads", "attribute-filter-structuring", "image-processing-enrichment"],
  },

  "bulk-product-uploads": {
    name: "Bulk Product Uploads",
    slug: "bulk-product-uploads",
    tagline: "High-volume uploads to any platform — fast and accurate.",
    heroHeadline: "Bulk product uploads, ",
    heroEm: "done at scale.",
    description:
      "High-volume product uploads to any major platform using flat files, APIs, or direct platform tools. We manage template preparation, validation, submission, and error correction.",
    whyItMatters:
      "Manual product uploads don't scale. When you have hundreds or thousands of SKUs to get live — across one platform or several — you need a process that's fast, accurate, and repeatable. We've built that process over 15 years.",
    items: [
      { title: "Template preparation", body: "Platform-specific upload templates prepared and populated with your product data. Amazon flat files, Shopify CSVs, eBay File Exchange — all handled." },
      { title: "Pre-submission validation", body: "Every file validated before submission. Required fields checked, character limits respected, prohibited content removed." },
      { title: "Multi-platform submission", body: "Simultaneous uploads across multiple platforms from a single source feed. One data input, multiple platform outputs." },
      { title: "Error correction", body: "Post-upload error reports reviewed and corrected. Suppressed listings diagnosed and fixed. Nothing left unresolved." },
      { title: "Variant & relationship setup", body: "Parent-child relationships, variation themes, and bundle configurations set up correctly for each platform." },
      { title: "Post-upload verification", body: "Every listing checked live after upload. Images showing, prices correct, variants selectable — verified before handoff." },
    ],
    includes: [
      "Platform-specific template preparation",
      "Pre-submission file validation",
      "Bulk upload via flat file or API",
      "Variant and parent-child setup",
      "Post-upload error correction",
      "Live listing verification",
      "Multi-platform simultaneous upload",
      "Upload progress and completion reporting",
    ],
    stats: [
      { n: "500+", l: "SKUs per day" },
      { n: "99.1%", l: "First-pass accuracy" },
      { n: "48hr", l: "Standard turnaround" },
      { n: "8", l: "Platforms supported" },
    ],
    platforms: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "OpenCart", "Volusion"],
    relatedServices: ["product-data-management", "attribute-filter-structuring", "image-processing-enrichment"],
  },

  "attribute-filter-structuring": {
    name: "Attribute & Filter Structuring",
    slug: "attribute-filter-structuring",
    tagline: "Structured attributes for search visibility and filter accuracy.",
    heroHeadline: "Attributes structured for ",
    heroEm: "maximum discoverability.",
    description:
      "Standardising and structuring product attributes for platform compliance, search filter accuracy, and buyer discoverability. Particularly critical for technical, industrial, and multi-variant product categories.",
    whyItMatters:
      "Buyers use filters to find products. If your attributes are wrong, incomplete, or non-standard — your products don't appear in filtered results. In technical and industrial categories, this is the single biggest driver of invisible inventory.",
    items: [
      { title: "Platform taxonomy mapping", body: "Your product attributes mapped to the correct platform taxonomy — Amazon Browse Node, eBay Item Specifics, Shopify tags, BigCommerce facets." },
      { title: "Filter-ready structuring", body: "Attributes structured so your products appear in every relevant filter result. Size, colour, material, spec — all standardised." },
      { title: "Technical specification tables", body: "For industrial, electrical, and technical products — full spec table population. Voltage, dimensions, certifications, compatibility." },
      { title: "Multi-variant attribute setup", body: "Colour/size matrices, option groups, and variation attributes correctly structured so buyers can select and compare." },
      { title: "Attribute standardisation", body: "Mixed units, inconsistent values, and non-standard terms normalised across your full catalog." },
      { title: "Compliance checking", body: "Attributes checked against platform requirements and category-specific rules before upload." },
    ],
    includes: [
      "Platform taxonomy mapping",
      "Filter-ready attribute structuring",
      "Technical specification table population",
      "Multi-variant attribute setup",
      "Value standardisation and normalisation",
      "Platform compliance checking",
      "Amazon Browse Node optimisation",
      "eBay Item Specifics completion",
    ],
    stats: [
      { n: "99.1%", l: "Attribute accuracy" },
      { n: "3x", l: "Filter visibility lift" },
      { n: "500K+", l: "Attributes structured" },
      { n: "15yrs", l: "Platform experience" },
    ],
    platforms: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "OpenCart", "Volusion"],
    relatedServices: ["product-data-management", "bulk-product-uploads", "image-processing-enrichment"],
  },

  "image-processing-enrichment": {
    name: "Image Processing & Enrichment",
    slug: "image-processing-enrichment",
    tagline: "Marketplace-compliant images, processed at scale.",
    heroHeadline: "Product images processed ",
    heroEm: "to platform spec.",
    description:
      "Background removal, resizing, format conversion, infographic creation, and compliance with marketplace image requirements. Available as a standalone service or integrated with listing work.",
    whyItMatters:
      "Images are the first thing buyers see and the most common reason listings get suppressed. Every marketplace has specific requirements — white backgrounds, minimum pixel counts, no overlaid text. Non-compliant images get listings rejected or hidden. We handle every requirement for every platform.",
    items: [
      { title: "Background removal", body: "Clean white or transparent backgrounds produced at scale. Compliant with Amazon, Walmart, and other marketplace requirements." },
      { title: "Resizing & format conversion", body: "Images resized to platform spec — minimum dimensions, maximum file size, correct format (JPEG, PNG, WebP)." },
      { title: "Infographic creation", body: "Feature callout images, dimension diagrams, and comparison charts. Communicates product benefits where text can't." },
      { title: "Lifestyle image sourcing", body: "We work with your existing assets to create lifestyle compositions or source appropriate stock imagery." },
      { title: "Compliance checking", body: "Every image checked against platform image requirements before upload. No surprises after submission." },
      { title: "Bulk processing", body: "Hundreds or thousands of images processed in a single batch. Consistent output quality across every SKU." },
    ],
    includes: [
      "Background removal to white or transparent",
      "Resizing to platform specifications",
      "Format conversion (JPEG, PNG, WebP)",
      "Infographic and callout image creation",
      "Platform compliance checking",
      "Bulk batch processing",
      "Image set organisation per SKU",
      "Delivery in upload-ready format",
    ],
    stats: [
      { n: "500+", l: "Images per day" },
      { n: "99%", l: "Compliance rate" },
      { n: "8", l: "Platforms supported" },
      { n: "48hr", l: "Standard turnaround" },
    ],
    platforms: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "OpenCart", "Volusion"],
    relatedServices: ["product-data-management", "bulk-product-uploads", "attribute-filter-structuring"],
  },

  "order-inventory-support": {
    name: "Order & Inventory Support",
    slug: "order-inventory-support",
    tagline: "Order processing and inventory management — on an SLA.",
    heroHeadline: "Order and inventory operations, ",
    heroEm: "fully managed.",
    description:
      "Order processing, fulfilment tracking, inventory level monitoring, and reorder point management across your sales platforms. Delivered as a managed service with agreed SLAs.",
    whyItMatters:
      "Order errors and stockouts cost you money and reviews. As order volume grows, manual management breaks down — late shipments, missed reorder points, unsynchronised inventory across channels. We take over the operational layer so nothing falls through the cracks.",
    items: [
      { title: "Order processing", body: "Orders received, verified, routed to fulfilment, and tracked through to delivery — across all your sales channels." },
      { title: "Fulfilment tracking", body: "Every order tracked from dispatch to delivery. Exceptions flagged and handled before they become customer complaints." },
      { title: "Inventory monitoring", body: "Stock levels monitored across all platforms. Low-stock alerts triggered at your agreed reorder points." },
      { title: "Reorder management", body: "Reorder point management and purchase order initiation. We flag when to reorder so you never run out." },
      { title: "Returns processing", body: "Returns received, inspected, restocked or written off according to your policy. Refunds initiated and tracked." },
      { title: "Cross-channel sync", body: "Inventory levels kept in sync across Amazon, Shopify, eBay, and other channels — preventing overselling." },
    ],
    includes: [
      "Order processing across all channels",
      "Fulfilment coordination and tracking",
      "Inventory level monitoring",
      "Reorder point alerts and management",
      "Returns and refund processing",
      "Cross-channel inventory synchronisation",
      "Weekly operational SLA report",
      "Dedicated account contact",
    ],
    stats: [
      { n: "4hr", l: "Response SLA" },
      { n: "98%", l: "On-time processing" },
      { n: "500+", l: "Stores managed" },
      { n: "15yrs", l: "Operations experience" },
    ],
    platforms: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "OpenCart", "Volusion"],
    relatedServices: ["product-data-management", "bulk-product-uploads", "attribute-filter-structuring"],
  },
};

export const serviceSlugs = Object.keys(services);
