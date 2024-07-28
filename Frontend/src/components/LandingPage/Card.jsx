import React from "react";
const data = [
    {
        name:"anjali",
        univers:"A university",
        type:"student",
        degree:"Bachelor",
        city:"Delhi",
        qualification:"Btech",
        image:"https://picsum.photos/200/301"

    },
    {
        name:"priya",
        univers:"A university",
        type:"student",
        degree:"Bachelor",
        city:"Delhi",
        qualification:"Btech",
        image:"https://picsum.photos/200/305",
       
    },
    {
        name:"sakshi",
        univers:"A university",
        type:"student",
        degree:"Bachelor",
        city:"Delhi",
        qualification:"Btech",
        image:"https://picsum.photos/200/309"

    },
    {
        name:"shruti",
        univers:"A university",
        type:"student",
        degree:"Bachelor",
        city:"Delhi",
        qualification:"Btech",
        image:"https://picsum.photos/200/302"

    },
   
    {
        name:"fdjnj",
        univers:"A university",
        type:"student",
        degree:"Bachelor",
        city:"Delhi",
        qualification:"Btech",
        image:"https://picsum.photos/200/303"

    },
]
const Card = (props)=>{
    return(
        <>
      
            <div className="card main-land-card border-5 rounded-4">
            <img src={props.image}  className="card-img-top p-2 rounded-4 image" alt="..."/>
            <div className="card-body p-4">
              <h5 className="card-title">{props.name}</h5>
              <div>
              <p className="card-text"><span>🎓 </span>{props.univers}</p>
              <p className="card-text-1">{props.type}<span> | </span>{props.degree}<span> | </span>{props.city}</p>
              <p>💻 {props.qualification}</p>
              </div>
            </div>
            </div>
            
        </>
    )
}

export default Card;
export {data};