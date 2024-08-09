import React, { Fragment } from "react";
import Button, { dataButton } from "./Button";

import JoinComm, { joinData } from "./JoinCommBox";

const Testimonial = () => {
  return (
    <>
      <div data-aos="fade-right">
        <section
          className="testimonial_main d-flex align-items-left overflow-x-hidden"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="container">
                  
                <div className="head-testi">
                <h4>STUDENTS LOVE US</h4>
              </div>
              <div className="sub-testi-container">
                <div className="sub-testi">
                  <h1>
                    SEE WHAT PEOPLE HAVE TO SAY ABOUT US
                  </h1>
                </div>
                <img alt="" src="./Images/Sketch.png" className="sketch" />
                <img alt="" src="./Images/Vector.png" className="vector" />
              </div>

              



                  <div className="row row-testi-1">
                    <div className="col-lg-5 col-md-4 me-3 pt-2 order-2 order-lg-1 testi-column1 testimonial-1">
                      <div className="row testi-inner-row">
                        <div className="col-lg-3 col-md-3 testi-inner-col-1">
                          <div className="testi-img">
                            <img alt="" src="./Images/profile.png" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6  mt-4 testi-inner-col-2">
                          <div className="testi-name">
                            <h1>Priya Karn</h1>
                          </div>
                          <div className="uni-name">
                            <h3>Student at XYZ University</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row testi-inner-row-2">
                        <div className="testi-about">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa. Lorem ipsum dolor sit amet
                            consectetur. Aenean molestie viverra sed aenean.
                            Mollis tristique amet volutpat venenatis massa.
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa......
                            <a style={{ cursor: "pointer", color: "#007AD9" }}>
                              {" "}
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5  col-md-4 pt-2 order-2 order-lg-1 testi-column1 testimonial-1">
                      <div className="row testi-inner-row">
                        <div className="col-lg-3 col-md-3 testi-inner-col-1">
                          <div className="testi-img">
                            <img alt="" src="./Images/profile.png" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 testi-inner-col-2">
                          <div className="testi-name">
                            <h1>Priya Karn</h1>
                          </div>
                          <div className="uni-name">
                            <h3>Student at XYZ University</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row testi-inner-row-2">
                        <div className="testi-about">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa. Lorem ipsum dolor sit amet
                            consectetur. Aenean molestie viverra sed aenean.
                            Mollis tristique amet volutpat venenatis massa.
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa......
                            <a href=""
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                              }}
                            >
                              {" "}
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-testi-2">
                    <div className="col-lg-5 col-md-4 me-3 pt-2 order-2 order-lg-1 testi-column1 testimonial-1">
                      <div className="row testi-inner-row">
                        <div className="col-lg-3 col-md-3  testi-inner-col-1">
                          <div className="testi-img">
                            <img alt="" src="./Images/profile.png" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6  mt-4 testi-inner-col-2">
                          <div className="testi-name">
                            <h1>Priya Karn</h1>
                          </div>
                          <div className="uni-name">
                            <h3>Student at XYZ University</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row testi-inner-row-2">
                        <div className="testi-about">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa. Lorem ipsum dolor sit amet
                            consectetur. Aenean molestie viverra sed aenean.
                            Mollis tristique amet volutpat venenatis massa.
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa......
                            <a style={{ cursor: "pointer", color: "#007AD9" }}>
                              {" "}
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-4  pt-2 order-2 order-lg-1 testi-column1 testimonial-1">
                      <div className="row testi-inner-row">
                        <div className="col-lg-3 col-md-3 testi-inner-col-1">
                          <div className="testi-img">
                            <img alt="" src="./Images/profile.png" />
                          </div>
                        </div>
                        <div className="col-lg-6  col-md-6 mt-4 testi-inner-col-2">
                          <div className="testi-name">
                            <h1>Priya Karn</h1>
                          </div>
                          <div className="uni-name">
                            <h3>Student at XYZ University</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row testi-inner-row-2">
                        <div className="testi-about">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa. Lorem ipsum dolor sit amet
                            consectetur. Aenean molestie viverra sed aenean.
                            Mollis tristique amet volutpat venenatis massa.
                            Lorem ipsum dolor sit amet consectetur. Aenean
                            molestie viverra sed aenean. Mollis tristique amet
                            volutpat venenatis massa......
                            <a
                              href="#"
                              style={{ color: "#007AD9", cursor: "pointer" }}
                            >
                              {" "}
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="mb-5"
          style={{ marginLeft: "40rem", marginTop: "-2rem" }}
        >
          <Button
            commonButton={dataButton[2].commonButton}
            className={dataButton[2].className}
          />
        </div>

{/*--------------------------join our community section-----------------------*/}

<div className="joinCommunity">
<h2>Join Our Community with</h2>
<div className="joincomm-box">
{/*<img alt="" src="/Images/sk.png"/>*/}

{
  joinData.map((e)=>{
    return(
      <Fragment>
      <JoinComm
      p = {e.p}
      h1 = {e.h1}
      />
      </Fragment>
    )
  })
}
</div>
</div>








      </div>
    </>
  );
};

export default Testimonial;
