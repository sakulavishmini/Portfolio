import React from "react";
import "./Skills.css";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub,} from "react-icons/fa";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 75 },
        { name: "React", icon: <FaReact />, level: 70 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub />, level: 80 },
        { name: "VS Code", icon: <FaGithub />, level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        {skillGroups.map((group, index) => (
          <div className="skill-group" key={index}>
            <h3 className="group-title">{group.title}</h3>

            <div className="skills-grid">
              {group.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>

                  {/* Skill level bar */}
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <span className="skill-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
