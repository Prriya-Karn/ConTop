import React from "react";
import './MobSign.css';
import { NavLink } from "react-router-dom";
import MobLogo from "./MobLogo";
import ButtonsMob, { buttMobiData } from "./ButtonsMob";
const MobSign = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto">

                <MobLogo/>

<div className="SignMobMain">

<div className="signmob-head">
<h1>SIGN UP</h1>
</div>

<div className="signmob-sub">
<p>Welcome, We are glad to see you!</p>
</div>

<div className="emailmob">
<label>Email</label>
<div className="emailinp">
<input type="email" className="firstName" required/>
</div>
</div>

<div className="passmob ">
<label>Password</label>
<div className="emailpass">
<input type="password" className="firstName" required/>
</div>
</div>

<div className="submob1">
<p>Sign Up with phone number instead</p>
</div>

<div className="radiomob1 mt-4">

<p><input type="checkbox"/> By signing up, you are creating a CONNECTOP account, and you agree to CONNECTOP’s <span>Term of Use</span> and <span>Privacy Policy.</span>
</p>
</div>

<div className="radiomob2">
<p><input type="checkbox"/> Remember Me as <span>Member</span> of <span>CONNECTOP Community.</span></p>
</div>
        <ButtonsMob 
        buttName = {buttMobiData[0].buttMobName}
        />
        <div className="socialmobchoose">
        <img src="./Images/Frame 18.png"/>
        </div>
        <div className="mobsignvia">
        <p>Sign Up with</p>
        </div>

        <div className="socialmoblink d-flex">
        <div className="google">
        <img src="./Images/Google.png"/>
        </div>
        <div className="facebook">
        <img src="./Images/facebook.png"/>
        </div>
        <div className="linkedin">
        <img src="./Images/linkedin.png"/>
        </div>
        </div>
        <div className="mob-community">
        <p>Already a part of  CONNECTOP Community? <span>LOGIN</span> here</p>
        </div>
      
</div>

                </div>
                </div>
                </div>
                </section>
        </>
    )
}

export default MobSign;

