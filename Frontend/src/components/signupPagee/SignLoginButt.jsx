import React from "react";
const signlogdata = [
    {
        buttName : "SIGN UP",
        className : "sign-button-1"
    },
    {
        buttName : "LOG IN",
        className : "sign-button-2"
    }
]

const SignLoginButt = (props)=>{
    return(
        <>
        <button className={props.className}>{props.buttName}</button>
          
        </>
    )
}

export default SignLoginButt;
export {signlogdata};