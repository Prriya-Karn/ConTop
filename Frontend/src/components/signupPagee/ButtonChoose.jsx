import React, { Fragment } from "react";
const buttData = [
    {
        branchName: "Computer Science",
        image: "./Images/bi_x.png",
        className: "option optionButton m-1",
        id: 1

    },
    {
        branchName: "MBA",
        image: "./Images/bi_x.png",
        className: "optio",
        id: 2

    },
    {
        branchName: "Mechanical Engineering",
        image: "./Images/bi_x.png",
        className: "option",
        id: 3

    },
    {
        branchName: "Data Science",
        image: "./Images/bi_x.png",
        className: "option",
        id: 4

    },
    {
        branchName: "Business Analytics",
        image: "./Images/bi_x.png",
        className: "option",
        id: 5

    },
    {
        branchName: "Biotechnology",
        image: "./Images/bi_x.png",
        className: "option",
        id: 6

    },


]
const ButtonChoose = ({specButt,deleteButt}) => {
    return (
        <Fragment>
            {
            (specButt.length<4)?specButt.map((e) => {
                    return (
                        <Fragment>
                            <div className="option">
                                <button type="button" className="closebutton">
                                    {e.branchName}
                                    <span className="cross-span">
                                    <img src={e.image}
                               onClick={()=>deleteButt(e.id)}
                                    alt="close icon" 
                                    className="close-icon"/>
                                    </span>
                                </button>
                            </div>
                        </Fragment>
                    )
                }):specButt.length=0
            }

        </Fragment>
    )
}

export default ButtonChoose;
export { buttData };