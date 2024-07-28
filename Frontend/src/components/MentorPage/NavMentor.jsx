import React, { useState } from "react";
import './Navmentor.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";

import { NavLink } from "react-router-dom";
const NavMentor = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [stickNav, setStickNav] = useState(false);


    return (
        <>
            <header className="head-nav">
                <nav className={stickNav === true ? "sticky-navbar" : "navbar-section"}>
                    {/* logo section*/}
                    <div className="nav-logo">
                        <a className="" href="#"><img src="./Images/logo.png" className="img-fluid" /></a>
                    </div>

                    {/* menu section for desktop*/}
                    <div className={showMenu === true ? "tab-menu" : "navbar-menu-section"}>
                        <ul className="tab-menu-homePage-ul">
                            <li><NavLink className="nav-link navbar-link-book active" exact to="/homementor"><a href="#">Home</a></NavLink></li>
                            <li><NavLink exact to="/mentorbookpage"><a href="#">Book a Mentor</a></NavLink></li>
                            <li><NavLink exact to="/yoursessionmentor"><a href="#">Your Sessions</a></NavLink></li>
                            <li><NavLink exact to="/youranalytics"><a href="#">Your Analytics</a></NavLink></li>

                        </ul>
                    </div>

                    {/*hamburger menu start for tab*/}
                    {
                        showMenu === true ? <>
                            <div className="cross-sign">
                                <NavLink exact to="" onClick={() => { setShowMenu(!showMenu) }}><ImCross className="cross" /></NavLink>
                            </div>

                            {/*dropdown menu*/}
                            <form className="d-flex main-nav-menu">
                                <div className="dropdown-button tab-dropdown-style">
                                    <div className="input-group mb-3">

                                        <div className={showMenu === true ? "tab-testi-img" : "testi-img-home"}>
                                            <img src='./Images/yourprofileProfile.png' className="img-fluid" style={{ width: "2rem", height: "2rem" }} />
                                        </div>
                                        <button className="btn dropdown-toggle nav-menu" style={{ border: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        </button>




                                        <ul className="dropdown-menu" style={{ marginLeft: "12rem", width: "229px", height: "250px", borderRadius: "10px", border: "1px solid  #00000026" }}>

                                        <div className="d-flex mentorprofile">
                                        <img src="./Images/yourprofileProfile.png"/>
                                        <h1>Priya Karn</h1>
                                        </div>
                                            <a className="dropdown-item view-pro mb-5" style={{ width: "120px", color: "#979797", fontWeight: "400", fontSize: "12px" }} href="#">View Profile</a>
                                            <div style={{ borderBottom: "1px solid #00000026", width: "204px", marginLeft: "14px" }}></div>
                                            <div style={{ width: "180px", height: "110px", position: "relative", top: "10px", left: "20px", gap: "11px", textAlign: "left" }}>

                                                <div className="link-box">
                                                    <li className="d-flex"><img src="./Images/cale.png" /><a className="dropdown-item" href="#">My Sessions</a></li>
                                                    <li className="d-flex"><img src="./Images/person_check.png" /><a className="dropdown-item" href="#">Become A Mentor</a></li>
                                                    <li className="d-flex"><img src="./Images/chat.png" /><a className="dropdown-item" href="#">Feedback</a></li>
                                                    <li className="d-flex"><img src="./Images/logout.png" /><a className="dropdown-item" style={{ color: "#FD0C0C" }} href="#">Logout</a></li>
                                                </div>

                                            </div>


                                        </ul>
                                    </div>
                                </div>


                            </form>

                        </>
                            : <>
                                <div className="hamburger hamburger-tab">
                                    <NavLink exact to="" onClick={() => { setShowMenu(!showMenu) }}><GiHamburgerMenu className="img" /></NavLink>
                                </div>
                            </>
                    }


                    {/**/}

                    <form className="d-flex main-nav-menu">
                        <div className="dropdown-button hide-dropdown-button">
                            <div className="input-group mb-3">

                                <div className='testi-img'>
                                    <img src='./Images/yourprofileProfile.png' className="img-fluid" style={{ width: "2rem", height: "2rem" }} />
                                </div>
                                <button className="btn dropdown-toggle nav-menu" style={{ border: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </button>




                                <ul className="dropdown-menu" style={{ marginLeft: "12rem", width: "229px", height: "250px", borderRadius: "10px", border: "1px solid  #00000026" }}>

                                    <div className="d-flex mentorprofile">
                                    <img src="./Images/yourprofileProfile.png"/>
                                    <h1>Priya Karn</h1>
                                    </div>
                                    <a className="dropdown-item view-pro mb-5" style={{ width: "120px", color: "#979797", fontWeight: "400", fontSize: "12px" }} href="#">View Profile</a>
                                    <div style={{ borderBottom: "1px solid #00000026", width: "204px", marginLeft: "14px" }}></div>
                                    <div style={{ width: "180px", height: "110px", position: "relative", top: "10px", left: "20px", gap: "11px", textAlign: "left" }}>

                                        <div className="link-box">
                                            <li className="d-flex"><img src="./Images/cale.png" /><a className="dropdown-item" href="#">Your Sessions</a></li>
                                            <li className="d-flex"><img src="./Images/analytics.png" /><a className="dropdown-item" href="#">Your Analytics</a></li>
                                            <li className="d-flex"><img src="./Images/chat.png" /><a className="dropdown-item" href="#">Feedback</a></li>
                                            <li className="d-flex"><img src="./Images/logout.png" /><a className="dropdown-item" style={{ color: "#FD0C0C" }} href="#">Logout</a></li>
                                        </div>

                                    </div>


                                </ul>
                            </div>
                        </div>


                    </form>


                </nav>
            </header>


        </>
    )
}

export default NavMentor;
