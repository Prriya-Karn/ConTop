import React, { useEffect } from "react";
import Button, { dataButton } from "./Button";

import Navhome from "../Home/Navhome";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = ()=>{
  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const navigate = useNavigate();
  const GettingStarted = () => {
    // window.innerWidth < 500 ? navigate("/msignup") : navigate("/signup");
    console.log("GettingStarted function called");
    navigate('/signup')
  };
    return(
        <>
        <div  data-aos="fade-right">
        <div className="main text-center" style={{marginTop:"5rem"}}>
       
        <div className="head">
        <h1>Engage with <span className="stu">Students & Alumni </span>to<svg className="svg_1" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.197 43.7856C30.3285 38.8157 28.3055 33.8596 23.8697 30.8685C22.1521 29.7102 20.1173 29.2885 18.1134 28.938C26.2544 28.6587 29.0807 20.1381 30.2135 13.542C29.8201 19.4579 32.913 25.8479 39.2338 26.4375C32.9416 30.1392 30.7821 36.9318 30.197 43.7856Z" fill="white" stroke="black" stroke-width="4.6805" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> 
      <svg className="svg_2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7222 28.6925C19.8098 25.3851 18.4635 22.0868 15.5115 20.0962C14.3684 19.3253 13.0143 19.0447 11.6807 18.8114C17.0985 18.6256 18.9794 12.9551 19.7332 8.56543C19.4714 12.5024 21.5298 16.755 25.7362 17.1474C21.5488 19.6108 20.1117 24.1313 19.7222 28.6925Z" fill="white" stroke="black" stroke-width="3.11486" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <br></br>
        <svg  className = "svg_3" xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
  <path d="M33.3659 10.0776C37.9288 16.8562 41.6907 24.0576 45.9332 31.0148" stroke="#212121" stroke-width="4.41667" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5534 9.49609C21.198 17.5455 31.1293 26.8799 40.4238 36.4263" stroke="#212121" stroke-width="4.41667" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.18082 32.5063C16.2266 33.9324 28.2471 39.8548 36.9878 43.524" stroke="#212121" stroke-width="4.41667" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        Enhance Your Experience and Learn from
        <br></br>
        <span className="pers">Personal Stories<p className="emoji"><img src="./Images/bg.png" className="img-fluid"/></p></span>
       

        </h1>
        
        <svg className="svg_4 mt-5" xmlns="http://www.w3.org/2000/svg" width="218" height="21" viewBox="0 0 218 21" fill="none">
  <path d="M150.827 18.8876C126.265 13.6365 98.8472 16.4858 73.9965 16.968C66.8508 17.1069 59.5398 18.0324 52.4011 17.6361C51.47 17.5846 47.4077 17.3915 46.6457 16.3595C46.5462 16.2252 49.7139 15.6956 51.2528 15.4691C54.2451 15.0286 57.2361 14.7036 60.226 14.2384C68.0863 13.0161 76.0841 12.4197 84.0134 11.8703C104.368 10.4612 140.78 6.11849 160.673 12.2426C161.659 12.546 158.612 12.1904 157.581 12.1623C155.887 12.1163 154.195 12.0499 152.5 11.9966C146.975 11.8237 141.403 11.5161 135.878 11.5645C118.07 11.7193 100.2 10.9754 82.3969 11.6417C77.0399 11.8425 71.7001 12.2593 66.3407 12.4204C63.2363 12.5137 63.3755 12.5927 60.1671 12.4838C58.776 12.4364 54.9188 12.855 56.019 12.0022C57.9566 10.4998 64.013 10.8756 66.3553 10.569C77.0504 9.17099 87.719 7.34532 98.4687 6.36447C126.032 3.84954 154.092 3.84362 181.718 4.8958C193.019 5.32621 204.437 3.66132 215.69 5.00647C188.385 1.48006 160.005 1.98075 132.551 2.0827C101.64 2.19752 70.7644 2.20517 39.8532 2.85652C27.163 3.12374 14.7288 5.54048 2 5.36407" stroke="black" stroke-width="2.86357" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <br></br>  <br></br>
       
        <div className="sub_head" data-aos="fade-right">
        <p> Learn about campus life,application process, jobs after graduation, or living in a foriegn <br></br>
        country. Book your free call and make an informed college decisions!
        </p>
        </div>
     
        <Button

        commonButton = {dataButton[0].commonButton}
        className = {dataButton[0].className}

        commonButton={dataButton[0].commonButton}
        onClick={GettingStarted}

        />
        </div>
        </div>
        </>
    )
}

export default Hero;