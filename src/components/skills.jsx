import React from "react";
import {skills } from "../assets/assets";
import {GiSkills} from 'react-icons/gi';

function Skills() {

  return (
    <section id="skills" className="py-12 text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">Skills <span className="px-2"><GiSkills/></span></h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center space-y-3 transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-800">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;