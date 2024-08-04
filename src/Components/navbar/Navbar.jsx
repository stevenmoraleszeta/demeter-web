import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/">Deméter</Link>
                </li>
                <li>
                    <Link to="/demeter">Prototipo Deméter</Link>
                </li>
                <li>
                    <Link to="/canvas">Modelo Canvas</Link>
                </li>
                <li>
                    <Link to="/profile">Quién soy</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
