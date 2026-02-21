import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [profileImage] = useState(() => localStorage.getItem('profileImage') || '/profile.jpg');

    const roles = ['Full-Stack Developer', 'Problem Solver', 'Creative Thinker'];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero section">
            <div className="hero-container">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        Hi, I'm <span className="name-highlight">Moh Faisal</span>
                    </h1>
                    <div className="hero-subtitle">
                        <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Passionate about creating beautiful, functional, and user-centered digital experiences.
                        I transform ideas into elegant solutions through clean code and innovative design.
                    </p>
                    <div className="hero-buttons">
                        <a href="#skills" className="btn btn-primary">Skills</a>
                        <a href="#about" className="btn btn-primary">About Me</a>
                        <button className="btn btn-primary" onClick={scrollToContact}>Get In Touch</button>
                    </div>
                </div>

                {/* Profile image — not clickable */}
                <div className="hero-image-container">
                    <div className="hero-image-placeholder">
                        <div className="flip-card-front">
                            <div className="smoke-container">
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                                <div className="smoke-particle"></div>
                            </div>
                            <img
                                src={profileImage}
                                alt="Moh Faisal"
                                className="profile-image"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="default-avatar">MF</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
