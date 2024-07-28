import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Mentee from "./components/Mentor/Mentee";
import Mentor from "./components/Mentor/mentor";
import ChatApplication from "./components/Mentor/ChatApplication";

import MyQualification from "./components/CompleteProfile/MyQualification";
import Myqua from "./components/CompleteProfile/myqua";
import MentorProfile from "./components/MentorProfile/MentorProfile";
import YourProfile from "./components/YourProfile/YourProfile";

import LandingMob from "./components/MobileLanding/LandingMob";
import MentorMentee from "./components/MobileMentorMentee/MobMentorMentee";
import MobMentorMentee from "./components/MobileMentorMentee/MobMentorMentee";
import MobSign from "./components/MobSignUp/MobSign";
import MobBec from "./components/MobBec/MobBec";
import MobJoin from "./components/MobJoin/MobJoin";

import { Login, Loginpage2 } from "./components/LoginPage";
import { LandingPage,SelectRole } from "./components/LandingPage";
import { BookMentor, Filter, Home } from "./components/Home";
import { ApplicantParentSign, ApplicantParentSign2, ApplicantParentSign3, ApplicantParentSign4, ApplicantParentSign5, EnterOtpSign, Signup } from "./components/signupPagee";
import { FilterMentor, HomeMentor, MentorBookpage, YourAnalytics, YourSessionMentor } from "./components/MentorPage";
import { MobSign1, MobSign2, MobSign3, MobSign4, MobSign5 } from "./components/MobSignUp"; 
import AuthState from "./context/Authentication/AuthState";


function App() {
  return (
    <>
      <span className="hero-grad"> <img src="./Images/Group 62.png" style={{ width: "650px", height: "700px", position: "absolute", top: "-1rem", left: "790px", zIndex: -1 }} /></span>
      <AuthState>
      <Routes>
        {/* Landing Page */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/selectRole" element={<SelectRole/>}/>

        {/* SignUp Routes */}
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/enterotpsign" element={<EnterOtpSign />} />
        <Route exact path="/applicantparent" element={<ApplicantParentSign />} />
        <Route exact path="/applicantParentSign2" element={<ApplicantParentSign2 />} />
        <Route exact path="/applicantparent3" element={<ApplicantParentSign3 />} />
        <Route exact path="/applicantparent4" element={<ApplicantParentSign4 />} />
        <Route exact path="/applicantparent5" element={<ApplicantParentSign5 />} />

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Mentor Page Routes */}
        <Route exact path="/homementor" element={<HomeMentor />} />
        <Route exact path="/mentorbookpage" element={<MentorBookpage />} />
        <Route exact path="/filtermentor" element={<FilterMentor />} />
        <Route exact path="/yoursessionmentor" element={<YourSessionMentor />} />
        <Route exact path="/youranalytics" element={<YourAnalytics />} />
      
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mentor" element={<Mentor />} />


        <Route exact path="/loginpage2" element={<Loginpage2 />} />

        <Route exact path="/hero" element={<LandingPage />} />
        <Route exact path="/HomePage1" element={<Home />} />
        <Route exact path="/bookmentor" element={<BookMentor />} />
        <Route exact path="/filter" element={<Filter />} />
        <Route exact path="/myqualification" element={<Myqua />} />
        <Route exact path="/Mentorprofile" element={<MentorProfile />} />
        <Route exact path="/yourprofile" element={<YourProfile />} />
        <Route exact path="/chat" element={<ChatApplication />} />

        <Route exact path="*" element={<div><h1>Error page</h1></div>} />


        {/*Application routing start*/}
        <Route exact path="/mobLand" element={<LandingMob />} />
        <Route exact path="/mobmentormentee" element={<MobMentorMentee />} />
        <Route exact path="/mobsign" element = {<MobSign/>}/>
        <Route exact path="/mobBac" element = {<MobBec/>}/>
        <Route exact path = "/mobjoin" element = {<MobJoin/>}/>
        <Route exact path = "/mobsign1" element = {<MobSign1/>}/>
        <Route exact path = "/mobsign2" element = {<MobSign2/>}/>
        <Route exact path = "/mobsign3" element = {<MobSign3/>}/>
        <Route exact path = "/mobsign4" element = {<MobSign4/>}/>
        <Route exact path = "/mobsign5" element = {<MobSign5/>}/>
        {/*Application rounting end*/}




      </Routes>
      </AuthState>

    </>
  );
}

export default App;
