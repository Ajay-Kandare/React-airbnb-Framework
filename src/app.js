import React from "react"
import Navbar from "../src/components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import data from "./data"


export default function App(){
   const cards = data.map(item => {
    return (
        <Card
        img={item.img}
        rating={item.stats.rating}
        reviewcount={item.stats.reviewcount}
        country={item.country}
        title={item.title}
        price={item.price}
        openspots={item.openspots}
        />
    )
   })

    return(
        <div>
            <Navbar/>
            <Hero/>
            <sec className="card-list">
            {cards}
            </sec>
        </div>
    )
}