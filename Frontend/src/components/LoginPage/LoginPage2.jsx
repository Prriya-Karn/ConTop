import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navhome from "../Home/Navhome";
import MobileNumber from "../signupPagee/MobileNumber";
import OTPInput, { ResendOTP } from "otp-input-react";
import AuthContext from "../../context/Authentication/AuthContext";
const Loginpage2 = () => {
  const {OTP,setOTP} = useContext(AuthContext);
  return (
    <>
      <Navhome />
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
                    className="col-lg-5 login-sign-column2 login2-sign-column2  col-md-4 me-5 col-12 order-2 order-lg-2
         sign-column2 flex-column mb-5"
                    style={{ marginTop: "7rem" }}
                  >
                    <div className="sign-buttons">
                      <button className="sign-button-2">SIGN UP</button>
                      <button className="sign-button-1">LOG IN</button>
                    </div>
                    <div className="sign-p login-p">
                      <p className="mt-2">Welcome, We are glad to see you!</p>
                    </div>
                    <div className="sign-mobile login-mobile">
                      <p>Mobile Number</p>
                      <MobileNumber />

                      <button className="second-send-otp login-otp mb-3">
                        SEND OTP
                      </button>
                      <p className="send-p  login2-p">Resend OTP</p>

                      <br></br>
                      <div className="sign-mobile login2-otp">
                      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure className="otp-container"/>
                      </div>
                    </div>
                    <p className="send-p login-email-p login2-email-p mt-4 mb-4">
                      Login with Email instead
                    </p>

                    <button
                      className="send-otp login-otp login2-verify mt-1 mb-3"
                      style={{ background: "#3568FF" }}
                    >
                      Verify OTP and Submit
                    </button>
                    <div className="check-p">
                      <p className="alread-send login-send login2-send">
                        Not a part of CONNECTOP Community?{" "}
                        <NavLink exact to="/signup">
                          <a>Sign Up </a>
                        </NavLink>
                        here
                      </p>
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

export default Loginpage2;
