import React from "react";
import "./Projects.css";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { ref, visible } = useScrollReveal();

  const projects = [
    {
      title: "Hospital Database System",
      description:
        "A relational database system designed using ER diagrams and SQL queries for hospital management.",
      github: "https://github.com/yourusername/hospital-database",
      live: "",
    },
    {
      title: "Music & Entertainment SRS",
      description:
        "Software Requirements Specification document prepared using IEEE standards.",
      github: "https://github.com/yourusername/music-srs",
      live: "",
    },
    {
      title: "React Portfolio",
      description:
        "Personal portfolio website built using React with glassmorphism UI and animations.",
      github: "https://github.com/yourusername/react-portfolio",
      live: "https://your-portfolio-link.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects ${visible ? "show" : ""}`}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
