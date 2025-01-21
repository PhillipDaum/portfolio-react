import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

// add indentation to skills if they are on a second line.

function App() {
  // Skill categories and their contents
  const skills = [
    { category: "Programming Languages", items: ["JavaScript (ES6+)"] },
    {
      category: "Web Technologies",
      items: [
        "React",
        "Vite",
        "Node.js",
        "HTML5",
        "CSS",
        "RESTful APIs",
        "Chakra UI",
        "Bootstrap",
        "WordPress",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Terminal/CLI",
        "Microsoft Azure",
        "Generative AI",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Public Speaking",
        "Education",
        "Teamwork",
        "Screen Sharing & Remote Collaboration",
        "Project Management",
      ],
    },
  ];

  // Project details
  const projects = [
    {
      title: "Where in the World?",
      year: "2025",
      description: "Search and filter the countries of the world",
      accolades: "",
      technologies:
        "React, JavaScript (ES6+), Chakra UI, REST Countries API, Netlify",
      role: "",
      image: "./img/world-countries.png",
      imageAlt: "App with calm colors, a chatbox and a kanban board",
      demoLink: "https://delightful-otter-718495.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/countries-api-project",
      aboutLink: "",
    },
    {
      title: "Focus Fox",
      year: "2024",
      description: "Turns a brain dump into a daily schedule",
      accolades: "Winner, Girl Develop It Hackathon 2024",
      technologies:
        "React, JavaScript (ES6+), Google Gemini API, HTML5, CSS, Clerk API, Netlify",
      role: "Lead Developer",
      image: "./img/focus-fox.png",
      imageAlt: "App with calm colors, a chatbox and a kanban board",
      demoLink: "https://focus-fox-app.netlify.app/",
      repoLink: "https://github.com/Focus-Fox/focus-fox",
      aboutLink: "https://focus-fox.github.io/focusfoxpresentation/index.html",
    },
    {
      title: "Ice Cream Shop",
      year: "2024",
      description: "App for creating and serving ice cream orders",
      accolades: "",
      technologies: "React, JavaScript (ES6+), HTML5, CSS",
      role: "",
      image: "./img/portfolio-icecream.png", // Works for now
      imageAlt: "ice cream order form with vibrant colors",
      demoLink: "https://ice-cream-order.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/ice-cream-shop",
      aboutLink: "",
    },
    {
      title: "Bento Grid",
      description: "Dynamic CSS grid layout with three media queries",
      accolades: "",
      technologies: "React, JavaScript (ES6+), HTML5, CSS",
      role: "",
      image: "./img/bento-box.png",
      imageAlt: "App with colorful bento box style layout",
      demoLink: "https://bento-box-grid.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/bento-box",
      aboutLink: "",
    },
    {
      title: "Sun Chase",
      year: "2024",
      description: "Find cities where it is likely to be sunny",
      accolades: "",
      technologies: "JavaScript, Bootstrap, HTML5",
      image: "./img/city-picker.png",
      imageAlt:
        "App with a list of cities sorted by average monthly sunshine hours",
      demoLink: "https://phillipdaum.github.io/sun-chase/",
      repoLink: "https://github.com/PhillipDaum/sun-chase",
      aboutLink: "",
    },
    {
      title: "NASA Picture of the Day",
      year: "2024",
      description:
        "Displays recent photos from NASA's Astronomy Picture of the Day API",
      technologies: "React, JavaScript (ES6+), NASA APOD API, HTML5, CSS",
      accolades: "",
      role: "",
      image: "./img/nasa.png",
      imageAlt: "Basic web app with astronomy photos and descriptions",
      demoLink: "https://lighthearted-taffy-130ff3.netlify.app/",
      repoLink: "https://github.com/PhillipDaum/nasa-react",
      aboutLink: "",
    },
    {
      title: "Income Tax Calculator",
      year: "2024",
      description: "Calculates income tax based on data entered",
      accolades: "",
      technologies: "JavaScript, HTML5, CSS",
      image: "./img/income-tax.png",
      imageAlt:
        "A styled form for entering income information and an image of a wallet",
      demoLink: "https://phillipdaum.github.io/salary-calculator/",
      repoLink: "https://github.com/PhillipDaum/salary-calculator",
      aboutLink: "",
    },
    {
      title: "Old Portfolio",
      year: "2024",
      description: "Older portfolio site with even more projects",
      accolades: "",
      technologies: "Vanilla JavaScript, HTML5, CSS",
      role: "",
      image: "./img/old-portfolio.png",
      imageAlt: "",
      demoLink: "https://phillipdaum.github.io/phil-the-homepage/",
      repoLink: "https://github.com/PhillipDaum/phil-the-homepage",
      aboutLink: "",
    },
    {
      title: "PhilDaum.art",
      year: "2023",
      description: "Responsive art portfolio site",
      technologies: "Bootstrap, HTML5, Vanilla JavaScript",
      accolades: "",
      role: "",
      image: "./img/art-portfolio.png",
      imageAlt:
        "Screenshot of a tidy art portfolio site featuring a loud and colorful abstract painting.",
      demoLink: "https://www.phildaum.art/",
      repoLink: "https://github.com/PhillipDaum/phildaum.art",
      aboutLink: "",
    },
    {
      title: "Hurricane Harvey Art",
      year: "2017",
      description: "Fundraiser with e-commerce website and fulfillment center",
      technologies: "WordPress, Shopify, Paypal API ",
      accolades: "",
      role: "",
      image: "./img/kid-art.jpg",
      imageAlt: "Child's drawing of a hurricane",
      demoLink: "",
      repoLink: "",
      aboutLink:
        "https://blogs.houstonisd.org/news/2017/09/28/hurricane-art-by-hisd-students-on-sale-to-raise-money-for-hurricane-relief/",
    },
  ];

  return (
    <div className="app-container">
      <section className="hero-section">
        <h1>Phil Daum</h1>
        <ul className="socials-list">
          <li>
            <a
              className="linkedin-anchor"
              href="https://www.linkedin.com/in/daumphil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="fa-icon-large" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              className="github-anchor"
              href="https://github.com/PhillipDaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="fa-icon-large" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              className="resume-anchor"
              href="/Phil-Daum_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="fa-icon-large" icon={faFileAlt} />
            </a>
          </li>
          <li>
            <a
              className="leetcode-anchor"
              href="https://leetcode.com/u/phillipdaum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 32 32"
              >
                <path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"/>
              </svg>
            </a>
          </li>
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
        <Tooltip anchorSelect=".leetcode-anchor" place="bottom">
          LeetCode
        </Tooltip>
        <div className="about-me">
          <h2>Art Teacher</h2> <p className="arrow">→</p> <h2>Developer</h2>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                {skill.category}:{" "}
                <span className="skill-items">{skill.items.join(", ")}</span>
              </h3>
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
                  {project.role != "" ? <p>{project.role}</p> : null}
                </div>
                <img src={project.image} alt={project.imageAlt} />
                <div className="project-card-about">
                  <ul className="ul">
                    {project.accolades != "" ? (
                      <li className="project-accolades">{project.accolades}</li>
                    ) : null}
                    <li className="project-description">
                      {project.description}
                    </li>
                    <li className="project-technologies">
                      {project.technologies}
                    </li>
                  </ul>
                </div>
                <div className="project-card-links">
                  {/* Is there a better way to accomplish this? */}
                  {project.demoLink != "" ? (
                    <a
                      className="project-role"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      live demo
                    </a>
                  ) : null}
                  {project.repoLink != "" ? (
                    <a
                      className="project-role"
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      repository
                    </a>
                  ) : null}
                  {project.aboutLink != "" ? (
                    <a
                      className="project-role"
                      href={project.aboutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      about
                    </a>
                  ) : null}
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
