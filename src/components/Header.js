import React from "react";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-white header">
        <div className="mobile-menu d-block d-md-none">
          <nav>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="container d-none d-md-block">
          <div className="header-wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img src="img/atblogo_350-100.png" alt="logo" />
              </Link>
            </div>
            <div className="header-menu-wrapper main-menu">
              <nav className="desktop-nav">
                <ul className="header-menu d-flex flex-row justify-content-center menu">
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/">Home</Link>
                  </li>
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/about">About</Link>
                  </li>
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/services">Services</Link>
                  </li>
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/experience">Experience</Link>
                  </li>
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="px-2 px-lg-3">
                    <Link className="menu-link" to="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn-wrapper">
              <Link className="btn orange-btn btn_effect" to="/contact">
                <span className="z-1 position-relative">contact Me</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
