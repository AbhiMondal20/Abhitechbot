import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Blog from '../Blog';
import Footer from '../Footer';

function BlogPage() {
    return (
        <>
            <Helmet>
                <meta http-equiv="content-type" content="text/html;charset=utf-8" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta
                    name="description"
                    content="Abhitechbot: Solving Modern Problems through Web Design & Development. Explore web development services, e-commerce solutions, and more."
                />
                 <meta
                    name="keywords"
                    content="contact, web developer, about me, skills, experiences, passion for coding, web design, developer journey, coding passion, Web development, Front-end development, Full-stack development, JavaScript, ReactJS, Node.js, HTML5, CSS3, Responsive design, UI/UX design, Web development tools, Web development tutorials, Code optimization, Cross-browser compatibility, Mobile development Progressive Web Apps (PWAs), Frameworks (e.g., Angular, Vue.js), Server-side scripting, RESTful APIs, Database management (e.g., MongoDB, MySQL), Version control (e.g., Git), Web security, Performance optimization, DevOps, Software architecture, Coding best practices, Debugging techniques, Web development trends, Career in web development, web developer, collaboration, inquiries, web development, Abhitechbot, web development, web developer, web site development, e-commerce web development, web designing, full stack web developer, web development tools, PHP, MySQL, Python, front end web developer, web development company, India, Siliguri, Kolkata, West Bengal, " />
                <meta name="author" content="Abhitechbot" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://abhitechbot.com" />
                <title>Journey into the World of Full Stack Development with Abhitechbot</title>
            </Helmet>


            <Header />
            <br />
            <br />
            <br />
            <br />
            <Blog />
            <Footer />
        </>
    );
}

export default BlogPage;
