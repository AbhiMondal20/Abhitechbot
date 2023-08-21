import React from "react";

function Testimonial() {
  return (
    <>
      <section id="testimonial" className="testimonial-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-four-wrapper">
                <div className="row">
                  <div className="col-12 col-lg-6 col-xl-4 mb-4 mb-lg-0">
                    <div className="img-overlay-full">
                      <img
                        className="testimonial-four-image"
                        src="img/testimonialFour.png"
                        alt="testimonial"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-8 testimonial-four-contents">
                    <div className="section-heading">
                      <div className="sub-heading d-flex align-items-center">
                        <img src="img/orangeDot.png" alt="orange-dot" />
                        <p>Testimonial</p>
                      </div>
                      <h2 className="black-color line-height-3 h2">
                        My Customer Say
                      </h2>
                    </div>
                    <div className="testimonial-images">
                      <img
                        className="mr-10"
                        src="img/clientOne.png"
                        alt="client "
                      />
                      <img
                        className="mr-10"
                        src="img/clientTwo.png"
                        alt="client "
                      />
                      <img
                        className="mr-10"
                        src="img/clientThree.png"
                        alt="client "
                      />
                      <img
                        className="mr-10"
                        src="img/clientFour.png"
                        alt="client"
                      />
                    </div>
                    <div className="testimonial-four-carousel mt-30">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <div className="testimonial-four-card">
                            <h5 className="h5 fw-400 line-height-6 secondary-black fst-italic">
                              “Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature fr45 BC, making it over
                              2000 years old. Richard McClintock, a Ltin
                              professor at Hampden-Sydney College. professor at
                              Hampden-Sydney College.”
                            </h5>
                            <h4 className="black-color fw-600 line-height-3 testimonial-four-name">
                              Johan Smith
                            </h4>
                            <p className="p fw-400 testimonial-four-client-title">
                              CEO, Google
                            </p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimonial-four-card">
                            <h5 className="h5 fw-400 line-height-6 secondary-black fst-italic">
                              “Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature fr45 BC, making it over
                              2000 years old. Richard McClintock, a Ltin
                              professor at Hampden-Sydney College. professor at
                              Hampden-Sydney College.”
                            </h5>
                            <h4 className="black-color fw-600 line-height-3 testimonial-four-name">
                              Johan Smith
                            </h4>
                            <p className="p fw-400 testimonial-four-client-title">
                              CEO, Google
                            </p>
                          </div>
                        </div>
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

export default Testimonial;
