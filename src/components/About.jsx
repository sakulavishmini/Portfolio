import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./About.css";

const About = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`about fade-section ${isVisible ? "visible" : ""}`}
    >
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
        I am a motivated Software Engineering undergraduate with a strong passion
        for software development and technology innovation. I enjoy building
        modern, responsive, and user-friendly applications while continuously
        improving my technical and problem-solving skills.
        
        <br /><br />
        
        I am currently seeking a <strong>Software Engineering internship</strong>{" "}
        where I can gain hands-on industry experience, apply my knowledge in
        real-world projects, and collaborate with professionals to create
        impactful and meaningful solutions. I am eager to learn new technologies,
        take on challenges, and grow as a future software engineer.
      </p>
      </div>
    </section>
  );
};

export default About;
