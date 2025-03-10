import React from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
 import './components/HomePage/homepage.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar.jsx'

import Homepage from './components/HomePage/Homepage.jsx';
import AboutPage from './components/About/AboutPage.jsx';
import ContactPage from './components/Contact/ContactPage.jsx';
import SignupPage from './components/SignUp/SignupPage.jsx';
import NotFound from './NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
     <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      
      <Route path="about" element={<AboutPage/>}></Route>
      
      
      <Route path="contact" element={<ContactPage/>}></Route>

      <Route path="signup" element={<SignupPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route> 

     </Routes>  

  </BrowserRouter>
);
