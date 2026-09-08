"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function HomeContent() {
   

  const [activeTab, setActiveTab] = useState('vps-hosting');

  // Pricing data for tabs
  const pricingData = {
    'vps-hosting': [
      { name: 'Micro VPS', desc: 'Perfect for startups and lightweight workloads.', price: '₹2,099', features: ['4 vCPU Cores', '8GB RAM', '200GB NVMe SSD', 'Full Root Access'] },
      { name: 'Mega VPS', desc: 'Balanced performance for growing businesses.', price: '₹2,699', features: ['6 vCPU Cores', '16GB RAM', '300GB NVMe SSD', 'Full Root Access'], popular: true },
      { name: 'Giga VPS', desc: 'Advanced virtual infrastructure for demanding apps.', price: '₹3,299', features: ['8 vCPU Cores', '32GB RAM', '500GB NVMe SSD', 'Full Root Access'] },
      { name: 'Tera VPS', desc: 'Enterprise-grade VPS for mission-critical workloads.', price: '₹4,199', features: ['12 vCPU Cores', '48GB RAM', '650GB NVMe SSD', 'Full Root Access'] }
    ],
    'dedicated-servers': [
      { name: 'Essential', desc: 'Dedicated resources for growing businesses.', price: '₹8,999', features: ['Intel Xeon CPU', '32GB ECC RAM', '1TB NVMe SSD', 'Full Root Access'] },
      { name: 'Business', desc: 'High-performance dedicated infrastructure.', price: '₹12,999', features: ['Intel Xeon Gold', '64GB ECC RAM', '2TB NVMe SSD', 'DDoS Protection'], popular: true },
      { name: 'Performance', desc: 'Optimized for databases and virtualization.', price: '₹18,999', features: ['Dual Xeon CPUs', '128GB ECC RAM', '4TB NVMe SSD', 'Premium Network'] },
      { name: 'Enterprise', desc: 'Maximum compute power and reliability.', price: '₹29,999', features: ['Dual Xeon Platinum', '256GB ECC RAM', '8TB NVMe SSD', 'Priority Support'] }
    ],
    'managed-services': [
      { name: 'Basic Managed', desc: 'Essential monitoring and administration.', price: '₹4,999', features: ['Server Monitoring', 'OS Updates', 'Monthly Reports', 'Ticket Support'] },
      { name: 'Standard Managed', desc: 'Complete server administration and support.', price: '₹8,999', features: ['Security Hardening', 'Backup Management', 'Performance Tuning', 'Priority Support'], popular: true },
      { name: 'Advanced Managed', desc: 'Proactive infrastructure management.', price: '₹14,999', features: ['24/7 Monitoring', 'Incident Response', 'Disaster Recovery', 'SLA Coverage'] },
      { name: 'Enterprise Managed', desc: 'Fully managed enterprise IT operations.', price: '₹24,999', features: ['Dedicated Team', '24/7 NOC Support', 'Compliance Assistance', 'Strategic Consulting'] }
    ],
    'shared-hosting': [
      { name: 'Starter', desc: 'Perfect for personal websites and blogs.', price: '₹99', features: ['1 Website', '10GB SSD Storage', 'Free SSL', '5 Email Accounts'] },
      { name: 'Business', desc: 'Reliable hosting for growing business websites.', price: '₹199', features: ['10 Websites', '50GB SSD Storage', 'Free SSL', 'Unlimited Emails'], popular: true },
      { name: 'Professional', desc: 'Enhanced resources for expanding businesses.', price: '₹349', features: ['Unlimited Websites', '100GB SSD Storage', 'Daily Backups', 'Free CDN'] },
      { name: 'Enterprise', desc: 'Premium shared hosting with maximum resources.', price: '₹599', features: ['Unlimited Websites', '200GB SSD Storage', 'Advanced Security', 'Priority Support'] }
    ],

     
  };






  return (
     <>
      <Navbar />

       <div className="page-wrapper">
      {/* Hero Section Start */}
      <div className="hero parallaxie" style={{ paddingTop: '125px', paddingBottom: '50px' }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="section-title dark-section">
                  <h1 data-cursor="-opaque">
                    High Performance <br /> <span className="text-theme-yellow">Cloud & VPS Servers</span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Get domains, web hosting, and WordPress tools, all in one place.
                    Build your website with ease and scale effortlessly with HostingSol.
                  </p>
                </div>
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#" className="btn-default">Get Started</a>
                  <a href="#" className="btn-default btn-highlighted">View Plans</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: '50px' }}>
          <div className="row">
            <div className="col-lg-12">
              {/* Our Service List Start */}
              <div className="our-service-list" style={{ 
  display: 'flex', 
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0'
}}>
                {/* Service Item 1 */}
                <div className="our-service-item wow fadeInUp">
                  <div className="icon-box">
                    <Image loading="lazy" src="/images/icon-our-service-5.svg" alt="Dedicated Servers" width={50} height={50} />
                  </div>
                  <div className="service-item-content">
                    <h3><a href="#">Dedicated Servers</a></h3>
                  </div>
                </div>
                {/* Service Item 2 */}
                <div className="our-service-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <Image loading="lazy" src="/images/icon-our-service-3.svg" alt="VPS Hosting" width={50} height={50} />
                  </div>
                  <div className="service-item-content">
                    <h3><a href="#">VPS Hosting</a></h3>
                  </div>
                </div>
                {/* Service Item 3 */}
                <div className="our-service-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <Image loading="lazy" src="/images/icon-our-service-1.svg" alt="IT Rental" width={50} height={50} />
                  </div>
                  <div className="service-item-content">
                    <h3><a href="#">IT Rental</a></h3>
                  </div>
                </div>
                {/* Service Item 4 */}
                <div className="our-service-item wow fadeInUp" data-wow-delay="1s">
                  <div className="icon-box">
                    <Image loading="lazy" src="/images/icon-our-service-6.svg" alt="Managed & Colocation Services" width={50} height={50} />
                  </div>
                  <div className="service-item-content">
                    <h3><a href="#">Managed & Colocation Services</a></h3>
                  </div>
                </div>
              </div>
              {/* Our Service List End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Trusted Solution Start */}
      <div className="trusted-solution">
        <div className="container">
          <div className="row section-row mb-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-anime-style-3" style={{ color: 'var(--secondary-color)' }} data-cursor="-opaque">
                  Reliable hosting solutions built for performance and growth
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ color: 'var(--secondary-color)' }}>
                  From startups to growing businesses, we provide fast, secure, and scalable hosting solutions designed to
                  keep your website running smoothly at all times.
                </p>
              </div>
            </div>
          </div>
          <div id="trustedCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-server"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>VPS Hosting</h3>
                        <p>Scalable virtual servers with dedicated resources and full control.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-database"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>Dedicated Servers</h3>
                        <p>Enterprise hardware delivering maximum performance and reliability.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-laptop"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>IT Rental</h3>
                        <p>Flexible rental solutions for business hardware and infrastructure.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-chart-gantt"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>Managed Services</h3>
                        <p>Expert monitoring, maintenance, security, and technical support.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-network-wired"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>Colocation</h3>
                        <p>Secure rack space with redundant power and connectivity.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-sitemap"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>IT Infrastructure</h3>
                        <p>Complete networking, storage, server, and deployment solutions.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-globe"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>Shared Hosting</h3>
                        <p>Reliable SSD hosting with security and website management.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="trusted-solution-item">
                      <div className="icon-box"><i className="fa-solid fa-headset"></i></div>
                      <div className="trusted-solution-item-content">
                        <h3>Contact Sales</h3>
                        <p>Speak with experts to design infrastructure for your business.</p>
                      </div>
                      <div className="trusted-solution-btn"><i className="fa-solid fa-phone"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trusted Solution End */}

      {/* Pricing Section Start */}
      <div className="our-pricing v2-pricing">
        <div className="container-fluid px-lg-5">
          {/* Section Title */}
          <div className="row section-row mb-3">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Choose the right hosting solution for your business</h2>
                <p>Reliable hosting services built for speed, security, scalability, and maximum uptime.</p>
              </div>
            </div>
          </div>

          {/* TAB NAVIGATION */}
          <div className="our-pricing-nav">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              {Object.keys(pricingData).map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                  >
                    {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content">
            {Object.entries(pricingData).map(([tab, plans]) => (
              <div key={tab} className={`tab-pane fade ${activeTab === tab ? 'show active' : ''}`}>
                <div className="row g-4 justify-content-center">
                  {plans.map((plan, index) => (
                    <div className="col-lg-3 col-md-6" key={index}>
                      <div className={`pricing-card ${plan.popular ? 'popular-plan' : ''}`}>
                        {plan.popular && <div className="popular-tag">POPULAR</div>}
                        <div className="pricing-card-header">
                          <h3>{plan.name}</h3>
                          <p>{plan.desc}</p>
                        </div>
                        <div className="pricing-price">
                          <div className="main-price">{plan.price}<span>/mo</span></div>
                          <small>Starting Price</small>
                        </div>
                        <a href="#" className={`pricing-btn ${plan.popular ? 'active-btn' : ''}`}>Get Started</a>
                        <div className="pricing-renew">{tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                        <ul className="pricing-features">
                          {plan.features.map((feature, i) => (
                            <li key={i}><i className="fa-solid fa-check"></i> {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pricing Section End */}

      {/* Our Approach Section Start */}
      <div className="our-approach bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-approach-content">
                <div className="section-title dark-section">
                  <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ color: 'var(--secondary-color)' }}>
                    Built to support businesses with reliable hosting infrastructure
                  </h2>
                </div>
                <div className="vision-mission-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>
                    Our hosting solutions are built to deliver speed, security, and reliability for businesses of all
                    sizes. We focus on providing stable infrastructure, expert support, and scalable services that help
                    brands grow confidently in the digital space.
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
                  <Image loading="lazy" src="/images/our-approach-img.webp" alt="Our Approach" width={500} height={400} />
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
                  { icon: 'fa-server', title: 'VPS Servers', desc: 'Flexible and scalable virtual servers built for performance and control.' },
                  { icon: 'fa-database', title: 'Dedicated Servers', desc: 'High-performance infrastructure for enterprise workloads.' },
                  { icon: 'fa-microchip', title: 'IT Rental', desc: 'Affordable IT infrastructure on rent for flexible business needs.' },
                  { icon: 'fa-chart-gantt', title: 'Managed Services', desc: 'Complete server management with monitoring and support.' },
                  { icon: 'fa-network-wired', title: 'Colocation', desc: 'Secure data center space with high uptime and connectivity.' },
                  { icon: 'fa-shield-halved', title: 'Security First', desc: 'Advanced protection and monitoring for complete peace of mind.' }
                ].map((item, index) => (
                  <div className="why-box" key={index}>
                    <div className="why-icon"><i className={`fa-solid ${item.icon}`}></i></div>
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

      {/* Security Ecosystem Section Start */}
      <section className="security-ecosystem">
        <div className="container">
          <div className="row align-items-center section-row mb-4">
            <div className="section-title">
              <h2>Enterprise Security Built Into Every Layer</h2>
            </div>
          </div>
          <div className="security-diagram">
            <div className="security-card card-1">
              <div className="icon"><i className="fa-solid fa-shield-virus"></i></div>
              <h4>DDoS Protection</h4>
              <p>Advanced traffic filtering and mitigation.</p>
            </div>
            <div className="security-card card-2">
              <div className="icon"><i className="fa-solid fa-fire"></i></div>
              <h4>Web Firewall</h4>
              <p>Blocks malicious requests and exploits.</p>
            </div>
            <div className="security-center">
               <Image 
  loading="lazy" 
  src="/images/security-shield.webp" 
  alt="Security Shield" 
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
   />
            </div>
            <div className="security-card card-3">
              <div className="icon"><i className="fa-solid fa-bug-slash"></i></div>
              <h4>Malware Detection</h4>
              <p>Continuous scanning and threat removal.</p>
            </div>
            <div className="security-card card-4">
              <div className="icon"><i className="fa-solid fa-user-shield"></i></div>
              <h4>Intrusion Monitoring</h4>
              <p>Real-time monitoring and alerting.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Security Ecosystem Section End */}

      {/* Our Core Features Section Start */}
      <div className="our-core-features">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="core-features-image-box wow fadeInUp">
                <div className="core-features-image">
                  <figure className="image-anime">
                    <Image loading="lazy" src="/images/hero-img.webp" alt="Core Features" width={400} height={400} />
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
                    Built for performance, flexibility, and reliability — our hosting solutions support everything from small
                    projects to growing business applications.
                  </p>
                </div>
                <div className="features-item-list wow fadeInUp" data-wow-delay="0.4s">
                  {[
                    { icon: 'icon-feature-1.svg', title: 'Fast Response Times', desc: 'Experienced infrastructure specialists available whenever you need assistance.' },
                    { icon: 'icon-feature-2.svg', title: '99.99% Uptime SLA', desc: 'Reliable infrastructure backed by enterprise-grade availability and stability.' },
                    { icon: 'icon-feature-3.svg', title: '24/7 Expert Support', desc: 'Technical assistance available around the clock for your business needs.' },
                    { icon: 'icon-feature-4.svg', title: 'Enterprise Security', desc: 'Advanced protection designed for critical applications, servers, and data.' }
                  ].map((feature, index) => (
                    <div className="features-item" key={index}>
                      <div className="icon-box">
                        <Image loading="lazy" src={`/images/${feature.icon}`} alt={feature.title} width={40} height={40} />
                      </div>
                      <div className="features-item-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
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
                  <Image loading="lazy" src="/images/data-centers-img.webp" alt="Data Centers" width={500} height={400} />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data-centers-content">
                <div className="section-title">
                  <h2 className="text-anime-style-3" style={{ color: 'var(--secondary-color)' }} data-cursor="-opaque">
                    Global Infrastructure
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    HostingSol combines premium infrastructure, reliable connectivity, and performance-focused technologies to
                    deliver a fast and dependable hosting experience for websites, applications, and businesses worldwide.
                  </p>
                </div>
                <div className="data-centers-box tab-content wow fadeInUp" data-wow-delay="0.4s" id="myTabContent">
                  <div className="data-center-tab-item tab-pane fade show active" id="reach" role="tabpanel">
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
                  <a href="contact.html" className="btn-default">see all servers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Data Centers Section End */}

      {/* CTA Box Section Start */}
      <div className="cta-box" style={{ backgroundImage: "url('/images/cta-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-box-content">
                <div className="section-title">
                  <h2 data-cursor="-opaque">About HostingSol</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Every business has unique infrastructure requirements. Whether you're deploying
                    mission-critical applications, migrating existing workloads, scaling your online
                    platform, or building a dedicated enterprise environment, our experts can design
                    a hosting solution tailored to your performance, security, and budget needs.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    From VPS hosting and dedicated servers to managed services, colocation, and
                    custom infrastructure deployments, we provide reliable solutions backed by
                    expert support and enterprise-grade technology.
                  </p>
                </div>
                <div className="guarantee-btn wow fadeInUp" data-wow-delay="0.6s">
                  <div className="row">
                    <div className="col-md-6 mb-5">
                      <div className="data-centers-tab-list">
                        <ul>
                          <li className="w-100">Reliable Web Hosting</li>
                          <li className="w-100">24/7 Technical Support</li>
                          <li className="w-100">99.9% Uptime Guarantee</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="data-centers-tab-list">
                        <ul>
                          <li className="w-100">Advanced Security</li>
                          <li className="w-100">Scalable Infrastructure</li>
                          <li className="w-100">Affordable & Transparent Pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn-default">Talk To Our Experts</a>
                  <a href="#" className="ms-2 btn-default">Quick Chat</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-box-img">
                <Image loading="lazy" src="/images/guarantee-img.webp" alt="Guarantee" width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Box Section End */}

      {/* Our Faqs Section Start */}
      <div className="our-faqs bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-faqs-content">
                <div className="section-title dark-section">
                  <h2 data-cursor="-opaque" style={{ color: 'var(--bg-color)' }}>Hosting questions, answered clearly</h2>
                  <p className="wow fadeInUp" style={{ color: 'var(--bg-color)' }} data-wow-delay="0.2s">
                    Find quick answers about our VPS, dedicated servers, and hosting services. Still need help? Our team
                    is ready to assist you.
                  </p>
                </div>
                <div className="faq-cta-box wow fadeInUp bg-white" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <Image loading="lazy" src="/images/icon-faq-cta.svg" alt="FAQ CTA" width={50} height={50} />
                  </div>
                  <div className="faq-cta-content">
                    <p>Need assistance?</p>
                    <h3>Talk to our team</h3>
                    <p><a href="#">Contact support</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-accordion" id="faqaccordion">
                {[
                  { q: 'Which hosting service should I choose?', a: 'Choose VPS for flexibility and control, dedicated servers for maximum performance, and managed services if you want us to handle server maintenance and optimization.' },
                  { q: 'Can I upgrade my server later?', a: 'Yes, you can upgrade your resources anytime as your requirements grow, without needing to migrate your entire setup.' },
                  { q: 'Do you provide managed support?', a: 'Yes, our managed services include monitoring, updates, security management, and technical assistance to keep your servers running smoothly.' },
                  { q: 'How secure is your hosting?', a: 'Our infrastructure includes firewall protection, monitoring systems, and secure configurations to help protect your data and applications.' },
                  { q: 'Do you offer custom server configurations?', a: 'Yes, we can provide custom configurations based on your workload, performance needs, and business requirements.' },
                  { q: 'How can I get support?', a: 'You can contact our support team anytime through our contact page, and we\'ll assist you with setup, issues, or queries.' },
                  { q: 'Do I need technical knowledge to get started?', a: 'Not necessarily. Our team can guide you through setup, and managed services are available if you prefer a hands-off experience.' }
                ].map((faq, index) => (
                  <div className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`collapse${index + 1}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqaccordion">
                      <div className="accordion-body"><p>{faq.a}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Faqs Section End */}
    </div>


      <Footer />
     </>
  );
}
