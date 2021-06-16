import React, { Component } from 'react'

export default class BreakfastItems extends Component {
    state = {
        breakfastItems: [
            { name: 'Avocado', weight: 50, carbs: 123 },
            { name: 'Avocado', weight: 50, carbs: 123 },
            { name: 'Avocado', weight: 50, carbs: 123 },
        ],
    }

    render() {
        return (
            <div>
                <div className='mobile-log__log-wrapper'>
                    <div className='mobile-log__log'>
                        <div className='mobile-log__food'>
                            <h4 className='mobile-log__food'>
                                {this.state.breakfastItems.name}
                            </h4>
                            {/* <h4 className="mobile-log__food">{this.state.breakfast}</h4> */}
                            <p className='mobile-log__weight'>
                                {this.state.breakfastItems.weight}
                            </p>
                        </div>
                        <div>
                            <h4 className='mobile-log__carbs'>Carbs</h4>
                            <p className='mobile-log__carbs-amt'>
                                {/* {' '}
                    {this.state.carbs.quantity}{' '} */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
