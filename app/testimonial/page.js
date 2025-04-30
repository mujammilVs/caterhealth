import Layout from "@/components/layout/Layout";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
export default function Home() {
  const getTestimonialName = (index) => {
    // Replace with actual names based on the index or fetch from a data source
    const names = [
      "Sarah Mitchell ",
      "Jason Lee ",
      "Priya Sharma ",
      " Daniel Roberts",
      "Emily Carter",
      "Ahmed Khan",
    ];
    return names[index - 1] || "Unknown";
  };
  const getTestimonialContent = (index) => {
    const testimonials = [
      "Joining this wellness program changed my life. I feel more energetic, happier, and healthier every single day!",
      "The support and community here are unmatched. It’s not just a movement, it’s a lifestyle transformation.",
      "Thanks to the wellness movement, I’ve adopted habits that made a real difference in my physical and mental health.",
      "If you’re serious about your health, this is where you need to be. Inspiring, motivating, and truly life-changing!",
      "This journey has empowered me to take control of my health. I’m the best version of myself today.",
      "Every step with this community has been inspiring. I’ve built habits that I’ll carry for a lifetime.",
       "From the very first day, I felt supported and encouraged. My mindset and health have completely transformed.",

    ];
    return testimonials[index] || "No testimonial available.";
  };

  const getTestimonialDesignation = (index) => {
    // Replace with actual designations based on the index or fetch from a data source
    const designations = [
      " Fitness Enthusiast",
      " Health Coach",
      "Yoga Instructor",
      "Personal Trainer",
      "Wellness Blogger",
      "Nutrition Specialist",
    ];
    return designations[index - 1] || "Unknown Designation";
  };

  return (
    <>
      {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Testimonial"> */}
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="testimonial-page-section sec-pad-2">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Repeat the testimonial blocks for each testimonial */}
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-12 testimonial-block"
                  >
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          {/* <i className="icon-23"></i> */}
                        </div>
                        {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p> */}
                        <p className="text-gray-700 text-base">
                          {getTestimonialContent(index)}
                        </p>

                        <div className="author-box">
                          <figure className="author-thumb">
                            <img
                              src={`assets/images/team/doctor${index}.jpg`}
                              alt=""
                            />
                          </figure>
                          {/* <ul className="rating clearfix">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul> */}
                          {/* Replace the names and designations dynamically */}
                          <h3>{getTestimonialName(index)}</h3>
                          <span className="designation">
                            {getTestimonialDesignation(index)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-wrapper mt_20 centred">
                <ul className="pagination clearfix">
                  <li>
                    <Link href="testimonials" className="current">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link href="testimonials">2</Link>
                  </li>
                  <li>
                    <Link href="testimonials">3</Link>
                  </li>
                  <li>
                    <Link href="testimonials">3</Link>
                  </li>
                  <li>
                    <Link href="testimonials">
                      {/* <i className="icon-36"></i> */}
                      <MdKeyboardArrowRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* subscibe */}
          <section className="subscribe-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                    <div className="text-box">
                      <h2>
                        <span>Subscribe</span> for the exclusive updates!
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <div className="form-inner">
                      <form method="post" action="contact">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                          />
                          <button type="submit" className="theme-btn btn-one">
                            <span>Subscribe Now</span>
                          </button>
                        </div>
                        <div className="form-group">
                          <div className="check-box">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox1"
                            />
                            <label htmlFor="checkbox1">
                              I agree to the{" "}
                              <Link href="/">Privacy Policy.</Link>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* subscibe end */}
        </div>
      </Layout>
    </>
  );
}
