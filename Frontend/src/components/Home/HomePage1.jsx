import React, { Fragment, useState } from "react";
import './home.css';
import EmojiPicker from 'emoji-picker-react';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import LikeComment from "../YourProfile/LikeComment";

const HomePage1 = ()=>{
  const [pCont,setPCont] = useState("");
  const [subPost,setSubPost] = useState(true);
  const [photo,setPhoto] = useState(null);
  
  const PContent = (event)=>{
    setPCont(event.target.value);
  }
  const post = ()=>{
    if(subPost===true){
      setSubPost(pCont)
    }
  }
console.log(subPost)

 const imageChoose = (event)=>{
  setPhoto(event.target.files[0])
 }


const clickPhoto = ()=>{
 document.querySelector("#photoChoose").click()
}

console.log(photo)

 
    return(
        <>
        <div>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"1rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">

    <h1 className="mt-5 home-head">Home</h1>

    <div className="post-box">
    <div className="post-box-pro">
    <img alt="" src="/Images/profile.png"/>
    <input type="text" name = "postContent" onChange={PContent}
    
    placeholder="What’s on your Mind?"/>
    </div>
    <div className="post">
    <img alt="" src="./Images/selectemoji.png"/>

    <input id="photoChoose" type="file" style={{display:"none"}} onChange={imageChoose}/>
    <img alt="" src="./Images/photo.png" onClick={clickPhoto}/>    
    
   
    <img alt="" src="./Images/more.png" type="file"/>

    <div className="post-butt">
    <button onClick={post}>Post</button>
    </div>
    
    </div>
    </div>

    <div className="main-box-home  mt-4 d-flex">

    <div className="home-box">
    <p className="mt-4 latest-post">Latest Posts</p>
{
  (subPost===true)?
  "":<LikeComment
  subPost={subPost}
  src={photo}
 />
}
  

    
    </div>
    

<div className="main-home-box-2 home-page-1-box">
<div className="home-box-1">
<div className="completeProfile">

<h1>Complete Your Profile</h1>

<p>Your Profile is X% complete!</p>
</div>
<div className="range" style={{marginTop:"4.5rem",marginLeft:"1rem"}}>
<input type="range" className="rangecol" name="" style={{width:"280px" }}/>
</div>
<div className="profile">
<NavLink style={{textDecoration:"none"}} exact to="/myqualification">
<p>Complete profile </p>
</NavLink>
</div>
</div>
<div className="home-box-1 mt-3">
<div className="completeProfile pro-2">
<h1><i style={{fontWeight:"400"}}>Discover</i> Mentors</h1>
<p>Find the best suitable mentors for achieving your goal!</p>
</div>

<div className="home-butt">
<button className="btn button" data-bs-toggle="modal" data-bs-target="#exampleModal">
Book A Mentor
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
    <img alt="" src="./Images/cl.png"/>
    <p>22nd Jan 2024</p>
    </div>
    <div className="modal-card-2 d-flex">
    <img alt="" src="./Images/clock.png"/>
    <p>4:30pm - 4:50pm(Asia/ Calcutta)</p>
    </div>
    <div className="modal-card-3 d-flex">
    <img alt="" src="./Images/vd.png"/>
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
<NavLink style={{textDecoration:"none",color:"white"}} exact to = "/yoursession">
Your Sessions
</NavLink>

</button>
</div>
</div>
</div>


    </div>
  
<div className="home-page-1-like">
{/*<LikeComment/>*/}
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



  
            