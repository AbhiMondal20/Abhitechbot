import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function Gallery() {
    return (
        <>
            <section className="partners-four">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="partners-wrapper">
                                <div className="section-heading-middle">
                                    <div className="sub-heading d-flex align-items-center mx-auto">
                                        <img src="img/orangeDot.png" alt="orange-dot" />
                                        <p>Gallery</p>
                                    </div>
                                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                        My Gallery
                                    </h2>
                                </div>
                                <div className="partner-four-grid-list-container row-mobile-margin mt-50">
                                    <div className="w-100">
                                        <OwlCarousel
                                            className="owl-theme"
                                            loop
                                            margin={10}
                                            nav
                                            autoplay
                                            autoplayTimeout={2000} // Adjust timeout as needed (in milliseconds)
                                            items={3} // Display one item at a time
                                        >
                                            <div className="item">
                                                <div className="partner-logo-card-two">
                                                    <img className="text-center partner-img" src="img/PMP.png" alt="Abhitechbot Gallery" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="partner-logo-card-two">
                                                    <img className="text-center partner-img" src="img/partnerLogoFour.png" alt="Abhitechbot Gallery" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="partner-logo-card-two">
                                                    <img className="text-center partner-img" src="img/partnerLogoOne.png" alt="Abhitechbot Gallery" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="partner-logo-card-two">
                                                    <img className="text-center partner-img" src="img/partnerLogoSix.png" alt="Abhitechbot Gallery" />
                                                </div>
                                            </div>
                                            {/* Add similar divs for other images */}
                                        </OwlCarousel>
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

export default Gallery;
