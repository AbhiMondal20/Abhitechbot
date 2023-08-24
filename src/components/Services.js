import React from "react";

function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot Abhitechbot - A Full Stack Developer" />
                    <p>Services</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    My Services
                  </h2>
                </div>
                <div className="service-grid-container mt-50 row-mobile-margin">
                  <div className="service-grid-item text-start">
                    <img
                      className="service-item-img"
                      src="img/serviceNine.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                    <h3 className="h3 fw-500 service-item-heading black-color">
                      Web Design
                    </h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Transforming visions into captivating web experiences.
                      Creative web designer with 2.5 years of expertise.
                    </p>
                  </div>
                  <div className="service-grid-item text-start">
                    <img
                      className="service-item-img"
                      src="img/serviceTen.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                    <h3 className="h3 fw-500 service-item-heading black-color">
                      Web Development
                    </h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Explore modern trends in Web Development. Stay updated
                      with the latest tools, frameworks, and techniques.
                    </p>
                  </div>
                  <div className="service-grid-item text-start">
                    <img
                      className="service-item-img"
                      src="img/serviceEleven.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                    <h3 className="h3 fw-500 service-item-heading black-color">
                      Mobile Development
                    </h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Mobile Development is evolving rapidly, with new trends
                      and tools. In the last 6 months, advancements have been
                      remarkable.
                    </p>
                  </div>
                  <div className="service-grid-item text-start">
                    <img
                      className="service-item-img"
                      src="img/graph.png"
                      alt="Abhitechbot - A Full Stack Developer"
                    />
                    <h3 className="h3 fw-500 service-item-heading black-color">
                      Graph Designer
                    </h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Experienced Graph Designer with creative flair. Produced
                      captivating visuals in the last 2 years."
                    </p>
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

export default Services;
