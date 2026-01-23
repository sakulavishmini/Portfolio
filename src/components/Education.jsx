import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        <div className="education-card">
          <h3>Bachelor of Software Engineering (Honours)</h3>
          <p className="institute">
            Open University of Sri Lanka
          </p>
          <span className="duration">2023 – Present</span>

          <ul>
            <li>Web Technologies (React, PHP, CodeIgniter)</li>
            <li>Data Structures & Algorithms</li>
            <li>Database Systems</li>
            <li>Software Engineering & SRS Documentation</li>
          </ul>
        </div>

        <div className="education-card">
          <h3>Diploma in Information Technology</h3>
          <p className="institute">
            Esoft Metro Campus
          </p>
          <span className="duration">Completed (2023 - 2024) </span>

          <ul>
            <li>Microsoft Word</li>
            <li>Microsoft Excel</li>
            <li>Microsoft Powerpoint</li>
            <li>Microsoft HTML</li>
            <li>Microsoft Database</li>
            <li>Microsoft C#</li>
          </ul>
        </div>

        <div className="education-card">
          <h3>Diploma in English </h3>
          <p className="institute">
            Esoft Metro Campus
          </p>
          <span className="duration">Completed (2023 - 2024) </span>
          <p>Enhanced English language proficiency with a focus on communication, reading, writing, and presentation skills, supporting effective interaction in academic and professional environments.</p>
        </div>

        <div className="education-card">
          <h3>Diploma in Psychology and Counselling</h3>
          <p className="institute">
            SITC Campus
          </p>
          <span className="duration">Completed (2023) </span>
          <p>Studied basic psychological concepts, human behavior, and counselling techniques, developing empathy, communication skills, and the ability to work effectively with diverse individuals.</p>
        </div>

        <div className="education-card">
          <h3>G.C.E. Advanced Level</h3>
          <p className="institute">
            Princess of Wales’ College
          </p>
          <span className="duration">Completed (2022)</span>
          <p>Completed Advanced Level studies in the Physical Science stream, building a strong foundation in logical thinking, analytical skills, and problem-solving.</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
