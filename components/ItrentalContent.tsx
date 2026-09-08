"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import react, { useEffect } from "react";
export default function ITRental() {
  return (
    <>
    <Navbar />
    <div className="it-rental-page">
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
                  <h1>IT Rental Services</h1>
                  <p className="mb-4">
                    <strong>Flexible • Affordable • Business Ready</strong>
                  </p>
                  <p>
                    Equip your business with the latest desktops, laptops, workstations, servers,
                    networking devices, and IT accessories without the burden of upfront investment.
                    HostingSol IT Rental Services provide flexible rental plans, enterprise-grade
                    hardware, rapid deployment, and dedicated support, making it easy to scale your
                    infrastructure for projects, events, offices, and temporary workforce requirements.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Latest Enterprise Hardware</h3>
                        <p>Premium business-class IT equipment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Flexible Rental Plans</h3>
                        <p>Daily, monthly, or yearly rentals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Fast Delivery</h3>
                        <p>Quick deployment across locations.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Maintenance Included</h3>
                        <p>Technical support throughout rental.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    View Rental Plans
                  </a>
                  <a href="contact.php" className="btn-default btn-highlighted">
                    Request a Quote
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
                      alt="IT Rental Services"
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
                      ₹1,999 / Month
                    </del>
                    <h2
                      style={{
                        color: "var(--secondary-color)",
                        fontSize: "48px",
                      }}
                    >
                      ₹999
                    </h2>
                    <p
                      style={{
                        color: "var(--secondary-color)",
                        marginTop: "10px",
                      }}
                    >
                      Per Device / Month
                    </p>
                  </div>

                  <div className="hero-btn mt-4">
                    <a href="#pricing" className="btn-default bg-white">
                      Rent Now
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
                <h2>Flexible IT Rental Plans for Every Business</h2>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Basic */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Basic</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Rent Now
                </a>
                <div className="pricing-renew">IT Rental</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Business Desktop / Laptop
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Intel Core i3 / Ryzen 3
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 8GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 256GB SSD Storage
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Technical Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Flexible Rental Terms
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
                  <div className="main-price">₹1,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn active-btn">
                  Rent Now
                </a>
                <div className="pricing-renew">IT Rental</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Premium Business Laptop
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Intel Core i5 / Ryzen 5
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 16GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 512GB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> On-Site Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Free Replacement*
                  </li>
                </ul>
              </div>
            </div>

            {/* Workstation */}
            <div className="col-lg-3 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Workstation</h3>
                </div>
                <div className="pricing-price">
                  <div className="main-price">₹4,999<span>/mo</span></div>
                  <small>Starting Price</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Rent Now
                </a>
                <div className="pricing-renew">IT Rental</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> High-End Workstation
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Intel Core i7 / Ryzen 7
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 32GB DDR4 RAM
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 1TB NVMe SSD
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dedicated Graphics
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Priority Technical Support
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
                  <small>Bulk Rental Solutions</small>
                </div>
                <a href="contact.php" className="pricing-btn">
                  Contact Sales
                </a>
                <div className="pricing-renew">IT Rental</div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Laptops, Desktops & Servers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Networking Equipment
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Bulk Device Deployment
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> AMC & Maintenance Included
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Dedicated Account Manager
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Nationwide Delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section End */}

      {/* IT Rental Features */}
      <section className="enterprise-features py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5 mt-5">
            <h2
              style={{ color: "var(--secondary-color)" }}
              className="text-anime-style-3"
            >
              IT Rental Features
            </h2>
            <p style={{ color: "var(--secondary-color)" }}>
              Flexible IT Equipment Rental for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-laptop",
                title: "Premium Business Devices",
                desc: "Rent high-performance laptops, desktops, workstations, servers, and IT equipment from leading global brands.",
              },
              {
                icon: "fa-headset",
                title: "Managed IT Support",
                desc: "Comprehensive technical support, maintenance, and rapid device replacement to minimize business downtime.",
              },
              { icon: "fa-laptop", title: "Business Laptops", desc: "" },
              { icon: "fa-desktop", title: "Desktop PCs", desc: "" },
              { icon: "fa-server", title: "Servers", desc: "" },
              { icon: "fa-print", title: "Printers", desc: "" },
              { icon: "fa-network-wired", title: "Networking Devices", desc: "" },
              { icon: "fa-calendar-alt", title: "Flexible Rental Terms", desc: "" },
              { icon: "fa-truck", title: "Fast Delivery", desc: "" },
              { icon: "fa-screwdriver-wrench", title: "Maintenance Included", desc: "" },
              { icon: "fa-sync-alt", title: "Easy Device Upgrade", desc: "" },
              { icon: "fa-shield-halved", title: "Secure Equipment", desc: "" },
              { icon: "fa-user-tie", title: "Dedicated Account Manager", desc: "" },
              { icon: "fa-comments", title: "24/7 Assistance", desc: "" },
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

      {/* Why Choose HostingSol IT Rental */}
      <div className="intro-video parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h2 data-cursor="-opaque">
                  Why Businesses Choose HostingSol IT Rental
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  {
                    icon: "fa-laptop",
                    title: "Premium IT Equipment",
                    desc: "Access the latest laptops, desktops, workstations, servers, printers, and networking devices from leading global brands.",
                  },
                  {
                    icon: "fa-calendar-days",
                    title: "Flexible Rental Plans",
                    desc: "Choose daily, weekly, monthly, or long-term rental options tailored to your project, event, or business requirements.",
                  },
                  {
                    icon: "fa-truck-fast",
                    title: "Fast Delivery & Deployment",
                    desc: "Receive fully configured IT equipment quickly, ensuring your team is ready to work without unnecessary delays.",
                  },
                  {
                    icon: "fa-screwdriver-wrench",
                    title: "Maintenance Included",
                    desc: "We handle hardware maintenance, repairs, and replacements, allowing your business to stay productive at all times.",
                  },
                  {
                    icon: "fa-arrow-trend-up",
                    title: "Easy Upgrades",
                    desc: "Upgrade or replace equipment whenever your business needs change without investing in new hardware.",
                  },
                  {
                    icon: "fa-headset",
                    title: "24/7 Expert Support",
                    desc: "Our experienced support team is available around the clock to assist with technical issues, replacements, and rental services.",
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
              IT Rental Solutions for Every Business
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-building",
                title: "Corporate Offices",
                desc: "Equip your workforce with business laptops, desktops, and IT peripherals without large upfront investments.",
              },
              {
                icon: "fa-calendar-days",
                title: "Events & Conferences",
                desc: "Rent laptops, desktops, printers, and networking equipment for exhibitions, seminars, workshops, and events.",
              },
              {
                icon: "fa-laptop",
                title: "Remote Teams",
                desc: "Provide employees with ready-to-use laptops and accessories for seamless remote productivity.",
              },
              {
                icon: "fa-user-graduate",
                title: "Training Centers",
                desc: "Rent complete computer labs for technical training, certification programs, and workshops.",
              },
              {
                icon: "fa-code",
                title: "IT Projects",
                desc: "Deploy temporary hardware for software development, testing, and implementation projects.",
              },
              {
                icon: "fa-people-group",
                title: "Temporary Workforce",
                desc: "Quickly scale IT infrastructure for contract employees, consultants, and seasonal staff.",
              },
              {
                icon: "fa-hospital",
                title: "Healthcare",
                desc: "Supply reliable computing equipment for hospitals, clinics, and healthcare organizations.",
              },
              {
                icon: "fa-landmark",
                title: "Government Offices",
                desc: "Flexible rental solutions for public sector projects, elections, and administrative operations.",
              },
              {
                icon: "fa-clapperboard",
                title: "Media Production",
                desc: "High-performance workstations for video editing, graphics, animation, and content creation.",
              },
              {
                icon: "fa-store",
                title: "Retail Stores",
                desc: "Deploy POS systems, desktops, and printers for retail outlets and seasonal business expansion.",
              },
              {
                icon: "fa-server",
                title: "Data Centers",
                desc: "Rent enterprise servers and networking hardware for short-term or long-term infrastructure needs.",
              },
              {
                icon: "fa-school",
                title: "Educational Institutions",
                desc: "Affordable IT equipment for schools, colleges, universities, and computer laboratories.",
              },
              {
                icon: "fa-hard-drive",
                title: "Disaster Recovery",
                desc: "Quickly replace failed hardware and maintain business continuity with rental equipment.",
              },
              {
                icon: "fa-briefcase",
                title: "Startups & SMEs",
                desc: "Reduce capital expenditure while accessing enterprise-grade IT infrastructure as your business grows.",
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
                    Flexible IT rental solutions for modern businesses
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol provides reliable IT rental services designed for businesses,
                    startups, educational institutions, events, and enterprise projects.
                    From laptops and desktops to servers, networking equipment, and
                    workstations, we deliver fully configured devices that help you scale
                    quickly without the high upfront cost of purchasing new hardware.
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
                        alt="Enterprise IT Equipment"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Enterprise IT equipment</h3>
                      <p>
                        Rent laptops, desktops, workstations, servers, printers, and networking devices from leading global
                        brands.
                      </p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <Image
                        loading="lazy"
                        src="/images/icon-about-service-2.svg"
                        alt="Flexible Rental"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-service-content">
                      <h3>Flexible rental with full support</h3>
                      <p>
                        Choose short or long-term rental plans with installation, maintenance, quick replacements, and expert
                        technical support included.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="about-us-btn wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <a href="contact.php" className="btn-default">
                    Rent IT Equipment
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
                      alt="IT Rental Benefits"
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
                    Additional Benefits with Every IT Rental Plan
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--secondary-color)" }}
                    data-wow-delay="0.2s"
                  >
                    Every HostingSol IT Rental solution includes flexible rental terms, fully configured
                    equipment, professional technical support, and maintenance services, allowing your
                    business to stay productive without the burden of hardware ownership.
                  </p>
                </div>

                <div
                  className="features-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {[
                    {
                      icon: "icon-feature-1.svg",
                      title: "Ready-to-Use Equipment",
                      desc: "Fully configured laptops, desktops, servers, and peripherals delivered ready for immediate deployment.",
                    },
                    {
                      icon: "icon-feature-2.svg",
                      title: "Flexible Rental Periods",
                      desc: "Choose daily, weekly, monthly, or long-term rental plans that fit your project and business needs.",
                    },
                    {
                      icon: "icon-feature-3.svg",
                      title: "Maintenance & Replacement",
                      desc: "Enjoy hassle-free maintenance, quick troubleshooting, and fast hardware replacement whenever required.",
                    },
                    {
                      icon: "icon-feature-4.svg",
                      title: "24/7 Technical Support",
                      desc: "Our experienced support team is available around the clock to assist with setup, maintenance, and technical issues.",
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