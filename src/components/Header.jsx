import React from "react";
import "./Header.css";
import profilePic from "../assets/profile.png";

const Header = () => {
  return (
    <header className="header" id="home">
      

      <nav className="nav">
        <a href="#" className="logo">Sakula</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>  

      <section className="hero">
        <div className="hero-container">

          <div className="intro">
          <p className="greeting">Hello! I'm</p> 
          <h1 className="name">Sakula Jayarathne</h1>
          <p className="title">Software Development Enthusiast</p>

          <a href="/cv.pdf" className="cv-btn" target="_blank" rel="noopener noreferrer">Download CV</a>
        
          </div>

          <div className="profile-image">
            <div className="profile-circle">
              <img src={profilePic} alt="Sakula Jayarathne"/>
            </div>
          </div>

        </div>
      
      </section>

       
    </header>
  );
};

export default Header;
