import React, { useEffect } from "react";
import Carousel_Card from "./Carousel_Card";
import BookSession from "./BookSession";
import Aos from "aos";
import 'aos/dist/aos.css';

const Carousel = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    return(
        <div className="main-Carousel container-fluid">
        
      
        <div className="Carousel-head" data-aos="fade-right">
        <h4 className="text-center">Discover the top Students and Alumni</h4>
        </div>
        <br></br>
    
        <Carousel_Card/>
        <div>
        <img src = "./Images/Ellipse 93.png" className="carouselCardbackgroundImage1"/>
    
        <img src = "./Images/Ellipse 94.png" className="carouselCardbackgroundImage2"/>
        </div>
       
       
        </div>
    )
}

export default Carousel;
