import React from 'react'
import { projects } from '../assets/assets'
import {GrProjects} from "react-icons/gr";

function Projects() {
          return (
            <section id="projects" className="py-1 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">Projects <span className='px-2'><GrProjects /></span></h2>
        
              <div className="max-w-5xl mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="dark:bg-gray-800 p-6 rounded-lg shadow-xl bg-gray-200 transition-all duration-300 hover:cursor-pointer hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <a href={project.link} className="mt-4 inline-block text-blue-400 hover:text-blue-300">
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          
    )
}

export default Projects
