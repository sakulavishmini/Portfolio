import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Software Engineering (Honours)",
      institute: "Open University of Sri Lanka",
      duration: "2023 – Present",
      details: [
        "Web Technologies (React, PHP, CodeIgniter)",
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering & SRS Documentation",
      ],
    },
    {
      title: "Diploma in Information Technology",
      institute: "Esoft Metro Campus",
      duration: "2023 – 2024",
      details: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "HTML & Database Basics",
        "C# Fundamentals",
      ],
    },
    {
      title: "Diploma in English",
      institute: "Esoft Metro Campus",
      duration: "2023 – 2024",
      details: [
        "Improved communication, reading, writing, and presentation skills",
      ],
    },
    {
      title: "Diploma in Psychology and Counselling",
      institute: "SITC Campus",
      duration: "2023",
      details: [
        "Basic psychology concepts, human behavior, and counselling techniques",
      ],
    },
    {
      title: "G.C.E. Advanced Level (Physical Science)",
      institute: "Princess of Wales’ College",
      duration: "2022",
      details: [
        "Completed Advanced Level studies in the Physical Science stream",
      ],
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <span className="timeline-date">{edu.duration}</span>
              <p className="institute">{edu.institute}</p>

              <ul>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
