import React from "react";
import MobLogo from "./MobLogo";
import './MobSign5.css';
const MobSign5 = ()=>{
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


            <div className="mobSign5-para mb-4">
            <p>What problems are you facing now or could face in the near-future?</p>
            <p className="subpara">(you can select multiple options)</p>
          </div>

          <div className="main-jus-exp-mob sign5checkbox">

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>University Shortlisting / Course Selection</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>SOP / Application Assistance</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Test Prep</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>University Accommodation</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Education Loan</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Scholarship Assistance</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Forex</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Travel / Health Insurance</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Bank Account / Credit Card</p>
          </div>

          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Flight Tickets</p>
          </div>


          <div className="jus-exp-mob sign5jus-exp-mob d-flex">
          <input type="checkbox"/>
          <p>Not Really</p>
          </div>


          </div>

          <div className="mob-back-cont mt-2 mb-5 d-flex">
          <button className="btn">⬅ Back</button>
          <button className="btn">Finish</button>
        </div>


          </div>
          </div>
          </div>
          </section>
        </>
    )
}

export default MobSign5;