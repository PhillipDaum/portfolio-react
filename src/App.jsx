import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip'

function App() {
  // Skill categories and their contents
  const skills = [
    { category: "Programming Languages", items: ["JavaScript (ES6+)"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML5", "CSS", "RESTful APIs", "Bootstrap", "WordPress"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Terminal/CLI", "Azure", "Generative AI"] },
    { category: "Soft Skills", items: ["Public Speaking", "Teamwork", "Screen Sharing & Remote Collaboration", "Project Management"] },
  ];

  // Project details
  const projects = [
    {
      title: "Focus Fox",
      year: "2024",
      description: "Turns a brain dump into a daily schedule",
      accolades: "Winner, Crowd Favorite, Girl Develop It Hackathon, 2024",
      technologies: "React, JavaScript (ES6+), Google Gemini API, HTML5, CSS, Clerk API, Netlify",
      role: "Lead Developer",
      image: "./src/img/focus-fox.png",
      imageAlt: "App with calm colors, a chatbox and a kanban board",
      demoLink: "https://focus-fox-app.netlify.app/",
      repoLink: "https://github.com/Focus-Fox/focus-fox",
      aboutLink: "https://focus-fox.github.io/focusfoxpresentation/index.html"
    },
    {
      title: "Ice Cream Shop",
      year: "2024",
      description: "App for creating and serving ice cream orders ",
      accolades: "",
      technologies: "React, JavaScript (ES6+), HTML5, CSS",
      role: "",
      image: "./src/img/portfolio-icecream.png", // Works for now
      imageAlt: "ice cream order form with vibrant colors",
      demoLink: "https://ice-cream-order.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/ice-cream-shop",
      aboutLink: ""
    },
    {
      title: "Bento Grid", // old portfolio
      year: "2024",
      description: "Dynamic CSS grid layout with three media queries",
      accolades: "",
      technologies: "React, JavaScript (ES6+), HTML5, CSS", //add
      role: "",
      image: "./src/img/bento-box.png", // fix 
      imageAlt: "App with colorful bento box style layout",
      demoLink: "https://bento-box-grid.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/bento-box", //fix
      aboutLink: ""
    },
    {
      title: "Sun Chase",
      year: "2024",
      description: "Find cities where it is likely to be sunny",
      accolades: "",
      technologies: "JavaScript, Bootstrap, HTML5",
      image: "./src/img/city-picker.png",
      imageAlt: "App with a list of cities sorted by average monthly sunshine hours",
      demoLink: "https://phillipdaum.github.io/sun-chase/",
      repoLink: "https://github.com/PhillipDaum/sun-chase",
      aboutLink: ""
    },
    {
      title: "NASA Picture of the Day",
      year: "2024",
      description: "Displays recent photos from NASA's Astronomy Picture of the Day API",
      technologies: "React, JavaScript (ES6+), NASA APOD API, HTML5, CSS",
      accolades: "",
      role: "",
      image: "./src/img/nasa.png",
      imageAlt: "Basic web app with astronomy photos and descriptions",
      demoLink: "https://lighthearted-taffy-130ff3.netlify.app/", 
      repoLink: "https://github.com/PhillipDaum/nasa-react", 
      aboutLink: ""
    },
    {
      title: "Income Tax Calculator",
      year: "2024",
      description: "Calculates income tax based on data entered",
      accolades: "",
      technologies: "JavaScript, HTML5, CSS",
      image: "./src/img/income-tax.png",
      imageAlt: "A styled form for entering income information and an image of a wallet",
      demoLink: "https://phillipdaum.github.io/salary-calculator/", 
      repoLink: "https://github.com/PhillipDaum/salary-calculator",
      aboutLink: ""
    },
    // {
    //   title: "Old Portfolio",
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
    //   title: "Hurricane Harvey Art",
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

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
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
                <img src={project.image} alt={project.imageAlt} />
                <div className='project-card-about'>
                  <ul className="ul">
                  {project.accolades != "" ? (
                    <li className="project-accolades">{project.accolades}</li>
                  ) : (null)
                }
                    <li className='project-description'>{project.description}</li>
                    <li className='project-technologies'>{project.technologies}</li>
                  </ul>
        
                </div>
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