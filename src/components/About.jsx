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

        <p>
          I am a frontend developer passionate about building modern and
          responsive web applications using React.
        </p>

        <p>
          I enjoy creating clean user interfaces and continuously improving my
          skills in web development.
        </p>
      </div>
    </section>
  );
};

export default About;
