import Link from "next/link";
import React from "react";
import { MdDone } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";


export default function chooseus() {
  return (
    <section className="chooseus-section">
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(assets/images/resource/about.jpg)",
        }}
      ></div>
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">Why Choose Us</span>
                <h2>Lorem ipsum</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-18"></i> */}
                        {/* <MdDone/> */}
<FaUserNurse/>
                      </div>
                      <h3>Lorem ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-21"></i> */}
                        {/* <MdDone/> */}
                        <FaMedkit/>
                      </div>
                      <h3>Lorem ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-19"></i> */}
                        <MdDone/>
                      </div>
                      <h3>Lorem ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* <i className="icon-20"></i> */}
                        {/* <MdDone/> */}
                        <RiCustomerService2Fill/>
                      </div>
                      <h3>Lorem ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
