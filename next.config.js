/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,

   experimental: {
    cpus: 1,
    workerThreads: false,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // WordPress leftover URLs (your immediate fix)
      { source: '/author/:slug*', destination: '/', permanent: true },
      { source: '/category/:slug*', destination: '/', permanent: true },
      { source: '/tag/:slug*', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },

      // Catalog Processing pages
      { source: '/Catalog_Processing/Product_Data_Management.html', destination: '/services/product-data-management', permanent: true },
      { source: '/Catalog_Processing/Product_Data_Enrichment.html', destination: '/solutions/product-data-cleanup', permanent: true },
      { source: '/Catalog_Processing/Product_Description_Writing.html', destination: '/services/product-data-management', permanent: true },
      { source: '/Catalog_Processing/Product_Images_Production_Editing.html', destination: '/services/image-processing-enrichment', permanent: true },
      { source: '/Catalog_Processing/SKU_Content_Production_Service.html', destination: '/services/product-data-management', permanent: true },

      // Amazon pages
      { source: '/Amazon/Amazon_Product_Listing_Services.html', destination: '/marketplaces/amazon', permanent: true },
      { source: '/Amazon/Amazon_Customer_Support_Services.html', destination: '/marketplaces/amazon', permanent: true },
      { source: '/Amazon/Amazon_Negative_Feedback_Removal_Services.html', destination: '/marketplaces/amazon', permanent: true },
      { source: '/Amazon/Amazon_Products_Image_processing_Services.html', destination: '/marketplaces/amazon', permanent: true },
      { source: '/amazon/product-data-entry-services', destination: '/marketplaces/amazon', permanent: true },

      // eBay pages
      { source: '/eBay/Product_data_entry_Services.html', destination: '/marketplaces/ebay', permanent: true },

      // Data Entry pages
      { source: '/Data_Entry_Services/Copy_Paste_Data_Entry.html', destination: '/services/product-data-management', permanent: true },
      { source: '/Data_Entry_Services/Image_Data_Entry.html', destination: '/services/image-processing-enrichment', permanent: true },
      { source: '/data-entry-services/online-and-offline-data-entry', destination: '/services/product-data-management', permanent: true },

      // Back-office pages
      { source: '/back-office-services/competitor-price-monitoring', destination: '/solutions/marketplace-operations', permanent: true },

      // Hub pages
      { source: '/Services_solutions.html', destination: '/services', permanent: true },

      // Old terms page URL
      { source: '/terms-conditions', destination: '/terms', permanent: true },

      // Blog redirect from old website
      { source: '/our-blogs', destination: '/blog', permanent: true },
      { source: '/our-blogs/:path*', destination: '/blog', permanent: true },

      // Catch-all wildcards for old folders
      { source: '/Catalog_Processing/:path*', destination: '/services', permanent: true },
      { source: '/Amazon/:path*', destination: '/marketplaces/amazon', permanent: true },
      { source: '/eBay/:path*', destination: '/marketplaces/ebay', permanent: true },
      { source: '/Data_Entry_Services/:path*', destination: '/services/product-data-management', permanent: true },
      { source: '/data-entry-services/:path*', destination: '/services/product-data-management', permanent: true },
      { source: '/back-office-services/:path*', destination: '/solutions', permanent: true },

      { source: '/:path*',  // Relative path, no need for "https://www"
        has: [
          {
            type: 'host',
            value: 'www.professionalits.com',  // Match "www" version of the site
          },
        ],
        destination: 'https://professionalits.com/:path*',  // Destination should include full URL
        permanent: true, // 301 Permanent Redirect
      },
    ]
  },
}

module.exports = nextConfig