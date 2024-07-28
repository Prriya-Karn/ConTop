import React, { useEffect } from "react";
import Navhome from "./Navhome";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const BookMentor = ()=>{

    useEffect(()=>{
        Aos.init({duration:1000});
      },[])
    
    return(
        <>
      
        <Navhome/>
        <div  data-aos="fade-right">
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"1rem"}}>
<div className="row">
    <div className="col-lg-10 mx-auto">

    <h1 className="mt-5 mb-4 home-head">Book A Mentor</h1>

    <div className="form-group d-flex">
<span className=""></span>
<span className="search d-flex"><img src="./Images/search.png"/>
<input type="text" className="form-control" style={{border:"none"}} placeholder="Search"/>
</span>

<div className="d-flex filterButton">

<NavLink exact to = "/filter" style={{textDecoration:"none"}}>
<button className="btn d-flex" style={{gap:"0.5rem",backgroundColor:"#FFFFFF",cursor:"pointer"}}>
<img src="./Images/filter.png"/>
Filters</button>
</NavLink>
</div>

</div>

<div className="requestCourse d-flex">
<h1 className="">Can’t find University/ Course?</h1>
<button className="btn">
Request University/ Course
</button>
</div>

<div className="Book-Mentor-card">

<div className="d-flex all-mentor-cards">
<div className="card" style={{marginLeft:"1px"}}>
<img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
<div className="card-body">
<div className="card-title book-card-title">
  <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
  </div>
  <div className="card-text book-card-text">

  
  <div className="card-1  d-flex">
  <img src="./Images/uni.png" className="img-fluid"/>
  <div>
  <p className="">Harward University</p>
  </div>
  </div>

  <div className="card-1 mt-1 d-flex">
       <div>
  <p>Student | Masters | USA</p>  </div>
  </div>
  
  <div className="card-1 mt-1 d-flex">
  <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
  <div>
  <p>MBA</p>  </div>
  </div>


 



  </div>
</div>
</div>


<div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
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


  <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
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


  <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
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
  </div>




<div className="d-flex all-mentor-cards mb-5">
  <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/uni.png" className="img-fluid"/>
      <div>
      <p className="">Harward University</p>
      </div>
      </div>

      <div className="mt-1 card-1 d-flex">
           <div>
      <p>Student | Masters | USA</p>  </div>
      </div>
      
      <div className="mt-1 card-1 d-flex">
      <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>MBA</p>  </div>
      </div>
</div>

      </div>
    </div>
    <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/uni.png" className="img-fluid"/>
      <div>
      <p className="">Harward University</p>
      </div>
      </div>

      <div className="mt-1 card-1 d-flex">
           <div>
      <p>Student | Masters | USA</p>  </div>
      </div>
      
      <div className="mt-1 card-1 d-flex">
      <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>MBA</p>  </div>
      </div>
</div>

      </div>
    </div>

    <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/uni.png" className="img-fluid"/>
      <div>
      <p className="">Harward University</p>
      </div>
      </div>

      <div className="mt-1 card-1 d-flex">
           <div>
      <p>Student | Masters | USA</p>  </div>
      </div>
      
      <div className="mt-1 card-1 d-flex">
      <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>MBA</p>  </div>
      </div>
</div>

      </div>
    </div>

    <div className="card" style={{marginLeft:"1px"}}>
    <img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className="card-title book-card-title">
      <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>Priya Karn</h5>
      </div>
      <div className="card-text  book-card-text">

      
      <div className="card-1 d-flex">
      <img src="./Images/uni.png" className="img-fluid"/>
      <div>
      <p className="">Harward University</p>
      </div>
      </div>

      <div className="mt-1 card-1 d-flex">
           <div>
      <p>Student | Masters | USA</p>  </div>
      </div>
      
      <div className="mt-1 card-1 d-flex">
      <img src="./Images/book.png" className="img-fluid clock" style={{backgroundStyle:"none"}}/>
      <div>
      <p>MBA</p>  </div>
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

export default BookMentor;