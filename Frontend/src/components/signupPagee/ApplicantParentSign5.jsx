import React from "react";
import ButtonChoose, { buttData } from "./ButtonChoose";
import MultiOpt, { multiOptdata } from "./MutltiOpt";
import BackContButt, { dataBackCont } from "./BackContButt";
import ChooseContent, { chooseData } from "./ChooseContent";
import SignLoginButt, { signlogdata } from "./SignLoginButt";
import SignColumn1 from "./Applicant";
import Applicant from "./Applicant";
import Appjourneyformcheck, { appformcheckdata } from "./Appjourneyformcheck";
import Enterinput, { inputdata } from "./Enterinput";
import MobileNumber from "./MobileNumber";
import CheckData from "./CheckData";
import Navhome from "../Home/Navhome";
import { NavLink } from "react-router-dom";
const ApplicantParentSign5 = () => {
  return (
    <>
      
      <div>
      <Navhome/>
    
      </div>
      <section className="Sign_main d-flex align-items-left overflow-y-hidden overflow-x-hidden mt-5 mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="container">
                <div className="row row-sign-1 mb-5" style={{ gap: "5rem" }}>
                  <Applicant />

                  <div
                    className="col-lg-5 me-5 col-md-12 col-12 order-1 order-lg-2
            sign-column2 sign-column2-applicant4 flex-column mb-5"
                    style={{ width: "438px", height: "583.65px" }}
                  >
                    <div className="sign-buttons">
                      <SignLoginButt
                        buttName={signlogdata[0].buttName}
                        className={signlogdata[0].className}
                      />
                      <SignLoginButt
                        buttName={signlogdata[1].buttName}
                        className={signlogdata[1].className}
                      />
                    </div>
                    <div
                      className="mt-4 mb-4 sign-choose-content sign-choose-content5"
                      style={{ width: "30rem" }}
                    >
                      <ChooseContent content={chooseData[5].content} />
                      <p style={{ marginTop: "-0.7rem" }}>
                        (you can select multiple options)
                      </p>
                    </div>

                    <div
                      className="form-check appjourney"
                      style={{ width: "313.36", height: "420px", gap: "28px" }}
                    >
                      {CheckData.map((e) => {
                        return (
                          <>
                            <div
                              className="inner-appjourney"
                              style={{ marginRight: "1rem", width: "600px" }}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                for="flexRadioDefault1"
                              >
                                {e.label}
                              </label>
                            </div>
                          </>
                        );
                      })}
                    </div>

                    <div
                      className="backContButt"
                      style={{ marginTop: "-2rem" }}
                    >
                      <NavLink exact to="/applicantparent4">
                        <BackContButt
                          bttName={dataBackCont[0].bttName}
                          backgroundColor={dataBackCont[0].backgroundColor}
                          backgroundColor1={dataBackCont[0].backgroundColor1}
                        />
                      </NavLink>

                      <NavLink exact to="/HomePage1">
                        <BackContButt
                          bttName={dataBackCont[2].bttName}
                          backgroundColor1={dataBackCont[2].backgroundColor1}
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicantParentSign5;
