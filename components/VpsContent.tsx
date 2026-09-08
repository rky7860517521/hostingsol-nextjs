// components/VpsContent.tsx
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from 'react';


export default function VPSHosting() {
 const [activeAccordion, setActiveAccordion] = useState(0);
  
  return (
    <>
      <Navbar />
    <div className="vps-hosting-page">
      {/* Page Header Start */}
      <div className="page-header p-5"></div>
      {/* Page Header End */}

      <section className="pb-5 pt-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Hero Content Start */}
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="section-title dark-section mb-2">
                  <h1>VPS Hosting</h1>
                  <p className="mb-4">
                    <strong>Scalable • Secure • High Performance</strong>
                  </p>
                  <p>
                    Experience enterprise-grade VPS Hosting designed for businesses, developers, and growing applications
                    that require high performance, flexibility, and reliability. Powered by premium virtualization
                    technology, dedicated virtual resources, ultra-fast NVMe SSD storage, and high-speed networking, our
                    Virtual Private Servers deliver the perfect balance of performance, security, and scalability.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Dedicated vCPU & RAM</h3>
                        <p>Guaranteed virtual resources.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">99.99% Uptime SLA</h3>
                        <p>Reliable enterprise infrastructure.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Full Root Access</h3>
                        <p>Complete server control.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Instant Scalability</h3>
                        <p>Upgrade resources anytime.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    Configure VPS
                  </a>
                  <a href="contact.php" className="btn-default btn-highlighted">
                    Talk To Sales
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Image Start */}
            <div className="col-lg-5">
              <div className="hero-image">
                <div className="hero-img">
                  <figure className="image-anime">
                    <Image
                      src="/images/dedicated-image.avif"
                      alt="VPS Hosting"
                      width={500}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="customer-experience-box">
                  <div
                    className="customer-experience-content"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    <h3 style={{ color: "var(--secondary-color)" }}>
                      Starting From
                    </h3>
                    <del style={{ display: "block", marginBottom: "10px" }}>
                      ₹999 / Month
                    </del>
                    <h2
                      style={{
                        color: "var(--secondary-color)",
                        fontSize: "48px",
                      }}
                    >
                      ₹499
                    </h2>
                    <p
                      style={{
                        color: "var(--secondary-color)",
                        marginTop: "10px",
                      }}
                    >
                      Per Month
                    </p>
                  </div>

                  <div className="hero-btn mt-4">
                    <a href="#pricing" className="btn-default bg-white">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </section>

      {/* Pricing Section Start */}
      <div className="our-pricing v2-pricing" id="pricing">
        <div className="container-fluid px-lg-5">
          {/* Section Title */}
          <div className="row section-row mb-3">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>VPS Hosting Plans Built for Every Business</h2>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Starter */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Starter</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹499<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Order Now
                </a>
                <div className="pricing-renew">VPS Hosting</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 2 vCPU Cores
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 4GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 80GB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 1TB Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Full Root Access
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> DDoS Protection
                  </li>
                </ul>
              </div>
            </div>

            {/* Business */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card popular-plan">
                <div className="popular-tag">MOST POPULAR</div>
                <div className="pricing-card-header">
                  <h3>Business</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn active-btn">
                  Order Now
                </a>
                <div className="pricing-renew">VPS Hosting</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 4 vCPU Cores
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 8GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 160GB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 3TB Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Full Root Access
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Free Snapshots
                  </li>
                </ul>
              </div>
            </div>

            {/* Performance */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Performance</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹1,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Order Now
                </a>
                <div className="pricing-renew">VPS Hosting</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 8 vCPU Cores
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 16GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 320GB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 5TB Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Instant Scaling
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Priority Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Enterprise</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹3,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Contact Sales
                </a>
                <div className="pricing-renew">VPS Hosting</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 16 vCPU Cores
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 32GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 640GB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 10TB Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> HA Infrastructure
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Premium Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section End */}

      {/* Operating Systems Section */}
      <section className="hs-os-section" style={{ background: "none" }}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anime-style-3">
              Choose Your Preferred Operating System
            </h2>
            <p>
              Deploy your VPS instantly with the operating system that best
              suits your applications, development environment, and workloads.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { name: "Debian", icon: "/images/os/debian.svg" },
              { name: "Ubuntu", icon: "/images/os/ubuntu.svg" },
              { name: "AlmaLinux", icon: "/images/os/almalinux.svg" },
              { name: "Fedora", icon: "/images/os/fedora.svg" },
              { name: "Rocky Linux", icon: "/images/os/rockylinux.svg" },
              { name: "Windows Server", icon: "/images/os/windows.svg" },
              { name: "CentOS", icon: "/images/os/centos.svg" },
              { name: "Arch Linux", icon: "/images/os/arch.svg" },
            ].map((os, index) => (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <div className="hs-os-item text-center p-4">
                  <Image
                    src={os.icon}
                    alt={os.name}
                    width={60}
                    height={60}
                    className="mb-3"
                  />
                  <h4>{os.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VPS Features */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2
              style={{ color: "var(--secondary-color)" }}
              className="text-anime-style-3"
            >
              VPS Features
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Powerful Virtual Private Servers for Every Workload
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-server",
                title: "Enterprise Infrastructure",
                desc: "Hosted on enterprise-grade servers with high availability, premium networking, and reliable uptime.",
              },
              {
                icon: "fa-shield-halved",
                title: "Advanced Security",
                desc: "Firewall protection, DDoS mitigation, network isolation, and secure virtualization for every VPS.",
              },
              { icon: "fa-microchip", title: "Dedicated vCPU", desc: "" },
              { icon: "fa-memory", title: "Guaranteed RAM", desc: "" },
              { icon: "fa-database", title: "NVMe SSD Storage", desc: "" },
              { icon: "fa-terminal", title: "Root Access", desc: "" },
              { icon: "fa-network-wired", title: "High-Speed Network", desc: "" },
              { icon: "fa-arrow-trend-up", title: "Easy Scaling", desc: "" },
              {
                icon: "fa-bolt",
                title: "Instant Provisioning",
                desc: "",
              },
              { icon: "fa-clock", title: "Automatic Backups", desc: "" },
              { icon: "fa-globe", title: "Global Locations", desc: "" },
              { icon: "fa-headset", title: "24/7 Support", desc: "" },
              { icon: "fa-sliders", title: "Flexible Resources", desc: "" },
              { icon: "fa-comments", title: "Live Chat Support", desc: "" },
            ].map((feature, index) => {
              const isLarge = index < 2;
              return (
                <div
                  className={`${isLarge ? "col-lg-6" : "col-lg-3"} col-md-6`}
                  key={index}
                >
                  <div className="enterprise-card text-center p-4">
                    <div className="feature-icon">
                      <i className={`fas ${feature.icon}`}></i>
                    </div>
                    <h5>{feature.title}</h5>
                    {feature.desc && <p>{feature.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Control Panels Section */}
      <section className="control-panels py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="text-white mt-4">
              Choose Your Preferred VPS Control Panel
            </h2>
            <p
              className="text-white-50 mx-auto"
              style={{ maxWidth: "850px" }}
            >
              Manage your VPS with industry-leading Linux and Windows control
              panels. Easily configure websites, databases, email accounts, DNS,
              SSL certificates, backups, and server resources from an intuitive
              interface.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: "cPanel",
                icon: "/images/panellogo/cpanel.svg",
                desc: "Industry-leading Linux hosting control panel.",
              },
              {
                name: "Plesk",
                icon: "/images/panellogo/plesk.svg",
                desc: "Manage Linux and Windows VPS from one dashboard.",
              },
              {
                name: "DirectAdmin",
                icon: "/images/panellogo/directadmin.svg",
                desc: "Lightweight, fast, and secure VPS management.",
              },
              {
                name: "ISPmanager",
                icon: "/images/panellogo/ispmanager.svg",
                desc: "Professional hosting and VPS administration.",
              },
              {
                name: "aaPanel",
                icon: "/images/panellogo/aapanel.svg",
                desc: "One-click application deployment and management.",
              },
              {
                name: "BrainyCP",
                icon: "/images/panellogo/brainycp.svg",
                desc: "AI-powered VPS optimization and administration.",
              },
              {
                name: "HestiaCP",
                icon: "/images/panellogo/hestia.svg",
                desc: "Open-source control panel focused on simplicity.",
              },
              {
                name: "Webmin",
                icon: "/images/panellogo/webmin.svg",
                desc: "Powerful web-based Unix and Linux administration.",
              },
            ].map((panel, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="panel-card text-center p-4">
                  <Image
                    src={panel.icon}
                    alt={panel.name}
                    width={60}
                    height={60}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>{panel.name}</h5>
                  <p>{panel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2
              style={{ color: "var(--secondary-color)" }}
              className="text-anime-style-3"
            >
              Use Cases
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              VPS Hosting for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-globe",
                title: "Business Websites",
                desc: "Host fast, secure, and scalable business websites with dedicated virtual resources and excellent uptime.",
              },
              {
                icon: "fa-code",
                title: "Development & Testing",
                desc: "Create isolated development, staging, and testing environments with complete root access and flexibility.",
              },
              {
                icon: "fa-cart-shopping",
                title: "E-Commerce",
                desc: "Power online stores with fast page loading, secure transactions, and reliable performance.",
              },
              {
                icon: "fa-cloud",
                title: "SaaS Applications",
                desc: "Deploy scalable SaaS platforms with complete server control and easy resource upgrades.",
              },
              {
                icon: "fa-database",
                title: "Database Hosting",
                desc: "Host MySQL, PostgreSQL, MariaDB, MongoDB, and other databases with NVMe performance.",
              },
              {
                icon: "fa-server",
                title: "Web Hosting",
                desc: "Host multiple websites and applications on an isolated VPS environment with full control.",
              },
              {
                icon: "fa-gamepad",
                title: "Gaming Servers",
                desc: "Deploy lightweight multiplayer game servers with low latency and consistent performance.",
              },
              {
                icon: "fa-envelope",
                title: "Mail Servers",
                desc: "Run secure business email servers with complete administrative control and custom configurations.",
              },
              {
                icon: "fa-lock",
                title: "VPN Hosting",
                desc: "Deploy secure VPN servers for private networking, remote access, and encrypted communications.",
              },
              {
                icon: "fa-terminal",
                title: "Application Hosting",
                desc: "Host Node.js, PHP, Python, Java, and other applications with dedicated virtual resources.",
              },
              {
                icon: "fa-robot",
                title: "AI & Automation",
                desc: "Deploy lightweight AI services, automation tools, bots, and inference workloads efficiently.",
              },
              {
                icon: "fa-photo-film",
                title: "Media Hosting",
                desc: "Store and deliver images, videos, audio, and digital assets with reliable VPS performance.",
              },
              {
                icon: "fa-code-branch",
                title: "CI/CD Pipelines",
                desc: "Automate software builds, deployments, and testing with dedicated virtual environments.",
              },
              {
                icon: "fa-chart-line",
                title: "Business Apps",
                desc: "Run CRM, ERP, accounting software, analytics, and internal business applications securely.",
              },
            ].map((useCase, index) => {
              const isLarge = index < 2;
              return (
                <div
                  className={`${isLarge ? "col-lg-6" : "col-lg-3"} col-md-6`}
                  key={index}
                >
                  <div className="enterprise-card text-center p-4">
                    <div className="feature-icon">
                      <i className={`fas ${useCase.icon}`}></i>
                    </div>
                    <h5>{useCase.title}</h5>
                    <p>{useCase.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose HostingSol */}
      <div className="intro-video parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h2 data-cursor="-opaque">
                  Why Businesses Choose HostingSol VPS Hosting
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  {
                    icon: "fa-server",
                    title: "High-Performance Infrastructure",
                    desc: "Enterprise-grade virtualization powered by premium hardware with ultra-fast NVMe SSD storage and reliable performance.",
                  },
                  {
                    icon: "fa-microchip",
                    title: "Dedicated Virtual Resources",
                    desc: "Enjoy guaranteed vCPU, RAM, and storage resources without the limitations of traditional shared hosting.",
                  },
                  {
                    icon: "fa-laptop-code",
                    title: "Multiple Operating Systems",
                    desc: "Choose from Ubuntu, Debian, AlmaLinux, Rocky Linux, Windows Server, CentOS, Fedora, and more.",
                  },
                  {
                    icon: "fa-terminal",
                    title: "Full Root Access",
                    desc: "Complete administrative control to install software, configure services, and customize your VPS environment.",
                  },
                  {
                    icon: "fa-arrow-trend-up",
                    title: "Instant Scalability",
                    desc: "Upgrade CPU, RAM, storage, and bandwidth as your applications grow without migrating to new hardware.",
                  },
                  {
                    icon: "fa-headset",
                    title: "24/7 Expert Support",
                    desc: "Our VPS specialists are available around the clock to assist with provisioning, networking, and server management.",
                  },
                ].map((item, index) => (
                  <div className="why-box" key={index}>
                    <div className="why-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="page-about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-images">
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <Image
                      loading="lazy"
                      src="/images/about-img-1.webp"
                      alt="About Us"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <Image
                      loading="lazy"
                      src="/images/about-img-2.webp"
                      alt="About Us"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h2
                    className="text-anime-style-3"
                    data-cursor="-opaque"
                  >
                    High-performance VPS hosting built for speed and flexibility
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol delivers enterprise-grade Virtual Private Server
                    (VPS) hosting designed for businesses, developers, and
                    growing applications that require dedicated virtual
                    resources, enhanced security, and complete administrative
                    control. Whether you're hosting websites, databases,
                    business applications, or development environments, our VPS
                    solutions provide the performance, scalability, and
                    reliability your workloads demand.
                  </p>
                </div>

                <div
                  className="about-service-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-1.svg"
                        alt="Guaranteed Resources"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Guaranteed virtual resources</h3>
                      <p>
                        Dedicated vCPU, RAM, and NVMe SSD storage ensure
                        reliable performance without the limitations of shared
                        hosting.
                      </p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-2.svg"
                        alt="Scalable Platform"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Scalable and reliable platform</h3>
                      <p>
                        Easily upgrade CPU, memory, storage, and bandwidth as
                        your business grows, backed by enterprise infrastructure
                        and 24/7 support.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="about-us-btn wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <a href="contact.php" className="btn-default">
                    Get VPS Hosting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="our-core-features bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="core-features-image-box wow fadeInUp">
                <div className="core-features-image">
                  <figure className="image-anime">
                    <Image
                      loading="lazy"
                      src="/images/about-img-1.webp"
                      alt="VPS Hosting Benefits"
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="core-features-content">
                <div className="section-title mt-lg-0 mt-4">
                  <h2
                    className="text-anime-style-2"
                    style={{ color: "var(--secondary-color)" }}
                    data-cursor="-opaque"
                  >
                    Additional Benefits with Every VPS Hosting Plan
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--secondary-color)" }}
                    data-wow-delay="0.2s"
                  >
                    Every HostingSol VPS includes enterprise-grade
                    infrastructure, flexible scalability, enhanced security, and
                    expert support to help you deploy applications with
                    confidence while maintaining excellent performance and
                    reliability.
                  </p>
                </div>

                <div
                  className="features-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {[
                    {
                      icon: "icon-feature-1.svg",
                      title: "Free DDoS Protection",
                      desc: "Keep your VPS protected with advanced DDoS mitigation and continuous network security.",
                    },
                    {
                      icon: "icon-feature-2.svg",
                      title: "Instant Resource Scaling",
                      desc: "Upgrade CPU, RAM, storage, and bandwidth in minutes as your business grows.",
                    },
                    {
                      icon: "icon-feature-3.svg",
                      title: "Full Root Access",
                      desc: "Install custom software, configure services, and manage your VPS with complete administrative control.",
                    },
                    {
                      icon: "icon-feature-4.svg",
                      title: "24/7 Expert Support",
                      desc: "Our VPS specialists are available around the clock to assist with setup, optimization, and technical issues.",
                    },
                  ].map((item, index) => (
                    <div className="features-item" key={index}>
                      <div className="icon-box">
                        <Image
                          loading="lazy"
                          src={`/images/${item.icon}`}
                          alt={item.title}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="features-item-content">
                        <h3 style={{ color: "var(--secondary-color)" }}>
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--secondary-color)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hs-os-item:hover img {
          transform: scale(1.08);
          filter: none;
        }
        .page-about-us{
            color:#fff;
        }
        .our-pricing {
          background: #ffffff;
        }

        .pricing-card {
          position: relative;
          background: #f9fcff;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 35px;
          height: 100%;
          overflow: visible;
          transition: all 0.4s ease;
          z-index: 1;
        }

        .pricing-card::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 0;
          border-radius: 22px;
          background: var(--secondary-color);
          transition: all 0.4s ease;
          z-index: -1;
        }

        .pricing-card:hover {
          border-color: var(--secondary-color);
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(21, 22, 104, 0.18);
        }

        .pricing-card:hover::before {
          top: 0;
          height: 100%;
        }

        .pricing-card .pricing-card-header h3,
        .pricing-card .main-price,
        .pricing-card .pricing-renew,
        .pricing-card .pricing-features li,
        .pricing-card .pricing-price small {
          color: var(--secondary-color);
          transition: 0.3s;
        }

        .pricing-card:hover .pricing-card-header h3,
        .pricing-card:hover .main-price,
        .pricing-card:hover .pricing-renew,
        .pricing-card:hover .pricing-features li,
        .pricing-card:hover .pricing-price small {
          color: #fff;
        }

        .pricing-features li i {
          color: #1abc6c;
          transition: 0.3s;
        }

        .pricing-card:hover .pricing-features li i {
          color: #fff;
        }

        .pricing-btn {
          background: #fff;
          color: var(--secondary-color);
          border: 2px solid var(--secondary-color);
          transition: 0.3s;
        }

        .pricing-card:hover .pricing-btn {
          background: #fff;
          color: var(--secondary-color);
          border-color: #fff;
        }

        .pricing-card:hover .pricing-btn:hover {
          background: #eef4ff;
        }

        .popular-plan {
          border: 2px solid var(--secondary-color);
        }

        .popular-tag {
          background: var(--secondary-color);
          color: #fff;
        }

        .enterprise-features {
          background: #f8fbff;
        }

        .enterprise-card {
          position: relative;
          background: #fff;
          border: 1px solid #e7edf8;
          border-radius: 18px;
          padding: 28px 22px;
          text-align: center;
          overflow: hidden;
          transition: 0.35s;
          height: 100%;
          z-index: 1;
        }

        .enterprise-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          height: 100%;
          background: var(--secondary-color);
          transition: 0.35s;
          z-index: -1;
        }

        .enterprise-card:hover::before {
          top: 0;
        }

        .enterprise-card:hover {
          transform: translateY(-8px);
          border-color: var(--secondary-color);
          box-shadow: 0 18px 40px rgba(21, 22, 104, 0.15);
        }

        .feature-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 18px;
          border-radius: 16px;
          background: #eef3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.35s;
        }

        .feature-icon i {
          font-size: 28px;
          color: var(--secondary-color);
          transition: 0.35s;
        }

        .enterprise-card h5 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--secondary-color);
          transition: 0.35s;
        }

        .enterprise-card p {
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          color: #6f7684;
          transition: 0.35s;
        }

        .enterprise-card:hover h5,
        .enterprise-card:hover p {
          color: #fff;
        }

        .enterprise-card:hover .feature-icon {
          background: rgba(255, 255, 255, 0.15);
        }

        .enterprise-card:hover .feature-icon i {
          color: #fff;
        }

        .control-panels {
          position: relative;
          overflow: hidden;
          background: var(--secondary-color);
        }

        .panel-card {
          position: relative;
          z-index: 2;
          height: 100%;
          text-align: center;
          padding: 32px 22px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          transition: 0.35s;
        }

        .panel-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
        }

        .panel-card h5 {
          color: #fff;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .panel-card p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 991px) {
          .enterprise-card {
            padding: 24px 18px;
          }
          .feature-icon {
            width: 58px;
            height: 58px;
          }
          .feature-icon i {
            font-size: 24px;
          }
          .enterprise-card h5 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>

    <Footer />
    </>
  );
}