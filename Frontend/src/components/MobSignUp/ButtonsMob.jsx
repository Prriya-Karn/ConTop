import React from "react";
import { NavLink } from "react-router-dom";
const buttMobiData = [
    {
        buttMobName : "Sign Up"
    },
    {
        buttMobName : "Log In",
        backgroundColor : "white"
    },
    {
        buttMobName : "Continue"
    },
    {
        buttMobName : "SEND OTP ON PHONE NUMBER"
    },
    {
        buttMobName : "SEND OTP ON EMAIL"
    },
    {
        buttMobName : "Verify OTP and Submit"
    },
]
const ButtonsMob = ({buttName,backgroundColor})=>{
    return(
        <>
        
<div className="signLogMob mt-2">
<NavLink exact to="/mobBac">
        <button className="btn" style={{backgroundColor:{backgroundColor}}}>{buttName}</button>
        </NavLink>
        </div>
        </>
    )
}

export default ButtonsMob;
export {buttMobiData};