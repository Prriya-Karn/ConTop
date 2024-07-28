import React from "react";
import MobLogo from "./MobLogo";
import './Mobsign2.css';

const MobSign2 = ()=>{
    return(
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

            <div className="app-jou-mob">
            <p>Where are you in the application journey?</p>
            </div>

            <div className="main-jus-exp-mob">

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Just Exploring Now</p>
            </div>

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Shortlisting colleges, planning tests</p>
            </div>

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Shortlisting colleges, planning tests</p>
            </div>

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Shortlisting colleges, planning tests</p>
            </div>

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Shortlisting colleges, planning tests</p>
            </div>

            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Shortlisting colleges, planning tests</p>
            </div>

            </div>

            <div className="app-jou-mob">
            <p>What term and year do you plan to start in?</p>
            </div>


            <div className="dat-opt-mob d-flex">
            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Sept-Nov (Fall)</p>
            </div>
            <div className="jus-exp-mob sept-mob d-flex">
            <input type="radio"/>
            <p>Mar-May (Spring)</p>
            </div>
            </div>

            <div className="dat-opt-mob mt-2 d-flex">
            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Sept-Nov (Fall)</p>
            </div>
            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Mar-May (Spring)</p>
            </div>
            <div className="jus-exp-mob d-flex">
            <input type="radio"/>
            <p>Mar-May (Spring)</p>
            </div>
            </div>

            <label className="specialization-mob mt-4">Year</label>
            <div className="dropdown">
            <button className="btn btn-secondary bg-white text-black dropdown-toggle"
            style={{marginLeft: "6px"}}
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              2024
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
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

export default MobSign2;