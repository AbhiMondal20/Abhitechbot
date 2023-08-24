import React from "react";

function Banner() {
  return (
    <>
      <section id="home" className="home-four-banner position-relative">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-end">
                <div className="col-12 col-lg-6 col-xxl-7 home-banner-text-col position-relative">
                  <div className="d-flex align-items-center">
                    <p className="fw-500 black-color text-uppercase mb-30">
                      I'm glad you're here.
                    </p>
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1-home-4 fw-500 ah-headline">
                      Hi 👋 I’m Abhi Solving
                      <span className="orange-color fw-700">
                        modern
                        <span className="ah-words-wrapper">
                          <b className="is-visible">problem</b>
                          <b>solutions</b>
                        </span>
                      </span>
                      <br />
                      through Web Design & Development
                    </h1>
                  </div>
                  <p className="p line-height-7 mt-35 secondary-black fw-400">
                  I'm a passionate and dedicated web developer with a strong focus on the healthcare domain. My expertise lies in crafting creative website designs and developing innovative web applications to address modern challenges. I am driven by a desire to solve problems through thoughtful design and meticulous development. My primary area of expertise revolves around the healthcare industry, where I leverage my skills to create impactful solutions. I am committed to pushing the boundaries of design and development to create meaningful and effective solutions for the healthcare sector.
                  </p>
                  <div className="mt-85">
                    <p className="p black-color fw-500 text-uppercase line-height-3">
                      Find With Me
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
                      </ul>
                    </div>
                  </div>
                  <div className="home-four-banner-spacer"></div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-5 text-center position-relative home-four-banner-img-col mb-5 mb-lg-0">
                  <img
                    className="img-fluid home-banner-img"
                    src="img/mypic.webp"
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
