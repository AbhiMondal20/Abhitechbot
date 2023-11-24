import React from "react";

function Banner() {
  const customStyle = {
    top: '60px', // You should use a string for the value
    position: 'relative',
  };
  return (
    <>
      <section id="home" className="home-four-banner position-relative">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-end" style={customStyle}>
                <div className="col-12 col-lg-6 col-xxl-7 home-banner-text-col position-relative">
                  <div className="d-flex align-items-center">
                    {/* <p className="fw-500 black-color text-uppercase mb-30">
                      I'm glad you're here.
                    </p> */}
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1-home-4 fw-500 ah-headline">
                      Hi 👋 I’m Abhi Solving
                      <span className="orange-color fw-700">
                        Modern
                        <span className="ah-words-wrapper">
                          <b className="is-visible">&nbsp; Problem</b>
                          <b> &nbsp; Solutions</b>
                        </span>
                      </span>
                      <br />
                      through Web Design & Development
                    </h1>
                  </div>
                  <p className="p line-height-7 mt-35 secondary-black fw-400">

                  </p>
                  <div className="mt-85">
                    <p className="p black-color fw-500 text-uppercase line-height-3">
                      
                    </p>
                    <div className="mt-3">
                      <ul className="d-flex align-items-center mt-0">
                        <li className="mr-20 home-four-banner-icon">
                          <a href="https://www.facebook.com/abhi.instas" target="_BLANK">
                            <i className="fa-brands fa-facebook-f text-white h4"></i>
                          </a>
                        </li>
                        <li className="mr-20 home-four-banner-icon">
                          <a href="https://www.instagram.com/abhi_s.insta/" target="_BLANK">
                            <i className="fa-brands fa-instagram text-white h4"></i>
                          </a>
                        </li>
                        <li className="mr-20 home-four-banner-icon">
                          <a href="https://www.youtube.com/@abhitechbot" target="_BLANK">
                            <i className="fa-brands fa-youtube text-white h4"></i>
                          </a>
                        </li>
                        <li className="mr-20 home-four-banner-icon">
                          <a href="https://dribbble.com/abhitechbot" target="_BLANK">
                            <i className="fa-brands fa-dribbble text-white h4"></i>
                          </a>
                        </li>
                        <li className="mr-20 home-four-banner-icon">
                          <a href="https://github.com/AbhiMondal20" target="_BLANK">
                            <i className="fa-brands fa-github text-white h4"></i>
                          </a>
                        </li>
                        <li className="mr-20 home-four-banner-icon">
                          <a
                            href="https://www.linkedin.com/in/abhitechbot"
                            target="_BLANK"
                          >
                            <i class="fa-brands fa-linkedin text-white h4"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-four-banner-spacer"></div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-5 text-center position-relative home-four-banner-img-col mb-5 mb-lg-0">
                  <img
                    className="img-fluid home-banner-img"
                    src="img/mypick_for_website.webp"
                    alt="banner Abhitechbot - A Full Stack Developer"
                  />
                  <img
                    className="home-four-banner-figma position-absolute zoom-in-out delay-200"
                    src="img/FigmaShape.webp"
                    alt="figma Abhitechbot - A Full Stack Developer"
                  />
                  <img
                    className="home-four-banner-experience position-absolute zoom-in-out delay-100"
                    src="img/ExperienceShape.png"
                    alt="experience Abhitechbot - A Full Stack Developer"
                  />
                  <img
                    className="home-four-banner-sketch position-absolute zoom-in-out"
                    src="img/SketchShape.webp"
                    alt="experience Abhitechbot - A Full Stack Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
