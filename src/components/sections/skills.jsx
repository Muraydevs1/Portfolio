import React from "react";
import Marquee from "../ui/marquee";
import { Icons } from "../ui/icons";

function Skills() {

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto ">
      <div>
         {/* Section Header */}
        <p className="text-sm tracking-[0.3em] text-gray-400 mb-6">
          Skills
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Tools I work with.
        </h2>

        <p className="text-gray-400 mb-16">
          A collection of tools i use showcasing my Skills.
        </p>

      </div>
      <div className="max-w-5xl mx-auto">
        <Marquee grayscale={true} speed={24} pauseOnHover={true}>
          <div className="w-28 h-14 flex items-center justify-center">
            <Icons.react style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className="w-28 h-14 flex items-center justify-center">
            <Icons.sql style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className="w-28 h-14 flex items-center justify-center">
            <Icons.tailwind style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className="w-28 h-14 flex items-center justify-center">
            <Icons.javascript style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className="w-28 h-14 flex items-center justify-center">
            <Icons.git style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
