import React from 'react'
import Button from "@material-ui/core/Button"
import "./Header.scss"

function Header() {
    return (
        <div>
            <header className = "header">
                <img alt="Keto Dash" />
                <Button
                    href="/dashboard"
                    size="small"
                    variant="contained"
                    color="secondary">
                    Login
            </Button>
                <Button
                    href="#"
                    size="small"
                    variant="contained"
                    color="primary">
                    Sign Up
            </Button>
            </header>
        </div>
    )
}

export default Header
