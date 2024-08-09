import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Contact = ()=>{
    return(
        <Fragment>
        <div className="main-contactus" id="contact">
        <div className="contact-logo">
        <img alt="" src="/Images/logo.png"/>
        </div>

        <div className="contact-find-mentor">
      
        <div className="left">
        <NavLink style={{textDecoration:"none"}}>
        <p style={{fontWeight:"bold"}}>Find Mentors</p>
        </NavLink>
        
        <NavLink style={{textDecoration:"none"}}><p>About Us</p></NavLink>
        <NavLink style={{textDecoration:"none"}}>
        <p className="refund-contact">Return, Refund and Cancellations</p>
        </NavLink>
        </div>
        <div className="right">
       <NavLink style={{textDecoration:"none"}}>
        <p style={{fontWeight:"bold"}}>Become A Mentor</p>
        </NavLink>
       <NavLink style={{textDecoration:"none"}}>
        <p>Terms of Service</p> 
        </NavLink>
      <NavLink style={{textDecoration:"none"}}>
       <p>Privacy Policy</p>
       </NavLink>
        
       
        </div>
        </div>


        <div className="contact-query">
        <h1>For any queries/issues contact: </h1>

        <div className="inner-contact-query phone-contact">
        <img alt="" src="/Images/call.png"/>
        <p><a style={{textDecoration:"none"}} href="https://wa.me/918527359831" 
        target="_blank">Contact: +91-8527359831</a></p>
        </div>
        <div className="inner-contact-query">
        <img alt="" src="/Images/mail.png"/>
        <a style={{textDecoration:"none"}} target="_blank" href="mailto:connectop.abroad@gmail.com">
        Email: connectop.abroad@gmail.com
        </a>
        
        </div>
        <div className="inner-contact-query address-contact">
        <img alt="" src="/Images/address.png"/>
        <a style={{textDecoration:"none"}} target="_blank" href="https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&t=h&source=embed&msa=0&ll=28.751797314213484%2C77.11761275463104&spn=0.007995%2C0.009109&z=16&mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4">
        <p>Address: Delhi Technological University, 
        Bawana Road, Shahbad Daulatpur Village, 
        Rohini, Delhi 110042</p>
        </a>
        </div>
        </div>

        </div>
        </Fragment>
    )
}

export default Contact;