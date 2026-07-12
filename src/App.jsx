import React from 'react';
import Header from './components/sections/header';
import Education from './components/sections/education';
import Skills from './components/sections/skills';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Portfolio from './components/sections/portfolio';
import TextType from './components/effects/TextType';

function App() {
    return (
        <div className="min-h-screen">
            <Navbar/>
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
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            />
            <Footer/>
        </div>
    );
}

export default App;
