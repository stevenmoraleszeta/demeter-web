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
                    <Link to="/demeter">Demo Demeter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
