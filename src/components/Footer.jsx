import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p className="footer-description">
                            Building amazing digital experiences with passion and precision.
                        </p>
                        {/* <div className="footer-social">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <FaTwitter />
                            </a>
                            <a href="mailto:your.email@example.com" className="footer-social-icon">
                                <FaEnvelope />
                            </a>
                        </div> */}
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                            <li><a onClick={() => scrollToSection('about')}>About</a></li>
                            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                            {/* <li><a onClick={() => scrollToSection('projects')}>Projects</a></li> */}
                            <li><a onClick={() => scrollToSection('contact')}>Get in touch</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Web Development</a></li>
                            {/* <li><a href="#">UI/UX Design</a></li> */}
                            <li><a href="#">Responsive Design</a></li>
                            {/* <li><a href="#">API Development</a></li> */}
                            {/* <li><a href="#">Consultation</a></li> */}
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
