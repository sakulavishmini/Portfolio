import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Skills = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="skills" ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      <h2>Skills</h2>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React.js</li>
        <li>PHP & CodeIgniter</li>
        <li>MySQL</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Skills;
