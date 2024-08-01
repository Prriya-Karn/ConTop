import React, { Fragment, useEffect, useState } from "react";
import ButtonChoose, { buttData } from "./ButtonChoose";
import MultiOpt, { multiOptdata } from "./MutltiOpt";
import BackContButt, { dataBackCont } from "./BackContButt";
import ChooseContent, { chooseData } from "./ChooseContent";
import SignLoginButt, { signlogdata } from "./SignLoginButt";
import Applicant from "./Applicant";
import Navhome from "../Home/Navhome";
import { NavLink } from "react-router-dom";
import MobLogo from "../MobSignUp/MobLogo";
import Dropdown from "./Dropdown";
import SpecButton from "./SpecButton";

const ApplicantParentSign = () => {
  const [specButt,setSpecButt] = useState([]);

  const clickSpecButt = (id)=>{
   

    setSpecButt((preVal)=>{
      
      const filter = buttData.find((e)=>{
        return e.id===id;
      })
      return [...preVal,filter]

    });
  }
   useEffect(()=>{
    console.log(specButt)
  })

  const deleteButt = (id)=>{
    const filter = specButt.filter((e)=>{
      return e.id!=id;
    })
    setSpecButt(filter)
  }
 
 





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
                      <Dropdown options={multiOptdata[0].dropdownItem}
                       label={multiOptdata[0].multi}/>
                      <div className="sign-mobile">
                        <label
                          for="exampleInputEmail1"
                          className="form-label mt-3"
                          style={{ color: "#323A46" }}>
                          Specialization ( Top 3 preferences )
                        </label>
                        <div className="spec-main-butt">

                       <SpecButton
                       click = {clickSpecButt}
                       />

                        </div>
                        </div>
                    </div>
                    
                    <div className="options">
                    
                          
                          <ButtonChoose
                          specButt = {specButt}
                          deleteButt = {deleteButt}
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
