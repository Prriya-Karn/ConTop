import React from "react";
import MobLogo from "./MobLogo";
import './MobSign1.css';
import MultiOpt, { multiOptdata } from "../signupPagee/MutltiOpt";
import ButtonChoose, { buttData } from "../signupPagee/ButtonChoose";
import BackContButt, { dataBackCont } from "../signupPagee/BackContButt";
import { NavLink } from "react-router-dom";
const MobSign1 = () => {
  return (
    <>
      <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto mobileSignPage">

              <MobLogo />

              <div className="mobSignupas">
                <h2>Signup as an</h2>
                <h3 className="app-mob-par">Applicant/Parent</h3>
              </div>

              <div className="mobSignupas-para">
                <p>Choose Your Preferred Course</p>
              </div>

              <div className="main-mob-master">

                <label for=""
                  className="degree-mob-label">Degree Level</label>

                <div className="mobile-dropdown-button">
                  <div className="mobile-input-sign mb-3">
                    <button
                      style={{
                        width: "500px", height: "47px", textAlign: "left",
                        backgroundColor: "transparent", color: "black", borderColor: "#CBD1D8"
                      }}
                      className="btn btn-outline-secondary dropdown-toggle mobile-master-button"
                      type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Masters
                    </button>
                    <ul className="dropdown-menu">

                      <li><a className="mobile-dropdown-item" href="#">Masters</a></li>
                      <li><a className="mobile-dropdown-item" href="#">Masters</a></li>
                      <li><a className="mobile-dropdown-item" href="#">Masters</a></li>
                      <li><a className="mobile-dropdown-item" href="#">Masters</a></li>
                    </ul>

                    <div className="">
                      <label className="specialization-mob">Specialization ( Top 3 preferences )</label>

                      <div className="specia-images-main">
                        <div className="image1-specia">
                          <img src="./Images/code.png" />
                          <p>Computer Science</p>
                        </div>

                        <div className="image1-specia">
                          <img src="./Images/build.png" />
                          <p>Computer Science</p>
                        </div>

                        <div className="image1-specia">
                          <img src="./Images/engineer.png" />
                          <p>Computer Science</p>
                        </div>

                        <div className="image1-specia">
                          <img src="./Images/database.png" />
                          <p>Computer Science</p>
                        </div>

                        <div className="image1-specia">
                          <img src="./Images/park.png" />
                          <p>Computer Science</p>
                        </div>

                        <div className="image1-specia">
                          <img src="./Images/biotech.png" />
                          <p>Computer Science</p>
                        </div>
                      </div>
                    </div>


                    <div>
                      <label className="mob-choose-list specialization-mob">Or choose from the list (at most 3)</label>
                      <div className="dropdown">

                        <button style={{
                          width: "500px", height: "47px", textAlign: "left",
                          backgroundColor: "transparent", color: "black", borderColor: "#CBD1D8"
                        }}
                          className="btn btn-outline-secondary mobile-master-button
          dropdown-toggle" type="button" id="dropdownMenuButton1"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>

                    </div>

                    <div className="course-mob-butt d-flex mt-3">
                      <div className="d-flex course-but-1">
                        <button className="btn">Computer Science<img className="comp-img" src="./Images/cross.png" /> </button>
                        
                      </div>
                      <div className="d-flex course-but-1">
                        <button className="btn">MBA<img className="comp-img" src="./Images/cross.png" /></button>
                
                      </div>
                      <div className="d-flex course-but-1">
                        <button className="btn">Data Science<img className="comp-img" src="./Images/cross.png" /></button>
                        
                      </div>

                    </div>


                    <div className="mob-back-cont mt-2 mb-2 d-flex">
                      <button className="btn">⬅ Back</button>
                      <button className="btn">Continue</button>
                    </div>




                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default MobSign1;