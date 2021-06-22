import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Cards.scss"


function CardsCals(props) {

    const value = props.calories;

    return (
        <div className="card">
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar 
                    value={value} 
                    maxValue={2000} 
                    text={`${value}/2000`}
                    styles={buildStyles({
                        pathColor: '#cee5d0',
                        textColor: '#000000',
                        textSize: '12px'
                    })} />
                </div>
            </div>
        </div>
    )
}

export default CardsCals
