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
  /// if role, if aboutLink 
  const projects = [
    {
      title: "Focus Fox", // focus fox
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      technologies: "list", //add
      role: "Developer",
      image: "./src/img/portfolio-icecream.png",
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: "https://focus-fox.github.io/focusfoxpresentation/index.html"
    },
    {
      title: "Ice Cream", // bento grid
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-icecream.png",
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: ""
    },
    {
      title: "Ice Cream", // old portfolio
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-icecream.png",
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: ""
    },
    {
      title: "Cannon's Coffee",
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-coffee.png",
      imageAlt: "beautiful coffeeshop website with blue, yellow, green, and white accents.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/",
      repoLink: "https://github.com/PhillipDaum/cannons-coffee",
      aboutLink: ""
    },
    {
      title: "Ice Cream",
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-icecream.png",
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: ""
    },
    {
      title: "Farmer's Market",
      year: "2024",
      // edit all descriptions
      description: "Building on my experience from Cannon's Coffee, I developed this Farmer's Market website based on detailed client-like specifications, adding JavaScript elements, including a responsive hamburger menu.",
      technologies: "list", //add
      image: "./src/img/portfolio-fm.png",
      imageAlt: "farmer's market site featuring images of farm-fresh produce.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", // fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: ""
    },
    {
      title: "City Picker",
      year: "2024", // edit
      // edit all descriptions
      description: "City Picker came to life after I mastered loops. This project helps users find cities with the most sunshine during specific months, offering a practical tool for planning sunny getaways.",
      technologies: "list", //add
      role: "",
      image: "./src/img/city-picker.png",
      imageAlt: "site showing 'when and where is it sunny?' with a form for continent and month, listing cities by sunshine hours.", //edit
      demoLink: "https://phillipdaum.github.io/city-picker/",
      repoLink: "https://github.com/PhillipDaum/city-picker",
      aboutLink: ""
    },
    {
      title: "PhilDaum.art",
      year: "2022", //edit, check
      // edit desc
      description: "After a 6-week course on Bootstrap, I revamped my art portfolio site to showcase my artwork in a clean, modern layout, reflecting my growth as both a developer and an artist.",
      techololgies: "",
      role: "",
      image: "./src/img/portfolio-art.png",
      imageAlt: "Screenshot of a tidy art portfolio site featuring a loud and colorful abstract painting.",
      demoLink: "https://github.com/PhillipDaum/phildaum.art",
      repoLink: "https://www.phildaum.art/",
      aboutLink: ""
    },
    {
      title: "Daily Horoscope",
      year: "2024",
      // edit desc
      description: "While learning to manipulate data objects, I created this Daily Horoscope site to provide users with their daily zodiac predictions in a fun and engaging way.",
      technologies: "",
      role: "",
      image: "./src/img/horoscope.png",
      imageAlt: "Screenshot of a simple website displaying daily horoscopes with a cute purple theme.",
      gitHub: "https://github.com/PhillipDaum/horoscopes",
      gitHubPages: "https://phillipdaum.github.io/horoscopes/",
      aboutLink: ""
    }
    // Add more projects as needed
  ];

  return (
    <div className="app-container">

      <section className="hero-section">
        <h1>Phil Daum</h1>
        <ul className="socials-list">
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faLinkedin} /></a></li>
          {/* ADD LINK TO RESUME */}
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faGithub} /></a></li>
          <li><a href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faFileAlt} /></a></li>
          {/* there isn't a leetcode in FA */}
          {/* <li><a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLeetcode} /> LeetCode</a></li> */}
        </ul>
      </section>

      {/* add dashed line?  */}

      <section className="skills-section">
        <h2>Skills</h2>
        {/* maybe put in a box that looks like a paper */}
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              {/* add extra space between category and list */}
              <h3 className="category-title">{skill.category}:  <span className="skill-items">{skill.items.join(", ")}</span></h3>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-top">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-year">{project.year}</p>
                  {project.role != "" ? (
                    <p>{project.role}</p>
                  ) : (null)
                  }
                </div>
                {/* wrap this in an a tag with a link to live demo */}
                <img src={project.image} alt={project.imageAlt} />
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">technologies: {project.technologies}</p>
                <div className="project-card-links">
                  <a className="project-demo" href={project.demoLink} target="_blank" rel="noopener noreferrer">live demo</a>
                  <a className="project-repo" href={project.repoLink} target="_blank" rel="noopener noreferrer">repository</a>
                  {/* is there a better way to do this without the empty strings? */}
                  {project.aboutLink != "" ? (
                    <a className="project-role" href={project.aboutLink} target="_blank" rel="noopener noreferrer">about</a>
                  ) : (null)
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* maybe additional section: art, hobbies, etc.  */}

    </div>
  );
}

export default App;