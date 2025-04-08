import React, { useState, useEffect } from 'react';
import Darkmode from './components/darkmode';
import Header from './components/header';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import Contact from './components/contact';



function App() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <div className={`min-h-screen ${dark ? 'dark' : ''}`}>
            <Darkmode  dark={dark} setDark={setDark}/>
            <Header/>
            <Education/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;