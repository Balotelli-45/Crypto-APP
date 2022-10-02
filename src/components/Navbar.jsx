import React from 'react';
import logo from "../images/Logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className='navbar'>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-button">
                    <p>Market</p>
                    <p>Watchlist</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;  