import React from "react";
import { NavLink } from "react-router-dom";

import Navhome from "../Home/Navhome";
import { useSelector } from "react-redux";
import MobileNumber from "../signupPagee/MobileNumber";

const Loginpage = () => {
  const userRole = useSelector((state)=>state.user.userRole);
  return (
    <>
      <Navhome/>
      <section
        className="Sign_main d-flex align-items-left overflow-x-hidden"
        style={{ marginTop: "-5rem" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="container">
                <div className="row row-sign-1">
                  <div className="col-lg-6 col-md-6 me-5 order-1 order-lg-1 sign-column1">
                    <div className="row sign-inner-row-1 sign-inner-row-1-login">
                      <h1
                        className="unlock login-unlock"
                        style={{ marginTop: "10rem" }}
                      >
                        Empower your Journey,
                      </h1>
                      <h1 className="global login-global">Welcome Back!</h1>
                      <p className="login-para">
                        Log in to unlock a world of{" "}
                        <span className="login-opp">
                          Oppurtunities{" "}
                          <span className="abr login-abr">Abroad</span>
                        </span>
                      </p>
                    </div>
                    <div className="row sign-inner-row-2">
                      <img src="./Images/Business.png" />
                    </div>
                  </div>
                  <div
                    className="col-lg-5 login-sign-column2 col-md-4 me-5 col-12 order-2 order-lg-2
            sign-column2 flex-column mb-5"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="sign-buttons">
                      {userRole !== null ? (
                        <NavLink exact to="/signup">
                          <button className="sign-button-2">SIGN UP</button>
                        </NavLink>
                      ):(<NavLink exact to="/selectRole">
                        <button className="sign-button-2">SIGN UP</button>
                      </NavLink>)}
                      <button className="sign-button-1">LOG IN</button>
                    </div>
                    <div className="sign-p login-p">
                      <p className="mt-2">
                        Welcome back, We are happy to see you back!
                      </p>
                    </div>
                    <div className="sign-mobile login-mobile">
                      <p>Mobile Number</p>
                      <MobileNumber />

                      <NavLink exact to="/loginpage2">
                        <button className="send-otp login-otp mb-3">
                          SEND OTP ON PHONE NUMBER
                        </button>
                      </NavLink>
                      <button className="send-otp login-otp">
                        SEND OTP ON EMAIL
                      </button>
                      <br></br>
                      <br></br>
                      <p className="send-p login-email-p">
                        Login with Email instead
                      </p>
                      <p className="login-send">
                        Not a part of CONNECTOP Community?{" "}
                        <a href="#">Sign Up </a>here
                      </p>
                    </div>

                    <button
                      className="send-otp  login-otp login-otp-verify"
                      style={{ backgroundColor: "#AEC9EF" }}
                    >
                      Verify OTP and Submit
                    </button>
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

export default Loginpage;
