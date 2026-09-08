// app/co-location-services/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ColocationServices() {
  return (
    <>
    <Navbar />
    <div className="colocation-services-page">
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
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Colocation Services
                  </h1>
                  <p className="mb-4">
                    <strong>Secure • Reliable • Enterprise Infrastructure</strong>
                  </p>
                  <p>
                    Deploy your own servers in HostingSol's enterprise-grade data centers
                    while we provide redundant power, high-speed connectivity, physical
                    security, cooling, and 24/7 infrastructure support. Our Colocation
                    Services offer the perfect balance of complete hardware ownership and
                    world-class data center reliability for mission-critical workloads.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Tier III+ Data Centers</h3>
                        <p>Enterprise-grade infrastructure.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Redundant Power</h3>
                        <p>UPS and generator-backed uptime.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">High-Speed Connectivity</h3>
                        <p>Low-latency premium network.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">24/7 Remote Hands</h3>
                        <p>Expert on-site technical assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    View Colocation Plans
                  </a>
                  <a href="contact.php" className="btn-default btn-highlighted">
                    Talk To Experts
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
                      alt="Colocation Services"
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
                      ₹9,999 / Month
                    </del>
                    <h2
                      style={{
                        color: "var(--secondary-color)",
                        fontSize: "48px",
                      }}
                    >
                      ₹4,999
                    </h2>
                    <p
                      style={{
                        color: "var(--secondary-color)",
                        marginTop: "10px",
                      }}
                    >
                      Per Rack Unit / Month
                    </p>
                  </div>

                  <div className="hero-btn mt-4">
                    <a href="#pricing" className="btn-default bg-white">
                      Get Started
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
              <div className="section-title text-center text-anime-style-3">
                <h2>Colocation Plans for Every Business</h2>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Quarter Rack */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Quarter Rack</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹4,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Colocation</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 10U Rack Space
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Redundant Power
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 1Gbps Network Port
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Physical Security
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Basic Remote Hands
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Facility Access*
                  </li>
                </ul>
              </div>
            </div>

            {/* Half Rack */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card popular-plan">
                <div className="popular-tag">MOST POPULAR</div>
                <div className="pricing-card-header">
                  <h3>Half Rack</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹12,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn active-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Colocation</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 21U Rack Space
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dual Power Feeds
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Premium Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Remote Hands Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Environmental Monitoring
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Secure Rack Access
                  </li>
                </ul>
              </div>
            </div>

            {/* Full Rack */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Full Rack</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹24,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Colocation</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 42U Dedicated Rack
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Redundant Power & Cooling
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 10Gbps Ready Network
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Remote Hands
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Rack Monitoring
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> SLA-Backed Uptime
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
                  <div className="main-price">Custom</div>
                  <small>Tailored Colocation</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Contact Sales
                </a>
                <div className="pricing-renew">Colocation</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Private Cages & Suites
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Multiple Rack Deployment
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dedicated Bandwidth
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Custom Power Options
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dedicated Account Manager
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Fully Customized SLA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section End */}

      {/* Colocation Features */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2
              style={{ color: "var(--secondary-color)" }}
              className="text-anime-style-3"
            >
              Colocation Features
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Enterprise-Grade Infrastructure for Your Own Hardware
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-server",
                title: "Secure Tier III/IV Data Centers",
                desc: "Host your own servers in enterprise-grade facilities with redundant power, cooling, advanced security, and guaranteed uptime.",
              },
              {
                icon: "fa-network-wired",
                title: "High-Speed Network Connectivity",
                desc: "Benefit from premium bandwidth, low-latency connectivity, multiple carrier options, and reliable enterprise networking.",
              },
              { icon: "fa-server", title: "Rack Space", desc: "" },
              { icon: "fa-bolt", title: "Redundant Power", desc: "" },
              { icon: "fa-fan", title: "Precision Cooling", desc: "" },
              { icon: "fa-globe", title: "Premium Bandwidth", desc: "" },
              { icon: "fa-shield-halved", title: "Physical Security", desc: "" },
              { icon: "fa-user-gear", title: "Remote Hands", desc: "" },
              { icon: "fa-video", title: "24/7 Surveillance", desc: "" },
              { icon: "fa-key", title: "Secure Access Control", desc: "" },
              { icon: "fa-chart-line", title: "Infrastructure Monitoring", desc: "" },
              { icon: "fa-plug", title: "Cross Connects", desc: "" },
              { icon: "fa-building", title: "Private Cages", desc: "" },
              { icon: "fa-headset", title: "24/7 Expert Support", desc: "" },
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

      {/* Why Choose HostingSol Colocation */}
      <div className="intro-video parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Why Businesses Choose HostingSol Colocation
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  {
                    icon: "fa-building",
                    title: "Enterprise Data Centers",
                    desc: "Host your own servers in secure Tier III/IV data centers featuring redundant power, precision cooling, and world-class infrastructure.",
                  },
                  {
                    icon: "fa-network-wired",
                    title: "Premium Network Connectivity",
                    desc: "Enjoy high-speed, low-latency connectivity with carrier-neutral networking, redundant uplinks, and enterprise-grade bandwidth.",
                  },
                  {
                    icon: "fa-bolt",
                    title: "Redundant Power & Cooling",
                    desc: "Ensure maximum uptime with dual power feeds, backup generators, UPS systems, and precision cooling designed for mission-critical equipment.",
                  },
                  {
                    icon: "fa-shield-halved",
                    title: "Physical Security",
                    desc: "Protect your infrastructure with biometric access control, CCTV surveillance, manned security, and secure rack or private cage options.",
                  },
                  {
                    icon: "fa-user-gear",
                    title: "24/7 Remote Hands",
                    desc: "Our certified engineers provide around-the-clock remote assistance for hardware replacement, cable management, diagnostics, and emergency support.",
                  },
                  {
                    icon: "fa-server",
                    title: "Scalable Colocation Solutions",
                    desc: "Start with a few rack units and seamlessly expand to half racks, full racks, private cages, or custom enterprise deployments as your business grows.",
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
              Colocation Solutions for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-server",
                title: "Enterprise Infrastructure",
                desc: "Host your own mission-critical servers in secure enterprise-grade data centers with maximum uptime, power redundancy, and premium connectivity.",
              },
              {
                icon: "fa-cloud",
                title: "Hybrid & Private Cloud",
                desc: "Build hybrid cloud environments by combining your on-premises infrastructure with secure colocation facilities and cloud connectivity.",
              },
              {
                icon: "fa-database",
                title: "Database Hosting",
                desc: "Deploy high-performance database servers with reliable power, cooling, and low-latency network connectivity.",
              },
              {
                icon: "fa-network-wired",
                title: "Network Infrastructure",
                desc: "Host routers, switches, firewalls, and networking equipment in secure, professionally managed facilities.",
              },
              {
                icon: "fa-cloud-arrow-up",
                title: "Disaster Recovery",
                desc: "Ensure business continuity with geographically secure disaster recovery and failover infrastructure.",
              },
              {
                icon: "fa-globe",
                title: "Content Delivery",
                desc: "Deliver websites, applications, and digital content faster using premium network connectivity.",
              },
              {
                icon: "fa-lock",
                title: "Compliance Workloads",
                desc: "Meet security and regulatory requirements with enterprise-grade physical security and monitoring.",
              },
              {
                icon: "fa-chart-line",
                title: "Financial Services",
                desc: "Host banking and fintech infrastructure with reliable uptime, redundant systems, and secure connectivity.",
              },
              {
                icon: "fa-industry",
                title: "Manufacturing",
                desc: "Support ERP systems, industrial applications, and production environments with enterprise infrastructure.",
              },
              {
                icon: "fa-video",
                title: "Media & Streaming",
                desc: "Power media processing, streaming platforms, and digital content delivery with high-bandwidth infrastructure.",
              },
              {
                icon: "fa-microchip",
                title: "AI & HPC",
                desc: "Deploy GPU servers and high-performance computing clusters in professionally managed data centers.",
              },
              {
                icon: "fa-code",
                title: "Software Platforms",
                desc: "Host production servers, CI/CD infrastructure, and enterprise applications with maximum reliability.",
              },
              {
                icon: "fa-building",
                title: "Large Enterprises",
                desc: "Consolidate enterprise infrastructure into scalable rack, cage, or private suite colocation environments.",
              },
              {
                icon: "fa-server",
                title: "Hosting Providers",
                desc: "Expand hosting infrastructure with reliable rack space, premium bandwidth, and enterprise-grade facilities.",
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
                    Secure colocation solutions for mission-critical infrastructure
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol provides enterprise-grade colocation services that allow
                    businesses to deploy their own servers inside secure, highly available
                    data centers. Benefit from redundant power, precision cooling, premium
                    network connectivity, and round-the-clock physical security while
                    maintaining complete ownership and control of your hardware.
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
                        alt="Enterprise Infrastructure"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Enterprise data center infrastructure</h3>
                      <p>
                        Host your equipment in secure facilities with redundant power,
                        precision cooling, high-speed connectivity, and advanced physical
                        security for maximum uptime.
                      </p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-2.svg"
                        alt="Scalable Colocation"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Scalable colocation with expert support</h3>
                      <p>
                        Start with a few rack units or deploy full racks and private cages,
                        backed by 24/7 remote hands, infrastructure monitoring, and expert
                        technical assistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="about-us-btn wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <a href="contact.php" className="btn-default">
                    Explore Colocation
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
                      alt="Colocation Benefits"
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
                    Additional Benefits with Every Colocation Service
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--secondary-color)" }}
                    data-wow-delay="0.2s"
                  >
                    HostingSol Colocation delivers enterprise-grade infrastructure, redundant
                    facilities, premium connectivity, and expert operational support to keep
                    your mission-critical hardware secure, connected, and always available.
                  </p>
                </div>

                <div
                  className="features-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {[
                    {
                      icon: "icon-feature-1.svg",
                      title: "Redundant Power & Cooling",
                      desc: "Dual power feeds, UPS systems, backup generators, and precision cooling ensure maximum uptime for your infrastructure.",
                    },
                    {
                      icon: "icon-feature-2.svg",
                      title: "24/7 Remote Hands Support",
                      desc: "Certified engineers are available around the clock for hardware replacement, troubleshooting, cabling, and on-site assistance.",
                    },
                    {
                      icon: "icon-feature-3.svg",
                      title: "Enterprise Physical Security",
                      desc: "Protect your equipment with biometric access control, CCTV surveillance, secure racks, private cages, and 24/7 security personnel.",
                    },
                    {
                      icon: "icon-feature-4.svg",
                      title: "Premium Network Connectivity",
                      desc: "Benefit from carrier-neutral connectivity, low-latency networking, scalable bandwidth, and highly reliable enterprise infrastructure.",
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
        .our-pricing {
          background: #ffffff;
        }
        .page-about-us{
            color:#fff;
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