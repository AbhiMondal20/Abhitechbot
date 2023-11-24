import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", formData); // Replace with your backend API endpoint
      console.log("Form submitted successfully", response.data);
      // You can also handle success message or redirect the user after successful submission
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error (display an error message to the user, etc.)
    }
  };

  return (
    <>
      <section id="contact" className="home-four-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-contact-wrapper">
                <div className="home-contact-info-container row align-items-center">
                  <div className="col-12 col-md-6 home-two-contact-info-col">
                    <div className="section-heading">
                      <div className="sub-heading d-flex align-items-center">
                        <img src="img/orangeDot.png" alt="Abhitechbot - A Full Stack Developer" />
                        <p>Contact Me</p>
                      </div>
                      <h2 className="black-color line-height-3 h2">
                        Need help? Get in touch now!
                      </h2>
                    </div>
                    <div className="row row-mobile-margin gy-3 gy-sm-0 row-mobile-margin mt-50">
                      <div className="col-12 d-flex align-items-center">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-phone-volume orange-color h4"></i>
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <p className="fw-400 secondary-black p">Phone</p>
                          <h4 className="fw-500 black-color h4">
                            <a href="tel:+918101202074">+91 8101202074</a>
                          </h4>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center row-mobile-margin mt-35">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-envelope orange-color h4"></i>
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <p className="fw-400 secondary-black p">Email</p>
                          <h4 className="fw-500 black-color h4">
                            <a href="mailto:abhitechbot@gmail.com">
                              abhitechbot@gmail.com
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 row-mobile-margin">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12 col-sm-6">
                          <input
                            type="textAlignLast: "
                            className="form-control home-four-contact-input"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="email"
                            className="form-control home-four-contact-input"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="tel"
                            className="form-control home-four-contact-input"
                            placeholder="Phone"
                            required
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="date"
                            className="form-control home-four-contact-input"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control home-four-contact-input home-four-textarea"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn orange-btn btn_effect"
                            >
                              <span className="position-relative z-1">
                                Send Me Message
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Contact;
