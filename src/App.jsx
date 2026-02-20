import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            {/* Animated Background */}
            <div className="animated-bg">
                <div className="gradient-blob blob-1"></div>
                <div className="gradient-blob blob-2"></div>
                <div className="gradient-blob blob-3"></div>
            </div>

            {/* Main Content */}
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
