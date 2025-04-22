import React from "react";
import Link from "next/link";
export default function Pricing() {
  return (
    <section className="pricing-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Pricing</span>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div
              className="pricing-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="pricing-table">
                <div
                  className="shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-22.png)",
                  }}
                ></div>
                <div className="table-header">
                  <h5>Lorem ipsum</h5>
                  <h2>$lorem</h2>
                  <span>Lorem</span>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>
                <div className="table-footer">
                  <Link href="/#" className="theme-btn btn-three">
                    <span>
                      Choose Plan <i className="icon-25"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div
              className="pricing-block-one active-block wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="pricing-table">
                <div
                  className="shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-22.png)",
                  }}
                ></div>
                <div className="table-header">
                  <h5>Lorem</h5>
                  <h2>$lorem</h2>
                  <span>Lorem</span>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>

                <div className="table-footer">
                  <Link href="/#" className="theme-btn btn-three">
                    <span>
                      Choose Plan <i className="icon-25"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div
              className="pricing-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="pricing-table">
                <div
                  className="shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-22.png)",
                  }}
                ></div>
                <div className="table-header">
                  <h5>Lorem</h5>
                  <h2>$lorem</h2>
                  <span>Lorem</span>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>
                <div className="table-footer">
                  <Link href="/#" className="theme-btn btn-three">
                    <span>
                      Choose Plan <i className="icon-25"></i>
                    </span>
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
