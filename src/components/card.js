import React from "react"


export default function Card(props){
    return(
    <div className="card">
    {props.openspots === 0 &&<div className="card-badge">SOLD OUT</div>}
    <img src={props.img}alt="sunil pic" className="card-image"/>
    
    <div className="card-stats">
    <img src= "../assets/star.jpeg" alt="star-pic" className="star-image"/>
    <span className="s1">{props.rating}</span>
    <span className="grey"> ( {props.reviewcount} )  .</span>
    <span className="grey"> {props.country}</span>
    </div>
    <p className="para">{props.title}</p>
    <p><span className="bold"> For ${props.price}</span> / person</p>
    </div>
       

    )
}