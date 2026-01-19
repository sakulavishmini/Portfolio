import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const About = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="about" ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      <h2>About Me</h2>
      <p>
        I am a frontend developer passionate about building modern and responsive web applications using React.
      </p>
    </section>
  );
};

export default About;
