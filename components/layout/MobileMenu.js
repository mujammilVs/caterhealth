"use client";
import Link from "next/link";
import { useState } from "react";
import {  FaFacebook, FaInstagram, FaPinterest, FaX, FaYoutube } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          {/* <span className="far fa-times" /> */}
          <RxCross2/>
        </div>
        <nav className="menu-box">
          {/* <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/caterwealth-logo.png" alt="" />
             
            </Link>
          </div> */}
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                // className={
                //   isActive.key == 1 ? "dropdown current" : "dropdown"
                // }
                >
                  <Link href="/">Home</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/" onClick={handleMobileMenu}>
                        Home Page One
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2" onClick={handleMobileMenu}>
                        Home Page Two
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-3" onClick={handleMobileMenu}>
                        Home Page Three
                      </Link>
                    </li>
                    <li>
                      <Link href="/onepage" onClick={handleMobileMenu}>
                        One Page Home
                      </Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/service">Services</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/service" onClick={handleMobileMenu}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details" onClick={handleMobileMenu}>
                        Cardioligy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-2"
                        onClick={handleMobileMenu}
                      >
                        Dental Clinic
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-3"
                        onClick={handleMobileMenu}
                      >
                        NeuroSergery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-4"
                        onClick={handleMobileMenu}
                      >
                        Medical
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-5"
                        onClick={handleMobileMenu}
                      >
                        Pediatrics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-6"
                        onClick={handleMobileMenu}
                      >
                        Modern Laboratory
                      </Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>

                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/team">Team</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/team" onClick={handleMobileMenu}>
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/team-details" onClick={handleMobileMenu}>
                        Team Details
                      </Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Tesmonial</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <li
                      className={
                        isActive.subMenuKey == 5
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/#">News</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 5 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/blog" onClick={handleMobileMenu}>
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-2" onClick={handleMobileMenu}>
                            Blog Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details" onClick={handleMobileMenu}>
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.subMenuKey == 5
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(4, 5)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li>
                      <Link href="/tesmonial" onClick={handleMobileMenu}>
                        Tesmonial
                      </Link>
                    </li>
                    <li>
                      <Link href="/works" onClick={handleMobileMenu}>
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link href="/chooseus" onClick={handleMobileMenu}>
                        Why Choose Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing-table" onClick={handleMobileMenu}>
                        Pricing-Table
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" onClick={handleMobileMenu}>
                        Faq's
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" onClick={handleMobileMenu}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/appointment" onClick={handleMobileMenu}>
                        Make Appointment
                      </Link>
                    </li>
                    <li>
                      <Link href="/error-page" onClick={handleMobileMenu}>
                        Page Not Found
                      </Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Road no5,Madhapur,Hyderabad</li>
              <li>
                <Link href="tel:+91 18xx xxxx xx23">+91 18xx xxxx xx23</Link>
              </li>
              <li>
                <Link href="mailto:abc@gmail.com">abc@gmail.com</Link>
              </li>
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                {/* <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link> */}
                <FaX/>
              </li>
              <li>
                {/* <Link href="/">
                  <span className="fab fa-facebook-square"></span>
                </Link> */}
                <FaFacebook/>
              </li>
              <li>
                {/* <Link href="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link> */}
                <FaPinterest/>
              </li>
              <li>
                {/* <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link> */}
                <FaInstagram/>
              </li>
              <li>
                {/* <Link href="/l">
                  <span className="fab fa-youtube"></span>
                </Link> */}
                <FaYoutube/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
