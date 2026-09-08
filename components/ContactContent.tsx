"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="contact-us-page">
      {/* Page Header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Contact Us
                </h1>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Contact Info Item Start */}
              <div className="contact-info-item wow fadeInUp">
                <div className="icon-box">
                  <Image
                    src="/images/icon-contact-mail.svg"
                    alt="Email"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:sales@hostingsol.in">
                      sales@hostingsol.in
                    </a>
                  </p>
                  <p>
                    <a href="mailto:support@hostingsol.in">
                      support@hostingsol.in
                    </a>
                  </p>
                </div>
              </div>
              {/* Contact Info Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Contact Info Item Start */}
              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <Image
                    src="/images/icon-contact-phone.svg"
                    alt="Phone"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+919999999999">+91 99999 99999</a>
                  </p>
                  <p>
                    <a href="tel:+918888888888">+91 88888 88888</a>
                  </p>
                </div>
              </div>
              {/* Contact Info Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Contact Info Item Start */}
              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <Image
                    src="/images/icon-location.svg"
                    alt="Location"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Office Location</h3>
                  <p>
                    HostingSol Technologies<br />
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              {/* Contact Info Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      {/* Contact Form Section Start */}
      <div className="contact-form-section bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Content Form Image Start */}
              <div className="contact-form-img">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/contact-form-img.jpg"
                    alt="Contact Us"
                    width={500}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
              </div>
              {/* Content Form Image End */}
            </div>

            <div className="col-lg-6">
              {/* Contact Form Start */}
              <div className="contact-form">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2
                    className="text-anime-style-3"
                    style={{ color: "var(--secondary-color)" }}
                    data-cursor="-opaque"
                  >
                    Let's discuss your hosting requirements
                  </h2>
                  <p
                    className="wow fadeInUp"
                    style={{ color: "var(--secondary-color)" }}
                    data-wow-delay="0.2s"
                  >
                    Need reliable hosting, VPS solutions, dedicated servers,
                    or managed infrastructure services? Our experts are ready
                    to help you choose the perfect solution for your business.
                  </p>
                </div>
                {/* Section Title End */}

                <form
                  id="contactForm"
                  onSubmit={handleSubmit}
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  noValidate
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Tell us about your hosting requirement"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn-default"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit Message"}
                      </button>

                      {submitStatus.type && (
                        <div
                          className={`mt-3 alert ${
                            submitStatus.type === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                          role="alert"
                        >
                          {submitStatus.message}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form End */}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Section End */}

      <style jsx>{`
        .page-header {
          padding: 80px 0;
          background: var(--secondary-color);
          color: #fff;
        }

        .page-header-box h1 {
          font-size: 48px;
          font-weight: 700;
          margin: 0;
        }

        .page-contact-us {
          padding: 80px 0;
          background: #f8fbff;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .contact-info-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-info-item .icon-box {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: #eef3ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-info-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .contact-info-content p {
          margin: 0;
          color: #6f7684;
          line-height: 1.8;
        }

        .contact-info-content a {
          color: #6f7684;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info-content a:hover {
          color: var(--secondary-color);
        }

        .contact-form-section {
          padding: 80px 0;
        }

        .contact-form-img {
          border-radius: 20px;
          overflow: hidden;
        }

        .contact-form-img img {
          width: 100%;
          height: auto;
        }

        .contact-form .section-title {
          margin-bottom: 30px;
        }

        .contact-form .section-title h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .contact-form .section-title p {
          font-size: 16px;
          line-height: 1.8;
        }

        .form-control {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #fff;
          color: #333;
        }

        .form-control:focus {
          border-color: var(--secondary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(21, 22, 104, 0.1);
        }

        .form-control::placeholder {
          color: #a0a6b5;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
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

        .btn-default:hover:not(:disabled) {
          background: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(21, 22, 104, 0.25);
        }

        .btn-default:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .alert {
          padding: 12px 20px;
          border-radius: 10px;
          margin-top: 15px;
        }

        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-danger {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        @media (max-width: 991px) {
          .page-header-box h1 {
            font-size: 36px;
          }

          .contact-info-item {
            padding: 25px;
          }

          .contact-form .section-title h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 767px) {
          .page-header {
            padding: 60px 0;
          }

          .page-header-box h1 {
            font-size: 28px;
          }

          .page-contact-us {
            padding: 50px 0;
          }

          .contact-info-item {
            padding: 20px;
          }

          .contact-form-section {
            padding: 50px 0;
          }

          .contact-form .section-title h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}