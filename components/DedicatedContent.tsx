// components/DedicatedContents.tsx
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
// import { useState } from 'react';
import { useEffect, useRef } from "react";

export default function DedicatedHosting() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper if you're using it
    if (typeof window !== "undefined" && swiperRef.current) {
      // You'll need to import Swiper and initialize it here
      // Or use a Swiper component library
    }
  }, []);

  return (
      <>
      <Navbar />

    <div className="dedicated-hosting-page">
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
                  <h1>Dedicated Hosting</h1>
                  <p className="mb-4">
                    <strong>Power • Performance • Complete Control</strong>
                  </p>
                  <p>
                    Experience enterprise-grade dedicated servers engineered for businesses
                    that demand uncompromising performance, enhanced security, and complete
                    infrastructure control. Powered by enterprise hardware, premium networking,
                    and expert support to keep your mission-critical workloads online.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div className="trusted-solution-item m-0 bg-white p-3" style={{ borderRadius: "10px" }}>
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">100% Dedicated Resources</h3>
                        <p>No shared CPU, RAM or storage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="trusted-solution-item m-0 bg-white p-3" style={{ borderRadius: "10px" }}>
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">99.99% Uptime SLA</h3>
                        <p>Reliable enterprise connectivity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="trusted-solution-item m-0 bg-white p-3" style={{ borderRadius: "10px" }}>
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Full Root Access</h3>
                        <p>Complete administrative control.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="trusted-solution-item m-0 bg-white p-3" style={{ borderRadius: "10px" }}>
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Enterprise NVMe SSD</h3>
                        <p>Ultra-fast storage performance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    Configure Server
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
                      alt="Dedicated Hosting"
                      width={500}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="customer-experience-box">
                  <div className="customer-experience-content" style={{ color: "var(--secondary-color)" }}>
                    <h3 style={{ color: "var(--secondary-color)" }}>Starting From</h3>
                    <del style={{ display: "block", marginBottom: "10px" }}>
                      ₹14,000 / Month
                    </del>
                    <h2 style={{ color: "var(--secondary-color)", fontSize: "48px" }}>
                      ₹8,999
                    </h2>
                    <p style={{ color: "var(--secondary-color)", marginTop: "10px" }}>
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
                <h2>Dedicated Server Plans Built for Every Business</h2>
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
                  <div className="main-price">₹9,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Order Now
                </a>
                <div className="pricing-renew">Dedicated Server</div>
                <ul className="pricing-features">
                  <li><i className="fa-solid fa-check"></i> Intel Xeon E-2388G</li>
                  <li><i className="fa-solid fa-check"></i> 32GB ECC DDR4 RAM</li>
                  <li><i className="fa-solid fa-check"></i> 2 × 960GB NVMe SSD</li>
                  <li><i className="fa-solid fa-check"></i> 1Gbps Dedicated Port</li>
                  <li><i className="fa-solid fa-check"></i> Full Root Access</li>
                  <li><i className="fa-solid fa-check"></i> Free DDoS Protection</li>
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
                  <div className="main-price">₹15,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn active-btn">
                  Order Now
                </a>
                <div className="pricing-renew">Dedicated Server</div>
                <ul className="pricing-features">
                  <li><i className="fa-solid fa-check"></i> Intel Xeon Silver</li>
                  <li><i className="fa-solid fa-check"></i> 64GB ECC DDR4 RAM</li>
                  <li><i className="fa-solid fa-check"></i> 2 × 1.92TB NVMe SSD</li>
                  <li><i className="fa-solid fa-check"></i> 1Gbps Premium Network</li>
                  <li><i className="fa-solid fa-check"></i> Full Root Access</li>
                  <li><i className="fa-solid fa-check"></i> Advanced DDoS Protection</li>
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
                  <div className="main-price">₹24,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Order Now
                </a>
                <div className="pricing-renew">Dedicated Server</div>
                <ul className="pricing-features">
                  <li><i className="fa-solid fa-check"></i> Dual Intel Xeon Silver</li>
                  <li><i className="fa-solid fa-check"></i> 128GB ECC DDR4 RAM</li>
                  <li><i className="fa-solid fa-check"></i> 2 × 3.84TB NVMe SSD</li>
                  <li><i className="fa-solid fa-check"></i> 10Gbps Ready Network</li>
                  <li><i className="fa-solid fa-check"></i> Unlimited Reboots</li>
                  <li><i className="fa-solid fa-check"></i> Priority Technical Support</li>
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
                  <div className="main-price">₹39,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Contact Sales
                </a>
                <div className="pricing-renew">Dedicated Server</div>
                <ul className="pricing-features">
                  <li><i className="fa-solid fa-check"></i> Dual Intel Xeon Gold</li>
                  <li><i className="fa-solid fa-check"></i> 256GB ECC DDR4 RAM</li>
                  <li><i className="fa-solid fa-check"></i> 2 × 7.68TB NVMe SSD</li>
                  <li><i className="fa-solid fa-check"></i> 10Gbps Dedicated Port</li>
                  <li><i className="fa-solid fa-check"></i> Premium DDoS Protection</li>
                  <li><i className="fa-solid fa-check"></i> 24/7 Enterprise Support</li>
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
          <div className="section-title text-center text-light">
            <h2 className="text-anime-style-3">
              Choose Your Preferred Operating System
            </h2>
            <p>
              Deploy your dedicated server with the operating system that perfectly fits your applications and workloads.
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

      {/* Enterprise Features */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2 style={{ color: "var(--secondary-color)" }} className="text-anime-style-3">
              Enterprise Features
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Powerful Features for Ultimate Performance
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: "fa-microchip", title: "Tier IV Data Center", desc: "Enterprise-grade infrastructure with 99.995% uptime guarantee and premium networking." },
              { icon: "fa-shield-halved", title: "Enterprise Security", desc: "IPS, IDS, Firewall, Anti-DDoS, Malware Protection and VLAN Security." },
              { icon: "fa-microchip", title: "Dedicated CPU & RAM", desc: "" },
              { icon: "fa-database", title: "SSD / NVMe Storage", desc: "" },
              { icon: "fa-wifi", title: "Unmetered Bandwidth", desc: "" },
              { icon: "fa-sliders", title: "Hardware Control", desc: "" },
              { icon: "fa-network-wired", title: "Low Latency Network", desc: "" },
              { icon: "fa-arrow-trend-up", title: "Easy Upgrade", desc: "" },
              { icon: "fa-bolt", title: "Instant Deployment", desc: "" },
              { icon: "fa-clock", title: "Daily Backups", desc: "" },
              { icon: "fa-globe", title: "Global Datacenters", desc: "" },
              { icon: "fa-headset", title: "24/7 Support", desc: "" },
              { icon: "fa-user-tie", title: "Dedicated Manager", desc: "" },
              { icon: "fa-comments", title: "Live Chat Support", desc: "" },
            ].map((feature, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="enterprise-card text-center p-4">
                  <div className="feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h5>{feature.title}</h5>
                  {feature.desc && <p>{feature.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Panels Section */}
      <section className="control-panels py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="text-white mt-4">
              Choose Your Preferred Server Control Panel
            </h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: "850px" }}>
              Deploy your dedicated server with industry-leading Linux and Windows
              control panels for effortless website, email, DNS, SSL and server management.
            </p>
          </div>

          <div className="row g-4">
            {[
              { name: "cPanel", icon: "/images/panellogo/cpanel.svg", desc: "Industry-leading Linux hosting control panel." },
              { name: "Plesk", icon: "/images/panellogo/plesk.svg", desc: "Powerful Windows & Linux server management." },
              { name: "DirectAdmin", icon: "/images/panellogo/directadmin.svg", desc: "Fast, lightweight and secure control panel." },
              { name: "ISPmanager", icon: "/images/panellogo/ispmanager.svg", desc: "Professional hosting and server administration." },
              { name: "aaPanel", icon: "/images/panellogo/aapanel.svg", desc: "Simple one-click deployment & server management." },
              { name: "BrainyCP", icon: "/images/panellogo/brainycp.svg", desc: "AI-powered server management platform." },
              { name: "HestiaCP", icon: "/images/panellogo/hestia.svg", desc: "Open-source Linux hosting control panel." },
              { name: "Webmin", icon: "/images/panellogo/webmin.svg", desc: "Complete Unix & Linux administration interface." },
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
            <h2 style={{ color: "var(--secondary-color)" }} className="text-anime-style-3">
              Use Cases
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Dedicated Hosting for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: "fa-cart-shopping", title: "E-Commerce Websites", desc: "Deliver lightning-fast shopping experiences with dedicated resources, secure payment processing, and high availability for growing online stores." },
              { icon: "fa-building", title: "Enterprise Applications", desc: "Run ERP, CRM, HRMS, and mission-critical business applications on secure, high-performance dedicated infrastructure." },
              { icon: "fa-globe", title: "High Traffic Websites", desc: "Handle millions of visitors with enterprise-grade performance, scalability, and uptime." },
              { icon: "fa-cloud", title: "SaaS Platforms", desc: "Build and scale software platforms with dedicated resources and complete infrastructure control." },
              { icon: "fa-database", title: "Database Servers", desc: "Optimize MySQL, PostgreSQL, SQL Server, MongoDB, and other high-performance databases." },
              { icon: "fa-microchip", title: "AI & Machine Learning", desc: "Power AI training, inference, analytics, and data-intensive machine learning workloads." },
              { icon: "fa-video", title: "Video Streaming", desc: "Deliver HD and 4K video with premium bandwidth, minimal buffering, and reliable uptime." },
              { icon: "fa-gamepad", title: "Gaming Servers", desc: "Host multiplayer game servers with low latency, stable connectivity, and maximum performance." },
              { icon: "fa-building-columns", title: "Financial Services", desc: "Secure hosting for fintech platforms, banking applications, payment gateways, and compliance workloads." },
              { icon: "fa-code", title: "Development & Testing", desc: "Create isolated development, testing, staging, and CI/CD environments with full flexibility." },
              { icon: "fa-hard-drive", title: "Backup & Recovery", desc: "Protect mission-critical business data with secure backups and reliable disaster recovery infrastructure." },
              { icon: "fa-photo-film", title: "Media Hosting", desc: "Store, process, and distribute videos, images, audio, and digital assets at enterprise scale." },
              { icon: "fa-cubes", title: "Virtualization", desc: "Run multiple virtual machines efficiently with dedicated hardware and enterprise-grade virtualization support." },
              { icon: "fa-server", title: "Private Cloud", desc: "Build secure private cloud environments with complete control over your infrastructure and resources." },
            ].map((useCase, index) => {
              const isLarge = index < 2;
              return (
                <div className={`${isLarge ? "col-lg-6" : "col-lg-3"} col-md-6`} key={index}>
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
                  Why Businesses Choose HostingSol Dedicated Servers
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  { icon: "fa-server", title: "Enterprise Hardware", desc: "Powered by Intel® Xeon® and AMD EPYC™ processors with enterprise-grade NVMe SSD storage and DDR5 memory." },
                  { icon: "fa-database", title: "Dedicated Resources", desc: "Enjoy 100% dedicated CPU, RAM, and storage with no resource sharing for consistent high performance." },
                  { icon: "fa-microchip", title: "Multiple Operating Systems", desc: "Deploy Windows Server, Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS, Fedora, and more with ease." },
                  { icon: "fa-chart-gantt", title: "Full Root Access", desc: "Take complete control of your server with administrator or root access for custom configurations." },
                  { icon: "fa-network-wired", title: "High-Speed Network", desc: "Benefit from low-latency connectivity, premium bandwidth, and reliable network performance for demanding workloads." },
                  { icon: "fa-shield-halved", title: "24/7 Expert Support", desc: "Our dedicated infrastructure specialists are available around the clock to assist with hardware, networking, and server-related issues." },
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
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Enterprise dedicated servers built for maximum performance
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol delivers high-performance dedicated server solutions designed for businesses that demand
                    complete hardware control, superior security, and consistent reliability. Whether you're hosting
                    enterprise applications, large databases, virtualization platforms, or high-traffic websites, our
                    dedicated servers provide the power, stability, and scalability your infrastructure needs.
                  </p>
                </div>

                <div className="about-service-list wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-1.svg"
                        alt="Dedicated Resources"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>100% dedicated resources</h3>
                      <p>
                        Enjoy exclusive CPU, RAM, and storage resources for consistent performance without shared hardware.
                      </p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-2.svg"
                        alt="Enterprise Reliability"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Enterprise-grade reliability</h3>
                      <p>
                        Built with premium hardware, robust security, and high-speed connectivity to support mission-critical
                        workloads.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.6s">
                  <a href="contact.php" className="btn-default">Get Dedicated Server</a>
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
                      alt="Dedicated Server Benefits"
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
                  <h2 className="text-anime-style-2" style={{ color: "var(--secondary-color)" }} data-cursor="-opaque">
                    Additional Benefits with Every Dedicated Server
                  </h2>
                  <p className="wow fadeInUp" style={{ color: "var(--secondary-color)" }} data-wow-delay="0.2s">
                    Every HostingSol Dedicated Server includes enterprise-grade services and value-added
                    benefits that simplify management, improve security, and ensure maximum uptime for
                    mission-critical workloads.
                  </p>
                </div>

                <div className="features-item-list wow fadeInUp" data-wow-delay="0.4s">
                  {[
                    { icon: "icon-feature-1.svg", title: "Free DDoS Protection", desc: "Advanced network protection keeps your applications online by mitigating malicious attacks automatically." },
                    { icon: "icon-feature-2.svg", title: "24/7 Expert Support", desc: "Dedicated infrastructure specialists are available around the clock whenever you need assistance." },
                    { icon: "icon-feature-3.svg", title: "Remote Server Management", desc: "Easily reboot, monitor, and manage your dedicated server remotely with complete control." },
                    { icon: "icon-feature-4.svg", title: "Flexible Hardware Upgrades", desc: "Upgrade CPU, RAM, storage, or bandwidth as your business requirements continue to grow." },
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
                        <h3 style={{ color: "var(--secondary-color)" }}>{item.title}</h3>
                        <p style={{ color: "var(--secondary-color)" }}>{item.desc}</p>
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
          transition: all .4s ease;
          z-index: 1;
        }

        .pricing-card::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 0;
          border-radius: 22px;
          background: var(--secondary-color);
          transition: all .4s ease;
          z-index: -1;
        }

        .pricing-card:hover {
          border-color: var(--secondary-color);
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(21, 22, 104, .18);
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
          transition: .3s;
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
          transition: .3s;
        }

        .pricing-card:hover .pricing-features li i {
          color: #fff;
        }

        .pricing-btn {
          background: #fff;
          color: var(--secondary-color);
          border: 2px solid var(--secondary-color);
          transition: .3s;
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
          transition: .35s;
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
          transition: .35s;
          z-index: -1;
        }

        .enterprise-card:hover::before {
          top: 0;
        }

        .enterprise-card:hover {
          transform: translateY(-8px);
          border-color: var(--secondary-color);
          box-shadow: 0 18px 40px rgba(21, 22, 104, .15);
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
          transition: .35s;
        }

        .feature-icon i {
          font-size: 28px;
          color: var(--secondary-color);
          transition: .35s;
        }

        .enterprise-card h5 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--secondary-color);
          transition: .35s;
        }

        .enterprise-card p {
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          color: #6f7684;
          transition: .35s;
        }

        .enterprise-card:hover h5,
        .enterprise-card:hover p {
          color: #fff;
        }

        .enterprise-card:hover .feature-icon {
          background: rgba(255, 255, 255, .15);
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
          background: rgba(255, 255, 255, .05);
          border: 1px solid rgba(255, 255, 255, .08);
          backdrop-filter: blur(14px);
          transition: .35s;
        }

        .panel-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, .09);
          box-shadow: 0 25px 50px rgba(0, 0, 0, .35);
        }

        .panel-card h5 {
          color: #fff;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .panel-card p {
          color: rgba(255, 255, 255, .75);
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