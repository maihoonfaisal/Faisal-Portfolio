import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-cards">
                    {/* Email — clickable, opens Gmail compose */}
                    <a
                        href="mailto:mohd.anas115000@gmail.com"
                        className="info-card info-card--link"
                        title="Send me an email"
                    >
                        <div className="info-icon"><FaEnvelope /></div>
                        <h3>Email</h3>
                        <p>mohd.anas115000@gmail.com</p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+916391843139"
                        className="info-card info-card--link"
                        title="Call me"
                    >
                        <div className="info-icon"><FaPhone /></div>
                        <h3>Phone</h3>
                        <p>+91 6391843139</p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/moh-faisal-977731324"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-card info-card--link"
                        title="View LinkedIn profile"
                    >
                        <div className="info-icon info-icon--linkedin"><FaLinkedin /></div>
                        <h3>LinkedIn</h3>
                        <p>Moh Faisal</p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/maihoonfaisal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-card info-card--link"
                        title="View GitHub profile"
                    >
                        <div className="info-icon info-icon--github"><FaGithub /></div>
                        <h3>GitHub</h3>
                        <p>maihoonfaisal</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
