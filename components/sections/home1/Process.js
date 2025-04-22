import React from "react";

export default function Process() {
  return (
    <section className="process-section sec-pad">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}
      ></div>
      <div className="shape">
        <div
          className="shape-1 float-bob-x"
          style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}
        ></div>
        {/* <div
          className="shape-2 float-bob-y"
          style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}
        ></div> */}
        <div className="shape-3"></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Process</span>
          <h2>
            🦠 Types of Healthy Bacteria (Probiotic) Products & Their Benefits
          </h2>
        </div>
        <div className="inner-container">
          <div
            className="arrow-shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}
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
                <p>Lactobacillus, Bifidobacterium, Saccharomyces boulardii</p>
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
                <img src="assets/images/Process/Fermented-Foods.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <h3>Fermented Foods</h3>
                <p>
                  Foods like kimchi, sauerkraut, miso, tempeh, and kombucha are
                  natural probiotic powerhouses.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
