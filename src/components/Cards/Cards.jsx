import React from 'react'
import "./Cards.scss"


function Cards(props) {
    return (
        <div className = "card">
            <div className = "card__body">
                <h2 className ="card__title">{props.title}</h2>
                <img className ="card__chart" src={props.img}/>
            </div>
        </div>
    )
}

export default Cards
