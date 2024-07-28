import React from "react";
const appformcheckdata = [
    {
        label : "Just Exploring Now"
    },
    {
        label:"Shortlisting colleges, planning tests"
    },
    {
        label : "Tests all done, yet to apply"
    },
    {
        label: "Applied to a few universities"
    },
    {
        label: "Applications done awaiting admits"
    },
    {
        label:"Got offers, confused between universities"
    },
    
]
const Appjourneyformcheck = ({label})=>{
    return(
        <>
        <div className="inner-appjourney">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  {label}
  </label>
  </div>
        
        </>
    )
}

export default Appjourneyformcheck;
export {appformcheckdata};