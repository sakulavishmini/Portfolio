import React, { useState } from "react";
import "./Projects.css";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { ref, visible } = useScrollReveal();
  const [zoomImage, setZoomImage] = useState(null);

  const projects = [
    {
      title: "Hospital Database System",
      description:
        "A relational database system designed using ER diagrams and SQL queries for hospital management.",
      github: "https://github.com/sakulavishmini/Hospital-Database",
      image: "/hospital_database.png",
    },
    {
      title: "Music & Entertainment SRS",
      description:
        "Software Requirements Specification document prepared using IEEE standards.",
      github: "https://github.com/sakulavishmini/Music-Entertainment-SRS",
      image: "/music_srs.png",
    },
    {
      title: "React Portfolio",
      description:
        "Personal portfolio website built using React with glassmorphism UI and animations.",
      github: "https://github.com/sakulavishmini/Portfolio",
      live: "https://sakulajayarathne.vercel.app/",
      image: "/portfolio.png",
    },
    {
      title: "Library Master",
      description:
        "The Library Management System is a C# desktop application designed to efficiently manage library operations.",
      github: "https://github.com/sakulavishmini/Library-Master",
      image: "/library_master.png",
    },
    {
      title: "GN Quick Check",
      description:
        "A Mindful Digital Platform for Checking Grama Niladhari Availability and Required Documentation",
      github: "https://github.com/sakulavishmini/GN-QuickCheck/tree/main",
      liveDemos: [
        {
          label: "Mobile design",
          url: "https://www.figma.com/proto/UANxAXZjce7K53h5paMu2C",
        },
        {
          label: "Web design",
          url: "https://www.figma.com/proto/0M1Cxo4gHu21dAd2I2ux6e",
        },
      ],
      image: "/gn_quickcheck.png",
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
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onClick={() => setZoomImage(project.image)}
              />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}

              {project.liveDemos &&
                project.liveDemos.map((demo, i) => (
                  <a key={i} href={demo.url} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> {demo.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE ZOOM MODAL */}
      {zoomImage && (
        <div className="image-modal" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoomed project" />
          <span className="close-btn">&times;</span>
        </div>
      )}
    </section>
  );
};

export default Projects;
