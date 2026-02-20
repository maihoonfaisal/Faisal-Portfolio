import React from 'react';
import './About.css';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
    const timeline = [
        {
            type: 'Education',
            title: 'Bachelor of Computer Application',
            institution: 'Integral University Lucknow',
            period: '2023 - 2026',
            description: 'Focused on Web Development and Software Development.'
        },
        {
            type: 'Work',
            title: 'Full-Stack Developer',
            institution: 'Future Interns',
            period: '2026 - Present',
            description: 'Building scalable web applications using React, Node.js, and modern technologies.'
        },
        {
            type: 'Education',
            title: 'Bachelor of Computer Applicaion',
            institution: 'Integral University',
            period: '2023 - 2026',
            description: 'I have developed my skills in Full Stack Development.'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text fade-in">
                        <h3>Hello! Faisal's here, a passionate developer</h3>
                        <p>
                            With a strong foundation in both frontend and backend development, I specialize in
                            creating seamless digital experiences that combine aesthetic appeal with robust functionality.
                        </p>
                        <p>
                            My journey in tech started with a curiosity about how things work on the web, which
                            quickly evolved into a passion for building innovative solutions. I believe in writing
                            clean, maintainable code and staying up-to-date with the latest industry trends.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </div>

                    <div className="timeline">
                        <h3 className="timeline-title">My Journey</h3>
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-icon">
                                        {item.type.toLowerCase() === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p className="timeline-institution">{item.institution}</p>
                                    <p className="timeline-period">{item.period}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
