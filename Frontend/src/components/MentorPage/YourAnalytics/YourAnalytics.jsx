import React, { useEffect } from "react";
import Aos from "aos";
import './YourAnalytics.css';
import 'aos/dist/aos.css';
import NavMentor from "../NavMentor";
import CardYourAnalytics from "./CardYourAnalytic";

const YourAnalytics = ()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
    return(
        <>
        <NavMentor/>
        <div  data-aos="fade-left">
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"3rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">
    <div className="main-box-home  mt-4 d-flex">

    <div className="home-box home-box-mentor your-analytics-box-1 d-flex">
<div className="totalearning totallearning-1">
<p>Total Earnings</p>

<h1>₹ 2,500</h1>
</div>
<div className="totalearning totallearning-2">
<p>Total Sessions</p>
<h1>5</h1>
</div>

    </div>
    


    </div>
  

    
<br></br>
    
<div className="home-box home-box-mentor your-analytics-box-2 d-flex">
<div className="inneryouranal">
<div className="currentcharge-1">
<p>Current Charges per hour: </p>
</div>
<div className="currentcharge-2">
<p>₹499</p>
</div>

<div className="updatebutton">
<button className="btn">Update</button>
</div>


</div>

    </div>
    


    <br></br>
    <div className="home-box home-resp-box home-resp-box-mentor" style={{marginTop:"1rem"}}>
    <div className="upcoming-section up-resp d-flex" style={{gap:"9rem",}}>
    <h3 style={{gap:"10rem",width:"25rem"}}>Your Previous Sessions</h3>
   
    </div>


    
{
  CardYourAnalytics.map((e)=>{
    return(
      <>
      <div className="left-card">

      <div className="left-card-image">
<img src={e.Leftcardimage} className="img-fluid"/>
</div>
<div className="left-card-content card-body">
<div className="card-title home-card-title left-card-title">
<h5>{e.Leftcardtitle}</h5>
</div>


<div className="card-text home-card-text left-card-text">

      
<div className="card-1 left-card-card1 d-flex">
<img src="./Images/video.png" className="img-fluid"/>
<div>
<p className="">Mode: ONLINE</p>
</div>
</div>

<div className="card-1 left-card-card1 d-flex">
<img src="./Images/cale.png" className="img-fluid cale"/>
<div>
<p>{e.leftcardcalender}</p>
  </div>
</div>

<div className="card-1 left-card-card1 d-flex">
<img src="./Images/clock.png" className="img-fluid clock"/>
<div>
<p>{e.leftcardclock}</p></div>
</div>
</div>
</div>
<div className="left-card-button">
<button className="btn">View Details</button>
</div>

</div>
      </>
    )
  })
}








    </div>


                </div>
                
</div>
</div>

        </section>
        </div>
     
 
        </>
    )
}

export default YourAnalytics;



  
            