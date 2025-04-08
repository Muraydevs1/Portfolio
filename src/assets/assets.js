import profilepic from './profile_pic_3.jpeg'
import react_logo from './reactlogo.png'
import sql_logo from './sqllogo.png'
import tailwind_logo from './tailwindlogo.png'
import javascript_logo from './javascriptlogo.png'
import realestate from './realest.png'
import geopic from './image-asset.jpeg'


export const prof = {
    profilepic,
    realestate,
}

export const projects = [
    {
      id: 1,
      title: "Real Estate Website",
      description: "A modern real estate website built with React and Tailwind CSS.",
      image: realestate, 
      link: "https://v5hqp79n-5176.uks1.devtunnels.ms/",
    },
    {
        id: 2,
      title: "Geological Engineer Website",
      description: "A Landing Single Page Website.",
      image: geopic, 
      link: "https://geosumresources.netlify.app",
    }
  ];

  export const skills = [
    { id: 1, name: "React", icon: react_logo },
    { id: 2, name: "JavaScript", icon: javascript_logo },
    { id: 3, name: "Tailwind CSS", icon: tailwind_logo},
    { id: 4, name: "SQL", icon: sql_logo },
  ];
