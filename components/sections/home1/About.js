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
                  <MdHealthAndSafety/>
                </div>
                <div className="icon-two">
                  {/* <i className="icon-14"></i> */}
                
<FaHeartbeat/>
                </div>
                <div className="text-box">
                  <h3>Lorem</h3>
                  <span>Lorem</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <span className="sub-title">About Us</span>
                  <h2>Lorem</h2>
                </div>
                <div className="text-box mb_40">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus.
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor. Cras elementum
                    ultrices diam. Maecenas ligula massa, varius a, semper
                    congue, euismod non, mi.
                  </p>
                  <ul className="list-style-one clearfix">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    
                  </ul>
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
