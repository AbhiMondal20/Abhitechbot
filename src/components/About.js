import React from "react";

function About() {
  const img = {
    borderRadius: "50%",
  };
  return (
    <>
      <section id="about" className="about overflow-x-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-wrapper">
                <div className="row align-items-center">
                  <div className="about-image-col col-12 col-lg-6 text-center position-relative overflow-hidden pb-3 pb-sm-5">
                    <img
                      className="img-fluid position-relative z-1"
                      src="img/photo.jpeg"
                      alt="about image"
                      style={img}
                    />
                    <img
                      className="about-four-shape position-absolute rotate-360"
                      src="img/aboutFourCirclle.png"
                      alt="circular shape"
                    />
                    <img
                      className="position-absolute about-four-line-shape"
                      src="img/aboutFourLineBg.png"
                      alt="about bg line"
                    />
                  </div>
                  <div className="about-three-text-col col-12 col-lg-6 pl-50">
                    <div className="about-text-top">
                      <div className="section-heading">
                        <div className="sub-heading d-flex align-items-center">
                          <img src="img/orangeDot.png" alt="orange-dot" />
                          <p>About Me</p>
                        </div>
                        <h2 className="black-color line-height-3 h2">
                          I specialize in crafting designs that enhance user
                          experiences, making interactions more intuitive and
                          user-friendly.
                        </h2>
                      </div>
                      <p className="secondary-black line-height-7 mt-35">
                        With a focused expertise, I excel at creating designs
                        that elevate user experiences, instilling an inherent
                        sense of intuitiveness and user-friendliness into every
                        interaction. My core proficiency lies in fashioning
                        solutions that seamlessly bridge the gap between users
                        and technology, resulting in a harmonious and enjoyable
                        digital journey.
                      </p>
                      {/* <p className="secondary-black line-height-7 mt-30">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p> */}
                    </div>
                    {/* <div className="row row-mobile-margin gy-3 gy-sm-0 mt-35">
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter">10</span>+
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Complete Project
                          </h5>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter">4</span>+
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Clients on worldwide
                          </h5>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter">32</span>+
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Client Satisfied
                          </h5>
                        </div>
                      </div>
                    </div> */}
                    <a
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                      className="btn home-banner-btn orange-btn mt-60 btn_effect"
                      href="#resume"
                    >
                      <span className="position-relative z-1">
                        Download My CV
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
