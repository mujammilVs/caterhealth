'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
      <>
        {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Services"> */}
        <Layout headerStyle={1} footerStyle={1}>
          <div>
            {/* service-style-two */}
            <section className="service-section sec-pad">
              <div className="auto-container">
                <div className="sec-title mb_50 centred">
                  <span className="sub-title">Our Services</span>
                  <h2> natural ingredients</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div
                      className="service-block-one wow fadeInUp animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/">
                              <img
                                src="assets/images/service/Probiotic-Supplements.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <div className="icon-box">
                            <i className="icon-15"></i>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="service-details-3">
                              {" "}
                              Preventive care
                            </Link>
                          </h3>
                          <p>
                            Building strong health foundations to prevent
                            illness before it starts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div
                      className="service-block-one wow fadeInUp animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            {/* <Link href="service-details-6"> */}
                            <Link href="/">
                              <img
                                src="assets/images/service/Immunity.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <div className="icon-box">
                            <i className="icon-16"></i>
                            {/* <FaUserDoctor/> */}
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="/">Holistic </Link>
                          </h3>
                          <p>
                            Balancing the mind, bodyand spirit for complete
                            well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div
                      className="service-block-one wow fadeInUp animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/">
                              <img
                                src="assets/images/service/Skin-acne.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <div className="icon-box">
                            <i className="icon-17"></i>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="/">Adaptogens</Link>
                          </h3>
                          <p>
                            Natural plants that help the body adapt to stress
                            and restore balance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div
                      className="service-block-one wow fadeInUp animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/">
                              <img
                                src="assets/images/service/Immunity.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <div className="icon-box">
                            <i className="icon-17"></i>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="/">Herbs</Link>
                          </h3>
                          <p>
                            Traditional botanical ingredients used to support
                            natural healing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* service-style-two end */}
            {/* subscibe */}
            {/* <section className="subscribe-section">
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
            </section> */}
            {/* subscibe end */}
          </div>
        </Layout>
      </>
    );
}