import React from "react";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaX, FaYoutube } from "react-icons/fa6";
export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Ramesh Bhatia, MD",
      role: "Gastroenterology & Digestive Wellness ",
      image: "assets/images/team/doctor1.jpg",
    },
    {
      name: "Dr. Arvind Patel, MD",
      role: "Oncology & Immunotherapy Research",
      image: "assets/images/team/doctor2.jpg",
    },
    {
      name: " Dr. Priya Sharma,PhD",
      role: "Microbiome and Women's Health",
      image: "assets/images/team/doctor3.jpg",
    },
    {
      name: "Dr. Neha Kapoor, PhD",
      role: "Skin Microbiome & Dermatology",
      image: "assets/images/team/doctor4.jpg",
    },
  ];

  return (
    <section className="team-section sec-pad centred">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
        ></div>
      </div>
      <div className="shape">
        <div
          className="shape-1 float-bob-y"
          style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}
        ></div>
        <div className="shape-2"></div>
        <div
          className="shape-3 float-bob-x"
          style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Team</span>
          <h3>
            CaterWealth Health Care, we work with top doctors and researchers to
            create innovative, bacteria-based solutions that support better
            health and lasting wellness.
          </h3>
        </div>
        <div className="row clearfix">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay={`${index * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={member.image} alt={`${member.name}'s photo`} />
                    </figure>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="/#">
                          {/* <i className="icon-4"></i> */}
                          <FaYoutube />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          {/* <i className="icon-5"></i> */}
                          <FaX />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          {/* <i className="icon-6"></i> */}
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          {/* <i className="icon-7"></i> */}
                          <FaPinterest />
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
  );
}
