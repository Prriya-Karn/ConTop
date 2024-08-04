import React, { createContext, Fragment, useEffect, useState } from "react";
import { Navhome } from "../Home";
import MyQualification from "./MyQualification";
import Enterinput, { inputdata, myprofileinputdata } from "../signupPagee/Enterinput";
import Button, { dataButton } from "../LandingPage/Button";
import { ApplicantParentSign4 } from "../signupPagee";

const Proform = createContext();

const MyProfile = ({myProfile,myQua,pro})=>{
    const [fileUpload,setFileUpload] = useState(null);
    const [filePic,setFilePic] = useState(null);
    const [proData,setProData] = useState(
        {
            userName : "",
            email : "",
            phone : "",
            linkedin : "",
            profile : ""
        }
    );
    const [submitProData,setSubmitPro] = useState({});

    const uploadBack = (event)=>{
        setFileUpload(event.target.files[0])
    }
    const uploadPic = (event)=>{
        const file = event.target.files[0];
       setFilePic(file)
    }


    const proForm = (event)=>{
        const {name,value} = event.target;
        setProData((preVal)=>{
           return{
            ...preVal,[name]:value
           }
        })
    }
    const sumbitPro = ()=>{
        setSubmitPro(proData.UserEmail)
    }
    console.log(submitProData)
    
    
// console.log(proData)
    return(
        <Fragment>
            {
                (pro===true)?
                <Fragment>
                <div className="main-profile-container">
                <div className="inputField">

              <Enterinput
                labelName = {inputdata[4].labelName}
                type = {inputdata[4].labelName}
                name = {inputdata[4].name}
                proform = {proForm}
                />
                <Enterinput
                labelName = {inputdata[5].labelName}
                type = {inputdata[5].labelName}
                name = {inputdata[5].name}
                proform = {proForm}
                />
                <Enterinput
                labelName = {inputdata[6].labelName}
                type = {inputdata[6].labelName}
                name = {inputdata[6].name}
                proform = {proForm}
                />
                <Enterinput
                labelName = {inputdata[7].labelName}
                type = {inputdata[7].labelName}
                name = {inputdata[7].name}
                proform = {proForm}
                />
                <Enterinput
                labelName = {inputdata[8].labelName}
                type = {inputdata[8].labelName}
                name = {inputdata[8].name}
                proform = {proForm}
                />
                <div>
              
               <Button
                commonButton = {dataButton[4].commonButton}
                className  = {dataButton[4].className}
                buttonClass = {dataButton[4].buttonClass}
                submitpro = {sumbitPro}
                />
                </div>
                
                </div>

                <div className="uploadPro">

                <div className="uploadProfileBack">
                <div className="uploadBack">
                {
                    fileUpload?<img className="img-upload"
                    src={URL.createObjectURL(fileUpload)}
                    alt="Profile Background"/>:
                    <img
                    src="/Images/uploadBack.png"
                    alt="Profile Background"/>
                }
                </div> 
                
               
            <div className="upload-text">
                <p>Upload Profile Background</p>

                <label for="file-upload" className="custom-file-upload">
                <input id="file-upload" type="file" onChange={ uploadBack }/>
                <div className="innerUpload">
                <img src="/Images/upload.png"/>
                <p>Upload</p>
                </div>
                </label>


                </div>
                </div>


                <div className="uploadProfilePic">
                <div className="uploadBack">
                {
                    filePic?<img className="img-upload pic-upload"
                    src={URL.createObjectURL(filePic)}
                    alt="Profile Background"/>:
                    <img
                    src="/Images/uploadPic.png"
                    alt="Profile Background"/>
                }
                </div> 
                
               
            <div className="upload-text upload-text-pic">
                <p>Upload Profile Picture</p>

                <label className="custom-file-upload">
                <input id="file-upload" type="file" onChange={uploadPic}/>
                <div className="innerUpload">
                <img src="/Images/upload.png"/>
                <p>Upload</p>
                </div>
                </label>


                </div>
                </div>

                </div>
                </div>
                </Fragment>
                :
                <MyQualification/>
            }
        </Fragment>
    )
}

export default MyProfile;
export {Proform};