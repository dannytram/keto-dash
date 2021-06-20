import React from 'react'
import Button from "@material-ui/core/Button"
import Logo from "../../assets/images/Logo.png"
import "./Header.scss"

function Header() {
    return (
        <div>
            <header className="header">
                <img className="header__logo" src={Logo} alt="Keto Dash" href ="/" />
                <div>
                    <Button
                        href="/login"
                        size="small"
                        variant="text"
                        color="default">
                        Login
            </Button>
                    <Button
                        href="#"
                        size="small"
                        variant="contained"
                        color="default">
                        Sign Up
            </Button>
                </div>
            </header>
        </div>
    )
}

export default Header
