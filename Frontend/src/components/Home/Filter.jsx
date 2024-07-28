import React, { useEffect } from "react";
import Navhome from "./Navhome";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const Filter = ()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
    return(
        <>
        <Navhome/>
        <div  data-aos="fade-left">
    <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
    <div className="container-fluid mt-1">
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
<button className="btn d-flex" style={{gap:"0.5rem",backgroundColor:"#C53183B2",border:"none",color:"white",cursor:"pointer"}}>
<img src="./Images/filter1.png"/>
Filters</button>
</NavLink>
</div>

</div>


<div className="choice-mentor d-flex mt-4">
<div className="dropdown">
  <button className="btn choice-btn btn-secondary dropdown-toggle" style={{background:"none",color:"black"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Country Of Study
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div className="mentor-status  d-flex">
<label className="form-check-label mentor" for="flexRadioDefault1">
Mentor Status
  </label>
<div className="form-check d-flex">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Student
  </label>
</div>
<div className="form-check d-flex">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Alumni
  </label>
</div>
<div className="form-check d-flex">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Both
  </label>
</div>
</div>
<div className="dropdown">
  <button className="btn choice-btn alldegree btn-secondary dropdown-toggle" style={{background:"none",color:"black"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All Degrees
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div className="crossbtn">
<button className="btn"><img src="./Images/cross.png" alt="cross"/></button>
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
  <div className="card-text   book-card-text">

  
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
      <div className="card-text   book-card-text">

      
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
      <div className="card-text   book-card-text">

      
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
      <div className="card-text   book-card-text">

      
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

export default Filter;