import React, { useState } from "react";
import BackContButt, { dataBackCont } from "./BackContButt";
import ChooseContent, { chooseData } from "./ChooseContent";
import SignLoginButt, { signlogdata } from "./SignLoginButt";
import Applicant from "./Applicant";
import { NavLink } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import FlagButton from "./FlagButton";
const countryName = [
    {
        name : "uk",
        id:1
    },
    {
        name : "germany",
        id:2
    },
    {
        name : "usa",
        id:3
    },
    {
        name : "canada",
        id:4
    },
    {
        name : "france",
        id:5
    },
    {
        name : "australia",
        id:6
    },
]
const ApplicantParentSign3 = ()=>{
    const [country,setCountry] = useState([]);
    const clickCountry = (id)=>{
        const filter = countryName.find((e)=>{
            return e.id == id
        })
        setCountry((preVal)=>{
        
             return [...preVal,filter]
         
        })
    }
    const uniqueCountry = [...new Set(country)]
    console.log(uniqueCountry)
const del = ((id)=>{
    const delCountry = uniqueCountry.filter((e)=>{
        return e.id!=id
    })
    setCountry(delCountry)
})



    return(
        <>
        <div>
        <Navbar className="applicantPS2"/>
        </div>

        <section className="Sign_main d-flex align-items-left overflow-y-hidden  overflow-x-hidden mt-5">
        <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">

        <div className="container">
        <div className="row row-sign-1 mb-5" style={{gap:"5rem"}}> 
      
        <Applicant/>
      
            <div className="col-lg-5 me-5 col-md-12 col-12 order-1 order-lg-2
            sign-column2 sign-column2-applicant2 flex-column mb-5" style={{width:"438px",height:"583.65px"}}>
          
            <div className="sign-buttons">
          <SignLoginButt
          buttName = {signlogdata[0].buttName}
          className = {signlogdata[0].className}
          />
          <SignLoginButt
          buttName = {signlogdata[1].buttName}
          className = {signlogdata[1].className}
          />
          </div>
          <div className="mt-4 sign-choose-content">
         <ChooseContent
         content = {chooseData[3].content}
         />
          </div>


      <div className="countryFlags">
      <FlagButton
      clickCountry = {clickCountry}
      uniqueCountry = {uniqueCountry}
      del = {del}
      />
      </div>

        
          
          <div className="backContButt d-flex">
          {/*<ButtonChoose
          branchName={buttData[3].branchName}
          image = {buttData[3].image}
          className = {buttData[3].className}
          />
          <ButtonChoose
          branchName={buttData[4].branchName}
          image = {buttData[4].image}
          className = {buttData[4].className}
          />
          <ButtonChoose
          branchName={buttData[5].branchName}
          image = {buttData[5].image}
          className = {buttData[5].className}
          />*/}
          
          
          </div>

          
          
          <div className="backContButt">
          <NavLink exact to="/applicantParentSign2">
         <BackContButt 
         bttName={dataBackCont[0].bttName}
         backgroundColor={dataBackCont[0].backgroundColor}
         backgroundColor1={dataBackCont[0].backgroundColor1}
         />
         </NavLink>
         
         <NavLink exact to="/applicantparent4">
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
    )
}

export default ApplicantParentSign3;
export {countryName};
