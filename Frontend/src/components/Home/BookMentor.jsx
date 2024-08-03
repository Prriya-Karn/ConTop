import React, { Fragment, useEffect, useState } from "react";
import Navhome from "./Navhome";
import Aos from "aos";
import 'aos/dist/aos.css';
import { BookMentorData, countryChooseData, Degrees, mentorData } from "./BookMentorData";

const BookMentor = ()=>{
  const [fContent,setFContent] = useState(false);
  const [select,setSelect] = useState("");
  const [countryFilter,setCountryFilter] = useState(BookMentorData);
  const [search,setSearch] = useState(BookMentorData);
  const selectCountry = (event)=>{
    const selCountry = event.target.value;
    setSelect(selCountry);
    const filterCountry = selCountry==="Country Choose"?BookMentorData:
    BookMentorData.filter((e)=>{
      return e.country === selCountry;
    })
    setCountryFilter(filterCountry)
}

const mentorFilter = (mentor)=>{
  const filterMentorStatus = (mentor==="Both")?BookMentorData:BookMentorData.filter((e)=>{
    return mentor == e. mentorStatus
  })
  setCountryFilter(filterMentorStatus)
}

const selectDegree = (event)=>{
  const selDegree = event.target.value;
  const filterDegree = BookMentorData.filter((e)=>{
    return selDegree === e.degree;
  })
  setCountryFilter(filterDegree)
}
// console.log(select)


  const chooseSection = ()=>{
    setFContent(true)
  }
  const closeFilter = ()=>{
    setFContent(false)
  }
  
  const Search = (event)=>{
    setSearch(event.target.value);
  }

  const res = BookMentorData.find((e)=>{
    return (e)
  })
  console.log(res)
  

  

 

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

{/*----------------------------- Search Bar start--------------------- */}


<input type="text" className="form-control" style={{border:"none"}}
onChange={Search} 
placeholder="Search"/>





{/*----------------------------- Search Bar end--------------------- */}

</span>



{/*-----------------------------filter Button Start-------------------*/}

<div className="d-flex filterButton">
<button className="btn d-flex" onClick={chooseSection}
style={{gap:"0.5rem",backgroundColor:"#FFFFFF",cursor:"pointer"}}>
<img src="./Images/filter.png"/>
Filters</button>
</div>


{/*-----------------------------filter Button End-------------------*/}
</div>

{
  fContent==true?<Fragment>
  <div className="choice-mentor d-flex mt-4">
<div className="dropdown">
  <select className="btn choice-btn btn-secondary dropdown-toggle"
  onChange={selectCountry}
  style={{background:"none",color:"black"}} type="button">
  <option>Country Choose</option>
  {
    countryChooseData.map((e)=>{
      return(
        <option>{e.selectCountry}</option>
      )
    })
  }
 </select>
</div>

<div className="mentor-status  d-flex">
<label className="form-check-label mentor" for="flexRadioDefault1">
Mentor Status
  </label>

  {
    mentorData.map((e)=>{
      return(
        <Fragment>
        <div className="form-check d-flex">
  <input className="form-check-input"
   type="radio" name="flexRadioDefault" id={e.id} onClick = {()=>mentorFilter(e.mentor)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    {e.mentor}
  </label>
</div>     
        </Fragment>
      )
    })
  }


</div>

{/*--------------------------All degreee section start--------------------------*/}
<div className="dropdown">
  <select className="btn choice-btn btn-secondary dropdown-toggle"
  onChange={selectDegree}
  style={{background:"none",color:"black"}} type="button">
  <option>All Degree</option>
  {
    Degrees.map((e)=>{
      return(
        <option>{e.degree}</option>
      )
    })
  }
 </select>
</div>
{/*--------------------------All degreee section end--------------------------*/}



<div className="crossbtn">
<button className="btn" onClick={closeFilter}><img src="./Images/cross.png" alt="cross"/></button>
</div>

</div>

  </Fragment>:""
}

<div className="requestCourse d-flex">
<h1 className="">Can’t find University/ Course?</h1>
<button className="btn">
Request University/ Course
</button>
</div>

<div className="Book-Mentor-card">
<div className="all-mentor-cards">
{
  countryFilter.map((e)=>{
    return(
      <Fragment>
      <div className="card" style={{marginLeft:"1px"}}>
<img src="https://picsum.photos/200" className="card-img-top img-fluid" alt="..."/>
<div className="card-body">
<div className="card-title book-card-title">
  <h5 style={{fontFamily:"'Product Sans Medium', sans-serif",fontSize:"18px",fontWeight:"500",lineHeight:"22px",textAlign:"left"}}>
  {e.name}</h5>
  </div>
  <div className="card-text book-card-text">

  
  <div className="card-1  d-flex">
  <img src={e.uniImage} className="img-fluid"/>
  <div>
  <p className="">Harward University</p>
  </div>
  </div>

  <div className="card-1 mt-1 d-flex">
       <div>
  <p>{e.mentorStatus} | {e.degree} | {e.country}</p>  </div>
  </div>
  
  <div className="card-1 mt-1 d-flex">
  <img src={e.bookImage} className="img-fluid clock" style={{backgroundStyle:"none"}}/>
  <div>
  <p>{e.degree}</p>  </div>
  </div>
  </div>
</div>
</div>
      </Fragment>
    )
  })
}
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
