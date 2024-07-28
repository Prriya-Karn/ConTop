import React, { Fragment } from "react";
import './mentorPro.css';
import Navhome from "../Home/Navhome";
const MentorProfile = ()=>{
    return(
       
        <Fragment>
        <Navhome/>
        <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
        <div className="container-fluid" style={{marginTop:"6rem"}}>
            <div className="row">
                <div className="col-lg-10 mx-auto">

                    <div className="qual-header mt-5">
                        <h1 style={{fontSize:"22px"}}>Mentor Profile</h1>
                    </div>

                  <div className="slotsPostbuttons">
                  <button className="btn slotButton" style={{backgroundColor:"#9797974D"}}>Slots</button>
                  <button className="btn postButton">Posts</button>
                  </div>

                    <div className="qual-prof-quali d-flex">
                        <h1>Mentor’s Available Slots</h1>
                        
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add</button>
                    </div>
                    <p className="timezone">In your Local Timezone (Asia/Calcutta)</p>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-home-dialog modal-dialog-centered">
                            <div className="modal-content main-home-modal main-myqual-modal" style={{ borderRadius: "20px", width: "667px", height: "436px" }}>
                                <div className="d-flex home-header modal-qual-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Qualification</h5>
                                    <button type="button" className="btn-close home-btn-close modal-qual-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="">
                                        <label for="" className="form-label label-modal-myqua">Course</label>
                                        <input type="text" className="form-control input" id="" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <label for="" className="form-labe label-modal-myqua">College/ University Name</label>
                                        <input type="text" className="form-control input" id="" />
                                    </div>
                                    <div className="">
                                        <label for="" className="form-labe label-modal-myqua">Location</label>
                                        <input type="text" className="form-control input" id="" />
                                    </div>


                                    <label for="" className="form-labe label-modal-myqua">Start</label>
                                    <label for="" className="form-labe label-modal-myqua end">End</label>

                                    <div className=" d-flex start-end-modal">
                                        <input type="text" className="form-control start-end" id="" />
                                        <input type="text" className="form-control start-end" id="" placeholder="Present" />
                                    </div>


                                    <div className="d-flex scholar-myqua">
                                        <div className="form-check d-flex">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Scholarship
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>

                                        <div className="form-check d-flex">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Part-Time Job
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </div>


                                    <div className="d-flex radio-myqua mt-5 place">
                                        <div className="form-check">
                                            <label className="form-check-label" for="">
                                                Place Of Stay
                                            </label>
                                        </div>

                                        <div className="form-check radio-modal-myqua d-flex">
                                            <input className="form-check-input" name="radio" type="radio" value="" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Campus Housing
                                            </label>
                                        </div>

                                    </div>
                                    <div className="form-check radio-modal-myqua radio-modal-myqua-1 d-flex">
                                        <input className="form-check-input" name="radio" type="radio" value="" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Outside Campus
                                        </label>
                                    </div>
                                    <div className="qual-prof-quali modal-button-qua d-flex">

                                        <button className="btn mt-3" style={{ cursor: "pointer" }}>+ Add</button>

                                    </div>

                                </form>



                                <div className="modal-body home-modal-p">

                                </div>

                            </div>
                        </div>

                    </div>

<div className="localTimeMentor mt-4">

<div className="Mon innerlocaltimementor innerlocaltimementor-Mon">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>
</div>

<div className="tue innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div>
<div className="wed innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div> 
<div className="thu innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div>
<div className="fri innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div>
<div className="sat innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div>
<div className="sun innerlocaltimementor">
<div className="innerlocaltimeh4">
<p>MON</p>
</div>

<div className="innerlocaltimeh2">
<h4>15</h4>
</div>
<div className="innerlocaltimep">
<p>JAN</p>
</div>

</div>
</div>
                    <div className="qual-prof-quali d-flex">
                        <h1>Time Duration</h1>
                     </div>




<div className="time-duration-section">
<div className="timebuttonfirst">
<button className="btn">20 min</button>
</div>
<div className="timeButton">
<button className="btn">20 min</button>
</div>
<div className="timeButton">
<button className="btn">20 min</button>
</div>
</div>

<div className="qual-prof-quali d-flex">
                        <h1>Available Time Slots</h1>
             </div>

             <div className="availableTimeButtons">
             <div className="availabelbutton availablebuttonfirst">
             <button className="btn">4:30pm - 4:50pm</button>
             </div>
             <div className="availabelbutton">
             <button className="btn">4:30pm - 4:50pm</button>
             </div>
             <div className="availabelbutton">
             <button className="btn">4:30pm - 4:50pm</button>
             </div>
             <div className="availabelbutton">
             <button className="btn">4:30pm - 4:50pm</button>
             </div>
             </div>


                    <div>
                    
                    </div>

                </div>
            </div>
        </div>
    </section>

        </Fragment>
    )
}

export default MentorProfile;