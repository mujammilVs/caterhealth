import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { MdCall, MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <>
      {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us"> */}
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          {/* Contact Form Section */}
          <section className="contact-info-section  mt_40 pt_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Quick Contact</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-2"></i> */}
                        <MdCall />
                      </div>
                      <p>
                        Main Office: <br />
                        <Link href="tel:7076667666">
                          (+91)70 7666 7666
                        </Link>,{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Email Address</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-26"></i> */}
                        <MdEmail />
                      </div>
                      <p>
                        Mail: <br />
                        <Link href="mailto:abc@gmail.com">
                          Info@caterhealth.in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Mailing Address</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="assets/images/icons/icon-2.png" alt="" />
                      </div>
                      <p>
                        Plot No: 01, Block No:01, Vittal Rao Nagar, Madhapur,
                        Hyderabad - 500081
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section End */}
          {/* Contact Form Section2 */}
          <section className="contact-style-three pt_90 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                  <div className="form-inner mr_40">
                    <div className="sec-title mb_50">
                      <h2>Send a Message</h2>
                    </div>
                    <form
                      method="post"
                      action="sendemail.php"
                      id="contact-form"
                      className="default-form"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            required
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            className="theme-btn btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="assets/images/resource/contact-doctor.jpg"
                      alt=""
                      style={{
                        height: "500px",
                        width: "100%",
                        marginTop: "100px",
                      }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section2 End */}

          {/* Google Map Section */}
          <section className="google-map-section">
            {/*Map Outer*/}
            <div className="map-inner">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2912000418796!2d78.38901877493615!3d17.445771083451334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9183fcc99575%3A0xf9358a5a5eabc95!2sVLACK%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1745232151411!5m2!1sen!2sin"
                width="600"
                height={570}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.856509135734!2d78.381477!3d17.437486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e3ae31fd2b%3A0xadb594d8d1c2e7dc!2sp%2016%2C%2001%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081%2C%20India!5e0!3m2!1sen!2sus!4v1745841602090!5m2!1sen!2sus"
                width="600"
                height={450}
                style={{ border: 0, width: "100%" }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
          {/* Google Map Section End */}
          {/* subscibe */}
          <section className="subscribe-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                    <div className="text-box">
                      <h2>
                        <span>Subscribe</span> for the exclusive updates!
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <div className="form-inner">
                      <form method="post" action="contact">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                          />
                          <button type="submit" className="theme-btn btn-one">
                            <span>Subscribe Now</span>
                          </button>
                        </div>
                        <div className="form-group">
                          <div className="check-box">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox1"
                            />
                            <label htmlFor="checkbox1">
                              I agree to the{" "}
                              <Link href="/">Privacy Policy.</Link>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* subscibe end */}
        </div>
      </Layout>
    </>
  );
}
