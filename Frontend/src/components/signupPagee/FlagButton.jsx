import React, { Fragment, useState } from "react";
import { countryName } from "./ApplicantParentSign3";
const FlagImageData = [
    {
        image : "./Images/uk.png",
        id : "1"
    },
    {
        image : "./Images/germany.png",
        id : "2"
    },
    {
        image : "./Images/usa.png",
        id : "3"
    },
    {
        image : "./Images/canada.png",
        id : "4"
    },
    {
        image : "./Images/france.png",
        id : "5"
    },
    {
        image : "./Images/australia.png",
        id : "6"
    },
    
]
const FlagButton = ({clickCountry,uniqueCountry,del})=>{
   
    return(
        <Fragment>
        {
            FlagImageData.map((e)=>{
                return(
                    <button onClick={()=>clickCountry(e.id)} id = {e.id}>
                    <img src={e.image}/>
                    </button>
                )
            })
        }
        <div className="country-main-button">
        {
            uniqueCountry.map((e)=>{
                return(
                    <div className="option">
                    <button type="button" id={e.id} onClick={()=>del(e.id)}
                     className="closebutton">{e.name}
                    <span className="cross-span">
                    <img src="./Images/bi_x.png"
                    alt="close icon" 
                    className="close-icon"/>
                    </span>
                </button>
                </div>
                )
            })
        }
        </div>
            
            
      </Fragment>
    )
}

export default FlagButton;
export {FlagImageData};