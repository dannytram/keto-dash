import React, { Component } from 'react'
import axios from 'axios'
import './Log.scss'
import Delete from '../../assets/images/Delete.png'

class BreakfastLog extends Component {
    state = {
        carbs: 0,
        calories: [],
        fats: [],
        protein: [],
        query: '',
        breakfastItems: [],
    }

    //SEND STATE OF CARBS TO PARENT
    sendCarbs = () => {
        this.props.carbsHandler(this.state.carbs)
    }

    //TOTAL ALL CARBS AND RETURN 1 VALUE
    findTotal = (breakfastItems) => {
        let initialValue = 0
        let total = breakfastItems.reduce(function (
            accumlator,
            currentValue
        ) {
            return accumlator + Number(currentValue.carbs)
        },
            initialValue)

        return total
    }

    //ROUND ALL THE VALUES TO 2 DECIMALS
    financial = (x) => {
        return Number.parseFloat(x).toFixed(2)
    }

    //SET THE QUERY AS THE FORM INPUT VALUE
    changeBreakfast = (e) => {
        e.preventDefault()
        const form = e.target
        const meal = form.meal.value
        this.setState({ query: meal })
    }

    // GETTING THE LATEST STATE TO MOUNT
    updateBreakfastLog = () => {
        axios.get(`http://localhost:8080/breakfast`).then((response) => {
            this.setState({
                breakfastItems: response.data,
                carbs: this.findTotal(response.data)
            })
        }
        )
    }

    // DELETING AN INPUT THEN UPDATING STATE
    handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/breakfast/${id}`)
            .then(this.updateBreakfastLog);
    };

    // MOUNTING COMPONENTS
    componentDidMount() {
        this.updateBreakfastLog();
    }


    // UPDATE COMPONENT BASED ON QUERY
    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            axios
                .get(
                    `https://api.edamam.com/api/nutrition-data?app_id=bc0b3d95&app_key=%20d31b2e3e059682d95464fdba90dbace8&nutrition-type=logging&ingr=${this.state.query}`
                )
                .then((response) => {
                    let addedItems = {
                        name: this.state.query,
                        carbs: response.data.totalNutrients.CHOCDF.quantity.toFixed(1),
                        calories: response.data.calories.toFixed(1),
                        fats: response.data.totalNutrients.FAT.quantity.toFixed(1),
                        protein: response.data.totalNutrients.PROCNT.quantity.toFixed(1),
                    }
                    axios
                        .post(`http://localhost:8080/breakfast`, addedItems)
                        .then((response) => {
                            axios
                                .get(`http://localhost:8080/breakfast`)
                                .then((response) => {
                                    const totalCarbs = this.findTotal(response.data)
                                    this.setState({
                                        breakfastItems: response.data,
                                        carbs: totalCarbs
                                    })
                                    this.props.carbsHandler(totalCarbs)
                                })
                        })
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
                                        <h4 className='mobile-log__food'>{item.item}</h4>
                                    </div>
                                    <div className='mobile-log__delete-wrapper'>
                                        <div>
                                            <h4 className='mobile-log__carbs'>Carbs</h4>
                                            <p className='mobile-log__carbs-amt'>{item.carbs}</p>
                                        </div>
                                        <div className='mobile-log__delete-container'>
                                            <img
                                                className='mobile-log__delete'
                                                src={Delete}
                                                alt='Delete this item'
                                                onClick={() => {
                                                    this.handleDelete(item.id)
                                                }}
                                            />
                                        </div>
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
                                    {this.state.carbs.toFixed(1)}
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
                                        <h4 className='tablet-log__food'>{item.item}</h4>
                                    </div>
                                    <div className='tablet-log__stats'>
                                        <div>
                                            <h4 className='tablet-log__carbs'>Carbs</h4>
                                            <p className='tablet-log__carbs-amt'>{item.carbs}</p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__cals'> Calories</h4>
                                            <p className='tablet-log__cals-amt'>{item.calories}</p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__fats'> Fats</h4>
                                            <p className='tablet-log__fats-amt'>{item.fats}</p>
                                        </div>
                                        <div>
                                            <h4 className='tablet-log__protein'> Protein</h4>
                                            <p className='tablet-log__protein-amt'>{item.protein}</p>
                                        </div>
                                        <img
                                            className='tablet-log__delete'
                                            src={Delete}
                                            alt='Delete this item'
                                        />
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
                                    <p className='tablet-log__cals-amt'>{this.state.calories} </p>
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
