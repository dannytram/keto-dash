import React, { Component } from 'react'
import axios from "axios"
import "./BreakfastLog.scss"

let query = "50g avocado"

class BreakfastLog extends Component {
    state = {
        items: [],
    }

    componentDidMount() {
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=bc0b3d95&app_key=%20d31b2e3e059682d95464fdba90dbace8&nutrition-type=logging&ingr=${query}`)
            .then(response => {
                this.setState({
                    items: response.data.totalNutrients.CHOCDF
                })
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div className="mobile-log">
                    <div className="mobile-log__container">
                        <div className="mobile-log__form">
                            <label className="mobile-log__title">Breakfast</label>
                            <input className="mobile-log__input" type="text" placeholder="What did you have for Breakfast today?" />
                            <div className="mobile-log__button-wrapper">
                                <button className="mobile-log__button">Add</button>
                            </div>
                        </div>
                        <div className="mobile-log__log-wrapper">
                            <div className="mobile-log__log">
                                <div className="mobile-log__food">
                                    <h4 className="mobile-log__food">Avocado</h4>
                                    <p className="mobile-log__weight">50g</p>
                                </div>
                                <div>
                                    <h4 className="mobile-log__carbs">Carbs</h4>
                                    <p className="mobile-log__carbs-amt">{this.state.items.quantity} </p>
                                </div>
                            </div>
                            <div className="mobile-log__log">
                                <div className="mobile-log__food">
                                    <h4 className="mobile-log__total-food">Total</h4>
                                    <p className="mobile-log__weight">50g</p>
                                </div>
                                <div>
                                    <h4 className="mobile-log__total-carbs">Carbs</h4>
                                    <p className="mobile-log__carbs-amt">{this.state.items.quantity} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tablet-log">
                    <div className="tablet-log__container">
                        <div className="tablet-log__form">
                            <label className="tablet-log__title">Breakfast</label>
                            <input className="tablet-log__input" type="text" placeholder="What did you have for Breakfast today?" />
                            <div className="tablet-log__button-wrapper">
                                <button className="tablet-log__button">Add</button>
                            </div>
                        </div>
                        <div className="tablet-log__log-wrapper">
                            <div className="tablet-log__log">
                                <div className="tablet-log__food">
                                    <h4 className="tablet-log__food">Avocado</h4>
                                    <p className="tablet-log__weight">50g</p>
                                </div>
                                <div className="tablet-log__stats">
                                    <div>
                                        <h4 className="tablet-log__carbs">Carbs</h4>
                                        <p className="tablet-log__carbs-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__cals"> Calories</h4>
                                        <p className="tablet-log__cals-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__fats"> Fats</h4>
                                        <p className="tablet-log__fats-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__protein"> Protein</h4>
                                        <p className="tablet-log__protein-amt">{this.state.items.quantity} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-log__log">
                                <div className="mobile-log__food">
                                    <h4 className="mobile-log__total-food">Total</h4>
                                    <p className="mobile-log__weight">50g</p>
                                </div>
                                <div className="tablet-log__stats">
                                    <div>
                                        <h4 className="tablet-log__total-carbs">Carbs</h4>
                                        <p className="tablet-log__carbs-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__total-cals"> Calories</h4>
                                        <p className="tablet-log__cals-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__total-fats"> Fats</h4>
                                        <p className="tablet-log__fats-amt">{this.state.items.quantity} </p>
                                    </div>
                                    <div>
                                        <h4 className="tablet-log__total-protein"> Protein</h4>
                                        <p className="tablet-log__protein-amt">{this.state.items.quantity} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default BreakfastLog;
