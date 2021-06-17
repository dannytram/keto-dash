import React, { Component } from 'react'
import axios from 'axios'
import './Log.scss'

// let query = '100g brown rice'

//   carbs: response.data.totalNutrients.CHOCDF,
//   calories: response.data.calories,
//   fats: response.data.totalNutrients.FAT,
//   protein: response.data.totalNutrients.PROCNT,

class BreakfastLog extends Component {
    state = {
        carbs: [],
        calories: [],
        fats: [],
        protein: [],
        query: '',
        breakfastItems: [],
    }

    findCarbs = (breakfastItems) => {
        let initialValue = 0;
        let total = breakfastItems.reduce(function (accumlator, currentValue) {
            return accumlator + currentValue.x
        }, initialValue);

        console.log(total)
    }

    financial = (x) => {
        return Number.parseFloat(x).toFixed(2);
    }

    changeBreakfast = (e) => {
        e.preventDefault()
        const form = e.target
        const meal = form.meal.value
        this.setState({ query: meal })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            axios
                .get(
                    `https://api.edamam.com/api/nutrition-data?app_id=bc0b3d95&app_key=%20d31b2e3e059682d95464fdba90dbace8&nutrition-type=logging&ingr=${this.state.query}`
                )
                .then((response) => {
                    let breakfastLog = [...this.state.breakfastItems]
                    let addedItems = {
                        name: this.state.query,
                        carbs: response.data.totalNutrients.CHOCDF.quantity.toFixed(1),
                        calories: response.data.calories.toFixed(1),
                        fats: response.data.totalNutrients.FAT.quantity.toFixed(1),
                        protein: response.data.totalNutrients.PROCNT.quantity.toFixed(1),
                    }
                    breakfastLog.push(addedItems)
                    this.setState({
                        breakfastItems: breakfastLog,
                    })
                    console.log("breakfastItems:", this.state.breakfastItems);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <div>
                <div className='mobile-log'>
                    <div className='mobile-log__container'>
                        <form className='mobile-log__form' onSubmit={this.changeBreakfast}>
                            <label className='mobile-log__title'>Breakfast</label>
                            <input
                                className='mobile-log__input'
                                type='text'
                                name='meal'
                                placeholder='What did you have for Breakfast today?'
                            />
                            <div className='mobile-log__button-wrapper'>
                                <input
                                    className='mobile-log__button'
                                    type='submit'
                                    value='Add'
                                />
                            </div>
                        </form>
                        {this.state.breakfastItems.map((item) => (
                            <div className='mobile-log__log-wrapper'>
                                <div className='mobile-log__log'>
                                    <div className='mobile-log__food'>
                                        <h4 className='mobile-log__food'>{item.name}</h4>
                                    </div>
                                    <div>
                                        <h4 className='mobile-log__carbs'>Carbs</h4>
                                        <p className='mobile-log__carbs-amt'>{item.carbs}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='mobile-log__log'>
                            <div className='mobile-log__food'>
                                <h4 className='mobile-log__total-food'>Total</h4>
                            </div>
                            <div>
                                <h4 className='mobile-log__total-carbs'>Carbs</h4>
                                <p className='mobile-log__carbs-amt'>
                                    {this.state.carbs.quantity}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='tablet-log'>
                    <div className='tablet-log__container'>
                        <form className='tablet-log__form' onSubmit={this.changeBreakfast}>
                            <label className='tablet-log__title'>Breakfast</label>
                            <input
                                className='tablet-log__input'
                                type='text'
                                name='meal'
                                placeholder='What did you have for Breakfast today?'
                            />
                            <div className='tablet-log__button-wrapper'>
                                <input
                                    className='tablet-log__button'
                                    type='submit'
                                    value='Add'
                                />
                            </div>
                        </form>
                        {this.state.breakfastItems.map((item) => (
                            <div className='tablet-log__log-wrapper'>
                                <div className='tablet-log__log'>
                                    <div className='tablet-log__food'>
                                        <h4 className='tablet-log__food'>{item.name}</h4>
                                    </div>
                                    <div className='tablet-log__stats'>
                                        <div>
                                            <h4 className='tablet-log__carbs'>Carbs</h4>
                                            <p className='tablet-log__carbs-amt'>
                                                {item.carbs}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__cals'> Calories</h4>
                                            <p className='tablet-log__cals-amt'>
                                                {item.calories}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__fats'> Fats</h4>
                                            <p className='tablet-log__fats-amt'>
                                                {item.fats}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__protein'> Protein</h4>
                                            <p className='tablet-log__protein-amt'>
                                                {item.protein}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='tablet-log__log'>
                            <div className='tablet-log__food'>
                                <h4 className='tablet-log__total-food'>Total</h4>
                            </div>
                            <div className='tablet-log__stats'>
                                <div>
                                    <h4 className='tablet-log__total-carbs'>Carbs</h4>
                                    <p className='tablet-log__carbs-amt'>
                                        {this.state.carbs.quantity}{' '}
                                    </p>
                                </div>
                                <div>
                                    <h4 className='tablet-log__total-cals'> Calories</h4>
                                    <p className='tablet-log__cals-amt'>
                                        {this.state.calories}{' '}
                                    </p>
                                </div>
                                <div>
                                    <h4 className='tablet-log__total-fats'> Fats</h4>
                                    <p className='tablet-log__fats-amt'>
                                        {this.state.fats.quantity}{' '}
                                    </p>
                                </div>
                                <div>
                                    <h4 className='tablet-log__total-protein'> Protein</h4>
                                    <p className='tablet-log__protein-amt'>
                                        {this.state.protein.quantity}{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreakfastLog
