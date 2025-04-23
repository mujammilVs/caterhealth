import Link from "next/link";
import React from "react";
import { MdDone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

export default function service() {
  return (
    <section className="service-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Services</span>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
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
                    <Link href="service-details-3">Lorem1</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus.
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
                    <Link href="/">Lorem2</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus.
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
                      <img src="assets/images/service/Skin-acne.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon-17"></i>
                  </div>
                </div>
                <div className="lower-content">
                  <h3>
                    <Link href="/">Lorem3</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus.
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
                      <img src="assets/images/service/Immunity.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon-17"></i>
                  </div>
                </div>
                <div className="lower-content">
                  <h3>
                    <Link href="/">Lorem4</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
