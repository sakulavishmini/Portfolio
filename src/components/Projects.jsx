import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { ref, visible } = useScrollReveal();

  // State
  const [activeIndex, setActiveIndex] = useState(null); // modal
  const [closing, setClosing] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Projects data
  const projects = [
    {
      title: "React Portfolio",
      description:
        "Personal portfolio website built using React with glassmorphism UI and animations.",
      tools: ["React", "CSS", "JavaScript"],
      github: "https://github.com/sakulavishmini/Portfolio",
      liveDemos: ["https://sakulajayarathne.vercel.app/"],
      images: ["/portfolio.png"],
      category: "Frontend",
    },
    {
      title: "Library Master",
      description:
        "C# desktop application for managing library operations efficiently.",
      tools: ["C#", ".NET", "SQL"],
      github: "https://github.com/sakulavishmini/Library-Master",
      liveDemos: [],
      images: ["/library_master.png"],
      category: "Backend",
    },
    {
      title: "GN Quick Check",
      description:
        "Digital platform for checking Grama Niladhari availability and required documentation.",
      tools: ["Figma", "UX/UI Design"],
      github: "https://github.com/sakulavishmini/GN-QuickCheck",
      liveDemos: [
        "https://www.figma.com/proto/UANxAXZjce7K53h5paMu2C",
        "https://www.figma.com/proto/0M1Cxo4gHu21dAd2I2ux6e",
      ],
      images: ["/gn_quickcheck.png"],
      category: "UX/UI Design",
    },
    {
      title: "Hospital Database System",
      description:
        "A relational database system designed using ER diagrams and SQL queries for hospital management.",
      tools: ["MySQL", "SQL", "ERD"],
      github: "https://github.com/sakulavishmini/Hospital-Database",
      liveDemos: [],
      images: ["/hospital_database.png"],
      category: "Database",
    },
    {
      title: "Music & Entertainment SRS",
      description:
        "Software Requirements Specification document prepared using IEEE standards.",
      tools: [],
      github: "https://github.com/sakulavishmini/Music-Entertainment-SRS",
      liveDemos: [],
      images: ["/music_srs.png"],
      category: "Others",
    },
  ];

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Modal close
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveIndex(null);
      setClosing(false);
    }, 250);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % filteredProjects.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, filteredProjects.length]);

  // Swipe handling
  const handleTouchEnd = (e) => {
    if (activeIndex === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) setActiveIndex((i) => (i + 1) % filteredProjects.length);
      else setActiveIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
      return;
    }

    if (dy > 80) closeModal(); // swipe down to close
  };

  const categories = ["All", "Frontend", "Backend", "Fullstack", "Database", "UX/UI Design", "Others"];

  return (
    <section id="projects" ref={ref} className={`projects ${visible ? "show" : ""}`}>
      <h2 className="section-title">Projects</h2>

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.images[0]}
              alt={project.title}
              className="project-image"
              onClick={() => setActiveIndex(index)}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tools-used">Tools: {project.tools.join(", ")}</p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveDemos &&
                project.liveDemos.map((demo, i) => (
                  <a key={i} href={demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
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
              src={filteredProjects[activeIndex].images[0]}
              alt={filteredProjects[activeIndex].title}
            />
            <p className="image-caption">{filteredProjects[activeIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
