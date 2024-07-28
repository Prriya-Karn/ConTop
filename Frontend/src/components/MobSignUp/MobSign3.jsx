import React from "react";
import MobLogo from "./MobLogo";
import './MobSign3.css';

const MobSign3 = ()=>{
    return(
        <>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto mobileSignPage">

              <MobLogo />
              <div className="main-mobsign3">
              <div className="mobSignupas">
              <h2>Signup as an</h2>
              <h3 className="app-mob-par">Applicant/Parent</h3>
            </div>

            <div className="mobSign3upas-para">
                <p>Choose Your Preferred Countries</p>
              </div>




              <div className="main-mob-flags mt-4 d-flex">
              <div className="mob-flags-country uk">
                <img src="./Images/UK.png" />
                <p>U.K.</p>
              </div>

              <div className="mob-flags-country">
                <img src="./Images/germany.png" />
                <p>Germany</p>
              </div>

              <div className="mob-flags-country">
                <img src="./Images/US.png" />
                <p>U.S.A</p>
              </div>

              <div className="mob-flags-country">
                <img src="./Images/canada.png" />
                <p>Canada</p>
              </div>
            </div>
            
            <div className="main-mob-flags d-flex mt-1">
            <div className="mob-flags-country">
                <img src="./Images/france.png" />
                <p>France</p>
              </div>

              <div className="mob-flags-country">
                <img src="./Images/australia.png" />
                <p>Australia</p>
              </div>
              </div>

              

              <div>
              <label className="mob-choose-list mt-4 specialization-mob">List of Countries</label>
              <div className="dropdown">

                <button style={{
                  width: "500px", height: "47px", textAlign: "left",
                  backgroundColor: "transparent", color: "black", borderColor: "#CBD1D8"
                }}
                  className="btn btn-outline-secondary mobile-master-button
  dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Choose from list
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

            </div>


            <div className="course-mob-butt d-flex mt-3">
            <div className="d-flex course-but-1 bg-primary">
              <button className="btn">Computer Science<img className="comp-img" src="./Images/cross.png" /> </button>
              
            </div>
            <div className="d-flex course-but-1">
              <button className="btn">MBA<img className="comp-img" src="./Images/cross.png" /></button>
      
            </div>
            <div className="d-flex course-but-1">
              <button className="btn">Data Science<img className="comp-img" src="./Images/cross.png" /></button>
              
            </div>

          </div>


          <div className="mob-back-cont mt-2 d-flex">
            <button className="btn">⬅ Back</button>
            <button className="btn">Continue</button>
          </div>

</div>



</div>
</div>
</div>
</section>

    </>
    )
}

export default MobSign3;