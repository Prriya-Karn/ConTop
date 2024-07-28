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
        commonButton : "Book A Mentor"
    }
]
const Button = (props)=>{
    return(
        <>
        <div className={props.className}>
        <button>{props.commonButton}</button>
        </div>
       
        </>
    )
}

export default Button;
export {dataButton};