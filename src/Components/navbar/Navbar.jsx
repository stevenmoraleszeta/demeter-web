import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/">Demeter</Link>
                </li>
                <li>
                    <Link to="/demeter-demo" target="_blank" rel="noopener noreferrer">Demo Web</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
