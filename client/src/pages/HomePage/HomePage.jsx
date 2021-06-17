import React from 'react'
import Button from "@material-ui/core/Button"
import Header from "../../components/Header/Header"
import "./HomePage.scss"
import Demo from "../../assets/images/demo.png"
import CoupleImage from "../../assets/images/homepageIMG1.png"
import PhoneImage from "../../assets/images/PhoneImage.PNG"

function HomePage() {
    return (
        <div>
            <Header />
            <section className="hero">
                <div className="hero__info">
                    <h1 className="hero__info-text-h1">Your Personalized Keto Dashboard</h1>
                    <h3 className="hero__info-text-h2">Easily manage all of your Keto metrics with our customizable all-in-one solution.</h3>
                    <Button
                        href="#"
                        size="small"
                        variant="contained"
                        color="#default">
                        Start Today!
            </Button>
                </div>
                <div>
                    <img className="hero__image" src={Demo} alt="Demo" />
                </div>
            </section>
            <section className="info-section">
                <div className="info-section__section1">
                    <img className="info-section__coupleimg" src={CoupleImage} alt="Couple"/>
                    <div className="info-section__coupletxt">
                        <h1 className="info-section__coupletxt-h1"> Focus On What Really Matters </h1>
                        <h4> Keto Dash will take care of the dirty stuff so you can focus on what really matters. We will help you:</h4>
                        <ul className="info-section__section1-list">
                            <li className="info-section__section1-list-item"> Track your daily meals </li>
                            <li className="info-section__section1-list-item"> Calculate your macros and net carbs </li>
                            <li className="info-section__section1-list-item"> Keep track of your supplements </li>
                            <li className="info-section__section1-list-item"> Display your intermitted fasting window </li>
                            <li className="info-section__section1-list-item"> And much more </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="info-section__section2">
                    <img className="info-section__phoneimg" src={PhoneImage} alt="Phone"/>
                    <div className="info-section__phonetxt">
                    <h1 className="info-section__phonetxt-h1"> Just The Way You Like It</h1>
                        <h4> Keto Dash is fully customizable and personalized. See only what you need to succeed in your own lifestyle. Personalized metrics such as:</h4>
                        <ul className="info-section__section2-list">
                        <li className="info-section__section2-list-item"> Net Carbs </li>
                            <li className="info-section__section2-list-item"> Nutrition </li>
                            <li className="info-section__section2-list-item"> Supplments </li>
                            <li className="info-section__section2-list-item"> Weight Goals </li>
                            <li className="info-section__section2-list-item"> And much more </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
