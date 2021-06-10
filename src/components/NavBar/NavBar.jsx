import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function NavBar() {
    return (
        <div>
            <header>
            <h1>KETO DASH</h1>
            <div>
                <ul>
                    <li>Dashboard</li>
                    <li>Progress</li>
                    <li>Goals</li>
                </ul>
            </div>
            <AccountCircleIcon/>
            </header>
        </div>
    )
}

export default NavBar
