import React from "react";
const dataButton = [
    {
        commonButton : "Get Started ➡",
        className : "button"
    },
    {
        commonButton : "Book Your Free Session ➡",
        className : "button bookyourfree"
    },
    {
        commonButton : "Read More ➡",
        className : "button readmore"
    },
    {
        commonButton : "Book A Mentor",
        className : ""
    },
    {
        commonButton : "Submit",
        className : "mt-2",
        buttonClass : "ProfileBackButton"
    }
]
const Button = (props)=>{
    return(
        <>
        <div className={props.className}>
        <button onClick={props.submitpro} 
        className={props.buttonClass}>{props.commonButton}</button>
        </div>
       
        </>
    )
}

export default Button;
export {dataButton};