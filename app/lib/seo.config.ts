// app/lib/seo.config.ts

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

export const defaultSeo: SeoConfig = {
  title: "HostingSol - Enterprise Hosting & IT Infrastructure Solutions",
  description: "Reliable VPS Hosting, Dedicated Servers, Managed Services, Colocation, and IT Rental solutions for businesses of every size. 24/7 expert support with 99.99% uptime guarantee.",
  keywords: "hosting, VPS hosting, dedicated servers, managed services, colocation, IT rental, cloud hosting, web hosting, India hosting, enterprise hosting",
  openGraph: {
    title: "HostingSol - Enterprise Hosting & IT Infrastructure Solutions",
    description: "Reliable VPS Hosting, Dedicated Servers, Managed Services, Colocation, and IT Rental solutions for businesses of every size.",
    image: "/images/og-image.jpg",
    url: "https://hostingsol.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HostingSol - Enterprise Hosting & IT Infrastructure Solutions",
    description: "Reliable VPS Hosting, Dedicated Servers, Managed Services, Colocation, and IT Rental solutions.",
    image: "/images/og-image.jpg",
  },
};

export const pageSeo: Record<string, SeoConfig> = {
  home: {
    title: "High Performance Cloud & VPS Servers - HostingSol",
    description: "Get domains, web hosting, VPS, dedicated servers, and IT infrastructure solutions. Build your website with ease and scale effortlessly with HostingSol.",
    keywords: "cloud hosting, VPS hosting, web hosting, dedicated servers, IT solutions, hosting India",
    canonical: "https://hostingsol.in",
  },
  about: {
    title: "About HostingSol - Enterprise Hosting & IT Infrastructure Company",
    description: "Learn about HostingSol - a leading provider of VPS hosting, dedicated servers, managed services, colocation, and IT rental solutions for businesses.",
    keywords: "about hosting company, enterprise hosting, IT infrastructure, hosting solutions India",
    canonical: "https://hostingsol.in/about",
  },
  contact: {
    title: "Contact HostingSol - Get Expert Hosting & IT Solutions",
    description: "Contact HostingSol for VPS hosting, dedicated servers, managed services, colocation, and IT rental solutions. Our experts are ready to help your business grow.",
    keywords: "contact hosting, hosting support, IT solutions contact, VPS hosting contact, dedicated server inquiry",
    canonical: "https://hostingsol.in/contact",
  },
  vps: {
    title: "VPS Hosting Plans - Scalable Virtual Private Servers - HostingSol",
    description: "Enterprise-grade VPS hosting with dedicated vCPU, RAM, NVMe SSD storage, and 99.99% uptime. Choose from flexible plans for startups to enterprises.",
    keywords: "VPS hosting, virtual private server, VPS India, managed VPS, cloud VPS, scalable hosting",
    canonical: "https://hostingsol.in/vps",
  },
  dedicated: {
    title: "Dedicated Server Hosting - Enterprise Hardware - HostingSol",
    description: "High-performance dedicated servers with enterprise hardware, full root access, DDoS protection, and 99.99% uptime. Perfect for mission-critical applications.",
    keywords: "dedicated server, dedicated hosting India, enterprise server, bare metal server, dedicated hosting plans",
    canonical: "https://hostingsol.in/dedicated",
  },
  "it-rental": {
    title: "IT Rental Services - Flexible Hardware Solutions - HostingSol",
    description: "Rent enterprise laptops, desktops, workstations, servers, and networking equipment. Flexible daily, monthly, or yearly rental plans with full support.",
    keywords: "IT rental, hardware rental, laptop rental, desktop rental, server rental, IT equipment leasing, business IT rental",
    canonical: "https://hostingsol.in/it-rental",
  },
  "managed-services": {
    title: "Managed Services - Proactive IT Infrastructure Management",
    description: "24/7 proactive monitoring, server administration, security management, backups, and expert support for your IT infrastructure. Focus on your business while we manage your technology.",
    keywords: "managed services, IT management, server monitoring, security management, backup solutions, IT support",
    canonical: "https://hostingsol.in/managed-services",
  },
  colocation: {
    title: "Colocation Services - Enterprise Data Center Solutions",
    description: "Secure Tier III/IV data center colocation with redundant power, cooling, premium connectivity, and 24/7 remote hands support. Host your servers in enterprise facilities.",
    keywords: "colocation, data center colocation, server colocation, rack space, colocation India, enterprise data center",
    canonical: "https://hostingsol.in/colocation",
  },
};