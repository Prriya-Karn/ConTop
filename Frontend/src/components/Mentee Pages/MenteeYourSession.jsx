import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Navhome } from "../Home";
import './YourSession.css';

const MenteeYourSession = ()=>{
  
    return(
        <>
       <Navhome/>
        <div>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"3rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">
    <div className="main-box-home  mt-4 d-flex">

    <div className="home-box home-box-mentor">
    <div className="upcoming-section d-flex">
    <h3>Your Upcoming Sessions</h3>
    
    </div>
<div className="d-flex allcard">

    <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    
    <div className="card-title home-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text home-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/video.png" className="img-fluid"/>
      <div>
      <p className="">Mode: ONLINE</p>
      </div>
      </div>

      <div className="card-1 d-flex">
      <img src="./Images/cale.png" className="img-fluid cale"/>
      <div>
      <p>11 January’24</p>  </div>
      </div>
      
      <div className="card-1 d-flex">
      <img src="./Images/clock.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>4:00 PM - 5:00PM</p>  </div>
      </div>

      <div className="card-bottom home-card-bottom">
      <a href="#">
      View Details
      </a>
      </div>
      </div>
    </div>
  </div>

  


  <div className="card" style={{marginLeft:"-20px"}}>
  <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
  <div className="card-title home-card-title">
    <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
    </div>
    <div className="card-text home-card-text">

    
    <div className="card-1 d-flex">
    <img src="./Images/video.png" className="img-fluid"/>
    <div>
    <p className="">Mode: ONLINE</p>
    </div>
    </div>

    <div className="card-1 d-flex">
    <img src="./Images/cale.png" className="img-fluid cale"/>
    <div>
    <p>11 January’24</p>  </div>
    </div>
    
    <div className="card-1 d-flex">
    <img src="./Images/clock.png" className="img-fluid clock"/>
    <div>
    <p>4:00 PM - 5:00PM</p>  </div>
    </div>
    <div className="card-bottom home-card-bottom">
    <a href="#">View Details</a>
    </div>

    </div>
  </div>
</div>

<div className="card" style={{marginLeft:"-20px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title home-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text home-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/video.png" className="img-fluid"/>
      <div>
      <p className="">Mode: ONLINE</p>
      </div>
      </div>

      <div className="card-1 d-flex">
      <img src="./Images/cale.png" className="img-fluid cale"/>
      <div>
      <p>11 January’24</p>  </div>
      </div>
      
      <div className="card-1 d-flex">
      <img src="./Images/clock.png" className="img-fluid clock"/>
      <div>
      <p>4:00 PM - 5:00PM</p>  </div>
      </div>
     
      <div className="card-bottom home-card-bottom">
      <a href="#">View Details</a>
      </div>
      </div>
    </div>
  </div>





</div>



    </div>
    

<div className="main-home-box-2">
 
    <div className="home-box-1 mentor-box-1 yoursessionbox  mt-5">
    <div className="completeProfile mentor-complete yoursessionbox pro-2">
    <h1>Discover <i style={{fontWeight:"600"}}>New Mentors</i></h1>
    <p>
    Find the best suitable mentors for achieving your goal!
Discover new mentors and book sessions with them easily.
    </p>
    </div>
    
    <div className="home-butt mentor-butt-anal yoursession-box-button">
   <button className="btn button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
   <a href="#"  style={{textDecoration:"none",color:"white"}}>Find More Mentors</a>
   </button>
   </div>

   

   {/*modal start*/ }

<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-home-dialog modal-dialog-centered">
    <div className="modal-content main-home-modal" style={{borderRadius:"20px",width:"667px",height:"436px"}}>
      <div className="d-flex home-header">
        <h5 className="modal-title" id="exampleModalLabel1">Booking Details</h5>
        <button type="button" className="btn-close home-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body home-modal-p">
        <p>Mentorship Session with <span>Darren Schuchardt</span></p>
        <div className="modal-img mt-4">
        <div className="modal-card-1 d-flex">
        <img src="./Images/cl.png"/>
        <p>22nd Jan 2024</p>
        </div>
        <div className="modal-card-2 d-flex">
        <img src="./Images/clock.png"/>
        <p>4:30pm - 4:50pm(Asia/ Calcutta)</p>
        </div>
        <div className="modal-card-3 d-flex">
        <img src="./Images/vd.png"/>
        <p>Online (video Call)</p>
        </div>
        </div>
        <label className="mt-5 modal-label">Total Amount : </label>
        <h3 className="rupee">300</h3>
        <button className="btn button modal-button" style={{backgroundColor:"#C53183",color:"white"}}>
        Show Booking On Google Meet
        </button>
      </div>
     
    </div>
  </div>

</div>









    </div>

    </div>


    </div>
  
    <div className="home-box home-resp-box home-resp-box-mentor" style={{marginTop:"1rem"}}>
    <div className="upcoming-section up-resp d-flex" style={{gap:"9rem",}}>
    <h3 style={{gap:"10rem",width:"25rem"}}>Your Previous Sessions</h3>
   
    </div>
<div className="d-flex allcard">
    <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title home-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text home-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/uni.png" className="img-fluid"/>
      <div>
      <p className="">Harward University</p>
      </div>
      </div>

      <div className="card-1 d-flex">
           <div>
      <p>Student | Masters | USA</p>  </div>
      </div>
      
      <div className="card-1 d-flex">
      <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>MBA</p>  </div>
      </div>

      <div className="card-bottom home-card-bottom">
      <a href="#">
      View Details
      </a>
      </div>
     
  


      </div>
    </div>
  </div>



  <div className="card" style={{marginLeft:"-20px"}}>
  <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
  <div className="card-title home-card-title">
    <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
    </div>
    <div className="card-text home-card-text">

    
    <div className="card-1 d-flex">
    <img src="./Images/video.png" className="img-fluid"/>
    <div>
    <p className="">Mode: ONLINE</p>
    </div>
    </div>

    <div className="card-1 d-flex">
    <img src="./Images/cale.png" className="img-fluid cale"/>
    <div>
    <p>11 January’24</p>  </div>
    </div>
    
    <div className="card-1 d-flex">
    <img src="./Images/clock.png" className="img-fluid clock"/>
    <div>
    <p>4:00 PM - 5:00PM</p>  </div>
    </div>
    <div className="card-bottom home-card-bottom">
    <a href="#">
    View Details
    </a>
    </div>

    </div>
  </div>
</div>

<div className="card" style={{marginLeft:"-20px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title home-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text home-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/video.png" className="img-fluid"/>
      <div>
      <p className="">Mode: ONLINE</p>
      </div>
      </div>

      <div className="card-1 d-flex">
      <img src="./Images/cale.png" className="img-fluid cale"/>
      <div>
      <p>11 January’24</p>  </div>
      </div>
      
      <div className="card-1 d-flex">
      <img src="./Images/clock.png" className="img-fluid clock"/>
      <div>
      <p>4:00 PM - 5:00PM</p>  </div>
      </div>
      <div className="card-bottom home-card-bottom">
      <a href="#">
      View Details
      </a>
      </div>
     

      </div>
    </div>
  </div>





</div>



    </div>


                </div>
                
</div>
</div>

        </section>
        </div>
     
 
        </>
    )
}

export default MenteeYourSession;



  
            