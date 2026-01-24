import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { ref, visible } = useScrollReveal();

  // store the index of the active project
  const [activeIndex, setActiveIndex] = useState(null);
  const [closing, setClosing] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

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
        { label: "Mobile design", url: "https://www.figma.com/proto/UANxAXZjce7K53h5paMu2C" },
        { label: "Web design", url: "https://www.figma.com/proto/0M1Cxo4gHu21dAd2I2ux6e" },
      ],
      image: "/gn_quickcheck.png",
    },
  ];

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveIndex(null);
      setClosing(false);
    }, 250);
  };

  // ESC + Arrow navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % projects.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, projects.length]);

  // Handle horizontal swipe
  const handleTouchEnd = (e) => {
    if (!activeIndex && activeIndex !== 0) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // horizontal swipe left/right
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) setActiveIndex((i) => (i + 1) % projects.length); // swipe left → next
      else setActiveIndex((i) => (i - 1 + projects.length) % projects.length); // swipe right → prev
      return;
    }

    // vertical swipe down → close
    if (dy > 80) closeModal();
  };

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
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onClick={() => setActiveIndex(index)}
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

      {activeIndex !== null && (
        <div
          className={`image-modal ${closing ? "closing" : ""}`}
          onClick={closeModal}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
            />
            <p className="image-caption">{projects[activeIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
