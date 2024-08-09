import React,{useState} from "react";
import './home.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { ImCross } from "react-icons/im";

import { NavLink } from "react-router-dom";
const Navhome = ()=>{
        const [showMenu,setShowMenu] = useState(false);
        const [stickNav,setStickNav] = useState(false);

        // const stickyfunctioncreate = ()=>{
        //   window.scrollY>=40?setStickNav(true):setStickNav(false)
        // }
      
        // window.addEventListener("scroll",stickyfunctioncreate);
        return (
          <>
          <header className="head-nav mobile-nav">
            <nav className={stickNav===true?"sticky-navbar":
              "navbar-section nav-home-section"}>
              {/* logo section*/}
              <div className="nav-logo">
                <img alt="" src="./Images/logo.png"
                 className="img-fluid" />
              </div>
      
              {/* menu section for desktop*/}
              <div className= {showMenu===true? "tab-menu":"navbar-menu-section"}>
                <ul className="tab-menu-homePage-ul">
                  <li><NavLink className="nav-link navbar-link-book active"
                   exact to="/HomePage1">Home</NavLink></li>
                  <li><NavLink exact to="/bookmentor">Book a Mentor</NavLink></li>
                  <li><NavLink exact to="/yoursession">Your Sessions</NavLink></li>
                 </ul>
              </div>
             
        {/*hamburger menu start for tab*/}
        {
          showMenu===true?<> 
          <div className="cross-sign">
          <NavLink exact to="" onClick={()=>{setShowMenu(!showMenu)}}><ImCross className="cross"/></NavLink>
          </div>

        {/*dropdown menu*/}
          <form className="d-flex main-nav-menu">
          <div className="dropdown-button tab-dropdown-style">
          <div className="input-group mb-3">
          
          <div className= {showMenu ===true ?"tab-testi-img":"testi-img-home"}>
          <img alt="" src='./Images/yourprofileProfile.png' className="img-fluid" style={{width:"2rem", height:"2rem"}}/>
          </div>
          <button className="btn dropdown-toggle nav-menu" style={{border:"none"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          
          
          
          
          <ul className="dropdown-menu" style={{marginLeft:"12rem",width:"229px",height:"250px",borderRadius:"10px",border:"1px solid  #00000026"}}>
          
          <h1>Priya Karn</h1>
          <a className="dropdown-item view-pro mb-5"
           style={{width:"120px",color:"#979797",fontWeight:"400",fontSize:"12px"}} href="#">View Profile</a>
          <div style={{borderBottom:"1px solid #00000026",width:"204px",marginLeft:"14px"}}></div>
          <div style={{width:"180px",height:"110px",position:"relative",top:"10px",left:"20px",gap:"11px",textAlign:"left"}}>
          
          <div className="link-box">
          <li className="d-flex"><img alt="" src="./Images/cale.png"/><a className="dropdown-item" href="#">My Sessions</a></li>
          <li className="d-flex"><img alt="" src="./Images/person_check.png"/><a className="dropdown-item" href="#">Become A Mentor</a></li>
          <li className="d-flex"><img alt="" src="./Images/chat.png"/><a className="dropdown-item" href="#">Feedback</a></li>
          <li className="d-flex"><img alt="" src="./Images/logout.png"/><a className="dropdown-item" style={{color:"#FD0C0C"}} href="#">Logout</a></li>
          </div>
          
          </div>
          
          
          </ul>
          </div>
          </div>
          
          
          </form>

</>
         :<>
          <div className="hamburger hamburger-tab">
          <NavLink exact to="" onClick={()=>{setShowMenu(!showMenu)}}><GiHamburgerMenu className="img"/></NavLink>
          </div>
          </>
        }

      
              {/**/}
              
              <form className="d-flex main-nav-menu">
              <div className="dropdown-button hide-dropdown-button">
              <div className="input-group mb-3">
              
              <div className='testi-img'>
              <img alt="" src='./Images/yourprofileProfile.png' className="img-fluid" style={{width:"2rem",height:"2rem"}}/>
              </div>
              <button className="btn dropdown-toggle nav-menu" style={{border:"none"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              </button>
              
              
              
              
              <ul className="dropdown-menu" style={{marginLeft:"12rem",width:"229px",height:"250px",borderRadius:"10px",border:"1px solid  #00000026"}}>
              
              <h1>Priya Karn</h1>
              <a className="dropdown-item view-pro mb-5" style={{width:"120px",color:"#979797",fontWeight:"400",fontSize:"12px"}} href="#">View Profile</a>
              <div style={{borderBottom:"1px solid #00000026",width:"204px",marginLeft:"14px"}}></div>
              <div style={{width:"180px",height:"110px",position:"relative",top:"10px",left:"20px",gap:"11px",textAlign:"left"}}>
              
              <div className="link-box">
              <li className="d-flex"><img alt="" src="./Images/cale.png"/><a className="dropdown-item" href="#">My Sessions</a></li>
              <li className="d-flex"><img alt="" src="./Images/person_check.png"/><a className="dropdown-item" href="#">Become A Mentor</a></li>
              <li className="d-flex"><img alt="" src="./Images/chat.png"/><a className="dropdown-item" href="#">Feedback</a></li>
              <li className="d-flex"><img alt="" src="./Images/logout.png"/><a className="dropdown-item" style={{color:"#FD0C0C"}} href="#">Logout</a></li>
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

export default Navhome;
