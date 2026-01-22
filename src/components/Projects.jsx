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
      github: "https://github.com/sakulavishmini/Hospital-Database",
      live: "",
    },
    {
      title: "Music & Entertainment SRS",
      description:
        "Software Requirements Specification document prepared using IEEE standards.",
      github: "https://github.com/sakulavishmini/Music-Entertainment-SRS",
      live: "",
    },
    {
      title: "React Portfolio",
      description:
        "Personal portfolio website built using React with glassmorphism UI and animations.",
      github: "https://github.com/sakulavishmini/Portfolio",
      live: "https://sakulajayarathne.vercel.app/",
    },
    {
      title: "Library Master",
      description:
        "The Library Management System is a C# desktop application designed to efficiently manage library operations.",
      github: "https://github.com/sakulavishmini/Library-Master",
      live: "",
    },
    {
      title: "GN Quick Check",
      description:
        "A Mindful Digital Platform for Checking Grama Niladhari Availability and Required Documentation",
      github: "https://github.com/sakulavishmini/GN-QuickCheck/tree/main",
      liveDemos: [
        {
          label: "Mobile design link",
          url: "https://www.figma.com/proto/UANxAXZjce7K53h5paMu2C/EEI4361---GN_Quickcheck--Phone-?node-id=2-7&t=lqJ9iNeOyIXFHZFW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        },
        {
          label: "Web design link",
          url: "https://www.figma.com/proto/0M1Cxo4gHu21dAd2I2ux6e/EEI4361---GN_Quickcheck--Web-?node-id=8-4&p=f&t=kaHrMCk7rmkLLLlS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        },
      ]
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
