import type { MetadataRoute } from "next";

const BASE = "https://professionalits.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },

    // Main pages
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/platforms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/results`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },

    // Services pages
    { url: `${BASE}/services/product-data-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/bulk-product-uploads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/attribute-filter-structuring`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/image-processing-enrichment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/order-inventory-support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Solutions pages
    { url: `${BASE}/solutions/catalog-product-data`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/marketplace-operations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/ecommerce-backoffice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/product-data-cleanup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/high-sku-scaling`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Marketplace pages
    { url: `${BASE}/marketplaces/amazon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/ebay`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/walmart`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/etsy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/bestbuy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/newegg`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/houzz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/rakuten`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketplaces/poshmark`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Platform pages
    { url: `${BASE}/platforms/shopify`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/platforms/bigcommerce`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/platforms/woocommerce`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/platforms/magento`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/platforms/opencart`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/platforms/volusion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
