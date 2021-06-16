import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../assets/images/Logo.png"
import "./NavBar.scss"

function NavBar() {
    return (
        <div>
            <header className="navbar">
                <Link to="/">
                    <img className="navbar__logo" src={Logo} alt="Keto Dash" href="/" />
                </Link>
                <div>
                    <ul className="navbar__links">
                        <li className="navbar__item">Dashboard</li>
                        <li className="navbar__item">Progress</li>
                        <li className="navbar__item">Goals</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default NavBar
