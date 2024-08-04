import React from 'react';
import '../../App.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Deméter - Todos los derechos reservados - Steven Morales Fallas</p>
        </footer>
    )
}

export default Footer;