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
                  <h2>CaterWealth Services Where Bacteria Meets Wellness.</h2>
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
                            <Link href="service-details-3">
                              <img
                                src="assets/images/service/Probiotic-Supplements.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          {/* <div className="icon-box">
                                       <i className="icon-15"></i>
                                     </div> */}
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="service-details-3">
                              Probiotic Supplements
                            </Link>
                          </h3>
                          <h6>
                            Capsules, powders, or chewables with live cultures
                            easy to take daily.
                          </h6>
                          <p>
                            Example Strains: Lactobacillus rhamnosus,
                            Bifidobacterium lactis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div
                      className="service-block-one wow fadeInUp animated"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="service-details-6">
                              <img
                                src="assets/images/service/digestive-Enzyme.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          {/* <div className="icon-box">
                                       <i className="icon-16"></i>
                                     </div> */}
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="service-details-6">
                              Digestive Enzyme Blends
                            </Link>
                          </h3>
                          <h6>
                            Probiotic blends that support digestion and nutrient
                            absorption.
                          </h6>
                          <p>
                            Key Benefit: Reduces bloating, gas, and indigestion.
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
                            <Link href="service-details">
                              <img
                                src="assets/images/service/Skin-acne.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          {/* <div className="icon-box">
                                       <i className="icon-17"></i>
                                     </div> */}
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="service-details">
                              {" "}
                              Skin & Acne Probiotic Therapies
                            </Link>
                          </h3>
                          <h6>
                            Topical or ingestible products that support skin
                            microbiome health.
                          </h6>
                          <p>Target: Eczema, acne, inflammation.</p>
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
                            <Link href="service-details-2">
                              <img
                                src="assets/images/service/Immunity.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                          {/* <div className="icon-box">
                                       <i className="icon-17"></i>
                                     </div> */}
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="service-details-2">
                              Immunity Boost Formulas
                            </Link>
                          </h3>
                          <h6>
                            Formulas enriched with bacteria strains that support
                            immune function.
                          </h6>
                          <p>
                            Example Strains: Lactobacillus casei,
                            Bifidobacterium longum
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