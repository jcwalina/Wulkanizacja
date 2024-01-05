import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "./imgs/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />

            </div>

            <div className="icons">
                <FontAwesomeIcon icon={faPhone} size="l" className="icon" />
                <FontAwesomeIcon icon={faLocationDot} size="l" className="icon" />
                <FontAwesomeIcon icon={faUser} size="l" className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
