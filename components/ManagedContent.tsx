// app/managed-services/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ManagedServices() {
  return (
    <>
    <Navbar />
    <div className="managed-services-page">
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
                  <h1>Managed Services</h1>
                  <p className="mb-4">
                    <strong>Proactive • Secure • Fully Managed</strong>
                  </p>
                  <p>
                    Focus on growing your business while HostingSol manages your IT infrastructure.
                    Our Managed Services include proactive monitoring, server administration,
                    security management, backups, performance optimization, and expert technical
                    support, ensuring your systems remain secure, reliable, and available around
                    the clock.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">24/7 Monitoring</h3>
                        <p>Continuous infrastructure monitoring.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Security Management</h3>
                        <p>Updates, patching, and protection.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Automated Backups</h3>
                        <p>Reliable backup and recovery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Expert Support</h3>
                        <p>Certified engineers available 24/7.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    Explore Plans
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
                      alt="Managed Services"
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
                      ₹4,999 / Month
                    </del>
                    <h2
                      style={{
                        color: "var(--secondary-color)",
                        fontSize: "48px",
                      }}
                    >
                      ₹2,999
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
              <div className="section-title text-center">
                <h2>Managed Service Plans for Every Business</h2>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Essential */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Essential</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹2,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Managed Services</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Infrastructure Monitoring
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> OS Updates & Patching
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Security Hardening
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Monthly Health Reports
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Email Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Incident Response
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card popular-plan">
                <div className="popular-tag">MOST POPULAR</div>
                <div className="pricing-card-header">
                  <h3>Professional</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹5,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn active-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Managed Services</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Everything in Essential
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Daily Automated Backups
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Performance Optimization
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Firewall Management
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Priority Ticket Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Server Administration
                  </li>
                </ul>
              </div>
            </div>

            {/* Business */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Business</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹9,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Get Started
                </a>
                <div className="pricing-renew">Managed Services</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Everything in Professional
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Database Management
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Disaster Recovery Planning
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Phone Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> SLA-Based Response
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Infrastructure Optimization
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
                  <small>Tailored Solutions</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Contact Sales
                </a>
                <div className="pricing-renew">Managed Services</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Multi-Server Management
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dedicated Technical Team
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Proactive Monitoring
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Compliance & Security Audits
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

      {/* Managed Service Features */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2
              style={{ color: "var(--secondary-color)" }}
              className="text-anime-style-3"
            >
              Managed Service Features
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Proactive IT Management for Reliable Business Operations
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-user-shield",
                title: "24/7 Proactive Monitoring",
                desc: "Our experts continuously monitor your infrastructure to detect and resolve issues before they impact your business.",
              },
              {
                icon: "fa-headset",
                title: "Expert Technical Support",
                desc: "Receive round-the-clock assistance from certified engineers for troubleshooting, maintenance, and infrastructure optimization.",
              },
              { icon: "fa-chart-line", title: "24/7 Monitoring", desc: "" },
              { icon: "fa-server", title: "Server Management", desc: "" },
              { icon: "fa-network-wired", title: "Network Management", desc: "" },
              { icon: "fa-shield-halved", title: "Security Management", desc: "" },
              { icon: "fa-cloud-arrow-up", title: "Backup & Recovery", desc: "" },
              { icon: "fa-download", title: "Patch Management", desc: "" },
              { icon: "fa-gauge-high", title: "Performance Optimization", desc: "" },
              { icon: "fa-database", title: "Database Management", desc: "" },
              { icon: "fa-user-tie", title: "Dedicated Engineers", desc: "" },
              { icon: "fa-file-shield", title: "Compliance Support", desc: "" },
              { icon: "fa-chart-pie", title: "Monthly Reports", desc: "" },
              { icon: "fa-comments", title: "Priority Support", desc: "" },
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

      {/* Why Choose HostingSol Managed Services */}
      <div className="intro-video parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h2 data-cursor="-opaque">
                  Why Businesses Choose HostingSol Managed Services
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  {
                    icon: "fa-chart-line",
                    title: "24/7 Proactive Monitoring",
                    desc: "We continuously monitor your servers, networks, and IT infrastructure to identify and resolve issues before they impact your business.",
                  },
                  {
                    icon: "fa-shield-halved",
                    title: "Advanced Security Management",
                    desc: "Protect your business with firewall management, security patching, vulnerability monitoring, malware protection, and compliance best practices.",
                  },
                  {
                    icon: "fa-server",
                    title: "Complete Infrastructure Management",
                    desc: "From servers and operating systems to databases and networking, our experts manage your entire IT environment efficiently.",
                  },
                  {
                    icon: "fa-cloud-arrow-up",
                    title: "Backup & Disaster Recovery",
                    desc: "Automated backups and disaster recovery planning ensure your business data remains protected and quickly recoverable.",
                  },
                  {
                    icon: "fa-gauge-high",
                    title: "Performance Optimization",
                    desc: "Improve server performance, application responsiveness, and resource utilization with continuous tuning and optimization.",
                  },
                  {
                    icon: "fa-headset",
                    title: "Dedicated Expert Support",
                    desc: "Our certified engineers provide 24/7 technical assistance, rapid incident response, and strategic IT guidance whenever you need it.",
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
              Managed Services for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-building",
                title: "Enterprise IT Operations",
                desc: "Fully manage servers, networks, security, and business-critical infrastructure while your team focuses on core operations.",
              },
              {
                icon: "fa-cloud",
                title: "Cloud Infrastructure",
                desc: "Monitor, optimize, and secure public, private, and hybrid cloud environments with proactive management and support.",
              },
              {
                icon: "fa-server",
                title: "Server Management",
                desc: "Complete administration, monitoring, patching, and optimization for physical and virtual servers.",
              },
              {
                icon: "fa-network-wired",
                title: "Network Management",
                desc: "Maintain secure, reliable, and high-performance business networks with proactive monitoring.",
              },
              {
                icon: "fa-shield-halved",
                title: "Cybersecurity",
                desc: "Protect systems with firewall management, vulnerability assessments, patching, and threat monitoring.",
              },
              {
                icon: "fa-database",
                title: "Database Management",
                desc: "Ensure database performance, availability, backups, and maintenance for business applications.",
              },
              {
                icon: "fa-cloud-arrow-up",
                title: "Backup & Recovery",
                desc: "Protect critical business data with automated backups and disaster recovery planning.",
              },
              {
                icon: "fa-store",
                title: "Retail Businesses",
                desc: "Keep POS systems, inventory platforms, and store networks running efficiently with managed IT.",
              },
              {
                icon: "fa-hospital",
                title: "Healthcare",
                desc: "Maintain secure, compliant, and highly available IT infrastructure for healthcare organizations.",
              },
              {
                icon: "fa-landmark",
                title: "Financial Services",
                desc: "Ensure reliable performance, security, and compliance for banking and financial systems.",
              },
              {
                icon: "fa-industry",
                title: "Manufacturing",
                desc: "Support production systems, industrial networks, and business applications with proactive IT management.",
              },
              {
                icon: "fa-school",
                title: "Education",
                desc: "Manage campus networks, servers, and digital learning platforms with reliable technical support.",
              },
              {
                icon: "fa-code",
                title: "Software Companies",
                desc: "Keep development, staging, production, and CI/CD environments optimized and continuously available.",
              },
              {
                icon: "fa-briefcase",
                title: "SMBs & Enterprises",
                desc: "Outsource day-to-day IT operations to experienced professionals while reducing operational overhead.",
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
                    End-to-end managed IT services for modern businesses
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol delivers comprehensive Managed Services that keep your IT
                    infrastructure secure, optimized, and always available. From server
                    administration and network management to cybersecurity, backups,
                    monitoring, and technical support, our experts proactively manage your
                    technology so your team can focus on growing the business.
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
                        alt="Proactive Management"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Proactive infrastructure management</h3>
                      <p>
                        Continuous monitoring, server administration, network optimization,
                        security management, and preventive maintenance to maximize uptime.
                      </p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-2.svg"
                        alt="Expert Support"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>24/7 expert support & protection</h3>
                      <p>
                        Benefit from round-the-clock technical support, automated backups,
                        disaster recovery planning, compliance assistance, and rapid incident
                        response from certified professionals.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="about-us-btn wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <a href="contact.php" className="btn-default">
                    Explore Managed Services
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
                      alt="Managed Services Benefits"
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
                    Additional Benefits with Every Managed Service
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--secondary-color)" }}
                    data-wow-delay="0.2s"
                  >
                    HostingSol Managed Services provide proactive monitoring, expert administration,
                    enhanced security, and ongoing optimization so your IT infrastructure remains
                    secure, reliable, and focused on business growth.
                  </p>
                </div>

                <div
                  className="features-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {[
                    {
                      icon: "icon-feature-1.svg",
                      title: "24/7 Infrastructure Monitoring",
                      desc: "Continuous monitoring helps detect and resolve issues before they impact your business operations.",
                    },
                    {
                      icon: "icon-feature-2.svg",
                      title: "Security & Patch Management",
                      desc: "Regular security updates, vulnerability management, firewall configuration, and system hardening.",
                    },
                    {
                      icon: "icon-feature-3.svg",
                      title: "Automated Backup & Recovery",
                      desc: "Scheduled backups and rapid disaster recovery ensure your critical business data remains protected.",
                    },
                    {
                      icon: "icon-feature-4.svg",
                      title: "Dedicated Technical Experts",
                      desc: "Experienced engineers provide ongoing administration, optimization, troubleshooting, and technical assistance.",
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