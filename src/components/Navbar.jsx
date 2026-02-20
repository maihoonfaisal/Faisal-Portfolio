import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('home')}>
                    <span className="logo-text">Portfolio</span>
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection('skills')}>Skills</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
