import React from "react";
import ButtonChoose, { buttData } from "./ButtonChoose";
import MultiOpt, { multiOptdata } from "./MutltiOpt";
import BackContButt, { dataBackCont } from "./BackContButt";
import ChooseContent, { chooseData } from "./ChooseContent";
import SignLoginButt, { signlogdata } from "./SignLoginButt";
import SignColumn1 from "./Applicant";
import Applicant from "./Applicant";
import Appjourneyformcheck, { appformcheckdata } from "./Appjourneyformcheck";
import Enterinput, { inputdata } from "./Enterinput";
import MobileNumber from "./MobileNumber";
import CheckData from "./CheckData";
import Navhome from "../Home/Navhome";
import { NavLink } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
const ApplicantParentSign2 = ()=>{
    
    return(
        <>
        <div style={{marginBottom:"2rem",marginTop:"-3.4rem"}}>
        <Navbar/>
        </div>
 
        <section className="Sign_main d-flex align-items-left overflow-y-hidden  overflow-x-hidden mt-5">
        <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">

        <div className="container">
        <div className="row row-sign-1 mb-5" style={{gap:"5rem"}}> 
      
        <Applicant/>
      
            <div className="col-lg-5 me-5 col-md-12 col-12 order-1 order-lg-2
            sign-column2 sign-column2-applicant2 flex-column mb-5" style={{width:"438px",height:"583.65px"}}>
          
            <div className="sign-buttons">
          <SignLoginButt
          buttName = {signlogdata[0].buttName}
          className = {signlogdata[0].className}
          />
          <SignLoginButt
          buttName = {signlogdata[1].buttName}
          className = {signlogdata[1].className}
          />
          </div>
          <div className="mt-4 sign-choose-content">
         <ChooseContent
         content = {chooseData[1].content}
         />
          </div>


          <div class="form-check appjourney">
          
          {
            appformcheckdata.map((e)=>{
              return(
                <Appjourneyformcheck
                label = {e.label}
                />
              )
            })
          }
 
  </div>


  <div className="sign-choose-content">
  <ChooseContent
  content = {chooseData[2].content}
  />
   </div>


<div className="form-check appjourney d-flex" style={{width:"600px",height:"60px",gap:"12px"}}>  
<div className="inner-appjourney" style={{ marginRight: "1rem",width:"17rem"}}>
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Sept-Nov(Fall)
</label>
</div>

<div className="inner-appjourney" style={{ marginRight: "1rem",width:"17rem"  }}>
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Mar-May (Spring)
</label>
</div>



<div className="inner-appjourney" style={{ marginRight: "1rem",width:"30rem"  }}>
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Jun-Aug (Summer)
</label>
</div>

</div>

<div className="form-check appjourney d-flex" style={{width:"490px",height:"60px",gap:"12px"}}>  

<div className="inner-appjourney" style={{ marginRight: "1.5rem", marginTop:"-1rem"  }}>
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Dec-Feb (Winter)
</label>
</div>

<div className="inner-appjourney" style={{ marginRight: "1.5rem", marginTop:"-1rem" }}>
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Not Sure
</label>
</div>


</div>






          <div className="sign-mobile">
          <MultiOpt
          label = {multiOptdata[2].label}
          multi = {multiOptdata[2].multi}
          dropdownItem = {multiOptdata[2].dropdownItem}
          />


          </div>
        
          <div className="backContButt" style={{marginTop:"-1rem"}}>
         <NavLink exact to="/applicantparent">
         <BackContButt 
         bttName={dataBackCont[0].bttName}
         backgroundColor={dataBackCont[0].backgroundColor}
         backgroundColor1={dataBackCont[0].backgroundColor1}
         />
         </NavLink>
         
         <NavLink exact to="/applicantparent3">
         <BackContButt 
         bttName={dataBackCont[1].bttName}
         backgroundColor1={dataBackCont[1].backgroundColor1}
         />
         </NavLink>
          
          
          
          
          </div>
          </div>
           
        </div>
        </div>
                </div>
</div>
</div>
        </section>












        </>
    )
}

export default ApplicantParentSign2;
