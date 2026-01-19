import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Projects = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="projects" ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      <h2>Projects</h2>
      <ul>
        <li>School Management System (React + Backend)</li>
        <li>Travel Agency Website</li>
        <li>Music & Entertainment Management System</li>
        <li>Personal Portfolio Website</li>
      </ul>
    </section>
  );
};

export default Projects;
