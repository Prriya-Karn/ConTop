import React, { useEffect } from "react";
import './HomeMentor.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import NavMentor from "../NavMentor";
import LikeComment from "../../YourProfile/LikeComment";

const HomeMentor = ()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
    return(
        <>
        <NavMentor/>
        <div  data-aos="fade-left">
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"1rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">

    <h1 className="mt-5 home-head">Home</h1>
<p className="mt-4 latest-post">Latest Posts</p>
    <div className="main-box-home  mt-4 d-flex">
<LikeComment/>

<div className="main-home-box-2">
    <div className="home-box-1">
    <div className="completeProfile">
    <h1>Complete Your Profile</h1>
    <p>Your Profile is X% complete!</p>
    </div>
    <div className="range" style={{marginTop:"4.5rem",marginLeft:"1rem"}}>
    <input type="range" className="rangecol" name="" style={{width:"280px" }}/>
    </div>
    <div className="profile">
    <p>Complete profile </p>
    </div>
    </div>


    <div className="home-box-1 mt-3">
    <div className="completeProfile pro-2">
    <h1>Upcoming Sessions</h1>
    <p>Have a look at your upcoming sessions.</p>
    </div>
    
    <div className="home-butt">
   <button className="btn button">
   <a href="#" style={{textDecoration:"none",color:"white"}}>Your Sessions</a>
   </button>
   </div>
    </div>
    </div>


    </div>
  
<br></br>

<LikeComment/>


                </div>
                
</div>
</div>

        </section>
        </div>
     
 
        </>
    )
}

export default HomeMentor;



  
            