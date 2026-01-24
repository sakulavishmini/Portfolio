import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { ref, visible } = useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(null);
  const [closing, setClosing] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const lastDistance = useRef(null);
  const scale = useRef(1);
  const imgRef = useRef(null);

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
        "C# desktop application for managing library operations.",
      github: "https://github.com/sakulavishmini/Library-Master",
      image: "/library_master.png",
    },
    {
      title: "GN Quick Check",
      description:
        "Digital platform for checking Grama Niladhari availability.",
      github: "https://github.com/sakulavishmini/GN-QuickCheck",
      image: "/gn_quickcheck.png",
    },
  ];

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveIndex(null);
      setClosing(false);
      scale.current = 1;
    }, 250);
  };

  /* ESC + Arrow Keys */
  useEffect(() => {
    const handler = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % projects.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex]);

  /* Pinch to zoom */
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (lastDistance.current) {
        scale.current += (distance - lastDistance.current) * 0.005;
        scale.current = Math.min(Math.max(scale.current, 1), 3);
        imgRef.current.style.transform = `scale(${scale.current})`;
      }
      lastDistance.current = distance;
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects ${visible ? "show" : ""}`}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img
              src={p.image}
              alt={p.title}
              className="project-image"
              onClick={() => setActiveIndex(i)}
            />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div
          className={`image-modal ${closing ? "closing" : ""}`}
          onClick={closeModal}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            lastDistance.current = null;
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            const dy = e.changedTouches[0].clientY - touchStartY.current;

            if (Math.abs(dx) > 60) {
              setActiveIndex((i) =>
                dx < 0
                  ? (i + 1) % projects.length
                  : (i - 1 + projects.length) % projects.length
              );
            }

            if (dy > 80) closeModal();
          }}
        >
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>

            <img
              ref={imgRef}
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
            />
            <p className="image-caption">
              {projects[activeIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
