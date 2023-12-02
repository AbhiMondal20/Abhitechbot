import React from "react";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                  <h4 className="h4 fw-500 text-white mb-15">Quick Link</h4>
                  <div className="footer-col-links">
                    <ul className="footer-col-link-container-two">
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/portfolio"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/experience"
                        >
                          Experience
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                  <h4 className="h4 fw-500 text-white mb-15">Services</h4>
                  <div className="footer-col-links">
                    <ul className="footer-col-link-container-two">
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/services"
                        >
                          Web Design
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/services"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/services"
                        >
                          Mobile Development
                        </Link>
                      </li>
                      <li className="footer-link-item">
                        <Link
                          className="fw-400 p line-height-7 text-white"
                          to="/services"
                        >
                          Graph Designer
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                  <h4 className="h4 fw-500 text-white mb-15">Contact</h4>
                  <p className="p text-white line-height-7 fw-400">
                    Mangal Pandey Road
                    <br />
                    Khalpara Siliguri, West Bengal 734005
                  </p>
                  <p className="p line-height-7 fw-400 orange-color mt-10">
                    +91 8101202074
                  </p>
                  <div className="footer-social-media mt-15">
                    <ul className="footer-social-container d-flex align-items-center mt-0">
                      <li className="footer-social-item">
                        <a
                          href="https://www.facebook.com/abhi.instas"
                          target="_BLANK"
                        >
                          <i className="fa-brands fa-facebook-f text-white h5"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          href="https://www.instagram.com/abhi_s.insta/"
                          target="_BLANK"
                        >
                          <i className="fa-brands fa-instagram text-white h5"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          href="https://www.youtube.com/@abhitechbot"
                          target="_BLANK"
                        >
                          <i className="fa-brands fa-youtube text-white h5"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          href="https://dribbble.com/abhitechbot"
                          target="_BLANK"
                        >
                          <i className="fa-brands fa-dribbble text-white h5"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          href="https://github.com/AbhiMondal20"
                          target="_BLANK"
                        >
                          <i className="fa-brands fa-github text-white h5"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          href="https://www.linkedin.com/in/abhitechbot"
                          target="_BLANK"
                        >
                        <i className="fa-brands fa-linkedin text-white h5"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                  <div className="w-100">
                    <h2 className="text-white line-height-3 h2-secondary fw-700 text-start">
                      Let's Make Consultation With Me!
                    </h2>
                    <form className="row mt-35 footer-two-form">
                      <div className="col-8 col-sm-10">
                        <input
                          type="email"
                          className="form-control footer-form-input"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="col-4 col-sm-2">
                        <button
                          type="submit"
                          className="btn footer-form-btn btn_effect"
                        >
                          <img
                            className="position-relative z-1"
                            src="img/send.png"
                            alt="Abhitechbot - A Full Stack Developer form send"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-container">
                <div className="row">
                  <div className="footerbottom-left col-12 col-sm-5 col-md-6 text-start">
                    <p className="p text-white line-height-7">
                      All rights reserved &copy; 2023 Abhitechbot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/+918101202074?text=Hi%20AbhiTechBot"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

export default Footer;
