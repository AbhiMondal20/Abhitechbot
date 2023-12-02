import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='experience' element={<Resume />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='testimonial' element={<Testimonial />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blogdetails/:id' element={<BlogDetails/>} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
