import React, { Fragment } from "react";
import Navhome from "../Home/Navhome";
import "./myqua.css";

const MyQualification = () => {
    return (
        <Fragment>
            <Navhome />
            <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
                <div className="container" style={{marginTop:"6rem"}}>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">

                            <div className="qual-header mt-5">
                                <h1>Complete Profile</h1>
                            </div>

                            <div className="qual-button d-flex">
                                <button className="qual-my-pro btn">My Profile</button>
                                <button className="qual-my-quali btn">My Qualifications</button>
                            </div>

                            <div className="qual-prof-quali d-flex">
                                <h1>Professional Qualifications</h1>
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add</button>
                            </div>

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

                            <div className="qual-card d-flex">
                                <div className="qual-card-inner">
                                    <div className="d-flex datanalyst-qual">
                                        <img src="./Images/suitcase.png" />
                                        <h1>Senior Data Analyst</h1>
                                    </div>
                                    <p>Red Hat</p>
                                    <div className="d-flex qual-country">
                                        <p>Ireland</p>
                                        <p>2022-2023</p>
                                    </div>

                                </div>

                                <div className="qual-card-inner">
                                    <div className="d-flex datanalyst-qual">
                                        <img src="./Images/suitcase.png" />
                                        <h1>Senior Data Analyst</h1>
                                    </div>
                                    <p>Red Hat</p>
                                    <div className="d-flex qual-country">
                                        <p>Ireland</p>
                                        <p>2022-2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="qual-prof-quali d-flex">
                                <h1>Educational Qualifications</h1>
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">+ Add</button>
                            </div>

                            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-home-dialog modal-dialog-centered">
                                    <div className="modal-content main-home-modal main-myqual-modal main-myqual-modal-another" style={{ borderRadius: "20px", width: "667px", height: "436px" }}>
                                        <div className="d-flex home-header modal-qual-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add Qualification</h5>
                                            <button type="button" className="btn-close home-btn-close modal-qual-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form>
                                            <div className="">
                                                <label for="" className="form-label label-modal-myqua">Position</label>
                                                <input type="text" className="form-control input" id="" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="">
                                                <label for="" className="form-labe label-modal-myqua">Company Name</label>
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
                                            <div className="qual-prof-quali modal-button-qua d-flex">

                                                <button className="btn mt-3" style={{ cursor: "pointer" }}>+ Add</button>

                                            </div>

                                        </form>

                                    </div>
                                </div>

                            </div>

                            <div className="qual-card-1 container d-flex">
                                <div className="qual-inner-card-1">

                                    <div className="d-flex masterinai">
                                        <img src="./Images/edu.png" />
                                        <h1>Masters in Artificial intelligence</h1>
                                    </div>
                                    <div className="d-flex qual-country">
                                        <p>University of Galway, Ireland</p>
                                        <p>2022-2023</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Scholarship : </p>
                                        <p style={{ fontWeight: 400 }}>No</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Part-time Job : </p>
                                        <p style={{ fontWeight: 400 }}>Yes</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Place Of Stay :</p>
                                        <p style={{ fontWeight: 400 }}>Campus Housing</p>
                                    </div>

                                </div>


                                <div className="qual-inner-card-1">

                                    <div className="d-flex masterinai">
                                        <img src="./Images/suitcase.png" />
                                        <h1>Masters in Artificial intelligence</h1>
                                    </div>
                                    <div className="d-flex qual-country">
                                        <p>University of Galway, Ireland</p>
                                        <p>2022-2023</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Scholarship : </p>
                                        <p>No</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Part-time Job : </p>
                                        <p>Yes</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Place Of Stay :</p>
                                        <p>Campus Housing</p>
                                    </div>

                                </div>

                                <div className="qual-inner-card-1">

                                    <div className="d-flex masterinai">
                                        <img src="./Images/suitcase.png" />
                                        <h1>Masters in Artificial intelligence</h1>
                                    </div>
                                    <div className="d-flex qual-country">
                                        <p>University of Galway, Ireland</p>
                                        <p>2022-2023</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Scholarship : </p>
                                        <p>No</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Part-time Job : </p>
                                        <p>Yes</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Place Of Stay :</p>
                                        <p>Campus Housing</p>
                                    </div>

                                </div>
                                <div className="qual-inner-card-1">

                                    <div className="d-flex masterinai">
                                        <img src="./Images/suitcase.png" />
                                        <h1>Masters in Artificial intelligence</h1>
                                    </div>
                                    <div className="d-flex qual-country">
                                        <p>University of Galway, Ireland</p>
                                        <p>2022-2023</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Scholarship : </p>
                                        <p>No</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Part-time Job : </p>
                                        <p>Yes</p>
                                    </div>
                                    <div className="qual-in-card1 d-flex">
                                        <p>Place Of Stay :</p>
                                        <p>Campus Housing</p>
                                    </div>

                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </section>


        </Fragment>
    )
}

export default MyQualification;
