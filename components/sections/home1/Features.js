import Link from "next/link";
import React from "react";

export default function feature() {
  return (
    <section className="feature-section pt_120 pb_90">
      <div
        className="shape"
        style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    src="assets/images/gallery/Probiotic-Specialists.png"
                    alt=""
                  />{" "}
                </div>
                <h3>
                  <Link href="/">Essencial</Link>
                </h3>
                <p>
                  Good sleep and healthy food are essential for a strong body
                  and gut health.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    src="assets/images/gallery/Support-Delivery.png"
                    alt=""
                  />
                </div>{" "}
                {/* <div className="icon-box">
                  <i className="icon-10"></i>
                </div> */}
                <h3>
                  <Link href="/">Code - M</Link>
                </h3>
                <p>
                  Code-M represents a powerful formula designed for men’s
                  vitality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    src="assets/images/gallery/Next-Gen-Bacterial.png"
                    alt=""
                  />
                </div>
                <h3>
                  <Link href="/">Super Strength CH-1</Link>
                </h3>
                <p>Boosts your energy and endurance</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img src="assets/images/gallery/Body-Wellness.png" alt="" />
                </div>
                <h3>
                  <Link href="/">Epicenter</Link>
                </h3>
                <p>
                  The epicenter of the new health revolution starts with better
                  gut care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
