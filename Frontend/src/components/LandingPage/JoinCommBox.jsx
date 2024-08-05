import React, { Fragment } from "react";
const joinData = [
    {
        p : "University Students/Alumni",
        h1 : "500+"
    },
    {
        p : "Courses",
        h1 : "25+"
    },
    {
        p : "Countries",
        h1 : "5+"
    },
]
const JoinComm = ({p,h1})=>{
    return(
        <Fragment>
        <div className="j-box-1">
        <p>{p}</p>
        <h1>{h1}</h1>
        </div>
       
        </Fragment>
    )
}

export default JoinComm;
export {joinData};