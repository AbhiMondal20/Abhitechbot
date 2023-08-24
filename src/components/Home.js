import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
// import Testimonial from './Testimonial'
// import Partners from './Partners'
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Resume />
      <Portfolio />
      {/* <Testimonial/> */}
      {/* <Partners/> */}
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;