import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Cards.scss"

const value = 5;


function Cards(props) {
    return (
        <div className="card">
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar 
                    value={value} 
                    maxValue={20} 
                    text={`${value}/20`}
                    styles={buildStyles({
                        pathColor: '#cee5d0',
                        textColor: '#000000',
                    })} />
                </div>
            </div>
        </div>
    )
}

export default Cards
