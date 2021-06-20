import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from 'react-multi-carousel'
import CardsCarbs from '../../components/Cards/CardsCarbs'
import CardsCals from '../../components/Cards/CardsCals'
import CardsFats from '../../components/Cards/CardsFats'
import BreakfastLog from '../../components/Log/BreakfastLog'
import LunchLog from '../../components/Log/LunchLog'
import DinnerLog from '../../components/Log/DinnerLog'
import 'react-multi-carousel/lib/styles.css'
import fire from '../../Fire'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}


class Dashboard extends Component {
    state = {
        carbs: 0,
        calories: 0,
        fats: 0,
        protein: 0,
    }

    handleLogout = () => {
        fire.auth().signOut()
    }

    financial = (x) => {
        return Number.parseFloat(x).toFixed(2)
    }


    carbsHandler = (totalCarbs) => {
        this.setState({ carbs: totalCarbs }, () => {
            console.log(this.state)
        })
        console.log(totalCarbs)
    }

    caloriesHandler = (totalCalories) => {
        this.setState({ calories: totalCalories }, () => {
            console.log(this.state)
        })
        console.log(totalCalories)
    }

    fatsHandler = (totalFats) => {
        this.setState({ fats: totalFats }, () => {
            console.log(this.state)
        })
        console.log(totalFats)
    }

    proteinHandler = (totalProtein) => {
        this.setState({ protein: totalProtein }, () => {
            console.log(this.state)
        })
        console.log(totalProtein)
    }

    componentDidMount(res) {
        this.setState({
            carbs: this.state.carbs,
            calories: this.state.calories,
            fats: this.state.fats,
            protein: this.state.protein,
        })
    }


    render() {
        return (
            <div>
                <NavBar handleLogout={this.handleLogout}/>
                <Carousel responsive={responsive}>
                    <CardsCarbs title='Net Carbs' carbs={this.state.carbs.toFixed(1)} />
                    <CardsCals title='Calories' carlories={this.state.calories.toFixed(1)} />
                    <CardsFats title='Fats' fats={this.state.fats.toFixed(1)} />
                </Carousel>
                <BreakfastLog
                    carbsHandler={this.carbsHandler}
                    caloriesHandler={this.caloriesHandler}
                    fatsHandler={this.fatsHandler}
                    proteinHandler={this.proteinHandler} />
                <LunchLog
                    carbsHandler={this.carbsHandler}
                    caloriesHandler={this.caloriesHandler}
                    fatsHandler={this.fatsHandler}
                    proteinHandler={this.proteinHandler} />
                <DinnerLog
                    carbsHandler={this.carbsHandler}
                    caloriesHandler={this.caloriesHandler}
                    fatsHandler={this.fatsHandler}
                    proteinHandler={this.proteinHandler} />
            </div>
        )
    }
}

export default Dashboard
