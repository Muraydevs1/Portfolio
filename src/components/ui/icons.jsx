import React from "react";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

export const Icons = {
  react: (props) => <FaReact {...props} />,
  sql: (props) => <SiMysql {...props} />,
  tailwind: (props) => <SiTailwindcss {...props} />,
  javascript: (props) => <SiJavascript {...props} />,
  git: (props) => <FaGitAlt {...props} />,
};
