import React from "react";
import './MobBec.css';
import { NavLink } from "react-router-dom";
const MobBec = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto">

                <div className="mobNavbar">
                <div className="mobHamburger">
                <img src="./Images/hamburger.png"/>
                </div>

                <div className="mobLogoNav">
                <img src="./Images/MobLogo.png"/>
                </div>
                <div className="mobNotifiNav">
                <img src="./Images/mi_notification.png"/>
                </div>
                </div>


                <div className="appApproveMob">

                <div className="approContentMob">
                <p className="mobappr1">Thank You for applying to become a mentor,</p>
                <p className="mobappr2">You will be contacted soon if your application approves!</p>
                </div>

                <div className="approvImageMob">
                <img src="./Images/approveImage.png"/>
                </div>

                <div className="BacktohomeMob">
                <NavLink exact to="/mobjoin">
                <button className="btn">Back to home page</button>
                </NavLink>
                </div>
                </div>
                <div className="footerMob">
                <div className="homeMob">
                <img src="./Images/mobHome.png"/>
                </div>
                <div className="searchMob">
                <img src="./Images/mobSearch.png"/>
                </div>
                <div className="tickMob">
                <img src="./Images/tickMob.png"/>
                </div>
                <div className="profileMob">
                <img src="./Images/mobprofile.png"/>
                </div>
                </div>
                </div>



                </div>
                </div>
               
                </section>
        </>
    )
}

export default MobBec;