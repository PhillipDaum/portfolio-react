import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip'

function App() {
  // Skill categories and their contents
  const skills = [
    { category: "Programming Languages", items: ["JavaScript"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML", "CSS", "RESTful APIs", "Bootstrap", "WordPress"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Terminal/CLI", "Azure", "Generative AI"] },
    { category: "Soft Skills", items: ["Public Speaking", "Teamwork", "Screen Sharing & Remote Collaboration", "Project Management"] },
  ];

  // Project details
  /// if role, if aboutLink 
  // Focus Fox, Ice Cream Shop, Bento Box, Salary Calculator
  // a NASA one? two?
  // then the old one for more stuff. 
  const projects = [
    {
      title: "Focus Fox", 
      year: "2024",
      description: "Turns a brain dump into a daily schedule",
      accolades: "Winner, Crowd Favorite, Girl Develop It Hackathon, 2024",
      technologies: "React, Google Gemini API",
      role: "Lead Developer",
      image: "./src/img/portfolio-icecream.png", // add
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://focus-fox-app.netlify.app/", //fix
      repoLink: "https://github.com/Focus-Fox/focus-fox",
      aboutLink: "https://focus-fox.github.io/focusfoxpresentation/index.html"
    },
    {
      title: "Ice Cream Shop", 
      year: "2024",
      description: "A short description of Project One.",
      accolades: "",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-icecream.png",
      imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
      repoLink: "https://github.com/PhillipDaum/", //fix
      aboutLink: ""
    },
    {
      title: "Bento Grid", // old portfolio
      year: "2024",
      // edit all descriptions
      description: "A short description of Project One.",
      accolades: "",
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
      accolades: "",
      technologies: "list", //add
      role: "",
      image: "./src/img/portfolio-coffee.png",
      imageAlt: "beautiful coffeeshop website with blue, yellow, green, and white accents.",
      demoLink: "https://phillipdaum.github.io/cannons-coffee/",
      repoLink: "https://github.com/PhillipDaum/cannons-coffee",
      aboutLink: ""
    },
    // {
    //   title: "Ice Cream",
    //   year: "2024",
    //   // edit all descriptions
    //   description: "A short description of Project One.",
    //   technologies: "list", //add
    //   accolades: "",
    //   role: "",
    //   image: "./src/img/portfolio-icecream.png",
    //   imageAlt: "whimsical and accessible ice cream order form with vibrant colors.",
    //   demoLink: "https://phillipdaum.github.io/cannons-coffee/", //fix
    //   repoLink: "https://github.com/PhillipDaum/", //fix
    //   aboutLink: ""
    // },
    // {
    //   title: "Farmer's Market",
    //   year: "2024",
    //   // edit all descriptions
    //   description: "Building on my experience from Cannon's Coffee, I developed this Farmer's Market website based on detailed client-like specifications, adding JavaScript elements, including a responsive hamburger menu.",
    //   accolades: "",
    //   technologies: "list", //add
    //   image: "./src/img/portfolio-fm.png",
    //   imageAlt: "farmer's market site featuring images of farm-fresh produce.",
    //   demoLink: "https://phillipdaum.github.io/cannons-coffee/", // fix
    //   repoLink: "https://github.com/PhillipDaum/", //fix
    //   aboutLink: ""
    // },
    // {
    //   title: "City Picker",
    //   year: "2024", // edit
    //   // edit all descriptions
    //   description: "City Picker came to life after I mastered loops. This project helps users find cities with the most sunshine during specific months, offering a practical tool for planning sunny getaways.",
    //   accolades: "",
    //   technologies: "list", //add
    //   role: "",
    //   image: "./src/img/city-picker.png",
    //   imageAlt: "site showing 'when and where is it sunny?' with a form for continent and month, listing cities by sunshine hours.", //edit
    //   demoLink: "https://phillipdaum.github.io/city-picker/",
    //   repoLink: "https://github.com/PhillipDaum/city-picker",
    //   aboutLink: ""
    // },
    // {
    //   title: "PhilDaum.art",
    //   year: "2022", //edit, check
    //   // edit desc
    //   description: "After a 6-week course on Bootstrap, I revamped my art portfolio site to showcase my artwork in a clean, modern layout, reflecting my growth as both a developer and an artist.",
    //   techololgies: "",
    //   accolades: "",
    //   role: "",
    //   image: "./src/img/portfolio-art.png",
    //   imageAlt: "Screenshot of a tidy art portfolio site featuring a loud and colorful abstract painting.",
    //   demoLink: "https://github.com/PhillipDaum/phildaum.art",
    //   repoLink: "https://www.phildaum.art/",
    //   aboutLink: ""
    // },
    // {
    //   title: "Daily Horoscope",
    //   year: "2024",
    //   // edit desc
    //   description: "While learning to manipulate data objects, I created this Daily Horoscope site to provide users with their daily zodiac predictions in a fun and engaging way.",
    //   technologies: "",
    //   accolades: "",
    //   role: "",
    //   image: "./src/img/horoscope.png",
    //   imageAlt: "Screenshot of a simple website displaying daily horoscopes with a cute purple theme.",
    //   gitHub: "https://github.com/PhillipDaum/horoscopes",
    //   gitHubPages: "https://phillipdaum.github.io/horoscopes/",
    //   aboutLink: ""
    // }
    // Add more projects as needed
  ];

  return (
    <div className="app-container">

      <section className="hero-section">
        <h1>Phil Daum</h1>
        <ul className="socials-list">
          <li><a className="linkedin-anchor" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faLinkedin} /></a></li>
          {/* ADD LINK TO RESUME */}
          <li><a className="github-anchor" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faGithub} /></a></li>
            {/* how do I do this in React? */}
          <li><a className="resume-anchor" href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-icon-large" icon={faFileAlt} /></a></li>
        </ul>
        <Tooltip anchorSelect=".linkedin-anchor" place="bottom">
          LinkedIn
        </Tooltip>
        <Tooltip anchorSelect=".github-anchor" place="bottom">
          GitHub
        </Tooltip>
        <Tooltip anchorSelect=".resume-anchor" place="bottom">
          Resume
        </Tooltip>
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

      {/* add space or divider between section */}

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
      {/* footer? */}

    </div>
  );
}

export default App;