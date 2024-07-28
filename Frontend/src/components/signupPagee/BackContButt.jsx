import React from "react";
const dataBackCont = [
    {
        bttName:"➡ Back",
        backgroundColor1:"#3568FF",
        backgroundColor:"#AEC9EF"
        
    },
    {
        bttName:"Continue",
        backgroundColor1:"#3568FF",
       
    },
    {
        bttName:"Finish",
        backgroundColor1:"#3568FF",
       
    }
]
const BackContButt = ({bttName,backgroundColor1,backgroundColor})=>{
    return(
        <>
        <button className="send-otp mt-3 mb-3 backButt" style={{backgroundColor: {backgroundColor1},backgroundColor:{backgroundColor}    }}>{bttName}</button>
         
        </> 
    )
}

export default BackContButt;
export {dataBackCont};