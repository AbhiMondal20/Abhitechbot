import React from "react";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot Abhitechbot - A Full Stack Developer" />
                    <p>Portfolio</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    Some Recent Work
                  </h2>
                </div>
                <div className="mt-50 row-mobile-margin">
                  {/* <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".all"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".ui"
                    >
                      UI/Ux Design
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".graphic"
                    >
                      Graphic Design
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".app"
                    >
                      App Development
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".web"
                    >
                      Web Design
                    </button>
                  </div> */}
                  <div className="portfolio-massonary-container">
                    <div className="portfolio-massonary-four-items mix ui all position-relative">
                      <div
                        className="modal fade"
                        id="recentModalSix"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <img
                              className="img-fluid"
                              src="img/recentSix.png"
                              alt="portfolio Abhitechbot - A Full Stack Developer" 
                            />
                          </div>
                        </div>
                      </div>
                      <div className="img-overlay-full">
                        <img
                          className="img-fluid"
                          src="img/recentSix.png"
                          alt="portfolio Abhitechbot - A Full Stack Developer"
                        />
                      </div>
                      <div className="w-100 justify-content-center align-items-center pt-15">
                        <p className="secondary-black fw-400 line-height-7 text-uppercase">
                          Graphic Design
                        </p>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#recentModalSix"
                          href="#recentModalSix"
                          className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                        >
                          The best way to impress your web
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-massonary-four-items mix graphic all position-relative">
                      <div
                        className="modal fade"
                        id="recentModalSeven"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <img
                              className="img-fluid"
                              src="img/recentSeven.png"
                              alt="portfolio Abhitechbot - A Full Stack Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="img-overlay-full">
                        <img
                          className="img-fluid"
                          src="img/recentSeven.png"
                          alt="portfolio Abhitechbot - A Full Stack Developer"
                        />
                      </div>
                      <div className="w-100 justify-content-center align-items-center pt-15">
                        <p className="secondary-black fw-400 line-height-7 text-uppercase">
                          Mobile Design
                        </p>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#recentModalSeven"
                          href="#recentModalSeven"
                          className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                        >
                          Case Study - Project the best way to impress your web
                          application.
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-massonary-four-items mix ui graphic all position-relative">
                      <div
                        className="modal fade"
                        id="recentModalEight"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <img
                              className="img-fluid"
                              src="img/recentEight.png"
                              alt="portfolio Abhitechbot - A Full Stack Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="img-overlay-full">
                        <img
                          className="img-fluid"
                          src="img/recentEight.png"
                          alt="portfolio Abhitechbot - A Full Stack Developer"
                        />
                      </div>
                      <div className="w-100 justify-content-center align-items-center pt-15">
                        <p className="secondary-black fw-400 line-height-7 text-uppercase">
                          Development
                        </p>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#recentModalEight"
                          href="#recentModalEight"
                          className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                        >
                          Cryptocurrency futuristic project.
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-massonary-four-items mix web all position-relative">
                      <div
                        className="modal fade"
                        id="recentModalNine"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <img
                              className="img-fluid"
                              src="img/recentNine.png"
                              alt="portfolio Abhitechbot - A Full Stack Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="img-overlay-full">
                        <img
                          className="img-fluid"
                          src="img/recentNine.png"
                          alt="portfolio Abhitechbot - A Full Stack Developer"
                        />
                      </div>
                      <div className="w-100 justify-content-center align-items-center pt-15">
                        <p className="secondary-black fw-400 line-height-7 text-uppercase">
                          Mobile Design
                        </p>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#recentModalNine"
                          href="#recentModalNine"
                          className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                        >
                          Project creativ digital agency ts.
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-massonary-four-items mix app all position-relative">
                      <div
                        className="modal fade"
                        id="recentModalTen"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <img
                              className="img-fluid"
                              src="img/recentTen.png"
                              alt="portfolio Abhitechbot - A Full Stack Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="img-overlay-full">
                        <img
                          className="img-fluid"
                          src="img/recentTen.png"
                          alt="portfolio Abhitechbot - A Full Stack Developer"
                        />
                      </div>
                      <div className="w-100 justify-content-center align-items-center pt-15">
                        <p className="secondary-black fw-400 line-height-7 text-uppercase">
                          Ios Design
                        </p>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#recentModalTen"
                          href="#recentModalTen"
                          className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                        >
                          Project creative business tas.
                        </a>
                      </div>
                    </div>
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

export default Portfolio;
