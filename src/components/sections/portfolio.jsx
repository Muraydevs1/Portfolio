import React from 'react'
import { projects } from '../../assets/assets'
import { FaLink } from "react-icons/fa6";



function Portfolio() {
  return (
     <section className="py-24 px-6" id='projects'>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <p className="font-pixel text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
          PROJECTS
        </p>

        <h2 className=" text-4xl md:text-5xl font-bold mb-6">
          Couple of Projects i Have Done.
        </h2>

        <p className="text-neutral-500 dark:text-neutral-400 mb-16">
          A collection of projects i have worked on.
        </p>

        {/* Project Card */}
        <div className='grid grid-cols-1'>{
            projects.map((project)=>(
             <div key={project.id} className="border border-dashed border-neutral-200 hover:border-neutral-400 dark:border-white/10 dark:hover:border-white/25 rounded-2xl p-6 transition-colors duration-200 mb-4">

          <div className="flex gap-6">

            <span className="font-pixel text-neutral-500 dark:text-neutral-400">{project.id}</span>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-neutral-500 dark:text-neutral-400 mb-2">
                {project.description}
              </p>

              <div className="flex gap-2 items-center flex-wrap">

                {project.stack?.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <span
                      key={`${project.id}-${tech.name}`}
                      className="flex items-center justify-center h-11 w-11 rounded-full text-xl text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors duration-200"
                      title={tech.name}
                      aria-label={tech.name}
                    >
                      {Icon ? <Icon /> : null}
                    </span>
                  )
                })}


                <a
                  href={project.link}
                  className="group relative inline-flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Project"
                >
                  <FaLink className="h-6 w-6 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors duration-200" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-50 dark:bg-white dark:text-neutral-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View Project
                  </span>
                </a>
                    
               

              </div>
            </div>

          </div>

        </div>
        ))}</div>
      </div>
    </section> 
  ) 
}

export default Portfolio
