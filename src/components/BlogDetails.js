import React from 'react'
import { Link, useParams } from "react-router-dom";
import orangeDot from '../img/orangeDot.png';
import singleBlogFeatured from '../img/singleBlogFeatured.webp';
import quotation from '../img/quotation.png';
import blogEleven from '../img/blogEleven.webp';
import shareBlog from '../img/shareBlog.png';
import blogSeven from '../img/blogSeven.webp';
import IMPROVE_YOUR_BUSSINESS_DETAILS from '../img/IMPROVE_YOUR_BUSSINESS_DETAILS.png'
import appt from '../img/appt.png';
function BlogDetails() {
  const { id } = useParams();

  return (
    <>
    <br/>
      <section id="blog" className="blogs mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogs-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src={orangeDot} alt="orange-dot Abhitechbot - A Full Stack Developer" />
                    <p>Blog</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    My Recent Blog
                  </h2>
                </div>
                <div className="blogs-container2 row-mobile-margin mt-50">
                  <div ClassName="modal fade" id="blogModalOne" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered justify-content-center w-100">
                      <div className="border-0 rounded bg-white">
                        {id === '1' && (
                          <div className="single-blog-details">
                            <div className="single-blog-featured-img-container row-mobile-margin mt-50">
                              <img
                                className="single-blog-featured-img img-fluid"
                                src={appt}
                                alt="featured Abhitechbot - A Full Stack Developer"
                              />
                            </div>
                            <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-user me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  Abhi Mondal
                                </p>
                              </div>
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  24-Nov-2023
                                </p>
                              </div>
                            </div>
                            <div className="single-page-blog-title mt-20">
                              <h2 className="h2 black-color fw-700 line-height-">
                              Revolutionizing Healthcare and Business Operations The Ultimate Guide to Building an Appointment Booking System
                              </h2>
                            </div>
                            <div className="single-page-blog-content-body">
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                              In the fast-paced world we live in, convenience is key, especially when it comes to managing appointments for hospitals and businesses. As a web developer based in Siliguri, I understand the growing need for efficient systems that streamline processes and enhance user experience. In this blog post, we will delve into the intricacies of developing an Appointment Booking System, focusing on its applications in healthcare and various other industries.
                              </p>
                              <div className="blog-content-body-quotation mt-50">
                                <img
                                  className="blog-quotation-icon mb-30"
                                  src={quotation}
                                  alt="quotation Abhitechbot - A Full Stack Developer"
                                />
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Understanding the Need of An Appointment Booking System</h2><br />
                                  Appointment scheduling plays a crucial role in the smooth functioning of hospitals and businesses. Traditional methods often lead to inefficiencies, long wait times, and potential errors. A dedicated Appointment Booking System not only addresses these issues but also provides a user-friendly interface for both administrators and clients.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Key Features of an Appointment Booking System</h2><br />
                                  <b>1. User-friendly Interface: </b>
                                    A clean and intuitive interface ensures that users can easily navigate through the system. Implement a responsive design to accommodate users accessing the system from various devices.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>2. Secure User Authentication: </b>
                                  Prioritize security by implementing robust user authentication protocols. This ensures that sensitive information is protected and that only authorized personnel can access the system.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>3. Real-time Availability Updates: </b>
                                  Keep track of available slots in real-time to prevent overbooking and provide users with accurate information on appointment availability.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>4. Customizable Booking Rules: </b>
                                  Tailor the system to the specific needs of the hospital or business by incorporating customizable booking rules. This includes setting appointment durations, defining working hours, and configuring special requirements.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>5. Integration with Calendar Systems: </b>
                                  Allow seamless integration with popular calendar platforms to synchronize appointments and avoid scheduling conflicts.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>6. Reporting and Analytics: </b>
                                  Implement reporting tools to gather insights into appointment trends, peak hours, and user preferences. This data can be valuable for optimizing operations and enhancing the overall user experience.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Applications in Healthcare and Beyond </h2><br/>
                                  <b>1. Healthcare Industry: </b>
                                  Revolutionize patient care by reducing waiting times, minimizing administrative overhead, and enhancing overall healthcare efficiency.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>2. Salons and Spas: </b>
                                  Streamline appointments for beauty and wellness services, allowing clients to book their preferred time slots conveniently.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>2. Consulting Services: </b>
                                  Enable professionals in various fields, such as legal or financial consulting, to manage their appointments efficiently.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <b>3. Education Sector: </b>
                                  Facilitate the scheduling of parent-teacher meetings, student counseling sessions, and other academic-related appointments.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  Developing an Appointment Booking System is a transformative step towards enhancing operational efficiency and user satisfaction. Whether for hospitals, salons, or consulting services, a well-designed system tailored to specific needs can significantly improve the overall workflow. As a web developer in Siliguri, you have the opportunity to contribute to this technological revolution, making a positive impact on businesses and service providers in your community.
                                </blockquote>
                                <h4 className="orange-color h4 fw-600">
                                  -Abhi Mondal
                                </h4>
                              </div>
                              <div className="row mt-100 align-items-center blog-contents-check-mark">
                                <div className="col-12 col-lg-6">
                                  <img
                                    className="w-100 single-blog-inner-img"
                                    src={blogEleven}
                                    alt="blog page inner image"
                                  />
                                </div>
                                <div className="col-12 col-lg-6">
                                  <div className="single-blog-body-list pl-80">
                                    <ul className="p-0 list-unstyled">
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Understanding the client's needs and
                                          goals.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Research and analysis.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Concept development.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Sketching and prototyping.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Technical skills and software
                                          proficiency.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item-last m-0">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Communication and collaboration.
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                              AbhiTechBot is your trusted partner in Siliguri solving modern problems through innovative web design and development solutions. Our goal is to craft cutting-edge websites and web applications that transform your online presence. With a focus on user experience, performance, and creativity, our design and develop solutions that resonate with your audience. Let us help you stay ahead in the digital landscape. Explore AbhiTechBot for top-notch web design and development services today!
                              </p>
                            </div>
                            <div className="single-blog-likes d-flex align-items-center flex-column flex-sm-row mt-50">
                              <p className="p secondary-black fw-400 line-height-7 single-blog-likes-title pb-3 pb-sm-0">
                                Is this content most useful?
                              </p>
                              <div className="likes-buttons-group d-flex align-items-center">
                                <button className="likes-btn btn btn_effect d-flex align-items-start align-items-sm-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Like
                                    </span>
                                  </span>
                                </button>
                                <button className="likes-btn btn btn_effect d-flex align-items-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Dislike
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="mt-100 single-blog-social-share pl-30 pr-30 pt-40 pb-40 row">
                              <p className="p secondary-black fw-400 line-height-7 col-12 col-lg-5 pb-4 pb-lg-0">
                                <span className="black-color">Tags</span>: React Developer in Siliguri, Web Development in Siliguri, Remote Work in Siliguri,
                                Design, Mobile App Developer in Siliguri, Graphics Design in Siliguri
                              </p>
                              <div className="single-blog-social-items col-12 col-lg-7 d-flex align-items-center justify-content-lg-end flex-wrap">
                                <div className="d-flex align-items-center pb-3 pb-sm-0">
                                  <img
                                    className="me-2"
                                    src={shareBlog}
                                    alt="share Abhitechbot - A Full Stack Developer"
                                  />
                                  <a
                                    className="p secondary-black fw-400 line-height-7"
                                    href="blog.html"
                                  >
                                    Share
                                  </a>
                                </div>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://facebook.com/abhi.instas/"
                                >
                                  <i className="fa-brands fa-facebook-f orange-color h5"></i>
                                </Link>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://www.instagram.com/abhi_s.insta/"
                                >
                                  <i className="fa-brands fa-instagram orange-color h5"></i>
                                </Link>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://www.youtube.com/@abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-youtube orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://dribbble.com/abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-dribbble orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://github.com/AbhiMondal20" target="_BLANK">
                                  <i className="fa-brands fa-github orange-color h5"></i>
                                </a>
                              </div>
                            </div>
                            <div className="single-blog-comment-box">
                              <h2 className="h2 black-color line-height-3 fw-700 mb-50">
                                Leave your comment
                              </h2>
                              <form>
                                <div className="row g-4">
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="text"
                                      className="form-control home-contact-input"
                                      placeholder="Your Name"
                                    />
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="email"
                                      className="form-control home-contact-input"
                                      placeholder="Your Email"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <textarea
                                      className="form-control single-blog-comment-input"
                                      placeholder="Comment"
                                    ></textarea>
                                  </div>
                                  <div className="col-12">
                                    <div className="col-12">
                                      <button
                                        type="submit"
                                        className="btn orange-btn btn_effect row-mobile-margin mt-50"
                                      >
                                        <span className="position-relative z-1">
                                          Post Comment
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                        {id === '2' && (
                          <div className="single-blog-details">
                            <div className="single-blog-featured-img-container row-mobile-margin mt-50">
                              <img
                                className="single-blog-featured-img img-fluid"
                                src={singleBlogFeatured}
                                alt="featured Abhitechbot - A Full Stack Developer"
                              />
                            </div>
                            <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-user me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  Abhi Mondal
                                </p>
                              </div>
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  24-Nov-2023
                                </p>
                              </div>
                            </div>
                            <div className="single-page-blog-title mt-20">
                              <h2 className="h2 black-color fw-700 line-height-">
                                Abhitechbot's Odyssey as a React Developer in Siliguri
                              </h2>
                            </div>
                            <div className="single-page-blog-content-body">
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                                Welcome to the vibrant world of Abhitechbot, a React Developer based in the picturesque city of Siliguri. In this blog, we'll delve into the exhilarating journey of Abhitechbot, exploring the fascinating realm of React development and the unique experiences that come with being a tech enthusiast in the heart of Siliguri.
                              </p>
                              <div className="blog-content-body-quotation mt-50">
                                <img
                                  className="blog-quotation-icon mb-30"
                                  src={quotation}
                                  alt="quotation Abhitechbot - A Full Stack Developer"
                                />
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Embracing React: The Building Blocks of Innovation</h2><br />
                                  Abhitechbot's journey as a React Developer began with the realization that React is more than just a library; it's a dynamic ecosystem that empowers developers to build interactive and scalable user interfaces. From mastering the art of component-based architecture to diving into state management with Redux, Abhitechbot's expertise in React has become the cornerstone of numerous digital innovations.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Siliguri's Tech Landscape: A Blossoming Hub</h2><br />
                                  Nestled between the foothills of the Himalayas, Siliguri is emerging as a burgeoning tech hub, and Abhitechbot stands at the forefront of this technological renaissance. With a community of passionate developers, meetups, and collaborative spaces, Siliguri provides the perfect backdrop for Abhitechbot's endeavors in React development.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>The Power of Community: Siliguri's Developer Ecosystem</h2><br />
                                  Abhitechbot actively participates in and contributes to Siliguri's growing developer community. From organizing local meetups to sharing insights on React best practices, this developer is committed to fostering an environment of collaboration and knowledge sharing. Siliguri's tech community is not just a network; it's a supportive family that encourages growth and celebrates achievements.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Remote Work and Siliguri: A Perfect Match</h2><br />
                                  As a React Developer, Abhitechbot has embraced the remote work culture, capitalizing on the flexibility it provides. Siliguri's serene environment, coupled with a reliable internet connection, creates an ideal setting for coding marathons and brainstorming sessions. Abhitechbot's journey exemplifies how technology has transformed Siliguri into a remote work haven for developers.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Challenges and Triumphs: Abhitechbot's Professional Evolution</h2><br />
                                  Every developer faces challenges, and Abhitechbot is no exception. From tackling complex UI/UX problems to optimizing performance, the journey is not always smooth. However, each challenge is a stepping stone, and Abhitechbot's ability to navigate and overcome obstacles has been instrumental in personal and professional growth.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Looking Ahead: Abhitechbot's Vision for the Future</h2><br />
                                  As a React Developer in Siliguri, Abhitechbot envisions a future where technology continues to bridge gaps and create meaningful solutions. Whether it's developing cutting-edge web applications or contributing to open-source projects, the journey is ongoing. Abhitechbot's story serves as an inspiration for aspiring developers and a testament to the endless possibilities that lie ahead in Siliguri's thriving tech ecosystem.
                                </blockquote>
                                <h4 className="orange-color h4 fw-600">
                                  -Abhi Mondal
                                </h4>
                              </div>
                              <div className="row mt-100 align-items-center blog-contents-check-mark">
                                <div className="col-12 col-lg-6">
                                  <img
                                    className="w-100 single-blog-inner-img"
                                    src={blogEleven}
                                    alt="blog page inner image"
                                  />
                                </div>
                                <div className="col-12 col-lg-6">
                                  <div className="single-blog-body-list pl-80">
                                    <ul className="p-0 list-unstyled">
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Understanding the client's needs and
                                          goals.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Research and analysis.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Concept development.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Sketching and prototyping.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Technical skills and software
                                          proficiency.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item-last m-0">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Communication and collaboration.
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                                Abhitechbot's odyssey as a React Developer in Siliguri is a testament to the fusion of technology and local culture. From mastering React intricacies to contributing to Siliguri's tech community, the journey is a blend of innovation, collaboration, and a deep-rooted passion for code. As Siliguri's tech landscape continues to evolve, Abhitechbot stands as a symbol of the city's potential to become a tech hub where developers thrive and dreams become reality.
                              </p>
                            </div>
                            <div className="single-blog-likes d-flex align-items-center flex-column flex-sm-row mt-50">
                              <p className="p secondary-black fw-400 line-height-7 single-blog-likes-title pb-3 pb-sm-0">
                                Is this content most useful?
                              </p>
                              <div className="likes-buttons-group d-flex align-items-center">
                                <button className="likes-btn btn btn_effect d-flex align-items-start align-items-sm-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Like
                                    </span>
                                  </span>
                                </button>
                                <button className="likes-btn btn btn_effect d-flex align-items-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Dislike
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="mt-100 single-blog-social-share pl-30 pr-30 pt-40 pb-40 row">
                              <p className="p secondary-black fw-400 line-height-7 col-12 col-lg-5 pb-4 pb-lg-0">
                                <span className="black-color">Tags</span>: React Developer in Siliguri, Web Development in Siliguri, Remote Work in Siliguri,
                                Design, Mobile App Developer in Siliguri, Graphics Design in Siliguri
                              </p>
                              <div className="single-blog-social-items col-12 col-lg-7 d-flex align-items-center justify-content-lg-end flex-wrap">
                                <div className="d-flex align-items-center pb-3 pb-sm-0">
                                  <img
                                    className="me-2"
                                    src={shareBlog}
                                    alt="share Abhitechbot - A Full Stack Developer"
                                  />
                                  <a
                                    className="p secondary-black fw-400 line-height-7"
                                    href="blog.html"
                                  >
                                    Share
                                  </a>
                                </div>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://facebook.com/abhi.instas/"
                                >
                                  <i className="fa-brands fa-facebook-f orange-color h5"></i>
                                </Link>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://www.instagram.com/abhi_s.insta/"
                                >
                                  <i className="fa-brands fa-instagram orange-color h5"></i>
                                </Link>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://www.youtube.com/@abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-youtube orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://dribbble.com/abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-dribbble orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://github.com/AbhiMondal20" target="_BLANK">
                                  <i className="fa-brands fa-github orange-color h5"></i>
                                </a>
                              </div>
                            </div>
                            <div className="single-blog-comment-box">
                              <h2 className="h2 black-color line-height-3 fw-700 mb-50">
                                Leave your comment
                              </h2>
                              <form>
                                <div className="row g-4">
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="text"
                                      className="form-control home-contact-input"
                                      placeholder="Your Name"
                                    />
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="email"
                                      className="form-control home-contact-input"
                                      placeholder="Your Email"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <textarea
                                      className="form-control single-blog-comment-input"
                                      placeholder="Comment"
                                    ></textarea>
                                  </div>
                                  <div className="col-12">
                                    <div className="col-12">
                                      <button
                                        type="submit"
                                        className="btn orange-btn btn_effect row-mobile-margin mt-50"
                                      >
                                        <span className="position-relative z-1">
                                          Post Comment
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                        {id === '3' && (
                          <div className="single-blog-details">
                            <div className="single-blog-featured-img-container row-mobile-margin mt-50">
                              <img
                                className="single-blog-featured-img img-fluid"
                                src={IMPROVE_YOUR_BUSSINESS_DETAILS}
                                alt="featured Abhitechbot - A Full Stack Developer"
                              />
                            </div>
                            <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-user me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  Abhi Mondal
                                </p>
                              </div>
                              <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
                                <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                  24-Nov-2023
                                </p>
                              </div>
                            </div>
                            <div className="single-page-blog-title mt-20">
                              <h2 className="h2 black-color fw-700 line-height-">
                              Transform Your Business with Abhitechbot's Web Designing in Siliguri!
                              </h2>
                            </div>
                            <div className="single-page-blog-content-body">
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                              At Abhitechbot, we understand that a powerful online presence is essential for the success of any business. Our expert web development team in Siliguri is here to elevate your brand to new heights through innovative and user-friendly web designs.
                              </p>
                              <div className="blog-content-body-quotation mt-50">
                                <img
                                  className="blog-quotation-icon mb-30"
                                  src={quotation}
                                  alt="quotation Abhitechbot - A Full Stack Developer"
                                />
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                  <h2>Why Choose Abhitechbot for Web Designing in Siliguri?</h2><br />
                                  <b>✅ Tailored Solutions:</b> We believe in one-size-fits-one! Our web designs are customized to suit your unique business needs, ensuring a personalized and impactful online presence.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>✅ Cutting-Edge Technology:</b> Stay ahead of the competition with websites built using the latest technologies. Our developers are well-versed in the most advanced tools and frameworks.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>✅ Mobile Responsive Designs:</b> In a mobile-first era, we ensure your website looks stunning and functions seamlessly across all devices, providing an optimal user experience.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>✅ SEO Optimized:</b> Boost your online visibility with SEO-friendly designs. Our websites are structured to perform well on search engines, driving more organic traffic to your site.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>✅ E-commerce Excellence:</b> For businesses looking to sell online, our e-commerce solutions are designed to maximize conversions and provide a secure and enjoyable shopping experience.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>✅ User-Centric Approach:</b> We prioritize the user experience. Our designs are intuitive, engaging, and crafted to keep your audience captivated.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <h2>How Abhitechbot Transforms Businesses</h2><br/>
                                <b>📈 Increase Conversions:</b> Our designs are strategically crafted to turn visitors into customers, driving measurable results for your business.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>🌐 Global Reach:</b> Reach a wider audience with a website that transcends geographical boundaries. Expand your business reach beyond Siliguri.
                                </blockquote>

                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <b>💡Innovation at Every Step:</b> Abhitechbot stays at the forefront of industry trends, infusing creativity and innovation into every project.
                                </blockquote>
                                <blockquote className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                <h2>Let's Build Your Digital Success Story Together!</h2><br/>
                                Ready to take your business to the next level? Contact Abhitechbot today for unparalleled web designing services in Siliguri. We bring your vision to life, pixel by pixel, for a digital presence that leaves a lasting impression.
                                </blockquote>
                                <h4 className="orange-color h4 fw-600">
                                  ~Abhi Mondal
                                </h4>
                              </div>
                              <div className="row mt-100 align-items-center blog-contents-check-mark">
                                <div className="col-12 col-lg-6">
                                  <img
                                    className="w-100 single-blog-inner-img"
                                    src={blogEleven}
                                    alt="blog page inner image"
                                  />
                                </div>
                                <div className="col-12 col-lg-6">
                                  <div className="single-blog-body-list pl-80">
                                    <ul className="p-0 list-unstyled">
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Understanding the client's needs and
                                          goals.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Research and analysis.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Concept development.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Sketching and prototyping.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Technical skills and software
                                          proficiency.
                                        </p>
                                      </li>
                                      <li className="d-flex align-items-center single-blog-body-list-item-last m-0">
                                        <i className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                        <p className="h4 text-black fw-600">
                                          Communication and collaboration.
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <p className="p secondary-black fw-400 line-height-7 mt-50">
                                Abhitechbot's odyssey as a React Developer in Siliguri is a testament to the fusion of technology and local culture. From mastering React intricacies to contributing to Siliguri's tech community, the journey is a blend of innovation, collaboration, and a deep-rooted passion for code. As Siliguri's tech landscape continues to evolve, Abhitechbot stands as a symbol of the city's potential to become a tech hub where developers thrive and dreams become reality.
                              </p>
                            </div>
                            <div className="single-blog-likes d-flex align-items-center flex-column flex-sm-row mt-50">
                              <p className="p secondary-black fw-400 line-height-7 single-blog-likes-title pb-3 pb-sm-0">
                                Is this content most useful?
                              </p>
                              <div className="likes-buttons-group d-flex align-items-center">
                                <button className="likes-btn btn btn_effect d-flex align-items-start align-items-sm-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Like
                                    </span>
                                  </span>
                                </button>
                                <button className="likes-btn btn btn_effect d-flex align-items-center me-4">
                                  <span className="position-relative z-1">
                                    <i className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                    <span className="p black-color fw-400 line-height-7">
                                      Dislike
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="mt-100 single-blog-social-share pl-30 pr-30 pt-40 pb-40 row">
                              <p className="p secondary-black fw-400 line-height-7 col-12 col-lg-5 pb-4 pb-lg-0">
                                <span className="black-color">Tags</span>: React Developer in Siliguri, Web Development in Siliguri, Remote Work in Siliguri,
                                Design, Mobile App Developer in Siliguri, Graphics Design in Siliguri
                              </p>
                              <div className="single-blog-social-items col-12 col-lg-7 d-flex align-items-center justify-content-lg-end flex-wrap">
                                <div className="d-flex align-items-center pb-3 pb-sm-0">
                                  <img
                                    className="me-2"
                                    src={shareBlog}
                                    alt="share Abhitechbot - A Full Stack Developer"
                                  />
                                  <a
                                    className="p secondary-black fw-400 line-height-7"
                                    href="blog.html"
                                  >
                                    Share
                                  </a>
                                </div>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://facebook.com/abhi.instas/"
                                >
                                  <i className="fa-brands fa-facebook-f orange-color h5"></i>
                                </Link>
                                <Link
                                  className="pl-30 pb-3 pb-sm-0"
                                  to="https://www.instagram.com/abhi_s.insta/"
                                >
                                  <i className="fa-brands fa-instagram orange-color h5"></i>
                                </Link>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://www.youtube.com/@abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-youtube orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://dribbble.com/abhitechbot" target="_BLANK">
                                  <i className="fa-brands fa-dribbble orange-color h5"></i>
                                </a>
                                <a className="pl-30 pb-3 pb-sm-0" href="https://github.com/AbhiMondal20" target="_BLANK">
                                  <i className="fa-brands fa-github orange-color h5"></i>
                                </a>
                              </div>
                            </div>
                            <div className="single-blog-comment-box">
                              <h2 className="h2 black-color line-height-3 fw-700 mb-50">
                                Leave your comment
                              </h2>
                              <form>
                                <div className="row g-4">
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="text"
                                      className="form-control home-contact-input"
                                      placeholder="Your Name"
                                    />
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <input
                                      type="email"
                                      className="form-control home-contact-input"
                                      placeholder="Your Email"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <textarea
                                      className="form-control single-blog-comment-input"
                                      placeholder="Comment"
                                    ></textarea>
                                  </div>
                                  <div className="col-12">
                                    <div className="col-12">
                                      <button
                                        type="submit"
                                        className="btn orange-btn btn_effect row-mobile-margin mt-50"
                                      >
                                        <span className="position-relative z-1">
                                          Post Comment
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
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
  )
}

export default BlogDetails