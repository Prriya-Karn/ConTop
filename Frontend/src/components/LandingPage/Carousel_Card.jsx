import React from "react";
import Card, { data } from "./Card";

const Carousel_Card = ()=>{

  return(
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-12">
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"  style={{ overflow: "hidden" }}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="card_wrap">
      
   
      <Card
         name = {data[1].name}
    univers = {data[1].univers}
    type = {data[1].type}
    degree = {data[1].degree}
    city = {data[1].city}
    qualification = {data[1].qualification}
    image = {data[1].image}
 
    />
    <Card
    name = {data[3].name}
univers = {data[3].univers}
type = {data[3].type}
degree = {data[3].degree}
city = {data[3].city}
qualification = {data[3].qualification}
image = {data[3].image}
/>
    <Card
    name = {data[0].name}
univers = {data[0].univers}
type = {data[0].type}
degree = {data[0].degree}
city = {data[0].city}
qualification = {data[0].qualification}
image = {data[0].image}
/>
    <Card
    name = {data[3].name}
univers = {data[3].univers}
type = {data[3].type}
degree = {data[3].degree}
city = {data[3].city}
qualification = {data[3].qualification}
image = {data[3].image}
/>

<Card
name = {data[4].name}
univers = {data[4].univers}
type = {data[4].type}
degree = {data[4].degree}
city = {data[4].city}
qualification = {data[4].qualification}
image = {data[4].image}
/>

<Card
name = {data[1].name}
univers = {data[1].univers}
type = {data[1].type}
degree = {data[1].degree}
city = {data[1].city}
qualification = {data[1].qualification}
image = {data[1].image}
/>
    
      </div>
    </div>
    <div className="carousel-item">
      <div className="card_wrap">
    
      <Card
         name = {data[1].name}
    univers = {data[1].univers}
    type = {data[1].type}
    degree = {data[1].degree}
    city = {data[1].city}
    qualification = {data[1].qualification}
    image = {data[1].image}
    />
    <Card
    name = {data[3].name}
univers = {data[3].univers}
type = {data[3].type}
degree = {data[3].degree}
city = {data[3].city}
qualification = {data[3].qualification}
image = {data[3].image}
/>
      <Card
         name = {data[0].name}
    univers = {data[0].univers}
    type = {data[0].type}
    degree = {data[0].degree}
    city = {data[0].city}
    qualification = {data[0].qualification}
    image = {data[0].image}
    />
      <Card
         name = {data[3].name}
    univers = {data[3].univers}
    type = {data[3].type}
    degree = {data[3].degree}
    city = {data[3].city}
    qualification = {data[3].qualification}
    image = {data[3].image}
    />
    <Card
    name = {data[1].name}
univers = {data[1].univers}
type = {data[1].type}
degree = {data[1].degree}
city = {data[1].city}
qualification = {data[1].qualification}
image = {data[1].image}
/>
      <Card
         name = {data[4].name}
    univers = {data[4].univers}
    type = {data[4].type}
    degree = {data[4].degree}
    city = {data[4].city}
    qualification = {data[4].qualification}
    image = {data[1].image}
    />
      
      </div>
    </div>


    <div className="carousel-item">
      <div className="card_wrap">
      <Card
      name = {data[1].name}
 univers = {data[1].univers}
 type = {data[1].type}
 degree = {data[1].degree}
 city = {data[1].city}
 qualification = {data[1].qualification}
 image = {data[1].image}
 />
 <Card
    name = {data[3].name}
univers = {data[3].univers}
type = {data[3].type}
degree = {data[3].degree}
city = {data[3].city}
qualification = {data[3].qualification}
image = {data[3].image}
/>
      <Card
         name = {data[0].name}
    univers = {data[0].univers}
    type = {data[0].type}
    degree = {data[0].degree}
    city = {data[0].city}
    qualification = {data[0].qualification}
    image = {data[1].image}
    />
      <Card
         name = {data[0].name}
    univers = {data[0].univers}
    type = {data[0].type}
    degree = {data[0].degree}
    city = {data[0].city}
    qualification = {data[0].qualification}
    image = {data[2].image}
    />
      <Card
         name = {data[0].name}
    univers = {data[0].univers}
    type = {data[0].type}
    degree = {data[0].degree}
    city = {data[0].city}
    qualification = {data[0].qualification}
    image = {data[3].image}
    />
      <Card
         name = {data[0].name}
    univers = {data[0].univers}
    type = {data[0].type}
    degree = {data[0].degree}
    city = {data[0].city}
    qualification = {data[0].qualification}
    image = {data[1].image}
    />
      
      </div>
    </div>

    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>
</div>
    </>
  )
}

export default Carousel_Card;