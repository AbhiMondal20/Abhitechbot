import React from "react";

function Blog() {
  return (
    <>
      <section id="blog" className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogs-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot Abhitechbot - A Full Stack Developer" />
                    <p>Blog</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    My Recent Blog
                  </h2>
                </div>
                <div className="blogs-container row-mobile-margin mt-50">
                  <div className="card blog-three-card">
                    <div className="img-overlay">
                      <img src="img/blogSeven.webp" className="card-img-top img-fluid blog-card-three-img" alt="blog Abhitechbot - A Full Stack Developer" />
                    </div>
                    <div className="card-body blog-card-two-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="blog-card-category orange-color fw-500 text-uppercase">
                          Appointment Booking System
                        </p>
                        <div className="d-flex align-items-center blog-time-container">
                          <img src="img/timeIcon.png" alt=" time Abhitechbot - A Full Stack Developer" />
                          <p className="ms-2 p fw-400 secondary-black line-height-6 text-capitalize">
                            01-Nov-2023
                          </p>
                        </div>
                      </div>
                      <a href="#">
                        <span className="card-four-title h3 fw-600 line-height-3 black-color">
                          Streamlining Your Business with an Appointment Booking System
                        </span>
                      </a>
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

export default Blog;
