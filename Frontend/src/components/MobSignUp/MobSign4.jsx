import React from "react";
import MobLogo from "./MobLogo";
import './MobSign4.css';
import MobileNumber from "../signupPagee/MobileNumber";
const MobSign4 = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto mobileSignPage">

              <MobLogo/>
              <div className="mobSignupas">
              <h2>Signup as an</h2>
              <h3 className="app-mob-par">Applicant/Parent</h3>
            </div>


            <div className="mobSign3upas-para mb-4">
            <p>Let’s personalize your journey! </p>
          </div>

          <div className="emailmob">
          <label>First Name</label>
          <div className="emailinp">
          <input type="text" className="firstName" required/>
          </div>
          </div>

          <div className="emailmob">
          <label>Last Name</label>
          <div className="emailinp">
          <input type="text" className="firstName" required/>
          </div>
          </div>


          <div className="emailmob">
          <label>Email</label>
          <div className="emailinp">
          <input type="email" className="firstName" required/>
          </div>
          </div>


          

          <div className="emailmob">
          <label>Mobile Number</label>
          <div className="dropdown-button mob-phone-button">
          <div className="input-group mb-3">
          <button className="btn btn-outline-secondary mob-phone dropdown-toggle" 
          type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./Images/india.png"/>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input required type="text" className="form-control phone-input"
           aria-label="Text input with dropdown button" value="+91"/>
        </div>
        </div>
        </div>



        <div className="mob-back-cont mt-2 mb-5 d-flex">
        <button className="btn">⬅ Back</button>
        <button className="btn">Continue</button>
      </div>


              </div>
              </div>
              </div>
              </section>
        </>
    )
}

export default MobSign4;