import React from 'react'
import { Link } from "react-router-dom";

function BlogDetails() {
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
                <div className="blogs-container2 row-mobile-margin mt-50">
                  <div ClassName="modal fade" id="blogModalOne" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered justify-content-center w-100">
                      <div className="border-0 rounded bg-white">
                        <div className="single-blog-details">
                          <div className="single-blog-featured-img-container row-mobile-margin mt-50">
                            <img
                              className="single-blog-featured-img img-fluid"
                              src="img/singleBlogFeatured.webp"
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
                                src="img/quotation.png"
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
                                  src="img/blogEleven.webp"
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
                                  src="img/shareBlog.png"
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