import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
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
      <h1 className="header-main">Phil Daum</h1>
      <section className="socials-section">
        <ul className="socials-list">
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileAlt} /></a></li>
            {/* there isn't a leetcode in FA */}
          {/* <li><a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLeetcode} /> LeetCode</a></li> */}
        </ul>
      </section>

      <section className="skills-section">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{skill.category}:</h2>
              <p className="skill-items">{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /></a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;