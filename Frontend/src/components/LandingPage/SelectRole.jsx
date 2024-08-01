import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserRole, setUserRoleNull } from "../../app/Actions/userAction";
// import "./landingpage.css";

const SelectRole = () => {

    const userRole = useSelector((state)=>state.user.userRole);
    const dispatch = useDispatch()
    console.log(userRole)

  const handleRoleClick = (role) => {
    dispatch(setUserRole(role)); // Update state on click
  };
  const navigate = useNavigate();
  const handleContinue = ()=>{
    if(userRole){
        navigate("/signup");
    }
    else{
        dispatch(setUserRole("mentor"));
        setTimeout(() => {
            dispatch(setUserRoleNull());
        }, 500);
    }
  }
  return (
    <>
    <div>
        <Navbar className="applicantPS2"/>
        </div>
      <div className="overflow-hidden h-screen flex flex-col">
        <div className="flex h-full w-full justify-center items-center">
          <div className="flex flex-col">

            <div className="flex flex-col items-center justify-center text-black">
              <p className="text-2xl font-bold mb-1">Sign Up/Log In As:</p>
              <p className="text-xl">
                Are you a Mentor or an Applicant/Parent?
              </p>
            </div>
            <div className="flex flex-row justify-between items-center gap-40 mt-16">
              <div
                className={`flex flex-row gap-2 p-3 rounded-md bg-white justify-items-center items-center w-72 text-black cursor-pointer  ${
                  userRole === "mentor" ? "shadow-lg shadow-black border-2 border-black" : "border border-black"
                }`}
                onClick={() => handleRoleClick("mentor")}
              >
                <img src="./Images/Hello.png" alt="" className="w-28 h-28" />
                <p className="w-full flex justify-center items-center text-xl mb-0">
                  Mentor
                </p>
              </div>
              <div
                className={`flex flex-row gap-2 p-3 rounded-md bg-white justify-items-center items-center w-72 text-black cursor-pointer  ${
                  userRole === "applicant" ? "shadow-lg shadow-black border-2 border-black" : "border border-black"
                }`}
                onClick={() => handleRoleClick("applicant")}
              >
                <img src="./Images/Writing.png" alt="" className="w-28 h-28" />
                <div className="flex flex-col justify-center items-start w-full text-xl">
                  <p className="mb-1">Applicant/</p>
                  <p className="mb-0">Parent</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20 ">
                <div className="border-2 border-black p-1 px-3 text-black font-bold rounded-xl cursor-pointer" onClick={handleContinue}>Continue</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SelectRole;
