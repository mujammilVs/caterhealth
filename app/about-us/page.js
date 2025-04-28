"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import Link from "next/link";
import { useState } from "react";
import { FaHeartbeat, FaHeartBroken } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { RiStethoscopeFill } from "react-icons/ri";

 const teamMembers = [
   {
     name: "Dr. Ramesh Bhatia, MD",
     role: "Gastroenterology & Digestive Wellness ",
     image: "assets/images/team/doctor1.jpg",
   },
   {
     name: "Dr. Arvind Patel, MD",
     role: "Oncology & Immunotherapy Research",
     image: "assets/images/team/doctor2.jpg",
   },
   {
     name: " Dr. Priya Sharma,PhD",
     role: "Microbiome and Women's Health",
     image: "assets/images/team/doctor3.jpg",
   },
   {
     name: "Dr. Neha Kapoor, PhD",
     role: "Skin Microbiome & Dermatology",
     image: "assets/images/team/doctor4.jpg",
   },
 ];
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us"> */}
      <Layout headerStyle={1} footerStyle={1}>
        {/* about-section */}
        <section className="about-style-two pt_120 pb_120">
          <div className="pattern-layer">
            <div
              className="pattern-1 rotate-me"
              style={{
                backgroundImage: "url(assets/images/shape/shape-8.png)",
              }}
            ></div>
            <div
              className="pattern-2 rotate-me"
              style={{
                backgroundImage: "url(assets/images/shape/shape-9.png)",
              }}
            ></div>
            <div
              className="pattern-3"
              style={{
                backgroundImage: "url(assets/images/shape/shape-11.png)",
              }}
            ></div>
            <div
              className="pattern-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-35.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box">
                    <div
                      className="shape float-bob-x"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-7.png)",
                      }}
                    ></div>
                    <div
                      className="image-shape"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-26.png)",
                      }}
                    ></div>
                    <figure className="image-2">
                      <img
                        src="assets/images/resource/family-probiotics.jpeg"
                        style={{
                          borderRadius: "100px",
                        }}
                        alt=""
                      />
                    </figure>
                    <div className="icon-one">
                      {/* <i className="icon-13"></i> */}
                      <MdHealthAndSafety />
                    </div>
                    <div className="icon-two">
                      {/* <i className="icon-14"></i> */}
                      <FaHeartbeat />
                    </div>
                    {/* <div className="text-box">
                      <h3>Lorem</h3>
                      <span>Lorem ipsum</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title mb_15">
                      <span className="sub-title">About Us</span>
                      <h3>Caterwealth Pharmaceuticals and Healthcare </h3>
                    </div>
                    <div className="text-box mb_40">
                      <h6>
                        Caterhealth is the Brand Owned by Caterwealth
                        Pharmaceuticals and Healthcare Industry Pvt Ltd a
                        cutting-edge nutraceutical brand that bridges the gap
                        between traditional wellness and modern science,
                        offering plant-based, clinically-backed supplements
                        tailored to individual health needs.
                      </h6>
                      <p>
                        This business harnesses the power of natural
                        ingredients—adaptogens, herbs, superfoods, and bioactive
                        compounds—to create targeted formulations for immunity,
                        gut health, mental clarity, and vitality.
                      </p>
                    </div>
                    <div className="btn-box">
                      <Link href="/#" className="theme-btn btn-one">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}

        {/* process */}
        <section className="process-section sec-pad bg-color-1">
          <div className="shape">
            <div
              className="shape-1 float-bob-x"
              style={{
                backgroundImage: "url(assets/images/shape/shape-20.png)",
              }}
            ></div>
            {/* <div
              className="shape-2 float-bob-y"
              style={{
                backgroundImage: "url(assets/images/shape/shape-15.png)",
              }}
            ></div> */}
            <div className="shape-3"></div>
          </div>
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Process</span>
              <h2>
                🦠 Types of Healthy Bacteria (Probiotic) Products & Their
                Benefits
              </h2>
            </div>
            <div className="inner-container">
              <div
                className="arrow-shape"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-18.png)",
                }}
              ></div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">01</span>
                  <figure className="image-box">
                    <img
                      src="assets/images/Process/Probiotic-Supplements.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <h3>Probiotic Supplements</h3>
                    <p>
                      Lactobacillus, Bifidobacterium, Saccharomyces boulardii
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">02</span>
                  <figure className="image-box">
                    <img src="assets/images/Process/Yogurt-Kefir.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3> Yogurt & Kefir</h3>
                    <p>
                      Fermented dairy (or plant-based) products packed with live
                      cultures.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">03</span>
                  <figure className="image-box">
                    <img
                      src="assets/images/Process/Fermented-Foods.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <h3>Fermented Foods</h3>
                    <p>
                      Foods like kimchi, sauerkraut, miso, tempeh, and kombucha
                      are natural probiotic powerhouses.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* process end */}

        {/* testimonial-section */}
        <section className="testimonial-section sec-pad bg-color-1">
          <div
            className="bg-layer"
            style={{
              backgroundImage:
                "url(assets/images/resource/testimonial-image.png)",
            }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                <div className="content-box p_relative ml_45">
                  <div className="sec-title mb_50">
                    <span className="sub-title">Testimonials</span>
                    <h2> 🌟Join the Wellness Movement</h2>
                  </div>
                  <div className="content-box">
                    <TestimonialSlider1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial-section */}

        {/* team-section-style-two */}
        <section className="team-section sec-pad centred bg-color-1">
          <div className="shape">
            <div
              className="shape-1 float-bob-y"
              // style={{
              //   backgroundImage: "url(assets/images/shape/shape-15.png)",
              // }}
            ></div>
            <div className="shape-2"></div>
            <div
              className="shape-3 float-bob-x"
              // style={{
              //   backgroundImage: "url(assets/images/shape/shape-16.png)",
              // }}
            ></div>
          </div>
          {/* <div className="auto-container">
            <div className="sec-title mb_50">
              <span className="sub-title">Our Team</span>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src="assets/images/team/team-1.jpg" alt="" />
                      </figure>
                      <ul className="social-links clearfix">
                        <li>
                          <Link href="/">
                            <i className="icon-4"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-5"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-6"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-7"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="team-details/">Lorem</Link>
                      </h3>
                      <span className="designation">Lorem ipsum</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src="assets/images/team/team-2.jpg" alt="" />
                      </figure>
                      <ul className="social-links clearfix">
                        <li>
                          <Link href="/">
                            <i className="icon-4"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-5"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-6"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-7"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="team-details">Lorem</Link>
                      </h3>
                      <span className="designation">Lorem ipsum</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src="assets/images/team/team-3.jpg" alt="" />
                      </figure>
                      <ul className="social-links clearfix">
                        <li>
                          <Link href="/">
                            <i className="icon-4"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-5"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-6"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-7"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="team-details">Lorem</Link>
                      </h3>
                      <span className="designation">Lorem ipsum</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src="assets/images/team/team-4.jpg" alt="" />
                      </figure>
                      <ul className="social-links clearfix">
                        <li>
                          <Link href="/">
                            <i className="icon-4"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-5"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-6"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-7"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="team-details">Lorem </Link>
                      </h3>
                      <span className="designation">Lorem ipsum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="auto-container">
            <div className="sec-title mb_50">
              <span className="sub-title">Our Team</span>
              <h3>
                CaterWealth Health Care, we work with top doctors and
                researchers to create innovative, bacteria-based solutions that
                support better health and lasting wellness.
              </h3>
            </div>
            <div className="row clearfix">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-12 team-block"
                >
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay={`${index * 200}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img
                            src={member.image}
                            alt={`${member.name}'s photo`}
                          />
                        </figure>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/#">
                              <i className="icon-4"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-5"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-6"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-7"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="team-details">{member.name}</Link>
                        </h3>
                        <span className="designation">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* team-section-style-two end */}
        {/* subscibe */}
        <section className="subscribe-section bg-color-1">
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
                            I agree to the <Link href="/">Privacy Policy.</Link>
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
      </Layout>
    </>
  );
}
