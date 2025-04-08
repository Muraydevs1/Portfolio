import React from 'react'
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import { prof } from '../assets/assets';
function Header() {
    return (
        <div className='relative min-h-screen '>
            <div className='min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mx-auto'>
            <div className='relative flex justify-center md:justify-center w-full md:w-1/2 px-10'>
            <img className="w-52 h-52 md:w-70 md:h-70 rounded-full border-4 border-gray-600"  src={prof.profilepic} alt="" />
            </div>
            <div className='mt-6 md:mt-0 text-center md:text-justify w-full md:w-1/2 flex flex-col items-center md:items-center'>

                    <h1 className='text-3xl md:text-4xl font-extrabold uppercase tracking-wide'>CHARLES 
                        <br className='md:hidden'/> AMURI</h1>
                    <h2 className='text-lg md:text-xl text-gray-400 font-mono uppercase mt-2'>FRONTEND DEVELOPER</h2>
                
                <div className='flex justify-center md:justify-start gap-6 mt-4'>
                    <a href='https://x.com/shakespoppi' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaXTwitter className='w-5 h-5 md:w-8 md:h-8'/>
                    </a>
                    <a href=' https://www.linkedin.com/in/amuri-rameom' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaLinkedin className='w-5 h-5 md:w-8 md:h-8'/>
                    </a>
                    <a href='https://github.com/Muraydevs1' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaGithub className='w-5 h-5 md:w-8 md:h-8'/>
                    </a>
                </div>
                <p className='mt-6 text-gray-400 text-sm md:text-lg max-w-lg leading-relaxed text-center'>A level 300 computer science student with passion for developing modern react web apps for commercial businesses.</p>
                <a href="https://drive.google.com/file/d/13hWsULFKeEIwW8sw_du3MI2YUiKUiy3x/view?usp=sharing"><button className='mt-6 px-5 py-2 bg-black text-white hover:bg-white hover hover:text-black hover:border hover:border-gray-400  dark:bg-white dark:text-black font-bold rounded-full dark:hover:bg-slate-900 dark:hover:text-white transition-all duration-400 hover:scale-105'>
                   View Resume
                </button></a>
                
            </div>
        </div>
        </div>
        
    )
}

export default Header
