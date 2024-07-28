import React from "react";
const  inputdata = [
    {
        labelName : "Enter OTP",
        type : "password"
    },
    {
        labelName : "First Name",
        type : "text"
    },
    {
        labelName : "Last Name",
        type : "text"
    },
    {
        labelName : "Email",
        type : "email"
    }
    
    
]

const Enterinput = (props)=>{
    return(
        <>
        <div className="sign-mobile" style={{color:"#323A46"}}>
         
          <label for="exampleInputEmail1" className="form-label">{props.labelName}</label>
          <input type={props.type} className="form-control enterOtpinput" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        </>
    )
}

export default Enterinput;
export {inputdata};