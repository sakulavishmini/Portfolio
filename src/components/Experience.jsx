import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Assistant Teacher & IT Office Assistant</h3>
          <p className="experience-place">Sevana Special School</p>
          <span className="experience-duration">2023 – Present</span>

          <ul>
            <li>Handled school IT systems and routine administrative tasks</li>
            <li>Taught basic IT and computer skills to students</li>
            <li>Maintained digital records and documentation</li>
            <li>Provided technical support and troubleshooting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
