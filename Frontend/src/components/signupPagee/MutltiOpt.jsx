import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const multiOptdata = [
  {
    multi: "Select your Degree",
    value:1,
    label: "Degree Level",
    dropdownItem: [
      "Associate's Degree",
      "Bachelor's Degree (B.A. or B.S.)",
      "Master's Degree (M.A. or M.S.)",
      "Doctoral Degree (Ph.D., Ed.D., etc.)",
      "Doctor of Medicine (M.D.)",
      "Doctor of Dental Surgery (D.D.S.)",
      "Juris Doctor (J.D.)",
      "Doctor of Pharmacy (Pharm.D.)",
      "Doctor of Veterinary Medicine (D.V.M.)",
      "Master of Business Administration (M.B.A.)",
    ],
  },
  {
    multi: "Choose from list",
    value:2,
    label: "Or choose from the list (at most 3)",
    dropdownItem: [
      "Computer Science",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Data Science",
      "Machine Learning",
      "Artificial Intelligence",
      "Business Administration",
      "Finance",
      "Marketing",
      "Human Resources",
      "Psychology",
      "Sociology",
      "Education",
      "Medicine",
      "Law",
      "Environmental Science",
      "Biotechnology",
      "Fashion Design",
      "Graphic Design",
      "Film Studies",
      "International Relations",
      "Public Health",
      "Nutrition",
      "Criminal Justice",
      "Creative Writing",
      "Music Performance",
      "Architecture",
      "Urban Planning",
      "Linguistics",
      "Forensic Science",
    ],
  },
  {
    multi: "2024",
    value:3,
    label: "Year",
    dropdownItem: [2024, 2025, 2026, 2027],
  },
  {
    multi: "Choose from list",
    value:4,
    label: "List of Countries",
    dropdownItem: ["United Kingdom", "Germany", "Canada"],
  },
];


const MultiOpt = ({ label, multi, dropdownItem, value }) => {

  const [optionData,setOptionData] = useState([]);

const selectOpt = (event)=>{
  setOptionData(event.target.value);
}

useEffect(()=>{
  console.log(optionData)
})

  return (
    <>
      <label for="exampleInputEmail1" 
      className="form-label mb-2 label-style ">
        {label}
      </label>
      <div className="dropdown-button">
        <div className="input-group mb-3">
          <select onChange={selectOpt} className="btn btn-outline-secondary
          dropdown-toggle d-toggle">
           {
            dropdownItem.map((ele)=>{
              return(
                <Fragment>
                <option>{ele}</option>
                </Fragment>
              )
            })
           }
          </select>
          
        </div>
      </div>
    </>
  );
};

export default MultiOpt;
export { multiOptdata };


