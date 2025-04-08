import React from 'react'
import { FaSchool } from 'react-icons/fa6'

function Education() {
    return (
    <section id="education" className="py-12 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">Education <span className='px-2'><FaSchool/></span></h2>
      <div className="max-w-4xl mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
         <div className="dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105">
          <h3 className="text-xl font-semibold">Bsc.Computer Science</h3>
          <p className="text-gray-400 mt-2">University for Development Studies-UDS,<br />
           2022 - Present</p>
         </div>

         <div className="dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105">
          <h3 className="text-xl font-semibold">VB.Net Certification</h3>
          <p className="text-gray-400 mt-2">CKT-UTAS Bootcamp, <br />
           2021</p>
         </div>
      </div>
    </section>
    )
}

export default Education
