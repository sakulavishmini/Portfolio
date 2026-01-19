import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Contact = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="contact" ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      <h2>Contact</h2>
      <p>Email: your-email@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourprofile</p>
    </section>
  );
};

export default Contact;
