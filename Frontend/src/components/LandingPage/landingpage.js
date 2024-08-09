import React from "react";

import './landingpage.css';
import Hero from "./Hero";
import Carousel from "./Carousel";
import BookSession from "./BookSession";
import CollegeGo from "./CollegeGo";
import Testimonial from "./Testimonial";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
const Landingpage = ()=>{
  return(
    <>
  
    <div className="overflow-x-hidden">
   <Navbar
   className = "margin-top"
   /> 
 <Hero/>
 <Carousel/>
   <BookSession/>
   <CollegeGo/> 
   <Testimonial/>
   <Contact/>
   <Footer/>
   </div>

    
    </>
  )
}

export default Landingpage;
