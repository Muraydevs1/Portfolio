import profilepic from './profile_pic_3.jpeg'
import react_logo from './reactlogo.png'
import sql_logo from './sqllogo.png'
import tailwind_logo from './tailwindlogo.png'
import javascript_logo from './javascriptlogo.png'
import realestate from './realest.png'
import geopic from './image-asset.jpeg'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'
import { SiExpress } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiClerk } from "react-icons/si";


export const prof = {
    profilepic,
    realestate,
}

export const projects = [
    {
      id: 1,
      title: "ABOABO",
      description: "A campus focused marketplace designed to help student entrepreneurs at UDS reach more customers through a single digital platform. ABOABO enables verified student sellers to list products and services while allowing buyers to browse, search, and connect securely, reducing reliance on scattered social media sales channels.",
      image: realestate, 
      link: "https://aboabo.vercel.app/",
      stack: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Postgresql', icon: BiLogoPostgresql },
        { name: 'Clerk', icon: SiClerk },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill }
      ]
    },
    {
      id: 2,
      title: "CodeXplain",
      description: "CodeXplain is an AI-powered web application that simplifies complex code by generating clear, beginner-friendly explanations from pasted code snippets. Using OpenAI APIs, it helps developers quickly understand, learn, and share code insights through an intuitive interface.",
      image: null, 
      link: "https://github.com/Muraydevs1/CodeXplainer",
      stack: [
        { name: 'React', icon: FaReact },
        { name: 'Express', icon: SiExpress },
        { name: 'OpenAi', icon: AiFillOpenAI },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill }
      ]
    },
    {
      id: 2,
      title: "GeoSum",
      description: "A Landing Page Site for GeoSum Resources Ltd.",
      image: geopic, 
      link: "https://geosumresources.netlify.app",
      stack: [
        { name: 'React', icon: FaReact },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill }
      ]
    }
  ];

  export const skills = [
    { id: 1, name: "React", icon: react_logo },
    { id: 2, name: "JavaScript", icon: javascript_logo },
    { id: 3, name: "Tailwind CSS", icon: tailwind_logo},
    { id: 4, name: "SQL", icon: sql_logo },
  ];


export const educationData = [
  {
    date: "2022 - Present",
    title: "BSc. Computer Science",
    description: "University for Development Studies (UDS)",
    variant: "default",
  },
  
];

export const achievementData = [
  {
    date: "2021",
    title: "VB.Net Certification",
    description: "CKT-UTAS Bootcamp",
    variant: "secondary",
  },
  
];