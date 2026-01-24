import React, { useState } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { SiC, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

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
        { name: "VS Code", icon: <VscVscode />, level: 80 },
        { name: "Visual Studio", icon: <DiVisualstudio />, level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, level: 50 },
        { name: "Python", icon: <FaPython />, level: 50 },
        { name: "C", icon: <SiC />, level: 60 },
        { name: "C#", icon: <TbBrandCSharp />, level: 60 },
        { name: "PHP", icon: <FaPhp />, level: 50 },
      ],
    },
    {
      title: "Database",
      skills: [{ name: "MySQL", icon: <SiMysql />, level: 70 }],
    },
  ];

  const categories = skillGroups.map((group) => group.title);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default first category

  const filteredSkills = skillGroups.find(
    (group) => group.title === activeCategory
  )?.skills || [];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        {/* Category Buttons */}
        <div className="category-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
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
    </section>
  );
};

export default Skills;
