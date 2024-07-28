import React, { Fragment, useEffect } from "react";
import Navhome from "../Home/Navhome";
import './YourProfile.css'
import { NavLink } from "react-router-dom";
import LikeComment from "./LikeComment";
import Aos from "aos";
import 'aos/dist/aos.css';

const YourProfile = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
      },[])
    
    return (
        <Fragment>
            <Navhome />
            <div  data-aos="fade-top">
            <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
                <div className="container-fluid" style={{ marginTop: "-1rem" }}>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
<div className="main-yourprofile-box">

                            <div className="qual-header mt-5">
                                <h1 style={{ fontSize: "22px" }}>Your Profile</h1>
                            </div>


                            <div className="slotsPostbuttons" style={{ width: "61px" }}>
                                <button className="btn postButton yourprofilepost" 
                                style={{ backgroundColor: "#9797974D", fontWeight: "500", color: "black", 
                                fontSize: "25px" }}>Posts</button>
                            </div>
<LikeComment/>
<br></br>
<LikeComment/>


<div className="main-edit-profile">

<div className="button d-flex">
<button className="btn">Edit Profile <img src="./Images/editprofile.png"/></button>
</div>
<div className="image">
<img src="./Images/yourprofileimage.png" className="img-fluid"/>
</div>

<div className="yourProfileImage">
<img src="./Images/yourprofileProfile.png"/>
</div>

<div className="yourProfile-name">
<h1>Fancie Juhnke</h1>
<p>breakdown enthusiast, veteran 👓</p>
</div>

<div className="linkedInPro">
<h3>LinkedIn Profile :</h3>
<NavLink to="https://www.linkedin.com/fancie-juhnke" target="_blank" className="navlink" style={{textDecoration:"none"}}>www.linkedin.com/fancie-juhnke</NavLink>
</div>

<div className="perInfo">
<h3>Personal Information</h3>
<p>Email: <span className="email">fanciejuhnke234@gmail.com</span></p>
<p>Phone Number : <span className="email">+91 9876589567</span></p>
</div>

<div className="eduQua">
<h3>Educational Qualification</h3>

<div className="d-flex edu-1">
<img src="./Images/edu.png"/>
<h3>Masters in Artificial intelligence</h3>
</div>

<div className="edu-2 d-flex">
<p className="uni">University of Galway, Ireland -</p>
<p className="date">2022-2023</p>
</div>

<div className="edu-3">
<p className="sc">Scholarship : <span className="no">No</span></p>
<p className="sc">Part-time Job : <span className="no">Yes</span></p>
<p className="sc">Place Of Stay : <span className="no">Campus Housing</span></p>
</div>


<div className="d-flex edu-1">
<img src="./Images/edu.png"/>
<h3>Bachelors in Bachelor of Engineering</h3>
</div>

<div className="edu-2 d-flex">
<p className="uni">University of Galway, Ireland -</p>
<p className="date">2022-2023</p>
</div>

<div className="edu-3">
<p className="sc">Scholarship : <span className="no">No</span></p>
<p className="sc">Part-time Job : <span className="no">Yes</span></p>
<p className="sc">Place Of Stay : <span className="no">Campus Housing</span></p>
</div>
<div className="prf-Qua">
<h3>Professional Qualification</h3>
<div className="sen d-flex">
<img src="./Images/suitcase.png"/>
<p>Senior Data Analyst @ Red hat</p>
</div>
<p className="d">2022-2022</p>
<p className="borderbottom"></p>
<div className="sen d-flex">
<img src="./Images/suitcase.png"/>
<p>Senior Data Analyst @ Red hat</p>
</div>
<p className="d">2022-2022</p>
<p className="borderbottom"></p>
</div>
</div>
</div>



</div>







                        </div>
                    </div>
                </div>
            </section>
            </div>

        </Fragment>
    )
}

export default YourProfile;