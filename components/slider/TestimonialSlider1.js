"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider1() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none"
      >
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                Joining this wellness program changed my life. I feel more
                energetic, happier, and healthier every single day
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3>Sarah Mitchell</h3>
                <span className="designation"> Fitness Enthusiast</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                The support and community here are unmatched. It’s not just a
                movement, it’s a lifestyle transformation.
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3>Jason Lee</h3>
                <span className="designation">Health Coach</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                Thanks to the wellness movement, I’ve adopted habits that made a
                real difference in my physical and mental health
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3>Priya Sharma</h3>
                <span className="designation">Yoga Instructor</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                If you’re serious about your health, this is where you need to
                be. Inspiring, motivating, and truly life-changing
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3>Daniel Roberts</h3>
                <span className="designation">Personal Trainer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                This journey has empowered me to take control of my health. I’m
                the best version of myself today
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3>Emily Carter</h3>
                <span className="designation">Wellness Blogger</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                {/* <i className="icon-23"></i> */}
              </div>
              <p>
                Every step with this community has been inspiring. I’ve built
                habits that I’ll carry for a lifetime.
              </p>
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/resource/doctor.png" alt="" />
                </figure>
                <ul className="rating clearfix">
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="fas fa-star"></i> */}</li>
                  <li>{/* <i className="far fa-star"></i> */}</li>
                </ul>
                <h3> Ahmed Khan</h3>
                <span className="designation">Nutrition Specialist</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
