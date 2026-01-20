import React, { useEffect, useState } from "react";
import "./Header.css";
import profilePic from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import { useRef } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false); // for navbar shrink on scroll
  const typedRef = useRef(null);

  // Highlight active section and shrink navbar on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Highlight section
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });

      // Shrink navbar if scrolled down
      setShrink(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
      "Software Engineering Undergraduate",
      "Frontend Developer",
      "Backend Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });

  return () => typed.destroy();
}, []);


  // Hamburger toggle
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Close menu on link click
  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };


  return (
    <header className="header">
      <nav className={`nav ${shrink ? "nav-shrink" : ""}`}>
  <a href="#home" className={`logo ${activeLink === "home" ? "active" : ""}`}>Sakula Jayarathne</a>

  <div className="nav-right">
    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
      <a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>Home</a>
      <a href="#about" className={activeLink === "about" ? "active" : ""} onClick={() => handleLinkClick("about")}>About</a>
      <a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => handleLinkClick("skills")}>Skills</a>
      <a href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() => handleLinkClick("projects")}>Projects</a>
      <a href="#contact" className={activeLink === "contact" ? "active" : ""} onClick={() => handleLinkClick("contact")}>Contact</a>
    </div>

    {/* Hamburger */}
    <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={handleMenuToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="hero" id="home" data-aos="fade-up">
        <div className="hero-container">
          <div className="intro">
            <p className="greeting">Hello! I'm</p>
            <h1 className="name">Sakula Jayarathne</h1>
            <p className="title">
              <span ref={typedRef} className="typed-text"></span>
            </p>

            <a
              href="/cv.pdf"
              className="cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="profile-image" data-aos="fade-left">
            <div className="profile-circle">
              <img src={profilePic} alt="Sakula Jayarathne" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
