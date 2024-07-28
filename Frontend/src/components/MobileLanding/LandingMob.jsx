import React from "react";
import './MobLand.css';
import { NavLink } from "react-router-dom";
import ButtonsMob, { buttMobiData } from "../MobSignUp/ButtonsMob";

const LandingMob = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto">
        <div className="imageLogoMob">
        <img src="./Images/MobLogo.png"/>
        </div>
        <div className="headMobsection">
        <h1 className="mob-head">
        Engage with <span>Students & Alumni  </span> to Enhance Your Experience and Learn from  
         Personal Stories <img src="./Images/bg.png" className="img-fluid"/>
        </h1>
        </div>
        <div className="subheadMobsection">
        <p>
        Learn about campus life, application processes, jobs after 
        graduation, or living in a foreign country. Book your free 
        call and make an informed college decisions!
        </p>
        </div>

        <div className="signLogMob">

        <ButtonsMob
        buttName = {buttMobiData[0].buttMobName}
        />
        <ButtonsMob
        buttName = {buttMobiData[1].buttMobName}
        backgroundColor={buttMobiData[1].backgroundColor}
        />
        </div>

        
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default LandingMob;