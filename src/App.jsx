import React, { useState, useEffect } from 'react';
import Header from './components/sections/header';
import Education from './components/sections/education';
import Skills from './components/sections/skills';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Portfolio from './components/sections/portfolio';
import TextType from './components/effects/TextType';





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
            <Navbar  dark={dark} setDark={setDark}/>
            <Header/>
            <Education/>
            <Portfolio/>
            <Skills/>
            <TextType className='flex items-center justify-center'
            text={["THE BLOG IS COMING SOON", "STAY TUNED"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            />
            <Footer/>
        </div>
    );
}

export default App;
