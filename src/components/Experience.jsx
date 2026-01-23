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
            <li>Assisted in teaching ICT (Grades 6–11) and English to primary students in accordance with the school curriculum.</li>
            <li>Supported students with physical and/or mental challenges through adaptive and inclusive teaching methods.</li>
            <li>Assisted the School Principal with administrative tasks, including preparation of official documents.</li>
            <li>Provided IT support and technical assistance to ensure smooth school operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
