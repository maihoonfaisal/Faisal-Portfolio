import React from 'react';
import './Skills.css';
import {
    FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker,
    FaHtml5, FaCss3Alt, FaJs, FaAws,
    FaJava
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiRedux, SiPostgresql, SiCplusplus
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3Alt /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Java', icon: <FaJava /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'C++', icon: <SiCplusplus /> },
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'REST APIs', icon: <FaDatabase /> },
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills &amp; Expertise</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card fade-in">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-chips">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-chip">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
