import React from 'react'
import {FaXTwitter} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import { prof } from '../../assets/assets';
import { FaDiscord } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
function Header() {
    return (
        <div className='relative min-h-screen'>
            <div className='min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-10'>
            <div className='relative flex justify-center w-full md:w-1/2'>
            <img className="w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-gray-600 object-cover"  src={prof.profilepic} alt="Charles Amuri profile" />
            </div>
            <div className='mt-2 md:mt-0 text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start'>

                    <h1 className='text-3xl md:text-4xl font-extrabold uppercase tracking-wide'>CHARLES 
                        <br className='md:hidden'/> AMURI</h1>
                    <h2 className='text-lg md:text-xl text-gray-400 font-mono uppercase mt-2'>WEB DEVELOPER</h2>
                
                <div className='flex justify-center md:justify-start gap-6 mt-4'>
                    <a href='https://x.com/shakespoppi' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaXTwitter className='w-5 h-5 md:w-6 md:h-6 dark:text-neutral-500 dark:hover:text-white text-gray-400 hover:text-gray-800'/>
                    </a>
                    <a href='https://github.com/Muraydevs1' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaGithub className='w-5 h-5 md:w-6 md:h-6 dark:text-neutral-500 dark:hover:text-white text-gray-400 hover:text-gray-800'/>
                    </a>
                    <a href='https://discord.com/users/1350273264966176831' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <FaDiscord className='w-5 h-5 md:w-6 md:h-6 dark:text-neutral-500 dark:hover:text-white text-gray-400 hover:text-gray-800'/>
                    </a>
                     <a href='mailto:amuricharlesrameom@gmail.com' className='transition-transform transform hover:cursor-pointer hover:scale-110'>
                        <BiLogoGmail className='w-5 h-5 md:w-6 md:h-6 dark:text-neutral-500 dark:hover:text-white text-gray-400 hover:text-gray-800'/>
                    </a>
                </div>
                <p className='mt-6 text-gray-400 text-sm md:text-lg max-w-lg leading-relaxed text-center md:text-left'>
                    A level 400 computer science student with passion for developing modern web applications for commercial businesses.</p>
                <a href="https://drive.google.com/file/d/1ZotPiVVfNfwPJUnV1kO2HUcxWS_v1U1H/view?usp=sharing"><button className='mt-6 px-5 py-2 bg-black text-white hover:bg-white hover hover:text-black hover:border hover:border-gray-400  dark:bg-white dark:text-black font-bold rounded-full dark:hover:bg-slate-900 dark:hover:text-white transition-all duration-400 hover:scale-105'>
                   View Resume
                </button></a>
                
            </div>
        </div>
        </div>
        
    )
}

export default Header
