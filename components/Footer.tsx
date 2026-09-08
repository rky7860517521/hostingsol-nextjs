"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Image
                  loading="lazy"
                  src="/images/logo.webp"
                  alt="HostingSol Logo"
                  width={180}
                  height={50}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  Take your hosting business to the next level with powerful
                  combination of reliable hosting.
                </p>
              </div>
              {/* About Footer Content End */}

              {/* Footer Social Link Start */}
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#" aria-label="Dribbble">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-3 col-md-4">
            {/* Footer Contact Box Start */}
            <div className="footer-contact-box footer-links">
              <h3>contact us</h3>

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <Image
                    loading="lazy"
                    src="/images/icon-mail.svg"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="mailto:info@hostingsol.com">info@hostingsol.com</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <Image
                    loading="lazy"
                    src="/images/icon-phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="tel:123456789">+1 (234) 567 489</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}
            </div>
            {/* Footer Contact Box End */}
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>quick links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/vps">VPS Hosting</Link>
                </li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>&nbsp;</h3>
              <ul>
                <li>
                  <Link href="/dedicated">Dedicated Hosting</Link>
                </li>
                {/* Uncomment these when pages are ready */}
                {/* <li><Link href="/it-rental">IT Rental</Link></li> */}
                {/* <li><Link href="/managed-services">Managed Services</Link></li> */}
                {/* <li><Link href="/colocation-services">Colocation Services</Link></li> */}
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-md-5">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>

            <div className="col-md-7">
              {/* Footer Menu Start */}
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link href="/privacy-policy">privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">
                      terms & conditions
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Footer Menu End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
}