import React from "react";
import './MobMentorMentee.css';
import { NavLink } from "react-router-dom";
import ButtonsMob, { buttMobiData } from "../MobSignUp/ButtonsMob";
const MobMentorMentee = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto">

                <div className="imageLogoMob">
                <img src="./Images/MobLogo.png"/>
                </div>

                <div className="mobment-head">
                <h1>Sign Up as:</h1>
                </div>

                <div className="mobment-subhead">
                <p>Are you a Mentor or an Applicant/Parent?</p>
                </div>

                <div className="mobment-box d-flex mb-4">

                <div className="mob-mentor">
                <img src="./Images/Hello.png"/>
                <div className="mobinnertextment">
                <h1>Mentor</h1>
                </div>
                
                </div>
                <div className="mob-applicant">
                <img src="./Images/Writing.png" className="img-fluid"/>
                <div className="mobinnertextappl">
                <h1>Applicant/ Parent</h1>
                </div>
                
                </div>
                </div>
                
                <ButtonsMob
                buttName = {buttMobiData[0].buttMobName}
                />


                </div>
                </div>
                </div>
                </section>
        </>
    )
}

export default MobMentorMentee;