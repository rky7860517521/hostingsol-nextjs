"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function AboutUs() {
    const [activeAccordion, setActiveAccordion] = useState(0);
   
    const faqs = [
        {
        question: "Which hosting service should I choose?",
        answer: "Choose VPS for flexibility and control, dedicated servers for maximum performance, and managed services if you want us to handle server maintenance and optimization.",
        },
        {
        question: "Can I upgrade my server later?",
        answer: "Yes, you can upgrade your resources anytime as your requirements grow, without needing to migrate your entire setup.",
        },
        {
        question: "Do you provide managed support?",
        answer: "Yes, our managed services include monitoring, updates, security management, and technical assistance to keep your servers running smoothly.",
        },
        {
        question: "How secure is your hosting?",
        answer: "Our infrastructure includes firewall protection, monitoring systems, and secure configurations to help protect your data and applications.",
        },
        {
        question: "Do you offer custom server configurations?",
        answer: "Yes, we can provide custom configurations based on your workload, performance needs, and business requirements.",
        },
        {
        question: "How can I get support?",
        answer: "You can contact our support team anytime through our contact page, and we'll assist you with setup, issues, or queries.",
        },
        {
        question: "Do I need technical knowledge to get started?",
        answer: "Not necessarily. Our team can guide you through setup, and managed services are available if you prefer a hands-off experience.",
        },
    ];


    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };
 return (
    <>
    <Navbar />
    <div className="about-us-page">
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
                  <h1>About HostingSol</h1>
                  <p className="mb-4">
                    <strong>Reliable • Scalable • Enterprise Ready</strong>
                  </p>
                  <p>
                    HostingSol delivers enterprise-grade hosting and IT infrastructure solutions
                    designed to power businesses of every size. From VPS Hosting and Dedicated
                    Servers to Managed Services, Colocation, and IT Rental, we provide reliable,
                    secure, and scalable technology backed by expert support, helping businesses
                    build, grow, and succeed with confidence.
                  </p>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Enterprise Infrastructure</h3>
                        <p>Reliable hosting and IT solutions for every business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">24/7 Expert Support</h3>
                        <p>Professional assistance whenever you need it.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Secure & Reliable</h3>
                        <p>Built for maximum uptime, security, and performance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="trusted-solution-item m-0 bg-white p-3"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="trusted-solution-item-content m-0">
                        <h3 className="mb-1">Scalable Solutions</h3>
                        <p>Infrastructure that grows alongside your business.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-btn mt-3">
                  <a href="#pricing" className="btn-default">
                    Explore Services
                  </a>
                  <a href="contact.php" className="btn-default btn-highlighted">
                    Contact Us
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
                      alt="About HostingSol"
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
                    <h3 style={{ color: "var(--secondary-color)" }} className="mb-0">
                      Trusted By
                    </h3>
                    <p style={{ display: "block", marginBottom: "10px" }}>
                      Modern Businesses
                    </p>
                    <h2
                      style={{
                        color: "var(--secondary-color)",
                        fontSize: "48px",
                      }}
                    >
                      24/7
                    </h2>
                    <p
                      style={{
                        color: "var(--secondary-color)",
                        marginTop: "10px",
                      }}
                    >
                      Expert Support & Enterprise Infrastructure
                    </p>
                  </div>

                   
                </div>
              </div>
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </section>

      {/* Trusted Solution Start */}
      <div className="trusted-solution">
        <div className="container">
          <div className="row section-row mb-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2
                  className="text-anime-style-3"
                  style={{ color: "var(--secondary-color)" }}
                  data-cursor="-opaque"
                >
                  Reliable hosting solutions built for performance and growth
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ color: "var(--secondary-color)" }}
                >
                  From startups to growing businesses, we provide fast, secure, and scalable hosting solutions
                  designed to keep your website running smoothly at all times.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-server",
                title: "VPS Hosting",
                desc: "Scalable virtual servers with dedicated resources and full control.",
              },
              {
                icon: "fa-database",
                title: "Dedicated Servers",
                desc: "Enterprise hardware delivering maximum performance and reliability.",
              },
              {
                icon: "fa-laptop",
                title: "IT Rental",
                desc: "Flexible rental solutions for business hardware and infrastructure.",
              },
              {
                icon: "fa-chart-gantt",
                title: "Managed Services",
                desc: "Expert monitoring, maintenance, security, and technical support.",
              },
              {
                icon: "fa-network-wired",
                title: "Colocation",
                desc: "Secure rack space with redundant power and connectivity.",
              },
              {
                icon: "fa-sitemap",
                title: "IT Infrastructure",
                desc: "Complete networking, storage, server, and deployment solutions.",
              },
              {
                icon: "fa-globe",
                title: "Shared Hosting",
                desc: "Reliable SSD hosting with security and website management.",
              },
              {
                icon: "fa-headset",
                title: "Contact Sales",
                desc: "Speak with experts to design infrastructure for your business.",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="trusted-solution-item">
                  <div className="icon-box">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="trusted-solution-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="trusted-solution-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Trusted Solution End */}

      {/* Our Approach Section Start */}
      <div className="our-approach bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-approach-content">
                <div className="section-title dark-section">
                  <h2
                    className="text-anime-style-3"
                    data-cursor="-opaque"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    Built to support businesses with reliable hosting infrastructure
                  </h2>
                </div>
                <div className="vision-mission-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>
                    Our hosting solutions are built to deliver speed, security, and reliability for businesses of
                    all sizes. We focus on providing stable infrastructure, expert support, and scalable services
                    that help brands grow confidently in the digital space.
                  </p>
                  <ul>
                    <li>High-performance hosting infrastructure</li>
                    <li>Reliable uptime and secure server environment</li>
                    <li>24/7 technical support for uninterrupted operations</li>
                    <li>Scalable solutions designed for growing businesses</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-approach-img">
                <figure className="image-anime reveal">
                  <Image
                    loading="lazy"
                    src="/images/our-approach-img.webp"
                    alt="Our Approach"
                    width={500}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Approach Section End */}

      {/* Intro Video Section Start */}
      <div className="intro-video parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h2 data-cursor="-opaque">Why Customers choose HostingSol</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-grid">
                {[
                  {
                    icon: "fa-server",
                    title: "VPS Servers",
                    desc: "Flexible and scalable virtual servers built for performance and control.",
                  },
                  {
                    icon: "fa-database",
                    title: "Dedicated Servers",
                    desc: "High-performance infrastructure for enterprise workloads.",
                  },
                  {
                    icon: "fa-microchip",
                    title: "IT Rental",
                    desc: "Affordable IT infrastructure on rent for flexible business needs.",
                  },
                  {
                    icon: "fa-chart-gantt",
                    title: "Managed Services",
                    desc: "Complete server management with monitoring and support.",
                  },
                  {
                    icon: "fa-network-wired",
                    title: "Colocation",
                    desc: "Secure data center space with high uptime and connectivity.",
                  },
                  {
                    icon: "fa-shield-halved",
                    title: "Security First",
                    desc: "Advanced protection and monitoring for complete peace of mind.",
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
      {/* Intro Video Section End */}

      {/* Our Core Features Section Start */}
      <div className="our-core-features">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="core-features-image-box wow fadeInUp">
                <div className="core-features-image">
                  <figure className="image-anime">
                    <Image
                      loading="lazy"
                      src="/images/hero-img.webp"
                      alt="Core Features"
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
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Everything you need to run and scale your hosting infrastructure
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Built for performance, flexibility, and reliability — our hosting solutions support everything
                    from small projects to growing business applications.
                  </p>
                </div>

                <div className="features-item-list wow fadeInUp" data-wow-delay="0.4s">
                  {[
                    {
                      icon: "icon-feature-1.svg",
                      title: "Fast Response Times",
                      desc: "Experienced infrastructure specialists available whenever you need assistance.",
                    },
                    {
                      icon: "icon-feature-2.svg",
                      title: "99.99% Uptime SLA",
                      desc: "Reliable infrastructure backed by enterprise-grade availability and stability.",
                    },
                    {
                      icon: "icon-feature-3.svg",
                      title: "24/7 Expert Support",
                      desc: "Technical assistance available around the clock for your business needs.",
                    },
                    {
                      icon: "icon-feature-4.svg",
                      title: "Enterprise Security",
                      desc: "Advanced protection designed for critical applications, servers, and data.",
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
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Core Features Section End */}

      {/* Our Data Centers Section Start */}
      <div className="our-data-centers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="data-centers-image">
                <figure>
                  <Image
                    loading="lazy"
                    src="/images/data-centers-img.webp"
                    alt="Data Centers"
                    width={500}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="data-centers-content">
                <div className="section-title">
                  <h2
                    className="text-anime-style-3"
                    style={{ color: "var(--secondary-color)" }}
                    data-cursor="-opaque"
                  >
                    Global Infrastructure
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol combines premium infrastructure, reliable connectivity, and performance-focused
                    technologies to deliver a fast and dependable hosting experience for websites, applications,
                    and businesses worldwide.
                  </p>
                </div>

                <div className="data-centers-box tab-content wow fadeInUp" data-wow-delay="0.4s">
                  <div className="data-center-tab-item tab-pane fade show active">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <div className="data-centers-tab-content">
                          <div className="data-centers-tab-header">
                            <h3>Global Reach</h3>
                          </div>
                          <div className="data-centers-tab-list">
                            <ul>
                              <li>Worldwide connectivity</li>
                              <li>Optimized network routing</li>
                              <li>Fast content delivery</li>
                              <li>International accessibility</li>
                              <li>Scalable infrastructure</li>
                              <li>Business-ready solutions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="data-centers-btn wow fadeInUp" data-wow-delay="0.6s">
                  <a href="contact.html" className="btn-default">
                    see all servers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Data Centers Section End */}

      {/* Our Team Section Start */}
      <div className="our-team">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Leadership Team
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Behind HostingSol is a dedicated team of technology professionals committed to
                  delivering secure, high-performance infrastructure and exceptional customer
                  support for businesses of every size.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                image: "team-1.jpg",
                name: "Leadership Team",
                role: "Executive Management",
              },
              {
                image: "team-2.jpg",
                name: "Infrastructure Experts",
                role: "Cloud & Server Engineers",
              },
              {
                image: "team-3.jpg",
                name: "Support Specialists",
                role: "24/7 Technical Support",
              },
              {
                image: "team-4.jpg",
                name: "Customer Success",
                role: "Business Solutions",
              },
            ].map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="team-member-item wow fadeInUp"
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="team-image">
                    <figure className="image-anime">
                      <Image
                        src={`/images/${member.image}`}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Team Section End */}

      {/* Our Faqs Section Start */}
      <div className="our-faqs bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-faqs-content">
                <div className="section-title dark-section">
                  <h2 data-cursor="-opaque" style={{ color: "var(--bg-color)" }}>
                    Hosting questions, answered clearly
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--bg-color)" }}
                    data-wow-delay="0.2s"
                  >
                    Find quick answers about our VPS, dedicated servers, and hosting services. Still need help? Our
                    team is ready to assist you.
                  </p>
                </div>

                <div className="faq-cta-box wow fadeInUp bg-white" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <Image
                      loading="lazy"
                      src="/images/icon-faq-cta.svg"
                      alt="FAQ CTA"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="faq-cta-content">
                    <p>Need assistance?</p>
                    <h3>Talk to our team</h3>
                    <p>
                      <a href="/contact">Contact support</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion" id="faqaccordion">
                {faqs.map((faq, index) => (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                    key={index}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeAccordion !== index ? "collapsed" : ""
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeAccordion === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Faqs Section End */}

      <style jsx>{`
        .trusted-solution {
          padding: 80px 0;
          background: #f8fbff;
        }

        .trusted-solution-item {
          background: #fff;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .trusted-solution-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .trusted-solution-item .icon-box {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          background: #eef3ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--secondary-color);
        }

        .trusted-solution-item h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .trusted-solution-item p {
          color: #6f7684;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .trusted-solution-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 35px;
          height: 35px;
          background: var(--secondary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
        }

        .trusted-solution-btn:hover {
          background: var(--primary-color);
          transform: scale(1.1);
        }

        .our-approach {
          padding: 80px 0;
        }

        .our-approach-content ul {
          list-style: none;
          padding: 0;
        }

        .our-approach-content ul li {
          padding: 8px 0;
          padding-left: 30px;
          position: relative;
          color: var(--secondary-color);
        }

        .our-approach-content ul li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #1abc6c;
          font-weight: 700;
        }

        .intro-video {
          padding: 80px 0;
          background: var(--secondary-color);
          color: #fff;
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .why-box {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .why-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
        }

        .why-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #fff;
        }

        .why-box h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
        }

        .why-box p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .our-core-features {
          padding: 80px 0;
          background: #f8fbff;
        }

        .features-item {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          margin-bottom: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .features-item .icon-box {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
        }

        .features-item h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 5px;
        }

        .features-item p {
          color: #6f7684;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .our-data-centers {
          padding: 80px 0;
          background: #fff;
        }

        .data-centers-tab-list ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .data-centers-tab-list ul li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
          color: var(--secondary-color);
        }

        .data-centers-tab-list ul li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #1abc6c;
          font-weight: 700;
        }

        .our-team {
          padding: 80px 0;
          background: #f8fbff;
        }

        .team-member-item {
          text-align: center;
          padding: 20px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .team-member-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .team-member-item .team-image {
          border-radius: 50%;
          overflow: hidden;
          width: 150px;
          height: 150px;
          margin: 0 auto 20px;
        }

        .team-member-item h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 5px;
        }

        .team-member-item p {
          color: #6f7684;
          font-size: 14px;
          margin: 0;
        }

        .our-faqs {
          padding: 80px 0;
        }

        .accordion-item {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 15px;
          overflow: hidden;
        }

        .accordion-button {
          width: 100%;
          padding: 20px 25px;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: var(--secondary-color);
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .accordion-button:hover {
          background: #f8fbff;
        }

        .accordion-body {
          padding: 0 25px 20px;
          color: #6f7684;
          line-height: 1.8;
        }

        .faq-cta-box {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          margin-top: 30px;
        }

        .faq-cta-box .icon-box {
          flex-shrink: 0;
        }

        .faq-cta-content p {
          margin: 0;
          color: #6f7684;
        }

        .faq-cta-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-color);
          margin: 5px 0;
        }

        .faq-cta-content a {
          color: var(--secondary-color);
          text-decoration: none;
          font-weight: 500;
        }

        .faq-cta-content a:hover {
          text-decoration: underline;
        }

        .btn-default {
          display: inline-block;
          padding: 14px 35px;
          background: var(--secondary-color);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-default:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(21, 22, 104, 0.25);
        }

        .btn-highlighted {
          background: transparent;
          border: 2px solid var(--secondary-color);
          color: var(--secondary-color);
        }

        .btn-highlighted:hover {
          background: var(--secondary-color);
          color: #fff;
        }

        .bg-white {
          background: #fff !important;
        }

        @media (max-width: 991px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .data-centers-tab-list ul {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .trusted-solution,
          .our-approach,
          .intro-video,
          .our-core-features,
          .our-data-centers,
          .our-team,
          .our-faqs {
            padding: 50px 0;
          }

          .why-choose-grid {
            grid-template-columns: 1fr;
          }

          .team-member-item .team-image {
            width: 120px;
            height: 120px;
          }

          .page-header {
            padding: 60px 0;
          }

          .page-header h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}