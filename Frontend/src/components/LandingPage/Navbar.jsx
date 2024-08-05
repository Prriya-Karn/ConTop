import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import { ImCross } from "react-icons/im";

const Navbar = ({className}) => {
  const [showMenu,setShowMenu] = useState(false);
  const [stickNav,setStickNav] = useState(false);

  const stickyfunctioncreate = ()=>{
    window.scrollY>=40?setStickNav(true):setStickNav(false)
  }
//  window.addEventListener("scroll",stickyfunctioncreate);
  return (
    <>
    <header className={className}>
    
      <nav className={stickNav===true?"sticky-navbar":"navbar-section"}>
        {/* logo section*/}
        <div className="nav-logo">
          <NavLink exact to=""><img src="./Images/logo.png" className=""/></NavLink>
        </div>

        {/* menu section for desktop*/}
        <div className= {showMenu===true? "tab-menu":"navbar-menu-section"}>
          <ul>
            <li><NavLink className="nav-link navbar-link-book" exact to="/bookmentor">
            Book a Session</NavLink></li>
            <li><NavLink className="nav-link" exact to="/completepro">
            Become a Mentor</NavLink>
            </li>
            <li><NavLink className="nav-link" exact to="/">
            About Us</NavLink></li>
            <li><NavLink className="nav-link" exact to="/contactus">Contact Us
            </NavLink></li>
          </ul>
        </div>
       
  {/*hamburger menu start for tab*/}
  {
    showMenu===true? <div className="cross-sign">
    <NavLink exact to="" onClick={()=>{setShowMenu(!showMenu)}}><ImCross className="cross"/></NavLink>
    </div>
   :<div className="hamburger hamburger-tab">
    <NavLink exact to="" onClick={()=>{setShowMenu(!showMenu)}}><GiHamburgerMenu className="img"/></NavLink>
    </div>
    
  }
 

        {/*Login signup buttons*/}
        <div className="navbar-log-sign">
        <NavLink exact to="/login"><button className="btn" style={{border:"none",color:"#718096"}}>Log In</button></NavLink>
        <NavLink exact to = "/selectRole"><button className="btn nav-sign" style={{backgroundColor:"#007AD9",color:"white",borderRadius:"10px"}}>Sign Up</button></NavLink>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar;
