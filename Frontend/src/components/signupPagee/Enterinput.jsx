import React, { useEffect, useState } from "react";
import ApplicantParentSign4 from "./ApplicantParentSign4";
const  inputdata = [
    {
        labelName : "Enter OTP",
        type : "password",
        name : ""
    },

    {
        labelName : "First Name",
        type : "text",
        name : "Fname"
    },
    {
        labelName : "Last Name",
        type : "text",
        name : "Lname"
    },
    {
        labelName : "Email",
        type : "email",
        name : "Email"
    }
    
    
]

const Enterinput = (props)=>{
  


    return(
        <>
        <div className="sign-mobile" style={{color:"#323A46"}}>
         
          <label for="exampleInputEmail1" className="form-label">{props.labelName}</label>
         <form>
         <input type={props.type} name={props.name} onChange={props.inputData}
         
         className="form-control enterOtpinput"
         id="exampleInputEmail1"
          aria-describedby="emailHelp"/>
         </form>
          </div>

        </>
    )
}

export default Enterinput;
export {inputdata};