import React from 'react'
import Button from "@material-ui/core/Button"
import Header from "../../components/Header/Header"
import "./HomePage.scss"
import Demo from "../../assets/demo.png"
import CoupleImage from "../../assets/homepageIMG1.png"
import PhoneImage from "../../assets/PhoneImage.PNG"

function HomePage() {
    return (
        <div>
            <Header />
            <section className="hero">
                <div className="hero__info">
                    <h1>Your Personalized Keto Dashboard</h1>
                    <h3>Easily manage all of your Keto metrics with our customizable solution</h3>
                    <Button
                        href="#"
                        size="small"
                        variant="contained"
                        color="primary">
                        Start Today!
            </Button>
                </div>
                <div>
                    <img className="hero__image" src={Demo} />
                </div>
            </section>
            <section>
                <img src={CoupleImage} />
                <div>
                    <h1> Focus On What Really Matters </h1>
                    <h4> Keto Dash will take care of the dirty stuff so you can focus on what really matters. We will help you:</h4>
                    <ul>
                        <li> Track your daily meals </li>
                        <li> Calculate your macros and net carbs </li>
                        <li> Keep track of your supplements </li>
                        <li> Display your intermitted fasting window </li>
                        <li> And much more </li>
                    </ul>
                </div>
            </section>
            <section>
                <img src={PhoneImage} />
                <div>
                    <h1> Just The Way You Like It</h1>
                    <h4> Keto Dash is fully customizable and personalized. See only what you need to succeed in your own lifestyle. Personalized metrics such as:</h4>
                    <ul>
                        <li> Net Carbs </li>
                        <li> Nutrition </li>
                        <li> Supplments </li>
                        <li> Weight Goals </li>
                        <li> And much more </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default HomePage
