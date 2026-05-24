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


export const prof = {
    profilepic,
    realestate,
}

export const projects = [
    {
      id: 1,
      title: "ABOABO",
      description: "A centralised marketplace for student businesses in UDS.",
      image: realestate, 
      link: "https://aboabo.vercel.app/",
      stack: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill }
      ]
    },
    {
      id: 2,
      title: "Geological Engineer Website",
      description: "A Landing Single Page Website.",
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