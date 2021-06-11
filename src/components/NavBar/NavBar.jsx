import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from "../../assets/images/Logo.png"
import "./NavBar.scss"

function NavBar() {
    return (
        <div>
            <header className="navbar">
                <img className="navbar__logo" src={Logo} alt="Keto Dash" href="/" />
                <div>
                    <ul>
                        <li>Dashboard</li>
                        <li>Progress</li>
                        <li>Goals</li>
                    </ul>
                </div>
                <AccountCircleIcon />
            </header>
        </div>
    )
}

export default NavBar
