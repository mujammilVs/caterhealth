import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

export default function Home() {
  const teamMembers = [
    {
      name: "Prof. Benoit Chassaing, PhD",
      role: "Mucosal Immunology ",
      image: "assets/images/team/Doctor1.jpg",
    },
    {
      name: "Prof. Philippe Marteau, MD, PhD",
      role: "Gastroenterology",
      image: "assets/images/team/Doctor2.jpg",
    },
    {
      name: "Dr. Laurence Zitvogel, MD, PhD",
      role: "Oncology & Immunology",
      image: "assets/images/team/Doctor3.jpg",
    },
    {
      name: "Dr. Anne-Marie Cassard, PhD",
      role: "Microbiome & Liver Disease",
      image: "assets/images/team/Doctor4.jpg",
    },
  ];
  return (
    <>
      {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team"> */}
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          {/* <section className="team-section sec-pad-2 centred">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Black Marvin</Link></h3>
                                    <span className="designation">Medical Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Eleanor Pena</Link></h3>
                                    <span className="designation">Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Arlene Maccy</Link></h3>
                                    <span className="designation">Nursing Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Senior Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-9.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jerome Bell</Link></h3>
                                    <span className="designation">Cardiologist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-10.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Guy Hawkins</Link></h3>
                                    <span className="designation">Pathologist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-11.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Courtney Henry</Link></h3>
                                    <span className="designation">Pathologist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-12.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Ralph Edwards</Link></h3>
                                    <span className="designation">Ophthalmologist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper mt_20 centred">
                    <ul className="pagination clearfix">
                        <li><Link href="team" className="current">1</Link></li>
                        <li><Link href="team">2</Link></li>
                        <li><Link href="team">3</Link></li>
                        <li><Link href="team"><i className="icon-36"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section> */}
          <section className="team-section sec-pad centred">
            <div className="pattern-layer">
              <div
                className="pattern-1"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-13.png)",
                }}
              ></div>
              <div
                className="pattern-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-14.png)",
                }}
              ></div>
            </div>
            <div className="shape">
              <div
                className="shape-1 float-bob-y"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-15.png)",
                }}
              ></div>
              <div className="shape-2"></div>
              <div
                className="shape-3 float-bob-x"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-16.png)",
                }}
              ></div>
            </div>
            <div className="auto-container">
              <div className="sec-title mb_50">
                <span className="sub-title">Our Team</span>
                <h2>
                  Connecting with Leading Doctors in Paris to Explore
                  Innovations in Healthy Bacteria Research
                </h2>
              </div>
              <div className="row clearfix">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-12 team-block"
                  >
                    <div
                      className="team-block-one wow fadeInUp animated"
                      data-wow-delay={`${index * 200}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={member.image}
                              alt={`${member.name}'s photo`}
                            />
                          </figure>
                          <ul className="social-links clearfix">
                            <li>
                              <Link href="/#">
                                {/* <i className="icon-4"></i> */}
                                <FaLinkedin/>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                {/* <i className="icon-5"></i> */}
                                <FaX/>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                {/* <i className="icon-6"></i> */}
                                <FaInstagram/>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                {/* <i className="icon-7"></i> */}
                                <FaFacebook/>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="team-details">{member.name}</Link>
                          </h3>
                          <span className="designation">{member.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
