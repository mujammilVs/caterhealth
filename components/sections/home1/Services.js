import Link from "next/link";
import React from "react";
import { MdDone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

export default function service() {
  return (
    <section className="service-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_80 centred">
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
                    <Link href="service-details-3"> Preventive care</Link>
                  </h3>
                  <p>
                    Building strong health foundations to prevent illness before
                    it starts.
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
                      <img src="assets/images/service/Immunity.jpg" alt="" />
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
                    Balancing the mind, body, and spirit for complete
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
                      <img src="assets/images/service/Skin-acne.jpg" alt="" />
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
                    Natural plants that help the body adapt to stress and
                    restore balance.
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
                    <Link href="/">Herbs</Link>
                  </h3>
                  <p>
                    Traditional botanical ingredients used to support natural
                    healing.
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
