/* eslint-disable @next/next/no-img-element */
import { SiShopify, SiBigcommerce, SiEtsy, SiHouzz, SiRakuten } from "react-icons/si";
import type { JSX } from "react";

export type BrandItem = {
  name: string;
  slug: string;
  href: string;
  Icon: () => JSX.Element;
};

export const platformBrands: BrandItem[] = [
  {
    name: "Shopify",
    slug: "shopify",
    href: "/platforms/shopify",
    Icon: () => <SiShopify size={24} color="#96BF48" />,
  },
  {
    name: "BigCommerce",
    slug: "bigcommerce",
    href: "/platforms/bigcommerce",
    Icon: () => <SiBigcommerce size={24} color="#003087" />,
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    href: "/platforms/woocommerce",
    Icon: () => (
      <img src="/woologo.png" alt="WooCommerce" width={32} height={32} style={{ objectFit: "contain" }} />
    ),
  },
  {
    name: "Magento",
    slug: "magento",
    href: "/platforms/magento",
    Icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" fill="#EE672F" />
        <path d="M12 2v20" stroke="#fff" strokeWidth="1.5" />
        <path d="M7.5 5L12 7.5 16.5 5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7.5 5v9l4.5 2.5V9.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 5v9L12 16.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "OpenCart",
    slug: "opencart",
    href: "/platforms/opencart",
    Icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3h2.2l2.8 10.5h9.5l2-7.5H6.5" stroke="#23ACDF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.5" fill="#23ACDF" />
        <circle cx="16.5" cy="20" r="1.5" fill="#23ACDF" />
      </svg>
    ),
  },
  {
    name: "Volusion",
    slug: "volusion",
    href: "/platforms/volusion",
    Icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#1E2D5B" />
        <text x="4" y="17" fontSize="14" fontWeight="800" fill="#4DB8FF" fontFamily="Arial, sans-serif">V</text>
      </svg>
    ),
  },
];

export const marketplaceBrands: BrandItem[] = [
  {
    name: "Amazon",
    slug: "amazon",
    href: "/marketplaces/amazon",
    Icon: () => (
      <img src="/Amazonlogo.png" alt="Amazon" width={32} height={32} style={{ objectFit: "contain" }} />
    ),
  },
  {
    name: "eBay",
    slug: "ebay",
    href: "/marketplaces/ebay",
    Icon: () => (
      <img src="/edited_ebay_logo.png" alt="eBay" width={32} height={32} style={{ objectFit: "contain" }} />
    ),
  },
  {
    name: "Walmart",
    slug: "walmart",
    href: "/marketplaces/walmart",
    Icon: () => (
      <img src="/wallmartlogo.png" alt="Walmart" width={32} height={32} style={{ objectFit: "contain" }} />
    ),
  },
  {
    name: "Etsy",
    slug: "etsy",
    href: "/marketplaces/etsy",
    Icon: () => <SiEtsy size={24} color="#F1641E" />,
  },
  {
    name: "BestBuy",
    slug: "bestbuy",
    href: "/marketplaces/bestbuy",
    Icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="2" fill="#FFE000" />
        <text x="2" y="16" fontSize="8.5" fontWeight="800" fill="#0046BE" fontFamily="Arial, sans-serif">BBY</text>
      </svg>
    ),
  },
  {
    name: "Newegg",
    slug: "newegg",
    href: "/marketplaces/newegg",
    Icon: () => (
      <img src="/Newegg_logo.png" alt="Newegg" width={32} height={32} style={{ objectFit: "contain" }} />
    ),
  },
  {
    name: "Houzz",
    slug: "houzz",
    href: "/marketplaces/houzz",
    Icon: () => <SiHouzz size={24} color="#73BA42" />,
  },
  {
    name: "Rakuten",
    slug: "rakuten",
    href: "/marketplaces/rakuten",
    Icon: () => <SiRakuten size={24} color="#BF0000" />,
  },
  {
    name: "Poshmark",
    slug: "poshmark",
    href: "/marketplaces/poshmark",
    Icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF2A5E" />
        <text x="5" y="17" fontSize="14" fontWeight="800" fill="#FFFFFF" fontFamily="Arial, sans-serif">P</text>
      </svg>
    ),
  },
];
