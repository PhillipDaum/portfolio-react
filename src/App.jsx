import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Skill categories and their contents
  const skills = [
    { category: "Programming Languages", items: ["JavaScript"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML", "CSS", "RESTful APIs", "Bootstrap", "WordPress"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Terminal/CLI", "Azure", "Generative AI"] },
    { category: "Soft Skills", items: ["Teamwork", "Screen Sharing & Remote Collaboration", "Project Management"] },
  ];

  // Project details
  const projects = [
    {
      title: "Project One",
      description: "A short description of Project One.",
      projectLink: "https://example.com/project-one",
      repoLink: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "A short description of Project Two.",
      projectLink: "https://example.com/project-two",
      repoLink: "https://github.com/yourusername/project-two"
    },
    // Add more projects as needed
  ];

  return (
    <div className="app-container">
      {/* My Name */}
      <h1 className="header-main">Phil Daum</h1>
      <h2 className="header-sub">Coding The Web</h2>

      {/* Skills */}
      <section className="skills-section">
        <h3 className="section-title">My Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h4 className="category-title">{skill.category}</h4>
              <span className="skill-items">{skill.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="socials-section">
        <h3 className="section-title">Connect with Me</h3>
        <ul className="socials-list">
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://yourresume.com" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
        </ul>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <h3 className="section-title">Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a> | 
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;