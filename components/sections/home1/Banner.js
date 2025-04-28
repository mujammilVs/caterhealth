import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="banner-section p_relative">
      <div
        className="pattern-layer wow slideInDown animated"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
        style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
      ></div>
      <div className="shape">
        <div
          className="shape-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        ></div>
        <div
          className="shape-2 float-bob-x"
          style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
        ></div>
        <div
          className="shape-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
        ></div>
        <div
          className="shape-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <span className="upper-text"></span>
              <h2>
                Caterwealth Pharmaceuticals <span> and Healthcare</span>
              </h2>
              <p>
                To become India’s most trusted nutraceutical brand by delivering
                evidence-based wellness solutions that empower people to lead
                healthier lives.{" "}
              </p>
              <div className="btn-box">
                <Link href="/#" className="theme-btn btn-two">
                  <span>Explore Our Service</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <figure className="image float-bob-y">
                <img
                  src="assets/images/resource/family-happysmile.jpeg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "480px",
                    // borderRadius: "50%",
                    // marginBottom: "100px",
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
