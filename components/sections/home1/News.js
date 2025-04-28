import React from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
export default function News() {
  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Blog</span>
          <h2>Our blogs explore the power of healthy bacteria.</h2>
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
                  {/* <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul> */}
                  <h3>
                    <Link href="/">
                      Probiotics linked to reduced negative feelings, offering
                      potential mental health benefits.
                    </Link>
                  </h3>
                  <p>
                    Research by Katerina Johnson and Laura Steenbergen published
                    in the journal npj Mental Health Research shows that taking
                    probiotics can help reduce negative feelings.they
                    investigated which people benefit most from these "good"
                    bacteria.
                  </p>
                  <div className="link">
                    <Link href="/">
                      {/* <span>Read More</span> */}
                      <span>Read More </span>
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
                  {/* <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul> */}
                  <h3>
                    <Link href="/">
                      Probiotic bacteria found in yogurt, kefir may help improve
                      mood.
                    </Link>
                  </h3>
                  <p>
                    Researchers at the University of Virginia School of Medicine
                    have discovered how Lactobacillus — a probiotic bacteria
                    found in yogurt and kefir — assists the body in managing
                    stress, potentially offering new avenues for combating
                    mental health disorders like anxiety and depression.
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
                  {/* <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="/">Lorem</Link>
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul> */}
                  <h3>
                    <Link href="/">
                      Probiotic Fermented Foods Are Taking Over the Wellness
                      World
                    </Link>
                  </h3>
                  <p>
                    Fermented foods like yogurt, kefir, sauerkraut, kimchi,
                    miso, and kombucha are taking center stage in modern health
                    trends—not just for their flavor, but for their rich
                    probiotic content that supports gut health, boosts immunity,
                    enhances mental clarity, and promotes radiant skin.
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
