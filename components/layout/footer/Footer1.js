import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaX } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer" id="footer">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
          ></div>
          <div
            className="pattern-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
          ></div>
          <div className="pattern-4"></div>
        </div>
        <div className="widget-section pt_120 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src="/assets/images/caterhealth-new-logo.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                        <strong
                          style={{
                            // 'bold' should be a string
                            background:
                              "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)", // Wrap the gradient in quotes
                            WebkitBackgroundClip: "text", // Corrected the property name (camelCase for React)
                            WebkitTextFillColor: "transparent", // Corrected the property name (camelCase for React)
                          }}
                        >
                          CaterHealth
                        </strong>
                      </div>
                    </Link>
                  </figure>
                  <p>
                    Caterwealth Pharmaceuticals and Healthcare Industry Pvt Ltd
                    is a health sciences company founded in 2021. Headquartered
                    in Hyderabad, Telangana, India, the company focuses on
                    developing products aimed at restoring health.
                  </p>
                  <ul className="social-links clearfix">
                    <li>
                      <Link href="/">
                        {/* <i className="icon-4"></i> */}
                        <FaX />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        {/* <i className="icon-5"></i> */}
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        {/* <i className="icon-6"></i> */}
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        {/* <i className="icon-7"></i> */}
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_110">
                  <div className="widget-title">
                    <h3>Quick Link</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="about">About Us</Link>
                      </li>
                      <li>
                        <Link href="service">Services</Link>
                      </li>
                      <li>
                        <Link href="team">Team</Link>
                      </li>
                      <li>
                        <Link href="testimonial">Testimonial</Link>
                      </li>
                      <li>
                        <Link href="contact">Contacts Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_55">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Terms &</Link>
                      </li>
                      <li>
                        <Link href="/">Condition</Link>
                      </li>
                      <li>
                        <Link href="/">Support</Link>
                      </li>
                      <li>
                        <Link href="/">Disclaimer</Link>
                      </li>
                      <li>
                        <Link href="/">Faq</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contact us</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <img src="assets/images/icons/icon-1.png" alt="" />
                        Plot No: 01, Block No:01, Vittal Rao Nagar, Madhapur,
                        Hyderabad - 500081
                      </li>
                      <li>
                        {/* <i className="icon-2"></i> */}
                        <i>
                          {" "}
                          <MdCall />
                        </i>
                        <Link href="tel:0123456789">(+91) 70 7666 7666,</Link>
                      </li>
                      <li>
                        {/* <i className="icon-26"></i> */}
                        <i>
                          <MdEmail />
                        </i>
                        <Link href="mailto:abc@gmail.com">
                          Info@caterhealth.in
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <ul className="footer-nav clearfix">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/">Sales and Refunds</Link>
                </li>
                <li>
                  <Link href="/">Legal</Link>
                </li>
                <li>
                  <Link href="/">Site Map</Link>
                </li>
              </ul>
              <div className="copyright">
                <p>&copy; 2024 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
