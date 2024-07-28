import React from "react";
import Button, { dataButton } from "./Button";

const BookSession = ()=>{
    return(
        <>
       <div data-aos="fade-up">
        <section className="booksession_main d-flex align-items-left overflow-x-hidden">
        <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">

        <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-12 order-2 order-lg-1 column2 book_session_img">
      
        <img src="./Images/Travels.png"/>
     
        </div>
        
            <div className="col-lg-6 col-md-8 col-12 order-1 order-lg-2
            column1 pt-5 d-flex justify-content-left flex-column mb-5 book_session_content">
            <h1>Gain insights from the<br></br>
             Best -- get your questions <br></br>
             answered by top students and alumni
            </h1>
            <p>💼How easy is it to get a job after graduating?</p>
            <p>🏡Is it cheaper to live on campus or off campus?</p>
          <Button 
          commonButton = {dataButton[1].commonButton}
          className = {dataButton[1].className}
          />
          
            </div>
           
        </div>
        </div>
                </div>
</div>
</div>
        </section>

        </div>
 
        </>
    )
}

export default BookSession;
