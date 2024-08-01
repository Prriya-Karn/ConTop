import React, { useContext } from "react";
import Enterinput, { inputdata } from "./Enterinput";
import MobileNumber from "./MobileNumber";
import { NavLink } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import OTPInput, { ResendOTP } from "otp-input-react";
import AuthContext from "../../context/Authentication/AuthContext";

const EnterOtpSign = () => {
  const {setOTP,OTP} = useContext(AuthContext);
  // const onVerifyOtp = ()=>{
  //   window.confirmationResult.confirm(OTP).then(async(res)=>{
  //     console.log(res);
  //   })
  // }
  return (
    <>
<div className="enterOtpNav">
        <Navbar/>
      <section className="Sign_main enterOtpMain d-flex align-items-left overflow-x-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="container">
                <div className="row row-sign-1">
                  <div className="col-lg-6 col-md-5 me-5 order-1 order-lg-1 sign-column1">
                    <div className="row sign-inner-row-1">
                      <h1 className="unlock">Unlocking Your</h1>
                      <h1 className="global">Global Potential</h1>
                      <p>
                        Sign up for <span>Studying Abroad Success</span> today!
                      </p>
                    </div>
                    <div className="row sign-inner-row-2">
                      <img src="./Images/Searching - Looking.png" />
                    </div>
                  </div>
                  <div
                    className="col-lg-5 col-md-5 me-5  col-12 order-2 order-lg-2
            sign-column2 flex-column mb-5"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="sign-buttons">
                      <button className="sign-button-1">SIGN UP</button>
                      <button className="sign-button-2">LOG IN</button>
                    </div>
                    <div className="sign-p">
                      <p className="mt-2">Welcome, We are glad to see you!</p>
                    </div>
                    <div className="sign-mobile">
                      <label for="exampleInputMobile" className="form-label">
                        Mobile Number
                      </label>
                      <MobileNumber />
                      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                      <br></br>
                      <div id="recaptcha-container"></div>
                      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure className="otp-container"/>
                      
                    </div>
                    <p className="send-p mt-4 mb-4">
                      Sign Up with Email instead
                    </p>
                    <div className="check-p">
                      <p className="check-p-1">
                        <input type="checkbox" className="check-sign" /> By
                        signing up, you are creating a CONNECTOP account, and
                        you agree to CONNECTOP’s <a href="#">Term of Use</a> and{" "}
                        <a href="#">Privacy Policy.</a>
                      </p>
                      <p>
                        <input type="checkbox" className="check-sign" />{" "}
                        Remember Me as <a href="#">Member</a> of{" "}
                        <a href="#">CONNECTOP Community.</a>
                      </p>
                    </div>
                    <NavLink exact to="/applicantparent">
                      <button
                      // onClick={()=>onVerifyOtp}
                        className="send-otp mt-3 mb-3"
                        style={{ background: "#3568FF" }}
                      >
                        Verify OTP and Submit
                      </button>
                    </NavLink>
                    <div className="check-p">
                      <p className="alread-send">
                        Already a part of CONNECTOP Community?{" "}
                        <NavLink exact to="/login">
                          <a>LOGIN </a>
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
      </div>
    </>
  );
};

export default EnterOtpSign;
