import React from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
export default function News() {
  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Blog</span>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="/">
                    <img src="assets/images/news/news-1.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  <h3>
                    <Link href="/">Lorem ipsum ?</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor.
                  </p>
                  <div className="link">
                    <Link href="/">
                      {/* <span>Read More</span> */}
                      <span>Read More  </span>
                    

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="/">
                    <img src="assets/images/news/probiotics-news.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  <h3>
                    <Link href="/">Lorem ipsum ?</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor.
                  </p>
                  <div className="link">
                    <Link href="/">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="/">
                    <img src="assets/images/news/news-3.png" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  <h3>
                    <Link href="/">Lorem ipsum ?</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor.
                  </p>
                  <div className="link">
                    <Link href="/">
                      <span>Read More</span>
                    </Link>
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
