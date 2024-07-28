import React from "react";
import './Join.css';
const MobJoin = ()=>{
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


                <div className="mobjoinhead">
                <h1>Join Our Invite-Only Mentor Community</h1>
                </div>
<div className="maininputmobjoin">
                <div className="emailmob joinMob">
<label className="">LinkedIn URL</label>
<div className="emailinp joinemail" style={{marginTop:"-6px"}}>
<input type="email" required/>
</div>
</div>

<div className="emailmob joinMob">
<label className="">Email</label>
<div className="emailinp joinemail" style={{marginTop:"-6px"}}>
<input type="email" required/>
</div>
</div>

<div className="emailmob joinMob">
<label className="">Your Profile URL (on ConnectOp)</label>
<div className="emailinp joinemail" style={{marginTop:"-6px"}}>
<input type="email" required/>
</div>
</div>
<div className="emailmob joinMob">
<label className="">Country of Citizenship</label>
<div className="emailinp joinemail" style={{marginTop:"-6px"}}>
<input type="email" required/>
</div>
</div>
<div className="emailmob joinMob">
<label className="">Choose the latest country you studied at</label>
<div className="emailinp joinemail" style={{marginTop:"-6px"}}>
<input type="email" required/>
</div>
</div>
</div>

<div className="signLogMob joinbut">
        <button className="btn">Sign Up</button>
        </div>

</div>
</div>
</div>
</section>
        </>
    )
}

export default MobJoin;