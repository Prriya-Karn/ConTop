import React, { useEffect } from "react";
import './home.css';
import Navhome from "./Navhome";
import Aos from "aos";
import 'aos/dist/aos.css';

const HomePage1 = ()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
    return(
        <>
        <div  data-aos="fade-left">
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"1rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">

    <h1 className="mt-5 home-head">Home</h1>

    <div className="main-box-home  mt-4 d-flex">

    <div className="home-box">
    <div className="upcoming-section d-flex">
    <h3>Upcoming Sessions</h3>
    <a href="#">View all </a>
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

      <div className="card-bottom home-card-bottom mt-2">
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
    <div className="card-bottom home-card-bottom mt-2">
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
     
      <div className="card-bottom home-card-bottom mt-2">
      <a href="#">View Details</a>
      </div>
      </div>
    </div>
  </div>





</div>



    </div>
    

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
    <h1><i style={{fontWeight:"400"}}>Discover</i> Mentors</h1>
    <p>Find the best suitable mentors for achieving your goal!</p>
    </div>
    
    <div className="home-butt">
   <button className="btn button" data-bs-toggle="modal" data-bs-target="#exampleModal">
   <a href="#"  style={{textDecoration:"none",color:"white"}}>Book A Mentor</a>
   </button>
   </div>


   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-home-dialog modal-dialog-centered">
    <div className="modal-content main-home-modal" style={{borderRadius:"20px",width:"667px",height:"436px"}}>
      <div className="d-flex home-header">
        <h5 className="modal-title" id="exampleModalLabel">Booking Details</h5>
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



    <div className="home-box home-resp-box" style={{marginTop:"-8rem"}}>
    <div className="upcoming-section up-resp d-flex" style={{gap:"9rem",}}>
    <h3 style={{gap:"10rem",width:"25rem"}}>Recommended Mentors for you</h3>
    <a href="#">View all </a>
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

export default HomePage1;



  
            