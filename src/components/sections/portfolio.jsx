import React from 'react'
import { projects } from '../../assets/assets'
import { Globe } from 'lucide-react'


function Portfolio() {
  return (
     <section className="py-24 px-6" id='projects'>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <p className="text-sm tracking-[0.3em] text-gray-400 mb-6">
          PROJECTS
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Couple of Projects i Have Done.
        </h2>

        <p className="text-gray-400 mb-16">
          A collection of projects showcasing Frontend Skills.
        </p>

        {/* Project Card */}
        <div className='grid grid-cols-1'>{
            projects.map((project)=>(
             <div key={project.id} className="border border-gray-800 rounded-2xl p-10 hover:border-gray-600 transition mb-6">

          <div className="flex gap-6">

            <span className="text-gray-500">{project.id}</span>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex gap-2 items-center flex-wrap">

                {project.stack?.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <span
                      key={`${project.id}-${tech.name}`}
                      className="flex items-center justify-center h-11 w-11 rounded-full text-xl text-gray-400 hover:text-white transition-colors"
                      title={tech.name}
                      aria-label={tech.name}
                    >
                      {Icon ? <Icon /> : null}
                    </span>
                  )
                })}


                <a
                  href={project.link}
                  className="group relative inline-flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Project"
                >
                  <Globe className="h-6 w-6" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
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
