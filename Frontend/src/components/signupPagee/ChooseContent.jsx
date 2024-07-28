import React from "react";
const chooseData = [
    {
        content : " Choose Your Preferred Course"
    },
    {
        content: "Where are you in the application journey?"
    },
    {
        content: "What term and year do you plan to start in?"
    },
    {
        content : "Choose your preferred Countries"
    },
    {
        content: "Let’s personalize your journey! "
    },
    {
        content : "What problems are you facing now or could face in the near-future? "
    }
]

const ChooseContent = (props)=>{
    return(
        <>
        <h1 className="">{props.content}</h1>
        
        </>
    )
}

export default ChooseContent;
export {chooseData};