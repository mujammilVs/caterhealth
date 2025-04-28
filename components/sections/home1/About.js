import Link from "next/link";
import React from "react";
import { MdDone } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export default function about() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="pattern-layer">
        <div
          className="pattern-1 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
        ></div>
        <div
          className="pattern-2 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
        ></div>
        <div
          className="pattern-3 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
        ></div>
        <div
          className="pattern-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}
        ></div>
        <div
          className="pattern-5"
          style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}
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
                <figure className="image">
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
                  {/* <MdDone/> */}
                  <MdHealthAndSafety />
                </div>
                <div className="icon-two">
                  {/* <i className="icon-14"></i> */}

                  <FaHeartbeat />
                </div>
                <div className="text-box">
                  <h3>Cater</h3>
                  <span>wealth</span>
                </div>
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
                    between traditional wellness and modern science, offering
                    plant-based, clinically-backed supplements tailored to
                    individual health needs.
                  </h6>
                  <p>
                    This business harnesses the power of natural
                    ingredients—adaptogens, herbs, superfoods, and bioactive
                    compounds—to create targeted formulations for immunity, gut
                    health, mental clarity, and vitality.
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
  );
}
