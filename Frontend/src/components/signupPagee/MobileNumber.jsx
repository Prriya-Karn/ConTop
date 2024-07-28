import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import AuthContext from "../../context/Authentication/AuthContext";
const MobileNumber = ()=>{
  const {phoneNumber,setPhoneNumber} = useContext(AuthContext);
    return(
        <>
        <p>Mobile Number</p>
        <div className="dropdown-button">
         <div className="input-group mb-3">
         <PhoneInput
         country={"in"}
         value={phoneNumber}
         onChange={(phoneNumber)=>setPhoneNumber("+" + phoneNumber)} 
         />
       </div>
       </div>
        </>
    )
}

export default MobileNumber;