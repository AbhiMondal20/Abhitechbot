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
                  src="img/mypic-web2.png"
                  alt="Abhitechbot - A Full Stack Developer"
                  style={img}
                />

                    <img
                      className="about-four-shape position-absolute rotate-360"
                      src="img/aboutFourCirclle.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                    <img
                      className="position-absolute about-four-line-shape"
                      src="img/aboutFourLineBg.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                  </div>
                  <div className="about-three-text-col col-12 col-lg-6 pl-50">
                    <div className="about-text-top">
                      <div className="section-heading">
                        <div className="sub-heading d-flex align-items-center">
                          <img src="img/orangeDot.png" alt="Abhitechbot - A Full Stack Developer" />
                          <p>About Me</p>
                        </div>
                        <h2 className="black-color line-height-3 h3">
                        Elevate Your Online Presence with AbhiTechBot's Web Design & Development Solutions
                        </h2>
                      </div>
                      <p className="secondary-black line-height-7 mt-35">
                      AbhiTechBot is your trusted partner in Siliguri solving modern problems through innovative web design and development solutions. My goal is to craft cutting-edge websites and web applications that transform your online presence. With a focus on user experience, performance, and creativity, I design and develop solutions that resonate with your audience. Let me help you stay ahead in the digital landscape. Explore AbhiTechBot for top-notch web design and development services today!
                      </p>
                    </div>
                    <div className="row row-mobile-margin gy-3 gy-sm-0 mt-35">
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color about-count-heading">
                          <span className="counter">25</span>+
                        </h4>
                        <h5 className="fw-500 black-color h5">
                          Complete Project
                        </h5>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color about-count-heading">
                          <span className="counter">20</span>+
                        </h4>
                        <h5 className="fw-500 black-color h5">
                          Clients
                        </h5>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color about-count-heading">
                          <span className="counter">20</span>+
                        </h4>
                        <h5 className="fw-500 black-color h5">
                          Client Satisfied
                        </h5>
                      </div>
                    </div>
                  </div>
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
