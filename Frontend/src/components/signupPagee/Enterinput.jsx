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
    },
    {
        labelName : "User Name :",
         type : "text",
        name : "UserName"
    },
    {
        labelName : "Phone Number :",
        type : "number",
        name : "PhoneNumber"
    },
    {
        labelName : "Email :",
        type : "email",
        name : "UserEmail"
    },
    {
        labelName : "LinkedIn Profile :",
        type : "text",
        name : "LinkedInPro"
    },
    {
        labelName : "Profile Bio :",
        type : "text",
        name : "proBio"
    },
]

const Enterinput = ({inputData,proform,name,type,labelName})=>{

    const handleChange = (event) => {
        if (inputData) {
          inputData(event);
        }
        if (proform) {
            console.log(event)
         proform(event);
        }
      };

      
      return(
        <>
        <div className="sign-mobile" style={{color:"#323A46"}}>
         
          <label for="exampleInputEmail1" className="form-label">{labelName}</label>
         <form>
         <input type={type} name={name} required
          onChange={handleChange}
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