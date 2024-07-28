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
import MobLogo from "../MobSignUp/MobLogo";
import Dropdown from "./Dropdown";

const ApplicantParentSign = () => {
  return (
    <>
      <Navhome />
      <MobLogo />

      <section className="Sign_main d-flex align-items-left overflow-y-hidden overflow-x-hidden mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="container">
                <div className="row row-sign-1 mb-5" style={{ gap: "5rem" }}>
                  <Applicant />
                  <div
                    className="col-lg-5 me-5 col-md-5 col-12 order-2 order-lg-2
            sign-column2 sign-column2-applicant flex-column mb-5"
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
                    <div className="mt-4 mb-4 sign-choose-content">
                      <ChooseContent content={chooseData[0].content} />
                    </div>

                    <div className="sign-mobile">
                      <Dropdown options={multiOptdata[0].dropdownItem} label={multiOptdata[0].multi}/>
                      <div className="sign-mobile">
                        <label
                          for="exampleInputEmail1"
                          className="form-label mt-3"
                          style={{ color: "#323A46" }}
                        >
                          Specialization ( Top 3 preferences )
                        </label>
                        <img className="mb-5" src="./Images/Frame.png" />
                      </div>

                      <div className="sign-mobile mt-3">
                        {/* <MultiOpt
                          label={multiOptdata[1].label}
                          multi={multiOptdata[1].multi}
                          dropdownItem={multiOptdata[1].dropdownItem}
                        /> */}
                        <Dropdown options={multiOptdata[1].dropdownItem} label={multiOptdata[1].multi}/>
                      </div>
                    </div>
                    <div className="options d-flex">
                      <ButtonChoose
                        branchName={buttData[0].branchName}
                        image={buttData[0].image}
                        className={buttData[0].className}
                      />

                      <ButtonChoose
                        branchName={buttData[1].branchName}
                        image={buttData[1].image}
                        className={buttData[1].className}
                      />
                      <ButtonChoose
                        branchName={buttData[2].branchName}
                        image={buttData[2].image}
                        className={buttData[2].className}
                      />
                    </div>

                    <div className="backContButt">

                      <NavLink exact to="/applicantParentSign2">
                        <BackContButt
                          bttName={dataBackCont[1].bttName}
                          backgroundColor1={dataBackCont[1].backgroundColor1}
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

export default ApplicantParentSign;
