import React, { Fragment } from "react";
const ButtSpecData = [
    {
        id:1,
        image:"./Images/spec1.png"
    },
    {
        id:2,
        image:"./Images/spec2.png"
    },
    {
        id:3,
        image:"./Images/spec3.png"
    },
    {
        id:4,
        image:"./Images/spec4.png"
    },
    {
        id:5,
        image:"./Images/spec5.png"
    },
    {
        id:6,
        image:"./Images/spec6.png"
    },
]
const SpecButton = ({click})=>{
    return(
        <Fragment>
        {
            ButtSpecData.map((e)=>{
                return(
                    <Fragment>
                    <button className="btn specButt" onClick={()=>click(e.id)}>
        <img className="mb-5" src={e.image} />
        </button>
                    </Fragment>
                )
            })
        }

        </Fragment>
    )
}

export default SpecButton;
export {ButtSpecData};  