import Image from "next/image";
import Link from "next/link";

 

export default function Navbar() {
  return (
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">            
              <a className="navbar-brand" href="#">
                <img 
                  loading="lazy" 
                  src="images/logo.webp" 
                  style={{ filter: "brightness(0) invert(1)", height: "45px" }} 
                  alt="Logo" 
                />
              </a>
              
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link"  href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/vps-server">VPS</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/dedicated-server">Dedicated</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/it-rental-services">IT Rental</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/managed-services">Managed</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"  href="/co-location-services">Colocation</Link>
                    </li>
                    <li className="nav-item submenu">
                      <Link href="/contact-us" className="nav-link">
                        Contact 
                      </Link>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="tel:+919876543210">
                            <i className="fa-solid fa-phone"></i>
                            +91 98765 43210
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://wa.me/919876543210">
                            <i className="fa-brands fa-whatsapp"></i>
                            WhatsApp Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-lowercase" href="mailto:sales@hostingsol.com">
                            <i className="fa-solid fa-envelope"></i>
                            sales@hostingsol.com
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/contact-us">
                            <i className="fa-solid fa-location-dot"></i>
                            Visit Our Office
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
    
                <div className="header-btn d-inline-flex">
                  <Link href="/contact-us" className="btn-default">Get&nbsp;Started</Link>
                </div> {/* ✅ Closing div added */}
              </div>
              
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>



    )
};