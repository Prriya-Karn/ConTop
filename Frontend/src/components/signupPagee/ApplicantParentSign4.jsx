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
const ApplicantParentSign4 = ()=>{
    
    return(
        <>
        <Navhome/>
        <section className="Sign_main d-flex align-items-left overflow-y-hidden overflow-x-hidden mt-5">
        <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">

        <div className="container">
        <div className="row row-sign-1 mb-5" style={{gap:"5rem"}}> 
      
        <Applicant/>
      
            <div className="col-lg-5 me-5 col-md-12 col-12 order-1 order-lg-2
            sign-column2 sign-column2-applicant4 flex-column mb-5" style={{width:"438px",height:"583.65px"}}>
          
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
          <div className="mt-4 mb-4 sign-choose-content">
         <ChooseContent
         content = {chooseData[4].content}
         />
          </div>
          <Enterinput
          labelName = {inputdata[1].labelName}
          type = {inputdata[1]}
          />
          <br></br>
          <Enterinput
          labelName = {inputdata[2].labelName}
          type = {inputdata[2]}
          />
          <br></br>
          <Enterinput
          labelName = {inputdata[3].labelName}
          type = {inputdata[3].labelName}
          />
          <div className="sign-mobile">
          <br></br>
          <MobileNumber/>
            </div>
          <div className="backContButt">
          <NavLink exact to="/applicantparent3">
         <BackContButt 
         bttName={dataBackCont[0].bttName}
         backgroundColor={dataBackCont[0].backgroundColor}
         backgroundColor1={dataBackCont[0].backgroundColor1}
         />
         </NavLink>
         
         <NavLink exact to="/applicantparent5">
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

export default ApplicantParentSign4;
