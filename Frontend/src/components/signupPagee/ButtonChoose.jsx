import React from "react";
const buttData = [
    {
        branchName : "Computer Science",
        image : "./Images/bi_x.png",
        className : "option optionButton m-1",
        
    },
    {
        branchName : "MBA",
        image : "./Images/bi_x.png",
        className : "option optionButton-2 m-1",
        
    },
    {
        branchName : "Data Science",
        image : "./Images/bi_x.png",
        className : "option optionButton-3 m-1",
        
    },

    {
        branchName : "United Kingdom",
        image : "./Images/bi_x.png",
        className : "option optionButton-4 m-1",
        
    },
    {
        branchName : "Germany",
        image : "./Images/bi_x.png",
        className : "option optionButton-5 m-1",
        
    },
    {
        branchName : "Canada",
        image : "./Images/bi_x.png",
        className : "option optionButton-6 m-1",
        
    },
    
    
]
const ButtonChoose = ({branchName,image,className})=>{
    return(
        <>
        <div className={className}>
        {branchName}
        <button type="button" className="closebutton"><img src={image}/></button>
       
        </div>
        </>
    )
}

export default ButtonChoose;
export {buttData};